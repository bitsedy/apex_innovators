"use client";

import React from "react";
import Link from "next/link";

// Admin Settings
export default function SettingsPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="flex flex-col gap-y-space-lg w-full">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-sm">
<div className="flex flex-col gap-1 max-w-3xl">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold">GOVERNANCE CONSOLE</span>
<span>•</span>
<span className="text-on-surface-variant">Policy Active: NaSIA-GES Compliance Pack v4.3</span>
<span>•</span>
<span className="flex items-center gap-1 text-tertiary font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>Synchronized</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">School Operational Settings &amp; Governance Configuration</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Institutional policies, academic calendar milestones, approval matrices, and gate security thresholds for Accra Primary &amp; Junior High Campus.</p>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">history</span>
<span>Audit History</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-secondary font-label-lg text-label-lg transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">undo</span>
<span>Revert to Policy v4.2</span>
</button>
<button className="flex items-center gap-2 px-space-lg py-2.5 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-all shadow-md" type="button">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Save Changes</span>
</button>
</div>
</div>

<div className="flex items-center gap-space-xs p-1.5 rounded-2xl bg-surface-container-low shadow-sm overflow-x-auto">
<button className="tab-button flex items-center gap-2 px-space-md py-2.5 rounded-xl font-label-md text-label-md bg-primary text-on-primary shadow-sm whitespace-nowrap transition-all" data-tab="tab-calendar" type="button">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
<span>Academic Calendar &amp; Terms</span>
</button>
<button className="tab-button flex items-center gap-2 px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap transition-all" data-tab="tab-approvals" type="button">
<span className="material-symbols-outlined text-[18px]">approval_delegation</span>
<span>Approval Routing &amp; SLA Matrix</span>
<span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary font-label-sm text-[10px]">Strict SLA</span>
</button>
<button className="tab-button flex items-center gap-2 px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap transition-all" data-tab="tab-gate" type="button">
<span className="material-symbols-outlined text-[18px]">sensor_door</span>
<span>Campus Security &amp; Gate Rules</span>
</button>
<button className="tab-button flex items-center gap-2 px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap transition-all" data-tab="tab-curriculum" type="button">
<span className="material-symbols-outlined text-[18px]">auto_stories</span>
<span>Curriculum &amp; Grading Weights</span>
</button>
<button className="tab-button flex items-center gap-2 px-space-md py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap transition-all" data-tab="tab-notifications" type="button">
<span className="material-symbols-outlined text-[18px]">cell_tower</span>
<span>Notifications &amp; SMS Gateways</span>
</button>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-8 flex flex-col gap-y-space-lg">

<section className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-start justify-between pb-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-lg text-label-lg text-primary uppercase tracking-wider">PANEL A • ACADEMIC TIMELINE &amp; ENROLLMENT LIMITS</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Calendar Milestones &amp; GES Statutory Rhythms</h2>
</div>
<span className="px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Active Session: 2026/2027</span>
</div>

<div className="rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary p-space-md mb-space-md shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[28px]">event_available</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-primary-container uppercase">Current Active Term Execution</span>
<span className="font-headline-sm text-headline-sm font-bold">Term 1 • Academic Session 2026/2027</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim">Start: 09 September 2026 — Closure: 19 December 2026 (72 Teaching Days)</span>
</div>
</div>
<div className="flex items-center gap-2 bg-surface-container-lowest/10 px-space-md py-2 rounded-lg backdrop-blur-md">
<span className="material-symbols-outlined text-secondary-fixed text-[20px]">notifications_active</span>
<span className="font-label-sm text-label-sm text-surface font-medium">Week 8 Progress (54%)</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">MID-TERM ASSESSMENT WINDOW</span>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">tune</span>
</div>
<div className="grid grid-cols-2 gap-2 mt-1">
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant block">Window Open</label>
<input className="w-full px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none shadow-sm focus:ring-2 focus:ring-primary" type="text" value="20 Oct 2026"/>
</div>
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant block">Window Lock</label>
<input className="w-full px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none shadow-sm focus:ring-2 focus:ring-primary" type="text" value="28 Oct 2026"/>
</div>
</div>
<span className="font-body-sm text-label-sm text-on-surface-variant">Marks entry strictly locks at 23:59 GMT on lock date.</span>
</div>
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">STATUTORY GES MORNING DEVOTION</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-[11px]">Daily Required</span>
</div>
<div className="grid grid-cols-2 gap-2 mt-1">
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant block">Bell Rings</label>
<input className="w-full px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none shadow-sm focus:ring-2 focus:ring-primary" type="text" value="07:45 GMT"/>
</div>
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant block">Dismissal to Class</label>
<input className="w-full px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm outline-none shadow-sm focus:ring-2 focus:ring-primary" type="text" value="08:15 GMT"/>
</div>
</div>
<span className="font-body-sm text-label-sm text-on-surface-variant">Includes National Anthem &amp; Flag Assembly protocols.</span>
</div>
</div>

