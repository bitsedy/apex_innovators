"use client";

import React from "react";
import Link from "next/link";

// Parent Academics
export default function AcademicsPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-lg space-y-space-lg">

<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<span>Academic Records</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span>Basic School Division</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-primary font-bold">Gradebook &amp; Terminal Assessment</span>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-full text-on-surface font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
<span>Authenticated Parent Portal Session • Ref: GES-ACR-2026-0982</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg relative overflow-hidden">
<div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex flex-col gap-space-xs z-10">
<div className="flex flex-wrap items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Academic Performance &amp; Gradebook</h1>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">Basic 2 • Sunflower</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Comprehensive cognitive, moral, and psychomotor continuous assessment evaluation for <strong className="text-on-surface font-bold">Kofi Mensah</strong> (ID: CP-2021-0414).
        </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm z-10">
<div className="relative">
<label className="sr-only" htmlFor="term-select">Select Academic Term</label>
<select className="appearance-none bg-surface-container-low text-primary font-label-sm text-label-sm font-bold px-space-md py-2.5 pr-8 rounded-lg outline-none cursor-pointer hover:bg-surface-container transition-colors" id="term-select">
<option >Term 1 • 2026/2027 Academic Session</option>
<option>Term 3 • 2026/2026 Academic Session</option>
<option>Term 2 • 2026/2026 Academic Session</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-primary text-base">unfold_more</span>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-2 bg-surface-container rounded-lg font-label-sm text-label-sm text-on-surface font-semibold">
<span className="material-symbols-outlined text-secondary-container text-base">leaderboard</span>
<span>Rank: <span className="font-bold text-primary">3rd</span> of 28 Students</span>
</div>
<button className="flex items-center gap-space-xs bg-secondary-container text-on-secondary px-space-md py-2.5 rounded-lg font-label-sm text-label-sm font-bold hover:bg-secondary transition-all shadow-sm active:scale-95" type="button">
<span className="material-symbols-outlined text-base">download_for_offline</span>
<span>Download Term 1 Official Report Card (PDF)</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">Overall Average</span>
<div className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-base">analytics</span>
</div>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-primary tracking-tight">89.4%</span>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-low text-on-tertiary-container font-bold">Grade 1 (A)</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Class Target: ≥75%</span>
<span className="text-on-tertiary-container font-bold flex items-center text-xs">
<span className="material-symbols-outlined text-sm">trending_up</span>+1.4% vs T3
          </span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">Class Standing</span>
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-base">military_tech</span>
</div>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-primary tracking-tight">3<span className="text-2xl font-headline-md text-on-surface-variant">rd</span></span>
<span className="font-body-md text-body-md text-on-surface-variant">/ 28 students</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Top 10th Percentile</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-label-sm text-xs font-bold">Distinction Tier</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">Curriculum Load</span>
<div className="w-8 h-8 rounded-full bg-surface-container-low text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-base">menu_book</span>
</div>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-primary tracking-tight">7</span>
<span className="font-body-md text-body-md text-on-surface-variant">Standard GES Subjects</span>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Completion: 100%</span>
<span className="text-on-tertiary-container font-semibold text-xs flex items-center gap-0.5">
<span className="material-symbols-outlined text-xs">check_circle</span>All verified
          </span>
</div>
</div>

<div className="bg-primary-container text-on-primary p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed font-bold">Moral Assessment</span>
<span className="material-symbols-outlined text-secondary-fixed text-xl">workspace_premium</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm block font-bold leading-snug">Exemplary Conduct</span>
<p className="font-label-sm text-label-sm text-surface-variant mt-1">Mind • Heart • Hands Awardee</p>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-primary-fixed">
<span>Honor Roll Citation</span>
<span className="font-bold underline decoration-secondary cursor-pointer">View Citation</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-low">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">fact_check</span>
<h2 className="font-headline-sm text-headline-sm font-bold text-primary">Terminal Subject Gradebook</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuous Assessment (50%) + Terminal Examination (50%) = 100% GES Scoring Scale</p>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Grading Scale:</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-xs font-bold">Grade 1: 80-100%</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-xs font-bold">Grade 2: 70-79%</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface-variant font-label-sm text-xs font-bold">Grade 3: 60-69%</span>
</div>
</div>

