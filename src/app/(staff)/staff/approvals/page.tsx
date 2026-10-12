"use client";

import React from "react";
import Link from "next/link";

// Staff Approvals
export default function ApprovalsPage() {
  return (
    <>
<div className="flex flex-col w-full pb-space-xl">

<div className="w-full flex h-1.5 rounded-full overflow-hidden shadow-xs mb-space-md">
<div className="w-1/3 bg-sky-400"></div>
<div className="w-1/3 bg-secondary"></div>
<div className="w-1/3 bg-tertiary-fixed-dim"></div>
</div>

<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md mb-space-lg">
<div className="carepoint-hover-card flex flex-col gap-1 max-w-3xl cursor-pointer">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Official School Approvals</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Staff Desk • 2026/2027</span>
</div>
<div className="flex items-center gap-3 flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Staff Approvals &amp; Requests</h1>
<span className="carepoint-hover-hint">Hover to read note</span>
</div>
<div className="carepoint-hover-detail">
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
        All grade changes, student health notes, and lesson plans must be approved by Headmistress Dr. Elizabeth Appiah before parents can see them.
      </p>
</div>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all duration-200 font-label-lg text-label-lg shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
        Check Status
      </button>
<button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-all duration-200 font-label-lg text-label-lg shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
        New Request
      </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">

<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Total Requests</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">inventory_2</span>
</div>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<span className="font-display-lg text-headline-xl text-primary font-bold">18</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Term 1 (Sunflower)</span>
</div>
<div className="mt-2 w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "100%"}}></div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-amber-800 font-bold">Waiting for Approval</span>
<div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">
<span className="material-symbols-outlined text-[20px]">hourglass_top</span>
</div>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<span className="font-display-lg text-headline-xl text-amber-700 font-bold">3</span>
<span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-label-sm text-label-sm font-bold">Waiting</span>
</div>
<div className="mt-2 w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-amber-500 h-full rounded-full" style={{"width": "16.6%"}}></div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-emerald-800 font-bold">Approved Requests</span>
<div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<span className="font-display-lg text-headline-xl text-emerald-800 font-bold">14</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">Completed</span>
</div>
<div className="mt-2 w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-600 h-full rounded-full" style={{"width": "77.7%"}}></div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Changes Needed</span>
<div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">assignment_late</span>
</div>
</div>
<div className="mt-space-sm flex items-baseline justify-between">
<span className="font-display-lg text-headline-xl text-secondary font-bold">1</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">Needs Update</span>
</div>
<div className="mt-2 w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width": "5.5%"}}></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md">
<div className="flex flex-col md:flex-row gap-space-md items-center justify-between">

<div className="relative w-full md:w-80">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full bg-surface-container-low pl-10 pr-4 py-2 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-xs" id="search-input" placeholder="Search by student name, ID, or subject..." type="text"/>
</div>

<div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
<button className="category-chip px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-xs transition-colors" data-filter="all" type="button">
          All (18)
        </button>
<button className="category-chip px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface font-label-sm text-label-sm font-bold transition-colors" data-filter="Grade Overrides" type="button">
          Mark Changes
        </button>
<button className="category-chip px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface font-label-sm text-label-sm font-bold transition-colors" data-filter="Health Escalation" type="button">
          Health Notes
        </button>
<button className="category-chip px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface font-label-sm text-label-sm font-bold transition-colors" data-filter="Weekly Work Report" type="button">
          Lesson Plans
        </button>
<button className="category-chip px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface font-label-sm text-label-sm font-bold transition-colors" data-filter="Timetable Amendment" type="button">
          Timetable Changes
        </button>
<button className="category-chip px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface font-label-sm text-label-sm font-bold transition-colors" data-filter="Disciplinary / Welfare Remark" type="button">
          Behavior Notes
        </button>
</div>

<div className="flex items-center gap-2 self-end md:self-auto shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Status:</span>
<select className="bg-surface-container-low text-primary font-label-sm text-label-sm font-bold rounded-lg px-3 py-2 focus:outline-none cursor-pointer" id="status-select">
<option value="all">All Statuses</option>
<option value="pending">Waiting</option>
<option value="approved">Approved</option>
<option value="revision">Needs Changes</option>
</select>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-space-lg">
<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
<span className="font-label-lg text-label-lg text-primary">Approval Requests List</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim inline-block"></span>
<span>Always up to date</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm" id="approvals-table">
<thead className="bg-surface-container-high/60 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<tr>
<th className="py-3 px-space-md">Ref ID</th>
<th className="py-3 px-space-md">Type &amp; Details</th>
<th className="py-3 px-space-md">Student / Class</th>
<th className="py-3 px-space-md">Date Sent</th>
<th className="py-3 px-space-md">Reviewed By</th>
<th className="py-3 px-space-md">Status</th>
<th className="py-3 px-space-md">Headmistress Note</th>
<th className="py-3 px-space-md text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container" id="table-rows">

