"use client";

import React from "react";
import Link from "next/link";

// Admin Wards
export default function WardsPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="flex flex-col gap-space-md mb-space-lg">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed uppercase tracking-wider">Statutory Master Registry</span>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">Confidential Child Protection Tier 1</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Student Master Directory &amp; Cross-Role Dossier</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Academic Year 2026/2027 • 340 Active Enrolled Students Across 4 Divisions • Synchronized NaSIA / GES Ledger</p>
</div>
<div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">download</span>
<span>Export Statutory Census</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">family_star</span>
<span>Batch Promotion</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">person_add</span>
<span>+ Enroll New Student</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Division 1</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Nursery</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Creche • Nursery 1 • Nursery 2</span>
</div>
<div className="flex flex-col items-end">
<span className="font-headline-md text-headline-md font-extrabold text-primary">48</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">100% Verified</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary-container"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Division 2</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Kindergarten</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">KG 1 • KG 2 Streams</span>
</div>
<div className="flex flex-col items-end">
<span className="font-headline-md text-headline-md font-extrabold text-primary">92</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">97.8% Attendance</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-fixed-variant"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Division 3</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Basic School</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Primary Grades 1 through 6</span>
</div>
<div className="flex flex-col items-end">
<span className="font-headline-md text-headline-md font-extrabold text-primary">120</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">4 Active Alerts</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-tint"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Division 4</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Junior High</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">JHS 1 • JHS 2 • JHS 3 BECE</span>
</div>
<div className="flex flex-col items-end">
<span className="font-headline-md text-headline-md font-extrabold text-primary">80</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">99.1% Registered</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg flex flex-col gap-space-sm">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">search</span>
<input className="w-full bg-surface-container-low text-on-surface rounded-xl pl-11 pr-4 py-2.5 font-body-sm text-body-sm outline-none placeholder:text-on-surface-variant transition-all focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container" id="rosterSearchInput" placeholder="Search by Child Name, Student ID (e.g. CP-2018-0941), Guardian Name, or House..." type="text" value="Kofi Nana Mensah"/>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-1">Filter By:</span>
<button className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm" type="button">All Divisions</button>
<button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all" type="button">Basic School</button>
<button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all" type="button">Kindergarten</button>
<button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all" type="button">Junior High</button>
<button className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">crisis_alert</span>
<span>Safeguarding / Custody Flags</span>
</button>
<button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">medication</span>
<span>Medical Alert</span>
</button>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span>Attendance:</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-semibold">&gt;95% Target</span>
<span className="text-outline-variant">•</span>
<span>Showing <strong className="text-on-surface">5 of 340</strong> filtered students</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-4 xl:col-span-4 flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-1">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">Roster Manifest (5)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Sort: <strong className="text-on-surface">Critical Flag First</strong></span>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md transition-all cursor-pointer relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary-container"></div>
<div className="flex items-start gap-3 pl-1">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Official school identification portrait photograph of an eight-year-old Ghanaian boy student with a polite smile, wearing a neat navy blue school uniform with the Carepoint crest patch, shot under balanced academic studio lighting against a clean neutral background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsj9G1oHeadE3Ta9L_HbsISUbE7zdXYaX3PCgGnq35MrrMRgYMKlXufmRXlKPsF7pFO0gyK8g6sfDpCHbVi21tHtT5yB91ZqmBWiM1Vs8YWLKW8_qiZBCigzBLw4NUTf2zssZYveV25k18tiHwrtcsAMunxXKmlvU1C7Bs1MjeolIqgeLj6fcH74NyM4lEUcnofeKVYZGOq0vBMrPlTmPUXxuittQARzWiD9OyGzodDVfVzZzdHkPmWg"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-secondary-container"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kofi Nana Mensah</h4>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-bold tracking-tight">STRICT CUSTODY</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-sm text-label-sm font-semibold text-primary">#CP-2018-0941</span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Basic 2 Sunflower</span>
</div>
<div className="flex flex-wrap items-center gap-1.5 mt-2">
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">emergency</span>
<span>Mild Asthma</span>
</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">House: Aggrey</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold ml-auto">96.4% Att.</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-container-high group-hover:bg-primary-container"></div>
<div className="flex items-start gap-3 pl-1">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Passport style profile photo of a cheerful 4-year-old West African girl with braided hair and yellow hair beads, wearing a school polo shirt, brightly lit in a cheerful classroom setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Cpm4tPOYypAZgFrtACeVlKP6O8agtT1i9i1t_nWQu_iLaH66aHbKKO4G9-Gr7Oz4BeyPhv9v7c7tjX1w0fRE0BNQoiMmLWF02G7LF4tIuL4zuEWB2nYUvNjfXGJJ2Gb6VsNiChVuSkN0KHpbu5tKetV6RWvQGFlds4cfslSbJTf5WMStSnOth5G8d4ZV2fK9IgEKrExhQelOZINf_sCdTIWKeEZLkO729-E6phEIwUTQWosGClB4WA"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Ama Osei-Bonsu</h4>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">Standard</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">#CP-2022-1102</span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Nursery 1 Blue</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Primary Care: Both Parents</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold ml-auto">98.0% Att.</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-container-high group-hover:bg-primary-container"></div>
<div className="flex items-start gap-3 pl-1">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Identification portrait photograph of a 6-year-old Ghanaian schoolboy in high contrast indoor light, wearing a pristine navy collar uniform shirt with bright inquisitive eyes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfqnDt88ypVVONXHIvzr4WLllItbyXMXSir4o-s1CIuex3BWXq_JqIGnMYvlgkVMKTvdaSlLWnLBxOxHNxDU4AL_QwGAEPi4liUlDn47_OZuy3-7iYU4vr3_4rarow98EDSmzxTMRLjlSa0J3xX1wKd3DE3Dmjr781HgdPuVWk2ltbE3-_6btYU-d8c3wtyWois7I0lh0xXSUeCAI1GBRONYlkFgD05k9KUoBO81Xm_JjPG9QSL_7x3g"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary-fixed-dim"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Kwadwo Asare</h4>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-semibold">New Enrollee</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">#CP-2026-0488</span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Basic 1 Gold</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Admission Pending Dossier Review</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-auto">Wk 2</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-container-high group-hover:bg-primary-container"></div>
<div className="flex items-start gap-3 pl-1">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Academic portrait of a focused 14-year-old Ghanaian teenage boy wearing a navy junior high school blazer with academic lapel badges, smiling confidently in front of a modern school library backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBulxtAJWcPLBQlfgOYIRDDXPa5PiF5RhAuV-mrKTslbFxfX8R91Xz2_fmRiH7oP7k3sIQvI6NSzDGhe2VH2rnfnONDJN_uwcLh6IELrk8aq5YU9sw-n2c-o1MatI1Rm19IaFFGajfKh9Kg588iANvQ-CqJbwxfHXQjMtOvaX6kth3Qv0C4uk9kLTcpv9NKjX8xMpZarl_HyjZPKb4DGwmqXwY02LymqSF4P6y_Jz9m_95Y8C5_6DxoGQ"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Selorm Darko</h4>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Honor Roll</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">#CP-2015-0219</span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">JHS 2 Amber</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">Prefect Nominee • House Nkrumah</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold ml-auto">99.4% Att.</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-container-high group-hover:bg-primary-container"></div>
<div className="flex items-start gap-3 pl-1">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Profile photo of a 5-year-old energetic Ghanaian kindergarten girl with neat cornrows and ribbon ties, wearing a yellow-and-navy school dress, photographed outdoors in soft warm daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxljb2gRt67dwacqwVg_ZwDGaW4f6dVM2BfCfigIEGiaBrS4uXqrCZi0xyFTkiwf4yC2ZxmEyKCbnL9c1ODbceH4aYmp2pZRJMCEOrROAN0SHtafFsJ0EFYmibOpa92zOSytzsLUKNNgvGmszhh7AGkCug4XiMLqrKya634rWhQ34KR1sHlG-xL-UFd57LRuaLFxeb2jR6Y2C7_EB9yxwgso76W_P1lYnGew7wEhltOlsLu283xkOGAA"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<h4 className="font-label-lg text-label-lg text-on-surface font-bold truncate">Akosua Baah</h4>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">Bus Rider</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">#CP-2020-0744</span>
<span className="text-outline-variant text-[10px]">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">KG 2 Emerald</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Route 4B • East Legon Dropoff</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold ml-auto">94.8% Att.</span>
</div>
</div>
</div>
</div>

