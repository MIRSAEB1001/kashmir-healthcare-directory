const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const facilitiesData = [
    {
        name: "SKIMS Medical College & Hospital",
        type: "hospital",
        city: "Srinagar",
        address: "Soura, Srinagar, J&K 190011",
        phone: "+911942401013",
        specialties: ["Multi-specialty", "Tertiary Care", "Emergency 24/7"],
        mapsUrl: "https://maps.google.com/?q=SKIMS+Medical+College+Srinagar",
        openTime: "00:00",
        closeTime: "23:59",
        workingDays: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        name: "SMHS Hospital",
        type: "hospital",
        city: "Srinagar",
        address: "Kaka Sarai, Karan Nagar, Srinagar, J&K 190010",
        phone: "+911942504818",
        specialties: ["Multi-specialty", "Teaching Hospital", "Emergency 24/7"],
        mapsUrl: "https://maps.google.com/?q=SMHS+Hospital+Srinagar",
        openTime: "00:00",
        closeTime: "23:59",
        workingDays: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        name: "Lal Ded Maternity Hospital",
        type: "hospital",
        city: "Srinagar",
        address: "Wazir Bagh, Srinagar, J&K 190008",
        phone: "+911942312674",
        specialties: ["Maternity", "Gynecology", "Emergency 24/7"],
        mapsUrl: "https://maps.google.com/?q=Lal+Ded+Maternity+Hospital+Srinagar",
        openTime: "00:00",
        closeTime: "23:59",
        workingDays: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        name: "Dr. Ruksana B. Rah - Ladies Care Clinic",
        type: "gynecologist",
        city: "Srinagar",
        address: "Main Plaza, Bemina, Srinagar",
        phone: "+919419000001",
        specialties: ["Obstetrics", "Gynecology", "Infertility Specialist"],
        mapsUrl: "https://maps.google.com/?q=Bemina+Srinagar",
        openTime: "10:00",
        closeTime: "16:00",
        workingDays: [1, 2, 3, 4, 5, 6]
    },
    {
        name: "Dr. S. M. Qadri - Kids Care",
        type: "pediatrician",
        city: "Srinagar",
        address: "Dr. Ali Jan Complex, MA Road, Srinagar",
        phone: "+919419000004",
        specialties: ["Pediatrics", "Neonatology", "Immunizations"],
        mapsUrl: "https://maps.google.com/?q=MA+Road+Srinagar",
        openTime: "15:00",
        closeTime: "20:00",
        workingDays: [1, 2, 3, 4, 5, 6]
    }
];

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

async function seedDB() {
    try {
        console.log("Connecting to SQLite...");

        // Open DB
        const db = await open({
            filename: './kashmir_health.db',
            driver: sqlite3.Database
        });

        // Create table
        await db.exec(createTableQuery);
        console.log("Facilities table created or already exists.");

        // Clear existing data for a clean seed
        await db.exec('DELETE FROM facilities');
        // Reset auto-increment
        await db.exec('DELETE FROM sqlite_sequence WHERE name="facilities"');

        // Insert mock data
        for (const fac of facilitiesData) {
            await db.run(insertQuery, [
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

        console.log(`Successfully seeded ${facilitiesData.length} facilities into the SQLite database.`);

        await db.close();
    } catch (error) {
        console.error("Error seeding database:", error);
    }
}

seedDB();
