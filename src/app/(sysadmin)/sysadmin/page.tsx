"use client";

import React from "react";
import Link from "next/link";

// Super Admin Telemetry
export default function SysadminPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="relative overflow-hidden rounded-xl bg-primary text-on-primary p-space-lg shadow-md mb-space-lg">
<div className="absolute -right-12 -top-12 w-96 h-96 bg-primary-container rounded-full opacity-30 blur-3xl pointer-events-none"></div>
<div className="absolute right-48 -bottom-16 w-64 h-64 bg-surface-tint rounded-full opacity-20 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-lowest/15 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            PRODUCTION (ACCRA CLOUD POD-A)
          </span>
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">verified</span>
            99.984% (30-day SLA compliant)
          </span>
<span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-surface-container-highest/20 text-on-primary-container font-label-sm text-label-sm font-mono">
            v4.8.2-prod
          </span>
</div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-space-xs sm:gap-space-sm mt-1">
<span className="font-headline-md text-headline-md text-on-primary tracking-tight">Technical Operations &amp; Infrastructure Telemetry</span>
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest hidden md:inline">Tier 0 Supervisory Bus</span>
</div>
<p className="font-body-sm text-body-sm text-primary-fixed-dim max-w-3xl">
          Core microservice heartbeats, perimeter biometric turnstiles, and national sync queues for Carepoint Community School campuses.
        </p>
</div>
<div className="flex items-center gap-space-sm shrink-0 self-start xl:self-auto">
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary transition-all shadow-sm font-label-lg text-label-lg active:scale-95" id="btn-refresh">
<span className="material-symbols-outlined text-[18px]" id="refresh-icon">sync</span>
<span>Probe Sync</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container transition-all shadow-md font-label-lg text-label-lg active:scale-95">
<span className="material-symbols-outlined text-[18px]">security</span>
<span>Emergency Bypass</span>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cluster Health</span>
<span className="font-headline-lg text-headline-lg text-primary tracking-tight mt-0.5">99.99%</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">dns</span>
</div>
</div>
<div className="mt-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Active Nodes</span>
<span className="text-on-surface font-semibold">4 / 4 Synced</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "100%"}}></div>
</div>
<div className="grid grid-cols-2 gap-space-xs pt-1 font-label-sm text-label-sm">
<div className="flex items-center justify-between px-2 py-1 rounded bg-surface-container-low">
<span className="text-on-surface-variant">CPU</span>
<span className="font-mono font-bold text-on-surface">28%</span>
</div>
<div className="flex items-center justify-between px-2 py-1 rounded bg-surface-container-low">
<span className="text-on-surface-variant">MEM</span>
<span className="font-mono font-bold text-on-surface">44%</span>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">End-to-End Latency</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight">42</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">ms (P95)</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">speed</span>
</div>
</div>
<div className="mt-space-md flex flex-col gap-1.5 font-label-sm text-label-sm">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-surface-tint"></span>
            API Gateway
          </span>
<span className="font-mono font-bold text-on-surface">18ms</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            DB Primary Read
          </span>
<span className="font-mono font-bold text-on-surface">6ms</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Turnstile MQTT
          </span>