<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Page 1 of 68</span>
<div className="flex items-center gap-1">
<button className="w-7 h-7 rounded-lg bg-surface-container-lowest text-on-surface-variant flex items-center justify-center hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<button className="w-7 h-7 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center justify-center shadow-sm" type="button">1</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center hover:bg-surface-container" type="button">2</button>
<button className="w-7 h-7 rounded-lg bg-surface-container-lowest text-on-surface-variant flex items-center justify-center hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-8 xl:col-span-8 flex flex-col gap-space-md">

<div className="p-space-md rounded-xl bg-primary text-on-primary shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm relative overflow-hidden">
<div className="flex items-start gap-3">
<div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-primary-fixed shrink-0">
<span className="material-symbols-outlined text-[20px]">security</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary-fixed">Audit-Logged Oversight View</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary-container text-on-primary-fixed">Session ID: AUD-8491-ADM</span>
</div>
<p className="font-body-sm text-body-sm text-surface-variant mt-0.5">Every action, impersonation switch, and tab access is recorded in the NaSIA statutory audit registry.</p>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm font-semibold transition-all flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">visibility</span>
<span>Impersonate Parent View</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm font-semibold transition-all flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">history_edu</span>
<span>Teacher Gradebook View</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-20 h-20 rounded-2xl bg-surface-container overflow-hidden shadow-sm">
<img className="w-full h-full object-cover" data-alt="Crisp high-resolution portrait photograph of Kofi Nana Mensah, an 8-year-old Ghanaian school student in navy school tie and collared shirt, direct eye contact with pleasant composed expression against a solid warm gray studio backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQOlrQ99cek1ONVaosr3dtMTRHM8x3OpN3Rlph3a57pQp2JZnT_0Y3zx0aoysnW5cevHPTVu-jwgEAi318xsCmgK22xpbqEEX4CQYggUmZ1UlJJWCQ_cl7MekT3G8I8ehUOV3JaVRFwivkpmrmVIvNTTO2V2Q0A6rPi2DdDy_43fLAP4q96NXm0XjFWJTs-a2GudaGxsCJ9R-EqNR3sXSIdwdSkFYcYST9-DMgoHnTvjW9NDimap5cxg"/>
</div>
<span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm" title="Active Safeguarding Hold">!</span>
</div>
<div className="flex flex-col">
<div className="flex flex-wrap items-center gap-2">
<h2 className="font-headline-md text-headline-md text-primary font-bold">Kofi Nana Mensah</h2>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">Active Enrolled</span>
<span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">Aggrey House (Red)</span>
</div>
<div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span>ID: <strong className="text-on-surface font-semibold">CP-2018-0941</strong></span>
<span className="text-outline-variant">•</span>
<span>Age: <strong className="text-on-surface">8 Yrs (DOB: 14 Oct 2017)</strong></span>
<span className="text-outline-variant">•</span>
<span>Class: <strong className="text-on-surface">Basic 2 Sunflower</strong></span>
<span className="text-outline-variant">•</span>
<span>Tutor: <strong className="text-on-surface">Mrs. Beatrice Abbey</strong></span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors shadow-sm" title="Print Master Student File" type="button">
<span className="material-symbols-outlined text-[20px]">print</span>
</button>
<button className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors shadow-sm" title="Generate Digital QR Pass" type="button">
<span className="material-symbols-outlined text-[20px]">qr_code_2</span>
</button>
<button className="px-space-md py-2 rounded-xl bg-primary-container text-on-primary hover:bg-primary font-label-sm text-label-sm font-semibold flex items-center gap-2 transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">edit_document</span>
<span>Edit Student Record</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-2">

