import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function DashboardPageDesktop() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<div className="flex min-h-screen">
<aside className="fixed left-0 top-0 hidden h-full w-64 flex-col border-r border-slate-100 bg-white lg:flex">
<div className="flex h-20 items-center gap-3 px-6">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
<span className="material-symbols-outlined">health_and_safety</span>
</div>
<h1 className="text-xl font-extrabold tracking-tight text-primary">Kashmir HC</h1>
</div>
<nav className="flex-1 space-y-1 px-4 py-6">
<Link to="/" className="flex items-center gap-3 rounded-xl bg-primary/10 px-4 py-3 text-primary transition-colors">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-bold">Dashboard</span>
</Link>
<Link to="/" className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-medium">Appointments</span>
</Link>
<Link to="/" className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">favorite</span>
<span className="font-medium">Saved Facilities</span>
</Link>
<Link to="/" className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">search</span>
<span className="font-medium">Search Directory</span>
</Link>
<Link to="/" className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined">description</span>
<span className="font-medium">Health Records</span>
</Link>
</nav>
<div className="p-4">
<div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 text-white">
<p className="text-sm font-bold">Directory Stats</p>
<p className="mt-2 text-xs leading-relaxed opacity-90">2,500+ Listings Verified | 14 Districts Covered | Updated Daily via AI Agents</p>
</div>
</div>
</aside>
<main className="flex-1 lg:ml-64">
<header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-100 bg-white/80 px-8 backdrop-blur-md">
<div className="flex w-full max-w-md items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
<span className="material-symbols-outlined text-slate-400">search</span>
<input className="w-full border-none bg-transparent p-0 text-sm focus:ring-0" placeholder="Search clinics, doctors or services..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-hover hover:bg-slate-200">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent-pink"></span>
</button>
<div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200 border-2 border-white shadow-sm">
<img className="h-full w-full object-cover" data-alt="Portrait of a young male patient" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy8TW7g7zrsLBwmXqpYbup1YsawYbf3kABmuejjtyOiwfh2jX_vrkoWOa0P3s_-gOhtZcOB04D6nmrDu158A24zmhrW82qPyEu9rHvmW1FnniCQyv0zVZ96u9WIEO-rvG-qN-a6CQAAPFEbB68FCeWjFAlXjaYAOmc7fhRxqnZyKS2hhoj1cnRK9zVfgwKABZJ_DH6FJIcqAD9G4IHQFmo_dKXkJet9Nt3drlmzfqNUZJM-b1-k40GfdrdPfkLQgoc6j4ypmmH3rWJ"/>
</div>
</div>
</header>
<div className="p-8">
<section className="mb-10">
<h2 className="text-4xl font-black tracking-tight text-slate-900">My Health Dashboard</h2>
<p className="mt-2 text-lg text-slate-500">Track your appointments, saved facilities, and health records — powered by ABDM.</p>
</section>
<section className="mb-10">
<div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 border-l-4 border-primary">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h3 className="text-2xl font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">id_card</span>
                                My ABHA Profile
                            </h3>
<p className="mt-1 text-slate-500">Your Ayushman Bharat Health Account — the digital foundation for all your health interactions.</p>
</div>
<div className="flex flex-col gap-1 min-w-[300px]">
<label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your 14-digit ABHA ID</label>
<div className="flex items-center justify-between rounded-xl bg-surface px-4 py-3 font-mono text-xl font-bold text-primary tracking-widest ring-1 ring-slate-200">
                                91-2345-6789-0123
                                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">content_copy</span>
