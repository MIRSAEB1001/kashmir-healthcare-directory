import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function SearchResultsPageDesktop() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<div className="relative flex min-h-screen w-full flex-col">

<header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2">
<div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent-pink text-white">
<span className="material-symbols-outlined">health_and_safety</span>
</div>
<h2 className="text-xl font-extrabold tracking-tight text-primary"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Kashmir Healthcare</Link></h2>
</div>
<nav className="hidden md:flex items-center gap-8"><Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Find Doctors</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Hospitals</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Clinics</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Labs</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/">About</Link></nav>
</div>
<div className="flex items-center gap-8">
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/dashboard">Login</Link>
<Link to="/dashboard" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">Register</Link>
</div>
</div>
</header>
<main className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8">
<div className="flex flex-col gap-8 lg:flex-row">

<aside className="w-full shrink-0 lg:w-64">
<div className="sticky top-24 flex flex-col gap-6 bg-white dark:bg-white/5 p-6 rounded-2xl border border-primary/5 shadow-sm">
<div>
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Filters</h3>
<div className="mt-2 flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="font-bold">Srinagar</span>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 rounded-lg px-2 py-1 text-slate-700 dark:text-slate-200">
<span className="material-symbols-outlined text-primary">category</span>
<span className="text-sm font-bold">Primary Categories</span>
</div>
<div className="space-y-2">
<label className="flex items-center gap-2 text-sm ml-1">
<input checked="" className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                                    Cardiologists
                                </label>
<label className="flex items-center gap-2 text-sm text-slate-500 ml-1">
<input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                                    Surgeons
                                </label>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 rounded-lg bg-primary/5 px-3 py-2 text-primary">
<span className="material-symbols-outlined">tune</span>
<span className="text-sm font-bold">Refine Search</span>
</div>
<div className="space-y-3 pt-1">
<label className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">today</span> Available Today</span>
<input className="h-4 w-4 rounded-full border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">verified_user</span> ABDM Verified</span>
<input checked="" className="h-4 w-4 rounded-full border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-sm">
<span className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">videocam</span> Video Consultation</span>
<input className="h-4 w-4 rounded-full border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
</label>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 px-2 py-1 text-slate-700 dark:text-slate-200">
<span className="material-symbols-outlined text-primary">stethoscope</span>
<span className="text-sm font-bold">Specialties</span>
</div>
<div className="text-sm text-primary font-medium cursor-pointer">View all 12+</div>
</div>
</div>
</aside>

<section className="flex-1">
<div className="mb-6">
<nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
<Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-slate-600 dark:text-slate-300">Search Results</span>
</nav>
<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            Cardiologists in <span className="text-primary">Srinagar</span>
</h1>
<p className="mt-1 text-slate-500">24 verified specialists available for booking</p>
</div>

<div className="grid gap-4">

<div className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-background-dark dark:ring-1 dark:ring-primary/20">
<div className="flex flex-col gap-6 md:flex-row">
<div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl border-2 border-primary/10">
<img className="h-full w-full object-cover" data-alt="Portrait of a professional cardiologist in a white coat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq9QvnbNtk76UutqzJ2Q6u7K5Bbt6SsSEAqANIeespHDdjG-nEtNaksV_4wHznRHAWNR_RIw7U0OTNFGlXVejrShWMG6WK82ryS7DG-ImX70AgNDOeN0K4rq7JUj7sxF9G9Vag3W6w8GsNBZ9FukcLIX3NGRrmNBbkKsZIstR2cadi8Ou5098uRH78TJW7Fye7gqyYhOgTrRsEG1pbW92xHKYjjTLeRGFocTaP7Go2wmMIN9glbIQdPkuH_b7pVXxDndgElodAHem5"/>
<div className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 ring-4 ring-white">
<span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
</div>
</div>
<div className="flex flex-1 flex-col">
<div className="flex flex-wrap items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Dr. Arsalan Shah</h3>
<span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                                                    ABDM Verified | HPR Registered
                                                </span>
