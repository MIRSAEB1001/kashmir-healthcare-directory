import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    const links = [
        { to: '/', label: 'Find Doctors' },
        { to: '/map', label: 'Hospitals' },
        { to: '/dashboard', label: 'My Listings' },
        { to: '/add-clinic', label: 'About' },
    ];

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="nav-logo">
                        <div className="nav-logo-icon">+</div>
                        Kashmir<span style={{ color: 'var(--secondary)' }}>Healthcare</span>
                    </Link>

                    <ul className="nav-links">
                        {links.map(l => (
                            <li key={l.to}>
                                <Link to={l.to} className={isActive(l.to)}>
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        <Link to="/add-clinic" className="btn-outline" style={{ fontSize: '0.9rem', padding: '0.5rem 1.1rem' }}>
                            Register
                        </Link>
                        <Link to="/dashboard" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}>
                            My Dashboard
                        </Link>
                        <button
                            className="hamburger"
                            aria-label="Menu"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{mobileOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
                {links.map(l => (
                    <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
                <Link to="/add-clinic" className="btn-outline" onClick={() => setMobileOpen(false)}
                    style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', marginTop: '0.5rem' }}>
                    Register Clinic / Doctor
                </Link>
                <Link to="/dashboard" className="btn-primary" onClick={() => setMobileOpen(false)}
                    style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', marginTop: '0.5rem' }}>
                    My Dashboard
                </Link>
            </div>
        </>
    );
}
