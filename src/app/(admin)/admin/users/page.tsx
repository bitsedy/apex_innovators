"use client";

import React from "react";
import Link from "next/link";

// Admin Users
export default function UsersPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="flex flex-col gap-space-lg mb-space-xl">

<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
            RBAC Level 3 Enforced
          </span>
<span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">• Super-Admin Config Tier Locked</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">Identity &amp; Access Management Directory</h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          432 Active Campus Identities • NaSIA Role-Based Access Control • Continuous Session Telemetry
        </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Export Registry (CSV)</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">security_update_good</span>
<span>Batch Credential Audit</span>
</button>
<button className="flex items-center gap-2 px-space-lg py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:shadow-lg transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">person_add</span>
<span>+ Provision New User</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary-fixed/20 blur-xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Campus Directory</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">groups</span>
</div>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-[42px] leading-tight font-extrabold text-primary">432</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container flex items-center">
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>100%
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-1">
            28 Faculty • 372 Guardians • 8 Security • 24 Admin
          </p>
</div>

<div className="mt-space-md w-full h-1 rounded-full bg-gradient-to-r from-primary via-secondary-container to-tertiary-fixed"></div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">MFA Compliance</span>
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between">
<div>
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-[42px] leading-tight font-extrabold text-primary">98.4%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Enforced Hardware &amp; SMS 2FA
            </p>
</div>

<div className="relative w-14 h-14 shrink-0">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98.4, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute inset-0 flex items-center justify-center font-label-sm text-label-sm font-bold text-primary">425/432</span>
</div>
</div>
<div className="mt-space-md w-full h-1 rounded-full bg-on-tertiary-container"></div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Live Auth Nodes</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">sensors</span>
</div>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-[42px] leading-tight font-extrabold text-primary">46</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-tertiary-container">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping"></span> Live GMT
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-1">
            Turnstiles (8) • Portals (31) • Smart-Boards (7)
          </p>
</div>
<div className="mt-space-md w-full h-1 rounded-full bg-primary"></div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Action Queue</span>
<div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">lock_reset</span>
</div>
</div>
<div className="mt-space-md">
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-[42px] leading-tight font-extrabold text-secondary">3</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">Priority</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Pending Password Resets / Repeated Pin Lockouts
          </p>
</div>
<div className="mt-space-md w-full h-1 rounded-full bg-secondary-container"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm mb-space-lg">

<div className="flex flex-col lg:flex-row gap-space-md items-stretch lg:items-center justify-between">
<div className="relative flex-1">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[20px] text-on-surface-variant">search</span>
<input className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-on-surface-variant/70 shadow-inner" id="user-search-input" placeholder="Search by Name, Staff ID, Student ID, or Email..." type="text"/>
</div>
<div className="flex flex-wrap sm:flex-nowrap items-center gap-space-sm">

<div className="relative min-w-[170px]">
<select className="w-full appearance-none pl-3.5 pr-8 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer">
<option>All Academic Divisions</option>
<option>Creche &amp; Nursery</option>
<option>Kindergarten</option>
<option>Basic School</option>
<option>Junior High (JHS)</option>
</select>
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
</div>

<div className="relative min-w-[150px]">
<select className="w-full appearance-none pl-3.5 pr-8 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer">
<option>All Statuses</option>
<option>Active</option>
<option>Suspended</option>
<option>Pending 2FA</option>
<option>Lockout</option>
</select>
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
</div>
<button className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface shadow-sm transition-all" title="Reset Filters" type="button">
<span className="material-symbols-outlined text-[20px]">filter_alt_off</span>
</button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
<button className="px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm shrink-0 flex items-center gap-1.5 transition-all" type="button">
<span>All Identities</span>
<span className="px-1.5 py-0.2 rounded-full bg-on-primary/20 text-on-primary text-[10px]">432</span>
</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0 flex items-center gap-1.5 transition-all" type="button">
<span>Faculty / Teachers</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px]">28</span>
</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0 flex items-center gap-1.5 transition-all" type="button">
<span>Parents &amp; Guardians</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px]">372</span>
</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0 flex items-center gap-1.5 transition-all" type="button">
<span>Front-Desk &amp; Security</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px]">8</span>
</button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0 flex items-center gap-1.5 transition-all" type="button">
<span>Administrative Staff</span>
<span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px]">24</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-8 bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">