<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3.5 px-space-md font-bold" scope="col">Subject Area</th>
<th className="py-3.5 px-space-sm text-center" scope="col">Class Assess (30%)</th>
<th className="py-3.5 px-space-sm text-center" scope="col">Mid-Term (20%)</th>
<th className="py-3.5 px-space-sm text-center" scope="col">Exam Score (50%)</th>
<th className="py-3.5 px-space-sm text-center" scope="col">Final (100%)</th>
<th className="py-3.5 px-space-sm text-center" scope="col">Grade</th>
<th className="py-3.5 px-space-sm text-center" scope="col">Class Avg</th>
<th className="py-3.5 px-space-md min-w-[280px]" scope="col">Subject Teacher Commentary</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10 font-body-sm text-body-sm">

<tr className="hover:bg-surface transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary font-bold text-xs">
<span className="material-symbols-outlined text-sm">calculate</span>
</div>
<span className="font-bold text-on-surface font-label-lg text-label-lg">Mathematics</span>
</div>
</td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">28<span className="text-xs text-on-surface-variant font-normal">/30</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">19<span className="text-xs text-on-surface-variant font-normal">/20</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">47<span className="text-xs text-on-surface-variant font-normal">/50</span></td>
<td className="py-space-md px-space-sm text-center font-headline-sm text-headline-sm font-bold text-primary">94%</td>
<td className="py-space-md px-space-sm text-center">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-low text-on-tertiary-container font-label-sm text-label-sm font-bold">Grade 1</span>
</td>
<td className="py-space-md px-space-sm text-center text-on-surface-variant font-medium">78%</td>
<td className="py-space-md px-space-md">
<p className="text-on-surface text-xs leading-relaxed italic">"Demonstrates superb arithmetic and reasoning capabilities."</p>
<span className="font-label-sm text-[11px] text-on-surface-variant not-italic font-bold block mt-0.5">— Mr. Kwesi Osei</span>
</td>
</tr>

<tr className="hover:bg-surface transition-colors bg-surface-container-low/20">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary font-bold text-xs">
<span className="material-symbols-outlined text-sm">menu_book</span>
</div>
<span className="font-bold text-on-surface font-label-lg text-label-lg">English Language</span>
</div>
</td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">26<span className="text-xs text-on-surface-variant font-normal">/30</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">17<span className="text-xs text-on-surface-variant font-normal">/20</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">45<span className="text-xs text-on-surface-variant font-normal">/50</span></td>
<td className="py-space-md px-space-sm text-center font-headline-sm text-headline-sm font-bold text-primary">88%</td>
<td className="py-space-md px-space-sm text-center">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-low text-on-tertiary-container font-label-sm text-label-sm font-bold">Grade 1</span>
</td>
<td className="py-space-md px-space-sm text-center text-on-surface-variant font-medium">75%</td>
<td className="py-space-md px-space-md">
<p className="text-on-surface text-xs leading-relaxed italic">"Eloquent oral reader; working well on creative writing composition."</p>
<span className="font-label-sm text-[11px] text-on-surface-variant not-italic font-bold block mt-0.5">— Mrs. Beatrice Abbey</span>
</td>
</tr>

<tr className="hover:bg-surface transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary font-bold text-xs">
<span className="material-symbols-outlined text-sm">biotech</span>
</div>
<span className="font-bold text-on-surface font-label-lg text-label-lg">Integrated Science</span>
</div>
</td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">27<span className="text-xs text-on-surface-variant font-normal">/30</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">18<span className="text-xs text-on-surface-variant font-normal">/20</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">47<span className="text-xs text-on-surface-variant font-normal">/50</span></td>
<td className="py-space-md px-space-sm text-center font-headline-sm text-headline-sm font-bold text-primary">92%</td>
<td className="py-space-md px-space-sm text-center">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-low text-on-tertiary-container font-label-sm text-label-sm font-bold">Grade 1</span>
</td>
<td className="py-space-md px-space-sm text-center text-on-surface-variant font-medium">76%</td>
<td className="py-space-md px-space-md">
<p className="text-on-surface text-xs leading-relaxed italic">"Inquisitive mind during nature walks and lab experiments."</p>
<span className="font-label-sm text-[11px] text-on-surface-variant not-italic font-bold block mt-0.5">— Mr. Daniel Addo</span>
</td>
</tr>

