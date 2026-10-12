"use client";

import React from "react";
import Link from "next/link";

// Admin Reports
export default function ReportsPage() {
  return (
    <>
<div className="flex flex-col w-full">

<section className="flex flex-col gap-space-lg mb-space-xl">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm tracking-wide uppercase">
            Statutory Ready • NaSIA Form QA-2026
          </span>
<span className="text-on-surface-variant font-label-sm text-label-sm">
            GES Regulatory Reference: ACC-REG-2026/T1-094
          </span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
          Institutional Analytics &amp; Statutory Reporting Engine
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Term 1, Academic Year 2026/2027 • NaSIA Quality Assurance Compliance Hub &amp; Executive Telemetry
        </p>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container shadow-sm font-label-lg text-label-lg transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
<span>Schedule Dispatch</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-high text-primary hover:bg-surface-container-highest shadow-sm font-label-lg text-label-lg transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">table_view</span>
<span>Export Dataset (XLSX)</span>
</button>
<button className="flex items-center gap-2 px-space-lg py-2.5 rounded-xl bg-secondary-container text-on-secondary hover:bg-secondary transition-all shadow-md hover:shadow-lg font-label-lg text-label-lg" type="button">
<span className="material-symbols-outlined text-[20px]">policy</span>
<span>Generate NaSIA Audit Pack (PDF)</span>
</button>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-low text-on-surface">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">event</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Period:</span>
<select className="bg-transparent font-label-lg text-label-lg text-primary focus:outline-none cursor-pointer">
<option >Term 1 (2026/2027)</option>
<option>Term 3 (2026/2026)</option>
<option>Term 2 (2026/2026)</option>
<option>Full Academic Cycle 2026/26</option>
</select>
</div>
<div className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-low text-on-surface">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">date_range</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Range:</span>
<select className="bg-transparent font-label-lg text-label-lg text-primary focus:outline-none cursor-pointer">
<option >Past 30 Days (Rolling)</option>
<option>Current Week (Wk 8)</option>
<option>Mid-Term Sprint (Wk 1-6)</option>
<option>Full Term Telemetry</option>
</select>
</div>
<div className="hidden xl:flex items-center gap-1.5 p-1 rounded-xl bg-surface-container-low">
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm transition-all" type="button">All Divisions</button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">Nursery</button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">Kindergarten</button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">Basic 1-6</button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">JHS 1-3</button>
</div>
</div>
<div className="flex items-center gap-space-sm justify-end">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
<span>Live Telemetry Synchronized: Today, 08:30 GMT</span>
</div>
<button className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">refresh</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
<div className="w-2 h-full absolute left-0 top-0 bg-primary"></div>
<div>
<div className="flex items-center justify-between mb-space-sm pl-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Attendance Telemetry</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">how_to_reg</span>
</div>
</div>
<div className="flex items-baseline gap-2 pl-space-xs">
<span className="font-display-lg text-display-lg text-primary font-bold">96.8%</span>
</div>
<div className="flex items-center gap-2 pl-space-xs mt-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">trending_up</span>+1.2%
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">vs Term 3 Benchmark</span>
</div>
</div>
<div className="mt-space-md pt-space-sm pl-space-xs flex items-center justify-between bg-surface-container-low/50 rounded-xl px-space-sm py-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Target GES Threshold:</span>
<span className="font-label-sm text-label-sm text-primary font-bold">&gt;95.0% Standard</span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
<div className="w-2 h-full absolute left-0 top-0 bg-secondary-container"></div>
<div>
<div className="flex items-center justify-between mb-space-sm pl-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Academic SBA Mastery</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary-container">
<span className="material-symbols-outlined text-[18px]">workspace_premium</span>
</div>
</div>
<div className="flex items-baseline gap-2 pl-space-xs">
<span className="font-display-lg text-display-lg text-primary font-bold">82.4%</span>
</div>
<div className="flex items-center gap-2 pl-space-xs mt-1">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
            Proficient / Advanced
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Across All Tiers</span>
</div>
</div>
<div className="mt-space-md pt-space-sm pl-space-xs flex items-center justify-between bg-surface-container-low/50 rounded-xl px-space-sm py-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Continuous Assess (60%):</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">Fully Certified</span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
<div className="w-2 h-full absolute left-0 top-0 bg-tertiary-container"></div>
<div>
<div className="flex items-center justify-between mb-space-sm pl-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Curriculum Velocity</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary-container">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
</div>
</div>
<div className="flex items-baseline gap-2 pl-space-xs">
<span className="font-display-lg text-display-lg text-primary font-bold">97.2%</span>
</div>
<div className="flex items-center gap-2 pl-space-xs mt-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
            27/28 On Time
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Weekly Work Reports</span>
</div>
</div>
<div className="mt-space-md pt-space-sm pl-space-xs flex items-center justify-between bg-surface-container-low/50 rounded-xl px-space-sm py-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Lesson Notes Audit:</span>
<span className="font-label-sm text-label-sm text-primary font-bold">1 Late (Rectified)</span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
<div className="w-2 h-full absolute left-0 top-0 bg-primary-container"></div>
<div>
<div className="flex items-center justify-between mb-space-sm pl-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Dismissal Velocity</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[18px]">nest_doorbell_visitor</span>
</div>
</div>
<div className="flex items-baseline gap-2 pl-space-xs">
<span className="font-display-lg text-display-lg text-primary font-bold">13.8<span className="font-headline-md text-headline-md text-on-surface-variant ml-1">s</span></span>
</div>
<div className="flex items-center gap-2 pl-space-xs mt-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
            100% 2FA Safe
          </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">0 Breaches Logged</span>
</div>
</div>
<div className="mt-space-md pt-space-sm pl-space-xs flex items-center justify-between bg-surface-container-low/50 rounded-xl px-space-sm py-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Active RFID Turnstiles:</span>
<span className="font-label-sm text-label-sm text-primary font-bold">4 Nodes Nominal</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">

<div className="lg:col-span-8 p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
<div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<h2 className="font-headline-md text-headline-md text-primary">Divisional Attendance Tracking (Weeks 1-8)</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Comparative analysis against GES 95% statutory compliance threshold line</p>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-3 rounded-sm bg-primary"></span> Primary
            </span>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-3 rounded-sm bg-secondary-container"></span> JHS
            </span>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-3 rounded-sm bg-tertiary-fixed-variant"></span> Nursery &amp; KG
            </span>
</div>
</div>

<div className="w-full h-64 relative mt-space-md">
<svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 220">

<line className="text-surface-container" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="680" y1="20" y2="20"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="680" y1="65" y2="65"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="680" y1="110" y2="110"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="680" y1="155" y2="155"></line>
<line className="text-surface-container-high" stroke="currentColor" x1="0" x2="680" y1="200" y2="200"></line>

<line stroke="#df2d23" strokeDasharray="6 3" strokeWidth="1.5" x1="0" x2="680" y1="52" y2="52"></line>
<text className="font-label-sm text-[10px] font-bold" fill="#ba0a0c" textAnchor="end" x="675" y="46">95% GES Standard</text>

<defs>
<linearGradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#011549" stopOpacity="0.18"></stop>
<stop offset="100%" stopColor="#011549" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
<path d="M 40 45 L 120 40 L 200 48 L 280 32 L 360 38 L 440 30 L 520 28 L 620 25 L 620 200 L 40 200 Z" fill="url(#primaryAreaGrad)"></path>

<path d="M 40 45 L 120 40 L 200 48 L 280 32 L 360 38 L 440 30 L 520 28 L 620 25" stroke="#011549" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="40" cy="45" fill="#011549" r="4"></circle>
<circle cx="120" cy="40" fill="#011549" r="4"></circle>
<circle cx="200" cy="48" fill="#011549" r="4"></circle>
<circle cx="280" cy="32" fill="#011549" r="4"></circle>
<circle cx="360" cy="38" fill="#011549" r="4"></circle>
<circle cx="440" cy="30" fill="#011549" r="4"></circle>
<circle cx="520" cy="28" fill="#011549" r="4"></circle>
<circle cx="620" cy="25" fill="#011549" r="4"></circle>

<path d="M 40 60 L 120 54 L 200 50 L 280 44 L 360 48 L 440 36 L 520 34 L 620 30" stroke="#df2d23" strokeLinecap="round" strokeWidth="2.5"></path>

<path d="M 40 78 L 120 68 L 200 64 L 280 58 L 360 55 L 440 46 L 520 42 L 620 38" stroke="#00531f" strokeDasharray="3 3" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-4 pt-2">
<span>Wk 1</span>
<span>Wk 2</span>
<span>Wk 3</span>
<span>Wk 4</span>
<span>Wk 5 (Mid-Term)</span>
<span>Wk 6</span>
<span>Wk 7</span>
<span>Wk 8 (Current)</span>
</div>
</div>
<div className="mt-space-md pt-space-md bg-surface-container-low rounded-xl p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">insights</span>
<span className="font-body-sm text-body-sm text-on-surface">Weekly trend exhibits steady positive delta in Early Years (+5.8% since Wk 1 arrival acclimatization).</span>
</div>
<span className="px-space-md py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase">GES Grade A</span>
</div>
</div>

<div className="lg:col-span-4 p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<div>
<h2 className="font-headline-md text-headline-md text-primary">SBA Mastery Curve</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuous Assessment 60/40 terminal weighting</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[22px]">donut_large</span>
</div>

<div className="flex flex-col items-center justify-center my-space-md">
<div className="relative w-44 h-44 flex items-center justify-center">

<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">

<circle cx="50" cy="50" fill="none" r="38" stroke="#eef4fe" strokeWidth="12"></circle>

<circle cx="50" cy="50" fill="none" r="38" stroke="#011549" strokeDasharray="81.18 238.76" strokeDashoffset="0" strokeWidth="12"></circle>

<circle cx="50" cy="50" fill="none" r="38" stroke="#8494cd" strokeDasharray="114.6 238.76" strokeDashoffset="-81.18" strokeWidth="12"></circle>

<circle cx="50" cy="50" fill="none" r="38" stroke="#df2d23" strokeDasharray="35.8 238.76" strokeDashoffset="-195.78" strokeWidth="12"></circle>

<circle cx="50" cy="50" fill="none" r="38" stroke="#ffdad5" strokeDasharray="7.16 238.76" strokeDashoffset="-231.58" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="font-display-lg text-[28px] font-bold text-primary">82.4%</span>
<span className="font-label-sm text-[10px] text-on-surface-variant tracking-wider uppercase">Mastery Met</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2 mt-space-sm">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Exceeding / Distinction</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">34.0%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-on-primary-container"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Proficient / Benchmark</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">48.4%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary-container"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Approaching Benchmark</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">14.6%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary-fixed"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Needs Academic Care</span>
</div>
<span className="font-label-sm text-label-sm text-error font-bold">3.0%</span>
</div>
</div>
</div>
<div className="mt-space-sm pt-space-xs text-center">
<span className="font-label-sm text-[11px] text-on-surface-variant">Validated against GES Standardized Assessment Framework</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">

<div className="lg:col-span-7 p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div>
<h2 className="font-headline-md text-headline-md text-primary">Dismissal Surge &amp; Gate Area Flow</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time NFC/RFID credential validation volume (14:00 - 16:30 GMT)</p>
</div>
<span className="px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
            Nominal Security Protocol
          </span>
</div>
<div className="w-full h-44 relative mt-space-md">
<svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 160">

<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="540" y1="40" y2="40"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="540" y1="80" y2="80"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="540" y1="120" y2="120"></line>
<line className="text-surface-container-high" stroke="currentColor" x1="0" x2="540" y1="155" y2="155"></line>


<rect fill="#1a2b5e" height="40" rx="3" width="16" x="35" y="115"></rect>
<rect fill="#df2d23" height="25" rx="3" width="16" x="55" y="130"></rect>

<rect fill="#1a2b5e" height="100" rx="3" width="16" x="135" y="55"></rect>
<rect fill="#df2d23" height="85" rx="3" width="16" x="155" y="70"></rect>

<rect fill="#1a2b5e" height="130" rx="3" width="16" x="235" y="25"></rect>
<rect fill="#df2d23" height="110" rx="3" width="16" x="255" y="45"></rect>

<rect fill="#1a2b5e" height="90" rx="3" width="16" x="335" y="65"></rect>
<rect fill="#df2d23" height="65" rx="3" width="16" x="355" y="90"></rect>

<rect fill="#1a2b5e" height="35" rx="3" width="16" x="435" y="120"></rect>
<rect fill="#df2d23" height="20" rx="3" width="16" x="455" y="135"></rect>
</svg>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-4 pt-1">
<span>14:00 Early</span>
<span>14:30 Pre-KG Surge</span>
<span>15:00 Main Departure</span>
<span>15:30 Extracurricular</span>
<span>16:00 Safe-Hold Close</span>
</div>
</div>
<div className="grid grid-cols-3 gap-space-sm mt-space-md pt-space-sm">
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Gate 1 (Vehicular)</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">242 Cars</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container">Avg 22s/vehicle</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Turnstiles A/B</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">589 Students</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container">Avg 6.2s/tap</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Unmatched Scans</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">0 Alerts</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Zero security hold</span>
</div>
</div>
</div>

<div className="lg:col-span-5 p-space-lg rounded-2xl bg-primary-container text-on-primary shadow-sm flex flex-col justify-between relative overflow-hidden">

<div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-primary/40 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[24px]">verified</span>
<span className="font-label-lg text-label-lg tracking-wide uppercase text-on-primary">NaSIA Statutory Index</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
            Grade: Exemplary
          </span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-[48px] font-extrabold text-on-primary">98.6%</span>
<span className="font-label-sm text-label-sm text-primary-fixed">Regulatory Audit Score</span>
</div>
<p className="font-body-sm text-body-sm text-surface-container-low mt-1">
            National Schools Inspectorate Authority compliance criteria satisfied across all 4 mandatory domains: Leadership, Academic Teaching, Learner Safety, and Campus Facilities.
          </p>
</div>
<div className="flex flex-col gap-2 mt-space-md">
<div>
<div className="flex justify-between font-label-sm text-label-sm text-surface-container-low mb-1">
<span>Teacher Professional Standards (NTC)</span>
<span>100% Certified</span>
</div>
<div className="w-full h-1.5 rounded-full bg-primary-fixed-variant/50 overflow-hidden">
<div className="h-full bg-tertiary-fixed rounded-full" style={{"width": "100%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-surface-container-low mb-1">
<span>Learner-Teacher Ratio Compliance (GES Max 1:25)</span>
<span>1:21 Average</span>
</div>
<div className="w-full h-1.5 rounded-full bg-primary-fixed-variant/50 overflow-hidden">
<div className="h-full bg-secondary-container rounded-full" style={{"width": "96%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-surface-container-low mb-1">
<span>WASH &amp; School Clinic Clinical Readiness</span>
<span>100% Up-to-Date</span>
</div>
<div className="w-full h-1.5 rounded-full bg-primary-fixed-variant/50 overflow-hidden">
<div className="h-full bg-tertiary-fixed rounded-full" style={{"width": "100%"}}></div>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-space-md pt-space-sm flex items-center justify-between bg-primary/50 rounded-xl px-space-md py-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">lock</span>
<span className="font-label-sm text-label-sm text-on-primary">Cryptographically Stamped by Board</span>
</div>
<button className="font-label-sm text-label-sm text-secondary-fixed hover:text-on-primary underline transition-colors" type="button">
          View Audit Certificate
        </button>
</div>
</div>
</section>

<section className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm mb-space-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-lg">
<div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<h2 className="font-headline-md text-headline-md text-primary">Faculty Curriculum Compliance &amp; SBA Governance</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mandatory verification of teacher timetables, weekly work plans, digital gradebooks, and safeguarding escalations</p>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<div className="flex items-center gap-2 px-space-md py-1.5 rounded-xl bg-surface-container-low text-on-surface">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">filter_alt</span>
<span className="font-label-sm text-label-sm">Filter Status: All Faculties (28)</span>
</div>
<button className="px-space-md py-1.5 rounded-xl bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
          Download Compliance Log (CSV)
        </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-space-md rounded-l-xl">Division / Class Grade</th>
<th className="py-3 px-space-md">Form Tutor &amp; Faculty Lead</th>
<th className="py-3 px-space-md">Timetable Delivery</th>
<th className="py-3 px-space-md">Weekly Work Report</th>
<th className="py-3 px-space-md">Continuous SBA Gradebook</th>
<th className="py-3 px-space-md">Welfare Escalations</th>
<th className="py-3 px-space-md rounded-r-xl text-right">Audit Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm">

<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-lg text-label-lg text-primary">JHS 3 • Emerald</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Junior High Tier • BECE Candidate</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                  KA
                </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Kofi Asare-Bediako</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Mathematics Specialist</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-sm text-label-sm font-semibold text-primary">35 / 35 Periods</span>
<div className="w-24 h-1.5 rounded-full bg-surface-container mt-1">
<div className="h-full bg-tertiary-fixed-variant rounded-full" style={{"width": "100%"}}></div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                Approved (Wk 8)
              </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">100% Up to Date</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                0 Active Cases
              </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-lg text-label-lg text-primary">Basic 5 • Sapphire</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary Division • Key Stage 2</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-label-sm text-label-sm">
                  MO
                </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Mary Osei-Tutu</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">General Classroom Lead</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-sm text-label-sm font-semibold text-primary">34 / 35 Periods</span>
<div className="w-24 h-1.5 rounded-full bg-surface-container mt-1">
<div className="h-full bg-tertiary-fixed-variant rounded-full" style={{"width": "97%"}}></div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                Approved (Wk 8)
              </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">100% Up to Date</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                1 Health Note
              </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span className="font-label-lg text-label-lg text-primary">Kindergarten 2 • Gold</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Early Years Foundation</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                  AA
                </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Abigail Antwi</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Early Literacy Specialist</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-sm text-label-sm font-semibold text-primary">35 / 35 Periods</span>
<div className="w-24 h-1.5 rounded-full bg-surface-container mt-1">
<div className="h-full bg-tertiary-fixed-variant rounded-full" style={{"width": "100%"}}></div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                Under Head Review
              </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary-container text-[18px]">pending</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">92% (3 Pending)</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                0 Active Cases
              </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-lg text-label-lg text-primary">Creche / Nursery 1</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Infant &amp; Toddler Program</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                  ED
                </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Eunice Dzobo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Child Development Lead</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="font-label-sm text-label-sm font-semibold text-primary">35 / 35 Periods</span>
<div className="w-24 h-1.5 rounded-full bg-surface-container mt-1">
<div className="h-full bg-tertiary-fixed-variant rounded-full" style={{"width": "100%"}}></div>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                Approved (Wk 8)
              </span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">100% Milestone Log</span>
</div>
</td>
<td className="py-space-md px-space-md">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                0 Active Cases
              </span>
</td>
<td className="py-space-md px-space-md text-right">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-space-md pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">done_all</span>
<span>27 of 28 classroom registers synchronized with GES EMIS National Education portal.</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high">Previous</button>
<button className="px-2 py-1 rounded bg-primary text-on-primary">1</button>
<button className="px-2 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high">2</button>
<button className="px-2 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high">Next</button>
</div>
</div>
</section>

<section className="p-space-lg rounded-2xl bg-surface-container-low shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-[32px]">military_tech</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary">Ghana National Schools Inspectorate Authority (NaSIA)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Statutory Compliance Validation Cycle 2026/2027 • Certificate ID: NaSIA-QA-ACC-9821</span>
</div>
</div>
<div className="flex items-center gap-space-md flex-wrap justify-end">
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Next Inspection Oversight:</span>
<span className="font-label-lg text-label-lg text-primary">June 14, 2026 (Annual Statutory Cycle)</span>
</div>
<button className="flex items-center gap-2 px-space-lg py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container transition-all shadow-sm font-label-lg text-label-lg" type="button">
<span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
<span>Re-verify School Seal</span>
</button>
</div>
</section>
</div>
    </>
  );
}
