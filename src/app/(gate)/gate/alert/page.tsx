"use client";

import React from "react";
import Link from "next/link";

// Gate Alert
export default function AlertPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="w-full flex h-1.5">
<div className="w-1/3 bg-secondary-container"></div>
<div className="w-1/3 bg-tertiary-fixed-dim"></div>
<div className="w-1/3 bg-primary-container"></div>
</div>

<div className="w-full bg-secondary text-on-secondary px-margin py-space-md shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md animate-pulse">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-secondary flex items-center justify-center flex-shrink-0 shadow-sm">
<span className="material-symbols-outlined text-3xl font-bold" style={{"fontVariationSettings": "'FILL' 1"}}>emergency_home</span>
</div>
<div>
<div className="flex items-center gap-space-sm flex-wrap">
<span className="bg-surface-container-lowest text-secondary font-label-sm text-label-sm uppercase px-2.5 py-0.5 rounded-full font-extrabold tracking-widest">CRITICAL GATE HOLD</span>
<span className="font-label-md text-label-md tracking-wider opacity-90 uppercase">Ghana NaSIA Child Safeguarding Protocol §4.2</span>
</div>
<p className="font-headline-md text-headline-md mt-0.5 leading-snug">DISMISSAL HALTED FOR STUDENT #24-089 (KOFI MENSAH) — TURNSTILE A LOCKED</p>
</div>
</div>
<div className="flex items-center gap-space-sm self-end md:self-center bg-secondary-container px-space-md py-space-xs rounded-lg flex-shrink-0">
<span className="material-symbols-outlined text-on-secondary-container animate-spin">sync_lock</span>
<div className="text-left font-label-md text-label-md">
<span className="block text-on-secondary-container font-extrabold">AUTOMATIC HARDWARE INTERLOCK</span>
<span className="text-on-secondary-container opacity-80 text-xs">Turnstile A-01: Magnetic Bolt Engaged</span>
</div>
</div>
</div>

<div className="w-full bg-error-container text-on-error-container px-margin py-space-sm shadow-sm flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-sm font-label-md text-label-md">
<span className="material-symbols-outlined text-base">report</span>
<span><strong>INCIDENT DIAGNOSIS:</strong> Identity Mismatch &amp; Unregistered Collector presented token #CP-9901 without One-Time Emergency Authorization Passcode (OTP).</span>
</div>
<div className="font-label-sm text-label-sm uppercase tracking-wider bg-surface-container-lowest/80 text-error px-2 py-0.5 rounded-full font-bold">
      Terminal: TURNSTILE_A_KIOSK_01 • Status: ESCALATED
    </div>
</div>

<div className="w-full px-margin py-space-lg flex flex-col gap-space-lg">

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-stretch">

<button className="md:col-span-6 lg:col-span-5 bg-secondary hover:bg-secondary-container text-on-secondary p-space-md rounded-xl shadow-lg transition-all flex items-center justify-between group active:scale-[0.99] text-left" id="emergencyCallBtn"  type="button">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-full bg-surface-container-lowest text-secondary flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-3xl animate-bounce">phone_in_talk</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-bright/90">DIRECT HOTLINE DISPATCH</span>
</div>
<p className="font-headline-sm text-headline-sm leading-tight text-surface-bright">CALL CAMPUS HEADMISTRESS &amp; CHIEF SECURITY</p>
<p className="font-body-sm text-body-sm text-surface-bright/80 mt-0.5">Simultaneous Paging • Ext. 101 (Admin) &amp; Ext. 104 (Patrol Team)</p>
</div>
</div>
<span className="material-symbols-outlined text-3xl opacity-75 group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>

<button className="md:col-span-6 lg:col-span-4 bg-primary-container hover:bg-primary text-on-primary p-space-md rounded-xl shadow-md transition-all flex items-center justify-between group active:scale-[0.99] text-left" id="lockClassroomBtn"  type="button">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-full bg-surface-container text-primary flex items-center justify-center flex-shrink-0 shadow-md">
<span className="material-symbols-outlined text-3xl">door_front</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">STUDENT SAFETY COMMAND</span>
<p className="font-headline-sm text-headline-sm leading-tight text-on-primary">HOLD KOFI IN ROOM B-04</p>
<p className="font-body-sm text-body-sm text-primary-fixed-dim mt-0.5">Direct chime to Class Teacher Mrs. B. Abbey</p>
</div>
</div>
<div className="px-2.5 py-1 bg-surface-container text-primary font-label-sm text-label-sm rounded-lg flex items-center gap-1" id="classroomStatusIndicator">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>READY</span>
</div>
</button>

