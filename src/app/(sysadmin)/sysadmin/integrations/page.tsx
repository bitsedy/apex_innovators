"use client";

import React from "react";
import Link from "next/link";

// Super Admin Integrations
export default function IntegrationsPage() {
  return (
    <>
<div className="flex flex-col w-full pb-space-xl">

<div className="w-full h-1.5 flex mb-space-lg rounded-full overflow-hidden shadow-sm">
<div className="h-full w-1/3 bg-[#38BDF8]"></div>
<div className="h-full w-1/3 bg-secondary"></div>
<div className="h-full w-1/3 bg-on-tertiary-container"></div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary-container text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
          EXTERNAL CONNECTORS &amp; API GOVERNANCE • TIER 0 BUS
        </span>
<span className="hidden sm:inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
          STAGING: SYNCED
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Integrations &amp; API Gateway Hub</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl mt-0.5">
        Manage statutory telecommunications, national identity verification endpoints (Ghana NIA), school inspectorate EMIS sync (NaSIA), and cryptographic developer API credentials.
      </p>
</div>

<div className="flex items-center gap-space-sm shrink-0 self-start lg:self-center">
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-all duration-150 shadow-sm active:scale-95" id="btn-test-all">
<span className="material-symbols-outlined text-[18px] text-primary">network_ping</span>
        Test All Endpoints
      </button>
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all duration-150 shadow-sm hover:shadow-md active:scale-95">
<span className="material-symbols-outlined text-[18px]">add_link</span>
        + Add New Connector
      </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Active Integrations</span>
<span className="material-symbols-outlined text-on-tertiary-container bg-surface-container-low p-1.5 rounded-lg text-[20px]">sync_saved_locally</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary font-extrabold">6</span>
<span className="font-label-lg text-label-lg text-on-tertiary-container font-bold">Connected</span>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant mt-space-xs">
<span>0 Active Outages</span>
<span className="text-on-tertiary-container font-semibold">100% Up</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">24h External API Calls</span>
<span className="material-symbols-outlined text-primary bg-surface-container-low p-1.5 rounded-lg text-[20px]">stacked_line_chart</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary font-extrabold">48,920</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">reqs</span>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant mt-space-xs">
<span className="text-on-tertiary-container font-semibold">99.94% Success Rate</span>
<span>+12.4% vs yday</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">SMS Dispatch Credit</span>
<span className="material-symbols-outlined text-secondary-container bg-surface-container-low p-1.5 rounded-lg text-[20px]">sms</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary font-extrabold">GHS 8,420.50</span>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant mt-space-xs">
<span className="text-primary font-semibold">~42,100 SMS left</span>
<span className="text-secondary font-medium">Auto-top up @ GHS 500</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Webhook Latency (P95)</span>
<span className="material-symbols-outlined text-[#38BDF8] bg-surface-container-low p-1.5 rounded-lg text-[20px]">speed</span>
</div>
<div className="mt-space-sm">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary font-extrabold">114</span>
<span className="font-headline-sm text-headline-sm text-primary font-semibold">ms</span>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant mt-space-xs">
<span className="text-on-tertiary-container font-semibold">Healthy target &lt; 250ms</span>
<span>1.2k events/hr</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md mb-space-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<h2 className="font-headline-md text-headline-md text-primary">Core Gateways &amp; Statutory Systems</h2>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant">Tier-0 SLA Monitored</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
<div>

<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">phonelink_ring</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-primary">Hubtel / Ghana Telco Gateway</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Direct SMPP Pipe (MTN, Telecel, AT Ghana)</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-[#DCFCE7] text-[#166534] font-label-sm text-label-sm font-bold tracking-wide shrink-0">
<span className="w-2 h-2 rounded-full bg-[#166534] animate-ping"></span>
              ONLINE • 99.8% DELIVERY
            </span>
</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Primary carrier for real-time 2FA security codes, parental emergency broadcasts, gate security student sign-out SMS pings, and fees accounting reminders.
          </p>

<div className="grid grid-cols-3 gap-space-sm bg-surface-container-low p-space-sm rounded-lg mb-space-md text-center">
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Dispatched Today</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">1,420</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Avg SMS Latency</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">840ms</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Sender Mask</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">CAREPOINT</span>
</div>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest">
<div className="flex items-center gap-space-xs text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified</span>
            TLS 1.3 mTLS Active
          </div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors">
              Rotate API Key
            </button>
<button className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors">
              Configure Sender ID
            </button>
<button className="px-space-sm py-1 rounded bg-primary-container text-on-primary hover:bg-primary font-label-sm text-label-sm transition-colors">
              Test SMS
            </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
<div>

<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">badge</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-primary">Ghana NIA National ID Gateway</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Statutory Biometric Verification API</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold tracking-wide shrink-0">
<span className="material-symbols-outlined text-[14px]">lock</span>
              FIPS 140-3 ENCRYPTED
            </span>
</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Authoritative Ghana Card identity verification connector. Cross-validates parents, teaching faculty, security drivers, and authorized student pickup escorts against national civil registries.
          </p>

<div className="grid grid-cols-3 gap-space-sm bg-surface-container-low p-space-sm rounded-lg mb-space-md text-center">
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Queries Today</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">18</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Biometric Accuracy</span>
<span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold tabular-nums">100%</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Cert Expiry</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">142 Days</span>
</div>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest">
<div className="flex items-center gap-space-xs text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">encrypted</span>
            SHA-256 HSM Token Signed
          </div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors">
              Audit Certificate
            </button>
<button className="px-space-sm py-1 rounded bg-primary-container text-on-primary hover:bg-primary font-label-sm text-label-sm transition-colors">
              View Schema
            </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
<div>

<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">account_balance</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-primary">NaSIA National EMIS Cloud Sync</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">National Schools Inspectorate Authority Connector</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-[#FEF3C7] text-[#92400E] font-label-sm text-label-sm font-bold tracking-wide shrink-0">
<span className="material-symbols-outlined text-[14px]">schedule</span>
              SYNCHRONIZED (CRON: 1H)
            </span>
</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Mandatory statutory ledger synchronization. Pushes accredited teacher licensing verification codes, classroom headcounts, curriculum compliance, and daily attendance records to the Ghana MoE EMIS repository.
          </p>

<div className="grid grid-cols-3 gap-space-sm bg-surface-container-low p-space-sm rounded-lg mb-space-md text-center">
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Last Sync Cycle</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">14:00 GMT</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Records Pushed</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">1,248</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Audit Nonce</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">#EMIS-982</span>
</div>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest">
<div className="flex items-center gap-space-xs text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container">cloud_done</span>
            Status: Fully Compliant
          </div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors">
              Download Sync Report
            </button>
<button className="px-space-sm py-1 rounded bg-secondary-container hover:bg-secondary text-on-secondary font-label-sm text-label-sm transition-colors">
              Force Manual Sync
            </button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
<div>

<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">forward_to_inbox</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-primary">AWS SES &amp; Postmark SMTP Relay</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">High-Deliverability Institutional Mail Pipeline</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-[#DCFCE7] text-[#166534] font-label-sm text-label-sm font-bold tracking-wide shrink-0">
<span className="w-2 h-2 rounded-full bg-[#166534]"></span>
              HEALTHY • 99.8 REPUTATION
            </span>
</div>

<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Transactional email transport responsible for admission offer letters, terminal report cards with encrypted PDF payloads, password resets, and verified tuition invoice receipts.
          </p>

<div className="grid grid-cols-3 gap-space-sm bg-surface-container-low p-space-sm rounded-lg mb-space-md text-center">
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Bounce Rate</span>
<span className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold tabular-nums">0.08%</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">DMARC / SPF</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">Enforced</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Daily Sent</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">4,310</span>
</div>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest">
<div className="flex items-center gap-space-xs text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified_user</span>
            DKIM Keys Valid (1024/2048-bit)
          </div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors">
              Suppression List
            </button>
<button className="px-space-sm py-1 rounded bg-primary-container text-on-primary hover:bg-primary font-label-sm text-label-sm transition-colors">
              View Deliverability
            </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg mb-space-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<h2 className="font-headline-md text-headline-md text-primary">Issued Developer &amp; Peripheral API Credentials</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Scoped machine-to-machine tokens active across hardware turnstiles, parent mobile application hubs, and ministry audit conduits.
        </p>
</div>
<button className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm self-start md:self-auto transition-colors">
<span className="material-symbols-outlined text-[18px]">key</span>
        Issue New API Secret
      </button>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm px-space-md rounded-l-lg">Credential / Client Identifier</th>
<th className="py-space-sm px-space-md">Access Scopes</th>
<th className="py-space-sm px-space-md">IP Restrictions</th>
<th className="py-space-sm px-space-md">Last Handshake</th>
<th className="py-space-sm px-space-md">Status</th>
<th className="py-space-sm px-space-md text-right rounded-r-lg">Manage Actions</th>
</tr>
</thead>
<tbody className="divide-y-0">

<tr className="hover:bg-surface-container transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">sensor_door</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary font-bold font-mono">gate-kiosk-turnstile-subsystem-v2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Created 14 Jan 2026 • RSA-PSS</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[11px] font-semibold">gate:read</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[11px] font-semibold">kiosk:write</span>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-mono text-[11px] font-semibold">biometric:verify</span>
</div>
</td>
<td className="py-space-md px-space-md font-mono text-[12px] text-on-surface">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface">10.142.4.0/24 (VLAN-9)</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-tertiary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                2 mins ago
              </div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex px-space-sm py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] font-label-sm text-label-sm font-bold">
                ACTIVE
              </span>
</td>
<td className="py-space-md px-space-md text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Copy API Key Token">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
<button className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Rotate Secret Key">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
</button>
<button className="p-1.5 rounded bg-surface-container hover:bg-error-container text-secondary transition-colors" title="Revoke Token Immediately">
<span className="material-symbols-outlined text-[16px]">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">smartphone</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary font-bold font-mono">parent-mobile-app-gateway-prod</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Created 02 Feb 2026 • OAuth2 Bearer</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[11px] font-semibold">parent:read</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[11px] font-semibold">push:dispatch</span>
</div>
</td>
<td className="py-space-md px-space-md font-mono text-[12px] text-on-surface-variant">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface">Any CloudFront Edge</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-tertiary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                8 secs ago
              </div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex px-space-sm py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] font-label-sm text-label-sm font-bold">
                ACTIVE
              </span>
</td>
<td className="py-space-md px-space-md text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Copy API Key Token">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
<button className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Rotate Secret Key">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
</button>
<button className="p-1.5 rounded bg-surface-container hover:bg-error-container text-secondary transition-colors" title="Revoke Token Immediately">
<span className="material-symbols-outlined text-[16px]">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="py-space-md px-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary font-bold font-mono">nasia-inspectorate-read-token</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Created 01 Jan 2026 • Statutory Read</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md">
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-mono text-[11px] font-semibold">audit:statutory:read</span>
</div>
</td>
<td className="py-space-md px-space-md font-mono text-[12px] text-on-surface">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface">197.251.134.0/24 (Gov.gh)</span>
</td>
<td className="py-space-md px-space-md">
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                Today 08:30 GMT
              </div>
</td>
<td className="py-space-md px-space-md">
<span className="inline-flex px-space-sm py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] font-label-sm text-label-sm font-bold">
                ACTIVE
              </span>
</td>
<td className="py-space-md px-space-md text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Copy API Key Token">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
<button className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Rotate Secret Key">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
</button>
<button className="p-1.5 rounded bg-surface-container hover:bg-error-container text-secondary transition-colors" title="Revoke Token Immediately">
<span className="material-symbols-outlined text-[16px]">block</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-space-md">

<div className="xl:col-span-2 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
<div className="flex items-center justify-between mb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
<h2 className="font-headline-md text-headline-md text-primary">Subscribed Webhook Egress Points</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Automated JSON payload distribution triggered on critical physical security and child safeguarding events.
          </p>
</div>
<button className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm transition-colors">
<span className="material-symbols-outlined text-[16px]">add</span>
          Register Webhook
        </button>
</div>
<div className="space-y-space-sm">

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="p-2 rounded-lg bg-surface-container text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">sync_alt</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-primary font-mono truncate">https://events.carepoint.edu.gh/webhooks/gate-turnstile-swipe</span>
<div className="flex items-center gap-space-xs mt-1 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono text-[11px]">gate.event.pass_granted</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Signature HMAC-SHA256</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">• 100% Success (P99 82ms)</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end md:self-center">
<button className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm shadow-sm transition-colors">
              Dispatch Ping
            </button>
<button className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm shadow-sm transition-colors">
              Payload Logs
            </button>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm min-w-0">
<div className="p-2 rounded-lg bg-error-container text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]">notifications_active</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-primary font-mono truncate">https://security.carepoint.edu.gh/alerts/safeguarding-lockdown</span>
<div className="flex items-center gap-space-xs mt-1 flex-wrap">
<span className="px-2 py-0.5 rounded bg-error-container text-secondary font-mono text-[11px] font-bold">safeguarding.alarm.triggered</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Zero-Drop Queue Retries</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">• 100% Success (P99 44ms)</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end md:self-center">
<button className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm shadow-sm transition-colors">
              Dispatch Ping
            </button>
<button className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm shadow-sm transition-colors">
              Payload Logs
            </button>
</div>
</div>
</div>
</div>

<div className="bg-primary text-on-primary rounded-xl p-space-lg flex flex-col justify-between shadow-md">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest font-semibold">Ghana Cyber Security Authority</span>
<span className="material-symbols-outlined text-secondary-fixed text-[22px]">policy</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary mb-space-xs">CII Sector Compliance Notice</h3>
<p className="font-body-sm text-body-sm text-primary-fixed-dim mb-space-md leading-relaxed">
          Under Act 1038 of the Ghana Cybersecurity Act, all student biometric and parental mobile endpoints must operate TLS 1.3 with cryptographic forward secrecy. External API keys undergo automatic 90-day rotation prompts.
        </p>

<div className="space-y-space-xs bg-primary-container p-space-md rounded-lg">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-primary-fixed">National Data Protection Act 843</span>
<span className="text-tertiary-fixed font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Attested
            </span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-primary-fixed">NaSIA EMIS Encryption Schema</span>
<span className="text-tertiary-fixed font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Compliant
            </span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-primary-fixed">Next Tier-0 Audit Window</span>
<span className="text-primary-fixed-dim font-mono">18 Days</span>
</div>
</div>
</div>
<div className="pt-space-md mt-space-md">
<button className="w-full py-space-sm px-space-md rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-colors font-bold text-center">
          Download System Architecture Brief
        </button>
</div>
</div>
</div>
</div>

    </>
  );
}
