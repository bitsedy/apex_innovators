"use client";

import React from "react";
import Link from "next/link";

// Super Admin Changes
export default function ChangesPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="h-1.5 w-full flex rounded-full overflow-hidden shadow-sm mb-space-md">
<div className="h-full w-1/3 bg-[#38bdf8]"></div>
<div className="h-full w-1/3 bg-secondary"></div>
<div className="h-full w-1/3 bg-on-tertiary-container"></div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-lg">
<div className="flex flex-col gap-space-xs">

<div className="flex flex-wrap items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
<span>SysOps Home</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>Change Requests</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-bold">Compose New RFC</span>
<span className="ml-space-xs px-space-sm py-[2px] rounded-full bg-error-container text-on-error-container uppercase tracking-wider font-bold text-[10px] flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">security</span>
          Governance Protocol • Dual-Custody Control Required
        </span>
</div>

<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
        Change Request Composer (RFC Studio)
      </h1>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl">
        Draft structural mutations, configuration shifts, schema migrations, or security policy overrides for Executive Principal action.
      </p>
</div>

<div className="flex items-center gap-space-sm self-start lg:self-center shrink-0">
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-body-md text-on-surface-variant">save</span>
<span>Save Draft <span className="font-mono text-label-sm text-outline">(RFC-2026-09-DRAFT)</span></span>
</button>
<button className="flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg transition-all shadow-md group" id="btn-submit-rfc" type="button">
<span className="material-symbols-outlined text-body-md group-hover:rotate-12 transition-transform">lock_clock</span>
<span>Submit to Principal Approvals Queue</span>
<span className="material-symbols-outlined text-body-md">arrow_forward</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start pb-space-xl">

<div className="xl:col-span-7 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-label-lg">01</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary leading-tight">Change Classification &amp; Identity</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Formal SysOps Specification</span>
</div>
</div>
<span className="font-mono font-bold text-label-sm text-primary-container bg-surface-container px-space-sm py-1 rounded">
            CR-2026-09-PROD
          </span>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface flex items-center justify-between">
<span>RFC Title / Executive Descriptor <span className="text-secondary">*</span></span>
<span className="font-label-sm text-label-sm text-outline">Max 140 chars</span>
</label>
<input className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-space-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-inner bg-surface-container-low" type="text" value="Migrate Parent Notification Webhook &amp; Enable High-Gate Area Turnstile Biometric Vector Cache"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Target Release Window</label>
<div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-on-surface-variant text-body-md">calendar_month</span>
<input className="bg-transparent w-full focus:outline-none font-medium" type="text" value="Term 1 - Wk 7 Maintenance (Fri 23:00 GMT)"/>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Environment Scope</label>
<div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-body-md">cloud_sync</span>
<span className="font-medium text-on-surface">ACC-PRD-POD01 (Direct Production)</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Urgency &amp; Governance Tier</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">

<label className="flex flex-col p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input className="accent-primary w-4 h-4" name="rfc_tier" type="radio"/>
<span className="font-label-sm text-label-sm font-bold text-on-surface">Standard Maintenance</span>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant pl-5 mt-1 leading-snug">Tier 2 • Non-breaking scheduled tasks</span>
</label>

<label className="flex flex-col p-space-sm rounded-lg bg-primary text-on-primary cursor-pointer shadow-md">
<div className="flex items-center gap-space-xs">
<input defaultChecked={true} className="accent-secondary w-4 h-4" name="rfc_tier" type="radio"/>
<span className="font-label-sm text-label-sm font-bold text-on-primary">High Impact System Change</span>
</div>
<span className="font-label-sm text-[11px] text-primary-fixed-dim pl-5 mt-1 leading-snug">Tier 1 • Mandatory Principal Action</span>
</label>