<div className="p-space-md rounded-xl bg-secondary-fixed text-on-secondary-fixed shadow-sm flex items-start gap-3 relative overflow-hidden">
<div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">gavel</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-extrabold uppercase tracking-tight text-secondary">Strict Custody Protocol Enforced</span>
<span className="font-label-sm text-label-sm font-bold text-on-secondary-fixed">Injunction #GAR/FCT/881</span>
</div>
<p className="font-body-sm text-body-sm text-on-secondary-fixed mt-1">Release authorization restricted exclusively to registered biometric guardians. Uncle (Mr. K. Boateng) explicitly blacklisted per high court order.</p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-high text-on-surface shadow-sm flex items-start gap-3 relative overflow-hidden">
<div className="w-8 h-8 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">emergency_home</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-extrabold uppercase tracking-tight text-secondary">School Clinic Alert: Mild Asthma</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary font-bold">Box #12</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Salbutamol 100mcg inhaler stored in school clinic locker #12. Requires PE supervision during harmattan dry-wind season.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-1.5 shadow-sm flex flex-wrap items-center gap-1.5" id="dossierTabs">
<button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 bg-primary-container text-on-primary shadow-sm font-bold"  type="button">
<span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
<span>1. Admin &amp; Enrolment</span>
</button>
<button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-semibold"  type="button">
<span className="material-symbols-outlined text-[18px]">security_update_good</span>
<span>2. Guardians &amp; Gate Security</span>
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
</button>
<button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-semibold"  type="button">
<span className="material-symbols-outlined text-[18px]">school</span>
<span>3. Academic &amp; SBA Records</span>
</button>
<button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-2 text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-semibold"  type="button">
<span className="material-symbols-outlined text-[18px]">vital_signs</span>
<span>4. Clinical &amp; Dietary Ledger</span>
</button>
</div>

