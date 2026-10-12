"use client";

import React from "react";
import Link from "next/link";

// Parent Login
export default function LoginPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="relative w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-40">
<svg className="w-full h-full" fill="none" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
<circle cx="80" cy="120" fill="#1a2b5e" fillOpacity="0.04" r="320"></circle>
<circle cx="1360" cy="780" fill="#df2d23" fillOpacity="0.03" r="420"></circle>
<path d="M-100 450C200 400 450 650 850 520C1200 410 1400 600 1600 580" stroke="#1a2b5e" strokeDasharray="8 12" strokeOpacity="0.12" strokeWidth="1.5"></path>
<path d="M-80 300C300 240 600 480 1000 360C1300 280 1500 420 1680 400" stroke="#38BDF8" strokeDasharray="6 10" strokeOpacity="0.15" strokeWidth="1.2"></path>
</svg>
</div>

<div className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-surface-container-low opacity-60 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>

<div className="relative w-full max-w-xl z-10">

<div className="flex w-full h-1.5 rounded-t-full overflow-hidden shadow-sm">
<div className="w-1/3 bg-primary-container"></div>
<div className="w-1/3 bg-secondary-container"></div>
<div className="w-1/3 bg-on-tertiary-container"></div>
</div>

<div className="bg-surface-container-lowest shadow-xl rounded-b-xl px-6 py-8 sm:px-10 sm:py-10">

<div className="flex flex-col items-center text-center">
<div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-surface-container-low mb-4 shadow-sm">
<span className="material-symbols-outlined text-primary-container text-4xl" style={{"fontVariationSettings": "'FILL' 1"}}>school</span>
<div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary shadow-sm">
<span className="material-symbols-outlined text-xs">verified</span>
</div>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary-container text-label-sm font-label-sm uppercase tracking-wider mb-2">
<span>Carepoint Community School</span>
</div>
<p className="text-label-sm font-label-sm text-outline tracking-widest uppercase mb-3">
            MIND • HEART • HANDS
          </p>
<h1 className="text-headline-md font-headline-md text-on-surface sm:text-headline-lg sm:font-headline-lg">
            Parent &amp; Guardian Secure Portal
          </h1>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5 max-w-md">
            Access is provisioned exclusively for verified guardians with enrolled children.
          </p>
</div>

<div className="mt-8 bg-surface-container-low p-1 rounded-lg flex items-center justify-between">
<button className="w-1/2 py-2.5 px-3 rounded-md text-label-lg font-label-lg transition-all duration-200 bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center gap-2" id="tab-password" type="button">
<span className="material-symbols-outlined text-lg">key</span>
<span>Password Login</span>
</button>
<button className="w-1/2 py-2.5 px-3 rounded-md text-label-lg font-label-lg transition-all duration-200 text-on-surface-variant hover:text-on-surface flex items-center justify-center gap-2" id="tab-otp" type="button">
<span className="material-symbols-outlined text-lg">sms</span>
<span>Quick OTP Login</span>
</button>
</div>

<form className="mt-7 flex flex-col gap-5" id="portal-login-form" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<label className="text-label-lg font-label-lg text-on-surface flex items-center gap-1" htmlFor="guardian-identity">
                Registered Guardian Email or Phone
                <span className="text-secondary">*</span>
</label>
<span className="text-label-sm font-label-sm text-outline">Ghana (+233)</span>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-xl pointer-events-none">badge</span>
<input autoComplete="username" className="w-full pl-11 pr-4 py-3 bg-surface-container-lowest text-body-md font-body-md text-on-surface placeholder:text-outline-variant rounded-md shadow-sm outline-none transition focus:bg-surface-container-low" id="guardian-identity" placeholder="e.g. +233 24 123 4567 or nana.mensah@gmail.com" required={true} type="text"/>
</div>
<p className="text-label-sm font-label-sm text-on-surface-variant pl-1" id="identity-hint">
              Enter primary phone number registered during student enrollment.
            </p>
</div>

<div className="flex flex-col gap-1.5" id="password-group">
<div className="flex justify-between items-center">
<label className="text-label-lg font-label-lg text-on-surface flex items-center gap-1" htmlFor="portal-password">
                Portal Password
                <span className="text-secondary">*</span>
</label>
<a className="text-label-sm font-label-sm text-primary-container font-semibold hover:underline" href="#reset-password">
                Forgot Password?
              </a>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-xl pointer-events-none">lock</span>
