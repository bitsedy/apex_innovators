"use client";

import React from "react";
import Link from "next/link";

// Parent Ward Dashboard
export default function ParentPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-space-lg space-y-space-lg">

<section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary p-space-lg shadow-md">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="absolute right-1/3 -bottom-20 w-64 h-64 rounded-full bg-tertiary-fixed/10 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
<div className="relative">
<img className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg ring-4 ring-white/10" data-alt="A portrait of a cheerful 7-year-old West African schoolboy wearing a navy blue educational polo uniform with red embroidery badge smiling warmly in a bright classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9CVg3qyDqTRBaf1Za5eZEtjf9HqJTmRYZQD8m1VTazCzAa4pKzciGjlYNGmQBTjYc6lOuRaw__e6Soaurz5AzjIYfwr5xi5pYWLovWtHlNpBmm7CPqca9flU1vU9c8qZvPaEt7MVIPIGLYt_mw8av9q3PHHAHX6fbiCawXEJ9fk6neaC3Jg67CKLAbM8Y3hhSFiwu-hgyfZ_Pa-2mYYMs36B37RI26i5ifSmGyUTFvT-AwumnHXuhvQ"/>
<span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center text-[10px] font-bold shadow" title="Active on Campus">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings": "'FILL' 1"}}>check</span>
</span>
</div>
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">Enrolled • Basic 2</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-white/10 text-primary-fixed">ID: CP-2023-0482</span>
</div>
<h1 className="font-headline-lg text-headline-lg font-bold tracking-tight text-surface-container-lowest">Kofi Mensah</h1>
<div className="flex flex-wrap items-center gap-y-1 gap-x-space-md font-body-sm text-body-sm text-primary-fixed">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-secondary-fixed">wb_sunny</span>
                Sunflower Class
              </span>
<span>•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">person_outline</span>
                Class Teacher: <strong className="text-surface-container-lowest">Mrs. Beatrice Abbey</strong>
</span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-space-sm pt-space-xs lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-primary-fixed-dim font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span>Term 1: Week 8 of 14 • Good Standing</span>
</div>
<div className="flex items-center gap-space-sm">
<div className="relative inline-block text-left" id="wardDropdownContainer">
<button className="inline-flex items-center gap-space-xs px-4 py-2 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-container-lowest font-label-md text-label-md transition"  type="button">
<span className="material-symbols-outlined text-base">swap_horiz</span>
<span>Switch Child (2 Registered)</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</button>
<div className="hidden absolute right-0 mt-2 w-64 rounded-xl bg-surface-container-lowest text-on-surface shadow-xl py-2 z-30" id="wardMenu">
<div className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Select Child</div>
<a className="flex items-center gap-space-sm px-4 py-2 bg-surface-container text-primary font-bold" href="#">
<span className="material-symbols-outlined text-base text-tertiary-container">done</span>
<div>
<p className="font-label-md text-label-md">Kofi Mensah</p>
<p className="font-label-sm text-label-sm text-on-surface-variant font-normal">Basic 2 - Sunflower</p>
</div>
</a>
<a className="flex items-center gap-space-sm px-4 py-2 hover:bg-surface-container-low text-on-surface" href="#">
<span className="material-symbols-outlined text-base opacity-0">done</span>
<div>
<p className="font-label-md text-label-md">Ama Mensah</p>
<p className="font-label-sm text-label-sm text-on-surface-variant font-normal">Nursery 1 - Buttercup</p>
</div>
</a>
</div>
</div>
<a className="p-2 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-container-lowest transition" href="#" title="Child Full Profile">
<span className="material-symbols-outlined text-base">contact_page</span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 flex">
<div className="w-1/3 bg-primary-fixed-dim"></div>
<div className="w-1/3 bg-secondary"></div>
<div className="w-1/3 bg-tertiary-fixed"></div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Term Attendance</span>
<div className="font-headline-lg text-headline-lg font-bold text-primary mt-1">98.2%</div>
</div>
<div className="w-12 h-12 rounded-full bg-tertiary-fixed/30 text-tertiary-container flex items-center justify-center">
<svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98.2, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm">38 of 39 Days Present</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">1 Excused</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Latest Term Avg</span>
<div className="font-headline-lg text-headline-lg font-bold text-primary mt-1">89.4%</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">workspace_premium</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-bold">Grade A • Distinction</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold flex items-center">
<span className="material-symbols-outlined text-xs">arrow_upward</span>3.2%
          </span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Today's Pickup Pass</span>
<div className="flex items-center gap-2 mt-1">
<span className="font-headline-sm text-headline-sm font-bold text-on-tertiary-fixed-variant">Valid &amp; Secured</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed/40 text-on-tertiary-fixed-variant flex items-center justify-center">
<span className="material-symbols-outlined text-xl">qr_code_2</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Dr. Nana Mensah</span>
<span className="font-bold text-primary">#PK-8841</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Unread Updates</span>
<div className="font-headline-lg text-headline-lg font-bold text-secondary mt-1">2 Pending</div>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-xl">mail</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1 text-secondary font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            1 Remark
          </span>