</div>
</div>
</div>
</div>
</section>
<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
<div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl hover:ring-primary/20">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">person_search</span>
</div>
<h3 className="text-lg font-bold">Search for Care</h3>
<p className="mt-1 text-sm text-slate-500">Find top rated doctors near you</p>
</div>
<div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl hover:ring-secondary/20">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</div>
<h3 className="text-lg font-bold">New Booking</h3>
<p className="mt-1 text-sm text-slate-500">Schedule a consultation via UHI</p>
</div>
<div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl hover:ring-accent-pink/20">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-pink/10 text-accent-pink group-hover:bg-accent-pink group-hover:text-white transition-colors">
<span className="material-symbols-outlined">lab_research</span>
</div>
<h3 className="text-lg font-bold">Lab Results</h3>
<p className="mt-1 text-sm text-slate-500">Check your latest reports</p>
</div>
<div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl hover:ring-accent-orange/20">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange/10 text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-colors">
<span className="material-symbols-outlined">pill</span>
</div>
<h3 className="text-lg font-bold">Prescriptions</h3>
<p className="mt-1 text-sm text-slate-500">Refill or view medication</p>
</div>
</div>
<div className="grid grid-cols-1 gap-10 xl:grid-cols-3">
<div className="xl:col-span-2">
<div className="mb-6 flex items-center justify-between">
<div>
<h3 className="text-2xl font-bold">Upcoming Appointments</h3>
<span className="inline-flex mt-1 items-center gap-1 rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
<span className="material-symbols-outlined text-[14px]">bolt</span>
                                Booked via UHI (Unified Health Interface)
                            </span>
</div>
<Link to="/">View All</Link>
</div>
<div className="space-y-4">
<div className="flex items-center gap-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md">
<div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-slate-50 text-slate-900 ring-1 ring-inset ring-slate-200">
<span className="text-xs font-bold uppercase tracking-wider text-primary">Oct</span>
<span className="text-2xl font-black">24</span>
</div>
<div className="flex-1">
<h4 className="text-lg font-bold">Dr. Parvez Ahmad</h4>
<p className="text-slate-500">Cardiology • City Hospital, Srinagar</p>
<div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-400">
<span className="material-symbols-outlined text-base">schedule</span>
                                    10:30 AM (In-person)
                                </div>
</div>
<div className="flex gap-2">
<button className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">Reschedule</button>
<button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90 transition-opacity">Details</button>
</div>
</div>
<div className="flex items-center gap-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md">
<div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-slate-50 text-slate-900 ring-1 ring-inset ring-slate-200">
<span className="text-xs font-bold uppercase tracking-wider text-secondary">Nov</span>
<span className="text-2xl font-black">02</span>
</div>
<div className="flex-1">
<h4 className="text-lg font-bold">Med-Check Diagnostic Center</h4>
<p className="text-slate-500">Blood Routine • Karan Nagar Branch</p>
<div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-400">
<span className="material-symbols-outlined text-base">schedule</span>
                                    08:00 AM (Check-in)
                                </div>
