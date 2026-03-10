import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function AddDoctorPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            

<header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
<h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Kashmir<span className="text-primary">Kashmir Healthcare</span></h1>
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

<div className="mb-12 text-center">
<h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Doctor Registration</h2>
<p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">Join Jammu &amp; Kashmir's largest verified healthcare network and connect with patients in need.</p>
</div>
<form className="space-y-8">

<section className="bg-white dark:bg-slate-900/50 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2 mb-6 border-b border-slate-50 dark:border-slate-800 pb-4">
<span className="material-symbols-outlined text-primary">person_check</span>
<h3 className="text-xl font-bold">Personal &amp; Professional Info</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Dr. Sameer Ahmed" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Specialty</label>
<select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
<option>Select Specialty</option>
<option>General Medicine</option>
<option>Pediatrics</option>
<option>Cardiology</option>
<option>Orthopedics</option>
<option>Dermatology</option>
<option>Neurology</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Qualifications</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="MBBS, MD (General Medicine)" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Years of Experience</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. 12" type="number"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">JKMC Registration Number</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Registration No." type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">14-digit HPR ID</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="00-0000-0000-0000" type="text"/>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900/50 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center justify-between mb-6 border-b border-slate-50 dark:border-slate-800 pb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">location_on</span>
<h3 className="text-xl font-bold">Clinical Affiliations</h3>
</div>
<span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded">Up to 3 locations</span>
</div>
<div className="space-y-6">

<div className="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-slate-100 dark:border-slate-800">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Clinic/Hospital Name</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Healing Touch Clinic" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Area/Locality</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Lal Chowk, Srinagar" type="text"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mobile Number</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="+91 99000 00000" type="tel"/>
</div>
<div className="flex flex-col gap-1">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Google Maps Link</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="https://maps.app.goo.gl/..." type="url"/>
</div>
</div>
</div>
<button className="w-full py-3 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined">add_circle</span>
<span className="font-semibold text-sm">Add Another Practice Location</span>
</button>
</div>
</section>

<section className="bg-white dark:bg-slate-900/50 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2 mb-6 border-b border-slate-50 dark:border-slate-800 pb-4">
<span className="material-symbols-outlined text-accent-pink">verified_user</span>
<h3 className="text-xl font-bold">Verification Documents</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-3">
<p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Identity Proof (Aadhar/Passport)</p>
<div className="relative group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">upload_file</span>
<p className="text-xs text-slate-500 mt-2">Click to upload or drag and drop<br/>PDF, JPG or PNG (Max. 5MB)</p>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
</div>
</div>
<div className="flex flex-col gap-3">
<p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Medical Registration Certificate</p>
<div className="relative group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">workspace_premium</span>
<p className="text-xs text-slate-500 mt-2">Click to upload or drag and drop<br/>PDF, JPG or PNG (Max. 5MB)</p>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
</div>
</div>
</div>
</section>

<div className="pt-6">
<div className="flex items-start gap-3 mb-6">
<input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary transition-all" type="checkbox"/>
<p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        I hereby declare that the information provided is true to the best of my knowledge. I understand that my profile will be live only after verification of my credentials by the Kashmir Healthcare Directory team.
                    </p>
</div>
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0" type="submit">
                    Submit for Verification
                </button>
</div>
</form>
</main>

<footer className="mt-20 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/80 py-12">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="flex items-center justify-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary text-2xl">medical_services</span>
<p className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Kashmir Healthcare <span className="text-primary font-medium">Network</span></p>
</div>
<div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-slate-500">
<Link to="/">Support Center</Link>
<Link to="/">Privacy Policy</Link>
<Link to="/">Terms of Service</Link>
<Link to="/">Contact Us</Link>
</div>
<p className="text-xs text-slate-400">© 2024 Kashmir Healthcare Directory. All medical registrations are verified via official state and central health portals.</p>
</div>
</footer>

        </div>
    );
}

export default AddDoctorPage;
