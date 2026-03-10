import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function MapViewPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            ```html










<div className="flex h-screen w-full flex-col">
<header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined">map</span>
</div>
<div className="flex flex-col">
<h2 className="text-sm font-extrabold tracking-tight text-primary uppercase leading-none">Find Healthcare Near You</h2>
<p className="text-[10px] text-slate-500 font-medium">Kashmir Interactive Map</p>
</div>
</div>
<div className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 border border-transparent focus-within:border-primary/50 transition-all w-[300px]">
<span className="material-symbols-outlined text-slate-400">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium placeholder:text-slate-400" placeholder="Search by area, specialty, or clinic name in Kashmir..." type="text"/>
</div>
</div><nav className="hidden xl:flex items-center gap-6 ml-8">
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Find Doctors</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Hospitals</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Clinics</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Labs</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/">About</Link>
</nav>
<div className="flex items-center gap-4"><div className="hidden xl:block text-right max-w-xs">
<p className="text-[10px] leading-tight text-slate-400 italic">Discover verified clinics, hospitals, and practitioners across Kashmir.</p>
</div>
<div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
<div className="flex items-center gap-3">
<Link to="/dashboard" className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">Login</Link>
<Link to="/dashboard" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">Register</Link>
</div></div>
</header>
<div className="flex flex-1 overflow-hidden relative">
<aside className="w-full max-w-[400px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark z-40 flex flex-col shadow-2xl">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark">
<div className="flex items-center justify-between mb-4">
<h1 className="text-xl font-bold">Verified Nearby Facilities</h1>
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">32 Near You</span>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
<button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-primary text-white text-[11px] font-bold shadow-lg shadow-primary/20">ABDM Verified</button>
<button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">HFR Registered</button>
<button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">UHI Booking Available</button>
<button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Open Now</button>
<button className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Near Me</button>
</div>
</div>
<div className="px-6 py-4 bg-primary/5 border-b border-primary/10">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-primary text-sm">verified</span>
<h4 className="text-xs font-bold text-primary">NAP Consistency Verified</h4>
</div>
<p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">Name, Address, and Phone data cross-checked between Google Maps, social media announcements, and official J&amp;K government registries. Discrepancies are flagged for review.</p>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
<div className="group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded">HFR Registered</span>
<div className="flex items-center gap-1">
<span className="size-2 rounded-full bg-green-500"></span>
<span className="text-[10px] font-bold text-green-600 uppercase">Open Now</span>
</div>
</div>
<h3 className="text-lg font-bold group-hover:text-primary transition-colors">Srinagar Heart Institute</h3>
<div className="flex items-center gap-1 mb-1">
<div className="flex text-amber-400">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star_half</span>
</div>
<span className="text-[10px] font-bold text-slate-400">4.5</span>
<span className="text-[9px] text-slate-400 font-medium ml-1">Google Maps verified rating</span>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1 mb-3">
<span className="material-symbols-outlined text-sm">location_on</span>
                        Rajbagh, Srinagar
                    </p>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Cardiology</span>
<span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> ABDM
                            </span>
</div>
<button className="bg-primary text-white p-2 rounded-lg hover:bg-secondary transition-all">
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
<div className="group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/5 px-2 py-0.5 rounded">Private Clinic</span>
<div className="flex items-center gap-1">
<span className="size-2 rounded-full bg-slate-400"></span>
<span className="text-[10px] font-bold text-slate-500 uppercase">Closed</span>
</div>
</div>
<h3 className="text-lg font-bold group-hover:text-primary transition-colors">Valley Child Care</h3>
<div className="flex items-center gap-1 mb-1">
<div className="flex text-amber-400">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star</span>
</div>
<span className="text-[10px] font-bold text-slate-400">5.0</span>
<span className="text-[9px] text-slate-400 font-medium ml-1">Google Maps verified rating</span>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1 mb-3">
<span className="material-symbols-outlined text-sm">location_on</span>
                        Lal Bazar, Srinagar
                    </p>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Pediatrics</span>
</div>
<button className="bg-slate-100 dark:bg-slate-800 text-slate-500 p-2 rounded-lg">
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
<div className="group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/5 px-2 py-0.5 rounded">Solo Practitioner</span>
<div className="flex items-center gap-1">
<span className="size-2 rounded-full bg-green-500"></span>
<span className="text-[10px] font-bold text-green-600 uppercase">Open Now</span>
</div>
</div>
<h3 className="text-lg font-bold group-hover:text-primary transition-colors">Kashmir Poly Clinic</h3>
<div className="flex items-center gap-1 mb-1">
<div className="flex text-amber-400">
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm fill-1">star</span>
<span className="material-symbols-outlined text-sm">star_outline</span>
</div>
<span className="text-[10px] font-bold text-slate-400">4.2</span>
<span className="text-[9px] text-slate-400 font-medium ml-1">Google Maps verified rating</span>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1 mb-3">
<span className="material-symbols-outlined text-sm">location_on</span>
                        Hyderpora, Srinagar
                    </p>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">General Medicine</span>
</div>
<button className="bg-primary text-white p-2 rounded-lg hover:bg-secondary transition-all">
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
<p className="text-[10px] text-slate-500 font-medium italic">Map data cross-referenced with ABDM HFR Registry for location accuracy.</p>
</div>
</aside>
<main className="flex-1 relative">
<div className="absolute inset-0 bg-[#e5e7eb] dark:bg-[#1f2937] overflow-hidden">
<div className="w-full h-full opacity-70 grayscale-[0.1]" data-location="Srinagar" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcpxSSU9nhMlHN35INoQWFu0B7XNqgvd6k8IiS4wtl1c0EKOrfZmUhd4avuvUcz0Efxz7OOHOGvsziZpxVNrLaJEhHMlKSLApDOPFUIn0ZdbpKnO9C-HvnhNpdpMz36igtXgCf6oB3DhoTSnS2Hm04_1FeT7nMbNgAeb_BlMxcdWk91ImctqW2ddqWQLSKbA5bwsw6rRJZXucC3s85zQnGMPJMTEF-kyX-7VFwweXBNhoUsL0xlFC5eT8r0_m4-U_-rJZThN14jRL4')", backgroundSize: "cover", backgroundPosition: "center"}}>
<div className="absolute top-[35%] left-[45%] flex flex-col items-center">
<div className="relative flex items-center justify-center group">
<div className="absolute size-10 bg-primary/20 rounded-full animate-ping"></div>
<div className="relative z-10 size-10 bg-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-white text-lg">domain</span>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white dark:bg-background-dark p-3 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-800 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<h4 className="text-sm font-bold">Public General Hospital</h4>
<p className="text-xs text-slate-500">Karan Nagar • Public</p>
<div className="flex items-center gap-1 mt-2">
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-1 rounded">ABDM VERIFIED</span>
</div>
</div>
</div>
</div>
<div className="absolute top-[55%] left-[60%] flex flex-col items-center">
<div className="relative flex items-center justify-center group">
<div className="size-10 bg-secondary rounded-full border-4 border-white shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-white text-lg">medical_services</span>
</div>
</div>
</div>
<div className="absolute top-[25%] left-[25%] flex flex-col items-center">
<div className="relative flex items-center justify-center group">
<div className="size-10 bg-accent rounded-full border-4 border-white shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-white text-lg">dentistry</span>
</div>
</div>
</div>
<div className="absolute top-[70%] left-[35%] flex flex-col items-center">
<div className="relative flex items-center justify-center group">
<div className="size-10 bg-warm rounded-full border-4 border-white shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-white text-lg">exercise</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-6 right-6 flex flex-col gap-2">
<div className="flex flex-col bg-white dark:bg-background-dark rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
<button className="p-3 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors border-b border-slate-100 dark:border-slate-800">
<span className="material-symbols-outlined">add</span>
</button>
<button className="p-3 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<span className="material-symbols-outlined">remove</span>
</button>
</div>
<button className="bg-white dark:bg-background-dark p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<span className="material-symbols-outlined">my_location</span>
</button>
<button className="bg-white dark:bg-background-dark p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
<span className="material-symbols-outlined">layers</span>
</button>
</div>
<div className="absolute bottom-6 right-6 left-6 md:left-auto">
<div className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-wrap gap-8 items-center max-w-lg md:max-w-none ml-auto">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<p className="text-[10px] font-bold text-slate-500 uppercase">Verification Registry</p>
<p className="text-sm font-extrabold text-primary">ABDM &amp; JKMC Certified</p>
</div>
</div>
<div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">distance</span>
</div>
<div>
<p className="text-[10px] font-bold text-slate-500 uppercase">Proximity</p>
<p className="text-sm font-extrabold">Within 5km Radius</p>
</div>
</div>
<button className="ml-auto bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-secondary transition-all">
                        View List Mode
                    </button>
</div>
</div>
<div className="absolute top-6 left-6 hidden xl:block">
<div className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl">
<p className="text-[10px] font-bold text-slate-500 uppercase mb-4 tracking-widest border-b border-slate-100 dark:border-slate-800 pb-2">Map Legend</p>
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-primary ring-4 ring-primary/10"></span>
<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Public Hospitals</span>
</div>
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-secondary ring-4 ring-secondary/10"></span>
<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Private Clinics</span>
</div>
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-accent ring-4 ring-accent/10"></span>
<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Dental Clinics</span>
</div>
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-warm ring-4 ring-warm/10"></span>
<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Physiotherapy Centers</span>
</div>
<div className="flex items-center gap-3">
<span className="size-3 rounded-full bg-slate-400 ring-4 ring-slate-100 dark:ring-slate-800"></span>
<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Solo Practitioners</span>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

```
        </div>
    );
}

export default MapViewPage;
