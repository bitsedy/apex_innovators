"use client";

import React from "react";
import Link from "next/link";

// Admin Command Dashboard
export default function AdminPage() {
  return (
    <>
<div className="flex flex-col w-full gap-space-lg">

<div className="relative overflow-hidden rounded-xl bg-primary text-on-primary shadow-md p-space-lg">

<div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-gradient-to-br from-primary-fixed/20 via-primary-container to-transparent blur-2xl pointer-events-none"></div>
<div className="absolute right-32 bottom-0 w-64 h-64 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1 max-w-3xl">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-primary-container text-primary-fixed tracking-wide uppercase">Institutional Command</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-primary-fixed-dim">Term 1, Week 6 • Academic Year 2026/2027</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary-fixed">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
<span>Campus Security: Level 4 Normal</span>
</div>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-primary tracking-tight mt-1">
          Welcome back, Headmistress Dr. Elizabeth Appiah
        </h1>
<p className="font-body-sm text-body-sm text-primary-fixed-dim max-w-2xl">
          Carepoint executive operations are synced. 4 high-priority governance escalations require your direct credential authorization prior to 13:00 GMT dismissal.
        </p>
</div>
<div className="flex items-center gap-3 shrink-0">
<button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm hover:bg-surface-container transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Credential Audit Logs</span>
</button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm shadow-sm hover:bg-secondary-container transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">notifications_active</span>
<span>Broadcast Notice</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Administrative Sign-Off</span>
<span className="font-headline-lg text-headline-lg text-secondary-container font-extrabold mt-1">9</span>
</div>
<div className="w-10 h-10 rounded-lg bg-error-container text-error flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[22px]">pending_actions</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex flex-col gap-2">
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Gradebook, Medical, Custody, Intake</p>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container">4 Urgent</span>
<a className="font-label-sm text-label-sm text-primary hover:text-primary-container flex items-center gap-1 font-semibold" href="/admin/approvals">
<span>Review Queue</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>

<div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Student Attendance Today</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">96.5%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">328/340</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[22px]">groups</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex flex-col gap-1.5">
<div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{"width": "96.5%"}}></div>
</div>
<div className="grid grid-cols-4 gap-1 text-center font-label-sm text-label-sm text-on-surface-variant pt-1">
<div><span className="font-semibold text-on-surface">42</span>/48 <span className="block text-[10px] text-outline">NUR</span></div>
<div><span className="font-semibold text-on-surface">64</span>/92 <span className="block text-[10px] text-outline">KG</span></div>
<div><span className="font-semibold text-on-surface">156</span>/160 <span className="block text-[10px] text-outline">BAS</span></div>
<div><span className="font-semibold text-on-surface">66</span>/80 <span className="block text-[10px] text-outline">JHS</span></div>
</div>
</div>
</div>

<div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Faculty Clock-In</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">26/28</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">92.8%</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[22px]">fingerprint</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Geofence Active</span>
</div>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant">2 On-Leave</span>
</div>
</div>

<div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Gate Security Status</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-extrabold">Armed</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">184 releases</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-[22px]">sensor_door</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">verified</span>
<span>Turnstiles Synced</span>
</div>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">0 Alerts</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="flex items-center justify-between bg-surface-container-lowest px-space-md py-3 rounded-xl shadow-sm">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Unified Approvals &amp; Escalation Radar</h2>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Sorted by Severity</span>
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>

<div className="flex flex-col gap-3">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container text-error flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">medical_services</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary font-bold">#APP-9021</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold">Priority: High</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">08:42 GMT</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-semibold truncate mt-0.5">
                Asthmatic Episode Safeguarding Sign-Off
              </p>
<div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
<span>Child: Kofi Mensah (Basic 3)</span>
<span>•</span>
<span>Reporter: Mrs. Abbey (Nurse)</span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
<button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm hover:bg-secondary-container transition-colors shadow-xs" type="button">
              Authorize Action
            </button>
<span className="font-label-sm text-label-sm text-outline">Action Due: 15m</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-error-container text-error flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">key</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-sm text-label-sm text-primary font-bold">#SEC-1102</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold">Priority: Urgent</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">09:15 GMT</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-semibold truncate mt-0.5">
                Emergency Guardian Delegate Request
              </p>
<div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
<span>Child: David Quaye (KG 2)</span>
<span>•</span>
<span>OTP Verified by Gate Turnstile</span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
<button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors shadow-xs" type="button">
              Verify Delegate
            </button>
<span className="font-label-sm text-label-sm text-outline">Gate 2 Holding</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">person_add</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-sm text-label-sm text-primary font-bold">#ADM-2026-084</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-semibold">Priority: Normal</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">07:50 GMT</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-semibold truncate mt-0.5">
                Nursery 1 Formal Admission Clearance
              </p>
<div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
<span>Candidate: Ama Boateng</span>
<span>•</span>
<span>Fees Cleared / Health Form Complete</span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors" type="button">
              Approve Seal
            </button>
<span className="font-label-sm text-label-sm text-outline">Stage 5/5</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">auto_stories</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-sm text-label-sm text-primary font-bold">#GRD-4412</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-semibold">Priority: Normal</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Yesterday</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-semibold truncate mt-0.5">
                Gradebook Weighting Override (Basic 2 Science)
              </p>
<div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
<span>Teacher: Mr. Ofori</span>
<span>•</span>
<span>Midterm Practical Lab Adjustment (15% -&gt; 20%)</span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
<button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors" type="button">
              Review Delta
            </button>
<span className="font-label-sm text-label-sm text-outline">Academic Board</span>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">history</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Administrative Velocity: 94.2%</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">38 issues resolved this week with average response time of 22 minutes.</p>
</div>
</div>
<a className="font-label-sm text-label-sm text-primary font-bold underline hover:opacity-80 shrink-0" href="#">
          Full Escalation Archive
        </a>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Admissions Intake Funnel</h2>
</div>
<a className="font-label-sm text-label-sm text-primary hover:underline font-semibold flex items-center gap-1" href="#">
<span>Pipeline</span>
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant -mt-2">
          Term 1 / Term 2 2026 Live Prospect Conversion
        </p>

<div className="flex flex-col gap-2.5">

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">1. Public Inquiries</span>
<span className="font-bold text-primary">142</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary-container h-full rounded-full" style={{"width": "100%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">2. Applications Submitted</span>
<span className="font-bold text-primary">48</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary h-full rounded-full" style={{"width": "68%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">3. Documents Verified</span>
<span className="font-bold text-primary">24</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary h-full rounded-full" style={{"width": "48%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface">4. Interview &amp; Readiness Testing</span>
<span className="font-bold text-primary">12</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary-container h-full rounded-full" style={{"width": "25%"}}></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-semibold text-secondary-container">5. Ready for Final Approval</span>
<span className="font-bold text-secondary-container">6</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary-container h-full rounded-full" style={{"width": "12%"}}></div>
</div>
</div>
</div>

<div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Conversion Rate to Enrolled</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary font-bold">29.4%</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Real-Time Gate &amp; Dismissal Stream</h2>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Turnstiles Live</span>
</div>

<div className="flex flex-col gap-3">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-label-sm font-bold shrink-0">
                G1
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Gate 1: North Pedestrian</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Badge #8832 cleared • Nursery Parent Pick-up</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap ml-2">12:04:18</span>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-label-sm font-bold shrink-0">
                G2
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Gate 2: Vehicle Gate Area</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Plate GT-4192-22 tag recognized • Bus Route 3</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap ml-2">12:03:52</span>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-label-sm font-bold shrink-0">
                G3
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Gate 3: South Field Exit</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Faculty pass scan: Mr. K. Addo (P.E. Staff)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-outline whitespace-nowrap ml-2">12:01:05</span>
</div>
</div>
<div className="pt-1 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Daily Dispatched: 184 students</span>
<span className="text-tertiary-container font-semibold">0 Exceptions Active</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">rocket_launch</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Executive Launchpad &amp; Drills</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Direct Access Shortcuts</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<button className="group flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-all" type="button">
<div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
<span className="material-symbols-outlined text-[20px]">cell_tower</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold group-hover:text-primary transition-colors truncate">Broadcast Parent Advisory</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Push SMS &amp; Portal alert</span>
</div>
</button>

<button className="group flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-all" type="button">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold group-hover:text-primary transition-colors truncate">NaSIA Compliance Report</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Export signed PDF summary</span>
</div>
</button>

<button className="group flex items-center gap-space-sm p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-all" type="button">
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
<span className="material-symbols-outlined text-[20px]">badge</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface font-bold group-hover:text-primary transition-colors truncate">View Faculty Roster</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">28 staff • 4 divisions</span>
</div>
</button>

<button className="group flex items-center gap-space-sm p-space-md rounded-xl bg-error-container hover:bg-surface-variant text-left transition-all" type="button">
<div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
<span className="material-symbols-outlined text-[20px]">crisis_alert</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-error-container font-bold truncate">Lockdown Simulation Drill</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Run silent campus protocol</span>
</div>
</button>
</div>
</div>
</div>
    </>
  );
}
