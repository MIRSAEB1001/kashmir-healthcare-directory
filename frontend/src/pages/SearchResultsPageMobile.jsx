import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function SearchResultsPageMobile() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

                <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10">
                    <div className="flex items-center p-4 gap-3">
                        <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 text-primary transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <div className="flex-1">
                            <h1 className="text-lg font-bold tracking-tight">Search Results</h1>
                            <p className="text-xs text-primary font-medium">248 providers found</p>
                        </div>
                        <button className="flex items-center justify-center size-10 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined">tune</span>
                        </button>
                    </div>
                    <div className="px-4 pb-4">
                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-4 text-primary">search</span>
                            <input className="w-full bg-white dark:bg-slate-800/50 border-none rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary shadow-sm" placeholder="Search doctors, specialty, area..." type="text" value="Cardiologist in Downtown" />
                        </div>
                    </div>

                    <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
                        <button className="flex items-center gap-1 shrink-0 px-4 py-2 rounded-full bg-primary text-white text-xs font-semibold">
                            Verified Only <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        </button>
                        <button className="flex items-center gap-1 shrink-0 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            Open Now <span className="material-symbols-outlined text-[16px]">schedule</span>
                        </button>
                        <button className="flex items-center gap-1 shrink-0 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            Near Me <span className="material-symbols-outlined text-[16px]">location_on</span>
                        </button>
                        <button className="flex items-center gap-1 shrink-0 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            Top Rated <span className="material-symbols-outlined text-[16px]">star</span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-4 space-y-4">

                    <div className="bg-white dark:bg-slate-800/40 rounded-xl overflow-hidden shadow-sm border border-primary/5">
                        <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-700">
                            <img className="w-full h-full object-cover" data-alt="Professional female doctor smiling in a modern medical clinic office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwM4O3_LTrP7VuVjaNKlnNSZRMeAFzUb3QDdMTCWW13o3-n6nxgxvnIj9G_zoZdUntjQJj2NeA3BJuOztMzvmADRmo0NETBM9vqE3L4y-vZ0PpwCQYXTLHSjUeLyfVXnNRVV_FJMKxpzGSO42TS2F_oGKdUqAvrOQboiZPEuUKVG3EJnKaVMyrLJLViWJemctAxqcxfgOBe3eI19kBNMZR_NRK8u7qqnGbHFSQDetuVW40sAhZHKnllmKtqAzgQxm0ZmLsWI8MtsHg" />
                            <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded flex items-center gap-1 text-[10px] font-bold text-primary">
                                <span className="material-symbols-outlined text-[14px] fill-1">verified</span> ABDM VERIFIED
                            </div>
                            <div className="absolute bottom-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold">
                                OPEN
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold">Dr. Sarah Jenkins</h3>
                                    <p className="text-sm text-primary font-medium">Senior Cardiologist</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[18px]">share</span>
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                    <span>Downtown Medical Center, Building 4A</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">call</span>
                                    <span>+1 234 567 8901</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                                <div className="flex gap-3">
                                    <Link to="/map" className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">location_on</span></Link>
                                    <Link to="/doctor/1" className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">person</span></Link>
                                </div>
                                <Link to="/doctor/1" className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold shadow-md shadow-primary/20 active:scale-95 transition-transform">View Profile</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800/40 rounded-xl overflow-hidden shadow-sm border border-primary/5">
                        <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-700">
                            <img className="w-full h-full object-cover" data-alt="Modern medical diagnostic center exterior with glass windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWEZZpGS6QJjCQ1_RKfWL8BXNfkB2gDStJirP9b60-4c8S6POHcikv5Ocu9AaWWRqTLZ5jMR448theQMVRdCMyvg70g2rBMnN5OQ7-Uj3usj_eyjk3gM_5RNk7HOqxXZOADJ3XEU_dH8Apjp-LtGwfb0cdWKZAg24p19OicrN5by0kJ8PKvmw_6AGRoqZILYIVD8x1kohR1CWekLzxtRoSWjkmD9cQwfc_0cr5wNPj5NSclcNXLBpyU1AfsiTPqvtzAmaM5IfEyrXq" />
                            <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded flex items-center gap-1 text-[10px] font-bold text-primary">
                                <span className="material-symbols-outlined text-[14px] fill-1">verified</span> ABDM VERIFIED
                            </div>
                            <div className="absolute bottom-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold">
                                OPEN
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold">City Heart Clinic</h3>
                                    <p className="text-sm text-primary font-medium">Specialized Care Center</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[18px]">share</span>
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                    <span>East Side Plaza, Suite 202</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">call</span>
                                    <span>+1 234 999 0000</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                                <div className="flex gap-3">
                                    <Link to="/map" className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">location_on</span></Link>
                                    <Link to="/clinic/1" className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">local_hospital</span></Link>
                                </div>
                                <Link to="/clinic/1" className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold shadow-md shadow-primary/20 active:scale-95 transition-transform">View Profile</Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800/40 rounded-xl overflow-hidden shadow-sm border border-primary/5">
                        <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-700">
                            <img className="w-full h-full object-cover" data-alt="Male cardiologist doctor with stethoscope in hospital background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzuwFJFZzZy8jvziPnGJA-Il8jHvhai4vNgYa0irN50pYuPVedbEFlnqkaT9qJZc73kBthchEYc1x8emHkCSO4Kx3aR6mY5m72-g_d1ok8L_XwQfSi0PxLWV3QWyvMNkw_xy3rpM-cyDXfAf-NOpV2yk0Y9aOIZhybG9aX4BdBU6YkbvxFNq6uE1N2O33EhmZc6G8FiF12MQfte757YxJJmBeYYfN_dcn5e67PKj0OC7xg_ZWCAGh8HkEEOw0TEmDns19y5AnBcYA2" />
                            <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded flex items-center gap-1 text-[10px] font-bold text-primary">
                                <span className="material-symbols-outlined text-[14px] fill-1">verified</span> ABDM VERIFIED
                            </div>
                            <div className="absolute bottom-3 right-3 bg-slate-500 text-white px-2 py-1 rounded text-[10px] font-bold uppercase">
                                Closed
                            </div>
                        </div>
                        <div className="p-4 opacity-80">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold">Dr. Michael Chen</h3>
                                    <p className="text-sm text-primary font-medium">Interventional Cardiologist</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[18px]">share</span>
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                    <span>West View Heights, Clinic Hub</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                    <span className="material-symbols-outlined text-[18px]">call</span>
                                    <span>+1 234 444 5555</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                                <div className="flex gap-3">
                                    <Link to="/map" className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">location_on</span></Link>
                                    <Link to="/doctor/1" className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">person</span></Link>
                                </div>
                                <Link to="/doctor/1" className="bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-4 py-2 rounded-lg text-sm font-bold">View Profile</Link>
                            </div>
                        </div>
                    </div>
                </main>

                <nav className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-3 pb-6 flex justify-between items-center z-30">
                    <Link className="flex flex-col items-center gap-1 text-primary" to="/">
                        <span className="material-symbols-outlined fill-1">home</span>
                        <span className="text-[10px] font-bold">Home</span>
                    </Link>
                    <Link className="flex flex-col items-center gap-1 text-slate-400" to="/search">
                        <span className="material-symbols-outlined fill-1">search</span>
                        <span className="text-[10px] font-medium">Explore</span>
                    </Link>
                    <Link className="flex flex-col items-center gap-1 text-slate-400" to="/dashboard">
                        <span className="material-symbols-outlined">verified_user</span>
                        <span className="text-[10px] font-medium">Register</span>
                    </Link>
                    <Link className="flex flex-col items-center gap-1 text-slate-400" to="/dashboard">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-medium">Profile</span>
                    </Link>
                </nav>


                <div className="hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
                    <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-3xl p-6 pb-12">
                        <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-6"></div>
                        <h2 className="text-xl font-bold mb-6">Filter Results</h2>
                        <div className="space-y-6">
                            <div>
                                <p className="font-bold text-sm mb-3">Distance</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 rounded-lg bg-primary text-white text-xs font-bold">Within 5km</button>
                                    <button className="flex-1 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold">Within 10km</button>
                                    <button className="flex-1 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold">10km+</button>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-sm mb-3">Availability</p>
                                <label className="flex items-center justify-between mb-2">
                                    <span className="text-sm">Available Today</span>
                                    <div className="w-10 h-6 bg-primary rounded-full relative">
                                        <div className="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
                                    </div>
                                </label>
                                <label className="flex items-center justify-between">
                                    <span className="text-sm">ABDM Verified Only</span>
                                    <div className="w-10 h-6 bg-primary rounded-full relative">
                                        <div className="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
                                    </div>
                                </label>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SearchResultsPageMobile;