<span className="flex items-center gap-1 text-primary-container font-medium">
            1 Health Bay
          </span>
</div>
</div>
</section>

<section className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-space-sm mb-space-sm gap-2">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">schedule</span>
<h2 className="font-headline-sm text-headline-sm font-bold text-primary">Today's Class Schedule • Sunflower Class</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Thursday, Active Block Session</span>
</div>
<div className="overflow-x-auto pb-2 -mx-space-md px-space-md scrollbar-none">
<div className="flex items-stretch gap-space-sm min-w-[840px]">

<div className="flex-1 rounded-lg p-3 bg-surface-container-low flex flex-col justify-between">
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>08:00 - 08:30</span>
<span className="material-symbols-outlined text-sm text-primary">done_all</span>
</div>
<div className="my-2">
<span className="font-label-md text-label-md font-bold text-primary block">Assembly &amp; Devotion</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Main Courtyard</span>
</div>
<span className="font-label-sm text-[10px] uppercase font-bold text-on-tertiary-container">Completed</span>
</div>

<div className="flex-1 rounded-lg p-3 bg-surface-container-low flex flex-col justify-between">
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>08:30 - 10:00</span>
<span className="material-symbols-outlined text-sm text-primary">done_all</span>
</div>
<div className="my-2">
<span className="font-label-md text-label-md font-bold text-primary block">Mathematics</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Fractions &amp; Shapes</span>
</div>
<span className="font-label-sm text-[10px] uppercase font-bold text-on-tertiary-container">Completed</span>
</div>

<div className="w-32 rounded-lg p-3 bg-surface-container flex flex-col justify-between">
<div className="font-label-sm text-label-sm text-on-surface-variant">10:00 - 10:30</div>
<div className="my-1">
<span className="font-label-md text-label-md font-bold text-primary block">Snack &amp; Play</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Outdoor Pod</span>
</div>
<span className="font-label-sm text-[10px] uppercase font-bold text-on-surface-variant">Break Time</span>
</div>

<div className="flex-1 rounded-lg p-3 bg-primary-container text-on-primary shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between font-label-sm text-label-sm text-primary-fixed">
<span>10:30 - 12:00</span>
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
</div>
<div className="my-2">
<span className="font-label-md text-label-md font-bold text-surface-container-lowest block">Science</span>
<span className="font-body-sm text-[12px] text-primary-fixed">Plant Life &amp; Soil</span>
</div>
<span className="font-label-sm text-[10px] uppercase font-bold text-tertiary-fixed">Happening Now</span>
</div>

<div className="w-36 rounded-lg p-3 bg-surface-container-low flex flex-col justify-between">
<div className="font-label-sm text-label-sm text-on-surface-variant">12:00 - 13:00</div>
<div className="my-1">
<span className="font-label-md text-label-md font-bold text-primary block">Nutritious Lunch</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Jollof &amp; Steamed Veg</span>
</div>
<span className="font-label-sm text-[10px] uppercase font-bold text-on-surface-variant">Dining Hall</span>
</div>

<div className="flex-1 rounded-lg p-3 bg-surface-container-low flex flex-col justify-between opacity-80">
<div className="font-label-sm text-label-sm text-on-surface-variant">13:00 - 14:30</div>
<div className="my-2">
<span className="font-label-md text-label-md font-bold text-primary block">ICT Basics</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">ScratchJr Animation</span>
</div>
<span className="font-label-sm text-[10px] uppercase font-bold text-on-surface-variant">Lab 1</span>
</div>

<div className="flex-1 rounded-lg p-3 bg-surface-container-high flex flex-col justify-between">
<div className="font-label-sm text-label-sm text-on-surface-variant">14:30 - 15:30</div>
<div className="my-2">
<span className="font-label-md text-label-md font-bold text-secondary block">Closing Gate</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Secure Gate 2 Checkout</span>
</div>
<span className="font-label-sm text-[10px] uppercase font-bold text-secondary">Pickup</span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 space-y-space-lg">

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Academic Performance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mid-Term assessment roll for sunflower stream</p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container font-bold" href="#">
<span>Full Report</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>

