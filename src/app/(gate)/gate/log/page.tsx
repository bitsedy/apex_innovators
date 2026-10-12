"use client";

import React from "react";
import Link from "next/link";

// Gate Log
export default function LogPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="w-full flex h-1.5 shadow-sm">
<div className="flex-1 bg-primary-fixed-dim"></div>
<div className="flex-1 bg-secondary"></div>
<div className="flex-1 bg-tertiary-fixed-dim"></div>
</div>

<div className="w-full px-margin py-space-md space-y-space-md">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="space-y-0.5 pl-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Completed Releases</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary leading-none" id="kpi-completed">184</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold flex items-center">
<span className="material-symbols-outlined text-sm">arrow_upward</span>54.1%
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Target cap: 340 students</p>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings": "'FILL' 1"}}>how_to_reg</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
<div className="space-y-0.5 pl-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">In Class / Staging</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-secondary leading-none">156</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Active Queue</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Awaiting guardian check-in</p>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-2xl">pending_actions</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-surface-tint"></div>
<div className="space-y-0.5 pl-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Avg Check-in Pace</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary leading-none">14.2<span className="text-headline-sm font-normal text-on-surface-variant ml-0.5">s</span></span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold flex items-center">
<span className="material-symbols-outlined text-sm">speed</span>Fast
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ghana NaSIA SLA &lt; 30s</p>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">timer</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-fixed-dim"></div>
<div className="space-y-0.5 pl-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Gate Safety Status</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary leading-none">0</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold uppercase tracking-wide">Clean Gate</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">0 Intercepts / 0 Flagged IDs</p>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings": "'FILL' 1"}}>verified_user</span>
</div>
</div>
</div>

<div className="w-full bg-primary-container text-on-secondary-container px-space-md py-space-sm rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs bg-surface-container-lowest/15 px-2.5 py-1 rounded-lg">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="font-label-sm text-label-sm tracking-wider uppercase text-tertiary-fixed font-bold">Cloud Webhook: Online</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-base text-primary-fixed-dim">sync_alt</span>
<span>Last live broadcast: <strong className="text-on-primary">15:23:41 GMT</strong> (Latency 62ms)</span>
</div>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm">
<span className="text-primary-fixed-dim hidden xl:inline">SYNCED WITH: HEADMISTRESS PORTAL • TEACHER CLASS LOGGERS • TWILIO SMS GATEWAY</span>
<button className="px-space-sm py-1 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high transition-colors font-label-sm text-label-sm flex items-center gap-1 shadow-sm"  type="button">
<span className="material-symbols-outlined text-sm">sync</span>
<span>Force Refresh</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">

<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-xl">search</span>
</div>
<input className="w-full pl-11 pr-10 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all" id="searchInput"  placeholder="Search by Child Name, Student ID, Guardian Name, or SMS Token Code..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">⌘K</span>
</div>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md transition-colors flex items-center gap-1.5 shadow-sm"  type="button">
<span className="material-symbols-outlined text-lg">print</span>
<span>Print Shift Manifest</span>
</button>
<button className="px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-sm"  type="button">
<span className="material-symbols-outlined text-lg">ios_share</span>
<span>Export CSV</span>
</button>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none text-nowrap">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-2 shrink-0">Academic Tier:</span>
<button className="filter-tab px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-primary text-on-primary shadow-sm transition-colors"  type="button">
          All Today (184)
        </button>
<button className="filter-tab px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"  type="button">
          Basic School (92)
        </button>
<button className="filter-tab px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"  type="button">
          Kindergarten (54)
        </button>
<button className="filter-tab px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"  type="button">
          Nursery &amp; Creche (38)
        </button>
<button className="filter-tab px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-secondary-fixed text-on-secondary-fixed-variant hover:bg-secondary-fixed-dim transition-colors flex items-center gap-1"  type="button">
<span className="material-symbols-outlined text-sm">flag</span>
<span>Exceptions / Dual Pickups (2)</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">

<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-xl">table_chart</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Live Turnstile &amp; Gate Activity Stream</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">Shift: 13:00 - 16:30 GMT</span>
</div>
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span> Auto-polling (Every 5s)
          </span>
</div>
</div>