<tr className="hover:bg-surface-container-low/50 transition-colors approval-row" data-category="Health Escalation" data-search="APP-9021 kofi mensah basic 2 health escalation nurse asante" data-status="pending">
<td className="py-3.5 px-space-md font-mono text-label-sm text-primary font-bold">#APP-9021</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-on-surface">Health Escalation</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Asthmatic episode flag</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-primary">Kofi Mensah</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Basic 2 (Sunflower)</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant text-label-sm">
<div>Oct 16, 2026</div>
<div className="text-[11px] text-outline">10:50 GMT</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">EA</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Dr. E. Appiah</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-label-sm text-label-sm font-bold shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
                Waiting
              </span>
</td>
<td className="py-3.5 px-space-md text-on-surface-variant text-body-sm max-w-xs">
<p className="truncate text-on-surface italic">“Under evaluation with Nurse Asante at Health Bay.”</p>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold transition-colors"  type="button">
                View Details
              </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors approval-row" data-category="Grade Overrides" data-search="APP-8842 kwabena osei math mid-term grade override dr appiah" data-status="approved">
<td className="py-3.5 px-space-md font-mono text-label-sm text-primary font-bold">#APP-8842</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-on-surface">Mark Change</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Mathematics Mid-Term</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-primary">Kwabena Osei</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Basic 2 (Sunflower)</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant text-label-sm">
<div>Oct 15, 2026</div>
<div className="text-[11px] text-outline">14:20 GMT</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">EA</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Dr. E. Appiah</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-label-sm text-label-sm font-bold shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Approved
              </span>
</td>
<td className="py-3.5 px-space-md text-on-surface-variant text-body-sm max-w-xs">
<p className="truncate text-on-surface italic">“Correction from 12 to 15 justified per homework re-check.”</p>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-label-sm text-label-sm font-bold transition-colors"  type="button">
                View Approved Note
              </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors approval-row" data-category="Weekly Work Report" data-search="APP-8710 week 7 self-report basic 2 sunflower kwesi osei primary" data-status="approved">
<td className="py-3.5 px-space-md font-mono text-label-sm text-primary font-bold">#APP-8710</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-on-surface">Weekly Lesson Plan</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Week 7 Curriculum Log</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-primary">Sunflower Class</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Basic 2 (Whole Class)</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant text-label-sm">
<div>Oct 13, 2026</div>
<div className="text-[11px] text-outline">16:00 GMT</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">KO</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Mr. Kwesi Osei</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-label-sm text-label-sm font-bold shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Approved
              </span>
</td>
<td className="py-3.5 px-space-md text-on-surface-variant text-body-sm max-w-xs">
<p className="truncate text-on-surface italic">“Excellent lesson pacing on geometry; science pod usage approved.”</p>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold transition-colors"  type="button">
                Read Note
              </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors approval-row" data-category="Timetable Amendment" data-search="APP-8650 timetable amendment basic 2 sunflower lab shift dr appiah" data-status="revision">
<td className="py-3.5 px-space-md font-mono text-label-sm text-primary font-bold">#APP-8650</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-on-surface">Timetable Change</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Computing Lab Slot Relocation</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-primary">Sunflower Class</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Basic 2 Lab Shift</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant text-label-sm">
<div>Oct 10, 2026</div>
<div className="text-[11px] text-outline">09:15 GMT</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">EA</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Dr. E. Appiah</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Needs Changes
              </span>
</td>
<td className="py-3.5 px-space-md text-on-surface-variant text-body-sm max-w-xs">
<p className="truncate text-secondary font-medium italic">“Conflict with JHS 1 Computing Lab slot on Tuesdays 13:00. Please reschedule to Thursday.”</p>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 font-label-sm text-label-sm font-bold transition-colors shadow-xs"  type="button">
                Edit &amp; Resend
              </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/50 transition-colors approval-row" data-category="Disciplinary / Welfare Remark" data-search="APP-8520 disciplinary welfare samuel quaye dr appiah" data-status="approved">
