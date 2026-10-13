"use client";

import React from "react";
import Link from "next/link";

// Super Admin Audit
export default function AuditPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="h-1.5 w-full flex">
<div className="w-1/3 bg-sky-400"></div>
<div className="w-1/3 bg-secondary"></div>
<div className="w-1/3 bg-on-tertiary-container"></div>
</div>
<div className="py-space-lg flex flex-col gap-space-lg">

<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex flex-col gap-space-xs max-w-3xl">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm tracking-wide">
<span className="material-symbols-outlined text-[15px] text-on-tertiary-container font-bold">verified_user</span>
            TAMPER-EVIDENT FORENSIC LEDGER • SHA-256 CHAINED
          </span>
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping"></span>
            GES / NaSIA COMPLIANT
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Immutable System-Wide Audit Log Viewer</h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Verifiable institutional audit stream recording all administrative sign-offs, gate turnstile events, feature flag flips, and credential mutations across Carepoint nodes.
        </p>
</div>
<div className="flex flex-wrap items-center gap-space-xs self-start lg:self-auto">
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-all" id="verify-ledger-btn" >
<span className="material-symbols-outlined text-on-tertiary-container text-body-md" id="verify-icon">shield_with_heart</span>
<span id="verify-text">Verify Ledger Integrity (Chain OK)</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined text-body-md">file_download</span>
          Export NaSIA Pack
        </button>
<div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span>Live Tail: Active (100)</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center">

<div className="md:col-span-5 relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-body-md">search</span>
<input className="w-full pl-9 pr-space-md py-2.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Filter by Actor, IP address, Resource UUID, or Event code..." type="text"/>
</div>

<div className="md:col-span-3">
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low pl-space-md pr-8 py-2.5 rounded-lg text-on-surface font-label-lg text-label-lg focus:outline-none focus:bg-surface-container-lowest cursor-pointer">
<option>All Modules (Cross-Campus)</option>
<option>Super Admin SysOps</option>
<option>Principal Decision Studio</option>
<option>Gate Kiosk Security</option>
<option>Admin Approvals</option>
<option>Staff Gradebook</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-outline text-body-md">expand_more</span>
</div>
</div>

<div className="md:col-span-2">
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low pl-space-md pr-8 py-2.5 rounded-lg text-on-surface font-label-lg text-label-lg focus:outline-none focus:bg-surface-container-lowest cursor-pointer">
<option>All Severities</option>
<option>CRITICAL / SAFEGUARDING</option>
<option>HIGH GOVERNANCE</option>
<option>STANDARD</option>
<option>INFO</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-outline text-body-md">filter_list</span>
</div>
</div>

<div className="md:col-span-2">
<div className="flex items-center justify-between bg-surface-container-low px-space-sm py-2.5 rounded-lg text-on-surface font-label-sm text-label-sm">
<span className="truncate">AY 25/26 • 14 Oct 2026</span>
<span className="material-symbols-outlined text-outline text-[16px]">calendar_today</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-1">Clinic Check Quick Filters:</span>
<button className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[14px]">fence</span>
          Gate Turnstile Holds (3)
        </button>
<button className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[14px]">toggle_on</span>
          Feature Flag Mutations (2)
        </button>
<button className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[14px]">gavel</span>
          Principal Office Actions (1)
        </button>
<button className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm opacity-75">
<span className="material-symbols-outlined text-[14px]">lock_reset</span>
          Failed Logins (0)
        </button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">

<div className="xl:col-span-8 flex flex-col gap-space-xs">
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">

<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
<span className="font-label-lg text-label-lg text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-body-md text-on-tertiary-container">link</span>
              Cryptographic Hash Ledger Stream
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Block Anchors: Local + Cloud HSM</span>
</div>

<div className="divide-y divide-surface-container flex flex-col" id="ledger-stream">

<div className="p-space-md bg-surface-container-low cursor-pointer transition-colors flex flex-col gap-space-xs relative" id="row-1" >
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant tabular-nums">14:28:12 GMT</span>
<span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">SUPER_ADMIN_SYSOPS</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">HIGH GOVERNANCE</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold">
<span className="material-symbols-outlined text-[15px] text-on-tertiary-container">tag</span>
<span>Block #1,492,044</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
<div className="font-label-lg text-label-lg text-primary">feature_flag.canary_updated</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Actor: <span className="text-on-surface font-semibold">Ing. Kwabena Boateng (SysOps Lead)</span> • IP: 10.142.12.44</div>
</div>
<div className="font-body-sm text-body-sm text-on-surface bg-surface-container-lowest p-space-sm rounded-lg">
                Shifted canary rollout for <code className="font-mono text-primary font-bold">portal.parent.live_dismissal_radar</code> from <span className="line-through text-outline">15%</span> to <span className="text-on-tertiary-container font-bold">25%</span> for Nursery &amp; KG classes.
              </div>