<div className="overflow-x-auto w-full">
<table className="w-full text-left font-body-sm text-body-sm" id="manifestTable">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-space-md" scope="col">Time (GMT)</th>
<th className="py-3 px-space-md" scope="col">Student Details</th>
<th className="py-3 px-space-md" scope="col">Authorized Guardian</th>
<th className="py-3 px-space-md" scope="col">Auth Method</th>
<th className="py-3 px-space-md" scope="col">Station Point</th>
<th className="py-3 px-space-md" scope="col">Attending Officer</th>
<th className="py-3 px-space-md" scope="col">Dispatch Status</th>
<th className="py-3 px-space-md text-right" scope="col">Audit Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container text-on-surface" id="tableBody">

<tr className="hover:bg-surface-container-low/60 transition-colors log-row" data-division="BASIC" data-search="kofi mensah basic 2 sunflower dr. nana mensah father turnstile a sec-08">
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span className="font-label-md text-label-md text-primary font-bold">15:22:18</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">1 min ago</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-sm shrink-0">
                    KM
                  </div>
<div>
<div className="font-headline-sm text-body-md font-bold text-primary flex items-center gap-1.5">
<span>Kofi Mensah</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">#CP-2204</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
<span>Basic 2 Sunflower</span>
<span>• Room 104</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photo of an African male guardian in formal Ghanaian attire with eyeglasses smiling warmly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8rQ0XC526mfwMP0-XaBP7KuwW7KtPXa8S3rIM6MlsKnq6DH3N3QLsWmhnLNaGxyrGK3aAtBpg2fdMftB-RbKf1WKN9NoynICx3vZV-UOMjFpfG-2rSOgtCnX-mHbUZSsfR6Ld0bgqcwvWN_poc0HCDLGGYOmwdNLLQEHb6_YVZ_k9ZuTc5rQ-E3GS0RNH9iyPs5mUUxYxetSyzIwi9EJLCrgENSldrXVDQc7qKS3n6k0lr4Iwk5RudQ"/>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Dr. Nana Mensah</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary Guardian (Father)</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-sm text-on-tertiary-container">qr_code_2</span>
<span>2FA QR + PIN Verified</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Turnstile Gate A</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base text-primary">badge</span>
<span>Off. E. Tetteh (SEC-08)</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold w-fit">
<span className="material-symbols-outlined text-xs">check_circle</span> Released
                  </span>
<span className="font-label-sm text-label-sm text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sms</span> SMS Delivered
                  </span>
</div>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"  type="button">
<span className="material-symbols-outlined text-lg">receipt_long</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors log-row" data-division="BASIC" data-search="ama boateng basic 2 sunflower mrs. grace boateng mother gate 1 pedestrian sec-08">
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-surface-dim"></span>
<span className="font-label-md text-label-md text-primary font-bold">15:20:05</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">3 mins ago</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-sm shrink-0">
                    AB
                  </div>
<div>
<div className="font-headline-sm text-body-md font-bold text-primary flex items-center gap-1.5">
<span>Ama Boateng</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">#CP-2189</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
<span>Basic 2 Sunflower</span>
<span>• Room 104</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young Ghanaian businesswoman mother wearing colorful Kente hairwrap" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYFLdkOolDOyu0icNNFTue4ts3cqBCNcx9WbJ0CscmzbsEcTI_vWKitUFVPxciOM-yYhiExomFTVvhjH0mXyDYhxmTUDg046O6KQ8Aka55jkJzX7M741hYibifvTdlv5jGnDu6INCrWEVgGpISUyMWMPEJsOQ_Lkyv-9xkpcL_ZtllW0HkAqRzRlzJHyPIXEziAvNUVRDEmVgxb5Bxz_Yp8-vdIxHEgtRRy0DnDMZw2yWVuNVWaUTtZw"/>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Mrs. Grace Boateng</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary Guardian (Mother)</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-sm text-primary">face</span>
<span>2FA QR + Photo Match</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Gate 1 Pedestrian</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base text-primary">badge</span>
<span>Off. E. Tetteh (SEC-08)</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold w-fit">
<span className="material-symbols-outlined text-xs">check_circle</span> Released
                  </span>
<span className="font-label-sm text-label-sm text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sms</span> SMS Delivered
                  </span>