<div className="p-space-md px-space-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-primary">Master Identity Registry</span>
<span className="font-label-sm text-label-sm text-on-surface-variant px-2 py-0.5 rounded-md bg-surface-container">Showing 5 of 432 Records</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" title="Refresh Feed">
<span className="material-symbols-outlined text-[18px]">sync</span>
</button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" title="Column Customizer">
<span className="material-symbols-outlined text-[18px]">view_column</span>
</button>
</div>
</div>

<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-4 pl-space-lg">User Identity</th>
<th className="py-3 px-4">Role &amp; Jurisdiction</th>
<th className="py-3 px-4">Primary Contact</th>
<th className="py-3 px-4">Student / Station</th>
<th className="py-3 px-4">MFA &amp; Security</th>
<th className="py-3 px-4">Status / Activity</th>
<th className="py-3 px-4 pr-space-lg text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer" >
<td className="py-3.5 px-4 pl-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md text-primary font-bold shadow-inner">
                    NM
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Dr. Nana Mensah</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">ID: GRD-2024-098</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[14px]">family_restroom</span>
                    Guardian
                  </span>
<span className="text-[11px] text-on-surface-variant">Executive PTA Rep</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="text-on-surface truncate max-w-[140px]">n.mensah@apexmed.gh</span>
<span className="text-[11px] text-on-surface-variant">+233 24 492 8810</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">Kofi Mensah</span>
<span className="text-[10px] text-on-surface-variant">(Basic 2)</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 text-[11px] text-on-tertiary-container font-semibold">
<span className="material-symbols-outlined text-[13px]">sms</span> Ghana Card + SMS 2FA
                  </span>
<span className="text-[10px] text-on-surface-variant">Verified NIA Pin</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
<span className="text-[11px] font-medium text-on-surface">12 mins ago</span>
</span>
<span className="text-[10px] text-on-surface-variant">Parent Mobile App</span>
</div>
</td>
<td className="py-3.5 px-4 pr-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container" title="Manage Children" type="button">
<span className="material-symbols-outlined text-[18px]">child_care</span>
</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-secondary hover:bg-surface-container" title="Reset PIN" type="button">
<span className="material-symbols-outlined text-[18px]">pin</span>
</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container" title="Audit Log" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer" >
<td className="py-3.5 px-4 pl-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center font-label-md text-label-md text-on-primary-fixed font-bold shadow-inner">
                    BA
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Mrs. Beatrice Abbey</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">ID: TCH-B2-04</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[14px]">school</span>
                    Faculty Lead
                  </span>
<span className="text-[11px] text-on-surface-variant">Sunflower Stream</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="text-on-surface truncate max-w-[140px]">b.abbey@carepoint.edu.gh</span>
<span className="text-[11px] text-on-surface-variant">+233 20 811 4452</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">Basic 2 (Sunflower)</span>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 text-[11px] text-on-tertiary-container font-semibold">
<span className="material-symbols-outlined text-[13px]">key</span> YubiKey FIDO2
                  </span>
<span className="text-[10px] text-on-surface-variant">Classroom Node Bound</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span className="text-[11px] font-semibold text-on-tertiary-container">Active Now</span>
</span>
<span className="text-[10px] text-on-surface-variant">Smartboard #03</span>
</div>
</td>
<td className="py-3.5 px-4 pr-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container" title="Class Assignment" type="button">
<span className="material-symbols-outlined text-[18px]">class</span>
</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container" title="Audit Permissions" type="button">
<span className="material-symbols-outlined text-[18px]">policy</span>
</button>
</div>
</td>
</tr>

