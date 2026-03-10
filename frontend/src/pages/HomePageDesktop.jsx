import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function HomePageDesktop() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}

            <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">health_and_safety</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-primary">Kashmir <span className="text-secondary">Healthcare</span></h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Find Doctors</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Hospitals</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Clinics</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Labs</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/">About</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/dashboard">Login</Link>
                        <Link to="/dashboard" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">Register</Link>
                    </nav>
                    <button className="md:hidden">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>
            <main>
                <section className="py-16 md:py-24 px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Access Care in <span className="text-primary">Kashmir.</span></h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Connecting you to verified doctors, clinics, and diagnostic labs across the valley.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 flex flex-col md:flex-row gap-2">
                            <div className="flex-1 flex items-center px-4 gap-3">
                                <span className="material-symbols-outlined text-slate-400">search</span>
                                <input className="w-full border-none focus:ring-0 bg-transparent text-sm md:text-base py-3" placeholder="Search doctors, clinics, specialties..." type="text" />
                            </div>
                            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 hidden md:block self-center"></div>
                            <div className="flex-1 flex items-center px-4 gap-3">
                                <span className="material-symbols-outlined text-slate-400">location_on</span>
                                <select className="w-full border-none focus:ring-0 bg-transparent text-sm md:text-base py-3 appearance-none">
                                    <option>Srinagar</option>
                                    <option>Anantnag</option>
                                    <option>Baramulla</option>
                                    <option>Jammu</option>
                                </select>
                            </div>
                            <Link to="/search" className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform active:scale-95 hover:bg-primary/90 cursor-pointer">Find</Link>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            <Link to="/" className="flex flex-col items-center gap-2 group">
                                <div className="size-14 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">domain</span>
                                </div>
                                <span className="text-xs font-semibold">Hospitals</span>
                            </Link>
                            <Link to="/" className="flex flex-col items-center gap-2 group">
                                <div className="size-14 rounded-full bg-secondary/5 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">person_filled</span>
                                </div>
                                <span className="text-xs font-semibold">Doctors</span>
                            </Link>
                            <Link to="/" className="flex flex-col items-center gap-2 group">
                                <div className="size-14 rounded-full bg-accent-pink/5 text-accent-pink flex items-center justify-center group-hover:bg-accent-pink group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">medical_services</span>
                                </div>
                                <span className="text-xs font-semibold">Clinics</span>
                            </Link>
                            <Link to="/" className="flex flex-col items-center gap-2 group">
                                <div className="size-14 rounded-full bg-accent-orange/5 text-accent-orange flex items-center justify-center group-hover:bg-accent-orange group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined">biotech</span>
                                </div>
                                <span className="text-xs font-semibold">Labs</span>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
                    <aside className="w-full md:w-64 space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Categories</h3>
                            <div className="space-y-1">
                                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white font-medium">
                                    <span className="material-symbols-outlined text-sm">grid_view</span>
                                    All Facilities
                                </button>
                                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-sm">stethoscope</span>
                                    Specialties
                                </button>
                                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-sm">emergency_home</span>
                                    Emergency
                                </button>
                                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-sm">flare</span>
                                    Diagnostics
                                </button>
                            </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white space-y-4 shadow-lg shadow-primary/20">
                            <p className="text-sm font-medium opacity-90">Need urgent help?</p>
                            <h4 className="text-lg font-bold leading-tight">Find the nearest Emergency Care</h4>
                            <Link to="/map" className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">Locate Now</Link>
                        </div>
                    </aside>
                    <div className="flex-1 space-y-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold">Featured Facilities</h3>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline">
                                View all <span className="material-symbols-outlined">arrow_right_alt</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(129,0,209,0.08)] transition-all duration-500">
                                <div className="h-48 bg-slate-100 relative">
                                    <img className="w-full h-full object-cover" data-alt="Modern hospital exterior with glass windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrKFX-qi4OyfEv0Cx0w7LiCHi5smD6d8cSQzoTaCKRaatUpnpCbom_q62zWTnAh0DkP7jpp5X-_B6FY9mJ6d04X2V_Bb4uAf60zZ9nfTFiH1mJBACkRtbXAuXyR3tTanN93sCGWiKPKnWtq8_3FdfuImVjRuCkgE3GRwtE3LMK8LsI_4xVnfjmR9I87VBzYaTWJl36sZmWRtRIGzXUt3RK3-ZGE76Hkn397DWJBH7vuh1qwfz8GuZToWsTTcT-o6yBRkNpRUGVKF4j" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                        <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">ABDM Verified</span>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Sher-i-Kashmir Institute</h4>
                                            <p className="text-slate-500 text-sm">Soura, Srinagar</p>
                                        </div>
                                        <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-[10px] font-bold uppercase">Open Now</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-primary text-lg">star</span>
                                            <span className="font-bold">4.8</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">medical_information</span>
                                            <span>Multispecialty</span>
                                        </div>
                                    </div>
                                    <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                                        <Link to="/clinic/1" className="text-primary font-bold text-sm hover:underline cursor-pointer">View Profile →</Link>
                                        <button className="text-slate-400 hover:text-secondary"><span className="material-symbols-outlined">favorite</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(129,0,209,0.08)] transition-all duration-500">
                                <div className="h-48 bg-slate-100 relative">
                                    <img className="w-full h-full object-cover" data-alt="Modern clinic waiting area with clean interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa2P4wA0HAM4CHPxNOOrr6eo0PhjEbaftkQMnxaCFHTMU7vc6DIaFTbwslwC0GfSBC7ZMuk_OZEoQ6ZdOCDeYGqXuURmqzSSj8Qdh3fvQWDChDnjh7-Qg6g8p-r7_RtGxRKahG2SPEWpm03N4NsAlvVxspxe3xgObZbnpEjcbmBaM95_a2UUJ8dUDqLKKjqS_2Utvdhz0WyjtiPExVtkn7TRbjvmx7k5Aw-5ysnSnFjD_xDvXHEnjOcDxCIAgePX_Tjsk9YLDO98L4" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                        <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">ABDM Verified</span>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Kashmir Diagnostic Center</h4>
                                            <p className="text-slate-500 text-sm">Karan Nagar, Srinagar</p>
                                        </div>
                                        <span className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase">Closed</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-primary text-lg">star</span>
                                            <span className="font-bold">4.6</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">biotech</span>
                                            <span>Diagnostic Lab</span>
                                        </div>
                                    </div>
                                    <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                                        <Link to="/clinic/1" className="text-primary font-bold text-sm hover:underline cursor-pointer">View Profile →</Link>
                                        <button className="text-slate-400 hover:text-secondary"><span className="material-symbols-outlined">favorite</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white/50 dark:bg-slate-950 py-24 px-6">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="text-center space-y-3">
                            <h3 className="text-3xl font-bold text-4xl">Register with Us</h3>
                            <p className="text-slate-500">Empower your medical practice with our digital platform</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 text-center space-y-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                                    <span className="material-symbols-outlined text-3xl">home_health</span>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold">Register Clinic</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Manage your clinic appointments and patient history digitally.</p>
                                </div>
                                <Link to="/add-clinic" className="block w-full py-3 text-center bg-primary/5 text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all cursor-pointer">Apply Now</Link>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 text-center space-y-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="size-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto">
                                    <span className="material-symbols-outlined text-3xl">medical_services</span>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold">Register Doctor</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Grow your presence and connect with patients across the region.</p>
                                </div>
                                <Link to="/add-doctor" className="block w-full py-3 text-center bg-secondary/5 text-secondary rounded-xl font-bold hover:bg-secondary hover:text-white transition-all cursor-pointer">Apply Now</Link>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 text-center space-y-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="size-16 bg-accent-pink/10 text-accent-pink rounded-2xl flex items-center justify-center mx-auto">
                                    <span className="material-symbols-outlined text-3xl">biotech</span>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold">Register Lab</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">Reach more patients needing diagnostic and testing services.</p>
                                </div>
                                <Link to="/add-lab" className="block w-full py-3 text-center bg-accent-pink/5 text-accent-pink rounded-xl font-bold hover:bg-accent-pink hover:text-white transition-all cursor-pointer">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-white dark:bg-background-dark border-t border-primary/5 pt-20 pb-8 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-xs">health_and_safety</span>
                            </div>
                            <h2 className="text-lg font-bold tracking-tight text-primary">Kashmir <span className="text-secondary">Healthcare</span></h2>
                        </div>
                        <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                            Dedicated to digitizing healthcare accessibility in the Kashmir valley. Your health, our priority.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/"><span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">language</span></Link>
                            <Link to="/"><span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">share</span></Link>
                            <Link to="/dashboard"><span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">manage_accounts</span></Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-sm font-bold">Quick Links</h5>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li><Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Find Doctors</Link></li>
                            <li><Link to="/">Medical Labs</Link></li>
                            <li><Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Hospitals</Link></li>
                            <li><Link to="/">Pharmacy</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-sm font-bold">Support</h5>
                        <ul className="text-sm text-slate-500 space-y-2">
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms of Use</Link></li>
                            <li><Link to="/">Contact Us</Link></li>
                            <li><Link to="/">FAQs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pt-8 border-t border-slate-50 dark:border-slate-900 flex flex-col md:row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">© 2024 Kashmir Healthcare. All rights reserved.</p>
                    <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>Verified Partners</span>
                        <span>ABDM Integrated</span>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default HomePageDesktop;