<label className="flex flex-col p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input className="accent-secondary w-4 h-4" name="rfc_tier" type="radio"/>
<span className="font-label-sm text-label-sm font-bold text-secondary">Emergency Safeguard</span>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant pl-5 mt-1 leading-snug">Tier 0 • Immediate Life &amp; Safety Override</span>
</label>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-label-lg">02</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary leading-tight">Affected Architectural Modules</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cross-Subsystem Footprint</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">3 Selected</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all">
<input defaultChecked={true} className="mt-1 w-4 h-4 accent-primary rounded" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">Gate Kiosk &amp; Turnstile Daemon</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Hardware Node A &amp; B (Biometric Vector Sync)</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all">
<input defaultChecked={true} className="mt-1 w-4 h-4 accent-primary rounded" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">Parent Portal Notification WebSockets</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Real-time arrival push to Guardian App v3</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all">
<input defaultChecked={true} className="mt-1 w-4 h-4 accent-primary rounded" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">External Telco SMS Gateway</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">MTN / Vodafone Ghana Tier 1 SMPP Pipeline</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container opacity-60">
<input className="mt-1 w-4 h-4 accent-primary rounded" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">Staff Gradebook &amp; Timetable Engine</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Academic Assessment DB &amp; Term Reporting</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container opacity-60 md:col-span-2">
<input className="mt-1 w-4 h-4 accent-primary rounded" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">Admissions Pipeline &amp; Core Postgres Cluster</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Enrollment records, guardian KYC, student biometric identities</span>
</div>
</label>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-label-lg">03</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary leading-tight">Technical Justification &amp; Rationale</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Root-Cause Analysis</span>
</div>
</div>
<div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg">
<button className="px-space-sm py-0.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-primary font-bold shadow-xs" type="button">Edit</button>
<button className="px-space-sm py-0.5 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" type="button">Preview</button>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<textarea className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm p-space-md rounded-lg focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed font-mono" rows={4}>Upgrading Turnstile biometric vector cache memory allocation to prevent P95 latency spikes during 14:30 GMT dismissal surge. Synchronizes with external telco SMS OTP carrier fallback to eliminate parent gate verification queues observed during Week 5.</textarea>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-1">
<span>Markdown syntax supported. Attachments will be cryptographically hashed.</span>
<span>218 / 1000 chars</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-label-lg">04</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary leading-tight">Blast Radius &amp; Automated Rollback Safeguards</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Fail-Safe Protocol</span>
</div>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-tertiary-container font-label-sm text-[11px] font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
            Zero Downtime Target
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Estimated Downtime Window</label>
<div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-md text-on-tertiary-container">timelapse</span>
<span className="font-bold">0 Minutes</span>
<span className="text-on-surface-variant font-normal">(Rolling Blue/Green pod deployment)</span>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Rollback Trigger Metric</label>
<div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-md text-secondary">crisis_alert</span>
<span className="font-bold">&gt; 0.05% Error Rate</span>
<span className="text-on-surface-variant font-normal">within 120s of Canary</span>
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Automated Rollback Sequence</label>
<div className="p-space-sm rounded-lg bg-surface-container-low font-mono text-body-sm text-on-surface text-[13px] leading-relaxed">
            Automated instant rollback to Git SHA <span className="bg-surface-container-highest px-1.5 py-0.5 rounded font-bold text-primary">cfg-v2026.10.2</span> if health probe criteria fail. Canary traffic shifts 10% → 50% → 100% across 600s with Prometheus watchdog validation.
          </div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface">Health Probe Verification Criteria</label>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low font-mono text-[12px] text-on-surface-variant">
<span className="material-symbols-outlined text-on-tertiary-container text-body-md">network_ping</span>
<span>GET /healthz/biometrics • Response &lt; 50ms across all 4 turnstile edge daemons</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-space-lg">

<div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-fixed text-headline-sm">verified_user</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">Designated Executive Custodian</span>
</div>
<span className="px-space-sm py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-[10px] font-bold uppercase tracking-wider">
            Mandatory Sign-off
          </span>
</div>
<div className="flex items-center gap-space-md bg-primary-container p-space-md rounded-xl">
<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-fixed shrink-0 shadow-inner">
<span className="material-symbols-outlined text-headline-sm">account_balance</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-primary leading-tight">Dr. Elizabeth Appiah</span>
<span className="font-label-sm text-label-sm text-primary-fixed-dim">Headmaster or Headteacher &amp; Principal Approval Authority</span>
<span className="font-label-sm text-[11px] text-primary-fixed mt-1">Carepoint Community School Executive Board</span>
</div>
</div>
<div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-primary-fixed-dim bg-primary-container/40 p-space-sm rounded-lg">
<div className="flex items-center justify-between text-[12px]">
<span>Governance SLA Window:</span>
<span className="text-on-primary font-bold">24 Hours (Tier 1 Enforced)</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span>Cryptographic Dispatch:</span>
<span className="text-on-primary font-bold">Hardware FIDO2 WebAuthn Prompt</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span>Notification Protocol:</span>
<span className="text-on-primary font-bold">Encrypted SMS Push + Executive Inbox</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-body-md">difference</span>
<span className="font-headline-sm text-headline-sm text-primary">Live Configuration Diff</span>
</div>
<span className="font-mono text-label-sm text-on-surface-variant bg-surface-container px-space-xs py-0.5 rounded">
            turnstile_daemon.yaml
          </span>
</div>