<td className="py-3.5 px-space-md font-mono text-label-sm text-primary font-bold">#APP-8520</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-on-surface">Behavior Note</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Classroom conduct memo</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-md text-label-md font-bold text-primary">Samuel Quaye</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Basic 2 (Sunflower)</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap text-on-surface-variant text-label-sm">
<div>Oct 08, 2026</div>
<div className="text-[11px] text-outline">11:30 GMT</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">EA</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Dr. E. Appiah</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-label-sm text-label-sm font-bold shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Approved
              </span>
</td>
<td className="py-3.5 px-space-md text-on-surface-variant text-body-sm max-w-xs">
<p className="truncate text-on-surface italic">“Guardian conference held and documented.”</p>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold transition-colors"  type="button">
                View Details
              </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="hidden p-space-xl text-center flex flex-col items-center justify-center gap-2" id="no-results-msg">
<span className="material-symbols-outlined text-[48px] text-outline">find_in_page</span>
<div className="font-headline-sm text-headline-sm text-primary">No requests found</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Try clearing your search or filters to see all requests.</p>
<button className="mt-2 px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold" id="reset-filter-btn" type="button">Reset Filters</button>
</div>
</div>

<div className="rounded-xl bg-primary-container text-on-primary p-space-lg shadow-sm flex flex-col md:flex-row items-center gap-space-lg justify-between mb-space-lg">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 flex items-center justify-center text-tertiary-fixed shrink-0">
<span className="material-symbols-outlined text-[28px]">policy</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-primary">Official School Records</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-tertiary-fixed text-on-tertiary-fixed font-bold">Verified &amp; Saved</span>
</div>
<p className="font-body-sm text-body-sm text-on-primary-container">
          All approvals are officially signed and saved according to Ghana education rules. Once shared with parents, these records cannot be changed.
        </p>
</div>
</div>
<div className="shrink-0 flex items-center gap-space-sm">
<button className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold hover:bg-surface-container transition-colors shadow-xs" type="button">
        Download Records
      </button>
</div>
</div>

<div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4" id="cert-modal">
<div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-700">verified</span>
<span className="font-headline-sm text-headline-sm text-primary">Official Approval Details</span>
</div>
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-container-high transition-colors"  type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2 font-mono text-[12px] text-on-surface-variant">
<div className="flex justify-between"><span className="text-outline">CERTIFICATE ID:</span> <span className="font-bold text-primary">CPS-NASIA-SHA256-092281</span></div>
<div className="flex justify-between"><span className="text-outline">REF ID:</span> <span className="text-primary font-bold" id="modal-ref">#APP-8842</span></div>
<div className="flex justify-between"><span className="text-outline">AUTHORIZED BY:</span> <span className="text-on-surface">Dr. Elizabeth Appiah (Headmistress)</span></div>
<div className="flex justify-between"><span className="text-outline">TIMESTAMP:</span> <span>15-OCT-2026 14:20:18 GMT</span></div>
<div className="flex justify-between"><span className="text-outline">STATUS:</span> <span className="text-emerald-700 font-bold">SENT TO PARENT</span></div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-outline uppercase">Headmistress Approval Note</span>
<p className="font-body-sm text-body-sm text-on-surface italic p-3 rounded-lg bg-surface-container" id="modal-feedback"></p>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="px-space-md py-2 rounded-lg bg-surface-container-high text-primary font-label-sm text-label-sm font-bold hover:bg-surface-container-highest transition-colors"  type="button">Close</button>
<button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-xs"  type="button">Download PDF</button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-primary/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4" id="action-modal">
<div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">rate_review</span>
<span className="font-headline-sm text-headline-sm text-primary" id="act-modal-title">Request Details</span>
</div>
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-container-high transition-colors"  type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="flex flex-col gap-space-sm">
<div className="grid grid-cols-2 gap-2 text-label-sm">
<div className="p-2 rounded-lg bg-surface-container-low">
<span className="text-on-surface-variant block">Student / Subject:</span>
<span className="font-bold text-primary" id="act-target"></span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low">
<span className="text-on-surface-variant block">Current Status:</span>
<span className="font-bold text-secondary" id="act-status"></span>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant font-bold">Reason for Change or Teacher Note</label>
<textarea className="w-full bg-surface-container p-3 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none" id="act-textarea" rows={4}></textarea>
</div>
</div>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="px-space-md py-2 rounded-lg bg-surface-container-high text-primary font-label-sm text-label-sm font-bold hover:bg-surface-container-highest transition-colors"  type="button">Close</button>
<button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-xs"  type="button">Save Updates</button>
</div>
</div>
</div>
</div>

    </>
  );
}
