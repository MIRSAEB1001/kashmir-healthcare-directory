import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import VerificationBadge from '../components/VerificationBadge';
import { mockFacilities, mockDoctors } from '../data/mockData';

export default function BookingPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const facilityId = searchParams.get('facilityId');
    const doctorId = searchParams.get('doctorId');
    const preDoctor = mockDoctors.find(d => d.id === doctorId);
    const preFacility = mockFacilities.find(f => f.id === facilityId);

    const [form, setForm] = useState({
        facilityId: facilityId || '',
        doctorId: doctorId || '',
        date: '',
        time: '',
        reason: '',
        abhaId: '',
        name: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Booking Submitted!</h2>
                <p style={{ color: 'var(--text-mid)', marginBottom: '0.5rem' }}>Your appointment request has been submitted via the <strong>Unified Health Interface (UHI)</strong>.</p>
                <div className="info-box" style={{ maxWidth: '480px', marginBottom: '2rem' }}>
                    <span>📋</span>
                    <p>UHI Reference: <strong>UHI-JK-2026-{Math.floor(Math.random() * 99999).toString().padStart(5, '0')}</strong><br />
                        You will receive a confirmation within 24–48 hours. Online OPD booking enabled for ABDM-registered facilities.</p>
                </div>
                <button className="btn-primary" onClick={() => navigate('/')}>← Return to Directory</button>
            </div>
        );
    }

    return (
        <div>
            <section className="page-hero">
                <div className="container">
                    <button className="page-hero-back" onClick={() => navigate(-1)}>← Back</button>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.35rem' }}>Book Your Appointment</h1>
                    <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem' }}>
                        Seamlessly book OPD consultations via the <strong>Unified Health Interface (UHI)</strong> — part of the Ayushman Bharat Digital Mission.
                    </p>
                </div>
            </section>

            <div className="section-pad" style={{ paddingTop: '2.5rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem' }}>
                    <form onSubmit={handleSubmit}>
                        {/* Facility & Doctor */}
                        <div className="form-card">
                            <div className="form-section-title">Select Facility & Doctor</div>
                            {preFacility && (
                                <div className="info-box" style={{ marginBottom: '1.25rem' }}>
                                    <span>🏥</span>
                                    <div>
                                        <p style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.2rem' }}>{preFacility.name}</p>
                                        <p style={{ fontSize: '0.78rem' }}>{preFacility.address}</p>
                                        <div className="badge-row" style={{ marginTop: '0.5rem' }}>
                                            <VerificationBadge type="abdm" /><VerificationBadge type="uhi" />
                                        </div>
                                        <p style={{ fontSize: '0.72rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>
                                            This clinic is ABDM-registered and supports online OPD booking via the Unified Health Interface.
                                        </p>
                                    </div>
                                </div>
                            )}
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Facility Type</label>
                                    <select className="form-select">
                                        <option>Public Hospital</option><option>Private Clinic</option>
                                        <option>Solo Practitioner</option><option>Dental Clinic</option><option>Physiotherapy Center</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Select Doctor</label>
                                    <select className="form-select" value={form.doctorId} onChange={e => set('doctorId', e.target.value)}>
                                        <option value="">— Select Doctor —</option>
                                        {mockDoctors.map(d => <option key={d.id} value={d.id}>{d.name} · {d.specialty}</option>)}
                                    </select>
                                </div>
                            </div>
                            {preDoctor && (
                                <div className="badge-row" style={{ marginTop: '0.75rem' }}>
                                    <VerificationBadge type="hpr" />
                                    <span style={{ fontSize: '0.78rem', color: 'var(--text-mid)' }}>HPR ID: {preDoctor.hprId}</span>
                                </div>
                            )}
                        </div>

                        {/* Date & Time */}
                        <div className="form-card">
                            <div className="form-section-title">Appointment Date & Time</div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Preferred Date <span>*</span></label>
                                    <input type="date" className="form-input" value={form.date} onChange={e => set('date', e.target.value)} required min={new Date().toISOString().split('T')[0]} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Preferred Time</label>
                                    <select className="form-select" value={form.time} onChange={e => set('time', e.target.value)}>
                                        <option>9:00 AM</option><option>9:30 AM</option><option>10:00 AM</option>
                                        <option>10:30 AM</option><option>11:00 AM</option><option>11:30 AM</option>
                                        <option>12:00 PM</option><option>2:00 PM</option><option>2:30 PM</option>
                                    </select>
                                </div>
                                <div className="form-group full">
                                    <label className="form-label">Reason for Visit</label>
                                    <textarea className="form-textarea" placeholder="Briefly describe your symptoms or reason for consultation..." value={form.reason} onChange={e => set('reason', e.target.value)} style={{ minHeight: 70 }} />
                                </div>
                            </div>
                        </div>

                        {/* Patient Details */}
                        <div className="form-card">
                            <div className="form-section-title">Patient Details</div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Full Name <span>*</span></label>
                                    <input type="text" className="form-input" placeholder="Your full name" required value={form.name} onChange={e => set('name', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number <span>*</span></label>
                                    <input type="tel" className="form-input" placeholder="10-digit mobile number" required value={form.phone} onChange={e => set('phone', e.target.value)} />
                                </div>
                                <div className="form-group full">
                                    <label className="form-label">ABHA ID (Ayushman Bharat Health Account) <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>Optional</span></label>
                                    <input type="text" className="form-input" placeholder="14-digit ABHA ID (optional)" value={form.abhaId} onChange={e => set('abhaId', e.target.value)} />
                                    <span className="form-hint">Your ABHA ID enables seamless health record integration with ABDM. You can create one at abdm.gov.in</span>
                                </div>
                            </div>
                        </div>

                        {/* Cancellation Policy */}
                        <div className="form-card">
                            <div className="form-section-title">Cancellation Policy</div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>
                                Appointments can be cancelled or rescheduled up to <strong>2 hours before</strong> the scheduled time at no charge.
                                Late cancellations may incur a ₹50 administrative fee. Emergency cancellations are always waived.
                            </p>
                        </div>

                        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}>
                            📅 Confirm Booking via UHI
                        </button>
                    </form>

                    {/* SIDEBAR */}
                    <div>
                        <div className="info-box" style={{ marginBottom: '1.25rem' }}>
                            <span>ℹ️</span>
                            <p>Your appointment will be confirmed via <strong>UHI</strong>. Online OPD booking enabled for ABDM-registered facilities only.</p>
                        </div>

                        <div className="detail-card">
                            <div className="detail-card-title">Booking Summary</div>
                            <div className="detail-row">
                                <span className="detail-label">Facility</span>
                                <span className="detail-value" style={{ fontSize: '0.8rem' }}>{preFacility?.name || 'Not selected'}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Doctor</span>
                                <span className="detail-value">{preDoctor?.name || 'Not selected'}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Date</span>
                                <span className="detail-value">{form.date || '—'}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Booking via</span>
                                <span className="detail-value" style={{ color: 'var(--primary)' }}>UHI</span>
                            </div>
                            {preDoctor && (
                                <div className="detail-row">
                                    <span className="detail-label">Fee</span>
                                    <span className="detail-value">{preDoctor.consultationFee}</span>
                                </div>
                            )}
                        </div>

                        <div style={{ background: 'var(--gradient)', borderRadius: 'var(--radius-md)', padding: '1.25rem', color: 'white', fontSize: '0.8rem', lineHeight: 1.7 }}>
                            <div style={{ fontWeight: 700, marginBottom: '0.4rem' }}>🛡️ ABDM Protected Booking</div>
                            Powered by the Ayushman Bharat Digital Mission (ABDM) |
                            Kashmir Healthcare Directory
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