<div className="tab-panel flex flex-col gap-space-md" id="adminTab">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md pb-space-xs">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Statutory Enrolment &amp; Civil Documentation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Validated against National Schools Inspectorate Authority (NaSIA) standard protocols</p>
</div>
<span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Full Clearance (100%)</span>
</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Ghana Card National PIN</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface mt-1">GHA-72991044-8</span>
<span className="font-body-sm text-body-sm text-on-tertiary-container mt-1 flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
<span>Verified via NIA Gateway</span>
</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Date of Initial Matriculation</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface mt-1">08 September 2021</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Admitted at Nursery 2 Tier</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Birth Certificate Ledger</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface mt-1">BC-ACC-2017-9104</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Registrar General Dept • Accra</span>
</div>
</div>

<div className="mt-space-md p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[20px]">payments</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Term 2 Academic &amp; Facility Fees</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Fully Settled</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Receipt #RCP-2026-1883 • GHS 4,850.00 • PTA Levy &amp; Robotics Lab Surcharge Cleared</span>
</div>
</div>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary font-label-sm text-label-sm font-semibold transition-all shadow-sm" type="button">
                View Ledger Breakdown
              </button>
</div>
</div>
</div>

<div className="tab-panel hidden flex flex-col gap-space-md" id="guardiansTab">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Gate Biometric Release &amp; Custody Authorizations</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Active turnstile clearance protocols synchronized with perimeter RFID turnstiles</p>
</div>
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container font-label-sm text-label-sm font-bold flex items-center gap-1.5 transition-all shadow-sm self-start" type="button">
<span className="material-symbols-outlined text-[16px]">lock_person</span>
<span>Flag Gate Override</span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2 relative">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">Tier 1 Primary</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">RFID #8819</span>
</div>
<div className="flex items-center gap-3 mt-1">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photograph of Dr. Nana Mensah, a distinguished Ghanaian physician in his early 40s wearing semi-formal professional attire, sharp focused photo for security identification." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQonHlXvMPTup2JpJigxGUaPrIWp7Mly1FS7X161Nn2IZJm2M87LC5QJt8cqFzKPUwEJysB06dTPFJRvYGUkDUyEGHuiC6aUobM4J-PqfUWuyop7OJBMDjxyrOgF4F9KhtRLMBkm82E-YGkMRODuwxo60zLxNsd1h0OdX6rQQmrtEskWwBqKHR_W41ZS42avaTZBf6mqte2aATkjLJP6eib5Kc40jrEcpbtkBMJykPnGPJ_6QW0GvwDg"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-on-surface">Dr. Nana Mensah</h5>
<span className="font-body-sm text-body-sm text-on-surface-variant">Father (Primary Custodian)</span>
</div>
</div>
<div className="text-body-sm font-body-sm text-on-surface-variant mt-1">
<p className="flex items-center gap-1 text-[13px]"><span className="material-symbols-outlined text-[14px]">call</span> +233 24 491 0021</p>
<p className="flex items-center gap-1 text-[13px]"><span className="material-symbols-outlined text-[14px]">badge</span> 37 Military Hospital</p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2 relative">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">Tier 1 Primary</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">RFID #8820</span>
</div>
<div className="flex items-center gap-3 mt-1">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Security pass headshot of Dr. Abena Mensah, a 38-year-old Ghanaian woman professional with stylish spectacles, warm poised look, high key lighting for identity validation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1S4LF43VK6UTtf3GrTTdQLgwjojMW-4mZvVKgB7JcZL6ERsY6J21yIFIo9T82y9waBb0_aeMRGCbD6QhqTeZT2z_POI8234N89B8HuEKymJ3XsKdZS9BHDtBXN2QMYUG33BZIXqo6FCshYQSL5KKttv3vyTzm2YVvCDzfAskW5jeb9LnvXrmNZQFQ7ngfqhoxMvy8zNicxGwoScrXoxQZfBC1IhV6-LhDApCzbi00uffG97uWtR6GZg"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-on-surface">Dr. Abena Mensah</h5>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mother (Co-Custodian)</span>
</div>
</div>
<div className="text-body-sm font-body-sm text-on-surface-variant mt-1">
<p className="flex items-center gap-1 text-[13px]"><span className="material-symbols-outlined text-[14px]">call</span> +233 20 812 4433</p>
<p className="flex items-center gap-1 text-[13px]"><span className="material-symbols-outlined text-[14px]">badge</span> Legon University Clinic</p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2 relative">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">Tier 2 Alternate</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">PIN &amp; SMS OTP</span>
</div>
<div className="flex items-center gap-3 mt-1">
<div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Formal identification portrait of Mrs. Grace Owusu, a 52-year-old Ghanaian woman with an elegant headwrap and gentle welcoming demeanor, clearly lit for gatehouse verification." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA69W9b6c_Td3lRXLOT8jGE0CZJ_nrBjFs4iQrVQNQJWOJkj9rJsgPupuAMyOawrOEBWX3nYdg9qd2pZ4SfPQwUvVJD8S5BMUkJbErYnGPcMQ1gHZ6T2w56Mxvv3GEZIpyppUI9fvW35Mc2O5y4UHjB528TNnB9vad-PUIHKxZ-v0E4lYlUFQeArrcL0TxkDqUpT9OqgOAaxLTkNQodyaEmeyW7E9NkD0oQQQeN8MRea4mihb-SdKUcgQ"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-on-surface">Mrs. Grace Owusu</h5>
<span className="font-body-sm text-body-sm text-on-surface-variant">Maternal Aunt (Alternate)</span>
</div>
</div>
<div className="text-body-sm font-body-sm text-on-surface-variant mt-1">
<p className="flex items-center gap-1 text-[13px]"><span className="material-symbols-outlined text-[14px]">call</span> +233 27 775 9011</p>
<p className="flex items-center gap-1 text-[13px]"><span className="material-symbols-outlined text-[14px]">pin</span> Single-use token required</p>
</div>
</div>
</div>

