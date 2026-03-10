import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function AddLabPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-2 bg-primary rounded-lg text-white">
<span className="material-symbols-outlined block">health_metrics</span>
</div>
<span className="text-xl font-extrabold tracking-tight text-primary"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Kashmir Healthcare</Link></span>
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
<main className="max-w-4xl mx-auto px-4 py-12">
<div className="mb-10">
<h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Lab &amp; Diagnostic Center Registration</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Register your facility to provide diagnostic services to the Kashmir community. Your data will be verified by our AI agents.
            </p>
</div>
<form className="space-y-8">

<section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">biotech</span>
<h2 className="text-xl font-bold">Facility Information</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="col-span-full">
<label className="block text-sm font-semibold mb-2">Lab Name</label>
<input className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700" placeholder="e.g. Kashmir Central Diagnostics" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Facility Type</label>
<select className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700">
<option>Pathology</option>
<option>Radiology</option>
<option>Specialized</option>
<option>Multi-specialty</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Contact Number (NAP Data)</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm dark:bg-slate-800 dark:border-slate-700">+91</span>
<input className="w-full rounded-r-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700" placeholder="9876543210" type="tel"/>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary">verified_user</span>
<h2 className="text-xl font-bold">Registration &amp; Compliance</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="col-span-full">
<label className="block text-sm font-semibold mb-2">JKMC/Government Registration Number</label>
<input className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700" placeholder="Enter registration ID" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">NABL Accreditation Status</label>
<div className="flex gap-4">
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="nabl" type="radio"/>
<div className="p-3 text-center rounded-xl border border-slate-200 peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all">Yes</div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="nabl" type="radio"/>
<div className="p-3 text-center rounded-xl border border-slate-200 peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all">No</div>
</label>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-2">HFR ID (if available)</label>
<input className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700" placeholder="e.g. JK-LAB-12345" type="text"/>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-accent">location_on</span>
<h2 className="text-xl font-bold">Location &amp; Map</h2>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700" placeholder="Area (e.g. Lal Chowk)" type="text"/>
<select className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700">
<option>Srinagar</option>
<option>Jammu</option>
<option>Anantnag</option>
<option>Baramulla</option>
<option>Budgam</option>
</select>
</div>
<textarea className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700" placeholder="Full Address Details" rows="2"></textarea>
<div className="relative rounded-2xl overflow-hidden h-48 bg-slate-100 group">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Map showing Srinagar city center location" data-location="Srinagar" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoXvW27S6FpumsGgohhLhEHai_sKnsIn_wTsMeoX0gic7qysokaYDtMZm7v1-LBnBsaZuFutgo4M65oZhTCe4WxkBeK7y7jb1_B6rnurWm1FwdKqWSMrpLSubvcldmeQ-gKeCWf0Kly7Fnc8dlKjULv-P_SozhwhDHR7IpaOlbt7rfimIhJcbv9Gdsxf9LeFmy7OBOAbelBGRwyYcoOHb6E0owl9mUZ8A6zU056pG6VL2KCRqmM6gUdbWwkHVs2YBT4auoiUCnrJkz')"}}></div>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white text-primary px-4 py-2 rounded-full font-bold shadow-xl" type="button">Select on Map</button>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Google Maps Link</label>
<input className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700" placeholder="https://maps.google.com/..." type="url"/>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-highlight">schedule</span>
<h2 className="text-xl font-bold">Operational Details</h2>
</div>
<div className="flex flex-col sm:flex-row gap-6">
<label className="flex items-center justify-between p-4 flex-1 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 cursor-pointer">
<span className="font-semibold">Home Collection Available</span>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
<label className="flex items-center justify-between p-4 flex-1 rounded-xl border border-slate-100 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 cursor-pointer">
<span className="font-semibold">24/7 Availability</span>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
</div>
</section>

<section className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">cloud_upload</span>
<h2 className="text-xl font-bold">Verification Documents</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-primary transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary mb-2">description</span>
<p className="text-sm font-bold">Business License</p>
<p className="text-xs text-slate-500 mt-1">PDF, JPG up to 5MB</p>
</div>
<div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-primary transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary mb-2">military_tech</span>
<p className="text-sm font-bold">Accreditation Certificate</p>
<p className="text-xs text-slate-500 mt-1">NABL/ISO Document</p>
</div>
</div>
</section>
<div className="pt-4">
<button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:translate-y-[-2px] transition-all" type="submit">
                    Submit Registration Request
                </button>
<p className="text-center text-xs text-slate-500 mt-4">
                    By submitting, you agree to our terms of service and healthcare data privacy policies.
                </p>
</div>
</form>
</main>
<footer className="border-t border-slate-200 dark:border-slate-800 mt-20 py-10 bg-white dark:bg-slate-950">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">health_metrics</span>
<span className="font-bold text-slate-600">Kashmir Healthcare Network</span>
</div>
<div className="flex items-center gap-4 text-sm font-medium text-slate-500">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs">shield</span>
                    Powered by ABDM
                </span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>© 2024</span>
</div>
<div className="flex gap-6 text-sm">
<Link to="/">Privacy</Link>
<Link to="/">Terms</Link>
<Link to="/">Support</Link>
</div>
</div>
</footer>

        </div>
    );
}

export default AddLabPage;
