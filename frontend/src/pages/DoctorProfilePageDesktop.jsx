import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function DoctorProfilePageDesktop() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}

            <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">

                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white dark:bg-background-dark px-6 md:px-20 py-4 sticky top-0 z-50">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined text-3xl">medical_services</span>
                                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Kashmir Healthcare</h2>
                            </div>
                            <nav className="hidden md:flex items-center gap-8">
                                <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                                <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">Doctors</Link>
                                <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">Hospitals</Link>
                                <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
                            </nav>
                        </div>
                        <div className="flex flex-1 justify-end gap-6 items-center">
                            <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-primary/5 dark:bg-primary/20">
                                    <div className="text-primary flex items-center justify-center pl-4 rounded-l-lg">
                                        <span className="material-symbols-outlined text-xl">search</span>
                                    </div>
                                    <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-primary/60 px-4 pl-2 text-sm font-normal" placeholder="Search doctors..." />
                                </div>
                            </label>
                            <Link to="/dashboard">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20 bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                            </Link>
                        </div>
                    </header>

                    <main className="max-w-6xl mx-auto w-full px-6 py-4">

                        <div className="flex flex-wrap items-center gap-2 py-4 text-sm font-medium">
                            <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
                            <span className="text-slate-400 material-symbols-outlined text-sm">chevron_right</span>
                            <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">Find Doctors</Link>
                            <span className="text-slate-400 material-symbols-outlined text-sm">chevron_right</span>
                            <span className="text-slate-900 dark:text-slate-100">Dr. Sameer Kaul</span>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center md:items-start gap-8 my-8">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl w-48 h-48 border-4 border-white dark:border-slate-800 shadow-lg" data-alt="Professional portrait of Dr. Sameer Kaul" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAimKe-Hr97swJsJfGvbYSYOQPdB18XIcuqZiv07JjpVCQHp1Cg0GOE1MwrmYrI1pM3bZEsWz7ItDib2O_1U2t56bsv0HsmKzvRtJjnFCSK1GyIGsngCFHfuma8ZuQUBpwKLSET_eIS712IfmbobYly_En3CYkaGBKugiCEJNeJ3I-qK-SVL173XZCQ_-f8d9RCayEacLHPUy9P5ieKoaVIwaWoUANqFWKpHXno6r_9xSZEM1-nc3g_2Q_vu3040roMbPLnep0p6oqs")' }}></div>
                                <div className="absolute -bottom-3 -right-3 bg-green-500 text-white rounded-full p-1.5 shadow-lg flex items-center justify-center border-4 border-white dark:border-slate-800">
                                    <span className="material-symbols-outlined text-lg font-bold">verified</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center md:text-left flex-1">
                                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
                                    <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Dr. Sameer Kaul</h1>
                                    <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">ABDM Verified | HPR Registered</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-lg mb-1">Senior Consultant - Internal Medicine</p>
                                <div className="flex flex-col gap-1 text-sm text-slate-500 dark:text-slate-400">
                                    <p className="flex items-center justify-center md:justify-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">fingerprint</span>
                                        HPR ID: <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">12-3456-7890-1234</span>
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">task_alt</span>
                                        Seniority verified via <Link to="/" className="text-primary underline">dhskashmir.org</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-10">

                            <div className="lg:col-span-2 space-y-10">
                                <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">person</span>
                                        About Dr. Sameer Kaul
                                    </h2>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        Specialist in Internal Medicine with over 15 years of clinical excellence.
                                        <span className="font-semibold text-primary"> Qualifications verified via JKMC (Jammu &amp; Kashmir Medical Council).</span>
                                        Dedicated to patient-centric care and evidence-based clinical practices.
                                    </p>
                                </section>

                                <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">account_balance</span>
                                        Clinical Affiliations
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                        {[
                                            { name: 'Govt. Medical College', location: 'Karan Nagar, Srinagar, J&K', phone: '+91 194-2452012', color: 'primary' },
                                            { name: 'SKIMS Medical Center', location: 'Soura, Srinagar, J&K', phone: '+91 194-2401013', color: 'secondary' },
                                            { name: 'The Private Clinic', location: 'Sanat Nagar, Srinagar, J&K', phone: '+91 94190-00000', color: 'accent-pink' },
                                        ].map((clinic, i) => (
                                            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                                                <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                                                    <div className={`bg-${clinic.color}/10 p-3 rounded-lg`}>
                                                        <span className={`material-symbols-outlined text-${clinic.color}`}>account_balance</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{clinic.name}</h3>
                                                        <p className="text-sm text-slate-500 font-medium">{clinic.location}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-6">
                                                    <div className={`flex items-center gap-2 text-${clinic.color} font-bold`}>
                                                        <span className="material-symbols-outlined text-sm">call</span>
                                                        <span>{clinic.phone}</span>
                                                    </div>
                                                    <Link to="/map" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold">
                                                        <span className="material-symbols-outlined text-sm">map</span>
                                                        View on Maps
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">payments</span>
                                        Consultation Details
                                    </h2>
                                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <div>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">In-Person Consultation</p>
                                            <p className="text-3xl font-extrabold text-primary">₹800</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Video Consultation</p>
                                            <p className="text-3xl font-extrabold text-secondary">₹500</p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <aside className="space-y-6">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-primary/10 sticky top-24">
                                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95 mb-6 shadow-lg shadow-primary/30">
                                        <span className="material-symbols-outlined">calendar_month</span>
                                        Book OPD via UHI
                                    </button>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">history</span>
                                                Consultation Timings
                                            </h3>
                                            <ul className="space-y-2 text-sm">
                                                <li className="flex justify-between text-slate-600 dark:text-slate-400">
                                                    <span>Mon - Fri</span>
                                                    <span className="font-semibold text-slate-900 dark:text-white">10:00 AM - 04:00 PM</span>
                                                </li>
                                                <li className="flex justify-between text-slate-600 dark:text-slate-400">
                                                    <span>Saturday</span>
                                                    <span className="font-semibold text-slate-900 dark:text-white">10:00 AM - 01:00 PM</span>
                                                </li>
                                                <li className="flex justify-between text-slate-400">
                                                    <span>Sunday</span>
                                                    <span className="font-semibold text-accent-pink uppercase">Closed</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">location_on</span>
                                                Map Location
                                            </h3>
                                            <Link to="/map" className="block h-40 bg-slate-200 dark:bg-slate-700 rounded-xl overflow-hidden relative group">
                                                <img alt="Map Location" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCaBEvrCgYKtXVLD3k9Xe8G65ueLZ8Kiq1Ut64T693VQ1E8i9h6ooDIKKwZbJneM0w-abMlA2LQaOweSd9JdOXvfyQxFKVREhX-5eQNc2ujEaI4RvEkOXXAHMsNZxH-dBJWlSNeghzVJlrJP8lpdRmGJCo53CFQEyjyutIjeLgaysrOrAKB8Hd2FlPO4HdoRCsGqLUOuZ9uZjD6fkx-aacQ0Qa6gp4G2BSO4BcEax2ticeiN5Y55v_T1O2AB2OeZii-awPyAxk-jBP" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="bg-primary text-white p-2 rounded-full shadow-lg">
                                                        <span className="material-symbols-outlined">location_on</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <p className="mt-2 text-xs text-slate-500 text-center">Click map for directions</p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        <section className="my-12 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Patient Reviews</h2>
                                    <p className="text-sm text-slate-500 italic mt-1 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-accent-orange text-lg">verified_user</span>
                                        <b>Note:</b> Reviews are verified through ABDM health records.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 bg-accent-orange/10 px-4 py-3 rounded-xl border border-accent-orange/20">
                                    <span className="text-accent-orange font-extrabold text-2xl">4.9</span>
                                    <div className="flex text-accent-orange">
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="material-symbols-outlined text-sm">star</span>
                                        <span className="material-symbols-outlined text-sm">star</span>
                                        <span className="material-symbols-outlined text-sm">star</span>
                                        <span className="material-symbols-outlined text-sm">star_half</span>
                                    </div>
                                    <span className="text-slate-500 text-sm font-semibold">(124 reviews)</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center text-accent-pink font-bold">AK</div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Aamir Khan</p>
                                            <p className="text-xs text-slate-500 font-medium">Verified Patient • 2 days ago</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300">"Excellent doctor. He was very patient and explained my condition in detail."</p>
                                </div>
                                <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold">RS</div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">Ritu Sharma</p>
                                            <p className="text-xs text-slate-500 font-medium">Verified Patient • 1 week ago</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300">"Highly professional approach. Dr. Sameer's expertise in geriatric care is outstanding."</p>
                                </div>
                            </div>
                        </section>
                    </main>

                    <footer className="bg-slate-900 text-slate-400 py-12 px-6 mt-12">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="col-span-1 md:col-span-2">
                                <div className="flex items-center gap-2 text-white mb-4">
                                    <span className="material-symbols-outlined">medical_services</span>
                                    <span className="font-bold text-xl">Kashmir Healthcare</span>
                                </div>
                                <p className="max-w-sm">Dedicated to bringing quality digital healthcare to every citizen through the ABDM framework.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4">Quick Links</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/search" className="hover:text-white transition-colors">Find a Doctor</Link></li>
                                    <li><Link to="/search" className="hover:text-white transition-colors">Hospitals</Link></li>
                                    <li><Link to="/search" className="hover:text-white transition-colors">Clinics &amp; Labs</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4">Register</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/add-doctor" className="hover:text-white transition-colors">Register Doctor</Link></li>
                                    <li><Link to="/add-clinic" className="hover:text-white transition-colors">Register Clinic</Link></li>
                                    <li><Link to="/add-lab" className="hover:text-white transition-colors">Register Lab</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
                            © 2024 Kashmir Healthcare Directory. All rights reserved.
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default DoctorProfilePageDesktop;