<input autoComplete="current-password" className="w-full pl-11 pr-12 py-3 bg-surface-container-lowest text-body-md font-body-md text-on-surface placeholder:text-outline-variant rounded-md shadow-sm outline-none transition focus:bg-surface-container-low" id="portal-password" placeholder="Enter guardian access password" required={true} type="password"/>
<button aria-label="Toggle password visibility" className="absolute right-3 p-1 rounded hover:bg-surface-container-low text-outline hover:text-on-surface transition" id="toggle-password" type="button">
<span className="material-symbols-outlined text-xl" id="eye-icon">visibility</span>
</button>
</div>
</div>

<div className="hidden flex-col gap-1.5" id="otp-group">
<div className="flex justify-between items-center">
<label className="text-label-lg font-label-lg text-on-surface flex items-center gap-1" htmlFor="otp-code">
                6-Digit Security Code
                <span className="text-secondary">*</span>
</label>
<button className="text-label-sm font-label-sm text-primary-container font-semibold hover:underline" type="button">
                Resend Code
              </button>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-xl pointer-events-none">pin</span>
<input className="w-full pl-11 pr-4 py-3 tracking-widest font-mono text-headline-sm font-headline-sm text-on-surface placeholder:text-outline-variant rounded-md shadow-sm outline-none transition focus:bg-surface-container-low" id="otp-code" inputMode="numeric" maxLength={6} pattern="[0-9]*" placeholder="• • • • • •" type="text"/>
</div>
<p className="text-label-sm font-label-sm text-on-surface-variant pl-1">
              Enter the 6-digit dynamic code sent via SMS to your registered SIM.
            </p>
</div>

<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2.5 cursor-pointer select-none">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary-container accent-primary-container focus:ring-0 cursor-pointer" id="remember-device" type="checkbox"/>
<span className="text-body-sm font-body-sm text-on-surface">
                Remember this trusted device for 30 days
              </span>
</label>
</div>

<button className="mt-2 w-full py-3.5 px-6 rounded-md bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]" id="auth-submit-btn" type="submit">
<span className="material-symbols-outlined text-xl">shield_lock</span>
<span id="btn-text">Secure Portal Sign In</span>
</button>
</form>

<div className="mt-8 p-4 rounded-lg bg-surface-container-low flex items-start gap-3.5">
<div className="p-1.5 rounded-full bg-surface-container text-primary-container shrink-0 mt-0.5">
<span className="material-symbols-outlined text-xl">help</span>
</div>
<div className="flex flex-col gap-1 text-on-surface">
<p className="text-label-sm font-label-sm uppercase tracking-wider text-primary-container">First Time Logging In?</p>
<p className="text-body-sm font-body-sm text-on-surface-variant">
              Your activation SMS contains your temporary security passcode. Need assistance? Contact Portal Support at
              <a className="text-primary-container font-semibold hover:underline" href="tel:+233301234567">+233 (0) 30 123 4567</a>
              or email
              <a className="text-primary-container font-semibold hover:underline" href="mailto:admissions@carepoint.edu.gh">admissions@carepoint.edu.gh</a>.
            </p>
</div>
</div>

<div className="mt-7 pt-6 flex flex-wrap items-center justify-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface">CRECHE</span>
<span className="text-outline-variant">•</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface">NURSERY</span>
<span className="text-outline-variant">•</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface">KINDERGARTEN</span>
<span className="text-outline-variant">•</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface">BASIC SCHOOL</span>
<span className="text-outline-variant">•</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface">JUNIOR HIGH</span>
</div>
</div>

<div className="mt-4 px-4 py-3 rounded-lg bg-surface-container-high/60 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-tertiary-container text-lg" style={{"fontVariationSettings": "'FILL' 1"}}>verified_user</span>
<span className="text-label-sm font-label-sm text-on-surface font-semibold tracking-wide">
            256-Bit SSL Encrypted
          </span>
</div>
<div className="h-3 w-px bg-outline-variant hidden sm:block"></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-lg">fingerprint</span>
<span className="text-label-sm font-label-sm text-on-surface font-semibold tracking-wide">
            Biometric / OTP 2FA Ready
          </span>
</div>
<div className="h-3 w-px bg-outline-variant hidden sm:block"></div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-lg">security</span>
<span className="text-label-sm font-label-sm text-on-surface font-semibold tracking-wide">
            Restricted Guardian Access
          </span>
</div>
</div>

<div className="mt-6 text-center flex flex-col items-center gap-1.5">
<div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span>Carepoint Cloud SIS Node • Operational (Academic Year 2026/2026)</span>
</div>
<p className="text-label-sm font-label-sm text-outline">
          © Carepoint Community School, Accra, Ghana. All institutional rights reserved.
        </p>
</div>
</div>
</div>
</div>

    </>
  );
}
