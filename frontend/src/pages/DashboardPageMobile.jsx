import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function DashboardPageMobile() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark pb-24">

<header className="flex items-center p-4 justify-between sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center">
<span className="material-symbols-outlined">menu</span>
</div>
<h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight flex-1 text-center">Dashboard</h1>
<div className="flex size-10 items-center justify-end">
<button className="text-slate-900 dark:text-slate-100">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
</header>

<section className="flex p-4 flex-col items-center gap-4">
<div className="flex flex-col items-center gap-3">
<div className="bg-primary/10 rounded-full p-1 border-2 border-primary">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24" data-alt="Professional headshot of a smiling young male user" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEA-Ju-qke1VRyBys2w2C3q4pybI3THJw9_JWN1lnzfF4n1Tyfbwk_dmganGhk33JcviTAB1mqCHkMI5DDP957lynpfjlWoeANOuCt6foT6RSzVnR638dm43MI-AhNpAfv0Zrq7neyNUw9a5cBrh9ACSASkxd7Ox6MWnM7pE8wfVavMREjM3F4g97hOiuJw1bXFBZD5XJGSzZm5R06JIoE9eXBGG1pwCOCzHvh0csnZwXLezsQZY293WXt2E72oiX0te3H22_1bnGF");'></div>
</div>
<div className="text-center">
<p className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Alex Johnson</p>
<p className="text-primary font-medium text-sm">Verified Member since Oct 2023</p>
</div>
</div>
</section>

<section className="grid grid-cols-2 gap-3 px-4 mb-4">
<div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Consultations</p>
<p className="text-2xl font-bold text-slate-900 dark:text-slate-100">12</p>
</div>
<div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Reports</p>
<p className="text-2xl font-bold text-slate-900 dark:text-slate-100">08</p>
</div>
</section>

<section className="px-4 mb-6">
<div className="relative overflow-hidden flex flex-col items-stretch justify-start rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
<div className="p-5 relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="bg-primary/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary">id_card</span>
</div>
<span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">Active</span>
</div>
<p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight mb-1">My ABHA Profile</p>
<p className="text-slate-500 dark:text-slate-400 text-sm mb-4">14-digit ABHA ID: <span className="font-mono font-bold text-slate-700 dark:text-slate-200">12-3456-7890-1234</span></p>
<button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-transform active:scale-[0.98]">
<span className="material-symbols-outlined text-sm">qr_code_2</span>
<span>View QR Code</span>
</button>
</div>
</div>
</section>

<section className="px-4 mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Registration Status</h3>
<button className="text-primary text-xs font-bold uppercase tracking-wide">View History</button>
</div>
<div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
<div className="flex items-center gap-4 p-4 border-b border-slate-50 dark:border-slate-700">
<div className="size-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
<span className="material-symbols-outlined text-yellow-600 dark:text-yellow-400">pending_actions</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold text-slate-900 dark:text-slate-100">Medical Record Submission</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Submitted on Oct 24, 2023</p>
</div>
<span className="text-[10px] font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/10 px-2 py-1 rounded uppercase">Pending</span>
</div>
<div className="flex items-center gap-4 p-4">
<div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
<span className="material-symbols-outlined text-green-600 dark:text-green-400">verified_user</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold text-slate-900 dark:text-slate-100">Identity Verification</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Verified on Oct 12, 2023</p>
</div>
<span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 px-2 py-1 rounded uppercase">Verified</span>
</div>
</div>
</section>

<section className="px-4 mb-6">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight mb-3">Directory Contributions</h3>
<div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-5 border border-primary/20 flex flex-col gap-3">
<p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    Help the community by identifying new healthcare facilities in your local area.
                </p>
<button className="flex items-center justify-center gap-2 rounded-lg h-11 bg-white dark:bg-slate-800 text-primary border border-primary text-sm font-bold w-full transition-all hover:bg-primary/5">
<span className="material-symbols-outlined">add_location_alt</span>
<span>Add Clinic or Practitioner</span>
</button>
</div>
</section>

<footer className="px-8 py-6 text-center">
<div className="flex items-center justify-center gap-2 mb-2">
<span className="material-symbols-outlined text-slate-400 text-sm">info</span>
<p className="text-slate-400 dark:text-slate-500 text-xs font-medium">AI Verification Note</p>
</div>
<p className="text-slate-400 dark:text-slate-500 text-[10px] leading-relaxed italic">
                All uploaded documents and registration data are processed via AI verification for accuracy and compliance. Final approval may require human intervention.
            </p>
</footer>

<nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 flex justify-around items-center py-2 px-4 z-50">
<Link to="/" className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
</Link>
<Link to="/" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
<span className="material-symbols-outlined">menu_book</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Directory</span>
</Link>
<div className="relative -top-6">
<button className="bg-primary size-14 rounded-full flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-background-light dark:border-background-dark">
<span className="material-symbols-outlined text-white text-3xl">qr_code_scanner</span>
</button>
</div>
<Link to="/" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
<span className="material-symbols-outlined">history</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">History</span>
</Link>
<Link to="/" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
<span className="material-symbols-outlined">person_outline</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
</Link>
</nav>
</div>

        </div>
    );
}

export default DashboardPageMobile;