<div className="flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm text-on-surface-variant pt-1">
<span className="font-mono truncate max-w-sm">Hash: sha256:7f3a9e10c59e88fae32c0f28b1</span>
<span className="text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified in Local Consensus
                </span>
</div>
</div>

<div className="p-space-md hover:bg-surface-container-low/60 cursor-pointer transition-colors flex flex-col gap-space-xs relative" id="row-2" >
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant tabular-nums">14:26:15 GMT</span>
<span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">PRINCIPAL_DECISION_STUDIO</span>
<span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">CRITICAL / SAFEGUARDING</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[15px]">tag</span>
<span>Block #1,492,043</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
<div className="font-label-lg text-label-lg text-secondary">custody.injunction.enforced</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Actor: <span className="text-on-surface font-semibold">Dr. Elizabeth Appiah (Headmaster or Headteacher)</span> • IP: 10.142.4.10</div>
</div>
<div className="font-body-sm text-body-sm text-on-surface bg-surface-container-lowest p-space-sm rounded-lg">
                Executed binding Executive Order <code className="font-bold text-secondary">#SAF-ACC-2026-08</code> for Student Kofi Mensah (#24-089). High Court Custody Decree active. Turnstile interlock commanded.
              </div>
<div className="flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm text-on-surface-variant pt-1">
<span className="font-mono truncate max-w-sm">Hash: sha256:9b2d8e41f71a093cc54194f1</span>
<span className="text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified in Local Consensus
                </span>
</div>
</div>

<div className="p-space-md hover:bg-surface-container-low/60 cursor-pointer transition-colors flex flex-col gap-space-xs relative" id="row-3" >
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant tabular-nums">14:18:22 GMT</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm">GATE_KIOSK_SECURITY</span>
<span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">CRITICAL / SAFEGUARDING</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[15px]">tag</span>
<span>Block #1,492,042</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
<div className="font-label-lg text-label-lg text-secondary">turnstile.interlock.triggered</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Actor: <span className="text-on-surface font-semibold">Officer Emmanuel Tetteh (Gate Node 04)</span> • MAC: 00:1A:2B:6F:43:8C</div>
</div>
<div className="font-body-sm text-body-sm text-on-surface bg-surface-container-lowest p-space-sm rounded-lg">
                Unauthorized guardian NFC tap flagged for Student Kofi Mensah. Physical turnstile flap lock deployed in 40ms. Audio alert chime triggered at Gate Node 4.
              </div>
<div className="flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm text-on-surface-variant pt-1">
<span className="font-mono truncate max-w-sm">Hash: sha256:3c88a183d291afb410e2003c</span>
<span className="text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified in Local Consensus
                </span>
</div>
</div>