<div className="rounded-lg bg-[#001438] text-white font-mono text-[12px] p-space-md overflow-x-auto shadow-inner leading-relaxed">
<div className="text-[#757680] pb-1"># Revision patch: POD-ACC-TURNSTILE-V2</div>
<div className="text-[#757680] pb-2">@@ -42,8 +42,9 @@ engine_config:</div>
<div className="text-[#c5c6d1] flex items-center">
<span className="w-6 inline-block text-[#45464f] select-none">42</span>
<span>  telemetry_interval_ms: 1000</span>
</div>

<div className="bg-[#df2d23]/20 text-[#ffb4a9] flex items-center px-1 rounded-xs">
<span className="w-5 inline-block text-secondary-fixed select-none">-</span>
<span className="w-6 inline-block text-[#45464f] select-none">43</span>
<span>  cache_ttl_seconds: 300</span>
</div>

<div className="bg-[#46a95a]/20 text-[#94f9a0] flex items-center px-1 rounded-xs">
<span className="w-5 inline-block text-[#78dc86] select-none">+</span>
<span className="w-6 inline-block text-[#45464f] select-none">43</span>
<span>  cache_ttl_seconds: 1800</span>
</div>

<div className="bg-[#df2d23]/20 text-[#ffb4a9] flex items-center px-1 rounded-xs">
<span className="w-5 inline-block text-secondary-fixed select-none">-</span>
<span className="w-6 inline-block text-[#45464f] select-none">44</span>
<span>  turnstile_biometric_concurrency: 4</span>
</div>

<div className="bg-[#46a95a]/20 text-[#94f9a0] flex items-center px-1 rounded-xs">
<span className="w-5 inline-block text-[#78dc86] select-none">+</span>
<span className="w-6 inline-block text-[#45464f] select-none">44</span>
<span>  turnstile_biometric_concurrency: 12</span>
</div>

<div className="bg-[#46a95a]/20 text-[#94f9a0] flex items-center px-1 rounded-xs">
<span className="w-5 inline-block text-[#78dc86] select-none">+</span>
<span className="w-6 inline-block text-[#45464f] select-none">45</span>
<span>  carrier_retry_policy: "exponential_backoff_max_3"</span>
</div>
<div className="text-[#c5c6d1] flex items-center pt-1">
<span className="w-6 inline-block text-[#45464f] select-none">46</span>
<span>  gate_relay_timeout_ms: 2500</span>
</div>
</div>
<div className="flex items-center justify-between text-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span> +3 insertions
          </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span> -2 deletions
          </span>
<span className="font-mono">Payload: 2.4 KB</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-body-md">fact_check</span>
<span className="font-headline-sm text-headline-sm text-primary">Pre-Flight Static Validation</span>
</div>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            CI/CD Ready
          </span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-on-tertiary-container text-body-md mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Schema Backward Compatibility</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">PASSED: Zero breaking column alterations or foreign key drops.</span>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-on-tertiary-container text-body-md mt-0.5">verified</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Encryption Key &amp; Hardware Security</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">PASSED: FIPS 140-3 HSM signed secrets validated for turnstile node comms.</span>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-[#fff8e1]">
<span className="material-symbols-outlined text-[#b45309] text-body-md mt-0.5">warning</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-[#92400e]">Concurrency Load Recommendation</span>
<span className="font-body-sm text-body-sm text-[#78350f] text-[13px]">Synthetic stress spike test advised prior to 14:00 GMT Friday peak gate traffic.</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-body-md">draw</span>
<span className="font-headline-sm text-headline-sm">Initiator Attestation</span>
</div>
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-label-md">
            KB
          </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Ing. Kwabena Boateng</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">SysOps Lead • Auth Token: ACC-OPS-99214</span>
</div>
</div>
<label className="flex items-start gap-space-sm cursor-pointer p-space-xs">
<input defaultChecked={true} className="mt-1 w-4 h-4 accent-primary rounded" id="compliance-check" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface leading-tight text-[13px]">
            I certify that this change specification has been validated in Staging (<span className="font-mono font-bold text-primary">POD-ACC-STAGE</span>) and strictly complies with NaSIA and Carepoint School IT Cybersecurity Instructions.
          </span>
</label>
<div className="pt-space-xs flex flex-col gap-space-xs">
<button className="w-full py-space-sm px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-space-xs shadow-md" type="button">
<span className="material-symbols-outlined text-body-md">send_time_extension</span>
<span>Dispatch RFC to Executive Inbox</span>
</button>
<span className="text-center font-label-sm text-[11px] text-on-surface-variant">
            SysAdmin Tier 0 does not possess approval bypass rights.
          </span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
