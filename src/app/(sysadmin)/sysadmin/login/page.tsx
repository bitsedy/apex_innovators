"use client";

import React from "react";
import Link from "next/link";

// Super Admin Login
export default function LoginPage() {
  return (
    <>
<div className="flex flex-col w-full max-w-5xl mx-auto space-y-space-lg">

<div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center space-x-space-sm">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-container"></span>
</span>
<div className="flex flex-wrap items-center gap-2">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">CAREPOINT SYSTEMS ENGINEERING</span>
<span className="text-outline-variant font-label-md text-label-md">•</span>
<span className="font-label-md text-label-md text-on-surface-variant font-semibold tracking-wide">POD-ACC-01</span>
</div>
</div>
<div className="flex items-center space-x-space-md">
<div className="flex items-center space-x-1.5 bg-surface-container px-3 py-1 rounded-full">
<span className="material-symbols-outlined text-tertiary-container text-[16px]" style={{"fontVariationSettings": "'FILL' 1"}}>lock</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">TLS 1.3 ENC</span>
<span className="font-label-sm text-label-sm text-outline">|</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">RTT 14ms</span>
</div>
<div className="hidden sm:flex items-center space-x-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">dns</span>
<span className="font-label-sm text-label-sm">BGP: AS30982 (ACC-GH)</span>
</div>
</div>
</div>

<div className="w-full bg-error-container text-on-error-container p-space-md rounded-xl shadow-sm flex items-start space-x-space-md">
<div className="p-2 bg-error text-on-error rounded-lg flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>shield_with_heart</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-2">
<span className="font-label-md text-label-md text-on-error-container font-extrabold tracking-wider uppercase">RESTRICTED ACCESS</span>
<span className="bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full">GEOFENCED</span>
</div>
<p className="font-body-sm text-body-sm text-on-error-container mt-1">
        Restricted to authorized SysAdmin CIDR blocks (<span className="font-semibold">10.142.0.0/16</span> &amp; Registered WireGuard VPN nodes). All keystrokes, privileged commands, and elevated pseudoterminal sessions are cryptographically signed, timestamped, and immutably archived.
      </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col space-y-space-md">

<div className="space-y-1">
<div className="flex items-center space-x-2 text-primary">
<span className="material-symbols-outlined text-[28px]">terminal</span>
<h1 className="font-headline-md text-headline-md tracking-tight text-primary">Root Technical Operations Gateway</h1>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Tier-0 SysOps Infrastructure &amp; Runtime Console v4.8.2-prod
        </p>
</div>

<form className="space-y-space-md pt-2" id="sysops-login-form" onSubmit={(e) => e.preventDefault()}>

<div className="space-y-1.5">
<label className="flex justify-between items-center font-label-lg text-label-lg text-on-surface" htmlFor="sysadmin-identity">
<span>Institutional Root Identity</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">Required • FQDN Identity</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[20px] pointer-events-none">badge</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-lowest transition-colors" id="sysadmin-identity" placeholder="k.boateng@ops.carepoint.edu.gh" required={true} type="email" value="k.boateng@ops.carepoint.edu.gh"/>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="master-passphrase">Master Hardware Passphrase</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Min. 24 bytes entropy</span>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[20px] pointer-events-none">key</span>
<input className="w-full pl-10 pr-12 py-3 bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-lowest transition-colors" id="master-passphrase" placeholder="••••••••••••••••••••••••••••••••" required={true} type="password"/>
<button aria-label="Toggle password visibility" className="absolute right-3 text-outline hover:text-on-surface flex items-center justify-center p-1 rounded transition-colors" id="toggle-passphrase"  type="button">
<span className="material-symbols-outlined text-[20px]" id="eye-icon">visibility</span>
</button>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary uppercase font-bold tracking-wider flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
              Hardware FIDO2 / TOTP Perimeter
            </span>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">
              Level 4 Enforced
            </span>
</div>

<div className="bg-surface-container-lowest p-3 rounded-lg flex items-center justify-between shadow-sm cursor-pointer hover:bg-surface-container transition-colors" id="fido-banner" >
<div className="flex items-center space-x-3">
<div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary" id="fido-icon-bg">
<span className="material-symbols-outlined text-[20px]">usb</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold" id="fido-title">FIDO2 / YubiKey 5C NFC</p>
<p className="font-label-sm text-label-sm text-on-surface-variant" id="fido-subtitle">Touch physical gold contact to assert presence</p>
</div>
</div>
<div className="flex items-center space-x-1">
<span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded font-bold uppercase tracking-wider" id="fido-status-tag">
                WAITING TAP
              </span>
</div>
</div>

<div className="space-y-1.5 pt-1">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="totp-code">Emergency Rolling TOTP (6 Digits)</label>

<div className="flex items-center space-x-2 bg-surface-container px-2 py-0.5 rounded-full">
<svg className="w-4 h-4 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-outline-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-secondary transition-all duration-1000" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" id="totp-progress-ring" stroke="currentColor" strokeDasharray="100, 100" strokeDashoffset="20" strokeLinecap="round" strokeWidth="4"></path>
</svg>
<span className="font-label-sm text-label-sm text-secondary font-bold" id="totp-counter">24s</span>
</div>
</div>
<div className="grid grid-cols-6 gap-2">
<input className="totp-digit text-center py-2.5 bg-surface-container-lowest font-headline-sm text-headline-sm rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-highest" maxLength={1} type="text" value="8"/>
<input className="totp-digit text-center py-2.5 bg-surface-container-lowest font-headline-sm text-headline-sm rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-highest" maxLength={1} type="text" value="4"/>
<input className="totp-digit text-center py-2.5 bg-surface-container-lowest font-headline-sm text-headline-sm rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-highest" maxLength={1} type="text" value="1"/>
<input className="totp-digit text-center py-2.5 bg-surface-container-lowest font-headline-sm text-headline-sm rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-highest" maxLength={1} type="text" value="9"/>
<input className="totp-digit text-center py-2.5 bg-surface-container-lowest font-headline-sm text-headline-sm rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-highest" maxLength={1} type="text" value="0"/>
<input className="totp-digit text-center py-2.5 bg-surface-container-lowest font-headline-sm text-headline-sm rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-highest" maxLength={1} type="text" value="2"/>
</div>
</div>
</div>

<button className="w-full py-3.5 px-space-md bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer transform active:scale-[0.99]" id="btn-auth" type="submit">
<span className="material-symbols-outlined text-[20px]">encrypted</span>
<span>Authenticate &amp; Mount Technical Session</span>
</button>

<div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">dangerous</span>
<a className="text-secondary hover:underline font-bold uppercase tracking-wider" href="javascript:void(0)" >
              Emergency Kill Session &amp; Revoke Hardware TPM
            </a>
</div>
<span className="text-outline">SEC-POL: 0x9AF2</span>
</div>
</form>
</div>

<div className="lg:col-span-5 space-y-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[20px]">laptop_mac</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Session Hardware Binding</h2>
</div>
<span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">
            TPM 2.0 VALID
          </span>
</div>
<div className="space-y-3 font-body-sm text-body-sm">

<div className="p-3 bg-surface-container-low rounded-lg space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Authorized Device Client</span>
<div className="flex items-center justify-between">
<span className="font-semibold text-on-surface">Apple M3 Max • macOS 15.1</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">ENCLAVE-OK</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Chrome 129.0.6668.71 (Darwin x86_64/arm64e)</p>
</div>

<div className="p-3 bg-surface-container-low rounded-lg space-y-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">TPM Attestation Digest</span>
<span className="font-label-sm text-label-sm text-tertiary-container font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Attested
              </span>
</div>
<p className="font-mono text-[13px] text-on-surface font-semibold tracking-wide bg-surface-container-lowest p-2 rounded truncate">
              SHA256: 4f8a91c783de9e01...ec2992b1
            </p>
</div>

<div className="p-3 bg-surface-container-low rounded-lg space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Concurrency</span>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface px-2 py-0.5 rounded font-bold">
                1 Session Active
              </span>
</div>
<div className="flex items-center space-x-3 text-on-surface">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">cell_tower</span>
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md font-bold truncate">Accra DataCenter (POD-ACC-01)</p>
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono truncate">10.142.12.44 • Established 38m ago</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">security</span>
            Telemetry &amp; Threat Defense
          </span>
<span className="font-label-sm text-label-sm text-tertiary-container font-mono font-bold">0 ALERTS</span>
</div>

<div className="space-y-1.5">
<div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
<span>Ingress Gateway Invariance</span>
<span className="font-mono text-tertiary-container font-semibold">100.0% Nominal</span>
</div>
<svg className="w-full h-12 text-tertiary-container overflow-hidden rounded bg-surface-container-low p-1" preserveAspectRatio="none" viewBox="0 0 300 40">
<path d="M0,25 L30,25 L45,10 L55,35 L65,22 L90,25 L120,25 L135,15 L145,30 L160,25 L210,25 L225,5 L235,38 L245,24 L270,25 L300,25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="pt-2 grid grid-cols-2 gap-2 text-center">
<div className="p-2 bg-surface-container rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Vault Quorum</span>
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">3 / 3 Signed</span>
</div>
<div className="p-2 bg-surface-container rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Entropy Rate</span>
<span className="font-label-md text-label-md font-bold text-on-surface font-mono">256.4 bits/s</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-3 text-on-surface-variant">
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="font-label-md text-label-md font-bold text-on-surface">FIPS 140-3 Level 4 HSM Synced</span>
</div>
<span className="text-outline-variant hidden md:inline">•</span>
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-tertiary-container text-[18px]">policy</span>
<span className="font-label-md text-label-md font-semibold">NaSIA Cybersec Standard compliant</span>
</div>
</div>
<div className="flex items-center space-x-2 font-mono text-[12px]">
<span className="bg-surface-container-high px-2 py-0.5 rounded text-on-surface">SESSION_NONCE: 0x93FA-E78C</span>
<span className="text-outline">UTC 14:28:09</span>
</div>
</div>
</div>

    </>
  );
}
