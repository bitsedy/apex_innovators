"use client";

import React from "react";
import Link from "next/link";

// Public Marketing Home
export default function PublicPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="w-full flex h-2">
<div className="w-1/3 bg-sky-400"></div>
<div className="w-1/3 bg-secondary"></div>
<div className="w-1/3 bg-tertiary-fixed-dim"></div>
</div>

<section className="relative w-full overflow-hidden bg-surface py-12 md:py-20 px-6 lg:px-12">
<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-6">
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">
          Nurturing the <span className="text-primary-container relative inline-block">Mind<svg className="absolute left-0 -bottom-2 w-full text-sky-400" height="8" preserveAspectRatio="none" viewBox="0 0 100 8"><path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="4"></path></svg></span>,<br/>
          Inspiring the <span className="text-secondary">Heart</span>,<br/>
          Empowering the <span className="text-tertiary-container">Hands</span>.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A caring Christian community school for children from Creche to Junior High School. We help every child learn well, build good character, and develop real-life skills.
        </p>

<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary-container hover:shadow-lg transition-all duration-200 group" data-path="admissions-application-form" href="/admissions/apply">
<span>Apply for 2026/2027 Admissions</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container text-primary font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors cursor-pointer" data-path="academics" href="/#academics">
<span className="material-symbols-outlined text-[20px] text-secondary">explore</span>
<span>Explore Academics</span>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-on-surface-variant font-label-lg text-label-lg hover:text-primary transition-colors cursor-pointer" data-path="contact-school" href="/#contact">
<span className="material-symbols-outlined text-[20px] text-secondary">calendar_month</span>
<span>Book Campus Tour</span>
</a>
</div>

<div className="flex items-center gap-6 pt-4 text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[22px]" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">NaSIA &amp; GES Certified</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-surface-dim"></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-variant text-[22px]" style={{"fontVariationSettings": "'FILL' 1"}}>workspace_premium</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">100% BECE Distinction</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative bg-surface-container-lowest p-5 rounded-3xl shadow-xl flex flex-col gap-4">

<div className="relative overflow-hidden rounded-2xl h-72 w-full">
<img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" data-alt="Joyful diverse African students in crisp school uniforms studying together in a modern, naturally lit classroom at Carepoint Community School, smiling with open books, bright cheerful atmosphere, vibrant navy and crimson uniform accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbzrSgAU-V8H_mNm-6wnhpqCcPofLBZjYK9utwfEqBL40nRoydyTm7SjELl6-DUoLH5sla4OlYRfq96aJCKmPl2XpSQOHUM7WiZPTAcMVjdGWWDBTN5zyOUTUyvOqJcoF34S-vM84LcZV6HAQnE84S99EiguufTudhO284zH83J50gEh1YdM-_QhjFiz-ErnpN7ahqlRCQLJGA9rH2e_BOYA-ja7KiVJCM7s8K1iJZn-QcS2SW9ljZtQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>

<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-primary tracking-widest font-bold">MIND • HEART • HANDS</span>
</div>
<div className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-sm font-label-sm shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">star</span>
<span>Top Ranked</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-surface-container-low p-4 rounded-xl flex items-center gap-3">
<div className="w-11 h-11 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">child_care</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary font-bold">Creche - JHS</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Continuous Growth</span>
</div>
</div>
<div className="bg-primary text-on-primary p-4 rounded-xl flex items-center gap-3">
<div className="w-11 h-11 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">menu_book</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold">STEM + Arts</span>
<span className="font-label-sm text-label-sm text-on-primary/70">Well-Rounded Learning</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl h-36 w-full">
<img className="w-full h-full object-cover" data-alt="Young kindergarten children proudly marching with miniature flags on the lush green Carepoint school lawn, sunlit morning with supportive teachers smiling in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhAp11_HP8hJxnBFb71X_yNqZov141Ptt2J3WfIyLHBy8U_KaMVsJjNWqS6tGIldo5JAmzSgie-BVQ6VZKca3JSlEsg2hXQaYrQOp7pFY2TxST-Au_bwYszqxT05-dFcv3WpxD-BKFDGdZi3KkLKXiPLoBfcuscWJmTsznqqdGyzsr6cNq2u5jCvsWUyrG8001mvYMFG8ReCT5dg901vOO6GghhHBUu9MfHbp2F_-s9yT_mHh4C0hv_Q"/>
<div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]"></div>
<div className="absolute inset-0 flex items-center justify-between px-5">
<span className="text-on-primary font-headline-sm text-headline-sm font-bold drop-shadow">Christian Character &amp; Civic Pride</span>
<span className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-primary text-on-primary py-8 px-6 lg:px-12 shadow-inner">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center md:text-left">