<tr className="bg-surface-container/70 border-l-4 border-l-primary hover:bg-surface-container transition-colors group cursor-pointer" >
<td className="py-3.5 px-4 pl-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center font-label-md text-label-md text-on-secondary-fixed font-bold shadow-inner">
                    ET
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold text-primary">Ofc. Emmanuel Tetteh</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">ID: SEC-NODE-08</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
<span className="material-symbols-outlined text-[14px]">shield</span>
                    Front-Desk Security
                  </span>
<span className="text-[11px] text-on-surface-variant">Campus Perimeter</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="text-on-surface truncate max-w-[140px]">gate.alpha@carepoint.edu.gh</span>
<span className="text-[11px] text-on-surface-variant">+233 55 300 1290</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">Turnstile Gate A</span>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 text-[11px] text-primary font-semibold">
<span className="material-symbols-outlined text-[13px]">nfc</span> RFID + MAC Bound
                  </span>
<span className="text-[10px] text-on-surface-variant">Terminal Node #04</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span className="text-[11px] font-semibold text-on-tertiary-container">Active Now</span>
</span>
<span className="text-[10px] text-on-surface-variant">Morning Shift Lead</span>
</div>
</td>
<td className="py-3.5 px-4 pr-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container" title="Shift Reassign" type="button">
<span className="material-symbols-outlined text-[18px]">schedule</span>
</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-secondary hover:bg-surface-container" title="Revoke Station Token" type="button">
<span className="material-symbols-outlined text-[18px]">phonelink_erase</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer" >
<td className="py-3.5 px-4 pl-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center font-label-md text-label-md text-on-tertiary-fixed font-bold shadow-inner">
                    AM
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Madam Akosua Mensah</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">ID: ADM-REG-02</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[14px]">badge</span>
                    Administrative Registrar
                  </span>
<span className="text-[11px] text-on-surface-variant">Admissions &amp; Records</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="text-on-surface truncate max-w-[140px]">registrar@carepoint.edu.gh</span>
<span className="text-[11px] text-on-surface-variant">+233 24 109 2314</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">Admin Block Rm 102</span>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 text-[11px] text-on-tertiary-container font-semibold">
<span className="material-symbols-outlined text-[13px]">vpn_key</span> FIPS 140-3 Hardware
                  </span>
<span className="text-[10px] text-on-surface-variant">GES Enrolment Key</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="text-[11px] font-medium text-on-surface">1 hr ago</span>
</span>
<span className="text-[10px] text-on-surface-variant">Desk Console</span>
</div>
</td>
<td className="py-3.5 px-4 pr-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container" title="Manage RBAC Scope" type="button">
<span className="material-symbols-outlined text-[18px]">manage_accounts</span>
</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container" title="Session Log" type="button">
<span className="material-symbols-outlined text-[18px]">description</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors group cursor-pointer" >
<td className="py-3.5 px-4 pl-space-lg">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center font-label-md text-label-md text-primary font-bold shadow-inner">
                    ES
                  </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">Mr. Eric Sowah</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">ID: TCH-JHS-01</span>
</div>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[14px]">biotech</span>
                    JHS Science Lead
                  </span>
<span className="text-[11px] text-on-surface-variant">STEM Department</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="text-on-surface truncate max-w-[140px]">e.sowah@carepoint.edu.gh</span>
<span className="text-[11px] text-on-surface-variant">+233 27 655 4901</span>
</div>
</td>
<td className="py-3.5 px-4">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">JHS 1 &amp; Lab A</span>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1 text-[11px] text-on-tertiary-container font-semibold">
<span className="material-symbols-outlined text-[13px]">phone_android</span> TOTP Authenticator
                  </span>
