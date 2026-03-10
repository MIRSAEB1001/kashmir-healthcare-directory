// Data Layer
// Exhaustive mock database of hospitals, gynecologists, pediatricians across Kashmir
const facilitiesData = [
    // --- HOSPITALS (Srinagar) ---
    {
        id: "H001",
        name: "SKIMS Medical College & Hospital",
        type: "hospital",
        typeLabel: "Hospital",
        city: "Srinagar",
        address: "Soura, Srinagar, J&K 190011",
        phone: "+911942401013",
        specialties: ["Multi-specialty", "Tertiary Care", "Emergency 24/7"],
        mapsUrl: "https://maps.google.com/?q=SKIMS+Medical+College+Srinagar",
        schedule: {
            days: [1, 2, 3, 4, 5, 6, 0], // Every day
            openTime: "00:00", // 24/7
            closeTime: "23:59"
        }
    },
    {
        id: "H002",
        name: "SMHS Hospital",
        type: "hospital",
        typeLabel: "Hospital",
        city: "Srinagar",
        address: "Kaka Sarai, Karan Nagar, Srinagar, J&K 190010",
        phone: "+911942504818",
        specialties: ["Multi-specialty", "Teaching Hospital", "Emergency 24/7"],
        mapsUrl: "https://maps.google.com/?q=SMHS+Hospital+Srinagar",
        schedule: {
            days: [1, 2, 3, 4, 5, 6, 0], 
            openTime: "00:00",
            closeTime: "23:59"
        }
    },
    {
        id: "H003",
        name: "Lal Ded Maternity Hospital",
        type: "hospital",
        typeLabel: "Govt Hospital",
        city: "Srinagar",
        address: "Wazir Bagh, Srinagar, J&K 190008",
        phone: "+911942312674",
        specialties: ["Maternity", "Gynecology", "Emergency 24/7"],
        mapsUrl: "https://maps.google.com/?q=Lal+Ded+Maternity+Hospital+Srinagar",
        schedule: {
            days: [1, 2, 3, 4, 5, 6, 0], 
            openTime: "00:00",
            closeTime: "23:59"
        }
    },
    // --- PRIVATE CLINICS / GYNECOLOGISTS (Srinagar) ---
    {
        id: "G001",
        name: "Dr. Ruksana B. Rah - Ladies Care Clinic",
        type: "gynecologist",
        typeLabel: "Gynecologist",
        city: "Srinagar",
        address: "Main Plaza, Bemina, Srinagar",
        phone: "+919419000001",
        specialties: ["Obstetrics", "Gynecology", "Infertility Specialist"],
        mapsUrl: "https://maps.google.com/?q=Bemina+Srinagar",
        schedule: {
            days: [1, 2, 3, 4, 5, 6], // Mon-Sat
            openTime: "10:00", // 10 AM
            closeTime: "16:00" // 4 PM
        }
    },
    {
        id: "G002",
        name: "Dr. Nighat Ara - Women's Health Clinic",
        type: "gynecologist",
        typeLabel: "Gynecologist",
        city: "Srinagar",
        address: "Hyderpora Chowk, Srinagar",
        phone: "+919419000002",
        specialties: ["Gynecology", "Laparoscopic Surgeon", "IVF"],
        mapsUrl: "https://maps.google.com/?q=Hyderpora+Srinagar",
        schedule: {
            days: [1, 2, 4, 5], // Mon, Tue, Thu, Fri
            openTime: "14:00", // 2 PM
            closeTime: "19:00" // 7 PM
        }
    },
    {
        id: "C001",
        name: "City Maternity Centre",
        type: "clinic",
        typeLabel: "Private Clinic",
        city: "Srinagar",
        address: "Residency Road, Srinagar",
        phone: "+919419000003",
        specialties: ["Maternity", "Neonatal Care", "Ultrasound"],
        mapsUrl: "https://maps.google.com/?q=Residency+Road+Srinagar",
        schedule: {
            days: [1, 2, 3, 4, 5, 6],
            openTime: "09:00", 
            closeTime: "20:00"
        }
    },
    // --- PRIVATE CLINICS / PEDIATRICIANS (Srinagar) ---
    {
        id: "P001",
        name: "Dr. S. M. Qadri - Kids Care",
        type: "pediatrician",
        typeLabel: "Pediatrician",
        city: "Srinagar",
        address: "Dr. Ali Jan Complex, MA Road, Srinagar",
        phone: "+919419000004",
        specialties: ["Pediatrics", "Neonatology", "Immunizations"],
        mapsUrl: "https://maps.google.com/?q=MA+Road+Srinagar",
        schedule: {
            days: [1, 2, 3, 4, 5, 6],
            openTime: "15:00", // 3 PM
            closeTime: "20:00" // 8 PM
        }
    },
    {
        id: "P002",
        name: "Dr. M. S. Khan - Newborn & Child Care",
        type: "pediatrician",
        typeLabel: "Pediatrician",
        city: "Srinagar",
        address: "Sanat Nagar By-pass, Srinagar",
        phone: "+919419000005",
        specialties: ["Pediatrics", "Diet Planning"],
        mapsUrl: "https://maps.google.com/?q=Sanat+Nagar+Srinagar",
        schedule: {
            days: [1, 2, 3, 5, 6],
            openTime: "10:00",
            closeTime: "17:00"
        }
    },
    
    // --- HOSPITALS / CLINICS (Anantnag) ---
    {
        id: "H004",
        name: "Government Medical College Hospital Anantnag",
        type: "hospital",
        typeLabel: "Hospital",
        city: "Anantnag",
        address: "Janglat Mandi, Anantnag, J&K 192101",
        phone: "+911932222300",
        specialties: ["Multi-specialty", "Emergency"],
        mapsUrl: "https://maps.google.com/?q=GMC+Anantnag",
        schedule: {
            days: [1, 2, 3, 4, 5, 6, 0],
            openTime: "00:00",
            closeTime: "23:59"
        }
    },
    {
        id: "G003",
        name: "Dr. Shahnaz Akhtar Clinic",
        type: "gynecologist",
        typeLabel: "Gynecologist",
        city: "Anantnag",
        address: "KP Road, Near Bus Stand, Anantnag",
        phone: "+919419000006",
        specialties: ["Women's Health", "Pregnancy Care"],
        mapsUrl: "https://maps.google.com/?q=KP+Road+Anantnag",
        schedule: {
            days: [1, 2, 3, 4, 6],
            openTime: "10:30",
            closeTime: "16:30"
        }
    },
    {
        id: "P003",
        name: "Dr. Mushtaq Ahmad - Little Hearts",
        type: "pediatrician",
        typeLabel: "Pediatrician",
        city: "Anantnag",
        address: "Nai Basti, Anantnag",
        phone: "+919419000007",
        specialties: ["Child Specialist"],
        mapsUrl: "https://maps.google.com/?q=Nai+Basti+Anantnag",
        schedule: {
            days: [1, 2, 3, 4, 5, 6],
            openTime: "09:00",
            closeTime: "14:00"
        }
    },

    // --- HOSPITALS / CLINICS (Baramulla / Sopore) ---
    {
        id: "H005",
        name: "District Hospital Baramulla",
        type: "hospital",
        typeLabel: "Hospital",
        city: "Baramulla",
        address: "Kant Bagh, Baramulla",
        phone: "+911952234500",
        specialties: ["Trauma Care", "General Surgery"],
        mapsUrl: "https://maps.google.com/?q=District+Hospital+Baramulla",
        schedule: {
            days: [1, 2, 3, 4, 5, 6, 0],
            openTime: "00:00",
            closeTime: "23:59"
        }
    },
    {
        id: "G004",
        name: "Dr. Yasmeen Raja - Royal Gynae Centre",
        type: "gynecologist",
        typeLabel: "Gynecologist",
        city: "Sopore",
        address: "Iqbal Market, Sopore",
        phone: "+919419000008",
        specialties: ["Obstetrics"],
        mapsUrl: "https://maps.google.com/?q=Sopore+Kashmir",
        schedule: {
            days: [1, 2, 3, 5, 6],
            openTime: "11:00",
            closeTime: "15:00"
        }
    },
    {
        id: "P004",
        name: "Dr. Fayaz Ahmad - Sopore Child Care",
        type: "pediatrician",
        typeLabel: "Pediatrician",
        city: "Sopore",
        address: "Main Chowk, Sopore",
        phone: "+919419000009",
        specialties: ["Infant Care", "Vaccination"],
        mapsUrl: "https://maps.google.com/?q=Sopore+Kashmir",
        schedule: {
            days: [1, 2, 4, 5, 6],
            openTime: "16:00",
            closeTime: "20:00"
        }
    },
    
    // --- HOSPITALS (Pulwama) ---
    {
        id: "H006",
        name: "District Hospital Pulwama",
        type: "hospital",
        typeLabel: "Hospital",
        city: "Pulwama",
        address: "Wasura Main Road, Pulwama",
        phone: "+911933241221",
        specialties: ["General Medicine", "Emergency"],
        mapsUrl: "https://maps.google.com/?q=District+Hospital+Pulwama",
        schedule: {
            days: [1, 2, 3, 4, 5, 6, 0],
            openTime: "00:00",
            closeTime: "23:59"
        }
    }
];