<div className="flex flex-col gap-1 p-3">
<span className="font-display-lg text-display-lg font-bold text-secondary-fixed leading-none">5</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-primary">Educational Tiers</span>
<span className="font-body-sm text-body-sm text-on-primary/70">Creche through JHS 3</span>
</div>

<div className="flex flex-col gap-1 p-3">
<span className="font-display-lg text-display-lg font-bold text-tertiary-fixed leading-none">15+</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-primary">Years of Service</span>
<span className="font-body-sm text-body-sm text-on-primary/70">Forming community leaders</span>
</div>

<div className="flex flex-col gap-1 p-3">
<span className="font-display-lg text-display-lg font-bold text-sky-300 leading-none">100%</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-primary">BECE Pass Record</span>
<span className="font-body-sm text-body-sm text-on-primary/70">Grade 1 national placements</span>
</div>

<div className="flex flex-col gap-1 p-3">
<span className="font-display-lg text-display-lg font-bold text-secondary-fixed leading-none">1:15</span>
<span className="font-headline-sm text-headline-sm font-semibold text-on-primary">Teacher Ratio</span>
<span className="font-body-sm text-body-sm text-on-primary/70">Individualized focus</span>
</div>

<div className="col-span-2 md:col-span-1 flex flex-col gap-1 p-3 justify-center">
<div className="flex items-center gap-2 text-tertiary-fixed">
<span className="material-symbols-outlined text-[28px]">policy</span>
<span className="font-headline-sm text-headline-sm font-bold">Accredited</span>
</div>
<span className="font-body-sm text-body-sm text-on-primary/70">NaSIA &amp; Ghana Education Service Certified</span>
</div>
</div>
</section>

<section id="academics" className="w-full bg-surface-bright py-20 px-6 lg:px-12 scroll-mt-28">
<div className="max-w-7xl mx-auto flex flex-col gap-12">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="flex flex-col gap-3 max-w-2xl">
<div className="flex items-center gap-2 text-secondary font-label-md text-label-md uppercase tracking-widest font-bold">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
            Structured Educational Pathways
          </div>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
            Academic Divisions Tailored to Every Developmental Milestone
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Designed for each stage of your child's growth: early learning, good character, strong study habits, and top exam success.
        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">

<div className="h-2 w-full bg-sky-400"></div>
<div className="p-6 flex flex-col flex-1">

<div className="w-full h-44 bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center text-primary relative overflow-hidden group-hover:bg-primary/5 transition-colors">
<svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 100 100">

<circle cx="35" cy="25" r="10"></circle>
<path d="M25 40 Q35 35 45 40 L45 65 L25 65 Z"></path>
<rect className="text-sky-500 fill-current opacity-70" height="18" rx="2" width="18" x="58" y="45"></rect>
<rect className="text-secondary fill-current opacity-70" height="16" rx="2" width="16" x="64" y="27"></rect>
<circle cx="70" cy="72" r="6"></circle>
<path className="opacity-40" d="M15 85 L85 85 L85 92 L15 92 Z"></path>
</svg>
<span className="absolute top-3 left-3 bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-label-sm text-primary font-bold">AGES 6M - 3Y</span>
</div>
<div className="flex flex-col gap-2 mt-5 flex-1">
<h3 className="font-headline-md text-headline-md text-primary font-bold">Nursery &amp; Creche</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Sensory stimulation, nurturing potty guidance, phonological awareness, safe motor coordination, and secure emotional foundations.
              </p>