<div className="space-y-space-md">
<div>
<div className="flex justify-between font-label-md text-label-md mb-1">
<span className="text-on-surface font-semibold">Mathematics</span>
<span className="font-bold text-primary">94% • <span className="text-on-tertiary-container">Distinction</span></span>
</div>
<div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full rounded-full bg-primary" style={{"width": "94%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-md text-label-md mb-1">
<span className="text-on-surface font-semibold">Integrated Science</span>
<span className="font-bold text-primary">92% • <span className="text-on-tertiary-container">Distinction</span></span>
</div>
<div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full rounded-full bg-tertiary-container" style={{"width": "92%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-md text-label-md mb-1">
<span className="text-on-surface font-semibold">Computing &amp; Coding</span>
<span className="font-bold text-primary">90% • <span className="text-on-tertiary-container">Distinction</span></span>
</div>
<div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full rounded-full bg-primary-container" style={{"width": "90%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-md text-label-md mb-1">
<span className="text-on-surface font-semibold">English Language &amp; Phonics</span>
<span className="font-bold text-primary">88% • <span className="text-on-tertiary-container">Excellent</span></span>
</div>
<div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full rounded-full bg-primary" style={{"width": "88%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-md text-label-md mb-1">
<span className="text-on-surface font-semibold">Creative Arts &amp; Design</span>
<span className="font-bold text-primary">85% • <span className="text-on-tertiary-container">Very Good</span></span>
</div>
<div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full rounded-full bg-secondary-container" style={{"width": "85%"}}></div>
</div>
</div>
</div>
<div className="mt-space-lg p-space-md rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-xl">analytics</span>
<div>
<span className="font-label-md text-label-md font-bold text-primary block">Term 1 Cognitive Benchmark</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Performing in the 94th percentile across primary 2 class.</span>
</div>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-tertiary-container bg-surface-container px-2 py-1 rounded">Top 5%</span>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Class Teacher Observation</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Today • 11:20 AM</span>
</div>
<div className="flex items-start gap-space-md">
<img className="w-12 h-12 rounded-full object-cover shrink-0" data-alt="A portrait of Mrs. Beatrice Abbey, an experienced Ghanaian primary school educator wearing modern professional attire with a warm and encouraging expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo1EGS9Udv9jbRuc-r6_oXpPteu9hto5W-SkEkm2uTxYC_8t04Z0bkIPpHMyA7yGLHXLvsrFuQqok8JD7tVi6QkAq01hTH_2GU1O1U0WY1b_fqIXnvJvjsmyxu_6286Xsi9NMB9HAsZaxqurxk17R4oPRa4XNsolx6wRTOhJJIEBUI6m6AdHqZ8LPBO6IrFN8ItlRIZm_xSUzn8SkT-Hm1LpNpyB808pBwbwzAPFI0qzuy3owK2k3KoA"/>
<div className="space-y-space-xs">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-bold text-primary">Mrs. Beatrice Abbey</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Sunflower Class Lead</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface relative">
<span className="material-symbols-outlined text-secondary text-2xl absolute -top-3 -left-2 opacity-30">format_quote</span>
<p className="relative z-10 leading-relaxed">
                  "Kofi showed exceptional problem-solving skills in today's group math exercise. He assisted his team with the fraction puzzles and remained very polite, proactive, and attentive throughout. Keep encouraging his home reading."
                </p>
</div>
<div className="flex items-center gap-space-md pt-space-xs font-label-md text-label-md">
<button className="text-primary hover:text-primary-container font-semibold flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-base">reply</span> Reply to Mrs. Abbey
                </button>
<span className="text-on-surface-variant">•</span>
<button className="text-on-surface-variant hover:text-on-surface flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-base">thumb_up</span> Acknowledge
                </button>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Sunflower Pod Activities</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Classroom moments captured by teaching assistants</p>
</div>
<a className="font-label-md text-label-md text-primary font-bold" href="#">Class Album</a>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="relative rounded-lg overflow-hidden group">
<img className="w-full h-40 object-cover group-hover:scale-105 transition duration-300" data-alt="West African elementary school children working on a colorful botanical science project with seedlings and soil in an airy modern classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkk3ATYzUC8TGjb5IrJudIwAupVJi0Luajl8g-fjgEPL5L2ZQus9K_p-qtg2HgQSMN9NPZr4WHzhPWCMD3LeRED0GpUUbFtMGMUVZ93kV-Cn4OCPg4f53g2G-Wl3RyeSRv_BvABEyD-16AU0T9lgE4JaRqe5QdodrfsTv5vbdFVQ-NrR_WgfTZ69IhRQQnFdYm6BIj5REho0PmMKwe4ZOukcM_HVkFIvlDZ_efVcnWZngDbQ1UtFdDmA"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
<span className="font-label-sm text-label-sm text-white font-medium">Science Pod: Sprouting Beans</span>
</div>
</div>
<div className="relative rounded-lg overflow-hidden group">
<img className="w-full h-40 object-cover group-hover:scale-105 transition duration-300" data-alt="Primary school children in colorful uniforms collaborating enthusiastically with tablets in a well-equipped modern school library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZjtdOIkg-YS3DDq0B7aw6mafrZ_AverBonRlEzwj8-6jKl3YUSCccp8hK2fAcWRK2sVfZ-xsZ9bAzfu_YME2KVsXg1OdEkCkc8QeUHxDTzmkvwW6bUbD8pA6WfpFKUtnBbfkf4Pr_RvqISq1n4dEyxn9R74rFQY7_F9ZGpiq8orcdd3QeLJSfqJnqmxdZxXNIySz7gYZ8qQxVFW5HJNSeGb1Z9P03iSXnNctl1z0uEVDayY6EpfaZCw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
<span className="font-label-sm text-label-sm text-white font-medium">ICT: Coding with Blocks</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-space-lg">

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary-container">verified</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Gate &amp; Pickup Security</h3>
</div>
<a className="font-label-md text-label-md text-primary hover:underline font-bold" href="#">Manage</a>
</div>

