import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function EditDoctorProfilePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg text-white">
<span className="material-symbols-outlined text-2xl">medical_services</span>
</div>
<h1 className="text-xl font-extrabold tracking-tight text-primary">Kashmir <span className="text-secondary">Kashmir Healthcare</span></h1>
</div>
<nav className="hidden md:flex items-center gap-8">
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Find Doctors</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Hospitals</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Clinics</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Labs</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/">About</Link>
</nav>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end mr-2 hidden sm:flex">
<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">HPR Verified</span>
<span className="text-sm font-bold text-primary">Dr. Sameer Khan</span>
</div>
<div className="relative group">
<div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden cursor-pointer" data-alt="Professional doctor headshot placeholder">
<img alt="Doctor Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRO-quWKW2xrZc-mAw4sZG4U1o8HNdQ23NbXBLX3NasbH2mAuBBttJEtrCXSPP41kI0DC6SNOf8vapGLBy3H-pg1-vgimNoyzRdmA7zK0t6kfTMB5y0LnZJMthT_CZbz2HzJW2EZnoRVWIjK51bHlS7w_RYWMGHyMDOM4uJF7yygOkDqNWLDM1vf9uOL9MWITlL01hHU1fDCJkQaSb_gEOa8RerF0aKqxeYttnkxACjHSDMRXVh7eRct-qeEixPvAUosf3e9SGUzSt"/>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-6 lg:px-20 py-10">
<div className="flex flex-col lg:flex-row gap-8">
<aside className="w-full lg:w-64 flex flex-col gap-2">
<div className="p-4 mb-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
<p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Profile Completeness</p>
<div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-accent h-full w-[85%]"></div>
</div>
<p className="text-[10px] mt-2 text-slate-500 font-medium">85% - Add social links to reach 100%</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20" href="#personal">
<span className="material-symbols-outlined text-lg">person</span>
<span className="text-sm">Personal Info</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 text-slate-600 dark:text-slate-300 font-medium transition-all group" href="#professional">
<span className="material-symbols-outlined text-lg group-hover:text-primary">school</span>
<span className="text-sm">Professional Details</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 text-slate-600 dark:text-slate-300 font-medium transition-all group" href="#clinical">
<span className="material-symbols-outlined text-lg group-hover:text-primary">apartment</span>
<span className="text-sm">Clinical Affiliations</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 text-slate-600 dark:text-slate-300 font-medium transition-all group" href="#social">
<span className="material-symbols-outlined text-lg group-hover:text-primary">share</span>
<span className="text-sm">Social Links</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 text-slate-600 dark:text-slate-300 font-medium transition-all group" href="#verification">
<span className="material-symbols-outlined text-lg group-hover:text-primary">verified_user</span>
<span className="text-sm">Verification Status</span>
</a>
</nav>
<hr className="my-6 border-slate-200 dark:border-slate-800"/>
<button className="flex items-center gap-3 px-4 py-3 rounded-lg text-rose-500 hover:bg-rose-50 font-bold transition-all">
<span className="material-symbols-outlined text-lg">logout</span>
<span className="text-sm">Logout</span>
</button>
</aside>
<section className="flex-1 space-y-8">
<div className="mb-8">
<h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Edit Profile</h2>
<p className="text-slate-500 mt-1">Manage your presence in the JK Healthcare Ecosystem.</p>
</div>
<div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-4">
<span className="material-symbols-outlined text-amber-500">info</span>
<p className="text-sm text-amber-800 leading-relaxed font-medium">
<span className="font-bold">Verification Note:</span> Changing core professional data like your Specialty or JKMC ID will trigger a re-verification by AI agents and ABDM registries. This process may take up to 48 hours.
                    </p>
</div>
<div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800" id="personal">
<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
<span className="w-1.5 h-6 bg-accent rounded-full"></span>
                        Personal Information
                    </h3>
<div className="flex flex-col md:flex-row gap-8 mb-8">
<div className="relative w-32 h-32">
<div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-inner" data-alt="Doctor portrait for profile display">
<img alt="Doctor Profile Big" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaMY2pkxv71whcRSRo2kt0uk1PQeDeAgGDpFvJgHP0dWKEQhyf_QjgLBF-BoFYlpRRJmQg8oQuoB6d_bUvQjy-Qd0uaB8KIfGF5QYHr69UTz3cM1Z87UHg8Ebk1cLRWoiZ7dE54pU_R53Gm4PwOly3zpxHQDgzHpQ6flxoR9Gdplt0ASASj3XA4gaLNUi8phYtivUs6376w52egjP4Z5fddt31O3qnFY2LM3T5dWHmJQhEUaOmzubdUVouHgc_UI0z0ibyd21YpYCi"/>
</div>
<button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-lg shadow-lg hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-sm">photo_camera</span>
</button>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Legal Name</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20" type="text" value="Dr. Sameer Khan"/>
</div>
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-lg bg-slate-100 dark:bg-slate-700 text-slate-500 text-sm border-r border-slate-200">+91</span>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-r-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20" type="text" value="9906000000"/>
</div>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20" type="email" value="sameer.khan@jkhealthcare.in"/>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800" id="professional">
<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
<span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                        Professional Details
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">Specialty Selection</label>
<select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 appearance-none">
<option>Cardiologist</option>
<option>Neurologist</option>
<option>Orthopedic</option>
<option>Dermatologist</option>
<option>Pediatrician</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">Years of Experience</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20" type="number" value="12"/>
</div>
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                HPR ID (ABDM Verified)
                                <span className="material-symbols-outlined text-[14px] text-green-500">verified</span>