<div className="p-space-md hover:bg-surface-container-low/60 cursor-pointer transition-colors flex flex-col gap-space-xs relative" id="row-4" >
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant tabular-nums">13:40:11 GMT</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">ADMIN_APPROVALS</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">STANDARD</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[15px]">tag</span>
<span>Block #1,492,041</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
<div className="font-label-lg text-label-lg text-primary">admission.candidate.approved</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Actor: <span className="text-on-surface font-semibold">Dr. Elizabeth Appiah</span> • Target: Kwadwo Asare (#2026-084)</div>
</div>
<div className="font-body-sm text-body-sm text-on-surface bg-surface-container-lowest p-space-sm rounded-lg">
                Approved candidate enrollment into Kindergarten 1. Automatic issuance of student ledger key, student ID card barcode, and automated onboarding email.
              </div>
<div className="flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm text-on-surface-variant pt-1">
<span className="font-mono truncate max-w-sm">Hash: sha256:1a84f33190dfca011400ee12</span>
<span className="text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified in Local Consensus
                </span>
</div>
</div>

<div className="p-space-md hover:bg-surface-container-low/60 cursor-pointer transition-colors flex flex-col gap-space-xs relative" id="row-5" >
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant tabular-nums">10:14:02 GMT</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">STAFF_PORTAL</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">STANDARD</span>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[15px]">tag</span>
<span>Block #1,492,040</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
<div className="font-label-lg text-label-lg text-primary">gradebook.weighting.modified</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Actor: <span className="text-on-surface font-semibold">Madam Joy (Biology Lead)</span> • Target: JHS 1 Continuous Assessment</div>
</div>
<div className="font-body-sm text-body-sm text-on-surface bg-surface-container-lowest p-space-sm rounded-lg">
                Re-weighted Term 1 Practical Biology Laboratory Assessment from 15% to 20% following department council sign-off.
              </div>
<div className="flex flex-wrap items-center justify-between gap-space-xs font-label-sm text-label-sm text-on-surface-variant pt-1">
<span className="font-mono truncate max-w-sm">Hash: sha256:d89190cbb17208ff94401a05</span>
<span className="text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified in Local Consensus
                </span>
</div>
</div>
</div>

<div className="px-space-md py-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant">
              Showing <span className="font-semibold text-on-surface">1 - 25</span> of <span className="font-semibold text-on-surface">14,892</span> forensic events • NaSIA Mirror Sync: <span className="text-on-tertiary-container font-semibold">Healthy (14s ago)</span>
</span>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant disabled:opacity-50" disabled={true}>Previous</button>
<button className="px-space-sm py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm">1</button>
<button className="px-space-sm py-1 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface">2</button>
<button className="px-space-sm py-1 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface">3</button>
<span className="px-1 text-on-surface-variant">...</span>
<button className="px-space-sm py-1 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface">596</button>
<button className="px-space-sm py-1 bg-surface-container hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface">Next</button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-space-md sticky top-20">
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">

<div className="flex flex-col gap-1 pb-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">FORENSIC EVENT INSPECTOR</span>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[12px]">verified</span>
                ANCHORED
              </span>
</div>
<div className="flex items-baseline justify-between">
<span className="font-headline-sm text-headline-sm text-primary" id="inspector-uuid">evt_93af-e78c-acc-2026</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">Tier 0 Root</span>
</div>
</div>

<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-body-sm">badge</span>
              Actor &amp; Machine Fingerprint
            </span>
<div className="flex flex-col gap-1 text-[13px] font-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant">Identity:</span>
<span className="font-mono text-on-surface font-semibold" id="inspector-identity">k.boateng@ops.carepoint.edu.gh</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">System Role:</span>
<span className="text-primary font-semibold" id="inspector-role">SysOps Tier 0 (Full Infra Ops)</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Session Hardware:</span>
<span className="font-mono text-on-surface" id="inspector-enclave">TPM 2.0 Enclave #0x93FA-E78C</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Workstation Subnet:</span>
<span className="font-mono text-on-surface" id="inspector-ip">10.142.12.44 (Accra DC Pod)</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-body-sm">data_object</span>
                Payload Mutation Delta
              </span>
<button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" >
<span className="material-symbols-outlined text-[14px]">content_copy</span>
                Copy JSON
              </button>
</div>
<pre className="bg-primary text-primary-fixed p-space-sm rounded-lg font-mono text-[12px] leading-relaxed overflow-x-auto max-h-60" id="json-viewer">{`{
  "flag_key": "portal.parent.live_dismissal_radar",
  "mutation": {
    "canary_percentage": {
      "from": 15,
      "to": 25
    },
    "target_cohort": "NURSERY_KG_ONLY",
    "reason": "Dismissal surge peak performance validation"
  },
  "approved_by_dual_key": true,
  "telemetry_stream": "radar.dismissal.realtime.v2"
}`}</pre>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-body-sm">enhanced_encryption</span>
              Cryptographic Proof Chain
            </span>
<div className="flex flex-col gap-2 p-space-sm bg-surface-container-low rounded-lg font-mono text-[11px]">
<div>
<span className="text-outline uppercase text-[10px] block">Previous Block Hash (Parent):</span>
<span className="text-on-surface-variant break-all" id="parent-hash">sha256:9b2d8e41f71a093cc54194f1082aa374</span>
</div>
<div>
<span className="text-outline uppercase text-[10px] block">Current Event Hash:</span>
<span className="text-primary font-bold break-all" id="current-hash">sha256:7f3a9e10c59e88fae32c0f28b144e590</span>
</div>
<div className="pt-1 flex items-center justify-between text-on-surface text-[11px] font-sans">
<span className="text-on-surface-variant">Stratum 1 Clock GPS Sync:</span>
<span className="text-on-tertiary-container font-semibold">±0.002ms Locked</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 flex items-center justify-center gap-1.5 py-2 px-space-sm bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-sm text-label-sm transition-colors">
<span className="material-symbols-outlined text-[16px]">verified</span>
              Verify Merkle Proof
            </button>
<button className="p-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg transition-colors" title="Download Raw Block Certificate">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
</button>
<button className="p-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg transition-colors" title="View in NaSIA Ledger Explorer">
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Monitored Division Portals</span>
<div className="grid grid-cols-4 gap-space-xs text-center">
<div className="flex flex-col items-center p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[20px] text-sky-500">child_care</span>
<span className="font-label-sm text-[10px] text-primary font-bold mt-1">NURSERY</span>
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mt-1"></span>
</div>
<div className="flex flex-col items-center p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[20px] text-primary">toys</span>
<span className="font-label-sm text-[10px] text-primary font-bold mt-1">K-GARDEN</span>
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mt-1"></span>
</div>
<div className="flex flex-col items-center p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[20px] text-secondary">school</span>
<span className="font-label-sm text-[10px] text-primary font-bold mt-1">BASIC</span>
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mt-1"></span>
</div>
<div className="flex flex-col items-center p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[20px] text-primary-container">menu_book</span>
<span className="font-label-sm text-[10px] text-primary font-bold mt-1">JHS</span>
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container mt-1"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