<ul className="flex flex-col gap-1.5 mt-3 pt-3 bg-surface-container-low/50 p-3 rounded-lg text-body-sm font-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">check_circle</span>
<span>Montessori-style sensory corners</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">check_circle</span>
<span>Trained child health nurses</span>
</li>
</ul>
</div>

<div className="mt-6 w-full py-2.5 rounded-lg bg-primary text-on-primary text-center font-label-lg text-label-lg tracking-widest uppercase font-bold group-hover:bg-primary-container transition-colors">
              NURSERY
            </div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">

<div className="h-2 w-full bg-secondary"></div>
<div className="p-6 flex flex-col flex-1">

<div className="w-full h-44 bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center text-primary relative overflow-hidden group-hover:bg-primary/5 transition-colors">
<svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 100 100">

<circle cx="58" cy="48" r="8"></circle>
<path d="M52 58 L64 58 L60 88 L52 88 Z"></path>
<line stroke="currentColor" strokeWidth="4" x1="42" x2="42" y1="20" y2="88"></line>
<path className="text-secondary fill-current" d="M42 22 L18 28 L42 42 Z"></path>
<circle className="fill-white" cx="28" cy="34" r="2.5"></circle>
<path d="M50 62 L42 38" stroke="currentColor" strokeWidth="3"></path>
</svg>
<span className="absolute top-3 left-3 bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-label-sm text-primary font-bold">KG 1 - KG 2 • AGES 4 - 5</span>
</div>
<div className="flex flex-col gap-2 mt-5 flex-1">
<h3 className="font-headline-md text-headline-md text-primary font-bold">Kindergarten</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Early reader phonetics, numeracy games, flag raising, national civic awareness, and creative discovery through play.
              </p>
<ul className="flex flex-col gap-1.5 mt-3 pt-3 bg-surface-container-low/50 p-3 rounded-lg text-body-sm font-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">check_circle</span>
<span>Jolly Phonics structured mastery</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">check_circle</span>
<span>Civic, social &amp; moral etiquette</span>
</li>
</ul>
</div>

<div className="mt-6 w-full py-2.5 rounded-lg bg-primary text-on-primary text-center font-label-lg text-label-lg tracking-widest uppercase font-bold group-hover:bg-primary-container transition-colors">
              KINDERGARTEN
            </div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">

<div className="h-2 w-full bg-tertiary-fixed-dim"></div>
<div className="p-6 flex flex-col flex-1">

<div className="w-full h-44 bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center text-primary relative overflow-hidden group-hover:bg-primary/5 transition-colors">
<svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 100 100">

<circle cx="28" cy="46" r="6"></circle>
<path d="M22 54 L34 54 L32 85 L24 85 Z"></path>
<circle cx="50" cy="40" r="7"></circle>
<path d="M42 50 L58 50 L56 85 L44 85 Z"></path>
<circle cx="72" cy="46" r="6"></circle>
<path d="M66 54 L78 54 L76 85 L68 85 Z"></path>

<line stroke="currentColor" strokeWidth="3" x1="50" x2="50" y1="20" y2="35"></line>
<line stroke="currentColor" strokeWidth="3" x1="45" x2="55" y1="25" y2="25"></line>
</svg>
<span className="absolute top-3 left-3 bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-label-sm text-primary font-bold">GRADE 1 - 6 • AGES 6 - 11</span>
</div>
<div className="flex flex-col gap-2 mt-5 flex-1">
<h3 className="font-headline-md text-headline-md text-primary font-bold">Basic Primary</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Core STEM fluency, language arts, creative design, computing laboratory literacy, sports, and Christian discipleship.
              </p>
