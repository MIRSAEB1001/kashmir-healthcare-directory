import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function RegistrationConfirmationPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}


            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-lg text-white">
                                <span className="material-symbols-outlined text-2xl">health_metrics</span>
                            </div>
                            <span className="text-xl font-extrabold tracking-tight text-primary"><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Kashmir Healthcare</Link></span>
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
            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl w-full space-y-12 text-center">

                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-6xl">check_circle</span>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                                Registration Submitted Successfully!
                            </h1>
                            <p className="max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                                Thank you for contributing to Kashmir's single source of truth for healthcare.
                                Your submission is now being processed by our AI verification agents.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900/50 rounded-xl p-8 shadow-sm border border-primary/5 text-left">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">timeline</span>
                            What Happens Next?
                        </h2>
                        <div className="space-y-8 relative">

                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary/50 to-transparent opacity-20"></div>

                            <div className="flex gap-4 relative">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 z-10">
                                    <span className="material-symbols-outlined">verified_user</span>
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white">AI Registry Verification</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                        Verification against official J&amp;K Medical Council and ABDM registries.
                                    </p>
                                    <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                                        24-48 hours
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-4 relative">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg shadow-secondary/20 z-10">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white">Location Accuracy Audit</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                        Cross-referencing with Google Maps and satellite data to ensure physical coordinates are correct.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 relative">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-pink text-white flex items-center justify-center shadow-lg shadow-accent-pink/20 z-10">
                                    <span className="material-symbols-outlined">publish</span>
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white">Publication</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                        Final human review for content quality and immediate publication to the public directory.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/" className="flex-1 max-w-xs px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">home</span>
                                Back to Home
                            </Link>
                            <Link to="/dashboard" className="flex-1 max-w-xs px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-xl hover:bg-secondary/5 transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">dashboard</span>
                                Go to Dashboard
                            </Link>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                            <span className="material-symbols-outlined text-accent-orange text-lg">mail</span>
                            <p>You will receive an email confirmation once your listing is live.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-primary/10 py-10">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
                    <div className="flex justify-center items-center gap-6 text-slate-400">
                        <Link to="/"><span className="material-symbols-outlined">language</span></Link>
                        <Link to="/"><span className="material-symbols-outlined">share</span></Link>
                        <Link to="/"><span className="material-symbols-outlined">help</span></Link>
                    </div>
                    <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                        Kashmir Healthcare Directory | Powered by ABDM
                    </p>
                    <div className="flex justify-center gap-4 text-xs text-slate-400">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">Contact Support</Link>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default RegistrationConfirmationPage;
