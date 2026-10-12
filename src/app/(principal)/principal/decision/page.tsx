"use client";

import React from "react";
import Link from "next/link";

// Principal Decision Studio
export default function DecisionPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="flex flex-col gap-space-sm mb-space-md">
<div className="flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-sm">
<a className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span>Principal Inbox</span>
</a>
<span className="font-label-sm text-label-sm text-outline">/</span>
<div className="flex items-center gap-2 px-space-sm py-1 rounded-md bg-secondary-container/10 text-secondary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span className="tracking-wide">CRITICAL DISMISSAL CUT-OFF • 15:30 GMT</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-2 px-space-md py-1.5 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">timer</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Statutory Cut-Off</span>
<span className="font-label-lg text-label-lg text-secondary leading-tight" id="sla-countdown">17:42 REMAINING</span>
</div>
</div>
<div className="flex items-center gap-2 px-space-md py-1.5 rounded-xl bg-primary-container text-on-primary shadow-sm">
<span className="material-symbols-outlined text-[18px]">shield</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary-fixed-dim leading-none">Accreditation Protocol</span>
<span className="font-label-lg text-label-lg text-on-primary leading-tight">NaSIA Tier-4 Statutory</span>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[32px]">shield_person</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-3 flex-wrap">
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">DOSSIER #SAF-ACC-2026-08</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary font-label-sm text-label-sm font-semibold">EMERGENCY GATE INTERLOCK ACTIVE</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">High Court Injunction Logged</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">Perimeter Gate Hold: Student Kofi Mensah (#24-089)</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Class: Basic 2 Sunflower • Form Tutor: Mrs. Beatrice Abbey • Facility: Carepoint Main Campus North Gate Turnstile A</p>
</div>
</div>
<div className="flex items-center gap-3 lg:border-l lg:border-surface-variant lg:pl-space-lg shrink-0">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm"  type="button">
<span className="material-symbols-outlined text-secondary text-[18px]">local_police</span>
<span>Police Patrol Unit</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm"  type="button">
<span className="material-symbols-outlined text-primary text-[18px]">deskphone</span>
<span>Room B-04 Intercom</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-lg">

<div className="xl:col-span-7 flex flex-col gap-space-md">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">history_edu</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Forensic Incident Chronology</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Synchronized GPS-NTP Timebase</span>
</div>

<div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">

<div className="relative">
<div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></div>
<div className="flex flex-col bg-surface-container-low/70 p-space-md rounded-xl">
<div className="flex items-center justify-between flex-wrap gap-2 mb-1">
<span className="font-label-md text-label-md text-secondary">14:18:22 GMT • Gate Interlock Engaged</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">ALARM LEVEL 3</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Unauthorized collector identified as Kwame Antwi (claiming paternal uncle status) presented clone NFC Parent Collector Card at Turnstile Gate A.</p>
<div className="mt-2 text-on-surface-variant font-label-sm text-label-sm flex items-center gap-3">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">shield</span> Officer Emmanuel Tetteh (#SEC-08)</span>
<span>•</span>
<span>Biometric barrier locked down automatically</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
<div className="flex flex-col bg-surface-container-low/70 p-space-md rounded-xl">
<div className="flex items-center justify-between flex-wrap gap-2 mb-1">
<span className="font-label-md text-label-md text-primary">14:20:05 GMT • Child Safety Care</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">PROTOCOL ALPHA-4</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">Form Tutor Mrs. Beatrice Abbey quietly isolated Student Kofi Mensah from common dismissal courtyard, escorting him via secure Corridor D directly into Safe Room B-04 under executive observation.</p>
</div>
</div>

<div className="relative">
<div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-tertiary-container ring-4 ring-surface-container-lowest"></div>
<div className="flex flex-col bg-surface-container-low/70 p-space-md rounded-xl">
<div className="flex items-center justify-between flex-wrap gap-2 mb-1">
<span className="font-label-md text-label-md text-on-tertiary-container">14:24:40 GMT • Primary Guardian Direct Contact</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">VERIFIED NEGATIVE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">Mother &amp; Sole Legal Custodian Dr. Abena Mensah reached via encrypted SMS emergency bridge. Confirmed zero authorization granted to Kwame Antwi or any third party for today's pickup.</p>
<div className="mt-2 bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Encrypted OTP hash verified: <code>SHA-8841-B</code> • Guardian ETA to campus: 25 mins</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-secondary-container ring-4 ring-surface-container-lowest"></div>
<div className="flex flex-col bg-surface-container-low/70 p-space-md rounded-xl">
<div className="flex items-center justify-between flex-wrap gap-2 mb-1">
<span className="font-label-md text-label-md text-secondary-container">14:26:15 GMT • High Court Restraining Order Synchronized</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">STATUTORY INJUNCTION</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">Accra High Court Family Division Custody Decree #GAR/FCT/881 re-checked against Judicial Service API. Injunction strictly bars paternal relatives within 500 meters of registered minors during term time.</p>
</div>
</div>
</div>

<div className="mt-space-lg pt-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block mb-3">Evidentiary Attachments &amp; Biometrics (3)</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

<div className="rounded-xl overflow-hidden bg-surface-container flex flex-col group cursor-pointer shadow-sm">
<div className="relative h-28 w-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="High contrast security turnstile CCTV surveillance frame showing an adult male at a modern school gate interlock with digital biometric timestamp display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyOePXW02cFUDk-Rp__U6EerEeqki_7Ab14OkHhw9IGILhsvDGjwf5GdgU4jZTXm58eRtIEW7OrSuZS3lKSwrl9sxxRP12xhjNSgzAwapJezYv32qd_DzS2VaJps7s0fnrrn53PHsn1zTZMJ6AhZM0S1EYH7HQB03eBBlq0ogCihwS6lCYd2Q0pJF_6Ik2XbcDLlxk5k5wezV8XEv63osjtsyxe99dXb9w8l79XiaKGRzWog41T2sl5w"/>
<span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm">CAM-04A 14:18:19</span>
</div>
<div className="p-2.5 flex flex-col bg-surface-container-lowest">
<span className="font-label-sm text-label-sm text-on-surface font-bold truncate">Turnstile-A Snapshot</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Collector: Kwame Antwi</span>
</div>
</div>

<div className="rounded-xl overflow-hidden bg-surface-container-lowest p-3 flex flex-col justify-between shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[28px]">gavel</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">Custody Order</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">#GAR/FCT/881.pdf</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">1.8 MB SEALED</span>
<span className="material-symbols-outlined text-[16px] text-primary">visibility</span>
</div>
</div>

<div className="rounded-xl overflow-hidden bg-surface-container-lowest p-3 flex flex-col justify-between shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[28px]">badge</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold">NIA Match Result</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">GHA-718294019-2</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">ID VERIFIED</span>
<span className="material-symbols-outlined text-[16px] text-primary">open_in_new</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-space-md">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
<div className="flex items-center justify-between pb-space-xs mb-space-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Live Student Monitor</h2>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">CALM &amp; PROTECTED</span>
</div>
<div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low mb-space-sm">
<div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Official school portrait photo of a cheerful 7-year-old West African primary school boy wearing a navy blue collared uniform against a bright backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfCC2ZRCY21B_HVW-mQWXhfwgWQ4iJ23uNTbW0jqobJQfIIv7Hjh1L7Xcd2CTlM_ogi86zTrp5IhOpgmd5aLpZpQMSMaR9jkDDPKc0kArAmFk8oaVOLOkRljsoA_acntf4r961WF4kxMAPNpqw8R5cw8rMD9L42FncIm7NSjYuHjcLVJVpH2wrwonFSrnCof1ugZ9KIa4VZqu9t8rK0jGk5yymd5_JH3Ou96JjX2pwDA0m70lcOiSVOA"/>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Kofi Mensah</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">ID: #24-089 • Age 7 • Basic 2 (Sunflower)</span>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">location_on</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Safe Room B-04 (Admin Wing)</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-space-sm">
<div className="p-space-sm rounded-lg bg-surface-container">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Supervising Officer</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Mrs. Beatrice Abbey</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block text-[11px]">Class Teacher present</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Welfare &amp; Nourishment</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Provisioned &amp; Hydrated</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block text-[11px]">Water &amp; biscuit served 14:28</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">videocam</span>
<span>Room B-04 CCTV Stream Feed</span>
</span>
<span className="font-semibold text-primary">SECURE 1080P ACTIVE</span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col flex-1">
<div className="flex items-center gap-2 mb-space-sm">
<span className="material-symbols-outlined text-primary-container text-[22px]">balance</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Legal Counsel Assessment</h2>
</div>
<div className="p-space-md rounded-xl bg-primary-container text-on-primary mb-space-md shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">Campus Legal Opinion • Barrister K. Owusu-Ansah</span>
<span className="px-2 py-0.5 rounded bg-on-primary-fixed-variant text-on-primary font-label-sm text-label-sm">NaSIA Notice Compliant</span>
</div>
<p className="font-body-sm text-body-sm text-on-primary leading-relaxed">
            "Under Section 4.2 of the Ghana Education Act 778 and the active High Court decree #GAR/FCT/881, the school retains paramount statutory protective custody in loco parentis. Any physical surrender to Mr. Antwi constitutes direct contempt and civil liability. <strong>Recommend upholding gate lockdown with safe Ghana Police Service perimeter handover."</strong>
</p>
</div>

<div className="space-y-2.5">
<div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Ghana Children's Act (Act 560 §6)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Prioritizing best welfare and physical security of the child.</span>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">National Schools Inspectorate Authority (NaSIA) Safeguard standard 14.B</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Mandatory executive signing by Headmistress before custodial modification.</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm mb-space-lg">
<div className="flex flex-col lg:flex-row lg:items-center justify-between pb-space-md mb-space-lg gap-space-sm border-b border-surface-container">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Executive Statutory Order Determination</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Carepoint Headmistress Sovereign Jurisdiction • Non-Revisable Audit Entry</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Biometric Signer Key:</span>
<code className="px-2 py-1 rounded bg-surface-container font-mono text-[11px] text-primary font-bold">#CP-EX-4019 (RSA-4096-SHA256)</code>
</div>
</div>
<form className="flex flex-col gap-space-lg" id="executive-decision-form" onSubmit={(e) => e.preventDefault()}>

<div>
<label className="font-label-lg text-label-lg text-on-surface mb-space-sm block">Select Binding Statutory Course of Action</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<label className="relative flex flex-col p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all cursor-pointer shadow-sm group">
<input defaultChecked={true} className="peer sr-only" name="executive_action" type="radio" value="uphold_lockdown"/>
<div className="absolute inset-0 rounded-xl pointer-events-none transition-all peer-checked:bg-primary-container/[0.03]"></div>
<div className="flex items-start justify-between mb-2">
<span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">RECOMMENDED</span>
<div className="w-5 h-5 rounded-full bg-surface-container-high peer-checked:bg-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-on-primary text-[14px]">check</span>
</div>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface mb-1">Option 1: Uphold Gate Lockdown &amp; Dispatch Police Escort</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Maintain turnstile physical lock. Request GPS perimeter patrol unit to safely interview Kwame Antwi. Keep Child in Room B-04 until Dr. Abena Mensah arrives.</p>
</label>

<label className="relative flex flex-col p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all cursor-pointer shadow-sm group">
<input className="peer sr-only" name="executive_action" type="radio" value="conditional_parent"/>
<div className="absolute inset-0 rounded-xl pointer-events-none transition-all peer-checked:bg-primary-container/[0.03]"></div>
<div className="flex items-start justify-between mb-2">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">CONDITIONAL</span>
<div className="w-5 h-5 rounded-full bg-surface-container-high peer-checked:bg-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-on-primary text-[14px]">check</span>
</div>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface mb-1">Option 2: Primary Parent In-Person Verification Only</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bar any third-party interaction. Keep child safe until primary guardian Dr. Abena Mensah completes direct fingerprint verification at Gate Guard Station.</p>
</label>

<label className="relative flex flex-col p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all cursor-pointer shadow-sm group">
<input className="peer sr-only" name="executive_action" type="radio" value="social_welfare"/>
<div className="absolute inset-0 rounded-xl pointer-events-none transition-all peer-checked:bg-primary-container/[0.03]"></div>
<div className="flex items-start justify-between mb-2">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">INTER-AGENCY</span>
<div className="w-5 h-5 rounded-full bg-surface-container-high peer-checked:bg-primary flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-on-primary text-[14px]">check</span>
</div>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface mb-1">Option 3: Transfer to Accra Social Welfare Liaison</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Escalate family dispute to Accra Metropolitan Social Welfare Dept liaison officer on standby. Formal child protection transfer protocols engage.</p>
</label>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-lg text-label-lg text-on-surface flex items-center gap-1.5" htmlFor="executive-justification">
<span>Mandatory Executive Statutory Justification</span>
<span className="text-secondary">*</span>
</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Permanent Audit Log • Immutable under NaSIA §14.B</span>
</div>
<textarea className="w-full p-space-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner resize-none" id="executive-justification" rows={3}>Exercising statutory protective prerogative under Ghana Education Act 778 §4.2 and in compliance with Accra High Court Family Division decree #GAR/FCT/881. Student Kofi Mensah (#24-089) shall not be released to Mr. Kwame Antwi. Physical turnstile lockdown remains locked. Ghana Police Liaison dispatched to safely manage perimeter while child remains secure in Safe Room B-04 awaiting registered primary guardian Dr. Abena Mensah.</textarea>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
<span className="material-symbols-outlined text-[28px]">fingerprint</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Dr. Elizabeth Appiah, PhD, FGA</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Headmistress &amp; Principal Authority • Carepoint Schools</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">Biometric Authenticator Active (Local Token Synced)</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-md flex-wrap">
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer" id="chk-counsel" type="checkbox"/>
<span className="font-label-sm text-label-sm text-on-surface">Legal counsel reviewed</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer" id="chk-parent" type="checkbox"/>
<span className="font-label-sm text-label-sm text-on-surface">Primary guardian SMS acknowledged</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer" id="chk-nasia" type="checkbox"/>
<span className="font-label-sm text-label-sm text-on-surface">NaSIA protocol locked</span>
</label>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
<span>Decision becomes irrevocable upon cryptographic execution timestamp.</span>
</div>
<div className="flex items-center gap-space-sm flex-wrap w-full sm:w-auto justify-end">
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-space-md py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm"  type="button">
<span className="material-symbols-outlined text-[18px]">sms</span>
<span>Dispatch SMS Notice to Guardians</span>
</button>
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-space-lg py-3 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container transition-all shadow-md font-label-lg text-label-lg" id="btn-execute" type="submit">
<span className="material-symbols-outlined text-[20px]">encrypted</span>
<span>EXECUTE &amp; IMMUTABLY SEAL ORDER</span>
</button>
</div>
</div>
</form>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant">
<div className="flex items-center gap-2 font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary">security_update_good</span>
<span>Accra Circuit Central Dispatch Connected: Case #SAF-ACC-2026-08 Ledger Hash: <code>0x981F...2D90</code></span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm">
<span>Turnstile A Gate Status: <strong className="text-secondary">HARD INTERLOCK</strong></span>
<span>•</span>
<span>Safe Room B-04 Intercom: <strong className="text-on-tertiary-container">STREAMING</strong></span>
</div>
</div>
</div>

    </>
  );
}