<div className="flex flex-col gap-2 pt-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wide">Division Maximum Enrollment Capacity</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Statutory limit: 355 students max</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">

<div className="p-space-sm rounded-xl bg-surface-container flex flex-col items-center text-center gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Creche &amp; Nursery</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary font-bold">48</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ 50</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-secondary-container h-full rounded-full" style={{"width": "96%"}}></div>
</div>
<span className="font-label-sm text-[10px] text-secondary font-semibold">2 Seats Left</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex flex-col items-center text-center gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Kindergarten (KG)</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary font-bold">88</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ 95</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-tertiary-fixed-dim h-full rounded-full" style={{"width": "92%"}}></div>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant font-semibold">7 Seats Left</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex flex-col items-center text-center gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Basic 1 - 6</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary font-bold">119</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ 125</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "95%"}}></div>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant font-semibold">6 Seats Left</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex flex-col items-center text-center gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Junior High (JHS)</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary font-bold">78</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ 85</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width": "91%"}}></div>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant font-semibold">7 Seats Left</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-start justify-between pb-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<span className="font-label-lg text-label-lg text-secondary-container uppercase tracking-wider">PANEL B • STATUTORY APPROVAL ROUTING &amp; SLA MATRIX</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Multi-Tier Administrative Sign-off Thresholds</h2>
</div>
<button className="flex items-center gap-1.5 text-primary hover:text-primary-container font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">edit_note</span>
<span>Reorder Chain</span>
</button>
</div>
<div className="flex flex-col gap-space-md">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface">Tier 1 • Sensitive Academic Operations</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Standard</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Grade modification &gt; 5%, recorded student medical incident report, terminal fee waiver.</p>
<div className="flex items-center gap-space-md mt-2 text-on-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-on-surface-variant"><span className="material-symbols-outlined text-[16px]">account_box</span>Target: Academic Head / Dean</span>
<span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-[16px]">schedule</span>Max SLA: 24 Hours</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center">
<span className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-sm">Auto-escalates at 20h</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-primary-fixed/20 flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">shield_person</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-primary font-bold">Tier 2 • Executive Governance Sign-Off</span>
<span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Executive Only</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Legal custody record modifications, GES interschool student transfer, staff absence &gt; 2 consecutive days.</p>
<div className="flex items-center gap-space-md mt-2 text-on-surface font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-primary font-semibold"><span className="material-symbols-outlined text-[16px]">how_to_reg</span>Directly to Dr. Elizabeth Appiah (Principal)</span>
<span className="flex items-center gap-1 text-secondary font-bold"><span className="material-symbols-outlined text-[16px]">timer</span>Strict SLA: 4 Hours</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center">
<span className="px-3 py-1 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-medium shadow-sm">Dual Auth Active</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-error-container text-on-error-container flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-error text-on-error flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">gavel</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg font-bold">Emergency Safeguarding &amp; Restraining Injunction Protocol</span>
<span className="px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-[10px] uppercase font-bold tracking-wider">Level-Zero Alert</span>
</div>
<p className="font-body-sm text-body-sm text-on-error-container/90 mt-0.5">Instant biometric gate turnstile freeze, high-court custody dispute notification, unauthorized pickup attempts.</p>
<div className="flex items-center gap-space-md mt-2 font-label-sm text-label-sm font-semibold">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">notifications_paused</span>Automated Immediate Dispatch: Push + SMS to Principal &amp; Chief Security Officer</span>
<span className="flex items-center gap-1 text-error underline"><span className="material-symbols-outlined text-[16px]">bolt</span>SLA: Under 15 Minutes</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end md:self-center">
<span className="px-3 py-1.5 rounded-lg bg-error text-on-error font-label-sm text-label-sm font-bold uppercase tracking-wider shadow-sm animate-pulse">Critical SLA</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-start justify-between pb-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="font-label-lg text-label-lg text-primary uppercase tracking-wider">PANEL D • CURRICULUM ASSESSMENT WEIGHTING (SBA)</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">National GES Standard Formula (Grade 1 through JHS 3)</h2>
</div>
<span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">Sum: 100% Mandatory</span>
</div>

