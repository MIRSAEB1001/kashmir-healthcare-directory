import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function EditClinicProfilePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-2">
<div className="bg-primary p-1.5 rounded-lg text-white">
<span className="material-symbols-outlined text-2xl">medical_services</span>
</div>
<span className="text-xl font-extrabold tracking-tight text-primary">KHD</span>
</div>
<div className="hidden md:flex items-center gap-8">
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Find Doctors</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Hospitals</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Clinics</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/search">Labs</Link>
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/">About</Link>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
<button className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<img alt="User Profile" className="w-8 h-8 rounded-full border-2 border-primary/20" data-alt="User profile avatar circle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxa1FALbtvysvWvgeKdqx49ZQ00tAigHr3F4QV3Uy8CSU2WuV2nHTdU1ZJzG_hMG414_tQTVLE_LmlET77RTnwDMjSrGHJriifIyjsgrvXoliGLUiJH5nImzgXrHiv10Lxfkrm4IehVWp9GMQVSIOPxNF4LJwM-UuOofHZRRnbAYKZis7KZXKMWBFwNr47YMPfdGcFUGlYnsFaUM5jxDiOByMdBJvR1Yx5LXkayqZeDWb0pisWuQkkrcX-GJ_S69LdxmBIb4q_G59M"/>
<span className="material-symbols-outlined text-slate-400">expand_more</span>
</button>
<button className="hidden sm:flex items-center gap-1 text-sm font-bold text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors">
<span className="material-symbols-outlined text-lg">logout</span>
                        Logout
                    </button>
</div>
</div>
</div>
</nav>
<main className="max-w-5xl mx-auto px-4 py-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
<div>
<h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Edit Clinic Profile</h1>
<p className="text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">info</span>
                    Update your clinic details and ABDM compliance status
                </p>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-white transition-all shadow-sm">
                    Discard Changes
                </button>
<button className="px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/25">
                    Save and Update Profile
                </button>
</div>
</div>
<div className="space-y-8">

<section className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">business</span>
<h2 className="text-xl font-bold">Facility Information</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="col-span-full flex flex-col md:flex-row items-center gap-6 pb-4 border-b border-slate-50 dark:border-slate-800">
<div className="relative group">
<img alt="Clinic Logo" className="w-24 h-24 rounded-2xl object-cover border-4 border-slate-50 shadow-inner" data-alt="Modern medical clinic building facade logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGswOGGWM4PqzUNc5XlnTCD1fy-ScUpXiVU6gu0tLq3rtOxQT5M0ep3Z6Lw477hL_3EaK3Dwuy1STOE7POfbANE9jfn5i5T1O3ZPx55aXsqP3YNM3fN4clgDvX0lj9myeKZ8Ez7NMZT8ZCVLO4_gR5ZyreOhviW0qF1qMIN82CeFRRTJBwaiaVnelFZiE2lFrKkqN-wdJGvoxg02cIgrP8J2StaiOOV-qd5Vq10bpV06iW84qFwCF4zV07cdrSCgMEpTQzCIJr1s3M"/>
<label className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-sm">photo_camera</span>
<input className="hidden" type="file"/>
</label>
</div>
<div className="text-center md:text-left">
<h4 className="font-bold text-slate-800 dark:text-slate-200">Clinic Profile Logo</h4>
<p className="text-xs text-slate-400 mt-1">PNG, JPG up to 5MB. Recommended 400x400px.</p>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Clinic Name</label>
<input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="e.g. LifeCare Multi-Speciality" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Facility Type</label>
<select className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary">
<option>Private Clinic</option>
<option>Diagnostic Lab</option>
<option>Multi-speciality Center</option>
<option>Nursing Home</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Mobile Number</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 text-sm font-semibold">+91</span>
<input className="flex-1 min-w-0 rounded-r-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Official Email</label>
<input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="contact@clinicname.com" type="email"/>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-lg">verified_user</span>
<h2 className="text-xl font-bold">Registration &amp; Compliance</h2>
</div>
<div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
<span className="material-symbols-outlined text-base">verified</span>
                        ABDM VERIFIED
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">JKMC Registration Number</label>
<input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="JKMC-XXXX-2024" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">HFR ID (12-digit)</label>
<div className="relative">
<input className="w-full pr-10 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" maxlength="12" placeholder="123456789012" type="text"/>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-lg">check_circle</span>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Primary Specialty</label>
<select className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary">
<option>Cardiology</option>
<option>Dermatology</option>
<option>General Medicine</option>
<option>Pediatrics</option>
<option>Orthopedics</option>
</select>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-accent bg-accent/10 p-2 rounded-lg">location_on</span>
<h2 className="text-xl font-bold">Location Details</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-3 space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Address</label>
<textarea className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="Street, Building, Near Landmark..." rows="2"></textarea>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Area/Locality</label>
<input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="e.g. Rajbagh" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">District</label>
<select className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary">
<option>Srinagar</option>
<option>Anantnag</option>
<option>Baramulla</option>
<option>Budgam</option>
<option>Pulwama</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Google Maps Link</label>
<input className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="https://goo.gl/maps/..." type="url"/>
</div>
<div className="md:col-span-3 rounded-xl overflow-hidden h-48 relative border border-slate-100">
<img alt="Map Preview" className="w-full h-full object-cover" data-alt="Stylized map showing Srinagar medical district" data-location="Srinagar, Kashmir" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcK6IPaAV46HEnOV7WOMhjbTqn4EjnBj4MmQyz9s2SNJBCa59ocwNlm28bpCOhAHw5ak1kP37g2KABYI0byRdLQBaANyPRKIfsRqvBLqlwP4jMMA-WyR8MFi24LHZeiiQ1yDkxt9zLZGTUU4bnnXAd81CLrJRwn2PQAIddFr0JjLSAsaclBNy2KyrFTtafMKRAVD1P9pJ87to-1AHcBUPc1Rtjtpq2UM4ni_8jXBEg2t0yZOJA0eVa8H92IQFTItk8KNUIkt3VbFrA"/>
<div className="absolute inset-0 bg-black/5 flex items-center justify-center">
<button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary">my_location</span>
                                Update Pin on Map
                            </button>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-warm bg-warm/10 p-2 rounded-lg">schedule</span>
