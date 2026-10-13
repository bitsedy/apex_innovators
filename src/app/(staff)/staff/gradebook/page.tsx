"use client";

import React from "react";
import Link from "next/link";

// Staff Gradebook
export default function GradebookPage() {
  return (
    <>
<div className="flex flex-col w-full pb-space-xl">

<div className="w-full flex h-1.5 rounded-full overflow-hidden mb-space-md shadow-sm">
<div className="h-full w-1/3 bg-sky-400"></div>
<div className="h-full w-1/3 bg-secondary"></div>
<div className="h-full w-1/3 bg-tertiary-fixed-dim"></div>
</div>

<div className="flex flex-col gap-space-md mb-space-lg">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider">Official School Grading</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-tertiary-container text-on-tertiary-container">verified</span> Term Marks &amp; Grades
          </span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-label-sm font-label-sm">Basic 2 • Sunflower Class (28 Students)</span>
</div>
<div className="flex items-baseline gap-space-sm mt-1">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Class Gradebook &amp; Marks</h1>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Term 1 • 2026/2027 School Year</span>
</div>
</div>

<div className="flex items-center gap-space-sm flex-wrap">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[18px] text-green-700" style={{"fontVariationSettings": "'FILL' 1"}}>check_circle</span>
<span id="save-status-text">Saved 2m ago • Marks updated</span>
</div>
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors font-label-lg text-label-lg shadow-sm"  type="button">
<span className="material-symbols-outlined text-[18px]">download</span> Download Marks (Excel)
        </button>
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-red-700 transition-transform active:scale-95 font-label-lg text-label-lg shadow-sm"  type="button">
<span className="material-symbols-outlined text-[18px]">send</span> Send Marks to Headmaster or Headteacher
        </button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 bg-surface-container-lowest p-1.5 rounded-xl shadow-sm">
<button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 whitespace-nowrap shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">calculate</span>
        Mathematics
        <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">Active</span>
</button>
<button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">spellcheck</span> English Language
      </button>
<button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">science</span> Integrated Science
      </button>
<button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">computer</span> Computing / ICT
      </button>
<button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">palette</span> Creative Arts
      </button>
<button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">translate</span> Ghanaian Language (Twi)
      </button>
<button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md flex items-center gap-2 whitespace-nowrap transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">menu_book</span> R.M.E.
      </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">

<div className="carepoint-hover-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">How Marks Are Counted</span>
<span className="material-symbols-outlined text-primary text-[20px]">tune</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary">30% + 20% + 50%</span>
</div>
<div className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant mt-1">Classwork (30%) + Mid-Term (30%) + Final Exam (40%) = 100% Total</div>
</div>
<div className="mt-space-sm w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden flex">
<div className="bg-sky-500 h-full" style={{"width": "30%"}}></div>
<div className="bg-amber-500 h-full" style={{"width": "20%"}}></div>
<div className="bg-primary h-full" style={{"width": "50%"}}></div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Class Average &amp; Top Marks</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">+4.2% vs Last Term</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="font-headline-xl text-headline-xl text-primary font-bold">84.6%</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Class Average (Goal: 80%)</div>
</div>
<div className="text-right">
<div className="font-headline-sm text-headline-sm text-green-700 font-bold">68%</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Top Grade (Grade 1)</div>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Highest: <strong className="text-on-surface">96% (Kofi M.)</strong></span>
<span>Lowest: <strong className="text-on-surface">72% (Nii A.)</strong></span>
</div>
</div>

<div className="carepoint-hover-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between cursor-pointer transition-all">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Marks Completed</span>
<span className="material-symbols-outlined text-secondary text-[20px]">assignment_turned_in</span>
</div>
<div>
<div className="flex items-baseline justify-between mb-1">
<span className="font-headline-md text-headline-md text-primary">26 / 28</span>
<span className="font-label-md text-label-md text-green-700 font-bold">92.8% Done</span>
</div>
<div className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant">2 students still need marks before end of term.</div>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-space-sm">
<div className="bg-green-600 h-full rounded-full transition-all duration-500" style={{"width": "92.8%"}}></div>
</div>
</div>

<div className="carepoint-hover-card bg-primary text-on-primary p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all">
<div className="flex items-center justify-between z-10">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container">Class Level</span>
<span className="px-2 py-0.5 rounded-full bg-white/20 font-label-sm text-label-sm font-bold">BASIC 2</span>
</div>
<div className="z-10 mt-1">
<div className="font-headline-sm text-headline-sm font-bold">PRIMARY SCHOOL</div>
<div className="carepoint-hover-detail font-body-sm text-body-sm text-inverse-primary leading-tight mt-0.5">Basic 1 to 6 • Official School Standards</div>
</div>
<div className="z-10 mt-space-sm pt-space-xs flex items-center justify-between text-xs text-on-primary-container">
<span>Teacher: Mrs. B. Abbey</span>
<span className="flex items-center gap-1 font-semibold text-white"><span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span> Locked Mode</span>
</div>

<span className="material-symbols-outlined absolute -right-4 -bottom-6 text-[100px] text-white/5 select-none pointer-events-none">school</span>
</div>
</div>

<div className="carepoint-hover-card bg-amber-50 rounded-xl p-space-md mb-space-lg flex items-start gap-space-md shadow-sm cursor-pointer transition-all">
<div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900 shrink-0">
<span className="material-symbols-outlined text-[24px]">gavel</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between gap-2 flex-wrap">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-[16px] text-amber-950 font-bold">Rules for Changing Marks</span>
<span className="px-2 py-0.5 rounded bg-amber-200 text-amber-950 text-label-sm font-label-sm font-semibold">Locked After Saving</span>
</div>
<span className="carepoint-hover-hint">Rules</span>
</div>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-amber-900 mt-1">
        Once marks are saved, any changes must be approved by <strong>Headmaster or Headteacher Dr. Elizabeth Appiah</strong> before parents can see them on their portal or report cards.
      </p>
</div>
</div>
<button className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-white text-amber-900 font-label-sm text-label-sm hover:bg-amber-100 transition-colors shadow-sm self-center whitespace-nowrap" type="button">
      View Past Changes
    </button>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col mb-space-lg">

<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<div className="relative w-full sm:w-72">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
<input className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none shadow-sm" id="student-search"  placeholder="Search student by name or ID..." type="text"/>
</div>
<select className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm focus:outline-none shadow-sm">
<option>All Statuses</option>
<option>Approved</option>
<option>Waiting for Headmaster or Headteacher</option>
<option>Draft</option>
</select>
</div>
<div className="flex items-center gap-space-sm self-end sm:self-auto text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Approved
        </span>
<span className="inline-flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Waiting for Headmaster or Headteacher
        </span>
<span className="inline-flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span> Draft
        </span>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm" id="grade-table">
<thead className="bg-surface-container font-label-sm text-label-sm text-on-surface-variant select-none">
<tr>
<th className="py-3 px-4 uppercase tracking-wider sticky left-0 bg-surface-container z-20 min-w-[200px]">Student Name &amp; ID</th>
<th className="py-3 px-3 uppercase tracking-wider text-center bg-blue-50/50 min-w-[100px]">
              Classwork
              <div className="text-[10px] text-outline normal-case font-normal">Up to 15</div>
</th>
<th className="py-3 px-3 uppercase tracking-wider text-center bg-blue-50/50 min-w-[100px]">
              Homework
              <div className="text-[10px] text-outline normal-case font-normal">Up to 15</div>
</th>
<th className="py-3 px-3 uppercase tracking-wider text-center bg-blue-100/60 text-primary font-bold min-w-[110px]">
              Total
              <div className="text-[10px] text-primary/70 normal-case font-semibold">[30%]</div>
</th>
<th className="py-3 px-3 uppercase tracking-wider text-center bg-amber-50/60 min-w-[110px]">
              Mid-Term
              <div className="text-[10px] text-outline normal-case font-normal">Up to 20</div>
</th>
<th className="py-3 px-3 uppercase tracking-wider text-center bg-purple-50/60 min-w-[110px]">
              Final Exam
              <div className="text-[10px] text-outline normal-case font-normal">Up to 50</div>
</th>
<th className="py-3 px-3 uppercase tracking-wider text-center bg-surface-container-high text-primary font-bold min-w-[100px]">
              Total Mark
              <div className="text-[10px] text-primary/70 normal-case font-semibold">[100%]</div>
</th>
<th className="py-3 px-3 uppercase tracking-wider text-center min-w-[90px]">Grade</th>
<th className="py-3 px-4 uppercase tracking-wider min-w-[260px]">Teacher's Note</th>
<th className="py-3 px-3 uppercase tracking-wider text-center min-w-[110px]">Approval Status</th>
<th className="py-3 px-3 text-center min-w-[60px]">History</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-highest/60 bg-surface-container-lowest" id="grade-rows">

<tr className="hover:bg-surface-container-low transition-colors group" data-student="Kofi Mensah #24-089">
<td className="py-3 px-4 sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low z-10">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shadow-sm">KM</div>
<div>
<div className="font-label-lg text-label-lg text-primary leading-tight">Kofi Mensah</div>
<div className="font-label-sm text-[11px] text-on-surface-variant font-mono">ID: #24-089</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="14"/>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="14"/>
</td>
<td className="py-2 px-2 text-center bg-blue-100/40 font-headline-sm text-sm text-primary font-bold subtotal-cell">
              28 / 30
            </td>
<td className="py-2 px-2 text-center bg-amber-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="20" min="0" type="number" value="19"/>
</td>
<td className="py-2 px-2 text-center bg-purple-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="50" min="0" type="number" value="47"/>
</td>
<td className="py-2 px-2 text-center bg-surface-container-high font-headline-md text-base text-primary font-bold cumulative-cell">
              94%
            </td>
<td className="py-2 px-2 text-center">
<span className="inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">Grade 1</span>
</td>
<td className="py-2 px-4">
<input className="w-full py-1 px-2 rounded bg-transparent text-on-surface font-body-sm text-body-sm hover:bg-surface-container focus:bg-surface-container-lowest focus:shadow-sm focus:outline-none transition-all" type="text" value="Demonstrates superb arithmetic and problem-solving skills."/>
</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-[11px] font-bold">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span> Approved
              </span>
</td>
<td className="py-2 px-2 text-center">
<button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View past changes" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group" data-student="Ama Boateng #24-012">
<td className="py-3 px-4 sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low z-10">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-sm">AB</div>
<div>
<div className="font-label-lg text-label-lg text-primary leading-tight">Ama Boateng</div>
<div className="font-label-sm text-[11px] text-on-surface-variant font-mono">ID: #24-012</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="13"/>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="15"/>
</td>
<td className="py-2 px-2 text-center bg-blue-100/40 font-headline-sm text-sm text-primary font-bold subtotal-cell">
              28 / 30
            </td>
<td className="py-2 px-2 text-center bg-amber-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="20" min="0" type="number" value="18"/>
</td>
<td className="py-2 px-2 text-center bg-purple-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="50" min="0" type="number" value="45"/>
</td>
<td className="py-2 px-2 text-center bg-surface-container-high font-headline-md text-base text-primary font-bold cumulative-cell">
              91%
            </td>
<td className="py-2 px-2 text-center">
<span className="inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">Grade 1</span>
</td>
<td className="py-2 px-4">
<input className="w-full py-1 px-2 rounded bg-transparent text-on-surface font-body-sm text-body-sm hover:bg-surface-container focus:bg-surface-container-lowest focus:shadow-sm focus:outline-none transition-all" type="text" value="Consistent and attentive; excels in mental math."/>
</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-[11px] font-bold">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span> Approved
              </span>
</td>
<td className="py-2 px-2 text-center">
<button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View past changes" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group" data-student="Kwabena Osei #24-055">
<td className="py-3 px-4 sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low z-10">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-bold text-xs shadow-sm">KO</div>
<div>
<div className="font-label-lg text-label-lg text-primary leading-tight">Kwabena Osei</div>
<div className="font-label-sm text-[11px] text-on-surface-variant font-mono">ID: #24-055</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="11"/>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="12"/>
</td>
<td className="py-2 px-2 text-center bg-blue-100/40 font-headline-sm text-sm text-primary font-bold subtotal-cell">
              23 / 30
            </td>
<td className="py-2 px-2 text-center bg-amber-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="20" min="0" type="number" value="15"/>
</td>
<td className="py-2 px-2 text-center bg-purple-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="50" min="0" type="number" value="38"/>
</td>
<td className="py-2 px-2 text-center bg-surface-container-high font-headline-md text-base text-primary font-bold cumulative-cell">
              76%
            </td>
<td className="py-2 px-2 text-center">
<span className="inline-flex px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-label-sm text-label-sm font-bold">Grade 2</span>
</td>
<td className="py-2 px-4">
<input className="w-full py-1 px-2 rounded bg-transparent text-on-surface font-body-sm text-body-sm hover:bg-surface-container focus:bg-surface-container-lowest focus:shadow-sm focus:outline-none transition-all" type="text" value="Needs extra drill on fraction division."/>
</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-label-sm text-[11px] font-bold">
<span className="material-symbols-outlined text-[13px]">edit_note</span> Draft
              </span>
</td>
<td className="py-2 px-2 text-center">
<button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View past changes" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group" data-student="Akosua Mensah-Bonsu #24-031">
<td className="py-3 px-4 sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low z-10">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs shadow-sm">AM</div>
<div>
<div className="font-label-lg text-label-lg text-primary leading-tight">Akosua Mensah-Bonsu</div>
<div className="font-label-sm text-[11px] text-on-surface-variant font-mono">ID: #24-031</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="14"/>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="13"/>
</td>
<td className="py-2 px-2 text-center bg-blue-100/40 font-headline-sm text-sm text-primary font-bold subtotal-cell">
              27 / 30
            </td>
<td className="py-2 px-2 text-center bg-amber-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="20" min="0" type="number" value="17"/>
</td>
<td className="py-2 px-2 text-center bg-purple-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="50" min="0" type="number" value="44"/>
</td>
<td className="py-2 px-2 text-center bg-surface-container-high font-headline-md text-base text-primary font-bold cumulative-cell">
              88%
            </td>
<td className="py-2 px-2 text-center">
<span className="inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">Grade 1</span>
</td>
<td className="py-2 px-4">
<input className="w-full py-1 px-2 rounded bg-transparent text-on-surface font-body-sm text-body-sm hover:bg-surface-container focus:bg-surface-container-lowest focus:shadow-sm focus:outline-none transition-all" type="text" value="Strong logical reasoning."/>
</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-[11px] font-bold">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span> Approved
              </span>
</td>
<td className="py-2 px-2 text-center">
<button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View past changes" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group" data-student="Emmanuel Addo #24-077">
<td className="py-3 px-4 sticky left-0 bg-surface-container-lowest group-hover:bg-surface-container-low z-10">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs shadow-sm">EA</div>
<div>
<div className="font-label-lg text-label-lg text-primary leading-tight">Emmanuel Addo</div>
<div className="font-label-sm text-[11px] text-on-surface-variant font-mono">ID: #24-077</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="12"/>
</td>
<td className="py-2 px-2 text-center bg-blue-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="15" min="0" type="number" value="11"/>
</td>
<td className="py-2 px-2 text-center bg-blue-100/40 font-headline-sm text-sm text-primary font-bold subtotal-cell">
              23 / 30
            </td>
<td className="py-2 px-2 text-center bg-amber-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="20" min="0" type="number" value="16"/>
</td>
<td className="py-2 px-2 text-center bg-purple-50/30">
<input className="score-input w-16 py-1 px-2 text-center rounded bg-surface-container-lowest text-on-surface font-semibold focus:bg-white focus:shadow-md transition-all" max="50" min="0" type="number" value="40"/>
</td>
<td className="py-2 px-2 text-center bg-surface-container-high font-headline-md text-base text-primary font-bold cumulative-cell">
              79%
            </td>
<td className="py-2 px-2 text-center">
<span className="inline-flex px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-label-sm text-label-sm font-bold">Grade 2</span>
</td>
<td className="py-2 px-4">
<input className="w-full py-1 px-2 rounded bg-transparent text-on-surface font-body-sm text-body-sm hover:bg-surface-container focus:bg-surface-container-lowest focus:shadow-sm focus:outline-none transition-all" type="text" value="Shows good improvement."/>
</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-label-sm text-[11px] font-bold">
<span className="material-symbols-outlined text-[13px]">pending</span> Waiting for Headmaster or Headteacher
              </span>
</td>
<td className="py-2 px-2 text-center">
<button className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="View past changes" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-md py-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-md">
<span>Rows displayed: <strong>5 of 28 students</strong></span>
<span>Keyboard Shortcut: <strong>Tab / Enter</strong> to step between assessment cells</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-600"></span> Live Data Engine active</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<h2 className="font-headline-sm text-headline-sm text-primary">Grade Summary</h2>
<span className="font-label-sm text-label-sm text-outline">Sunflower Class</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">How students performed this term.</p>
</div>
<div className="space-y-space-sm">
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="font-semibold text-on-surface">Grade 1 (80% - 100% Top Marks)</span>
<span className="text-primary font-bold">19 Students (68%)</span>
</div>
<div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
<div className="bg-emerald-600 h-full rounded-full" style={{"width": "68%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="font-semibold text-on-surface">Grade 2 (70% - 79% Good)</span>
<span className="text-primary font-bold">7 Students (25%)</span>
</div>
<div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
<div className="bg-blue-600 h-full rounded-full" style={{"width": "25%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="font-semibold text-on-surface">Grade 3 (60% - 69% Pass)</span>
<span className="text-primary font-bold">2 Students (7%)</span>
</div>
<div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
<div className="bg-amber-500 h-full rounded-full" style={{"width": "7%"}}></div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-outline font-label-sm text-label-sm">
<span>Curriculum Goal: Achieved</span>
<span className="text-green-700 font-bold">0 Students Below 60%</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<h2 className="font-headline-sm text-headline-sm text-primary">Classroom Photo</h2>
<span className="material-symbols-outlined text-outline">photo_camera</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Sunflower Class working with counting tools during math class.</p>
</div>
<div className="relative rounded-lg overflow-hidden h-40 shadow-inner group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="West African primary school classroom in Ghana with young energetic boys and girls in school uniforms actively counting colorful math counters and abacuses on wooden desks, warm ambient daylight streaming through windows, modern clean educational setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPR0r3yqoZPxr7eC5JlaxwHLKf-x0Xbl_pYWf9Ws4ke9rIRCrqXvnp2Jja_zePSfm1LV8QMLLUBIJyH39xKCsk5a3PI-NoX-0WuKx9WSlXi4O0_rehoK7im9OQT0RAOGQB6djW6qpkq-X93cmNhHcoDRFt_6jCbRGZeUAwmWODlPL9p8JFuX_wm0Mt_HVS2D1MykHS4zKQOl4T4sh79E4bP42xVPSgZK0_7v8QquY2UdfBkXo2OL6FOQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-space-sm">
<span className="font-label-sm text-label-sm text-on-primary">Math Lesson: Counting Tools</span>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Teacher: Mrs. B. Abbey</span>
<span className="text-primary font-semibold">Saved to Class File</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-xs">
<h2 className="font-headline-sm text-headline-sm text-primary">Send Marks to Headmaster or Headteacher</h2>
<span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-label-sm text-label-sm font-bold">STEP 1 OF 2</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sending these marks will notify Headmaster or Headteacher Dr. Elizabeth Appiah to review and approve them.</p>
</div>
<div className="p-space-sm bg-surface-container rounded-lg flex flex-col gap-1 my-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-green-700 text-[18px]">verified_user</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Teacher Check: Done</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant text-xs">Mrs. Beatrice Abbey • Ready to send</div>
</div>
<div className="flex flex-col gap-2">
<button className="w-full py-2.5 px-4 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm"  type="button">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
          Send Marks to Headmaster or Headteacher
        </button>
<span className="font-label-sm text-label-sm text-outline text-center">Once sent, marks will be locked until approved</span>
</div>
</div>
</div>

<div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="submit-modal">
<div className="bg-surface-container-lowest rounded-xl max-w-md w-full p-space-lg shadow-xl flex flex-col gap-space-md animate-in fade-in zoom-in-95 duration-150">
<div className="flex items-start justify-between">
<div className="w-10 h-10 rounded-lg bg-sky-100 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<button className="text-outline hover:text-on-surface p-1"  type="button">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Send Marks to Headmaster or Headteacher?</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          You are sending marks for <strong>Basic 2 Sunflower Class (28 Students)</strong> to Headmaster or Headteacher Dr. Elizabeth Appiah to review and approve.
        </p>
</div>
<div className="p-space-sm rounded-lg bg-amber-50 text-amber-900 font-label-sm text-label-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-amber-700 shrink-0">info</span>
<span>You cannot change marks once sent unless the Headmaster or Headteacher asks for changes.</span>
</div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors"  type="button">
          Cancel
        </button>
<button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-red-700 transition-colors shadow-sm"  type="button">
          Yes, Send Marks
        </button>
</div>
</div>
</div>
</div>

    </>
  );
}
