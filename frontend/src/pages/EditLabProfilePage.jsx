import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function EditLabProfilePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<div className="layout-container flex flex-col">

<header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4 sticky top-0 z-50">
<div className="flex items-center gap-3 text-primary">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined">biotech</span>
</div>
<h2 className="text-slate-900 dark:text-white text-xl font-extrabold tracking-tight"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Kashmir Healthcare</Link></h2>
</div>
<div className="hidden lg:flex flex-1 justify-end gap-10">
<nav className="flex items-center gap-8">
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Find Doctors</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Hospitals</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Clinics</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Labs</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/">About</Link>
</nav>
<div className="flex gap-3">
<Link to="/dashboard" className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">Login</Link>
<Link to="/dashboard" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">Register</Link>
</div>
</div>
</header>
<main className="max-w-5xl mx-auto w-full px-6 py-10">

<div className="mb-10">
<h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Edit Lab Profile</h1>
<p className="text-slate-500 dark:text-slate-400">Update your diagnostic facility details, operational hours, and compliance documents.</p>
</div>
<form className="space-y-8">

<section className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
<span className="material-symbols-outlined text-primary">store</span>
<h3 className="text-xl font-bold">Facility Information</h3>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-1">
<p className="text-sm font-semibold mb-3">Lab Logo</p>
<div className="relative group cursor-pointer">
<div className="w-full aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center transition-colors group-hover:border-primary/50 overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" data-alt="Diagnostic lab logo placeholder with medical icon" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAPU1Fm0EkyfuJ63pQbF1Vnr-IgRFZ06kpJB264-vupmWNAfxFkfTS71LqQPaTvff1eR78czS-BHW7nLqDvQFBwcPIKZomD1zcMWmoZAeZxQQKwZMjuiAfeEdIo7UiMKYFk95NYkFS0NtODo78rUqQSJaESWOZXNacT-KDOSBeDWkiVuTXCGI1tM8qA0HJGdDt5tHE1ubFdK77QTwmmCRbt00x3avFHT5-Uy4zMvmjFanZEAauZ_1pDcsuFNjr4Gyq87CxgdXK1uVe')"}}></div>
<div className="relative z-10 text-center p-4">
<span className="material-symbols-outlined text-3xl text-slate-400 mb-2">add_a_photo</span>
<p className="text-xs font-medium text-slate-500">Upload Logo</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-2 space-y-5">
<div>
<label className="block text-sm font-semibold mb-2">Lab Name</label>
<input className="w-full h-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary focus:border-primary" placeholder="e.g. Hope Diagnostic &amp; Imaging" type="text" value="Metropolis Kashmir Lab"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Lab Type</label>
<select className="w-full h-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary focus:border-primary">
<option>Diagnostic Center</option>
<option>Pathology Laboratory</option>
<option>Imaging &amp; Radiology</option>
<option>Comprehensive Care</option>
</select>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
<span className="material-symbols-outlined text-secondary">verified_user</span>
<h3 className="text-xl font-bold">Registration &amp; Compliance</h3>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold mb-2">JKMC Registration Number</label>
<input className="w-full h-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="JKMC-XXXX-XXXX" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">HFR ID (12-digit)</label>
<input className="w-full h-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="HFR-XXXXXXXXXXXX" type="text"/>
</div>
<div className="md:col-span-2 flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">award_star</span>
<div>
<p className="font-bold text-slate-900 dark:text-white">NABL Accreditation</p>
<p className="text-xs text-slate-500">ISO 15189:2012 Certified facility</p>
</div>
</div>
<div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-sm">verified</span>
                                Verified
                            </div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
<span className="material-symbols-outlined text-accent">schedule</span>
<h3 className="text-xl font-bold">Operational Details</h3>
</div>
<div className="space-y-6">
<div>
<label className="block text-sm font-semibold mb-2">Standard Consultation/Test Fee Start (₹)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
<input className="w-full h-12 pl-8 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" type="number" value="250"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
<span className="text-sm font-semibold">24/7 Availability</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>

<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
<span className="text-sm font-semibold">Home Collection</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>

<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
<span className="text-sm font-semibold">Emergency Services</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
<span className="material-symbols-outlined text-highlight">location_on</span>
<h3 className="text-xl font-bold">Location Details</h3>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-sm font-semibold mb-2">Full Address</label>
<textarea className="w-full rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="Street name, landmark..." rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Area/Locality</label>
<input className="w-full h-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="e.g. Karan Nagar" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">District</label>
<select className="w-full h-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary">
<option>Srinagar</option>
<option>Anantnag</option>
<option>Baramulla</option>
<option>Budgam</option>
<option>Pulwama</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-semibold mb-2">Google Maps Link</label>
<div className="flex gap-2">
<div className="flex-1 relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
<span className="material-symbols-outlined text-sm">link</span>
</span>
<input className="w-full h-12 pl-10 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="https://maps.app.goo.gl/..." type="url"/>
</div>
<button className="px-4 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-all" type="button">
<span className="material-symbols-outlined">map</span>
</button>
</div>
</div>
<div className="md:col-span-2 rounded-xl overflow-hidden h-48 relative shadow-inner">
<img className="w-full h-full object-cover grayscale opacity-80" data-alt="Stylized map showing Srinagar location" data-location="Srinagar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbTv13fBrhQ8Aj60DxIuVtmOvrHE2SUBStdh8t08OpsX4j0wVRP6F9z0kHWQyZ8jwJEKb3E-pThoQBxAqd9gfIiSt7_RrTYY5b5fd-86mOkV5UqVsfFUIDzWBVSBpduepOkwZTsBgXRxF6tSNL_ZdCS1k7atUqWkU7m4d6CHMJ8KF13RLeKp1GJ9rShKDy5ARfYQ9Rg9YkhM_n9E8Yifj90Hm1k5nNot77PQayDnpRPvRkbRknqp8X1yf_VURCFqPogoX8T2-FhHPK"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/5">
<div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">pin_drop</span>
<span className="text-xs font-bold text-slate-800">Preview Map Location</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
<span className="material-symbols-outlined text-secondary">share</span>
<h3 className="text-xl font-bold">Social Media Presence</h3>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined text-lg">public</span>
</div>
<input className="w-full h-11 pl-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="Facebook Profile Link" type="text"/>
</div>
<div className="relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-pink-600">
<span className="material-symbols-outlined text-lg">camera</span>
</div>
<input className="w-full h-11 pl-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="Instagram Username" type="text"/>
</div>
<div className="relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-slate-900 dark:text-white">
<span className="material-symbols-outlined text-lg">chat</span>
</div>
<input className="w-full h-11 pl-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="Twitter/X Handle" type="text"/>
</div>
<div className="relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-blue-700">
<span className="material-symbols-outlined text-lg">groups</span>
</div>
<input className="w-full h-11 pl-12 rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary" placeholder="LinkedIn Page" type="text"/>
</div>
</div>
</section>

<div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
<button className="flex-1 sm:flex-none min-w-[200px] h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all" type="submit">
                        Save and Update Profile
                    </button>
<button className="flex-1 sm:flex-none px-10 h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" type="button">
                        Discard Changes
                    </button>
</div>
</form>
</main>
<footer className="mt-20 py-10 border-t border-slate-200 dark:border-slate-800 text-center">
<p className="text-sm text-slate-500">© 2024 Kashmir Healthcare Directory. All diagnostic labs are verified per JK Health Department norms.</p>
</footer>
</div>

        </div>
    );
}

export default EditLabProfilePage;
