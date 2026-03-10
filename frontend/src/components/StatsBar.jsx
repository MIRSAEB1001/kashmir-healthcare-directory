import React from 'react';

const STATS = [
    { dot: true, text: '2,500+ Listings' },
    { text: '14 Districts Covered' },
    { text: 'ABDM Verified' },
    { text: 'Updated Daily via AI' },
];

export default function StatsBar() {
    return (
        <div className="stats-bar">
            <div className="container">
                {STATS.map((s, i) => (
                    <div key={i} className="stat-item">
                        {s.dot && <span className="stat-dot" />}
                        {s.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
