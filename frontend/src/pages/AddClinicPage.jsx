import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function AddClinicPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center gap-3">
<div className="size-10 bg-primary flex items-center justify-center rounded-xl">
<span className="material-symbols-outlined text-white">medical_services</span>
</div>
<h1 className="text-xl font-extrabold tracking-tight text-primary"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Kashmir Healthcare</Link></h1>
</div>
<nav className="hidden md:flex items-center gap-8">
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Find Doctors</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Hospitals</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Clinics</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Labs</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/">About</Link>
</nav>
<div className="flex items-center gap-3">
<Link to="/dashboard" className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">Login</Link>
<Link to="/dashboard" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">Register</Link>
</div>
</div>
</div>
</header>
<main className="py-12 px-4">
<div className="max-w-3xl mx-auto">
<div className="mb-10 text-center">
<h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Clinic Registration</h2>
<p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">Register your medical facility with the Kashmir Healthcare Directory to reach thousands of patients in the valley.</p>
</div>
<form className="space-y-8">

<section className="bg-white dark:bg-slate-900 rounded-xl p-8 form-shadow border border-primary/5">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">domain</span>
<h3 className="text-xl font-bold">Facility Information</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="col-span-2">
<label className="block text-sm font-semibold mb-2">Clinic Name</label>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12" placeholder="e.g. Valley Specialty Center" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Facility Type</label>
<select className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12">
<option>Private Clinic</option>
<option>Public Hospital</option>
<option>Diagnostic Center</option>
<option>Nursing Home</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Contact Number (NAP)</label>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12" placeholder="+91 194 000 0000" type="tel"/>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 rounded-xl p-8 form-shadow border border-primary/5">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary">verified_user</span>
<h3 className="text-xl font-bold">Registration &amp; Compliance</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold mb-2">JKMC Registration Number</label>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12" placeholder="JKMC-XXXXXX" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">12-digit HFR ID</label>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12" placeholder="Health Facility Registry ID" type="text"/>
</div>
<div className="col-span-2">
<label className="block text-sm font-semibold mb-2">Primary Specialty</label>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12" placeholder="e.g. Cardiology, Pediatrics" type="text"/>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 rounded-xl p-8 form-shadow border border-primary/5">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-accent">location_on</span>
<h3 className="text-xl font-bold">Location Details</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="col-span-2">
<label className="block text-sm font-semibold mb-2">Full Address</label>
<textarea className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary" placeholder="Enter physical clinic address" rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Area</label>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12" placeholder="e.g. Karan Nagar" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">District</label>
<select className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12">
<option>Srinagar</option>
<option>Anantnag</option>
<option>Baramulla</option>
<option>Budgam</option>
<option>Pulwama</option>
<option>Kupwara</option>
<option>Ganderbal</option>
</select>
</div>
<div className="col-span-2">
<label className="block text-sm font-semibold mb-2">Google Maps Link</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">link</span>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 pl-10" placeholder="Paste map location URL" type="url"/>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 rounded-xl p-8 form-shadow border border-primary/5">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-highlight">schedule</span>
<h3 className="text-xl font-bold">Operational Details</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
<div>
<label className="block text-sm font-semibold mb-2">Consultation Fees (₹)</label>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12" placeholder="500" type="number"/>
</div>
<div className="flex items-center gap-3 pt-6">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
<span className="ml-3 text-sm font-semibold">24/7 Emergency Availability</span>
</label>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 rounded-xl p-8 form-shadow border border-primary/5">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">share</span>
<h3 className="text-xl font-bold">Social Media Links</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold mb-2">Facebook</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">facebook</span>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 pl-10" placeholder="facebook.com/your-clinic" type="url"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Instagram</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">photo_camera</span>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 pl-10" placeholder="instagram.com/your-clinic" type="url"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-2">X (Twitter)</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">close</span>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 pl-10" placeholder="twitter.com/your-clinic" type="url"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-2">LinkedIn</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">work</span>
<input className="w-full rounded-lg border-primary/20 bg-background-light dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 pl-10" placeholder="linkedin.com/company/your-clinic" type="url"/>
</div>
</div>
</div>
</section><div className="space-y-4 pt-4">
<button className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined">verified</span>
                        Submit for Verification
                    </button>
<p className="text-center text-xs text-slate-400 dark:text-slate-500 italic">
                        Data verified against official ABDM and J&amp;K Medical Council records.
                    </p>
</div>
</form>
</div>
</main>
<footer className="py-10 text-center border-t border-primary/5 mt-12">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-center gap-2 mb-4 opacity-50">
<span className="material-symbols-outlined text-sm">shield</span>
<span className="text-xs font-semibold tracking-widest uppercase">Kashmir Healthcare Network</span>
</div>
<p className="text-slate-400 text-sm">© 2024 Kashmir Healthcare Directory. All rights reserved.</p>
</div>
</footer>

        </div>
    );
}

export default AddClinicPage;
