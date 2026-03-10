import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-brand-logo">
                            <span style={{ color: 'var(--primary)' }}>
                                Kashmir
                            </span>
                            <span style={{ color: 'var(--accent)' }}>Health</span>
                        </div>
                        <p>Kashmir's single source of truth for healthcare seekers. Powered by autonomous AI verification agents.</p>
                        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ background: 'rgba(255,82,160,0.15)', color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '100px' }}>2,500+ Listings</span>
                            <span style={{ background: 'rgba(105,0,209,0.2)', color: '#d4b0ff', fontSize: '0.72rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '100px' }}>Officially Verified</span>
                            <span style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '100px' }}>14 Districts</span>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Directory</h4>
                        <ul>
                            <li><Link to="/">Search Facilities</Link></li>
                            <li><Link to="/map">Interactive Map</Link></li>
                            <li><Link to="/add-clinic">Add a Clinic</Link></li>
                            <li><a href="#">Verified Entities List</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Healthcare</h4>
                        <ul>
                            <li><a href="#">Public Hospitals</a></li>
                            <li><a href="#">Private Clinics</a></li>
                            <li><a href="#">Dental Clinics</a></li>
                            <li><a href="#">Physiotherapy</a></li>
                            <li><a href="#">Diagnostic Labs</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Compliance</h4>
                        <ul>
                            <li><a href="https://dhskashmir.org" target="_blank" rel="noreferrer">DHS Kashmir</a></li>
                            <li><a href="#">J&K Medical Council</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>© {year} Kashmir Healthcare Directory. All rights reserved.</div>
                    <div className="footer-abdm-note">
                        <span>🛡️</span>
                        Data accuracy ensured by autonomous AI verification agents
                    </div>
                    <div>Built for Kashmir's healthcare seekers</div>
                </div>
            </div>
        </footer>
    );
}