</div>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"  type="button">
<span className="material-symbols-outlined text-lg">receipt_long</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors log-row" data-division="BASIC" data-search="kwabena osei basic 2 sunflower mr. seth osei father turnstile b sec-03">
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-surface-dim"></span>
<span className="font-label-md text-label-md text-primary font-bold">15:17:42</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">6 mins ago</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm shrink-0">
                    KO
                  </div>
<div>
<div className="font-headline-sm text-body-md font-bold text-primary flex items-center gap-1.5">
<span>Kwabena Osei</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">#CP-2311</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
<span>Basic 2 Sunflower</span>
<span>• Room 104</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photo of a distinguished African father wearing light blue corporate shirt with warm reassuring expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjrxG4shnEMASvWYXO1HGBNzG9xt0zmBN-fhQL_7JgOXImKp7Eso2bk65s9TEDMrIdiViOTpZFYsA5381QERNGwEBpceXpdR1mEDaXn-X_xCiWdSN4TNTZ9xN2z3WHtBaSe8eY0PIg1snov-S76ARS5XH8exMPg74cFaOr3J9pzbVDlHNJ69Q307r7PoQ9c3Xm72Gr9uo5-h7QZQ-pcLoaDShtz1U9t2ltbePa6BfqafdI-emh-2oYrA"/>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Mr. Seth Osei</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary Guardian (Father)</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-sm text-on-tertiary-container">pin</span>
<span>2FA QR + PIN Verified</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Turnstile Gate B</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base text-primary">badge</span>
<span>Off. S. Mensah (SEC-03)</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold w-fit">
<span className="material-symbols-outlined text-xs">check_circle</span> Released
                  </span>
<span className="font-label-sm text-label-sm text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sms</span> SMS Delivered
                  </span>
</div>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"  type="button">
<span className="material-symbols-outlined text-lg">receipt_long</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors log-row" data-division="BASIC" data-search="akosua mensah-bonsu basic 2 nana yaa mensah-bonsu mother turnstile a sec-08 token">
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-surface-dim"></span>
<span className="font-label-md text-label-md text-primary font-bold">15:11:03</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">12 mins ago</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-tint text-on-secondary flex items-center justify-center font-bold text-sm shrink-0">
                    AM
                  </div>
<div>
<div className="font-headline-sm text-body-md font-bold text-primary flex items-center gap-1.5">
<span>Akosua Mensah-Bonsu</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">#CP-2195</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
<span>Basic 2 Orchid</span>
<span>• Room 102</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Close up photograph of a Ghanaian mother wearing glasses and traditional print top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0KbA_pM84Z0txVYioMg4tgTGo9RdGbJmMhKy6T4_-8CU7mqoOPhRnEeDMWpzCMeBEvzP5EH5JHNOiy1yCwLdZOWeUw1uxgcldqfkMUi7fAEnLF6AfG0iWuCxsPCvHdJEd8WuYJjADPYB9BMQx0BZ1lCsgXFbcqpMhY95lX067ed3uWQSIiH7oo4ywlX7nIMXPKW7_YPO8Z4w5wBMaWU7d4JGr4OqZwUjLC9DSy1dmWpuppICEa5gvmQ"/>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Nana Yaa Mensah-Bonsu</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary Guardian (Mother)</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-sm text-secondary">password</span>
<span>2FA OTP Token Code</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Turnstile Gate A</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base text-primary">badge</span>
<span>Off. E. Tetteh (SEC-08)</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold w-fit">
<span className="material-symbols-outlined text-xs">check_circle</span> Released
                  </span>
<span className="font-label-sm text-label-sm text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sms</span> SMS Delivered
                  </span>
</div>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"  type="button">
<span className="material-symbols-outlined text-lg">receipt_long</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors log-row" data-division="FLAGGED" data-search="samuel quaye basic 2 david quaye uncle secondary exception flag gate 1 sec-03">
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-surface-dim"></span>
<span className="font-label-md text-label-md text-primary font-bold">15:04:49</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">19 mins ago</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">
                    SQ
                  </div>