<h2 className="text-xl font-bold">Operational Details</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-sm font-bold text-slate-700 dark:text-slate-300">Consultation Fees (₹)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
<input className="w-full pl-8 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="500" type="number"/>
</div>
</div>
<div className="flex flex-col justify-center gap-4">
<div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
<div>
<p className="font-bold text-sm">24/7 Availability</p>
<p className="text-xs text-slate-500">Facility open all day every day</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
<div>
<p className="font-bold text-sm">Emergency Services</p>
<p className="text-xs text-slate-500">Trauma and Critical Care support</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</section>

<section className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">share</span>
<h2 className="text-xl font-bold">Social Media Links</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Facebook</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400"><span className="material-symbols-outlined text-lg">public</span></span>
<input className="w-full rounded-r-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="facebook.com/clinic" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Instagram</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400"><span className="material-symbols-outlined text-lg">camera_alt</span></span>
<input className="w-full rounded-r-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="instagram.com/clinic" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Twitter / X</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400"><span className="material-symbols-outlined text-lg">alternate_email</span></span>
<input className="w-full rounded-r-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="twitter.com/clinic" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">LinkedIn</label>
<div className="flex">
<span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400"><span className="material-symbols-outlined text-lg">work</span></span>
<input className="w-full rounded-r-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="linkedin.com/company/clinic" type="text"/>
</div>
</div>
</div>
</section>
</div>
<div className="mt-12 flex flex-col-reverse sm:flex-row justify-end items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-8 pb-16">
<button className="w-full sm:w-auto px-8 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-white transition-all">
                Discard Changes
            </button>
<button className="w-full sm:w-auto px-10 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg">save</span>
                Save and Update Profile
            </button>
</div>
</main>
<footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="flex flex-col items-center gap-4">
<div className="flex items-center gap-2 opacity-60 grayscale">
<div className="bg-slate-400 p-1 rounded text-white">
<span className="material-symbols-outlined text-lg">medical_services</span>
</div>
<span className="text-lg font-extrabold tracking-tight">KHD</span>
</div>
<p className="text-slate-400 text-sm font-medium">Kashmir Healthcare Directory © 2024. All rights reserved.</p>
<div className="flex items-center gap-4 mt-2">
<img alt="ABDM Logo" className="h-8 grayscale brightness-200 contrast-50 opacity-50" data-alt="Ayushman Bharat Digital Mission official logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg6w9KGQ6AUiv1php0KRdxazSKQujVd4fUNlTKNJjWDrYHGRu3nAL7PYJnyjBlxn9jjSWQ7h-qvOeUAzYzwdyn3znc5rsVH1RFl7SjJGOQvHNmDSenXH4fZMIG9e1mw1tZ7L6F3_cJOTmX_mQGMrjpe72rUn86dyICFG35HmRuk8CKlPiaAAivA7gt_LUifNKdTEoX--R3DeNBrw8BvlWOHAFf5Z43l1dYSrZf0LuL7a-TrEjqYX4Wmh87xrXqhXELp4eb5AtQ1OgI"/>
<span className="text-xs text-slate-400 border-l border-slate-200 dark:border-slate-800 pl-4 uppercase tracking-widest font-bold">ABDM Integrated</span>
</div>
</div>
</div>
</footer>

        </div>
    );
}

export default EditClinicProfilePage;