<div className="mt-space-md p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Turnstile Real-Time Release History (Gate A • Cantonments Road)</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-1">
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Yesterday 15:22 GMT • Gate A Turnstile</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Released to Dr. Nana Mensah (Biometric OK)</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim"></span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Yesterday 07:44 GMT • Morning Dropoff</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dropped off by Dr. Abena Mensah</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-panel hidden flex flex-col gap-space-md" id="academicTab">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Continuous Assessment (SBA) &amp; Gradebook</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Basic 2 Curriculum Standards • Lead Tutor: Mrs. Beatrice Abbey</p>
</div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface-variant">Overall Term Score:</span>
<span className="font-headline-sm text-headline-sm font-extrabold text-primary px-3 py-1 rounded-xl bg-primary-fixed">84.5% (Exceeding Expectations)</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm mb-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">English Language</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">88.0%</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Phonics, Grammar &amp; Creative Expression</p>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-2 mt-3 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width": "88%"}}></div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mathematics</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">82.0%</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Numeracy, Mental Arithmetic &amp; Shapes</p>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-2 mt-3 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width": "82%"}}></div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Integrated Science</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">91.0%</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Living Things, Weather &amp; Environment</p>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-2 mt-3 overflow-hidden">
<div className="bg-tertiary-fixed-variant h-full rounded-full" style={{"width": "91%"}}></div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Computing / ICT</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">77.0%</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Typing Speed, Algorithmic Thinking</p>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-2 mt-3 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width": "77%"}}></div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low border-l-4 border-primary flex items-start gap-3">
<span className="material-symbols-outlined text-[24px] text-primary shrink-0 mt-0.5">format_quote</span>
<div>
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">Class Tutor Formal Mid-Term Feedback • Mrs. Beatrice Abbey</span>
<p className="font-body-sm text-body-sm text-on-surface mt-1">
                  "Kofi continues to show remarkable inquisitiveness during science discovery labs and excels at peer reading groups. We are paying gentle attention to his fine-motor handwriting speed, which is steadily advancing. Outstanding citizenship and Aggrey House sportsmanship."
                </p>