<div>
<div className="font-headline-sm text-body-md font-bold text-primary flex items-center gap-1.5">
<span>Samuel Quaye</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">#CP-2081</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
<span>Basic 2 Jasmine</span>
<span>• Room 103</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photograph of an African male guardian wearing polo shirt with warm demeanor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA78yTYZO1nU7PMLx9xgVF2uV3HHo_23xXGiMCTunQ2pcj9N2afb971WrCyY34xd1uECwioU0X-kJZzTHDZ4n8XgRsEMvg7TaznjPgnu0F6IvKQt1varaY-AZC-F878g90wVOQ1sAlD2eWqzDUx2gNm7OKThB-9AmMPb0isawbPAKLOW4fdTjYfi0zqoxtUa5I1tZ8VDIpjITB4tuh5auUBwOMujGDvoOCXgCqqQxeSuFJAaFLPfRLPTw"/>
<div>
<div className="flex items-center gap-1">
<p className="font-label-md text-label-md text-on-surface font-semibold leading-tight">David Quaye</p>
<span className="px-1.5 py-0.2 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">Proxy</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Uncle (Authorized Secondary)</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-sm text-secondary">verified</span>
<span>2FA QR + Photo Match</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Gate 1 Pedestrian</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base text-primary">badge</span>
<span>Off. S. Mensah (SEC-03)</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold w-fit">
<span className="material-symbols-outlined text-xs">check_circle</span> Released
                  </span>
<span className="font-label-sm text-label-sm text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sms</span> Both Parents Alerted
                  </span>
</div>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"  type="button">
<span className="material-symbols-outlined text-lg">receipt_long</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors log-row" data-division="KINDERGARTEN" data-search="esi agyeman kindergarten 2 kg2 auntie beatrice agyeman turnstile a sec-08">
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-surface-dim"></span>
<span className="font-label-md text-label-md text-primary font-bold">14:58:30</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">25 mins ago</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-sm shrink-0">
                    EA
                  </div>
<div>
<div className="font-headline-sm text-body-md font-bold text-primary flex items-center gap-1.5">
<span>Esi Agyeman</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">#CP-3104</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed inline-block"></span>
<span>Kindergarten 2 (KG-2A)</span>
<span>• Rainbow Block</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photograph of a mature Ghanaian grandmother guardian smiling pleasantly with gold earrings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmrQ9ZeJoub3G0TQ5CWHiDLloZFjzQYuN-H9eXEH3FaET_yr7Tsh5FiiFvQWt1AnTIuWr8zm2JfQN_m4wfU3vjX8lAlYs_pok1Gi-x1x9OWm9WGSC_ZYdLnFT-G6zNIPApYRarkT7fawuFuAxXi0HW8r4LUh_oqAsvKuRaCFP6gKlXM_ULY5U9ZGodvtr6wH9M6C4vgQdF9EAa0vDXprkEBwpM3KqKEu1Q-iI_hxTo-qZAPiimtF8z8w"/>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Beatrice Agyeman</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary Guardian (Grandmother)</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-sm text-on-tertiary-container">contactless</span>
<span>NFC Smart Card + Photo</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Turnstile Gate A</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base text-primary">badge</span>
<span>Off. E. Tetteh (SEC-08)</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold w-fit">
<span className="material-symbols-outlined text-xs">check_circle</span> Released
                  </span>
<span className="font-label-sm text-label-sm text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sms</span> SMS Delivered
                  </span>
</div>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"  type="button">
<span className="material-symbols-outlined text-lg">receipt_long</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors log-row" data-division="NURSERY" data-search="fiifi addo nursery 1 creche yaw addo father car line driveway sec-04">
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-surface-dim"></span>
<span className="font-label-md text-label-md text-primary font-bold">14:45:12</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">38 mins ago</span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center font-bold text-sm shrink-0">
                    FA
                  </div>