<span className="text-[10px] text-on-surface-variant">Device Authenticated</span>
</div>
</td>
<td className="py-3.5 px-4">
<div className="flex flex-col">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
<span className="text-[11px] font-medium text-on-surface">Today 08:14</span>
</span>
<span className="text-[10px] text-on-surface-variant">Science Lab Tablet</span>
</div>
</td>
<td className="py-3.5 px-4 pr-space-lg text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container" title="Manage Permissions" type="button">
<span className="material-symbols-outlined text-[18px]">key</span>
</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container" title="View Profile" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md px-space-lg bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span>Rows per page:</span>
<select className="bg-surface-container-lowest text-on-surface px-2 py-1 rounded-md text-label-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-xs">
<option>5</option>
<option >10</option>
<option>25</option>
<option>50</option>
</select>
<span className="hidden sm:inline">1–5 of 432 Identities</span>
</div>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:text-on-surface shadow-xs disabled:opacity-40" disabled={true}>
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-on-primary font-bold shadow-xs">1</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container text-on-surface font-semibold shadow-xs">2</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container text-on-surface font-semibold shadow-xs">3</button>
<span className="px-1 text-on-surface-variant">...</span>
<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container text-on-surface font-semibold shadow-xs">44</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:text-on-surface shadow-xs">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg relative overflow-hidden flex flex-col gap-space-md">

<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Identity Inspector</span>
<span className="font-headline-sm text-headline-sm text-primary">Station Node &amp; Profile</span>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
            ACTIVE SESSION
          </span>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap- space-md">
<div className="w-14 h-14 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-headline-sm shrink-0 shadow-sm">
            ET
          </div>
<div className="flex flex-col min-w-0 pl-3">
<h4 className="font-label-lg text-label-lg text-primary font-bold truncate">Ofc. Emmanuel Tetteh</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">Turnstile Lead • SEC-08</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Campus Perimeter Guard Force</span>
</div>
</div>

<div className="flex flex-col gap-2 pt-2">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Access Node Telemetry</span>
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2.5">
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">dns</span>
                Assigned Terminal
              </span>
<span className="font-semibold text-on-surface">Gate Node #04 (Alpha Turnstile)</span>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">lan</span>
                Hardware MAC Binding
              </span>
<code className="px-2 py-0.5 rounded bg-surface-container-lowest font-mono text-[11px] text-primary font-bold">00:1A:2B:6F:43:8C</code>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">badge</span>
                Vetting Expiry (GES)
              </span>
<span className="font-semibold text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> 14 Nov 2026
              </span>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                Active Shift Length
              </span>
<span className="font-semibold text-on-surface">4h 22m (Started 06:00 GMT)</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">RBAC Authorizations</span>
<div className="grid grid-cols-2 gap-2">
<div className="p-2 rounded-lg bg-surface-container-low flex items-center gap-2">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Visitor Check-in</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low flex items-center gap-2">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Student Pickup Scan</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-low flex items-center gap-2">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Gate Lockdown</span>
</div>
<div className="p-2 rounded-lg bg-surface-container-high/60 flex items-center gap-2 opacity-50">
<span className="material-symbols-outlined text-outline text-[18px]">block</span>
<span className="font-label-sm text-label-sm text-outline font-medium">Grade Books</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2 pt-2">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">Node Intervention Controls</span>
<div className="flex flex-col gap-2">
<button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all shadow-xs" type="button">
<span className="material-symbols-outlined text-[18px]">cached</span>
<span>Rotate Authentication Token</span>
</button>
<button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all shadow-xs" type="button">
<span className="material-symbols-outlined text-[18px]">lock_clock</span>
<span>Force MFA Immediate Re-auth</span>
</button>
<button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary-fixed hover:bg-secondary-fixed-dim text-on-secondary-fixed font-label-md text-label-md transition-all shadow-xs" type="button">
<span className="material-symbols-outlined text-[18px]">block</span>
<span>Suspend Account &amp; Kill Session</span>
</button>
</div>
</div>

<div className="pt-2 text-center">
<span className="text-[11px] text-on-surface-variant">Last audited by Dr. Elizabeth Appiah at 08:00 GMT</span>
</div>
</div>

<div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-3 shadow-xs">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">info</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-bold">NaSIA Statutory Guideline</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
            All guardian identity records must be re-validated against the Ghana Card (National Identification Authority) registry at the beginning of each academic term.
          </p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
