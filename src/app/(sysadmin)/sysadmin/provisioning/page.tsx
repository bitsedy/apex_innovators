"use client";

import React from "react";
import Link from "next/link";

// Super Admin Provisioning
export default function ProvisioningPage() {
  return (
    <>
<div className="flex flex-col w-full pb-space-xl">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md py-space-lg mb-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="px-space-sm py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest">SysOps Layer 0</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">• Cryptographic Identity Core</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Identity Infrastructure &amp; User Provisioning Engine</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
        Low-level account generation, directory synchronization, and cryptographic access lifecycle management.
      </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-sm" id="btnOpenDrawer">
<span className="material-symbols-outlined text-[20px]">group_add</span>
        + Batch Provision Accounts (CSV / EMIS)
      </button>
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg transition-colors">
<span className="material-symbols-outlined text-[18px]">sync_alt</span>
        Sync GES EMIS
      </button>
<div className="relative inline-block text-left" id="moreActionsDropdownWrapper">
<button className="flex items-center gap-space-xs px-space-sm py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors" id="moreActionsBtn">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
<div className="hidden absolute right-0 mt-2 w-56 rounded-xl bg-surface-container-lowest shadow-xl z-50 p-space-xs flex flex-col gap-1" id="moreActionsMenu">
<button className="flex items-center gap-space-xs w-full text-left px-space-sm py-space-xs rounded-lg hover:bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-secondary text-[16px]">lock_reset</span>
            Batch Reset Passphrases
          </button>
<button className="flex items-center gap-space-xs w-full text-left px-space-sm py-space-xs rounded-lg hover:bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-primary text-[16px]">file_download</span>
            Export Provisioning Manifest
          </button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Total Provisioned</span>
<div className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs">1,248</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">System Identities Bound</div>
</div>
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">fingerprint</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-surface-container-low rounded-lg p-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Faculty: <strong className="text-on-surface">42</strong></span>
<span>Kiosks: <strong className="text-on-surface">8</strong></span>
<span>Parents: <strong className="text-on-surface">780</strong></span>
<span>Students: <strong className="text-on-surface">418</strong></span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Staged &amp; Pending Token</span>
<div className="font-headline-lg text-headline-lg text-secondary tracking-tight mt-space-xs">14</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Awaiting first credential setup</div>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">hourglass_top</span>
</div>
</div>
<div className="mt-space-md flex items-center gap-space-xs">
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full" style={{"width": "14%"}}></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant tabular-nums">98.8% Active</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Revoked / Suspended</span>
<div className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">02</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Zero-trust hold or expired</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">gavel</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 text-error">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> 1 Security Hold
        </span>
<span className="text-on-surface-variant">1 Expired Guest</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Hard Token Assignments</span>
<div className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs">18</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">FIPS YubiKey &amp; Kiosk Nodes</div>
</div>
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined">usb</span>
</div>
</div>
<div className="mt-space-md flex items-center gap-space-xs text-on-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span>100% cryptographic enforcement on Tier 0</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden">

<div className="flex flex-wrap items-center justify-between px-space-md pt-space-sm bg-surface-container-low">
<div className="flex items-center gap-space-xs overflow-x-auto">
<button className="px-space-md py-space-sm font-label-lg text-label-lg rounded-t-lg bg-surface-container-lowest text-primary shadow-sm flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px]">manage_accounts</span>
          Account Directory &amp; Deactivation
        </button>
<button className="px-space-md py-space-sm font-label-lg text-label-lg rounded-t-lg text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px]">publish</span>
          Batch Ingestion Pipeline
          <span className="px-1.5 py-0.2 bg-secondary text-on-primary text-[10px] rounded-full font-bold">4 Staged</span>
</button>
<button className="px-space-md py-space-sm font-label-lg text-label-lg rounded-t-lg text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px]">security_key</span>
          Hardware Token Assignment
        </button>
<button className="px-space-md py-space-sm font-label-lg text-label-lg rounded-t-lg text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px]">history</span>
          Access Reset Log
        </button>
</div>

<div className="flex items-center gap-space-xs py-space-xs">
<div className="relative">
<span className="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-[18px]">search</span>
<input className="pl-8 pr-space-md py-1.5 text-body-sm font-body-sm bg-surface-container-lowest text-on-surface rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm w-64" placeholder="Filter by UUID or Principal..." type="text"/>
</div>
<button className="px-space-sm py-1.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-md hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">tune</span>
          Filter
        </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm px-space-md font-bold">UUID / System ID</th>
<th className="py-space-sm px-space-md font-bold">Principal Username</th>
<th className="py-space-sm px-space-md font-bold">Role Template</th>
<th className="py-space-sm px-space-md font-bold">Auth Binding</th>
<th className="py-space-sm px-space-md font-bold">Lifecycle Status</th>
<th className="py-space-sm px-space-md font-bold">Provisioned At</th>
<th className="py-space-sm px-space-md font-bold text-right">Cryptographic Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container text-body-sm font-body-sm">

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-space-sm px-space-md font-mono text-[12px] text-primary font-bold">usr_acc_0912</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="text-on-surface font-bold">e.appiah@carepoint.edu.gh</span>
<span className="text-on-surface-variant text-[11px]">Elizabeth Appiah (Executive Principal)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wide">
                HEADMASTER_OR_HEADTEACHER_ADMIN
              </span>
</td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-[18px] text-primary">key</span>
<span>FIPS YubiKey 5C NFC + Biometrics</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Active
              </span>
</td>
<td className="py-space-sm px-space-md font-mono text-[12px] text-on-surface-variant">2024-01-10 08:33 GMT</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-primary" title="Reset Credentials">
<span className="material-symbols-outlined text-[18px]">lock_reset</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-secondary" title="Invalidate All Active Sessions">
<span className="material-symbols-outlined text-[18px]">logout</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-error" title="Suspend Account">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-space-sm px-space-md font-mono text-[12px] text-primary font-bold">usr_sec_0084</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="text-on-surface font-bold">gate.alpha@carepoint.edu.gh</span>
<span className="text-on-surface-variant text-[11px]">North Gate Main Turnstile Node</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wide">
                KIOSK_TURNSTILE_NODE
              </span>
</td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-1.5 text-on-surface font-mono text-[12px]">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">router</span>
<span>HW MAC: 00:1A:2B:99:4C:E1</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Active
              </span>
</td>
<td className="py-space-sm px-space-md font-mono text-[12px] text-on-surface-variant">2024-02-14 11:20 GMT</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-primary" title="Reset Credentials">
<span className="material-symbols-outlined text-[18px]">lock_reset</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-secondary" title="Invalidate All Active Sessions">
<span className="material-symbols-outlined text-[18px]">logout</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-error" title="Suspend Account">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-space-sm px-space-md font-mono text-[12px] text-primary font-bold">usr_tch_0411</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="text-on-surface font-bold">b.abbey@carepoint.edu.gh</span>
<span className="text-on-surface-variant text-[11px]">Barnabas Abbey (Junior High Science)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center px-space-xs py-0.5 rounded bg-primary-fixed-dim text-on-primary-fixed-variant font-label-sm text-label-sm uppercase font-bold tracking-wide">
                FACULTY_STANDARD
              </span>
</td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">phonelink_lock</span>
<span>SMS OTP (+233 24 990 411) + App TOTP</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Active
              </span>
</td>
<td className="py-space-sm px-space-md font-mono text-[12px] text-on-surface-variant">2024-03-01 09:12 GMT</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-primary" title="Reset Credentials">
<span className="material-symbols-outlined text-[18px]">lock_reset</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-secondary" title="Invalidate All Active Sessions">
<span className="material-symbols-outlined text-[18px]">logout</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-error" title="Suspend Account">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-space-sm px-space-md font-mono text-[12px] text-primary font-bold">usr_par_8821</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="text-on-surface font-bold">nana.mensah@apexmail.gh</span>
<span className="text-on-surface-variant text-[11px]">Nana Mensah (Child: K. Mensah, Gr. 5)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wide">
                GUARDIAN_ENDUSER
              </span>
</td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">sms</span>
<span>SMS 2FA Challenge</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Active
              </span>
</td>
<td className="py-space-sm px-space-md font-mono text-[12px] text-on-surface-variant">2024-04-12 14:02 GMT</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-primary" title="Reset Credentials">
<span className="material-symbols-outlined text-[18px]">lock_reset</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-secondary" title="Invalidate All Active Sessions">
<span className="material-symbols-outlined text-[18px]">logout</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant hover:text-error" title="Suspend Account">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors bg-red-50/20">
<td className="py-space-sm px-space-md font-mono text-[12px] text-secondary font-bold">usr_tmp_0029</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="text-on-surface font-bold">k.antwi.guest@ops.carepoint.gh</span>
<span className="text-on-surface-variant text-[11px]">Kofi Antwi (GES External Inspector)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase font-bold tracking-wide">
                GUEST_AUDITOR
              </span>
</td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-1.5 text-error font-medium">
<span className="material-symbols-outlined text-[18px]">event_busy</span>
<span>Token Expired (TTL 48h Elapsed)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-red-100 text-red-800 font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Suspended
              </span>
</td>
<td className="py-space-sm px-space-md font-mono text-[12px] text-on-surface-variant">2024-04-20 07:00 GMT</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container-high text-primary" title="Re-issue Temporary Passcode">
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-error" title="Purge Record">
<span className="material-symbols-outlined text-[18px]">delete_forever</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-space-md py-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-sm">
<span>Displaying identities 1 to 5 of 1,248</span>
<span className="text-outline-variant">•</span>
<span className="text-primary font-bold">Encrypted via AES-256 GCM Keyring</span>
</div>
<div className="flex items-center gap-space-xs mt-2 sm:mt-0">
<button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface disabled:opacity-50">Prev</button>
<span className="px-2 py-1 font-bold text-primary">1</span>
<span className="px-2 py-1">2</span>
<span className="px-2 py-1">3</span>
<span>...</span>
<span className="px-2 py-1">250</span>
<button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface">Next</button>
</div>
</div>
</div>

<div className="fixed inset-y-0 right-0 w-full max-w-xl bg-surface-container-lowest shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between" id="provisioningDrawer">

<div className="p-space-lg bg-primary text-on-primary flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider font-bold">Pipeline Stage 2 / Ingestion</span>
<h2 className="font-headline-sm text-headline-sm mt-0.5">Rapid Provisioning Wizard Preview</h2>
<p className="font-body-sm text-body-sm text-primary-fixed-dim mt-1">Staging automated cryptographic identity generation from external manifest.</p>
</div>
<button className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-white/10 transition-colors" id="btnCloseDrawer">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>

<div className="p-space-lg flex-1 overflow-y-auto space-y-space-lg">

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs text-primary font-bold font-label-lg text-label-lg">
<span className="material-symbols-outlined text-[20px]">csv</span>
            EMIS_Accra_Term2_Staff_Roster.csv
          </div>
<span className="px-space-xs py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">4 records staged</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Validated successfully against schema v2.4. Zero duplicate primary identifiers found.</p>
</div>

<div className="flex flex-col gap-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Security Lifecycle Policies</span>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<input defaultChecked={true} className="mt-1 w-4 h-4 text-primary rounded focus:ring-primary" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Auto-generate cryptographic initial keys</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Generates 20-character high-entropy passphrases (PBKDF2 SHA-256 hashed).</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<input defaultChecked={true} className="mt-1 w-4 h-4 text-primary rounded focus:ring-primary" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Auto-dispatch onboarding SMS with temporary token</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Delivers a single-use claim link via Ghana Telecommunications SMPP gateway.</span>
</div>
</label>

<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<input defaultChecked={true} className="mt-1 w-4 h-4 text-primary rounded focus:ring-primary" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Enforce mandatory first-login password reset</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Account remains locked to staging till recipient satisfies zero-trust setup.</span>
</div>
</label>
</div>

<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Records In Queue</span>
<div className="space-y-space-xs font-mono text-[12px]">
<div className="p-space-xs rounded bg-surface-container-low flex justify-between items-center text-on-surface">
<span>dr.amponsah@carepoint.edu.gh</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-sans font-bold">FACULTY_SENIOR</span>
</div>
<div className="p-space-xs rounded bg-surface-container-low flex justify-between items-center text-on-surface">
<span>lab.chem.node@carepoint.edu.gh</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-sans font-bold">KIOSK_IOT_DEVICE</span>
</div>
<div className="p-space-xs rounded bg-surface-container-low flex justify-between items-center text-on-surface">
<span>g.donkor@carepoint.edu.gh</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-sans font-bold">ACCOUNTING_CLERK</span>
</div>
<div className="p-space-xs rounded bg-surface-container-low flex justify-between items-center text-on-surface">
<span>h.quaye@carepoint.edu.gh</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-sans font-bold">NURSE_OFFICER</span>
</div>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container-low flex items-center justify-between gap-space-sm">
<button className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors" id="btnCancelDrawer">
        Cancel
      </button>
<button className="px-space-lg py-space-sm rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg transition-all shadow-sm flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px]">bolt</span>
        Execute Ingestion (4 Accounts)
      </button>
</div>
</div>

<div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 hidden transition-opacity" id="drawerBackdrop"></div>
</div>

    </>
  );
}
