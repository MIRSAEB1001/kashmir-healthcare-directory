import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function HomePageMobile() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-manrope">
            {/* STITCH GENERATED CONTENT */}
            
<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">

<header className="flex items-center bg-background-light dark:bg-background-dark p-4 border-b border-primary/10 justify-between sticky top-0 z-50">
<div className="flex items-center gap-3">
<button className="text-primary flex size-10 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="flex items-center gap-2">
<div className="bg-primary p-1.5 rounded-lg">
<span className="material-symbols-outlined text-white text-xl">medical_services</span>
</div>
<h2 className="text-slate-900 dark:text-slate-100 text-lg font-extrabold leading-tight tracking-tight">Kashmir Healthcare</h2>
</div>
</div>
<div className="flex items-center gap-4">
<Link className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" to="/dashboard">Login</Link>
<Link to="/">Register</Link>
</div>
</header>

<section className="px-4 pt-10 pb-6 bg-gradient-to-b from-primary/5 to-transparent">
<h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-extrabold leading-tight text-center mb-2">
                Find Trusted Care <br/><span className="text-primary">Near You</span>
</h1>
<p className="text-slate-600 dark:text-slate-400 text-center text-sm mb-8 px-6">Book appointments with top-rated healthcare professionals in seconds.</p>

<div className="w-full max-w-md mx-auto">
<div className="flex flex-col gap-3">
<div className="relative flex w-full items-stretch rounded-xl h-14 shadow-sm border border-primary/20 bg-white dark:bg-slate-800">
<div className="text-primary flex items-center justify-center pl-4">
<span className="material-symbols-outlined">search</span>
</div>
<input className="form-input flex w-full border-none bg-transparent focus:ring-0 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 px-4 text-base font-medium" placeholder="Doctor, Specialty, or Area"/>
</div>
<button className="w-full bg-primary text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
<span className="material-symbols-outlined">near_me</span>
                        Search Directory
                    </button>
</div>
</div>
</section>

<section className="px-4 py-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight">Quick Categories</h3>
<Link to="/">View All</Link>
</div>
<div className="grid grid-cols-4 gap-3">
<Link to="/" className="flex flex-col items-center gap-2">
<div className="size-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">apartment</span>
</div>
<span className="text-xs font-bold text-slate-700 dark:text-slate-300">Hospitals</span>
</Link>
<Link to="/" className="flex flex-col items-center gap-2">
<div className="size-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">stethoscope</span>
</div>
<span className="text-xs font-bold text-slate-700 dark:text-slate-300">Doctors</span>
</Link>
<Link to="/" className="flex flex-col items-center gap-2">
<div className="size-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">vaccines</span>
</div>
<span className="text-xs font-bold text-slate-700 dark:text-slate-300">Clinics</span>
</Link>
<Link to="/" className="flex flex-col items-center gap-2">
<div className="size-14 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">biotech</span>
</div>
<span className="text-xs font-bold text-slate-700 dark:text-slate-300">Labs</span>
</Link>
</div>
</section>

<section className="mx-4 my-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-primary/10 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary fill-1">verified_user</span>
<h4 className="font-bold text-slate-900 dark:text-slate-100">Trusted &amp; Verified</h4>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="flex flex-col">
<span className="text-xl font-extrabold text-primary leading-none">12k+</span>
<span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mt-1">Specialists</span>
</div>
<div className="flex flex-col border-l border-primary/10 pl-4">
<span className="text-xl font-extrabold text-primary leading-none">500+</span>
<span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mt-1">Clinics</span>
</div>
<div className="flex flex-col border-l border-primary/10 pl-4">
<span className="text-xl font-extrabold text-primary leading-none">4.9/5</span>
<span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mt-1">User Rating</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-primary/5 flex items-center gap-3">
<div className="flex -space-x-3 overflow-hidden">
<img alt="Doctor 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800" data-alt="Portrait of a female doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlSGR_EsW2-c6XnXuRa6Kv4razuo_-6_UipjuLwMWzr93Vz22gg_-J-bK6WzdrALnhwIM9SlZq2Otb3dTVtlPe1CiiQ-c_KqIlJkl3PI_s-4wnPGy450BropKAnHjhlwJ3lzMwcn14crVahL0Cvmyz-WvtN2zeGBKkBoibnaey8KpfpNQ6KWRI9E3DcdOuCP6pMW8lhjo5RltsIfs8jdgFI49KrmR3v1pzUrpzf03MQAPTfanKStVf3PH-AukOw4Q2o7kYNwvWSaTd"/>
<img alt="Doctor 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800" data-alt="Portrait of a male doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhRgrI6iEoIco9mFd7VK5rSbnvYR_HUyJ-anfREdtc0Q5bVYFl4TLERmxJfwDksZXVxaQSrumC9UfEfG2NycpKnxRXP5NmW2ylyclcHt5KV7gIQYvGucjdizvyfA5ddSB5yIHcvOR4k7Y_4GE4kxPYjcpqdVcTEJvF2-DV1nwb16MAyGNYEvg_IylB1gV5Ui9RUarqnzjfz0jY1elSf1ZAP3_J5fI0AaiJWvYorBpv2fQ7296o0aCobXMKev584-QpyUgmXcaIYziI"/>
<img alt="Doctor 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800" data-alt="Portrait of a female surgeon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpMWhxKhyZMofPrsRFEvWQzIGB-WnbPB9kWeH6p7Gu86RUcCOzkbE57W25iolc6qaXuCZlUoOJ-U-_iaqyFcgN2yo-fBxtAYhFM_hU-eEdSnsxP6AQLxoZw_KWJekosrtwYTddOWqcD7pOJCTh4QQWxlcbj17_J3wQHNjSpbSKAlPISncyDxXUCZKkfplpJr_b2JsfLP3Yn1_L5qnk5OF1xYPKGqI7keD0rYxoDDaYxIAiyJwIepXbhdE3d4zFUBYhb9S5Qr2wyqJy"/>
</div>
<p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Joined by <span className="text-primary font-bold">2,000+</span> healthcare providers this month</p>
</div>
</section>