<tr className="hover:bg-surface transition-colors bg-surface-container-low/20">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary font-bold text-xs">
<span className="material-symbols-outlined text-sm">devices</span>
</div>
<span className="font-bold text-on-surface font-label-lg text-label-lg">Computing / ICT</span>
</div>
</td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">29<span className="text-xs text-on-surface-variant font-normal">/30</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">19<span className="text-xs text-on-surface-variant font-normal">/20</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">46<span className="text-xs text-on-surface-variant font-normal">/50</span></td>
<td className="py-space-md px-space-sm text-center font-headline-sm text-headline-sm font-bold text-primary">94%</td>
<td className="py-space-md px-space-sm text-center">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-low text-on-tertiary-container font-label-sm text-label-sm font-bold">Grade 1</span>
</td>
<td className="py-space-md px-space-sm text-center text-on-surface-variant font-medium">81%</td>
<td className="py-space-md px-space-md">
<p className="text-on-surface text-xs leading-relaxed italic">"Rapid keyboard mastery and basic block coding understanding."</p>
<span className="font-label-sm text-[11px] text-on-surface-variant not-italic font-bold block mt-0.5">— Miss Sarah Mensah</span>
</td>
</tr>

<tr className="hover:bg-surface transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary font-bold text-xs">
<span className="material-symbols-outlined text-sm">palette</span>
</div>
<span className="font-bold text-on-surface font-label-lg text-label-lg">Creative Arts &amp; Design</span>
</div>
</td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">25<span className="text-xs text-on-surface-variant font-normal">/30</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">16<span className="text-xs text-on-surface-variant font-normal">/20</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">44<span className="text-xs text-on-surface-variant font-normal">/50</span></td>
<td className="py-space-md px-space-sm text-center font-headline-sm text-headline-sm font-bold text-primary">85%</td>
<td className="py-space-md px-space-sm text-center">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">Grade 2</span>
</td>
<td className="py-space-md px-space-sm text-center text-on-surface-variant font-medium">80%</td>
<td className="py-space-md px-space-md">
<p className="text-on-surface text-xs leading-relaxed italic">"Expressive craft work and neat sketching."</p>
<span className="font-label-sm text-[11px] text-on-surface-variant not-italic font-bold block mt-0.5">— Mrs. Lydia Boateng</span>
</td>
</tr>

<tr className="hover:bg-surface transition-colors bg-surface-container-low/20">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary font-bold text-xs">
<span className="material-symbols-outlined text-sm">translate</span>
</div>
<span className="font-bold text-on-surface font-label-lg text-label-lg">Ghanaian Language (Twi)</span>
</div>
</td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">24<span className="text-xs text-on-surface-variant font-normal">/30</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">17<span className="text-xs text-on-surface-variant font-normal">/20</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">42<span className="text-xs text-on-surface-variant font-normal">/50</span></td>
<td className="py-space-md px-space-sm text-center font-headline-sm text-headline-sm font-bold text-primary">83%</td>
<td className="py-space-md px-space-sm text-center">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-bold">Grade 2</span>
</td>
<td className="py-space-md px-space-sm text-center text-on-surface-variant font-medium">77%</td>
<td className="py-space-md px-space-md">
<p className="text-on-surface text-xs leading-relaxed italic">"Good pronunciation and cultural storytelling interest."</p>
<span className="font-label-sm text-[11px] text-on-surface-variant not-italic font-bold block mt-0.5">— Nana Yaw Kyeremeh</span>
</td>
</tr>

