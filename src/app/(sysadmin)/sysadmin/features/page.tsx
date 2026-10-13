"use client";

import React from "react";
import Link from "next/link";

// Super Admin Features
export default function FeaturesPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="py-space-md mb-space-lg">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="px-space-sm py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm tracking-wider uppercase">System Operations</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">•</span>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">High Governance Tier</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Runtime Feature Flags &amp; Capability Matrix</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">
          Dynamic environment switches, canary rollouts, and runtime emergency kill-switches across campus digital infrastructure.
        </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-center">
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm" id="refreshSyncBtn">
<span className="material-symbols-outlined text-[18px]">sync</span>
          Sync State
        </button>
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container transition-all font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[18px]">shield</span>
          Emergency Kill-Switch
        </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">dns</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Active Environment</span>
<span className="font-headline-sm text-headline-sm text-primary leading-tight">PRODUCTION</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Region: West Africa / Accra (ACC-POD01)</span>
</div>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-ping"></span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">code_blocks</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Config Release SHA</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-mono tracking-tight leading-tight">cfg-v2026.10.2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Committed 36m ago • Sync Verified</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">verified_user</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Rollout Safety Posture</span>
<span className="font-headline-sm text-headline-sm text-tertiary-container leading-tight">CANARY ACTIVE</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">Zero Configuration Drift</span>
</div>
</div>
<span className="material-symbols-outlined text-on-tertiary-container text-body-md">lock</span>
</div>
</div>
<div className="flex flex-wrap gap-space-xs p-1.5 rounded-xl bg-surface-container-low max-w-fit mb-space-lg">
<button className="filter-tab active-tab px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-colors bg-primary text-on-primary font-bold shadow-sm" data-category="all">
      All Flags (14)
    </button>
<button className="filter-tab px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-colors text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-category="security">
      Perimeter &amp; Gate Security (4)
    </button>
<button className="filter-tab px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-colors text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-category="academic">
      Academic &amp; Grading (3)
    </button>
<button className="filter-tab px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-colors text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-category="comms">
      Communications &amp; SMS (3)
    </button>
<button className="filter-tab px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-colors text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-category="portal">
      Portal Experiments (4)
    </button>
</div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start pb-space-xl">
<div className="xl:col-span-8 flex flex-col gap-space-md">
<div className="flag-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md cursor-pointer selected-card" data-category="security" data-governance="true" data-key="gate.two_factor.photo_match_enforced" data-module="Gate Kiosk" data-name="Two-Factor Photo Match Attestation" data-rollout="100" data-scope="All Terminals" data-status="active">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
<span className="font-mono font-bold font-label-md text-label-md text-primary bg-primary-fixed px-space-sm py-0.5 rounded">gate.two_factor.photo_match_enforced</span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[13px]">gavel</span> STRICT GOVERNANCE
              </span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Gate Kiosk</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium mb-space-sm">
              Require security guard visual photo match attestation before turnstile release.
            </p>
<div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">pin_drop</span> Scope: All Terminals</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">history</span> Last flipped: 4 days ago by Kwabena Boateng</span>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-sm">
<span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold tracking-wide">ACTIVE</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">100%</span>
<div className="w-12 h-6 bg-primary rounded-full p-0.5 flex items-center justify-end cursor-not-allowed opacity-90" title="Locked by governance policy">
<div className="w-5 h-5 rounded-full bg-on-primary shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined text-[12px] text-primary">lock</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="flex justify-between items-center mb-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Rollout Saturation</span>
<span className="font-bold text-primary">100% (Campus-wide)</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "100%"}}></div>
</div>
</div>
</div>
<div className="flag-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md cursor-pointer" data-category="comms" data-governance="false" data-key="comms.sms.daily_pickup_token_dispatch" data-module="Parent / Gate Dispatch" data-name="Automated Pickup Token Batch SMS" data-rollout="100" data-scope="All Guardians" data-status="active">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
<span className="font-mono font-bold font-label-md text-label-md text-primary bg-surface-container px-space-sm py-0.5 rounded">comms.sms.daily_pickup_token_dispatch</span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Parent / Gate</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium mb-space-sm">
              Automated 13:30 GMT batch SMS OTP generation to primary guardians for safe pick-up clearance.
            </p>