<button className="md:col-span-12 lg:col-span-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface p-space-md rounded-xl shadow-sm transition-all flex items-center justify-between group active:scale-[0.99] text-left"  type="button">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-on-surface-variant flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-2xl">key</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">STATUTORY OVERRIDE</span>
<p className="font-label-lg text-label-lg text-primary">Headmistress PIN</p>
<span className="font-body-sm text-body-sm text-on-surface-variant">Authorization Required</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-xl group-hover:translate-x-1 transition-transform">lock_open</span>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-2xl">compare_arrows</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Biometric &amp; Credential Comparison</h2>
</div>
<span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-extrabold uppercase">
              STATUS: MISMATCH DETECTED
            </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-error-container/40 p-space-md rounded-xl flex flex-col justify-between gap-space-sm relative overflow-hidden">
<div className="absolute top-0 right-0 px-2 py-0.5 bg-error text-on-error font-label-sm text-label-sm uppercase rounded-bl-lg font-bold">
                UNAUTHORIZED COLLECTOR
              </div>
<div>
<p className="font-label-sm text-label-sm uppercase text-secondary font-bold">PRESENTED CREDENTIAL</p>
<div className="flex items-center gap-space-sm mt-space-sm">
<div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden flex-shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Security camera capture of an adult male in an unverified jacket standing at the school security turnstile looking anxious, high-resolution surveillance lighting, documentary photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqiWz50YtbicNJgjQlbPcDatpKGr-uJ1xWw7Yg12RUPzFLrylDrygQZydbiGg8dYfPZ0IOuJnugcCe3g7y8Aa8EZGowkZerILQd18zWOMD1OuKx7b2u8pew1f6bvETqvz5iyPXlmJ94TwogISANcdGN59DE4HO8iVIQoepk8CMGgowb6eNiipVIESG3IpsWlwNTUlKwvjo3Xi1rS-f0z_iJtCYAZCqoF7civpQRMGX0O7DET9lrbswzg"/>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-background leading-tight">Kwame Antwi</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Claim: "Paternal Uncle"</p>
<span className="font-body-sm text-body-sm text-error font-bold">Not on Authorized Record</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest/80 p-2.5 rounded-lg flex flex-col gap-1 font-body-sm text-body-sm text-on-surface">
<div className="flex justify-between">
<span className="text-on-surface-variant font-label-sm text-label-sm">Token Presented:</span>
<span className="font-bold text-error">#CP-9901 (Family Duplicate)</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant font-label-sm text-label-sm">Temporary OTP:</span>
<span className="font-bold text-error">MISSING / UNVERIFIED</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant font-label-sm text-label-sm">Gate Camera ID:</span>
<span className="text-on-surface font-semibold">CAM-TURNSTILE-01A</span>
</div>
</div>
<div className="bg-secondary text-on-secondary p-2 rounded-lg text-center font-label-sm text-label-sm tracking-wide uppercase font-bold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-base">block</span>
                NO LEGAL RELEASE PERMITTED
              </div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm relative">
<div className="absolute top-0 right-0 px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase rounded-bl-lg font-bold">
                AUTHORIZED ENROLLED RECORD
              </div>
<div>
<p className="font-label-sm text-label-sm uppercase text-primary font-bold">PERMITTED GUARDIANS</p>

