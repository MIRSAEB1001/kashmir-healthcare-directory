const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const { faker } = require('@faker-js/faker');

const CITIES = ['Srinagar', 'Anantnag', 'Baramulla', 'Pulwama', 'Kupwara', 'Bandipora', 'Ganderbal', 'Shopian', 'Kulgam', 'Budgam', 'Sopore', 'Tral', 'Handwara', 'Pampore', 'Pattan'];
const SPECIALTIES = ['Cardiologist', 'Pediatrician', 'Gynecologist', 'Orthopedic', 'General Physician', 'Dentist', 'Dermatologist', 'Neurologist', 'Psychiatrist', 'Eye Specialist', 'ENT Specialist'];
const TYPES = ['clinic', 'hospital', 'doctor', 'gynecologist', 'pediatrician'];

const firstNames = ['Tariq', 'Bilal', 'Ruksana', 'Asiya', 'Bashir', 'Mushtaq', 'Nighat', 'Fayaz', 'Sajad', 'Manzoor', 'Fouzia', 'Shazia', 'Zahoor', 'Irfan', 'Javed', 'Mohammad', 'Hafiz', 'Aijaz', 'Rouf', 'Yasmeen', 'Gulzar', 'Imtiyaz'];
const lastNames = ['Ahmad', 'Bhat', 'Dar', 'Lone', 'Mir', 'Shah', 'Wani', 'Malik', 'Reshi', 'Rather', 'Khan', 'Sheikh', 'Naqash', 'Qadri', 'Zargar', 'Kanth', 'Sofi'];
const clinicSuffixes = ['Care', 'Clinic', 'Health Center', 'Medical Center', 'Nursing Home', 'Diagnostics', 'Polyclinic'];

function generateMockData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        const type = TYPES[Math.floor(Math.random() * TYPES.length)];
        const city = CITIES[Math.floor(Math.random() * CITIES.length)];
        let specialty = SPECIALTIES[Math.floor(Math.random() * SPECIALTIES.length)];

        if (type === 'gynecologist') specialty = 'Gynecologist';
        if (type === 'pediatrician') specialty = 'Pediatrician';

        let name = '';
        if (type === 'doctor' || type === 'gynecologist' || type === 'pediatrician') {
            const fname = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lname = lastNames[Math.floor(Math.random() * lastNames.length)];
            name = `Dr. ${fname} ${lname}`;
        } else if (type === 'clinic') {
            const lname = lastNames[Math.floor(Math.random() * lastNames.length)];
            const suffix = clinicSuffixes[Math.floor(Math.random() * clinicSuffixes.length)];
            name = `${lname} ${suffix}`;
        } else {
            const lname = lastNames[Math.floor(Math.random() * lastNames.length)];
            name = `${lname} Super Specialty Hospital`;
        }

        const address = `${faker.location.streetAddress()}, ${city}, J&K`;
        const phone = `+91 ${faker.string.numeric(10)}`;

        // Schedules
        const openH = faker.number.int({ min: 8, max: 11 }).toString().padStart(2, '0');
        const closeH = faker.number.int({ min: 16, max: 21 }).toString().padStart(2, '0');

        const openTime = type === 'hospital' ? '00:00' : `${openH}:00`;
        const closeTime = type === 'hospital' ? '23:59' : `${closeH}:00`;
        const workingDays = type === 'hospital' ? [0, 1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5, 6];

        data.push({
            name,
            type,
            city,
            address,
            phone,
            specialties: [specialty],
            mapsUrl: `https://maps.google.com/?q=${encodeURIComponent(name + ' ' + city)}`,
            openTime,
            closeTime,
            workingDays
        });
    }
    return data;
}

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS facilities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    city TEXT NOT NULL,
    address TEXT,
    phone TEXT,
    specialties TEXT,
    mapsUrl TEXT,
    openTime TEXT,
    closeTime TEXT,
    workingDays TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;

const insertQuery = `
  INSERT INTO facilities (name, type, city, address, phone, specialties, mapsUrl, openTime, closeTime, workingDays)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

async function bulkSeed() {
    try {
        console.log("Connecting to SQLite...");
        const db = await open({
            filename: './kashmir_health.db',
            driver: sqlite3.Database
        });

        await db.exec(createTableQuery);

        console.log("Generating 10,000 records using localized data and Faker... Please wait.");
        // Generate exactly 10,000
        const facilitiesData = generateMockData(10000);

        console.log("Inserting 10,000 records into the database... This will take a moment.");

        // Clear the DB first or just add 10,000 to the existing 5? We will add 10,000 to the existing 5.

        // Use transaction to drastically speed up SQLite insertion
        await db.exec('BEGIN TRANSACTION');

        const stmt = await db.prepare(insertQuery);
        for (const fac of facilitiesData) {
            await stmt.run([
                fac.name,
                fac.type,
                fac.city,
                fac.address,
                fac.phone,
                JSON.stringify(fac.specialties),
                fac.mapsUrl,
                fac.openTime,
                fac.closeTime,
                JSON.stringify(fac.workingDays)
            ]);
        }
        await stmt.finalize();
        await db.exec('COMMIT');

        console.log(`Successfully seeded ${facilitiesData.length} new facilities into the SQLite database! Total records now exceed 10,000.`);
        await db.close();
    } catch (error) {
        console.error("Error seeding database:", error);
    }
}

bulkSeed();