<div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">group</span> Scope: All Registered Guardians (1,420 users)</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">cell_tower</span> Hubtel Gateway</span>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-sm">
<span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold tracking-wide">ACTIVE</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">100%</span>
<button className="interactive-toggle w-12 h-6 bg-primary rounded-full p-0.5 flex items-center justify-end transition-colors" data-active="true">
<div className="w-5 h-5 rounded-full bg-on-primary shadow-sm"></div>
</button>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="flex justify-between items-center mb-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Rollout Saturation</span>
<span className="font-bold text-primary">100%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "100%"}}></div>
</div>
</div>
</div>
<div className="flag-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md cursor-pointer" data-category="portal" data-governance="false" data-key="portal.parent.live_dismissal_radar" data-module="Parent Portal" data-name="Live Dismissal Radar WebSocket" data-rollout="25" data-scope="Beta Rollout (25% Nursery/KG)" data-status="active">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
<span className="font-mono font-bold font-label-md text-label-md text-primary bg-surface-container px-space-sm py-0.5 rounded">portal.parent.live_dismissal_radar</span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed font-semibold">TEST GROUP</span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Parent Portal</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium mb-space-sm">
              Real-time WebSocket streaming of turnstile gate area queue directly to the parent mobile app.
            </p>
<div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">child_care</span> Scope: Beta Rollout (25% Nursery/KG)</span>
<span>•</span>
<span className="flex items-center gap-1 text-on-tertiary-container font-semibold"><span className="material-symbols-outlined text-[16px]">speed</span> p99 Latency: 124ms</span>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-sm">
<span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold tracking-wide">ACTIVE</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm font-bold text-primary">25%</span>
<button className="interactive-toggle w-12 h-6 bg-primary rounded-full p-0.5 flex items-center justify-end transition-colors" data-active="true">
<div className="w-5 h-5 rounded-full bg-on-primary shadow-sm"></div>
</button>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="flex justify-between items-center mb-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Canary Rollout Slider</span>
<span className="font-mono text-primary font-bold">25% of Nursery &amp; Kindergarten</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg cursor-pointer" max="100" min="0" type="range" value="25"/>
</div>
</div>
<div className="flag-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md cursor-pointer" data-category="academic" data-governance="true" data-key="grading.ges.continuous_assessment_v3" data-module="Staff Portal" data-name="GES / NaSIA SBA 30/30/40 Algorithm" data-rollout="100" data-scope="Basic 1 - JHS 3" data-status="active">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
<span className="font-mono font-bold font-label-md text-label-md text-primary bg-primary-fixed px-space-sm py-0.5 rounded">grading.ges.continuous_assessment_v3</span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[13px]">gavel</span> STRICT GOVERNANCE
              </span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Staff Portal</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium mb-space-sm">
              Enforce updated NaSIA 30/30/40 School Based Assessment (SBA) weighting algorithm with BECE standard curves.
            </p>
<div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">school</span> Scope: Basic 1 - JHS 3 Teachers (68 educators)</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">fact_check</span> Regulatory GES Mandate</span>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-sm">
<span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold tracking-wide">ACTIVE</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">100%</span>
<div className="w-12 h-6 bg-primary rounded-full p-0.5 flex items-center justify-end cursor-not-allowed opacity-90" title="Locked by governance policy">
<div className="w-5 h-5 rounded-full bg-on-primary shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined text-[12px] text-primary">lock</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="flex justify-between items-center mb-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Rollout Saturation</span>
<span className="font-bold text-primary">100% (All Class Tiers)</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "100%"}}></div>
</div>
</div>
</div>
<div className="flag-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md cursor-pointer" data-category="security" data-governance="true" data-key="security.kiosk.biometric_fallback_bypass" data-module="Gate Kiosk" data-name="Supervisor PIN Override on Sensor Latency" data-rollout="0" data-scope="Emergency Only" data-status="disabled">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
<span className="font-mono font-bold font-label-md text-label-md text-on-surface-variant bg-surface-container px-space-sm py-0.5 rounded">security.kiosk.biometric_fallback_bypass</span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[13px]">gavel</span> STRICT GOVERNANCE
              </span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Gate Kiosk</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium mb-space-sm">
              Allow head supervisor 6-digit PIN override when optical fingerprint scanner drops camera feed below 12 FPS.
            </p>