<tr className="hover:bg-surface transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary font-bold text-xs">
<span className="material-symbols-outlined text-sm">volunteer_activism</span>
</div>
<span className="font-bold text-on-surface font-label-lg text-label-lg">Religious &amp; Moral Education</span>
</div>
</td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">29<span className="text-xs text-on-surface-variant font-normal">/30</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">19<span className="text-xs text-on-surface-variant font-normal">/20</span></td>
<td className="py-space-md px-space-sm text-center font-bold text-on-surface">48<span className="text-xs text-on-surface-variant font-normal">/50</span></td>
<td className="py-space-md px-space-sm text-center font-headline-sm text-headline-sm font-bold text-primary">96%</td>
<td className="py-space-md px-space-sm text-center">
<span className="px-space-xs py-0.5 rounded-full bg-surface-container-low text-on-tertiary-container font-label-sm text-label-sm font-bold">Grade 1</span>
</td>
<td className="py-space-md px-space-sm text-center text-on-surface-variant font-medium">82%</td>
<td className="py-space-md px-space-md">
<p className="text-on-surface text-xs leading-relaxed italic">"Displays kindness, respect, and deep moral conviction."</p>
<span className="font-label-sm text-[11px] text-on-surface-variant not-italic font-bold block mt-0.5">— Pastor Samuel Mensah</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Terminal Progress Trend</h3>
<span className="font-label-sm text-label-sm uppercase font-bold text-on-tertiary-container px-space-xs py-0.5 bg-surface-container-low rounded">
              Consistent Upward Trajectory
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
            Sequential term cumulative grade averages tracking Kofi's development from Basic 1 through Basic 2.
          </p>

<div className="w-full bg-surface p-space-md rounded-lg">
<div className="h-44 w-full relative flex items-end justify-between px-space-md pb-4 pt-6">

<div className="flex flex-col items-center gap-space-xs z-10 w-1/5 group">
<span className="font-label-sm text-xs font-bold text-primary transition-transform group-hover:-translate-y-1">84.1%</span>
<div className="w-full max-w-[40px] bg-primary/20 rounded-t-lg transition-all group-hover:bg-primary/30" style={{"height": "105px"}}></div>
<div className="text-center">
<span className="font-label-sm text-[11px] font-bold text-on-surface block">Term 1</span>
<span className="font-label-sm text-[10px] text-on-surface-variant block">2026/26</span>
</div>
</div>

<div className="flex flex-col items-center gap-space-xs z-10 w-1/5 group">
<span className="font-label-sm text-xs font-bold text-primary transition-transform group-hover:-translate-y-1">86.2%</span>
<div className="w-full max-w-[40px] bg-primary/40 rounded-t-lg transition-all group-hover:bg-primary/50" style={{"height": "118px"}}></div>
<div className="text-center">
<span className="font-label-sm text-[11px] font-bold text-on-surface block">Term 2</span>
<span className="font-label-sm text-[10px] text-on-surface-variant block">2026/26</span>
</div>
</div>

<div className="flex flex-col items-center gap-space-xs z-10 w-1/5 group">
<span className="font-label-sm text-xs font-bold text-primary transition-transform group-hover:-translate-y-1">88.0%</span>
<div className="w-full max-w-[40px] bg-primary/70 rounded-t-lg transition-all group-hover:bg-primary/80" style={{"height": "130px"}}></div>
<div className="text-center">
<span className="font-label-sm text-[11px] font-bold text-on-surface block">Term 3</span>
<span className="font-label-sm text-[10px] text-on-surface-variant block">2026/26</span>
</div>
</div>

<div className="flex flex-col items-center gap-space-xs z-10 w-1/5 group">
<span className="font-label-sm text-xs font-bold text-secondary-container transition-transform group-hover:-translate-y-1">89.4%</span>
<div className="w-full max-w-[40px] bg-secondary-container rounded-t-lg shadow-sm" style={{"height": "142px"}}></div>
<div className="text-center">
<span className="font-label-sm text-[11px] font-bold text-secondary-container block">Term 1</span>
<span className="font-label-sm text-[10px] text-on-surface font-bold block">Current</span>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 160">
<path d="M 50 110 Q 150 90, 250 70 T 350 45" fill="none" opacity="0.6" stroke="#ba0a0c" strokeDasharray="4 4" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-xs text-on-surface-variant font-label-sm">
<span>Benchmarked against Ghanaian National Standards (NaSIA / GES)</span>
<span className="text-primary font-bold">Standard Deviation: ±1.1</span>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="material-symbols-outlined text-secondary text-xl">psychology</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Tri-Pillar Evaluation</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Well-rounded child assessment rooted in Carepoint's tri-fold founding pedagogical model.
          </p>