// App State
let currentFacilities = [...facilitiesData];

// Logic to parse "HH:MM" strictly and compare
function checkIsOpen(schedule) {
    const now = new Date();
    // Use the local time of system (IST) via standard DOM
    const currentDay = now.getDay(); // 0(Sun) - 6(Sat)
    
    if (!schedule.days.includes(currentDay)) return false;

    // Time logic
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const currentTimeMinutes = (currentHour * 60) + currentMin;

    const [openH, openM] = schedule.openTime.split(':').map(Number);
    const [closeH, closeM] = schedule.closeTime.split(':').map(Number);
    
    const openMinutes = (openH * 60) + openM;
    const closeMinutes = (closeH * 60) + closeM;

    // Handle normal case like 09:00 to 17:00
    if (closeMinutes >= openMinutes) {
        return currentTimeMinutes >= openMinutes && currentTimeMinutes <= closeMinutes;
    } else {
        // Handle overnight case (e.g. 20:00 to 06:00 next day)
        // Though none in DB are overnight currently except 24/7 (00:00 to 23:59)
        return currentTimeMinutes >= openMinutes || currentTimeMinutes <= closeMinutes;
    }
}

// Convert 24h schedule strings to readable AM/PM format
function formatScheduleText(schedule) {
    if (schedule.openTime === "00:00" && schedule.closeTime === "23:59") return "24/7 Open";

    const formatTime = (timeStr) => {
        let [h, m] = timeStr.split(':').map(Number);
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        return `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
    };

    return `${formatTime(schedule.openTime)} - ${formatTime(schedule.closeTime)}`;
}

// Render the grid
function renderFacilities(facilities) {
    const grid = document.getElementById('results-grid');
    const noResults = document.getElementById('no-results');
    const countText = document.getElementById('results-count');
    
    grid.innerHTML = '';
    countText.textContent = `Found ${facilities.length} result${facilities.length !== 1 ? 's' : ''}`;

    if (facilities.length === 0) {
        grid.style.display = 'none';
        noResults.classList.remove('hidden');
        return;
    }

    grid.style.display = 'grid';
    noResults.classList.add('hidden');

    facilities.forEach(fac => {
        const isOpen = checkIsOpen(fac.schedule);
        const statusHtml = isOpen 
            ? `<div class="status-badge open"><i class="fa-solid fa-clock-rotate-left"></i> Open Now</div>`
            : `<div class="status-badge closed"><i class="fa-solid fa-moon"></i> Closed</div>`;

        const specialtiesHtml = fac.specialties
            .map(s => `<span class="specialty-tag">${s}</span>`)
            .join('');

        const card = document.createElement('div');
        // Type injects border colors properly
        card.className = `facility-card ${fac.type}`;
        card.innerHTML = `
            <div class="card-header">
                <span class="facility-type-badge ${fac.type}">${fac.typeLabel}</span>
                ${statusHtml}
            </div>
            
            <h4 class="card-title">${fac.name}</h4>
            
            <div class="specialty-list">
                ${specialtiesHtml}
            </div>
            
            <div class="card-info">
                <div class="info-row">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                        <strong>Address</strong>
                        <span>${fac.address}</span>
                    </div>
                </div>
                <div class="info-row">
                    <i class="fa-regular fa-calendar-days"></i>
                    <div>
                        <strong>Schedule Hours</strong>
                        <span>${formatScheduleText(fac.schedule)}</span>
                    </div>
                </div>
            </div>
            
            <div class="card-actions">
                <a href="${fac.mapsUrl}" target="_blank" class="action-btn map-btn">
                    <i class="fa-solid fa-map-location-dot"></i> Get Directions
                </a>
                <a href="tel:${fac.phone}" class="action-btn call-btn">
                    <i class="fa-solid fa-phone"></i> Call Now
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Logic
function applyFilters() {
    const searchStr = document.getElementById('search-input').value.toLowerCase().trim();
    const cityVal = document.getElementById('city-filter').value.toLowerCase();
    const typeVal = document.getElementById('specialty-filter').value.toLowerCase();
    const statusVal = document.getElementById('status-filter').value.toLowerCase();

    const filtered = facilitiesData.filter(fac => {
        // Search Match (Check name, city, and specialties)
        const matchesSearch = !searchStr 
            || fac.name.toLowerCase().includes(searchStr)
            || fac.city.toLowerCase().includes(searchStr)
            || fac.specialties.some(s => s.toLowerCase().includes(searchStr));

        const matchesCity = cityVal === 'all' || fac.city.toLowerCase() === cityVal;
        
        // Match Type
        const matchesType = typeVal === 'all' || fac.type === typeVal;

        // Match Open/Closed Status
        let matchesStatus = true;
        if (statusVal === 'open') {
            matchesStatus = checkIsOpen(fac.schedule);
        }

        return matchesSearch && matchesCity && matchesType && matchesStatus;
    });

    currentFacilities = filtered;
    renderFacilities(currentFacilities);
}

// Event Listeners Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Current Year Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Render Initial State
    renderFacilities(facilitiesData);

    // Form Submission (prevent reload)
    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault();
        applyFilters();
    });

    // Real-time Search Input filtering 
    document.getElementById('search-input').addEventListener('input', applyFilters);

    // Dropdown filters
    document.getElementById('city-filter').addEventListener('change', applyFilters);
    document.getElementById('specialty-filter').addEventListener('change', applyFilters);
    document.getElementById('status-filter').addEventListener('change', applyFilters);

    // Quick Option Tags
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterType = e.target.getAttribute('data-filter');
            // reset UI state
            document.getElementById('search-input').value = '';
            document.getElementById('city-filter').value = 'all';
            document.getElementById('status-filter').value = 'all';
            
            document.getElementById('specialty-filter').value = filterType;
            applyFilters();
            
            // Scroll down
            document.getElementById('directory').scrollIntoView({behavior: 'smooth'});
        });
    });

    // Clear filters button inside No Results UI
    document.getElementById('clear-filters-btn').addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        document.getElementById('city-filter').value = 'all';
        document.getElementById('specialty-filter').value = 'all';
        document.getElementById('status-filter').value = 'all';
        applyFilters();
    });

    // We can also set an interval to auto refresh open/close status if wanted (e.g. every minute)
    setInterval(() => {
        renderFacilities(currentFacilities); // re-render the current list to recalculate checkIsOpen based on new time
    }, 60000); // every 60s
});