<div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-secondary font-semibold"><span className="material-symbols-outlined text-[16px]">warning</span> Scope: Emergency Failover Only</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">power_off</span> Default: DISABLED</span>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-sm">
<span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-bold tracking-wide">DISABLED</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">0%</span>
<div className="w-12 h-6 bg-surface-container-highest rounded-full p-0.5 flex items-center justify-start cursor-not-allowed opacity-90" title="Locked by governance policy">
<div className="w-5 h-5 rounded-full bg-outline shadow-sm flex items-center justify-center">
<span className="material-symbols-outlined text-[12px] text-surface-container-lowest">lock</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="flex justify-between items-center mb-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Rollout Saturation</span>
<span className="font-bold text-on-surface-variant">0% (Killed)</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width": "0%"}}></div>
</div>
</div>
</div>
<div className="flag-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm transition-all hover:shadow-md cursor-pointer" data-category="portal" data-governance="false" data-key="auth.passkey.webauthn_frictionless" data-module="Parent &amp; Staff Portal" data-name="Frictionless WebAuthn / Passkeys" data-rollout="100" data-scope="All Modern Browsers" data-status="active">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-md">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-space-xs mb-space-xs">
<span className="font-mono font-bold font-label-md text-label-md text-primary bg-surface-container px-space-sm py-0.5 rounded">auth.passkey.webauthn_frictionless</span>
<span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Parent &amp; Staff Portal</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium mb-space-sm">
              Enable TouchID / FaceID passkeys on parent iOS &amp; Android browsers for secure single-tap authorization.
            </p>
<div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">fingerprint</span> Scope: All Web Clients</span>
<span>•</span>
<span className="flex items-center gap-1 text-on-tertiary-container"><span className="material-symbols-outlined text-[16px]">check_circle</span> 842 Passkeys Enrolled</span>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between gap-space-sm">
<span className="px-space-sm py-1 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold tracking-wide">ACTIVE</span>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">100%</span>
<button className="interactive-toggle w-12 h-6 bg-primary rounded-full p-0.5 flex items-center justify-end transition-colors" data-active="true">
<div className="w-5 h-5 rounded-full bg-on-primary shadow-sm"></div>
</button>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm">
<div className="flex justify-between items-center mb-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Rollout Saturation</span>
<span className="font-bold text-primary">100%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "100%"}}></div>
</div>
</div>
</div>
</div>
<div className="xl:col-span-4 sticky top-20 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">manage_search</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Inspector Panel</h2>
</div>
<span className="font-label-sm text-label-sm uppercase px-space-xs py-0.5 bg-surface-container rounded text-on-surface-variant font-mono">LIVE EVAL</span>
</div>
<div className="p-space-md bg-surface-container-low rounded-xl mb-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Target Feature Key</span>
<span className="font-mono text-primary font-bold font-label-lg text-label-lg break-all select-all" id="inspectKey">gate.two_factor.photo_match_enforced</span>
</div>
<div className="flex flex-col gap-space-sm mb-space-md">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Impact Assessment</span>
<span className="font-label-sm text-label-sm bg-error-container text-on-error-container font-bold px-space-xs py-0.5 rounded">Tier 1: High Safety</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface bg-surface-container-lowest p-space-sm rounded-lg" id="inspectDescription">
            Policy Tier: High. Any modification directly impacts physical campus child safeguarding and perimeter custody control.
          </p>
</div>
<div className="flex flex-col gap-space-xs mb-space-lg">
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Target Runtime Module</span>
<span className="font-semibold text-primary" id="inspectModule">Gate Kiosk</span>
</div>
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Active Population Scope</span>
<span className="font-semibold text-on-surface" id="inspectScope">All Terminals</span>
</div>
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Canary Saturation</span>
<span className="font-mono font-bold text-primary" id="inspectRollout">100%</span>
</div>
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="text-on-surface-variant">Audit Signature</span>
<span className="font-mono text-[11px] text-on-surface-variant">sha256:d8b2...9f01</span>
</div>
</div>
<div className="p-space-md bg-surface-container rounded-xl mb-space-lg">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">lock_clock</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold text-primary uppercase">Locked to Change Request</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                To modify this toggle in Production, a Change Request must be submitted to Headmaster or Headteacher Dr. Elizabeth Appiah for dual-custody authorization.
              </p>
</div>
</div>
</div>
<a className="w-full flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary transition-all font-label-lg text-label-lg shadow-sm" data-path="change-requests" href="/sysadmin/changes">
<span className="material-symbols-outlined text-[18px]">post_add</span>
          Compose Change Request for this Flag
        </a>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-lg text-label-lg text-primary">Recent Audit Trail</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Immutable Stream</span>
</div>
<div className="space-y-space-sm">
<div className="flex items-start gap-space-xs">
<span className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0"></span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Flag Rollout Adjusted (25%)</span>
<span className="font-mono text-[11px] text-on-surface-variant">portal.parent.live_dismissal_radar</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">Today at 10:14 GMT • Kwabena Boateng</span>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed mt-1.5 shrink-0"></span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Change Request #CR-2026-08 Approved</span>
<span className="font-mono text-[11px] text-on-surface-variant">grading.ges.continuous_assessment_v3</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">Yesterday at 15:42 GMT • Dr. Elizabeth Appiah</span>
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