<span className="font-mono font-bold text-on-surface">14ms</span>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Connected Nodes</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight">568</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-mono">Live Sockets</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">hub</span>
</div>
</div>
<div className="mt-space-md grid grid-cols-2 gap-space-xs font-label-sm text-label-sm">
<div className="p-1.5 rounded bg-surface-container-low flex flex-col">
<span className="text-on-surface-variant text-[10px] uppercase">Turnstiles</span>
<span className="font-mono font-bold text-primary text-body-sm">12</span>
</div>
<div className="p-1.5 rounded bg-surface-container-low flex flex-col">
<span className="text-on-surface-variant text-[10px] uppercase">Staff Portal</span>
<span className="font-mono font-bold text-primary text-body-sm">34</span>
</div>
<div className="p-1.5 rounded bg-surface-container-low flex flex-col">
<span className="text-on-surface-variant text-[10px] uppercase">Parent App</span>
<span className="font-mono font-bold text-primary text-body-sm">518</span>
</div>
<div className="p-1.5 rounded bg-surface-container-low flex flex-col">
<span className="text-on-surface-variant text-[10px] uppercase">SuperAdmins</span>
<span className="font-mono font-bold text-primary text-body-sm">4</span>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">24h Error Radar</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-headline-lg text-headline-lg text-secondary tracking-tight">3</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Handled Events</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">radar</span>
</div>
</div>
<div className="mt-space-md flex flex-col gap-space-xs font-label-sm text-label-sm">
<div className="flex items-center justify-between p-1.5 rounded bg-surface-container-low">
<span className="text-on-surface-variant">Critical Unhandled</span>
<span className="font-mono font-bold text-tertiary">0 Faults</span>
</div>
<div className="flex items-center justify-between p-1.5 rounded bg-surface-container-low">
<span className="text-on-surface-variant">HTTP 429 Throttle</span>
<span className="font-mono font-bold text-secondary">3 Backoffs (SMS)</span>
</div>
<div className="flex items-center gap-1 text-[10px] text-on-surface-variant">
<span className="material-symbols-outlined text-[13px] text-tertiary">check_circle</span>
<span>Zero packet loss on biometric endpoints</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
<div className="lg:col-span-6 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">view_in_ar</span>
<span className="font-headline-sm text-headline-sm text-primary">Microservice Runtime Matrix</span>
</div>
<span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-mono">5/5 OPERATIONAL</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5">
<span className="material-symbols-outlined text-[18px]">door_sliding</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-primary">Gate IoT Turnstile Broker</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-primary text-on-primary">MQTT v5</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">12 nodes online (Main Gate, KG Wing, Staff Quad, Field Arch)</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-tertiary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> 0 Drops
            </span>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5">
<span className="material-symbols-outlined text-[18px]">sms</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-primary">SMS &amp; Dispatch Gateway</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-surface-container-highest text-on-surface">GH-TELCO</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ghana MTN &amp; Telecel primary routes • 99.4% delivery rate</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">
              Queue: 0
            </span>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5">
<span className="material-symbols-outlined text-[18px]">sync_saved_locally</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-primary">NaSIA National EMIS Sync</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-surface-container-highest text-on-surface">CRON 1h</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">National School Inspectorate Authority compliance pipeline</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-mono">
              Last: 14:00 GMT
            </span>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5">
<span className="material-symbols-outlined text-[18px]">database</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-primary">PostgreSQL Primary &amp; Read-Replicas</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-surface-container-highest text-on-surface">HA-WAL</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Replication delta: 1.2ms • Conns: 48/200 alloc (PgBouncer pool)</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-tertiary-container font-label-sm text-label-sm font-semibold">
              Syncd
            </span>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow transition-shadow">
<div className="flex items-start justify-between">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mt-0.5">
<span className="material-symbols-outlined text-[18px]">memory</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-primary">Redis Session &amp; Token Cache</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-surface-container-highest text-on-surface">IN-MEM</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Cache hit ratio: 96.8% • Total keys: 14,812 • Memory: 312MB</span>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-tertiary-container font-label-sm text-label-sm font-mono font-semibold">
              96.8% Hit
            </span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">show_chart</span>