<div className="flex items-center gap-space-sm mt-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-high overflow-hidden flex-shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Portrait photo of Dr. Nana Mensah, dignified Ghanaian physician in medical professional attire, sharp headshot, neutral professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9hmoUEuMhg_-om_5rWK5kRn4K6pMSaPYwnmzTeB6SGl7QPa5lwJT1T0pPxw88E3SE575p13vgGXsjGVnjB7uLR6AVtb3CMowCqsVOka7O4sjH9HkzcjyYKNk9q0b-6KRUTuZtMiDjviL948AnbFKVEtw64TP5FPT9SuN4Sb2NH0UbdMR1t8jtwki1xl0J6Y1MP_G6wxsXagBK8fyJMs0hLn4AsMrjDVgbEdaa89poIOhqNbm6aU7yIA"/>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-primary leading-tight">Dr. Nana Mensah</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Primary Father • Tier 1 Sovereign</p>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-xs">verified</span> Ph: +233 24 492 8812
                    </span>
</div>
</div>

<div className="flex items-center gap-space-sm mt-space-xs pt-space-xs">
<div className="w-10 h-10 rounded-xl bg-surface-container-high overflow-hidden flex-shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Portrait photo of Mrs. Grace Owusu, professional Ghanaian woman smiling warmly, verified school guardian identification photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApXt_JxiMW2o9mo1SfN2vFYrDWNcgxc1c2yarVIlvpTeGtABw5qWf4frGSCDqZXSFj3B1nrSY_t09oU5v2MFW8KC3pBXQjm4pvkFDGuV5xiOq45xiXr0ronKwlk0Chva8x9K6eAoh8MGX67xNm7xgYHYrUm1g_-HeTZ0PN8fAuiTW_16u3oUNQ3k-rhKvjQGQLwaJBj2trPiUR3NSNvGcVpn2Duc9JCMsLZDMCj1PzCts48FCfBzj4mw"/>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface leading-tight">Mrs. Grace Owusu</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Approved Maternal Aunt • Tier 2 Contact</p>
</div>
</div>
</div>

<div className="flex gap-space-xs">
<button className="flex-1 bg-primary text-on-primary py-2 px-space-xs rounded-lg font-label-sm text-label-sm uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-primary-container transition-colors shadow-sm"  type="button">
<span className="material-symbols-outlined text-sm">call</span>
                  Call Father
                </button>
<button className="flex-1 bg-surface-container text-on-surface py-2 px-space-xs rounded-lg font-label-sm text-label-sm uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-surface-container-high transition-colors shadow-sm"  type="button">
<span className="material-symbols-outlined text-sm">call</span>
                  Call Aunt
                </button>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-sm">error</span> Invalidation Rationale Code: SEC-CUST-802
            </span>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
              Collector identity card presented (Ghana Card GHA-718293019-2, "Kwame Antwi") has zero registered pickup delegation filings on school portal. The child's primary parent explicitly submitted a <em>"Strict Custody Restriction Notice"</em> on September 12, stating no unlisted relatives are permitted egress without SMS dual-confirmation token.
            </p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span> Real-Time Turnstile Audit Sequence
            </h3>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">STATION: GT-TURNSTILE-A</span>
</div>
<div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
<div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
<span className="font-mono text-on-surface-variant text-xs mt-0.5">14:27:11 GMT</span>
<div className="flex-1">
<span className="font-bold text-on-surface">Physical Token Swiped:</span>
<span className="text-on-surface-variant">Card ID #CP-9901 read successfully at RFID Pad A-01.</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">CARD VALID</span>
</div>
<div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
<span className="font-mono text-on-surface-variant text-xs mt-0.5">14:27:14 GMT</span>
<div className="flex-1">
<span className="font-bold text-on-surface">Collector Verification Prompt:</span>
<span className="text-on-surface-variant">Turnstile camera snapped snapshot; facial geometry cross-referenced with approved student dossier. Zero vector match found.</span>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">MISMATCH 98.4%</span>
</div>
<div className="flex items-start gap-space-sm p-space-sm bg-error-container/30 rounded-lg">
<span className="font-mono text-error font-bold text-xs mt-0.5">14:27:18 GMT</span>
<div className="flex-1">
<span className="font-bold text-error">Automated Lockdown Enforced:</span>
<span className="text-on-surface">System halted turnstile rotation. Security guard console alarmed. Officer Emmanuel Tetteh alerted on terminal screen.</span>
</div>
<span className="px-2 py-0.5 rounded bg-error text-on-error font-label-sm text-label-sm font-bold">GATE INTERLOCKED</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md relative overflow-hidden">