<ul className="flex flex-col gap-1.5 mt-3 pt-3 bg-surface-container-low/50 p-3 rounded-lg text-body-sm font-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">check_circle</span>
<span>Robotics &amp; modern coding clubs</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">check_circle</span>
<span>Choral music and brass band</span>
</li>
</ul>
</div>

<div className="mt-6 w-full py-2.5 rounded-lg bg-primary text-on-primary text-center font-label-lg text-label-lg tracking-widest uppercase font-bold group-hover:bg-primary-container transition-colors">
              BASIC
            </div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">

<div className="h-2 w-full bg-primary-container"></div>
<div className="p-6 flex flex-col flex-1">

<div className="w-full h-44 bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center text-primary relative overflow-hidden group-hover:bg-primary/5 transition-colors">
<svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 100 100">

<circle cx="35" cy="30" r="7"></circle>
<path d="M26 40 L44 40 L40 85 L28 85 Z"></path>
<circle cx="68" cy="34" r="7"></circle>
<path d="M60 44 L76 44 L74 85 L62 85 Z"></path>
<path className="text-secondary fill-current" d="M46 50 L56 50 L54 62 L44 62 Z"></path>
</svg>
<span className="absolute top-3 left-3 bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-label-sm text-primary font-bold">JHS 1 - 3 • AGES 12 - 15</span>
</div>
<div className="flex flex-col gap-2 mt-5 flex-1">
<h3 className="font-headline-md text-headline-md text-primary font-bold">Junior High (JHS)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Intensive preparation for BECE, career guidance, laboratory science, French proficiency, and peer mentorship leadership.
              </p>
<ul className="flex flex-col gap-1.5 mt-3 pt-3 bg-surface-container-low/50 p-3 rounded-lg text-body-sm font-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">check_circle</span>
<span>Pre-exam mock testing series</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-variant">check_circle</span>
<span>Category-A Senior High prep</span>
</li>
</ul>
</div>

<div className="mt-6 w-full py-2.5 rounded-lg bg-primary text-on-primary text-center font-label-lg text-label-lg tracking-widest uppercase font-bold group-hover:bg-primary-container transition-colors">
              JUNIOR HIGH
            </div>
</div>
</div>
</div>
</div>
</section>

<section id="about" className="w-full bg-surface-container-low py-20 px-6 lg:px-12 scroll-mt-28">
<div className="max-w-7xl mx-auto flex flex-col gap-16">
<div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">The Carepoint Philosophy</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">
          Our Tri-Pillar Education Model
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          We do not just teach students to pass exams. We help them grow into honest, caring, and capable young people with good character and practical skills.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col gap-4 relative overflow-hidden">
<div className="w-14 h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[32px]">psychology</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary font-bold">PILLAR 01</span>
<div className="h-0.5 w-6 bg-secondary"></div>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">The Mind</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Critical thinking, logic puzzles, investigative science, and computational thinking. We challenge rote memorization with experiential inquiry that lasts a lifetime.
          </p>
<ul className="flex flex-col gap-2 pt-4 text-on-surface-variant font-body-sm text-body-sm">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>Individual diagnostic reading trackers</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>Inquiry-driven science lab projects</span>
</li>
</ul>
</div>

<div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col gap-4 relative overflow-hidden">
<div className="w-14 h-14 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[32px]" style={{"fontVariationSettings": "'FILL' 1"}}>favorite</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary font-bold">PILLAR 02</span>
<div className="h-0.5 w-6 bg-secondary"></div>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">The Heart</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Christian virtues, empathy, integrity, and deep respect for community. We build students who lead with humility, tell the truth, and uplift their peers.
          </p>