</div>
<div className="flex gap-2">
<button className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">Reschedule</button>
<button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-90 transition-opacity">Details</button>
</div>
</div>
</div>
<section className="mt-12">
<div className="mb-6">
<h3 className="text-2xl font-bold">Recently Viewed</h3>
<p className="text-sm text-slate-500">Profiles you've recently visited.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 hover:ring-primary/20 cursor-pointer">
<img alt="Dr. Saima Malik" className="h-12 w-12 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn2MSxt7nHY4uuB9OML926bs_A5yPsfKacSzE1AgHZC4tjebN5JK4zEXWEAl_f0UcuS7StYOHRunLUHihwQPJOto9wr9uQqCHWujxriDOjiDE0rBViybKjc6-Uw-i05sLI-WHUshysmaEmAV5W_q-htpGRaYP195k_LNOZ_fxG91xonI7Qqcbdsm1WlNcSnWaC0zQOtgmuAOhtOr6MdqBBr8Hr5d4mh8cfgnDzscO-RmyW6WnlIPJ7X9HyFDkBTGGpzTpalgNX1MiJ"/>
<div>
<h5 className="font-bold text-slate-900">Dr. Saima Malik</h5>
<p className="text-xs text-slate-500">Dermatologist • Srinagar</p>
</div>
</div>
<div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 hover:ring-primary/20 cursor-pointer">
<img alt="Lala Ded Hospital" className="h-12 w-12 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmswOoG-Z36JJXqQrw3VogZfb3e3VcqtQcu9-uXqZ0Bjxxmeit_RhNUCS4TdJOJILp50-nuwFPfI864nxG72PQFL9r6mXOvAw8MQVHQ1YC-B826sIqbdsAtVGHfM5woQql8EzqXgXdgiu_cnSnGz1qKKqS3jgsKWyO1cxvthXLosRbHfeApj1krH5aPRaiFlGHfx4KuMiTZeGMy43yAU_Xpif9iG0beOeqbsvd5SXJUfF6WI-4L_YjJnnz3kngKE_1pKUMnZ60dLma"/>
<div>
<h5 className="font-bold text-slate-900">Lala Ded Hospital</h5>
<p className="text-xs text-slate-500">Public Hospital • Srinagar</p>
</div>
</div>
</div>
</section><section className="mt-12">
<div className="mb-6">
<h3 className="text-2xl font-bold">My Registration Status</h3>
<p className="text-sm text-slate-500">Registration Status: Your submitted listings are being cross-referenced with official registries.</p>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
<span className="material-symbols-outlined">person_add</span>
</div>
<div>
<h5 className="font-bold text-slate-900">Dr. Bilal Rather</h5>
<p className="text-xs text-slate-500">Cardiologist • Practitioner Submission</p>
</div>
</div>
<span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{backgroundColor: "#FFA47F"}}>
                Pending Verification
            </span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
<span className="material-symbols-outlined">domain_add</span>
</div>
<div>
<h5 className="font-bold text-slate-900">Shafa Healthcare Clinic</h5>
<p className="text-xs text-slate-500">Sopore • Clinic Submission</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{backgroundColor: "#FF52A0"}}>
                    AI Scanning
                </span>
</div>
</div>
<div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md opacity-75">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<h5 className="font-bold text-slate-900">Kashmir Ortho Center</h5>
<p className="text-xs text-slate-500">Baramulla • Clinic Submission</p>
</div>
</div>
<span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{backgroundColor: "#8100D1"}}>
                ABDM Verified
            </span>
