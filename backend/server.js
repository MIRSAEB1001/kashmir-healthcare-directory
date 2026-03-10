const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
let db;
(async () => {
    try {
        db = await open({
            filename: './kashmir_health.db',
            driver: sqlite3.Database
        });
        console.log('Connected to SQLite database successfully!');
    } catch (err) {
        console.error('Database connection error:', err);
    }
})();

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'live', message: 'Kashmir Health Directory API is running on SQLite.' });
});

// 1. Search Facilities
app.get('/api/search', async (req, res) => {
    const { query, city, specialty } = req.query;
    try {
        let sql = 'SELECT * FROM facilities WHERE 1=1';
        const params = [];

        if (query) {
            sql += ` AND (name LIKE ? OR specialties LIKE ?)`;
            params.push(`%${query}%`, `%${query}%`);
        }

        if (city && city !== 'all') {
            sql += ` AND city LIKE ?`;
            params.push(`%${city}%`);
        }

        if (specialty && specialty !== 'all') {
            sql += ` AND type = ?`;
            params.push(specialty);
        }

        const result = await db.all(sql, params);

        // Parse JSON strings back to arrays/objects for the frontend
        const parsedResults = result.map(row => ({
            ...row,
            specialties: JSON.parse(row.specialties || '[]'),
            workingDays: JSON.parse(row.workingDays || '[]')
        }));

        res.json(parsedResults);
    } catch (err) {
        console.error(err);
        res.status(500).json([]);
    }
});

// 2. Get specific facility
app.get('/api/clinic/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.get('SELECT * FROM facilities WHERE id = ?', [id]);
        if (result) {
            result.specialties = JSON.parse(result.specialties || '[]');
            result.workingDays = JSON.parse(result.workingDays || '[]');
            res.json(result);
        } else {
            res.status(404).json({ error: 'Facility not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend API Server running on port ${PORT}`);
});