<div>
<div className="font-headline-sm text-body-md font-bold text-primary flex items-center gap-1.5">
<span>Fiifi Addo</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">#CP-4019</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
<span>Nursery 1 (Creche Blue)</span>
<span>• Early Nest</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young Ghanaian professional father in business casual attire smiling into the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Y39bTMZ6HVhrs-2UsQ6cUiLfj7UPD4yBw0Ei_uqO3j2wuggmCse20qGRFT9gLlmTCy6FouXwjpLiONEkMEcCvUaE5D2PH-LG4FYK_c_nOBcZ7yu0qzH2qlT3uvmBnjTuagabcDJnXydUapDwXiXI5DGb9W853_qwju7QUu2Vq5epKY9Acf_NuU3cRFEXj8q_x8o9jvoOqCL01hGwKw4RwMUJ9MC4T4FelkCLt6o7b-X7-osC3k8ShQ"/>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Mr. Yaw Addo</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary Guardian (Father)</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-primary">
<span className="material-symbols-outlined text-sm text-primary">directions_car</span>
<span>Vehicle Decal + QR Sync</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface">Driveway Gate 3</span>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base text-primary">badge</span>
<span>Off. K. Arthur (SEC-04)</span>
</div>
</td>
<td className="py-3.5 px-space-md whitespace-nowrap">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold w-fit">
<span className="material-symbols-outlined text-xs">check_circle</span> Released
                  </span>
<span className="font-label-sm text-label-sm text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sms</span> SMS Delivered
                  </span>
</div>
</td>
<td className="py-3.5 px-space-md text-right whitespace-nowrap">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"  type="button">
<span className="material-symbols-outlined text-lg">receipt_long</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-md py-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="text-on-surface-variant font-label-sm text-label-sm">
          Showing <strong>1 - 6</strong> of <strong>184</strong> recorded dismissal operations
        </div>
<div className="flex items-center gap-space-xs">
<button className="px-3 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm opacity-50 cursor-not-allowed" type="button">Previous</button>
<button className="px-3 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold" type="button">1</button>
<button className="px-3 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm" type="button">2</button>
<button className="px-3 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm" type="button">3</button>
<span className="text-outline">...</span>
<button className="px-3 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm" type="button">31</button>
<button className="px-3 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm" type="button">Next</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm transition-opacity" id="auditModal">
<div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">

<div className="bg-primary text-on-primary px-space-md py-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary-fixed text-xl">verified_user</span>
<h3 className="font-headline-sm text-body-md font-bold">Cryptographic Audit Certificate</h3>
</div>
<button className="text-on-primary/80 hover:text-on-primary"  type="button">
<span className="material-symbols-outlined text-xl">close</span>
</button>
</div>
<div className="p-space-md space-y-space-md">
<div className="bg-surface-container-low p-space-sm rounded-xl space-y-1">
<div className="flex justify-between text-xs text-on-surface-variant font-label-sm">
<span>SECURITY TRANSACTION ID:</span>
<span className="font-mono text-primary font-bold">TXN-ACC-202410-8919A</span>
</div>
<div className="flex justify-between text-xs text-on-surface-variant font-label-sm">
<span>NaSIA CAMPUS COMPLIANCE:</span>
<span className="text-on-tertiary-container font-bold">CERTIFIED PASSED</span>
</div>
</div>
<div className="space-y-space-xs font-body-sm text-body-sm">
<div className="flex justify-between py-1">
<span className="text-on-surface-variant">Student:</span>
<span className="font-bold text-primary" id="modalWard">--</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant">Class Room:</span>
<span className="text-on-surface font-medium" id="modalClass">--</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant">Verified Guardian:</span>
<span className="font-bold text-on-surface" id="modalGuardian">--</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant">Authentication Mechanism:</span>
<span className="text-on-surface font-medium" id="modalMethod">--</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant">Gate Point / Officer:</span>
<span className="text-on-surface font-medium" id="modalGate">--</span>
</div>
<div className="flex justify-between py-1">
<span className="text-on-surface-variant">Release Timestamp:</span>
<span className="text-on-surface font-medium" id="modalTime">--</span>
</div>
</div>
<div className="p- space-sm bg-surface-container rounded-xl flex items-center gap-space-sm text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-xl text-primary shrink-0">mark_email_read</span>
<span>Automated parent reassurance SMS sent to +233 (0)24 491 8820. Received acknowledgment code: ACK-200.</span>
</div>
<div className="flex justify-end gap-space-sm pt-2">
<button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md"  type="button">Dismiss</button>
<button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1 shadow-sm"  type="button">
<span className="material-symbols-outlined text-sm">print</span> Print Parent Slip
            </button>
</div>
</div>
</div>
</div>
</div>


</div>
    </>
  );
}
