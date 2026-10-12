"use client";

import React from "react";
import Link from "next/link";

// Staff Login
export default function LoginPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="bg-surface-container-lowest rounded-xl shadow-xl p-space-md sm:p-space-lg flex flex-col gap-space-lg">

<div className="flex flex-col gap-0.5 rounded-full overflow-hidden">
<div className="h-1 bg-sky-400"></div>
<div className="h-1 bg-secondary-container"></div>
<div className="h-1 bg-tertiary-container"></div>
</div>

<header className="flex flex-col items-center text-center gap-space-xs">

<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shadow-sm relative mb-space-xs">
<svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 100 100">

<path d="M 30 75 C 20 65, 18 45, 30 30" stroke="#1b7a42" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="23" cy="42" fill="#1b7a42" r="3"></circle>
<circle cx="22" cy="55" fill="#1b7a42" r="3"></circle>
<circle cx="27" cy="67" fill="#1b7a42" r="3"></circle>

<path d="M 70 75 C 80 65, 82 45, 70 30" stroke="#1b7a42" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="77" cy="42" fill="#1b7a42" r="3"></circle>
<circle cx="78" cy="55" fill="#1b7a42" r="3"></circle>
<circle cx="73" cy="67" fill="#1b7a42" r="3"></circle>

<path d="M 38 46 C 44 38, 56 38, 62 44 C 58 47, 50 47, 44 50 Z" fill="#2d3748"></path>
<path d="M 62 54 C 56 62, 44 62, 38 56 C 42 53, 50 53, 56 50 Z" fill="#1f2937"></path>
<circle cx="50" cy="50" fill="#f59e0b" r="5"></circle>
</svg>
<span className="absolute -bottom-1 px-2 py-0.5 rounded-full bg-tertiary-container text-white text-[9px] font-bold tracking-wider uppercase">
          GH
        </span>
</div>

<div className="flex flex-col items-center">
<div className="flex items-center gap-1">
<span className="font-headline-lg text-headline-lg font-extrabold text-secondary tracking-tight">Care</span>
<span className="font-headline-lg text-headline-lg font-extrabold text-primary tracking-tight">point</span>
</div>
<p className="font-label-lg text-label-lg font-bold text-on-surface tracking-wide uppercase">Community School</p>
</div>

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase font-bold tracking-widest mt-1">
<span className="text-tertiary-container font-extrabold">Mind</span>
<span className="text-secondary-container">•</span>
<span className="text-secondary-container font-extrabold">Heart</span>
<span className="text-secondary-container">•</span>
<span className="text-primary font-extrabold">Hands</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Faculty &amp; Educator Secure Gateway</p>
</header>

<section className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-2">

<div className="relative flex h-3.5 w-3.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75"></span>
<span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600"></span>
</div>
<span className="font-label-md text-label-md uppercase text-emerald-800 tracking-wider">Perimeter Verified</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">my_location</span>
          ±12m GPS
        </span>
</div>
<div>
<p className="font-headline-sm text-headline-sm text-primary font-bold">Carepoint Main Campus</p>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-base text-secondary-container">domain</span>
          Faculty Quad &amp; Early Years Wing (Accra Central)
        </p>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-700">check_circle</span>
<span className="font-body-sm text-body-sm font-semibold">Ready for Morning Clock-in</span>
</div>
<span className="font-label-md text-label-md font-bold text-primary tabular-nums" id="live-time">07:45:00 GMT</span>
</div>

<button className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-primary hover:bg-surface-container transition-colors font-label-md text-label-md font-semibold" type="button">
<span className="material-symbols-outlined text-base">contactless</span>
        Scan Campus NFC Badge or Duty QR
      </button>
</section>

<form className="flex flex-col gap-space-md" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Academic Division / Department</label>
<div className="grid grid-cols-3 gap-1.5" role="radiogroup">
<button className="role-btn py-2 px-1 text-center rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm transition-all" data-role="primary"  type="button">
            Nursery / Basic
          </button>
<button className="role-btn py-2 px-1 text-center rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-all" data-role="jhs"  type="button">
            Junior High
          </button>
<button className="role-btn py-2 px-1 text-center rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-all" data-role="admin"  type="button">
            Admin &amp; Health
          </button>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-on-surface font-bold" htmlFor="staff-id">
            Staff ID or Official Email <span className="text-secondary-container">*</span>
</label>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">e.g. STF-2024-042</span>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-xl pointer-events-none">badge</span>
<input className="w-full bg-surface-container-low pl-10 pr-4 py-2.5 rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="staff-id" placeholder="username@carepoint.edu.gh" required={true} type="text" value="b.abbey@carepoint.edu.gh"/>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-on-surface font-bold" htmlFor="staff-password">
            Portal Password <span className="text-secondary-container">*</span>
</label>
<a className="font-label-sm text-label-sm text-primary font-bold hover:underline" href="#">Forgot Code?</a>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-xl pointer-events-none">lock</span>
<input className="w-full bg-surface-container-low pl-10 pr-10 py-2.5 rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="staff-password" placeholder="Enter institutional credentials" required={true} type="password" value="••••••••••••"/>
<button aria-label="Toggle password visibility" className="absolute right-3 text-outline hover:text-on-surface focus:outline-none"  type="button">
<span className="material-symbols-outlined text-xl" id="eye-icon">visibility</span>
</button>
</div>
</div>

<label className="flex items-center gap-2.5 cursor-pointer mt-0.5">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Keep authenticated for today's active shift</span>
</label>

<button className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wide flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]" id="submit-btn" type="submit">
<span className="material-symbols-outlined text-xl">how_to_reg</span>
<span>Authorize &amp; Clock-In for Duty</span>
</button>
</form>

<div className="rounded-xl p-space-sm bg-surface-container flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary-container text-xl mt-0.5">help_center</span>
<div className="flex flex-col gap-0.5">
<p className="font-label-md text-label-md font-bold text-on-surface">First Term or Shift Support?</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          New faculty credentials are issued by the Secretariat. For biometric reset or roster reassignment, contact Ext. 104 (Security) or Ext. 108 (IT Bay).
        </p>
</div>
</div>

<footer className="pt-space-xs flex flex-col items-center gap-2 text-center">
<div className="flex flex-wrap items-center justify-center gap-2">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-semibold">
<span className="material-symbols-outlined text-sm text-tertiary-container">verified_user</span>
          GES &amp; NaSIA Accredited
        </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant font-semibold">
<span className="material-symbols-outlined text-sm text-primary">security</span>
          256-Bit SSL Encrypted
        </span>
</div>
<p className="font-label-sm text-label-sm text-outline">
        Carepoint Community School Attendance System © 2024
      </p>
</footer>
</div>
</div>

    </>
  );
}