<div className="space-y-space-md">

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-base">lightbulb</span>
<span className="font-label-lg text-label-lg font-bold text-primary">Mind (Intellectual)</span>
</div>
<span className="font-label-lg text-label-lg font-bold text-primary">92 / 100</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-primary h-2 rounded-full" style={{"width": "92%"}}></div>
</div>
<p className="text-[12px] font-body-sm text-on-surface-variant">Cognitive reasoning, algorithmic comprehension, inquiry &amp; memory retention.</p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-base">favorite</span>
<span className="font-label-lg text-label-lg font-bold text-secondary-container">Heart (Empathy &amp; Moral)</span>
</div>
<span className="font-label-lg text-label-lg font-bold text-secondary-container">95 / 100</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-secondary-container h-2 rounded-full" style={{"width": "95%"}}></div>
</div>
<p className="text-[12px] font-body-sm text-on-surface-variant">Spiritual discipline, respect for peers, emotional balance &amp; team solidarity.</p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary-container text-base">front_hand</span>
<span className="font-label-lg text-label-lg font-bold text-primary">Hands (Practical &amp; Physical)</span>
</div>
<span className="font-label-lg text-label-lg font-bold text-primary">88 / 100</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-on-tertiary-container h-2 rounded-full" style={{"width": "88%"}}></div>
</div>
<p className="text-[12px] font-body-sm text-on-surface-variant">Craft execution, gross &amp; fine motor dexterity, physical education readiness.</p>
</div>
</div>
</div>
<div className="mt-space-md p-space-xs bg-surface-container rounded font-label-sm text-[11px] text-center text-on-surface-variant font-bold">
          Tri-Pillar Status: Exemplary Tier (Eligible for Annual Governors' Cup)
        </div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">

<div className="lg:col-span-8 space-y-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">approval_delegation</span>
<span className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold">Head of Basic School Remark</span>
</div>
<blockquote className="font-body-lg text-body-lg text-on-surface italic pl-space-sm border-l-4 border-secondary-container">
            “A dedicated, well-mannered student who consistently lives up to the Carepoint ethos. Kofi exhibits exceptional inquisitive intellect and warmth among his classmates. Promoted with merit.”
          </blockquote>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-2">
            Class Attendance: <strong className="text-on-surface font-semibold">58 of 60 School Days (96.7%)</strong> • Next Term Resumption Date: <strong className="text-on-surface font-semibold">January 13, 2026</strong>.
          </p>
</div>

<div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
<div className="bg-surface-container-low p-space-md rounded-xl w-full max-w-sm flex flex-col items-center text-center">

<div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center text-surface-container-lowest mb-space-xs shadow-sm">
<span className="material-symbols-outlined text-3xl">verified</span>
<div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-xs">lock</span>
</div>
</div>

<div className="py-1">
<span className="font-serif italic text-2xl text-primary font-bold tracking-widest select-none opacity-85">E. Appiah</span>
</div>
<div className="mt-1">
<h4 className="font-label-lg text-label-lg font-bold text-primary">Dr. Mrs. Elizabeth Appiah, PhD</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Headmaster or Headteacher • Carepoint Basic School</span>
<span className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-1 inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">security</span> Validated GES Digital Institutional Signature
              </span>
</div>
</div>
</div>
</div>
</div>

<div className="p-space-md bg-surface-container rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface font-body-sm text-body-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">contact_support</span>
<span>Have questions regarding these marks? Schedule an academic consultation with the Class Teacher.</span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold hover:bg-surface-container-high transition-colors shadow-sm text-center" type="button">
          Book Academic Conference
        </button>
<button className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold hover:bg-primary-container transition-colors shadow-sm text-center" type="button">
          Acknowledge &amp; Sign
        </button>
</div>
</div>
</div>
</div>
    </>
  );
}