<section className="px-4 py-4 mb-20">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight mb-4">Popular Doctors Nearby</h3>
<div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
<div className="min-w-[200px] bg-white dark:bg-slate-800 rounded-xl p-3 border border-primary/10 shadow-sm">
<div className="w-full h-24 rounded-lg bg-primary/5 mb-3 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional medical doctor smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjzz-umVJbCkrgkH18D_32q4zOGExPJzQ7ZMxZBxw-WF880M8lMnMo3GNYvEoiatTiGAWA5ueBT4HdfxyEcZRSkPsR1mWMKRD0pg-Eav90k77piUCIUpg8K02BTDjqCXz-jHw79heQOi38zqi6Wlm2hMvhpqoaJRKTONuSix7YCGdGMu8c8FqY_56YIR_ywg2djPzwoTe9jwrFJz1JgzgO8Oa7MxCXUk012Zm5zx6F_U_1qj3IigRgtot17X0kH7G2h140wzLbs-5b"/>
</div>
<span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wide">Cardiology</span>
<h5 className="font-bold text-slate-900 dark:text-slate-100 mt-1">Dr. James Wilson</h5>
<div className="flex items-center gap-1 mt-1 text-slate-500 text-xs font-medium">
<span className="material-symbols-outlined text-sm text-yellow-500 fill-1">star</span>
                        4.8 (120 reviews)
                    </div>
</div>
<div className="min-w-[200px] bg-white dark:bg-slate-800 rounded-xl p-3 border border-primary/10 shadow-sm">
<div className="w-full h-24 rounded-lg bg-primary/5 mb-3 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Medical specialist in clinic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRDtEdCS05BDInZOr9YUhwTCUIVNRlPXxotu_xtiZdn-u36EdzpUmU7PbGl1Kv3u7YZVaKMrlwNaEuAnIjUbfk2F_SgiaJ5XDf_64krAq7TfMVfVh8nhD0QjqaK7mrvWEH5YhaCMGlmp-77JL0T-Me20-jgDH6lvvRMVQMu6EOQ2XzsoDAJWa13XNZszfGOPZ2wq0rK7KX8GLVTTrkeXkWHFirgveUNEic5EFsNp_a3FeSKxBej192eyHq5l9iiyK5LsVFYzAYE8QL"/>
</div>
<span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wide">Dentistry</span>
<h5 className="font-bold text-slate-900 dark:text-slate-100 mt-1">Dr. Sarah Chen</h5>
<div className="flex items-center gap-1 mt-1 text-slate-500 text-xs font-medium">
<span className="material-symbols-outlined text-sm text-yellow-500 fill-1">star</span>
                        4.9 (89 reviews)
                    </div>
</div>
</div>
</section>

<nav className="fixed bottom-0 left-0 right-0 flex gap-2 border-t border-primary/10 bg-background-light dark:bg-background-dark px-4 pb-4 pt-2 shadow-2xl z-50">
<Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 rounded-full text-primary">
<div className="flex h-8 items-center justify-center">
<span className="material-symbols-outlined fill-1">home</span>
</div>
<p className="text-[10px] font-bold leading-normal tracking-wide uppercase">Home</p>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
<div className="flex h-8 items-center justify-center">
<span className="material-symbols-outlined">search</span>
</div>
<p className="text-[10px] font-bold leading-normal tracking-wide uppercase">Explore</p>
</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
<div className="flex h-8 items-center justify-center">
<span className="material-symbols-outlined">calendar_today</span>
</div>

</Link>
<Link to="/" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
<div className="flex h-8 items-center justify-center">
<span className="material-symbols-outlined">account_circle</span>
</div>
<p className="text-[10px] font-bold leading-normal tracking-wide uppercase">Profile</p>
</Link>
</nav>
</div>


        </div>
    );
}

export default HomePageMobile;