</div>
</div>
</section>
</div>
<div className="xl:col-span-1">
<div className="mb-6">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-bold">Saved Facilities</h3>
<Link to="/">Manage</Link>
</div>
<p className="mt-1 text-xs text-slate-500">Clinics and doctors you have bookmarked from the Kashmir Healthcare Directory.</p>
</div>
<div className="rounded-2xl bg-surface p-6 shadow-inner">
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="h-12 w-12 overflow-hidden rounded-xl bg-white">
<img className="h-full w-full object-cover" data-alt="Modern hospital building exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmswOoG-Z36JJXqQrw3VogZfb3e3VcqtQcu9-uXqZ0Bjxxmeit_RhNUCS4TdJOJILp50-nuwFPfI864nxG72PQFL9r6mXOvAw8MQVHQ1YC-B826sIqbdsAtVGHfM5woQql8EzqXgXdgiu_cnSnGz1qKKqS3jgsKWyO1cxvthXLosRbHfeApj1krH5aPRaiFlGHfx4KuMiTZeGMy43yAU_Xpif9iG0beOeqbsvd5SXJUfF6WI-4L_YjJnnz3kngKE_1pKUMnZ60dLma"/>
</div>
<div className="flex-1">
<h5 className="font-bold">Kashmir Institute of Medical Sciences</h5>
<p className="text-xs text-slate-400">Srinagar, Kashmir</p>
</div>
<button className="text-accent-pink">
<span className="material-symbols-outlined fill-1">favorite</span>
</button>
</div>
<div className="flex items-center gap-4">
<div className="h-12 w-12 overflow-hidden rounded-xl bg-white">
<img className="h-full w-full object-cover" data-alt="Female doctor smiling portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn2MSxt7nHY4uuB9OML926bs_A5yPsfKacSzE1AgHZC4tjebN5JK4zEXWEAl_f0UcuS7StYOHRunLUHihwQPJOto9wr9uQqCHWujxriDOjiDE0rBViybKjc6-Uw-i05sLI-WHUshysmaEmAV5W_q-htpGRaYP195k_LNOZ_fxG91xonI7Qqcbdsm1WlNcSnWaC0zQOtgmuAOhtOr6MdqBBr8Hr5d4mh8cfgnDzscO-RmyW6WnlIPJ7X9HyFDkBTGGpzTpalgNX1MiJ"/>
</div>
<div className="flex-1">
<h5 className="font-bold">Dr. Farah Jan</h5>
<p className="text-xs text-slate-400">Pediatrics • Pulse Clinic</p>
</div>
<button className="text-accent-pink">
<span className="material-symbols-outlined fill-1">favorite</span>
</button>
</div>
<div className="flex items-center gap-4">
<div className="h-12 w-12 overflow-hidden rounded-xl bg-white">
<img className="h-full w-full object-cover" data-alt="Dental clinic office logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2zNhS18xJBnG708F3Khh5Yomr6Yv6hPz70XqhogKzN2nx_L63_QpjFZ3OvNbLrfME3sUg1_ktVMqMO9NOCEfxdv8yGkdzP4E1uNA6nGk3VuUy6QRgOVT_R_qXcwgQTOiJlJKzj7qWlDt60-zcKkG-jcvzc7I8UwRotsJN_w86SFNVB6OoL6jNF0jD1O8tDAX5_ITmBuRF4CCydrGYORZbGKkGQqAHwh8j3g_-fgTXW7TB2dIYnx8Avm671ijxUbF1m2ctLcrAZQsg"/>
</div>
<div className="flex-1">
<h5 className="font-bold">Valley Dental Care</h5>
<p className="text-xs text-slate-400">Anantnag, Kashmir</p>
</div>
<button className="text-accent-pink">
<span className="material-symbols-outlined fill-1">favorite</span>
</button>
</div>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 py-3 text-sm font-bold text-slate-500 hover:bg-white hover:text-primary transition-all">
<span className="material-symbols-outlined text-base">add</span>
                                Find more care
                            </button>
</div>
</div>
<div className="mt-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 p-6 ring-1 ring-primary/10">
<h4 className="text-lg font-bold text-slate-900">Directory Contributions</h4>
<p className="mt-2 text-sm text-slate-600 leading-relaxed">Help keep Kashmir's healthcare directory accurate. Report outdated information or add a missing clinic.</p>
<button className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white hover:opacity-90 transition-opacity">
                            Add a Missing Clinic or Practitioner
                        </button>
</div>
</div>
</div>
<div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl bg-slate-50 p-6 text-sm font-bold text-slate-500">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">verified</span>
                    2,500+ Listings Verified
                </div>
<div className="h-4 w-px bg-slate-300 hidden md:block"></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">map</span>
                    14 Districts Covered
                </div>
<div className="h-4 w-px bg-slate-300 hidden md:block"></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-accent-pink">psychology</span>
                    Updated Daily via AI Agents
                </div>
</div>
<footer className="mt-16 border-t border-slate-100 py-8 text-center">
<p className="text-sm text-slate-400">
                    Kashmir Healthcare Directory | Powered by ABDM | Data accuracy ensured by autonomous AI verification agents.
                </p>
</footer>
</div>
<div className="fixed bottom-0 left-0 z-50 flex h-16 w-full border-t border-slate-100 bg-white lg:hidden">
<Link to="/" className="flex flex-1 flex-col items-center justify-center text-primary">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold">Home</span>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined">calendar_today</span>
<span className="text-[10px] font-bold">Dates</span>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined text-3xl">add_circle</span>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined">favorite</span>
<span className="text-[10px] font-bold">Saved</span>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold">Profile</span>
</Link>
</div>
</main>
</div>

        </div>
    );
}

export default DashboardPageDesktop;