<ul className="flex flex-col gap-2 pt-4 text-on-surface-variant font-body-sm text-body-sm">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Weekly scripture &amp; values assembly</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Peer support and restorative discipline</span>
</li>
</ul>
</div>

<div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col gap-4 relative overflow-hidden">
<div className="w-14 h-14 rounded-xl bg-tertiary text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[32px]">pan_tool</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary font-bold">PILLAR 03</span>
<div className="h-0.5 w-6 bg-secondary"></div>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">The Hands</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Technical dexterity, visual arts, agriculture, athletics, and social welfare projects. Students put concepts into practice with hands-on projects.
          </p>
<ul className="flex flex-col gap-2 pt-4 text-on-surface-variant font-body-sm text-body-sm">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-variant"></span>
<span>School garden &amp; eco-sustainability</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-variant"></span>
<span>Woodwork, coding &amp; fine art electives</span>
</li>
</ul>
</div>
</div>
<div className="flex justify-center">
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group" data-path="about-us" href="/">
<span>Learn more about the Carepoint Heritage &amp; Leadership</span>
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">east</span>
</a>
</div>
</div>
</section>

<section className="w-full bg-surface py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col gap-12">

<div className="bg-primary text-on-primary rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="flex flex-col gap-3 max-w-xl">
<span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-sm font-label-sm self-start uppercase tracking-wider font-bold">Registration in Progress</span>
<h2 className="font-headline-xl text-headline-xl font-bold">Ready to Join the Carepoint Family?</h2>
<p className="font-body-md text-body-md text-on-primary/80">
            Admissions for the 2026/2027 school year are open. We keep class sizes small so teachers can give each child personal attention.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
<a className="w-full sm:w-auto text-center px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-lg text-label-lg hover:bg-secondary-container transition-colors shadow-md" data-path="admissions-application-form" href="/admissions/apply">
            Start Online Application
          </a>
<a className="w-full sm:w-auto text-center px-6 py-4 bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg hover:bg-primary-container/80 transition-colors" data-path="application-status-tracker" href="/admissions/apply">
            Check Status
          </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">

<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center font-headline-sm font-bold text-headline-sm">
            01
          </div>
<div className="flex flex-col gap-1">
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Submit Form</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Fill in student information and parent contact details through our simple online portal.</p>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center font-headline-sm font-bold text-headline-sm">
            02
          </div>
<div className="flex flex-col gap-1">
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Upload Documents</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Attach birth certificates, vaccination reports (for Creche/KG), and previous academic records.</p>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center font-headline-sm font-bold text-headline-sm">
            03
          </div>
<div className="flex flex-col gap-1">
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Assessment Visit</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">A gentle readiness screening for primary/JHS students and informal parent alignment chat.</p>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center font-headline-sm font-bold text-headline-sm">
            04
          </div>
<div className="flex flex-col gap-1">
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Enrollment Offer</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Receive your formal acceptance letter, book lists, and official Carepoint school uniform kit.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col gap-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="flex flex-col gap-2">
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">Parent Community</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold">What Our Families Experience</h2>
</div>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="font-label-md text-label-md text-on-surface font-bold ml-2">4.9 / 5.0 PTA Satisfaction</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-6">
<p className="font-body-md text-body-md text-on-surface italic">
            “When my daughter transitioned from nursery to Basic 1 at Carepoint, her reading fluency simply exploded. The teachers are affectionate yet firm with discipline. She prays with conviction before every meal!”
          </p>
<div className="flex items-center gap-3 pt-2">
<div className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
              MA
            </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary font-bold">Mrs. Mercy Mensah</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mother of Basic 2 &amp; KG1 students</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-6">
<p className="font-body-md text-body-md text-on-surface italic">
            “Carepoint's JHS teachers went beyond normal school hours to ensure my son grasped Integrated Science and ICT for the BECE. He scored 8 ones and got into his first-choice Senior High. Forever grateful!”
          </p>