</label>
<input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg p-3 text-slate-400 font-mono cursor-not-allowed" disabled="" type="text" value="32-4567-8901-2345"/>
</div>
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                JKMC Registration
                                <span className="material-symbols-outlined text-[14px] text-green-500">verified</span>
</label>
<input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg p-3 text-slate-400 font-mono cursor-not-allowed" disabled="" type="text" value="JK-1234567"/>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800" id="clinical">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-bold flex items-center gap-2">
<span className="w-1.5 h-6 bg-highlight rounded-full"></span>
                            Clinical Affiliations
                        </h3>
<button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
<span className="material-symbols-outlined text-lg">add</span> Add Location
                        </button>
</div>
<div className="space-y-4">
<div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
<div className="bg-primary/10 p-3 rounded-lg text-primary">
<span className="material-symbols-outlined">local_hospital</span>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
<div>
<label className="text-[10px] font-black text-slate-400 uppercase">Clinic/Hospital Name</label>
<p className="font-bold">Super Specialty Hospital</p>
</div>
<div>
<label className="text-[10px] font-black text-slate-400 uppercase">Area / Locality</label>
<p className="font-medium text-slate-600">Karan Nagar, Srinagar</p>
</div>
<div>
<label className="text-[10px] font-black text-slate-400 uppercase">Phone</label>
<p className="font-medium text-slate-600">0194-2452000</p>
</div>
</div>
<div className="flex items-center gap-2">
<Link to="/" className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-location="Srinagar">map</span>
</Link>
<button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
<div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
<div className="bg-secondary/10 p-3 rounded-lg text-secondary">
<span className="material-symbols-outlined">medical_information</span>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
<div>
<label className="text-[10px] font-black text-slate-400 uppercase">Clinic/Hospital Name</label>
<p className="font-bold">Pulse Heart Clinic</p>
</div>
<div>
<label className="text-[10px] font-black text-slate-400 uppercase">Area / Locality</label>
<p className="font-medium text-slate-600">Hyderpora, Srinagar</p>
</div>
<div>
<label className="text-[10px] font-black text-slate-400 uppercase">Phone</label>
<p className="font-medium text-slate-600">9906123456</p>
</div>
</div>
<div className="flex items-center gap-2">
<Link to="/" className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-location="Srinagar">map</span>
</Link>
<button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800" id="social">
<h3 className="text-xl font-bold mb-6 flex items-center gap-2">
<span className="w-1.5 h-6 bg-primary/40 rounded-full"></span>
                        Social Links
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">Facebook Profile</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-lg bg-slate-100 dark:bg-slate-700 text-slate-500 text-sm">fb.com/</span>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-r-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20" placeholder="username" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">Instagram Handle</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-lg bg-slate-100 dark:bg-slate-700 text-slate-500 text-sm">@</span>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-r-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20" placeholder="username" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">Twitter / X</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-lg bg-slate-100 dark:bg-slate-700 text-slate-500 text-sm">x.com/</span>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-r-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20" placeholder="username" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-black text-slate-400 uppercase tracking-widest">LinkedIn URL</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-lg bg-slate-100 dark:bg-slate-700 text-slate-500 text-sm">li.com/in/</span>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-r-lg p-3 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20" placeholder="username" type="text"/>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
<button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Discard Changes
                    </button>
<button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-black shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-[1.02] transition-all">
                        Save and Update Profile
                    </button>
</div>
</section>
</div>
</main>
<footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 py-12 px-6 lg:px-20 mt-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="bg-primary/10 p-1 rounded text-primary">
<span className="material-symbols-outlined text-sm">medical_services</span>
</div>
<span className="font-extrabold text-primary">Kashmir Healthcare</span>
</div>
<p className="text-slate-400 text-sm">Official medical directory for the Union Territory of Jammu &amp; Kashmir.</p>
</div>
<div className="flex gap-8 text-sm font-bold text-slate-400">
<Link to="/">Privacy Policy</Link>
<Link to="/">Terms of Service</Link>
<Link to="/">Help Center</Link>
</div>
</div>
</footer>

        </div>
    );
}

export default EditDoctorProfilePage;
