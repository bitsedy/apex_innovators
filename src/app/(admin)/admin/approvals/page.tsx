"use client";

import React from "react";
import Link from "next/link";

// Admin Approvals
export default function ApprovalsPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="w-full flex h-1.5 rounded-full overflow-hidden shadow-sm mb-space-lg">
<div className="w-1/3 bg-primary"></div>
<div className="w-1/3 bg-secondary-container"></div>
<div className="w-1/3 bg-tertiary-fixed-dim"></div>
</div>

<section className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-lg">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-space-sm mb-1">
<span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">Statutory Audit Protocol</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-tertiary-container">verified_user</span>
          GES/NaSIA Direct Compliance Engine
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Executive Approvals &amp; Audit Queue</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Unified institutional sign-off registry for academic overrides, child welfare, legal custody variations, and admissions conversions.</p>
</div>

<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span>Audit Logs</span>
</button>
<button className="flex items-center gap-2 px-space-lg py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-container transition-all"  type="button">
<span className="material-symbols-outlined text-[18px]">rule_folder</span>
<span>Batch Statutory Review</span>
</button>
</div>
</section>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Total Pending Submissions</span>
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">inbox</span>
</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-primary font-bold">9</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active dossiers</span>
</div>
<div className="mt-space-sm flex items-center gap-2">
<div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden flex">
<div className="h-full bg-secondary-container" style={{"width": "25%"}}></div>
<div className="h-full bg-primary" style={{"width": "45%"}}></div>
<div className="h-full bg-tertiary-container" style={{"width": "30%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">100%</span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary-container/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
          Urgent Safeguarding
        </span>
<span className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">medical_services</span>
</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-secondary font-bold">2</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">&lt; 4h SLA Target</span>
</div>
<p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant truncate">Asthma gym exemption &amp; Child safety alert</p>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-tertiary-fixed/15 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Admissions Intake</span>
<span className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">school</span>
</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-primary font-bold">3</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">Stage 4 Final</span>
</div>
<p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant truncate">Creche to Basic 1 placements awaiting sign-off</p>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary-fixed/20 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Academic Overrides</span>
<span className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined text-[18px]">auto_stories</span>
</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-primary font-bold">4</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Term 2 Exam Board</span>
</div>
<p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant truncate">JHS mock grading adjustments logged</p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm mb-space-lg flex flex-col gap-space-md">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">

<div className="relative flex-1 max-w-xl">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" id="approvalsSearch" placeholder="Search by Student name, Staff ID, Ref code (e.g. #APP-9021)..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">⌘K</span>
</div>
</div>

<div className="flex items-center gap-space-sm self-end lg:self-auto">
<div className="flex items-center gap-2 px-space-sm py-1.5 rounded-xl bg-surface-container-low">
<span className="font-label-sm text-label-sm text-on-surface-variant pl-1">Urgency:</span>
<select className="bg-transparent font-label-sm text-label-sm text-on-surface font-semibold focus:outline-none pr-2" id="urgencyFilter">
<option value="all">All Urgencies</option>
<option value="critical">Critical / Safeguarding</option>
<option value="medium">Medium Priority</option>
<option value="standard">Standard Execution</option>
</select>
</div>
<button className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors" title="Reload queue" type="button">
<span className="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" id="categoryTabGroup">
<button className="category-pill active flex items-center gap-2 px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm whitespace-nowrap shadow-sm transition-all" data-category="all" type="button">
<span>All Submissions</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary text-[10px]">9</span>
</button>
<button className="category-pill flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-all" data-category="health" type="button">
<span>Teacher Reports &amp; Health</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-on-surface font-semibold text-[10px]">3</span>
</button>
<button className="category-pill flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-all" data-category="admissions" type="button">
<span>Admissions Intake</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-on-surface font-semibold text-[10px]">3</span>
</button>
<button className="category-pill flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-all" data-category="custody" type="button">
<span>Pickup &amp; Custody Changes</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-on-surface font-semibold text-[10px]">2</span>
</button>
<button className="category-pill flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-all" data-category="academic" type="button">
<span>Staff Timetable/Grade Overrides</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-on-surface font-semibold text-[10px]">1</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-7 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">

<div className="px-space-lg py-4 bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-primary">Pending Case Ledger</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Active Session</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 9 verifications</span>
</div>

<div className="divide-y-0 flex flex-col">

<article className="approval-row selected-row p-space-md hover:bg-surface-container-low/70 transition-all cursor-pointer bg-surface-container-low/40 relative flex flex-col gap-space-sm" id="row-APP-9021" >

<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary-container rounded-r"></div>
<div className="flex items-start justify-between gap-space-sm pl-2">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm font-bold text-primary tracking-tight">#APP-9021</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• 14:15 GMT (Today)</span>

<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Health Incident / Allergy
                </span>
</div>

<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[13px]">emergency_home</span>
                Critical Safeguard
              </span>
</div>

<div className="pl-2 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-label-sm shrink-0">
                KM
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Kofi Mensah</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(Basic 4 - Sunbirds)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Submitted by: <strong className="text-on-surface">Mrs. Beatrice Abbey</strong> (Form Tutor) on behalf of School Clinic
                </p>
</div>
</div>

<div className="pl-2 ml-12 p-space-sm rounded-xl bg-surface-container-lowest/80 flex items-start gap-2 shadow-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">stethoscope</span>
<p className="font-body-sm text-body-sm text-on-surface line-clamp-1">
<span className="font-semibold text-primary">Nurse Asante clinic check completed:</span> Severe allergen reaction recorded; recommends Headmaster or Headteacher endorsement for 14-day specialized gym exemption &amp; dietary bypass.
              </p>
</div>

<div className="pl-2 flex items-center justify-between pt-1">
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">verified</span>
<span>NaSIA Form G-87 Prepared</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm transition-all flex items-center gap-1.5"  type="button">
<span className="material-symbols-outlined text-[16px]">draw</span>
<span>Sign &amp; Approve</span>
</button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all"  type="button">
                  Request Info
                </button>
</div>
</div>
</article>

<article className="approval-row p-space-md hover:bg-surface-container-low/70 transition-all cursor-pointer bg-surface-container-lowest relative flex flex-col gap-space-sm" id="row-APP-9022" >
<div className="flex items-start justify-between gap-space-sm pl-2">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm font-bold text-primary tracking-tight">#APP-9022</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• 12:40 GMT (Today)</span>

<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Admissions Conversion
                </span>
</div>

<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-medium">
                Standard
              </span>
</div>
<div className="pl-2 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-label-sm shrink-0">
                AO
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Ama Osei-Bonsu</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(Creche to Nursery 1)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Submitted by: <strong className="text-on-surface">Registrar Team (Akosua Mensah)</strong>
</p>
</div>
</div>
<div className="pl-2 ml-12 p-space-sm rounded-xl bg-surface-container-low/60 flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">how_to_reg</span>
<p className="font-body-sm text-body-sm text-on-surface line-clamp-1">
<span className="font-semibold text-primary">Entrance interview cleared (Grade A):</span> Tuition deposit verified via Ecobank Ghana receipt #EC-8831. Ready for Headmaster or Headteacher matriculation roll addition.
              </p>
</div>
<div className="pl-2 flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Fee clearance verified 100%</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-all"  type="button">
                  Approve
                </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm"  type="button">
                  View Docs
                </button>
</div>
</div>
</article>

<article className="approval-row p-space-md hover:bg-surface-container-low/70 transition-all cursor-pointer bg-surface-container-lowest relative flex flex-col gap-space-sm" id="row-APP-9023" >
<div className="flex items-start justify-between gap-space-sm pl-2">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm font-bold text-primary tracking-tight">#APP-9023</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• 11:05 GMT (Today)</span>

<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Custody &amp; Gate Override
                </span>
</div>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-secondary font-bold tracking-wider">
                Critical/Urgent
              </span>
</div>
<div className="pl-2 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold text-label-sm shrink-0">
                EB
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Emmanuel Boateng</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(Kindergarten 2)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Submitted by: <strong className="text-on-surface">Officer Tetteh</strong> (Chief Gate Marshal)
                </p>
</div>
</div>
<div className="pl-2 ml-12 p-space-sm rounded-xl bg-surface-container-low/60 flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">no_accounts</span>
<p className="font-body-sm text-body-sm text-on-surface line-clamp-1">
<span className="font-semibold text-secondary">Interim Court Injunction update:</span> Maternal Uncle pickup request denied at main gate; legal custody protocol requires Principal override code for designated escort.
              </p>
</div>
<div className="pl-2 flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-secondary font-medium">Gate Security Holding Area A</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm shadow-sm transition-all"  type="button">
                  Sign Override
                </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-label-sm"  type="button">
                  Enforce Block
                </button>
</div>
</div>
</article>

<article className="approval-row p-space-md hover:bg-surface-container-low/70 transition-all cursor-pointer bg-surface-container-lowest relative flex flex-col gap-space-sm" id="row-APP-9024" >
<div className="flex items-start justify-between gap-space-sm pl-2">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm font-bold text-primary tracking-tight">#APP-9024</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Yesterday</span>

<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Grade Override (Term 2)
                </span>
</div>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-medium">
                Medium
              </span>
</div>
<div className="pl-2 flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-label-sm shrink-0">
                SD
              </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Selorm Darko</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">(JHS 2 - Gold)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Submitted by: <strong className="text-on-surface">Mr. Eric Sowah</strong> (Head of Science Faculty)
                </p>
</div>
</div>
<div className="pl-2 ml-12 p-space-sm rounded-xl bg-surface-container-low/60 flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">calculate</span>
<p className="font-body-sm text-body-sm text-on-surface line-clamp-1">
<span className="font-semibold text-primary">Integrated Science Lab re-assessment:</span> Missing experimental practical component verified due to regional debate attendance; score updated from 42% to 78%.
              </p>
</div>
<div className="pl-2 flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Continuous Assessment Board reviewed</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-all"  type="button">
                  Approve
                </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm"  type="button">
                  Examine Script
                </button>
</div>
</div>
</article>
</div>

<div className="px-space-lg py-3.5 bg-surface-container-low/60 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1 to 4 of 9 statutory requests</span>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<span className="font-label-sm text-label-sm px-2 text-primary font-bold">1</span>
<button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-space-md sticky top-24">
<div className="bg-surface-container-lowest rounded-2xl shadow-lg p-space-lg flex flex-col gap-space-md relative overflow-hidden">

<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">CASE DOSSIER</span>
<span className="font-label-md text-label-md text-primary font-bold" id="dossierRef">#APP-9021</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary font-bold mt-1" id="dossierTitle">Kofi Mensah — Clinical Gym Exemption</span>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant" title="Print statutory dossier" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
<button className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant" title="Full screen view" type="button">
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-md">
<div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm relative">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of a nine-year-old Ghanaian school boy in crisp navy Carepoint uniform smiling calmly against a warm sunlit classroom interior with gold academic insignias" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBijX5Xey-R3_IielkG1txohA1gHLJA3B8kj-R2E7tQP8OuCZZAXKVSr0HpbJt_dZxD0FOxhXZKLksmbY9DFwuVJ5VgvVfog9yIAKQ-vyNBRwuC4X3MflT1Bs7egWMFlJqsgpmx5qooIFxdB24BoOPp2U_0xBLOC6b0p97p4XVIIOje73x7ud8MMMaRX2W7POILeUrdBWasWrB5NFzf1vmdFoh-gq1w4sk2Mvn8lCfu1nu8eSEN8E5hrQ"/>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-primary truncate">Kofi Nana Mensah</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">B4-SB</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Student ID: <strong className="text-on-surface">CP-2018-0941</strong></span>
<div className="flex items-center gap-3 mt-1 font-label-sm text-label-sm">
<span className="text-on-surface-variant">Blood: <strong className="text-secondary font-bold">O+</strong></span>
<span className="text-on-surface-variant">House: <strong className="text-primary font-semibold">Aggrey Red</strong></span>
<span className="text-on-surface-variant">Attendance: <strong className="text-on-tertiary-container font-bold">98.2%</strong></span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider font-semibold">Case Chain of Custody &amp; Verification</span>
<div className="flex flex-col pl-2 border-l-0">

<div className="flex items-start gap-3 relative pb-3">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5 shadow-xs">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Classroom Incident Logged</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">13:30 GMT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Mrs. Beatrice Abbey identified acute bronchospasm during PE warmup. Child escorted safely to Sick Bay 2.
                </p>
</div>
</div>

<div className="flex items-start gap-3 relative pb-3">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5 shadow-xs">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Clinical Assessment Complete</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">13:52 GMT</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Nurse Asante, SRN administered Salbutamol 2 puffs. O2 Saturation normalized to 99%. Parent Mrs. Grace Mensah contacted &amp; acknowledged via SMS token.
                </p>
</div>
</div>

<div className="flex items-start gap-3 relative">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5 animate-pulse">
<span className="material-symbols-outlined text-[14px]">pending</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary font-bold">Statutory Sign-Off Required</span>
<span className="font-label-sm text-label-sm text-secondary-container font-semibold">Immediate</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
                  Requires Headmaster or Headteacher Dr. Elizabeth Appiah digital signature to seal institutional exemption register for GES Inspectorate compliance.
                </p>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-high/50 flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Clinical Evidence &amp; Physician Note</span>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest shadow-xs">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-secondary text-[22px]">picture_as_pdf</span>
<div className="flex flex-col truncate">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Korle-Bu_Pediatric_Exemption_Form_KM.pdf</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">1.4 MB • Dr. K. Quaye, FWACP</span>
</div>
</div>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high" type="button">
              View
            </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase">Executive Sign-Off &amp; NaSIA Seal</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Auth Token #CP-EX-4019</span>
</div>

<div className="h-24 w-full bg-surface-container-lowest rounded-lg p-3 flex flex-col justify-between relative cursor-crosshair shadow-inner" id="signatureBox">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant italic">Sign with stylus or execute verified key</span>
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span> 256-bit HSM Encrypted
              </span>
</div>

<div className="flex items-center justify-center h-10 select-none">
<svg className="w-56 h-8 text-primary opacity-80" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 200 40">
<path d="M10 28 C 30 10, 45 35, 60 15 C 75 -5, 80 30, 105 20 C 120 12, 130 32, 150 22 C 170 12, 185 28, 195 24"></path>
</svg>
</div>
<div className="flex items-center justify-between text-on-surface-variant text-[10px]">
<span>Dr. Elizabeth Appiah, PhD, FGA</span>
<span>Headmaster or Headteacher • Level 4 Signatory</span>
</div>
</div>

<div className="px-3 py-2 rounded-lg bg-surface-container-high flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="font-label-sm text-label-sm text-on-surface">Target NaSIA Ref:</span>
</div>
<span className="font-label-sm text-label-sm font-bold text-primary" id="nasiaRefCode">GH-GES-ACC-2026-APP9021</span>
</div>

<div className="flex items-center gap-space-sm mt-1">
<button className="flex-1 py-3 px-space-md rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-md transition-all flex items-center justify-center gap-2"  type="button">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
<span>Authorize &amp; Endorse (Seal Dossier)</span>
</button>
<button className="p-3 rounded-xl bg-error-container hover:bg-error text-on-error-container hover:text-on-error transition-all flex items-center justify-center shadow-xs"  title="Decline / Reject Case" type="button">
<span className="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-8 right-8 z-50 transform translate-y-32 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-3 px-space-lg py-3 rounded-2xl bg-primary text-on-primary shadow-xl" id="statusToast">
<span className="material-symbols-outlined text-[22px] text-tertiary-fixed" id="toastIcon">task_alt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold" id="toastTitle">Approval Executed</span>
<span className="font-body-sm text-body-sm text-primary-fixed" id="toastMsg">NaSIA Code #GH-GES-ACC-2026-APP9021 dispatched.</span>
</div>
</div>


</div>
    </>
  );
}
