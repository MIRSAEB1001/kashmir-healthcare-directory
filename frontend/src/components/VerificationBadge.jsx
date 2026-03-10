export default function VerificationBadge({ type }) {
    const configs = {
        abdm: { label: '✓ Verified', cls: 'badge badge-abdm' },
        hfr: { label: 'HFR Registered', cls: 'badge badge-hfr' },
        hpr: { label: 'HPR Registered', cls: 'badge badge-hpr' },
        open: { label: '● Open Now', cls: 'badge badge-open' },
        closed: { label: '● Closed', cls: 'badge badge-closed' },
    };
    const c = configs[type];
    if (!c) return null;
    return <span className={c.cls}>{c.label}</span>;
}