<div className="flex items-center gap-3 pt-2">
<div className="w-11 h-11 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">
              EA
            </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary font-bold">Mr. Emmanuel Adams</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Father of 2024 JHS Graduate</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-6">
<p className="font-body-md text-body-md text-on-surface italic">
            “The Creche gives working mothers complete peace of mind. Immaculate hygiene, constant updates, and gentle attendants who treat the babies as their own children. Highly recommended!”
          </p>
<div className="flex items-center gap-3 pt-2">
<div className="w-11 h-11 rounded-full bg-tertiary text-tertiary-fixed flex items-center justify-center font-bold">
              FA
            </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary font-bold">Dr. Faustina Asante</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Early Years Nursery Parent</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="news" className="w-full bg-surface py-16 px-6 lg:px-12 scroll-mt-28">
<div className="max-w-7xl mx-auto flex flex-col gap-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[28px]">event_note</span>
<h3 className="font-headline-lg text-headline-lg text-primary font-bold">Key Term Dates &amp; Events</h3>
</div>
<a className="font-label-lg text-label-lg text-primary hover:text-secondary transition-colors" data-path="news-and-events" href="/">
          View Full Calendar →
        </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex items-start gap-4">
<div className="bg-primary text-on-primary rounded-xl p-3 text-center min-w-[70px] shrink-0">
<span className="font-label-sm text-label-sm block uppercase tracking-wider text-secondary-fixed">AUG</span>
<span className="font-display-lg-mobile text-display-lg-mobile font-bold leading-none">20</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Campus Event</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Parent Open House &amp; Tour</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Meet teachers, inspect learning suites, and explore curriculum materials.</p>
</div>
</div>

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex items-start gap-4">
<div className="bg-primary text-on-primary rounded-xl p-3 text-center min-w-[70px] shrink-0">
<span className="font-label-sm text-label-sm block uppercase tracking-wider text-secondary-fixed">SEP</span>
<span className="font-display-lg-mobile text-display-lg-mobile font-bold leading-none">12</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-tertiary-fixed-variant font-bold uppercase tracking-wider">Exhibition</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">STEM &amp; Young Inventors Fair</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Basic and JHS students showcase coding prototypes and robotic models.</p>
</div>
</div>

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex items-start gap-4">
<div className="bg-primary text-on-primary rounded-xl p-3 text-center min-w-[70px] shrink-0">
<span className="font-label-sm text-label-sm block uppercase tracking-wider text-secondary-fixed">SEP</span>
<span className="font-display-lg-mobile text-display-lg-mobile font-bold leading-none">25</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Academic Term</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Term 1 Re-Opening Bell</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">All returning and newly admitted students arrive in full school uniform by 7:30 AM.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container py-16 px-6 lg:px-12">
<div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary p-10 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">

<div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[240px]">school</span>
</div>
<div className="flex flex-col gap-4 max-w-2xl relative z-10">
<div className="flex items-center gap-2 text-secondary-fixed font-label-md text-label-md font-bold tracking-widest uppercase">
<span className="material-symbols-outlined text-[18px]">verified</span>
          Give Your Child The Carepoint Advantage
        </div>
<h2 className="font-display-lg-mobile text-display-lg-mobile font-bold tracking-tight">
          Enrollment is Simple, Transparent &amp; Swift.
        </h2>
<p className="font-body-md text-body-md text-on-primary/80">
          Join a caring school community dedicated to helping your child grow in good character and strong learning. Start an application online in under 10 minutes.
        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0 w-full md:w-auto">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-lg hover:bg-secondary-container transition-all" data-path="admissions-application-form" href="/admissions/apply">
<span>Apply Online Now</span>
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface-container-lowest text-primary font-label-lg text-label-lg hover:bg-surface-container-low transition-colors" data-path="contact-school" href="/">
<span>Speak with Admissions</span>
</a>
</div>
</div>
</section>
</div>
    </>
  );
}