</div>
<p className="mt-1 font-semibold text-secondary">Cardiology &amp; Heart Specialist</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1 text-sm font-bold text-accent-orange">
<span className="material-symbols-outlined text-[18px]">star</span> 4.9 (120 Reviews)
                                            </div>
<p className="text-xs text-slate-400">₹800 Consultation Fee</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                                            15+ Years Exp
                                        </div>
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                                            Karan Nagar, Srinagar
                                        </div>
<div className="flex items-center gap-2 text-sm font-bold text-green-600">
<span className="material-symbols-outlined text-[20px]">schedule</span>
                                            Open • Closes 7:00 PM
                                        </div>
</div>
<div className="mt-4 flex flex-wrap gap-4 py-3 border-y border-primary/5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">call</span>
<span className="text-sm font-bold text-slate-700 dark:text-slate-200">+91 194 245 2233</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
<span className="text-sm font-medium text-slate-600 dark:text-slate-400">Main Market, Karan Nagar, Srinagar</span>
</div>
</div><div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-white/5">
<div className="flex gap-2">
<span className="rounded-lg bg-accent-pink/5 px-3 py-1 text-xs font-bold text-accent-pink">Video Consult</span>
<span className="rounded-lg bg-accent-orange/5 px-3 py-1 text-xs font-bold text-accent-orange">Clinic Visit</span>
</div>
<Link to="/doctor/1" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">View Profile</Link>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-background-dark dark:ring-1 dark:ring-primary/20">
<div className="flex flex-col gap-6 md:flex-row">
<div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl border-2 border-primary/10">
<img className="h-full w-full object-cover" data-alt="Portrait of a female cardiologist doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcXchrMngutsXE_TtAW99uoDslymxND8WCHPkBUWG2_7l9XaoRHjw7zfuvscji66S0R4Tz4lCecq6YWyHoFrAOOqVy__DkpI0861edq3uezr2RiQzZPapsHSy9RFCu0sdgo50-Q2-VKEeWSmMx_2XmYtjmhhH3WfmwIOBveB319UTHHTUfQr97MXrKzVedEimDGpBkGgeE3iT1zGoADwcrv-IetZK2ls4F0zyAEaEKct7LTYjcS9lSP3Np9nDyjm9tYRwt-Rl7_lLg"/>
<div className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 ring-4 ring-white">
<span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
</div>
</div>
<div className="flex flex-1 flex-col">
<div className="flex flex-wrap items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Dr. Mehak Zehra</h3>
<span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                                                    ABDM Verified | HPR Registered
                                                </span>
</div>
<p className="mt-1 font-semibold text-secondary">Interventional Cardiologist</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1 text-sm font-bold text-accent-orange">
<span className="material-symbols-outlined text-[18px]">star</span> 4.8 (85 Reviews)
                                            </div>
<p className="text-xs text-slate-400">₹1000 Consultation Fee</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                                            10+ Years Exp
                                        </div>
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                                            Hyderpora, Srinagar
                                        </div>
<div className="flex items-center gap-2 text-sm font-bold text-accent-pink">
<span className="material-symbols-outlined text-[20px]">schedule</span>
                                            Closing Soon • Closes 5:00 PM
                                        </div>
