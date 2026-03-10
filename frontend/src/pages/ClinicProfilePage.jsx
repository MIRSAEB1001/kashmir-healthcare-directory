import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function ClinicProfilePage() {
    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<div className="relative flex min-h-screen flex-col overflow-x-hidden">

<header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-20 py-3">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-primary">
<div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
<span className="material-symbols-outlined">health_and_safety</span>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-lg font-extrabold leading-tight tracking-tight">JKMC HFR</h2>
</div>
<nav className="hidden md:flex items-center gap-8"><Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/">Find Doctors</Link>
<Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/">Hospitals</Link>
<Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/">Clinics</Link>
<Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/">Labs</Link>
<Link className="text-slate-600 hover:text-primary text-sm font-semibold transition-colors" to="/">About</Link></nav>
</div>
<div className="flex flex-1 justify-end gap-4 items-center">
<div className="flex items-center gap-3 mr-2">
<Link to="/dashboard" className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">Login</Link>
<Link to="/dashboard" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">Register</Link>
</div><label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-full h-full bg-primary/5 border border-primary/10 px-3">
<div className="text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-primary/50" placeholder="Search facilities..."/>
</div>
</label>
<div className="bg-primary/10 p-1 rounded-full">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" data-alt="User profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDc7JJpH-zEAZxN8JiR2L35hiZYPhq8FhpCwsCE7fgN5xiRGxTr5t0PXRSl0EgjBJpndefQsIAjC_QH3mV-05WIIxF8tzctcZUMPaByI4lZbwneRNvJKTaQki5LqR_oy6EmA5ddba_-oRTyDCRtXnu0MGigT-dTvqtbHggZmFDFXEC7nLUpCGja_SStJfgRcY9kajFr8-EDY-Z8Vpz1LBJW_mK0KlmxND5n-qUl2qHAAnmbzZ57syzc417AUEAadPrDUoRq-YuqZMPU");'></div>
</div>
</div>
</header>
<main className="flex-1 flex flex-col items-center">
<div className="max-w-6xl w-full px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 flex flex-col gap-8">

<div className="bg-white rounded-xl border border-primary/10 shadow-md overflow-hidden">
<div className="h-64 w-full bg-center bg-cover" data-alt="Modern clinic waiting area and reception" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhoxLCHYEdOj_bxWuqPQh0ysrkTQlLbJdpSc2QAhPW4kvF4JamjpWlNYOLvWDvwlfcrHfQNAR92l46l6XIF4b9oRheLkrDDEJO9_LoAJqOc9ckkTl2NBwp_muYsynl02iNzJKm03CPwAy-iUbwYoSb_aEQ7KAbzm6hzH3IB6qYHoVcbuM69Ha54vfQ-8UknvFtRvx4f0AiqClL6eOgPG8DgCI6L9PaaF6LJif2f48V3cTJHVQRrq95DjdqIlOYLAEHk8aD5ssYf5hF')"}}></div>
<div className="p-6">
<div className="flex flex-wrap items-center gap-3 mb-4"><span className="px-3 py-1.5 bg-primary/10 text-primary text-[11px] font-extrabold rounded-full border border-primary/20 flex items-center gap-1.5 tracking-wide uppercase">
<span className="material-symbols-outlined text-[14px] fill-1">verified</span> ABDM Verified
</span>
<span className="px-3 py-1.5 bg-secondary/10 text-secondary text-[11px] font-extrabold rounded-full border border-secondary/20 flex items-center gap-1.5 tracking-wide uppercase">
<span className="material-symbols-outlined text-[14px] fill-1">app_registration</span> HFR Registered
</span></div>
<h1 className="text-3xl font-extrabold text-slate-900 mb-2">City Wellness Multi-Specialty</h1>
<div className="flex items-center gap-2 text-slate-500 font-medium">
<span className="material-symbols-outlined text-sm">fingerprint</span>
<span>HFR ID: <span className="text-primary font-bold">1234-5678-9012</span></span>
</div>
</div>
</div>

<div className="flex flex-col gap-8">

<section className="bg-white p-6 rounded-xl border border-primary/5 shadow-md">
<h2 className="text-xl font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">info</span> About This Clinic
                            </h2>
<p className="text-slate-600 leading-relaxed mb-4">
                                City Wellness Clinic is a premier healthcare facility dedicated to providing comprehensive healthcare services under the ABDM framework. Our NAP data is fully verified to ensure patients receive reliable care.
                            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-background-light rounded-lg p-4 border border-primary/5">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-accent-pink">location_on</span>
<div>
<p className="text-xs font-bold uppercase text-slate-400">Address</p>
<p className="text-sm text-slate-700">123 Health Ave, Metro City, 400001</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-accent-pink">call</span>
<div>
<p className="text-xs font-bold uppercase text-slate-400">Contact</p>
<p className="text-sm text-slate-700">+91 98765 43210</p>
</div>
</div>
<div className="flex items-center gap-3 col-span-1 md:col-span-2 mt-2 pt-4 border-t border-primary/5">
<p className="text-xs font-bold uppercase text-slate-400 mr-2">Follow Us</p>
<div className="flex gap-3">
<Link className="text-primary hover:opacity-80 transition-opacity" to="/">
<span className="material-symbols-outlined text-[20px]">facebook</span>
</Link>
<Link className="text-primary hover:opacity-80 transition-opacity" to="/">
<span className="material-symbols-outlined text-[20px]">photo_camera</span>
</Link>
<Link className="text-primary hover:opacity-80 transition-opacity" to="/">
<svg aria-hidden="true" className="size-5 fill-current" viewbox="0 0 24 24">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</Link>
<Link className="text-primary hover:opacity-80 transition-opacity" to="/">
<span className="material-symbols-outlined text-[20px]">work</span>
</Link>
</div>
</div></div>
</section>

<section className="bg-white p-6 rounded-xl border border-primary/5 shadow-md">
<h2 className="text-xl font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">assignment_turned_in</span> Registration Info
                            </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="p-4 bg-background-light rounded-lg">
<p className="text-xs font-bold uppercase text-slate-400 mb-1">JKMC Reg</p>
<p className="font-bold text-slate-800">JKMC/CL/2024/048</p>
</div>
<div className="p-4 bg-background-light rounded-lg">
<p className="text-xs font-bold uppercase text-slate-400 mb-1">HFR ID</p>
<p className="font-bold text-slate-800">1234-5678-9012</p>
</div>
<div className="p-4 bg-background-light rounded-lg">
<p className="text-xs font-bold uppercase text-slate-400 mb-1">Primary Specialty</p>
<p className="font-bold text-slate-800">General Medicine</p>
</div>
</div>
</section>

<section className="bg-white p-6 rounded-xl border border-primary/5 shadow-md">
<h2 className="text-xl font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">medical_services</span> Available Services
                            </h2>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="flex flex-col items-center gap-2 p-4 border border-primary/5 rounded-xl hover:bg-primary/5 transition-colors group shadow-sm">
<div className="size-12 rounded-full bg-accent-pink/10 text-accent-pink flex items-center justify-center group-hover:bg-accent-pink group-hover:text-white transition-all">
<span className="material-symbols-outlined">stethoscope</span>
</div>
<p className="text-sm font-semibold text-center">Consultation</p>
</div>
<div className="flex flex-col items-center gap-2 p-4 border border-primary/5 rounded-xl hover:bg-primary/5 transition-colors group shadow-sm">
<div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined">vaccines</span>
</div>
<p className="text-sm font-semibold text-center">Vaccination</p>
</div>
<div className="flex flex-col items-center gap-2 p-4 border border-primary/5 rounded-xl hover:bg-primary/5 transition-colors group shadow-sm">
<div className="size-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
<span className="material-symbols-outlined">biotech</span>
</div>
<p className="text-sm font-semibold text-center">Lab Tests</p>
</div>
<div className="flex flex-col items-center gap-2 p-4 border border-primary/5 rounded-xl hover:bg-primary/5 transition-colors group shadow-sm">
<div className="size-12 rounded-full bg-accent-orange/10 text-accent-orange flex items-center justify-center group-hover:bg-accent-orange group-hover:text-white transition-all">
<span className="material-symbols-outlined">emergency</span>
</div>
<p className="text-sm font-semibold text-center">First Aid</p>
</div>
</div>
</section>
</div>
</div>

<div className="lg:col-span-1 flex flex-col gap-6">

<div className="bg-white p-6 rounded-xl border border-primary/10 shadow-xl ring-1 ring-primary/5">
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-[0.98] shadow-md shadow-primary/20">
<span className="material-symbols-outlined">event_available</span>
                            Book via UHI
                        </button>
<p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">security</span> Universal Health Interface Secured
                        </p>
<div className="mt-8">
<h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary">schedule</span> Timings
                            </h3>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm py-2 border-b border-primary/5">
<span className="text-slate-500 font-medium">Mon - Sat</span>
<span className="font-bold text-slate-800">09:00 AM - 08:00 PM</span>
</div>
<div className="flex justify-between items-center text-sm py-2">
<span className="text-slate-500 font-medium">Sunday</span>
<span className="font-bold text-accent-pink">Closed</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-primary/10 shadow-md overflow-hidden">
<div className="h-40 w-full bg-primary/5 flex items-center justify-center relative group">
<div className="absolute inset-0 bg-center bg-cover opacity-80" data-alt="Location map showing clinic position" data-location="Metro City" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZxmpzWShONL7RiTwjf3NjcpXlOGcp12YY0FBHjU5jomKprw7SPjnCxw_1SJkEPOmg61brTSlvvBzHeShouqpIwrw5PljcPRlM-KeHeZjry88zqApuyNnHe61CYpXxaWuT5HdvEQ0NoEfVantiJgAVj0vd0nP6WuTodFE26qIfuaj3ynnWtAV7K-5BPQFQVcZfBrmohBfs-xq32vOAdHJac-qlTN8xHgORkqqu7xCsI0y0JAFRLbz2HwCL_E6gnMQ2uth_vm1hgXXg')"}}></div>
<div className="relative z-10 size-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
<span className="material-symbols-outlined">location_on</span>
</div>
</div>
<div className="p-4">
<button className="w-full border-2 border-primary/20 hover:border-primary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
<span className="material-symbols-outlined">directions</span> Get Directions
                            </button>
</div>
</div>

<div className="bg-white p-5 rounded-xl border-l-4 border-l-accent-orange border-y border-r border-accent-orange/10 shadow-sm">
<div className="flex gap-3">
<span className="material-symbols-outlined text-accent-orange">verified_user</span>
<div>
<h4 className="text-sm font-bold text-slate-800">Identity Verified</h4>
<p className="text-xs text-slate-500 mt-1">This facility is part of the National Health Provider Registry.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<section className="bg-white p-8 rounded-xl border border-primary/5 shadow-md mt-4">
<div className="flex justify-between items-center mb-8">
<h2 className="text-xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">reviews</span> Reviews &amp; Ratings
                            </h2>
<div className="flex items-center gap-2">
<span className="text-2xl font-black text-slate-800">4.8</span>
<div className="flex text-accent-orange">
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
<span className="material-symbols-outlined fill-1">star</span>
</div>
<span className="text-slate-400 text-sm">(124 verified reviews)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-4 rounded-lg bg-background-light border border-primary/5">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">AJ</div>
<div>
<p className="text-sm font-bold">Amit J.</p>
<p className="text-xs text-slate-400">2 days ago</p>
</div>
</div>
<div className="flex text-accent-orange text-[14px]">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
</div>
</div>
<p className="text-sm text-slate-600 italic">"The digital booking via UHI was seamless. Highly professional staff and clean environment."</p>
</div>

<div className="p-4 rounded-lg bg-background-light border border-primary/5">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-secondary/10 flex items-center justify-center font-bold text-secondary">RK</div>
<div>
<p className="text-sm font-bold">Ritu K.</p>
<p className="text-xs text-slate-400">1 week ago</p>
</div>
</div>
<div className="flex text-accent-orange text-[14px]">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
</div>
<p className="text-sm text-slate-600 italic">"Good experience. The HFR verified badge gave me confidence in choosing this clinic."</p>
</div>
</div>
<div className="mt-8 flex items-center justify-center p-3 bg-primary/5 rounded-lg border border-dashed border-primary/20">
<span className="material-symbols-outlined text-primary text-sm mr-2">verified</span>
<p className="text-xs font-medium text-slate-500">All feedback is verified via linked patient health records.</p>
</div>
</section>
</div>
</div>
</main>

<footer className="mt-12 border-t border-primary/10 py-10 px-4 flex flex-col items-center justify-center text-center gap-4 bg-white">
<div className="flex items-center gap-2 text-slate-400">
<span className="material-symbols-outlined text-sm">database</span>
<p className="text-xs font-medium uppercase tracking-widest">Data sourced from JKMC, ABDM HFR.</p>
</div>
<p className="text-xs text-slate-500 font-semibold italic">Last updated: March 2026</p>
<div className="mt-4 flex gap-6">
<Link className="text-primary/60 hover:text-primary text-xs font-bold transition-colors" to="/">Privacy Policy</Link>
<Link className="text-primary/60 hover:text-primary text-xs font-bold transition-colors" to="/">Registry Terms</Link>
<Link className="text-primary/60 hover:text-primary text-xs font-bold transition-colors" to="/">Help Center</Link>
</div>
</footer>
</div>

        </div>
    );
}

export default ClinicProfilePage;
