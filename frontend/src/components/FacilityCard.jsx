import React from 'react';
import { useNavigate } from 'react-router-dom';

const typeIcons = {
    'Public Hospital': '🏥',
    'Private Clinic': '🏥',
    'Dental Clinic': '🦷',
    'Physiotherapy Center': '💪',
    'Diagnostic Lab': '🔬',
    'Solo Practitioner': '👤',
};

function Stars({ rating }) {
    return (
        <span className="rating-stars">
            {[1, 2, 3, 4, 5].map(i => (
                <span key={i} style={{ opacity: i <= Math.round(rating) ? 1 : 0.3 }}>★</span>
            ))}
        </span>
    );
}

export default function FacilityCard({ facility }) {
    const navigate = useNavigate();

    return (
        <div
            className="facility-card"
            onClick={() => navigate(`/clinic/${facility.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate(`/clinic/${facility.id}`)}
        >
            <div className="facility-card-header">
                <div style={{ flex: 1 }}>
                    <div className="facility-card-icon" style={{ marginBottom: '0.75rem' }}>
                        {typeIcons[facility.type] || '🏥'}
                    </div>
                    {facility.rating && <Stars rating={facility.rating} />}
                    {facility.rating && (
                        <span className="rating-num" style={{ marginLeft: '0.3rem', fontSize: '0.95rem' }}>{facility.rating}</span>
                    )}
                </div>
            </div>

            <div className="facility-card-body">
                <div className="facility-card-title">{facility.name}</div>
                <div className="facility-card-type">{facility.type} · {facility.specialty}</div>
                <div className="facility-card-address" style={{ marginTop: '0.5rem' }}>
                    <span>📍</span>
                    <span>{facility.area}, {facility.city}</span>
                </div>
                {facility.phone && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.35rem', fontSize: '0.9rem', color: 'var(--text-mid)', fontWeight: 600 }}>
                        <span>📞</span><span>{facility.phone}</span>
                    </div>
                )}
            </div>

            <div className="facility-card-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {facility.openNow !== undefined && (
                        <span className="open-tag">
                            <span className="open-dot" style={{ background: facility.openNow ? '#10b981' : '#ef4444' }} />
                            {facility.openNow ? 'Open Now' : 'Closed'}
                        </span>
                    )}
                </div>
                <span className="view-link">View Profile →</span>
            </div>
        </div>
    );
}
