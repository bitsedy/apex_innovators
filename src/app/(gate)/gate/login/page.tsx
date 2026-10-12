"use client";

import React from "react";
import Link from "next/link";

// Gate Login
export default function LoginPage() {
  return (
    <>
<div className="flex flex-col w-full max-w-7xl mx-auto space-y-space-lg select-none">

<div className="flex flex-wrap items-center justify-between gap-space-sm px-space-md py-space-sm bg-surface-container rounded-lg shadow-sm">
<div className="flex items-center space-x-space-sm">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
</span>
<span className="font-label-md text-label-md text-primary font-bold tracking-wider uppercase">HARDWARE SECURED NODE #04</span>
<span className="text-outline-variant">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">MAC: 7E-44-D2-A1-09-F2</span>
</div>
<div className="flex items-center space-x-space-md">
<div className="flex items-center space-x-1.5 px-2.5 py-1 bg-surface-container-highest rounded-full">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified_user</span>
<span className="font-label-sm text-label-sm text-on-surface">NaSIA/GES v3.2 ENFORCED</span>
</div>
<div className="flex items-center space-x-1.5 text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">timer</span>
<span>IDLE LOCK: <span className="font-mono" id="idle-counter">89s</span></span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1.5 flex">
<div className="w-1/3 bg-[#38BDF8]"></div>
<div className="w-1/3 bg-secondary"></div>
<div className="w-1/3 bg-on-tertiary-container"></div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-2">

<div className="flex items-center space-x-space-md">

<div className="w-16 h-16 rounded-xl bg-surface-container-low flex items-center justify-center p-2 text-primary shadow-sm flex-shrink-0">
<svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 100 100">
<path d="M50 85 C25 85 15 65 15 45 C15 28 28 15 50 15 C72 15 85 28 85 45 C85 65 75 85 50 85 Z" fill="none" opacity="0.15" stroke="currentColor" strokeWidth="2"></path>
<path d="M22 62 C16 48 20 30 35 22 C42 18 52 18 60 22 C75 30 79 48 73 62" stroke="#46a95a" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="50" cy="50" fill="#eab308" r="10"></circle>
<path d="M30 45 C35 40 45 42 55 35 C58 33 64 36 68 40 C63 45 52 46 45 50 Z" fill="#011549"></path>
<path d="M70 55 C65 60 55 58 45 65 C42 67 36 64 32 60 C37 55 48 54 55 50 Z" fill="#011549"></path>
</svg>
</div>
<div>
<div className="flex items-center space-x-2">
<span className="font-display-lg text-headline-xl text-primary font-black tracking-tight leading-none">Carepoint</span>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold uppercase">Gate Node #04</span>
</div>
<div className="font-headline-md text-headline-sm text-on-surface-variant font-bold tracking-normal">Community School</div>
<div className="flex items-center space-x-2 mt-1">
<span className="font-label-sm text-label-sm font-bold tracking-widest text-[#00531f] uppercase bg-surface-container-high px-2 py-0.5 rounded">MIND • HEART • HANDS</span>
<span className="text-outline-variant">•</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Main Pedestrian Turnstile &amp; Perimeter Checkpoint</span>
</div>
</div>
</div>

<div className="flex items-center space-x-space-md bg-surface-container-low px-space-lg py-space-sm rounded-lg self-stretch md:self-auto justify-between">
<div className="text-left">
<span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant tracking-wider block">Assigned Duty Shift</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">Afternoon Dismissal</span>
<span className="font-label-md text-label-md text-secondary block font-semibold">14:30 – 16:30 GMT • High Traffic</span>
</div>
<div className="h-10 w-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">school</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-md text-headline-md text-primary font-bold">Officer On Duty Identification</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tap your profile card below to arm the security terminal</p>
</div>
<span className="font-label-sm text-label-sm px-2.5 py-1 bg-surface-container-high text-on-surface font-semibold rounded-full uppercase">3 Verified On Roster</span>
</div>

<div className="space-y-space-sm" id="officer-list">

<div className="officer-card active cursor-pointer bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all flex items-center justify-between bg-surface-container-low" >
<div className="flex items-center space-x-space-md">
<div className="relative w-16 h-16 rounded-xl overflow-hidden bg-primary-container flex-shrink-0 flex items-center justify-center text-on-primary font-headline-md text-headline-md font-bold">
              ET
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-on-tertiary-container rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center space-x-2">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Officer Emmanuel Tetteh</h3>
<span className="bg-primary text-on-primary font-mono font-label-sm text-label-sm px-2 py-0.5 rounded">#SEC-08</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Head of Perimeter Security • Gate Team A</p>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-0.5 bg-[#DCFCE7] text-[#166534] rounded font-label-sm text-label-sm font-bold uppercase">Signed On Duty: 14:15</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Tier-3 Gate Clearance</span>
</div>
</div>
</div>
<div className="selection-indicator w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">check</span>
</div>
</div>

<div className="officer-card cursor-pointer bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all flex items-center justify-between hover:bg-surface-container-low" >
<div className="flex items-center space-x-space-md">
<div className="relative w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary font-headline-md text-headline-md font-bold">
              GM
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-on-tertiary-container rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center space-x-2">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Officer Gladys Mensah</h3>
<span className="bg-surface-container-highest text-on-surface font-mono font-label-sm text-label-sm px-2 py-0.5 rounded">#SEC-03</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Turnstile &amp; Visitor Enforcement Guard</p>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-0.5 bg-[#DCFCE7] text-[#166534] rounded font-label-sm text-label-sm font-bold uppercase">Signed On Duty: 14:20</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Tier-2 Gate Clearance</span>
</div>
</div>
</div>
<div className="selection-indicator w-8 h-8 rounded-full bg-surface-container-highest text-transparent flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">check</span>
</div>
</div>

<div className="officer-card cursor-pointer bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all flex items-center justify-between hover:bg-surface-container-low" >
<div className="flex items-center space-x-space-md">
<div className="relative w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary font-headline-md text-headline-md font-bold">
              GO
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-on-tertiary-container rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center space-x-2">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Madam Grace Owusu</h3>
<span className="bg-surface-container-highest text-on-surface font-mono font-label-sm text-label-sm px-2 py-0.5 rounded">#ADM-14</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Admissions &amp; Front-Desk Gate Liaison</p>
<div className="flex items-center space-x-2 mt-1">
<span className="px-2 py-0.5 bg-[#DCFCE7] text-[#166534] rounded font-label-sm text-label-sm font-bold uppercase">Signed On Duty: 13:50</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Tier-2 Gate Clearance</span>
</div>
</div>
</div>
<div className="selection-indicator w-8 h-8 rounded-full bg-surface-container-highest text-transparent flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">check</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm mt-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider font-bold text-primary">Academic Levels Dismissal Status</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Gate Departure Sequencing</span>
</div>
<div className="grid grid-cols-4 gap-2">

<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col items-center justify-between text-center relative overflow-hidden">
<div className="w-full h-1 bg-[#38BDF8] rounded-full mb-2"></div>
<span className="material-symbols-outlined text-[24px] text-primary">child_care</span>
<span className="font-label-sm text-label-sm font-bold uppercase mt-1 text-primary">Nursery</span>
<span className="px-1.5 py-0.5 mt-1 bg-surface-container-highest text-on-surface font-label-sm text-label-sm rounded text-[10px] font-bold">RELEASED</span>
</div>

<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col items-center justify-between text-center relative overflow-hidden">
<div className="w-full h-1 bg-on-tertiary-container rounded-full mb-2"></div>
<span className="material-symbols-outlined text-[24px] text-primary">toys</span>
<span className="font-label-sm text-label-sm font-bold uppercase mt-1 text-primary">KG 1 &amp; 2</span>
<span className="px-1.5 py-0.5 mt-1 bg-surface-container-highest text-on-surface font-label-sm text-label-sm rounded text-[10px] font-bold">RELEASED</span>
</div>

<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col items-center justify-between text-center relative overflow-hidden">
<div className="w-full h-1 bg-secondary rounded-full mb-2"></div>
<span className="material-symbols-outlined text-[24px] text-secondary">backpack</span>
<span className="font-label-sm text-label-sm font-bold uppercase mt-1 text-primary">Basic 1-6</span>
<span className="px-1.5 py-0.5 mt-1 bg-error-container text-on-error-container font-label-sm text-label-sm rounded text-[10px] font-bold">BOARDING</span>
</div>

<div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col items-center justify-between text-center relative overflow-hidden">
<div className="w-full h-1 bg-primary-container rounded-full mb-2"></div>
<span className="material-symbols-outlined text-[24px] text-primary">menu_book</span>
<span className="font-label-sm text-label-sm font-bold uppercase mt-1 text-primary">JHS 1-3</span>
<span className="px-1.5 py-0.5 mt-1 bg-surface-container-highest text-on-surface font-label-sm text-label-sm rounded text-[10px] font-bold">IN CLASS</span>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between text-on-surface-variant">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-[20px] text-secondary">shield</span>
<span className="font-body-sm text-body-sm font-semibold">Carepoint Safe-Child Release Policy Active</span>
</div>
<span className="font-label-sm text-label-sm">Turnstiles Armed (4 Lanes Open)</span>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between">
<div>

<div className="bg-primary-container text-on-primary p-space-md rounded-lg flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase font-bold text-on-primary-container tracking-wider block">Authenticating Operator</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-primary" id="active-officer-name">Officer Emmanuel Tetteh</span>
<span className="font-label-md text-label-md text-primary-fixed block font-mono" id="active-officer-badge">#SEC-08 • Perimeter Command</span>
</div>
<span className="material-symbols-outlined text-[32px] text-primary-fixed">lock_open</span>
</div>

<div className="cursor-pointer group relative bg-surface-container-low hover:bg-surface-container rounded-lg p-space-md text-center transition-all mb-space-md" >
<div className="flex items-center justify-center space-x-2 text-primary">
<span className="material-symbols-outlined text-[28px] animate-pulse">contactless</span>
<span className="font-headline-sm text-headline-sm font-bold">Tap Staff RFID Duty Card</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Or enter authorized 4-digit security PIN below</p>
</div>

<div className="flex flex-col items-center mb-space-md">
<div className="flex space-x-3 mb-2" id="pin-dots">
<div className="w-4 h-4 rounded-full bg-surface-container-highest transition-all" id="dot-0"></div>
<div className="w-4 h-4 rounded-full bg-surface-container-highest transition-all" id="dot-1"></div>
<div className="w-4 h-4 rounded-full bg-surface-container-highest transition-all" id="dot-2"></div>
<div className="w-4 h-4 rounded-full bg-surface-container-highest transition-all" id="dot-3"></div>
</div>
<span className="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase tracking-wider" id="pin-status-text">Enter 4-Digit Security PIN</span>
</div>

<div className="grid grid-cols-3 gap-2.5">
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >1</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >2</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >3</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >4</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >5</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >6</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >7</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >8</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >9</button>
<button className="h-14 rounded-lg bg-surface-variant hover:bg-outline-variant text-on-surface-variant active:scale-95 font-label-lg text-label-lg font-bold uppercase transition-all shadow-sm flex items-center justify-center" >
<span className="material-symbols-outlined text-[22px]">backspace</span>
</button>
<button className="h-14 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-95 text-primary font-headline-md text-headline-md font-bold transition-all shadow-sm flex items-center justify-center" >0</button>
<button className="h-14 rounded-lg bg-on-tertiary-container hover:bg-tertiary active:scale-95 text-on-secondary font-headline-sm text-headline-sm font-bold uppercase transition-all shadow-sm flex items-center justify-center space-x-1" >
<span className="material-symbols-outlined text-[20px]">login</span>
<span>ENTER</span>
</button>
</div>
</div>

<div className="mt-space-md pt-space-sm flex items-center justify-between gap-space-sm">
<button className="flex-1 py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-primary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors" >
<span className="material-symbols-outlined text-[18px]">support_agent</span>
<span>Admin Bypass</span>
</button>
<button className="flex-1 py-2.5 px-3 bg-error-container hover:bg-secondary text-on-error-container hover:text-on-secondary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors" >
<span className="material-symbols-outlined text-[18px]">warning</span>
<span>Emergency Unlock</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">directions_walk</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm font-bold text-primary">342 / 418</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">Students Dispatched</span>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">badge</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm font-bold text-primary">84 Verified</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">Guardian Pick-up Cards</span>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">bus_alert</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm font-bold text-on-tertiary-container">4 Active</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">School Buses In Bay</span>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm font-bold text-primary">Zero Incident</span>
<span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-medium">Safety Status</span>
</div>
</div>
</div>
</div>

    </>
  );
}
