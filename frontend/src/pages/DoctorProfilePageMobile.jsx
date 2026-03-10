import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function DoctorProfilePageMobile() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<div className="relative flex min-h-screen flex-col overflow-x-hidden">
<header className="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10 border-b border-primary/10">
<div className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
<span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
</div>
<h2 className="text-lg font-bold leading-tight flex-1 text-center pr-10">Doctor Profile</h2>
<div className="flex size-10 items-center justify-end rounded-full hover:bg-primary/10 cursor-pointer">
<span className="material-symbols-outlined text-slate-900 dark:text-slate-100">share</span>
</div>
</header>
<main className="flex-1 pb-24">
<section className="flex flex-col items-center p-6 gap-4 bg-white dark:bg-slate-900/50 mx-4 mt-4 rounded-xl shadow-sm border border-primary/5">
<div className="relative">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-primary/10" data-alt="Professional portrait of a female cardiologist in medical attire" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaNWfJggH8IY0p78uFyzZNS2ZbvhVeZbWjHzh2I5PTVco65Rq7a3txzPwKPgD5IqVYmBlea638lpZTLuMoIKJvG3tS7y_dMN75ngd2IuHrf12I80jpGJ6ddWN4NzRYwCxu0PA-DhwulafnoNUvFD_Ze8HYdrsJz6RzyyemDtqs7eyaz66UNoS7PBqpXK_pSInfc4xMZDp-POhxLhoqS7Er8uzRPQG2GTilCZAl4YM5YEJagODks6RhgHnF5F_E4Zt83awW8N9WEF5w");'></div>
<div className="absolute bottom-1 right-1 bg-green-500 border-2 border-white dark:border-slate-900 h-5 w-5 rounded-full"></div>
</div>
<div className="flex flex-col items-center text-center">
<h1 className="text-2xl font-extrabold tracking-tight">Dr. Sarah Johnson</h1>
<div className="flex items-center gap-1.5 mt-1">
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-primary/20">ABDM Verified</span>
</div>
<p className="text-primary font-semibold mt-2">Senior Cardiologist</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">15+ Years Experience • MBBS, MD, DM</p>
</div>
<div className="flex w-full gap-3 mt-2">
<button className="flex-1 h-12 bg-primary text-white rounded-lg font-bold text-base shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-xl">calendar_month</span>
                        Book Now
                    </button>
<button className="flex-1 h-12 bg-primary/10 text-primary rounded-lg font-bold text-base border border-primary/20 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-xl">chat_bubble</span>
                        Message
                    </button>
</div>
</section>
<section className="px-6 py-6 grid grid-cols-4 gap-4">
<div className="flex flex-col items-center gap-2">
<div className="rounded-full bg-primary/10 p-3 text-primary border border-primary/5">
<span className="material-symbols-outlined">public</span>
</div>
<p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Web</p>
</div>
<div className="flex flex-col items-center gap-2">
<div className="rounded-full bg-primary/10 p-3 text-primary border border-primary/5">
<span className="material-symbols-outlined">alternate_email</span>
</div>
<p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Social</p>
</div>
<div className="flex flex-col items-center gap-2">
<div className="rounded-full bg-primary/10 p-3 text-primary border border-primary/5">
<span className="material-symbols-outlined">video_camera_front</span>
</div>
<p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Vlog</p>
</div>
<div className="flex flex-col items-center gap-2">
<div className="rounded-full bg-primary/10 p-3 text-primary border border-primary/5">
<span className="material-symbols-outlined">contact_page</span>
</div>
<p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">CV</p>
</div>
</section>
<section className="px-6 py-4">
<h3 className="text-lg font-bold mb-3 flex items-center gap-2">
<span className="w-1.5 h-6 bg-primary rounded-full"></span>
                    About
                </h3>
<p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                    Dr. Sarah Johnson is a world-renowned cardiologist specializing in interventional cardiology. She has performed over 5,000 successful procedures and is committed to providing patient-centered care with the latest medical advancements.
                </p>
</section>
<section className="px-6 py-4">
<h3 className="text-lg font-bold mb-3 flex items-center gap-2">
<span className="w-1.5 h-6 bg-primary rounded-full"></span>
                    Qualifications
                </h3>
<div className="space-y-3">
<div className="flex gap-3 items-start">
<div className="mt-1 size-2 rounded-full bg-primary shrink-0"></div>
<div>
<p className="font-bold text-sm">MBBS - University of Medicine</p>
<p className="text-xs text-slate-500">Graduated First Class Honors, 2005</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="mt-1 size-2 rounded-full bg-primary shrink-0"></div>
<div>
<p className="font-bold text-sm">MD (General Medicine)</p>
<p className="text-xs text-slate-500">National Board of Excellence, 2008</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="mt-1 size-2 rounded-full bg-primary shrink-0"></div>
<div>
<p className="font-bold text-sm">DM (Cardiology)</p>
<p className="text-xs text-slate-500">Super-specialization, 2011</p>
</div>
</div>
</div>
</section>
<section className="px-6 py-4">
<h3 className="text-lg font-bold mb-4 flex items-center gap-2">
<span className="w-1.5 h-6 bg-primary rounded-full"></span>
                    Clinical Affiliations
                </h3>
<div className="flex flex-col gap-4">
<div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-bold text-primary">City Heart Institute</h4>
<p className="text-xs text-slate-500">Downtown Medical Center</p>
</div>
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded">Primary</span>
</div>
<div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">call</span>
<span className="text-sm font-medium">+1 234 567 890</span>
</div>
<Link to="/" className="flex items-center gap-1 text-sm font-bold text-primary ml-auto">
                                Get Directions
                                <span className="material-symbols-outlined text-sm">near_me</span>
</Link>
</div>
</div>
<div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-bold text-primary">Wellness Specialty Hospital</h4>
<p className="text-xs text-slate-500">North Wing, Sector 45</p>
</div>
</div>
<div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">call</span>
<span className="text-sm font-medium">+1 987 654 321</span>
</div>
<Link to="/" className="flex items-center gap-1 text-sm font-bold text-primary ml-auto">
                                Get Directions
                                <span className="material-symbols-outlined text-sm">near_me</span>
</Link>
</div>
</div>
</div>
</section>
</main>
<nav className="fixed bottom-0 w-full bg-white dark:bg-slate-900 border-t border-primary/10 px-4 pb-4 pt-2 flex justify-between items-center z-20">
<Link to="/" className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[24px]">home</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
</Link>
<Link to="/" className="flex flex-col items-center gap-1 text-slate-400">
<span className="material-symbols-outlined text-[24px]">search</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Search</span>
</Link>
<Link to="/" className="flex flex-col items-center gap-1 text-slate-400">
<span className="material-symbols-outlined text-[24px]">calendar_today</span>

</Link>
<Link to="/" className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
<span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
</Link>
</nav>
</div>

        </div>
    );
}

export default DoctorProfilePageMobile;