<div className="p-space-md rounded-lg bg-surface-container flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Authorized Collector</span>
<span className="font-label-lg text-label-lg font-bold text-primary block mt-0.5">Dr. Nana Mensah</span>
<span className="font-body-sm text-[12px] text-on-surface-variant block">Verification: Primary Biometric / QR</span>
</div>
<div className="p-2 bg-surface-container-lowest rounded-lg shadow-sm text-center">
<span className="material-symbols-outlined text-4xl text-primary block">qr_code_scanner</span>
<span className="font-label-sm text-[10px] text-on-surface-variant font-bold">#PK-8841</span>
</div>
</div>

<span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase tracking-wider block mb-space-xs">Recent Gate Activity</span>
<div className="space-y-space-sm">
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Dr. Nana Mensah</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Yesterday 15:10 • Gate 2 Main</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-bold">Verified</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Auntie Grace Owusu</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Mon 15:05 • OTP Authorization</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-bold">OTP Pass</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Dr. Nana Mensah</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Fri 15:15 • Gate 2 Main</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-bold">Verified</span>
</div>
</div>
<button className="w-full mt-space-md py-2.5 rounded bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-lg">person_add</span>
<span>Authorize One-Time Guest Handler</span>
</button>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">health_and_safety</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Health &amp; Wellness</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">School Bay</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Routine Screening: Dental &amp; Vision</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Oct 14, 2026</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Conducted by School Nurse Sister Abigail. Eyesight 20/20 bilateral, teeth clean with zero cavity indicators noted.
            </p>
<div className="flex items-center gap-space-md pt-1">
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">check_circle</span>
                All vitals normal
              </span>
<a className="font-label-sm text-label-sm text-primary hover:underline" href="#">Clinic Log</a>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary">event</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Upcoming Dates</h3>
</div>
<a className="font-label-md text-label-md text-primary font-bold" href="#">View Term</a>
</div>
<div className="space-y-space-sm">
<div className="flex items-center gap-space-md p-space-sm rounded-lg hover:bg-surface-container-low transition">
<div className="w-12 h-12 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex flex-col items-center justify-center shrink-0">
<span className="font-label-sm text-[10px] uppercase font-bold leading-none">OCT</span>
<span className="font-headline-sm text-headline-sm font-bold leading-tight">20</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-lg text-label-lg font-bold text-primary truncate">Mid-Term PTA Meeting</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">16:30 • School Multipurpose Auditorium</p>
</div>
</div>
<div className="flex items-center gap-space-md p-space-sm rounded-lg hover:bg-surface-container-low transition">
<div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex flex-col items-center justify-center shrink-0">
<span className="font-label-sm text-[10px] uppercase font-bold leading-none">OCT</span>
<span className="font-headline-sm text-headline-sm font-bold leading-tight">25</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-lg text-label-lg font-bold text-primary truncate">Science &amp; Innovation Expo</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">09:00 - 14:00 • Sunflower Class project showcase</p>
</div>
</div>
<div className="flex items-center gap-space-md p-space-sm rounded-lg hover:bg-surface-container-low transition">
<div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex flex-col items-center justify-center shrink-0">
<span className="font-label-sm text-[10px] uppercase font-bold leading-none">NOV</span>
<span className="font-headline-sm text-headline-sm font-bold leading-tight">02</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-lg text-label-lg font-bold text-primary truncate">Founder's Thanksgiving Day</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant">Public Holiday • Campus Closed</p>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-primary text-on-primary p-space-md flex items-center justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider block">Need Assistance?</span>
<span className="font-label-lg text-label-lg font-bold text-white block">Sunflower Class Representative</span>
<span className="font-body-sm text-[12px] text-primary-fixed block">Direct parent liaison for Basic 2</span>
</div>
<button className="px-3 py-2 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm font-bold hover:bg-secondary-container transition flex items-center gap-1 shrink-0" type="button">
<span className="material-symbols-outlined text-sm">chat</span>
<span>Contact</span>
</button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