<div className="w-full flex h-1 absolute top-0 left-0">
<div className="w-1/2 bg-primary"></div>
<div className="w-1/2 bg-secondary"></div>
</div>
<div className="flex items-start gap-space-md pt-1">

<div className="w-24 h-32 rounded-t-full rounded-b-xl overflow-hidden bg-surface-container shadow-md flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A portrait of young Ghanaian primary school boy Kofi Mensah wearing Carepoint Community School navy and white polo uniform with bright cheerful smile, high quality school yearbook style lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXiR5RfBG-WGQUnHkY_9tWb8ou8VrfE7loJ7qz8MbnC6DfmjkqxR1x0NPLr1vxoFh_K7iu1uenz0J6mhfIr_TMqEdW0TrEYg-TaRQBFrRQ1agsJ7Hh5ALZWj94hSGpwKQCwHQQyyJHCIXp_QcWb3zbCtAN76icY8UZHu0Z5RhDDcjfh3zSgQEAy0QuaNwxsUjQIK26mwlCLcZ6vwFryKDONgLDVTU11IUiIZPsOm8PKQtmntyw7lIB_g"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                    BASIC DIVISION
                  </span>
<span className="font-mono text-label-sm text-label-sm font-bold text-secondary">STUDENT #24-089</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mt-1 leading-tight">Kofi Mensah</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Class: Basic 2 - Sunflower</p>
</div>

<div className="mt-space-sm flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-base">eco</span>
<span>Mind • Heart • Hands Foundation</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 font-body-sm text-body-sm">
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant font-label-sm text-label-sm">Assigned Class Teacher:</span>
<span className="font-bold text-on-surface">Mrs. Beatrice Abbey (Rm B-04)</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant font-label-sm text-label-sm">Headmistress Pastoral Flag:</span>
<span className="px-2 py-0.5 rounded bg-error-container text-error font-label-sm text-label-sm font-bold">
                MANDATORY ESCORT ONLY
              </span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-on-surface-variant font-label-sm text-label-sm">Medical Alert Flag:</span>
<span className="font-bold text-on-surface">Peanut Allergy (EpiPen in Rm B-04)</span>
</div>
</div>

<div className="p-2.5 bg-surface-container rounded-lg flex items-center justify-between text-on-surface-variant text-center font-label-sm text-label-sm uppercase font-bold">
<span className="opacity-40">Creche</span>
<span className="opacity-40">•</span>
<span className="opacity-40">Nursery</span>
<span className="opacity-40">•</span>
<span className="opacity-40">KG</span>
<span className="opacity-40">•</span>
<span className="bg-primary text-on-primary px-2 py-0.5 rounded shadow-sm">Basic</span>
<span className="opacity-40">•</span>
<span className="opacity-40">JHS</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary">assignment</span> Guard Field Report
            </h3>
<span className="text-label-sm font-label-sm text-on-surface-variant">Officer Badge: #SEC-08</span>
</div>
<form className="flex flex-col gap-space-sm" id="incidentForm" onSubmit={(e) => e.preventDefault()}>
<div>
<label className="font-label-md text-label-md text-on-surface block mb-1">
                Quick Category Tags (Tap to toggle):
              </label>
<div className="flex flex-wrap gap-1.5">
<button className="tag-chip px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm"  type="button">
                  Unrecognized Collector
                </button>
<button className="tag-chip px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm"  type="button">
                  Invalid Token
                </button>
<button className="tag-chip px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm"  type="button">
                  Guardian Denied Phone Release
                </button>
<button className="tag-chip px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm"  type="button">
                  Collector Agitated / Aggressive
                </button>
<button className="tag-chip px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm"  type="button">
                  Escorted to Admin Office
                </button>
</div>
</div>
<div>
<label className="font-label-md text-label-md text-on-surface block mb-1" htmlFor="guardNotes">
                Guard Duty Incident Narrative • NaSIA Compliant:
              </label>
