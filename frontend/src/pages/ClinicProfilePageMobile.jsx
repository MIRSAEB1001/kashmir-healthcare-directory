import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function ClinicProfilePageMobile() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-primary/10">
<div className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer">
<span className="material-symbols-outlined">arrow_back</span>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Clinic Profile</h2>
<div className="flex size-10 items-center justify-end">
<button className="text-primary flex items-center justify-center">
<span className="material-symbols-outlined">share</span>
</button>
</div>
</header>
<main className="flex-1 pb-24">
<div className="@container">
<div className="px-0 @[480px]:px-4 @[480px]:py-3">
<div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden @[480px]:rounded-xl min-h-64 relative shadow-inner" data-alt="Modern brightly lit medical clinic reception area" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCA6o4iDBI1XfMbdt-P0swYiUfxJlLL9Dxjrb2nYsfXkBML9b1S3X4IKkiAVuj-9EfkGA7SV7iMyRKQssIZWQCfMpOj_lOnZyrppAjwCRYc9S3qt_K35Agx9COXKmpZ7A7VWcBney94u09a6oJzZkWCArYZ8rUNIXrd25sR5gfF5nrYUg1tltGcalZcfaHVHvOkuq-B7FNqJ3gpE2p4dx9x-ScJUZh-4alkq59tfK2e1Ganz1j5JWKrfPcqSVa6aoma-Y3d9lPjlimd");'>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative p-6">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-2">
<span className="material-symbols-outlined text-[14px]">verified</span>
                                ABDM Verified
                            </div>
<h1 className="text-white text-2xl font-extrabold tracking-tight">City Wellness Center</h1>
<p className="text-white/80 text-sm">Multi-specialty Healthcare Facility</p>
</div>
</div>
</div>
</div>
<div className="px-4 -mt-6 relative z-10 flex flex-col gap-4">
<div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-primary/5">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">Registration Info</p>
<p className="text-slate-900 dark:text-slate-100 font-bold">HFR ID: 1029-3847-5562</p>
</div>
<Link to="/doctor/1" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-2.5 text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer">Book Appointment</Link>
</div>
<div className="pt-4 border-t border-primary/5">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-2">About</h3>
<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            City Wellness Center is a state-of-the-art facility dedicated to providing comprehensive primary care and specialized services. Our team of board-certified professionals is committed to patient-centered care and medical excellence.
                        </p>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-primary/5">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">location_on</span>
                        Location
                    </h3>
<div className="w-full h-40 rounded-lg bg-slate-200 mb-3 overflow-hidden bg-center bg-cover border border-primary/5" data-alt="Map view showing the clinic location in the city" data-location="Mumbai, India" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeYPoXUbMi4E9j33Qdb-ZGSEVgOr6IrY8rjji1CUK2xvxFkEeugghh8dNp8oOpd64eH8GiDtWkhVKRNubFb0MzPLl1fPUzRtDCShbXtXpKO09p-hmoNmy79a3D86HnMvxSsqH6pdFQqLWE-WhXEmvxgQRyJrUObmeE9S_QBmQMnfR0E2fANpM1pQVG7tyXE5WE5d_Oy-0FrGBBGZlPlQT6521uu0p8YimMWwronGvYmY5Ybc7ZWxJqrUm23d9IUzrK1NGD9M4zxTl_')"}}>
</div>
<div className="flex items-center justify-between">
<p className="text-slate-600 dark:text-slate-300 text-sm max-w-[70%]">
                            12th Floor, Med-Tower, Health Avenue, Central District, 400013
                        </p>
<button className="flex items-center gap-2 text-primary font-bold text-sm">
<span className="material-symbols-outlined">directions</span>
                            Directions
                        </button>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-primary/5">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4">Contact Information</h3>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors" href="tel:+1234567890">
<span className="material-symbols-outlined text-primary">call</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">+91 98765 43210</span>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors" href="tel:+1234567891">
<span className="material-symbols-outlined text-primary">support_agent</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">+91 022 4567 8900</span>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors" href="mailto:contact@citywellness.com">
<span className="material-symbols-outlined text-primary">mail</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">contact@citywellness.com</span>
</a>
</div>
</div>
<div className="flex justify-center items-center gap-6 py-4 opacity-70">
<Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
<svg className="size-6" fill="currentColor" viewbox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</Link>
<Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
<svg className="size-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12.315 2c2.43 0 2.717.01 3.674.053 2.146.1 3.413 1.157 3.413 3.332 0 .942.003 1.29.003 3.328 0 2.038-.003 2.386-.003 3.327 0 2.175-1.433 3.327-3.413 3.327-.957.045-1.226.045-3.63.045-2.404 0-2.674 0-3.63-.045-1.95-.1-3.414-1.152-3.414-3.327 0-.94.003-1.288.003-3.327 0-2.038-.003-2.386-.003-3.328 0-2.175 1.433-3.327 3.413-3.327.956-.044 1.226-.045 3.63-.045m0-2c-2.457 0-2.764.01-3.727.054-2.31.106-4.107 1.306-4.107 4.107 0 .963-.01 1.27-.01 3.727s.01 2.764.01 3.728c0 2.8 1.797 4.001 4.107 4.107.963.044 1.27.054 3.727.054s2.764-.01 3.728-.054c2.31-.106 4.107-1.307 4.107-4.107 0-.963.01-1.27.01-3.728s-.01-2.764-.01-3.727c0-2.8-1.797-4.001-4.107-4.107-.963-.044-1.27-.054-3.728-.054zM12 5.839a6.161 6.161 0 100 12.322 6.161 6.161 0 000-12.322zm0 10.161a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
</Link>
<Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
<svg className="size-6" fill="currentColor" viewbox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
</Link>
</div>
</div>
</main>
<nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 pb-3 pt-2">
<div className="flex gap-2 max-w-md mx-auto">
<Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined">home</span>
<p className="text-xs font-medium">Home</p>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined">search</span>
<p className="text-xs font-medium">Search</p>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined">calendar_today</span>
<p className="text-xs font-medium">Appointments</p>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
<p className="text-xs font-bold">Profile</p>
</Link>
</div>
</nav>
</div>

        </div>
    );
}

export default ClinicProfilePageMobile;
