"use client";

import React from "react";
import Link from "next/link";

// Super Admin Tracker
export default function TrackerPage() {
  return (
    <>
<div className="flex flex-col w-full pb-margin">

<div className="w-full flex h-1.5 rounded-full overflow-hidden shadow-sm mb-space-md">
<div className="flex-1 bg-surface-tint"></div>
<div className="flex-1 bg-secondary"></div>
<div className="flex-1 bg-on-tertiary-container"></div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md pb-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-container text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
          RFC Lifecycle Management • SysOps Governance
        </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">gavel</span>
          Dual-Key Institutional Protocol
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Change Request Ledger &amp; Deployment Pipeline</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl">
        Institutional change audit stream. Track RFC status, review Headmistress executive endorsements, and execute approved deployment checklists.
      </p>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-primary shadow-sm hover:bg-surface-container font-label-lg text-label-lg transition-all">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
        Filter by State
      </button>
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-secondary text-on-secondary shadow-md hover:opacity-95 font-label-lg text-label-lg transition-all">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
        + New Change Request (RFC)
      </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total RFCs (Term 1)</span>
<span className="font-display-lg-mobile text-display-lg-mobile text-primary font-bold mt-space-xs leading-none">24</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-surface-tint">fact_check</span>
          Academic Year 2026/2026
        </span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">receipt_long</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Pending Principal Review</span>
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
</div>
<span className="font-display-lg-mobile text-display-lg-mobile text-secondary font-bold mt-space-xs leading-none">01</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-1.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">priority_high</span>
          Urgent Tier 1 Security RFC
        </span>
</div>
<div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-[26px]">approval</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant uppercase tracking-wider font-semibold">Approved (Ready to Deploy)</span>
<span className="font-display-lg-mobile text-display-lg-mobile text-primary font-bold mt-space-xs leading-none">02</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container mt-1.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock_open</span>
          Dual-Key Action Granted
        </span>
</div>
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[26px]">verified_user</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Implemented &amp; Closed</span>
<span className="font-display-lg-mobile text-display-lg-mobile text-primary font-bold mt-space-xs leading-none">21</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container mt-1.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">task_alt</span>
          100% Rollback-Free Reliability
        </span>
</div>
<div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[26px]">inventory_2</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-space-sm mb-space-md scrollbar-none">
<button className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">
      All RFCs (24)
    </button>
<button className="px-space-md py-space-xs rounded-full bg-surface-container-low text-secondary font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      Pending Principal Approval (1)
    </button>
<button className="px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-md text-label-md shrink-0 shadow-sm flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
      Approved &amp; Staged (2)
    </button>
<button className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">
      Implemented History (21)
    </button>
<button className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md shrink-0 hover:bg-surface-container-high transition-colors">
      Rejected / Revoked (0)
    </button>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-5 flex flex-col gap-space-md">

<div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs flex-1 px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">search</span>
<input className="bg-transparent text-body-sm font-body-sm placeholder:text-outline w-full focus:outline-none" placeholder="Search RFC ID, title, or system..." type="text"/>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 px-2 py-1 bg-surface-container rounded-md">Sorted by Priority</span>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-sm cursor-pointer transition-all hover:shadow-lg">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md font-bold px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">#CR-2026-08</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
              APPROVED • READY FOR STAGED EXECUTION
            </span>
</div>
<span className="font-label-sm text-label-sm font-bold uppercase text-secondary">Tier 1 High</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-snug">
          Update NaSIA 30/30/40 SBA Algorithm Weighting Curve
        </h3>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Staff Portal</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Academic Gradebook</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Reports Engine</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface-variant font-body-sm text-[12px] leading-tight mt-1">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-surface-tint">engineering</span>
<span>Auth: <strong>Ing. Kwabena Boateng</strong></span>
</div>
<div className="flex items-center gap-1 text-on-tertiary-fixed-variant font-semibold">
<span className="material-symbols-outlined text-[15px]">verified</span>
<span>Sanctioned by Dr. E. Appiah</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
<span>Target Window: Immediate Maintenance</span>
<span className="text-surface-tint font-semibold">Yesterday at 15:42 GMT</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm cursor-pointer transition-all hover:bg-surface-container-low">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md font-bold px-2 py-0.5 rounded bg-surface-container-high text-on-surface">#CR-2026-09</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              PENDING PRINCIPAL ACTION
            </span>
</div>
<span className="font-label-sm text-label-sm font-bold uppercase text-secondary">Tier 1 Safety</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-snug">
          Turnstile Biometric Vector Cache &amp; SMS OTP Carrier Failover
        </h3>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Gate Kiosk IoT</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Parent Push</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">MTN/Telecel Gateway</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface-variant font-body-sm text-[12px] leading-tight mt-1">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-surface-tint">engineering</span>
<span>Auth: <strong>Ing. Kwabena Boateng</strong></span>
</div>
<div className="flex items-center gap-1 text-secondary font-semibold">
<span className="material-symbols-outlined text-[15px]">hourglass_top</span>
<span>Awaiting Executive Queue</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
<span>Submitted 42 mins ago</span>
<span className="text-secondary font-semibold">SLA: 2h Remaining</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm cursor-pointer transition-all hover:bg-surface-container-low opacity-90">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md font-bold px-2 py-0.5 rounded bg-surface-container-high text-on-surface">#CR-2026-07</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
              IMPLEMENTED &amp; VERIFIED
            </span>
</div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Tier 2 Routine</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
          Emergency Lockdown GPIO Relay Test &amp; Interlock Timing Calibration
        </h3>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-[12px] pt-1">
<span>Executed by: SysOps Automation</span>
<span>Deployed: 3 days ago • Execution: 4m 12s</span>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm cursor-pointer transition-all hover:bg-surface-container-low opacity-90">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md font-bold px-2 py-0.5 rounded bg-surface-container-high text-on-surface">#CR-2026-06</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
              IMPLEMENTED &amp; VERIFIED
            </span>
</div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Tier 2 Data</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
          Provisioning Engine Bulk CSV Importer V2.4 Schema Migration
        </h3>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-[12px] pt-1">
<span>Executed by: Ing. Kwabena Boateng</span>
<span>Deployed: 8 days ago • Rollback-free</span>
</div>
</div>
</div>

<div className="xl:col-span-7 flex flex-col gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold px-2.5 py-1 rounded bg-primary text-on-primary">
                RFC #CR-2026-08
              </span>
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed/30 text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                Executive Action Secured
              </span>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Print RFC Audit Trail">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
<button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="View Raw JSON Envelope">
<span className="material-symbols-outlined text-[18px]">data_object</span>
</button>
</div>
</div>
<h2 className="font-headline-md text-headline-md text-primary mt-1">
            Update NaSIA 30/30/40 SBA Algorithm Weighting Curve
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Adjustment of continuous assessment weighting formulas to comply with Ghana National Schools Inspectorate Authority (NaSIA) academic instructions for Term 1. Reconfigures Class Test (30%), Mid-Term (30%), and Final Examination (40%) aggregates across all primary and JHS divisions.
          </p>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed shrink-0">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-primary font-bold">Executive Action Granted</span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">LEGALLY BINDING</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">
                Endorsed by <strong>Dr. Elizabeth Appiah</strong>, Headmistress &amp; Custodian of Records
              </span>
<div className="flex flex-wrap items-center gap-space-sm text-[11px] font-label-sm text-on-surface-variant mt-1">
<span className="font-mono bg-surface-container px-1.5 py-0.5 rounded">SIG: #CP-EX-4019</span>
<span className="font-mono bg-surface-container px-1.5 py-0.5 rounded">SHA256: d8b27c...9f01e8</span>
<span className="text-on-tertiary-container font-semibold">Response SLA Met (1h 14m)</span>
</div>
</div>
</div>
<div className="shrink-0 text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Signed At</span>
<span className="font-label-md text-label-md text-primary font-bold">Yesterday 15:42 GMT</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm p-space-md rounded-xl bg-surface-container">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Affected Gradebooks</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">28 Classrooms</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Class 1 to JHS 3</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Authorized Faculty</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">68 Educators</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Staff Portal Read/Write</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Rollback Window</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold mt-0.5">&lt; 90 Seconds</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">RDS Point-In-Time Ready</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Target Institutional Tiers</span>
<div className="flex flex-wrap gap-2 pt-1">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md opacity-60">
<span className="material-symbols-outlined text-[16px]">child_care</span>
              Creche / Nursery (Exempt)
            </div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md opacity-60">
<span className="material-symbols-outlined text-[16px]">sports_handball</span>
              Kindergarten (Exempt)
            </div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-[16px] text-surface-tint">school</span>
              Primary / Basic (Active Target)
            </div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-[16px] text-surface-tint">auto_stories</span>
              Junior High School (Active Target)
            </div>
</div>
</div>

<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">checklist</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Interactive Deployment Runbook</h3>
</div>
<span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-bold">
              2 of 5 Steps Executed (40%)
            </span>
</div>

<div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-surface-tint to-on-tertiary-container h-full rounded-full transition-all duration-500" style={{"width": "40%"}}></div>
</div>

<div className="flex flex-col gap-space-xs">

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary line-through opacity-80">1. Pre-deployment dry-run database migration in Staging</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Validated zero-row corruption across 1,480 mock student transcripts. (SysOps Kwabena at 16:00 GMT)</span>
</div>
</div>
<span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold shrink-0">STG PASS</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary line-through opacity-80">2. Snapshot primary PostgreSQL RDS cluster (ACC-DB-PRIMARY)</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Snapshot ID: <span className="font-mono">snap-rds-acc-20260218-1605</span> verified healthy (Done at 16:05 GMT)</span>
</div>
</div>
<span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold shrink-0">BACKUP OK</span>
</div>

<div className="p-space-sm rounded-xl bg-primary-fixed/20 shadow-sm flex items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 animate-pulse">
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-primary font-bold">3. Apply schema migration script to Production DB</span>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">CURRENT STEP</span>
</div>
<span className="font-body-sm text-[12px] text-on-surface-variant">
                    Script: <code className="font-mono bg-surface-container-high px-1 py-0.5 rounded text-primary">V4_2__ges_weighting_curve.sql</code> • Alters <code className="font-mono">academic.sba_records</code> table
                  </span>
</div>
</div>
<button className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow hover:bg-primary-container transition-colors shrink-0">
<span className="material-symbols-outlined text-[16px]">terminal</span>
                Execute SQL
              </button>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between gap-space-md opacity-75">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">lock</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">4. Flush Redis cache for 'sba:weighting:rules' across worker pods</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Invalidates stale calculation heuristics across US-EAST-ACC-POD01 through POD04.</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">Queued</span>
</div>

<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between gap-space-md opacity-75">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">lock</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">5. Run automated regression test probe on Gradebook API</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Automated HTTP probe checking 15 standard test student marks against expected GES totals.</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">Queued</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Live SysOps Pipeline Output</span>
<span className="font-mono text-[11px] text-on-tertiary-container flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
              Runner Connected: ACC-POD01-DOCKER02
            </span>
</div>
<div className="p-space-md rounded-xl bg-primary text-primary-fixed font-mono text-[12px] leading-relaxed overflow-x-auto shadow-inner">
<p className="text-primary-fixed-dim">[16:00:12 GMT] &gt; flyway migrate -target="4.2" -url="jdbc:postgresql://stg-acc-db:5432/carepoint"</p>
<p className="text-tertiary-fixed">[16:00:44 GMT] SUCCESS: Successfully applied 1 migration to schema "public" (execution time 00:00.320s)</p>
<p className="text-primary-fixed-dim">[16:05:01 GMT] &gt; aws rds create-db-snapshot --db-instance-identifier acc-db-primary --db-snapshot-identifier snap-rds-acc-20260218-1605</p>
<p className="text-tertiary-fixed">[16:05:28 GMT] RDS Snapshot Status: AVAILABLE (100% complete, Storage 180GB allocated)</p>
<p className="text-secondary-fixed">[16:06:00 GMT] STAGE GATE: Awaiting human operator command to trigger Step 3 on cluster: ACC-DB-PROD</p>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-secondary hover:bg-error-container font-label-md text-label-md font-bold transition-colors">
<span className="material-symbols-outlined text-[18px]">undo</span>
            Emergency Abort &amp; Rollback
          </button>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md font-semibold transition-colors">
<span className="material-symbols-outlined text-[18px]">pause_circle</span>
              Hold Pipeline
            </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-md hover:opacity-95 transition-all">
<span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              Execute Next Step (Apply Schema)
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