<textarea className="w-full bg-surface-container-low text-on-surface p-space-sm rounded-lg font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest resize-none" id="guardNotes" placeholder="Provide factual observations: Collector demeanor, verbal justification, refusal to step back, presence of campus security escort..." rows={3}></textarea>
</div>
<div className="flex items-center justify-between p-2.5 bg-surface-container rounded-lg font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-on-tertiary-container">verified_user</span>
                Signed: Off. Emmanuel Tetteh
              </span>
<span className="text-on-surface-variant font-mono">14:28 GMT</span>
</div>
<div className="flex flex-col gap-2 pt-1">
<button className="w-full bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg py-3 rounded-lg shadow transition-all flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined">send</span>
<span>SUBMIT STATUTORY INCIDENT REPORT</span>
</button>
<p className="font-label-sm text-label-sm text-on-surface-variant text-center">
                Instantly synchronizes to Accra East NaSIA Regional Inspectorate Log &amp; Headmistress Phone.
              </p>
</div>
</form>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-space-md" id="pinModal">
<div className="bg-surface-container-lowest w-full max-w-md rounded-2xl p-space-xl shadow-2xl flex flex-col gap-space-md relative">
<button className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1"  type="button">
<span className="material-symbols-outlined text-2xl">close</span>
</button>
<div className="text-center flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-error-container text-error flex items-center justify-center mb-space-sm shadow-inner">
<span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">Headmistress Override PIN</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Requires verified Master Safeguarding PIN to open Turnstile Gate A for Student #24-089.
        </p>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex justify-center gap-space-sm my-space-xs">
<input autoFocus={true} className="pin-digit w-12 h-14 text-center font-headline-lg text-headline-lg bg-surface-container text-primary rounded-lg focus:bg-surface-container-high focus:outline-none" maxLength={1} type="password"/>
<input className="pin-digit w-12 h-14 text-center font-headline-lg text-headline-lg bg-surface-container text-primary rounded-lg focus:bg-surface-container-high focus:outline-none" maxLength={1} type="password"/>
<input className="pin-digit w-12 h-14 text-center font-headline-lg text-headline-lg bg-surface-container text-primary rounded-lg focus:bg-surface-container-high focus:outline-none" maxLength={1} type="password"/>
<input className="pin-digit w-12 h-14 text-center font-headline-lg text-headline-lg bg-surface-container text-primary rounded-lg focus:bg-surface-container-high focus:outline-none" maxLength={1} type="password"/>
</div>
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold block mb-1">
            Mandatory Legal Exemption Reason:
          </label>
<select className="w-full bg-surface-container-low text-on-surface p-2.5 rounded-lg font-body-sm text-body-sm focus:outline-none" id="overrideReason">
<option value="parent-phone-approval">Parent verbally approved via recorded landline</option>
<option value="court-order-presentation">Legal representative presenting notarized decree</option>
<option value="medical-emergency-transfer">Urgent medical transfer under paramedic supervision</option>
<option value="police-escort-notice">Ghana Police Service Welfare Unit custody transfer</option>
</select>
</div>
<div className="hidden p-2 bg-error text-on-error rounded text-center font-label-sm text-label-sm font-bold" id="pinAlertMessage">
          INVALID AUTHORIZATION PIN. INCIDENT LOGGED.
        </div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 mt-space-xs"  type="button">
<span className="material-symbols-outlined">lock_open</span>
<span>DISENGAGE TURNSTILE • LOG OVERRIDE</span>
</button>
<p className="font-label-sm text-label-sm text-on-surface-variant text-center opacity-80">
          All overrides generate immediate SMS notification to Dr. Nana Mensah.
        </p>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 transform translate-y-32 transition-transform duration-300 pointer-events-none" id="toastNotification">
<div className="bg-primary text-on-primary px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-sm max-w-md">
<span className="material-symbols-outlined text-tertiary-fixed text-2xl" id="toastIcon">check_circle</span>
<div>
<p className="font-label-lg text-label-lg font-bold" id="toastTitle">Safeguarding Alert Triggered</p>
<p className="font-body-sm text-body-sm opacity-90" id="toastDesc">Classroom notified. Kofi Mensah is held in Room B-04.</p>
</div>
</div>
</div>

</div>
    </>
  );
}