</div>
</div>
</div>
</div>

<div className="tab-panel hidden flex flex-col gap-space-md" id="healthTab">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">School School Clinic &amp; Clinical Management</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Maintained by Nurse Mary Asante, SRN • Certified School Health Unit</p>
</div>
<span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">warning</span>
<span>Active Medical Notice</span>
</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Most Recent School Clinic Incident</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">12 Jan 2026 • 11:15 GMT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Mild wheezing recorded post-PE sprint relays. Two puffs of Salbutamol inhaler administered under Nurse Asante's supervision. Peak flow normalized within 12 minutes (measured 220 L/min). Parent notified via Carepoint Automated SMS.
                </p>
<div className="flex items-center gap-2 mt-2 pt-2 border-t border-surface-container">
<span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Signed by: Nurse Mary Asante, Lic #GCNM-822</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Cafeteria &amp; Dining Hall Protocol</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-semibold">Strict Supervision</span>
</div>
<div className="flex flex-col gap-1.5 mt-1 font-body-sm text-body-sm">
<div className="flex items-center justify-between">
<span className="text-on-surface">Peanuts / Tree Nuts:</span>
<span className="font-semibold text-secondary">None (Suspected Sensitivity)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface">Lactose Intolerance:</span>
<span className="font-semibold text-on-surface">Mild (Soy milk substituted)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface">Water Bottle Check:</span>
<span className="font-semibold text-tertiary">Hydration monitored hourly</span>
</div>
</div>
<div className="mt-2 pt-2 border-t border-surface-container flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dining Hall Pass:</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-bold">TABLE 4B ALLERGY TAG</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