<div className="flex flex-col gap-3">
<div className="w-full h-8 rounded-xl bg-surface-container-highest overflow-hidden flex shadow-inner">
<div className="bg-primary flex items-center justify-center text-on-primary font-label-sm text-label-sm font-bold" style={{"width": "30%"}}>30% Classwork</div>
<div className="bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed font-label-sm text-label-sm font-bold" style={{"width": "30%"}}>30% Mid-Term</div>
<div className="bg-secondary-container flex items-center justify-center text-on-secondary font-label-sm text-label-sm font-bold" style={{"width": "40%"}}>40% Terminal Exam</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-sm">
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Continuous Classwork &amp; Projects</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">30%</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer" max="100" min="0" type="range" value="30"/>
<span className="font-body-sm text-[12px] text-on-surface-variant">Homework, portfolio reviews, weekly quizzes.</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Mid-Term Assessment Tests</span>
<span className="font-headline-sm text-headline-sm text-tertiary font-bold">30%</span>
</div>
<input className="w-full accent-tertiary-container h-2 bg-surface-container rounded-lg cursor-pointer" max="100" min="0" type="range" value="30"/>
<span className="font-body-sm text-[12px] text-on-surface-variant">Uniform school-wide supervised midterm sitting.</span>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Terminal Examination Sitting</span>
<span className="font-headline-sm text-headline-sm text-secondary-container font-bold">40%</span>
</div>
<input className="w-full accent-secondary-container h-2 bg-surface-container rounded-lg cursor-pointer" max="100" min="0" type="range" value="40"/>
<span className="font-body-sm text-[12px] text-on-surface-variant">Formal end-of-term comprehensive papers.</span>
</div>
</div>
</div>
</section>
</div>

<div className="xl:col-span-4 flex flex-col gap-y-space-lg">

<section className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-center gap-2 mb-1">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-lg text-label-lg text-secondary uppercase tracking-wider">PANEL C • CAMPUS ACCESS CONTROL</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Gate Kiosks &amp; Pickup Security</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Enforce child protection mandates at perimeter checkpoints.</p>

<div className="relative overflow-hidden rounded-xl bg-surface-container-high p-space-md mb-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface uppercase font-bold">Main Gate Turnstiles</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">Online &amp; Synced</span>
</div>
<div className="flex items-center gap-3 mt-space-sm">
<span className="material-symbols-outlined text-[32px] text-primary">security_update_good</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Accra Terminal Alpha &amp; Beta</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Firmware: v2.9.1 • Offline Cache OK</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm mb-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase">Staggered Dismissal Slots</span>
<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">child_care</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Early Years (Creche &amp; KG)</span>
<span className="font-body-sm text-label-sm text-on-surface-variant">Escorted to Parent Pavilion</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-primary font-bold">14:30 GMT</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">school</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Basic 1 to JHS 3</span>
<span className="font-body-sm text-label-sm text-on-surface-variant">Main Turnstiles Auto-unlock</span>
</div>
</div>
<span className="font-label-lg text-label-lg text-primary font-bold">15:00 GMT</span>
</div>
</div>

<div className="flex flex-col gap-space-sm mb-space-md">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase">Mandatory Verification Stack</span>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked={true} className="mt-1 w-4 h-4 accent-primary rounded cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Daily Rolling SMS Token PIN</span>
<span className="font-body-sm text-label-sm text-on-surface-variant">6-digit cryptotoken sent to registered guardian phone at 13:30 daily.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked={true} className="mt-1 w-4 h-4 accent-primary rounded cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Officer Photo-Match Attestation</span>
<span className="font-body-sm text-label-sm text-on-surface-variant">Security guard visual confirm via Gate Tablet Camera feed before buzz-in.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked={true} className="mt-1 w-4 h-4 accent-primary rounded cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Biological Parent Biometric Override</span>
<span className="font-body-sm text-label-sm text-on-surface-variant">Enables physical thumbprint scanning if phone battery is exhausted.</span>
</div>
</label>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Kiosk Screen Timeout</span>
<span className="font-body-sm text-label-sm text-on-surface-variant">Purges active student records</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-lowest shadow-sm">
<span className="font-label-md text-label-md text-primary font-bold">90</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">sec</span>
</div>
</div>
</section>

<section className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Cryptographic Attestation</span>
<span className="material-symbols-outlined text-[18px] text-tertiary">fingerprint</span>
</div>
<div className="flex flex-col gap-2 p-space-md rounded-xl bg-surface-container-low">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Dr. Elizabeth Appiah</span>
<span className="font-body-sm text-label-sm text-on-surface-variant">Headmaster or Headteacher / Campus Governance</span>
</div>
</div>
<div className="mt-2 pt-2 flex flex-col gap-1">
<span className="font-label-sm text-[11px] text-on-surface-variant uppercase font-semibold">Active Policy Checksum</span>
<div className="p-2 rounded-lg bg-surface-container-lowest font-mono text-[11px] text-on-surface break-all select-all shadow-inner">
                SHA256: 9b2d8e41f71a093c8d1b32f990a421b44ec94f1c
              </div>
<div className="flex items-center justify-between mt-1 text-on-surface-variant font-label-sm text-[11px]">
<span>Policy Version 4.3</span>
<span>Today, 09:15 GMT</span>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-space-md pt-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Campus: Accra Central</span>
<button className="flex items-center gap-1 text-primary hover:text-primary-container font-label-sm text-label-sm font-bold" type="button">
<span>View Full Ledger</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</section>
</div>
</div>
</div>
</div>

    </>
  );
}