<span className="font-headline-sm text-headline-sm text-primary">Telemetry Velocity &amp; Dismissal Peak</span>
</div>
<div className="flex items-center gap-2 font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-primary"></span> Requests/s</span>
<span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-secondary"></span> Gate Events</span>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between h-full">
<div>
<div className="flex items-center justify-between pb-space-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Current Ingress Velocity</span>
<span className="font-headline-md text-headline-md text-primary font-mono">184 req/sec</span>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-secondary-fixed/50 text-secondary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="font-label-sm text-label-sm font-bold">Peak Surge Window (14:00 - 15:30 GMT)</span>
</div>
</div>
<div className="w-full h-52 mt-space-sm relative">
<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 160">
<defs>
<linearGradient id="reqGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#011549" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#011549" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="gateGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#ba0a0c" stopOpacity="0.2"></stop>
<stop offset="100%" stopColor="#ba0a0c" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
<line stroke="#e9eef8" strokeDasharray="3 3" x1="0" x2="500" y1="30" y2="30"></line>
<line stroke="#e9eef8" strokeDasharray="3 3" x1="0" x2="500" y1="80" y2="80"></line>
<line stroke="#e9eef8" strokeDasharray="3 3" x1="0" x2="500" y1="130" y2="130"></line>
<path d="M 0 140 Q 60 135, 120 125 T 220 110 T 300 40 T 360 25 T 420 70 T 500 95 L 500 160 L 0 160 Z" fill="url(#reqGradient)"></path>
<path d="M 0 140 Q 60 135, 120 125 T 220 110 T 300 40 T 360 25 T 420 70 T 500 95" fill="none" stroke="#011549" strokeWidth="2.5"></path>
<path d="M 0 155 Q 80 150, 160 148 T 260 140 T 320 60 T 380 40 T 430 110 T 500 140 L 500 160 L 0 160 Z" fill="url(#gateGradient)"></path>
<path d="M 0 155 Q 80 150, 160 148 T 260 140 T 320 60 T 380 40 T 430 110 T 500 140" fill="none" stroke="#ba0a0c" strokeDasharray="4 2" strokeWidth="2"></path>
<circle cx="360" cy="25" fill="#011549" r="4"></circle>
<circle cx="380" cy="40" fill="#ba0a0c" r="4"></circle>
</svg>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant font-mono pt-2">
<span>08:00 (Arrivals)</span>
<span>11:30 (Break Time)</span>
<span className="text-secondary font-bold">14:30 (Dismissal Peak)</span>
<span>17:00 (Extracurricular)</span>
</div>
</div>
<div className="mt-space-md pt-space-md bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">query_stats</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary font-bold">Capacity Auto-Scale Reserve</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Accra Node Scaled from 2 to 4 workers automatically at 14:15 GMT.</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-mono uppercase bg-surface-container-lowest px-2 py-1 rounded shadow-sm">OPTIMAL</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-space-md mb-space-lg">
<div className="flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">dvr</span>
<span className="font-headline-sm text-headline-sm text-primary">Recent Critical Exception &amp; Log Stream</span>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-1 bg-surface-container rounded-lg px-space-sm py-1 font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="text-on-surface font-mono">Stream: Active (Tail 100)</span>
</div>
<button className="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" id="btn-clear-logs">Clear Filter</button>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
<div className="p-space-md bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-secondary text-on-secondary">WARN</span>
<span className="font-mono font-bold text-on-surface text-body-sm">14:28:12 GMT</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Service: <code className="font-mono text-primary font-bold">turnstile-iot-ingest-01</code></span>
</div>
<div className="flex items-center gap-space-sm">
<span className="text-label-sm font-label-sm text-secondary font-mono">MatchLatencyExceeded (&gt;350ms)</span>
<button className="px-2 py-1 rounded bg-surface-container-highest hover:bg-surface-dim font-label-sm text-label-sm text-on-surface transition-colors flex items-center gap-1" >
<span className="material-symbols-outlined text-[14px]">terminal</span>
<span>Inspect Stack</span>
</button>
</div>
</div>
<div className="px-space-md py-space-sm text-body-sm font-body-sm text-on-surface">
<span>Turnstile-01A (West Pedestrian Gate): Biometric vector embed match latency reached 382ms under heavy crowd surge. Buffer auto-recovered in 120ms without ticket stall.</span>
</div>
<div className="hidden px-space-md py-space-sm bg-primary text-primary-fixed font-mono text-[11px] leading-relaxed overflow-x-auto" id="trace-1">
<p className="text-secondary-fixed">WARN: [WorkerPool-4] Node turnstile-broker-a2 latency spike: 382ms (Threshold: 350ms)</p>
<p className="text-primary-fixed-dim">  at EdgeMatchPipeline.computeCosineDistance (/app/services/biometric/engine.ts:184:14)</p>
<p className="text-primary-fixed-dim">  at async IngestBroker.handleCardSwipe (/app/services/turnstile/broker.ts:92:9)</p>
<p className="text-tertiary-fixed">INFO: [Self-Healing] Queue cleared in 120ms. Hardware worker threads rebalanced (0 dropped).</p>
</div>
<div className="p-space-md bg-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-primary text-on-primary">INFO</span>
<span className="font-mono font-bold text-on-surface text-body-sm">14:00:04 GMT</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Service: <code className="font-mono text-primary font-bold">nasia-emis-worker</code></span>
</div>
<div className="flex items-center gap-space-sm">
<span className="text-label-sm font-label-sm text-on-tertiary-container font-mono">SyncCycleComplete (HTTP 200)</span>
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high font-label-sm text-label-sm text-on-surface transition-colors flex items-center gap-1" >
<span className="material-symbols-outlined text-[14px]">terminal</span>
<span>Inspect Details</span>
</button>
</div>
</div>
<div className="px-space-md py-space-sm text-body-sm font-body-sm text-on-surface">
<span>National EMIS payload dispatched to Ministry of Education portal. 1,248 student attendance signatures validated and committed.</span>
</div>
<div className="hidden px-space-md py-space-sm bg-primary text-primary-fixed font-mono text-[11px] leading-relaxed overflow-x-auto" id="trace-2">
<p className="text-tertiary-fixed">SUCCESS: NaSIA Batch Transmission #2026-0414-1400</p>
<p className="text-primary-fixed-dim">  Payload size: 1.4 MB (GZipped) • Transmission duration: 840ms</p>
<p className="text-primary-fixed-dim">  Remote Endpoint: emis.gov.gh/api/v2/schools/GH-ACC-CPCS-092/ingest</p>
</div>
<div className="p-space-md bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-secondary-container text-on-secondary-container">WARN</span>
<span className="font-mono font-bold text-on-surface text-body-sm">13:42:19 GMT</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Service: <code className="font-mono text-primary font-bold">telecom-hub-sms</code></span>
</div>
<div className="flex items-center gap-space-sm">
<span className="text-label-sm font-label-sm text-secondary font-mono">RateLimitTriggered (HTTP 429)</span>
<button className="px-2 py-1 rounded bg-surface-container-highest hover:bg-surface-dim font-label-sm text-label-sm text-on-surface transition-colors flex items-center gap-1" >
<span className="material-symbols-outlined text-[14px]">terminal</span>
<span>Inspect Stack</span>
</button>
</div>
</div>
<div className="px-space-md py-space-sm text-body-sm font-body-sm text-on-surface">
<span>Upstream carrier gateway rate-limited batch SMS (Grade 3 excursion reminder). Exponential backoff activated; 35 messages dispatched after 2.4s pause.</span>
</div>
<div className="hidden px-space-md py-space-sm bg-primary text-primary-fixed font-mono text-[11px] leading-relaxed overflow-x-auto" id="trace-3">
<p className="text-secondary-fixed">WARN: MTN Ghana Ingress returned HTTP 429 (Too Many Requests)</p>
<p className="text-primary-fixed-dim">  Queue paused for 2400ms. Re-route via secondary Telecel pipe initiated.</p>
<p className="text-tertiary-fixed">RESOLVED: All 35 queued notifications delivered with recipient confirmation 13:42:23 GMT.</p>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm mb-space-lg flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">bolt</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary">SysOps Quick Actions</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Routine operations execute without downtime. Schema changes require Change Request protocol.</span>
</div>
</div>
<div className="flex items-center gap-space-xs flex-wrap">
<button className="px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm transition-all active:scale-95 flex items-center gap-1" >
<span className="material-symbols-outlined text-[16px]">cached</span>
<span>Flush Edge CDN</span>
</button>
<button className="px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm transition-all active:scale-95 flex items-center gap-1" >
<span className="material-symbols-outlined text-[16px]">network_ping</span>
<span>Trigger Health Probe</span>
</button>
<button className="px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm transition-all active:scale-95 flex items-center gap-1" >
<span className="material-symbols-outlined text-[16px]">archive</span>
<span>Dump Diagnostic Bundle</span>
</button>
<button className="px-space-md py-space-xs rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm transition-all active:scale-95 flex items-center gap-1 shadow-sm" >
<span className="material-symbols-outlined text-[16px]">edit_calendar</span>
<span>Propose Maintenance Window</span>
</button>
</div>
</div>
<div className="rounded-xl bg-surface-container-high p-space-md mb-space-lg flex items-start gap-space-sm shadow-sm">
<span className="material-symbols-outlined text-secondary text-[24px] shrink-0 mt-0.5">policy</span>
<div className="flex flex-col gap-1">
<span className="font-label-lg text-label-lg text-primary uppercase tracking-wide">Governance Notice &amp; System Operating Procedure</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Architectural parameter modification, database schema migrations, and role escalation require formal submission to the <strong className="text-on-surface">Change Requests queue</strong>. Technical Operations Lead holds execution authority; approval authority remains with the Head of School and Academic Principal.
      </p>
</div>
</div>
<div className="fixed bottom-6 right-6 px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-xl transition-all duration-300 transform translate-y-20 opacity-0 flex items-center gap-2 z-50" id="toast">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">check_circle</span>
<span id="toast-text">Operation completed.</span>
</div>
</div>

    </>
  );
}