</div>
<div className="mt-4 flex flex-wrap gap-4 py-3 border-y border-primary/5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">call</span>
<span className="text-sm font-bold text-slate-700 dark:text-slate-200">+91 194 245 4455</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
<span className="text-sm font-medium text-slate-600 dark:text-slate-400">Circular Road, Hyderpora, Srinagar</span>
</div>
</div><div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-white/5">
<div className="flex gap-2">
<span className="rounded-lg bg-accent-orange/5 px-3 py-1 text-xs font-bold text-accent-orange">Clinic Visit Only</span>
</div>
<Link to="/doctor/1" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">View Profile</Link>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-background-dark dark:ring-1 dark:ring-primary/20">
<div className="flex flex-col gap-6 md:flex-row">
<div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl border-2 border-primary/10">
<img className="h-full w-full object-cover grayscale-[0.5]" data-alt="Portrait of an experienced male heart surgeon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl2E23WhbKzft0jrhONQEFKYgsdxMDhr7Bfg9kG92-p2vHgGABDYZnIVjHWAcVQv5gcq8It9oakjpbzlW_-mdJT2Yd5SDY0pyQGKIscek4NAOTPRTc8C0290_B3InY01nvY4DMhtB2AIwo1f_xd8Mu7q7d--GsWRkBwVw20Trz6GNFEWqDzSXZXlSRO3b7RRhcKkwwqGQl5ce9ynnHjIPzCekudXg_XMIeFHyLhg1z5md0XcTyNkvN4I_X6p0VwArr1XjXx6tBmlf9"/>
<div className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 ring-4 ring-white">
<span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
</div>
</div>
<div className="flex flex-1 flex-col">
<div className="flex flex-wrap items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<h3 className="text-xl font-bold text-slate-900 dark:text-white">Dr. Zaid Manzoor</h3>
<span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                                                    ABDM Verified | HPR Registered
                                                </span>
</div>
<p className="mt-1 font-semibold text-secondary">Senior Heart Surgeon</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1 text-sm font-bold text-accent-orange">
<span className="material-symbols-outlined text-[18px]">star</span> 5.0 (200+ Reviews)
                                            </div>
<p className="text-xs text-slate-400">₹1500 Consultation Fee</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                                            22+ Years Exp
                                        </div>
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                                            Nowhatta, Srinagar
                                        </div>
<div className="flex items-center gap-2 text-sm font-bold text-green-600">
<span className="material-symbols-outlined text-[20px]">schedule</span>
                                            Open • Closes 8:00 PM
                                        </div>
</div>
<div className="mt-4 flex flex-wrap gap-4 py-3 border-y border-primary/5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">call</span>
<span className="text-sm font-bold text-slate-700 dark:text-slate-200">+91 194 245 7788</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
<span className="text-sm font-medium text-slate-600 dark:text-slate-400">Jamia Masjid Road, Nowhatta, Srinagar</span>
</div>
</div><div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4 dark:border-white/5">
<div className="flex gap-2">
<span className="rounded-lg bg-primary/5 px-3 py-1 text-xs font-bold text-primary">Highly Recommended</span>
</div>
<Link to="/doctor/1" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">View Profile</Link>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 flex items-center justify-center gap-2">
<button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-primary/20 hover:bg-primary hover:text-white dark:bg-background-dark">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-white">1</button>
<button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-slate-600 hover:bg-primary/10 dark:bg-background-dark dark:text-slate-300">2</button>
<button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-slate-600 hover:bg-primary/10 dark:bg-background-dark dark:text-slate-300">3</button>
<button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-primary/20 hover:bg-primary hover:text-white dark:bg-background-dark">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</section>
</div>
</main>
<footer className="mt-auto border-t border-primary/10 bg-white py-12 dark:bg-background-dark">
<div className="mx-auto max-w-7xl px-4 lg:px-8">
<div className="flex flex-col items-center justify-between gap-8 md:flex-row">
<div className="flex items-center gap-2">
<div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
<span className="material-symbols-outlined text-[18px]">health_and_safety</span>
</div>
<h2 className="text-lg font-extrabold tracking-tight text-primary">Kashmir Healthcare</h2>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<Link to="/">About Us</Link>
<Link to="/">Contact</Link>
<Link to="/">Terms</Link>
<Link to="/">Privacy Policy</Link>
</div>
<p className="text-sm text-slate-400">© 2024 Kashmir Healthcare. All rights reserved.</p>
</div>
</div>
</footer>
</div>

        </div>
    );
}

export default SearchResultsPageDesktop;
