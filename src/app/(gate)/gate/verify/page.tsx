"use client";

import React from "react";
import Link from "next/link";

// Gate Verify
export default function VerifyPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="w-full flex h-1.5 shadow-sm">
<div className="h-full w-1/3 bg-on-tertiary-container"></div>
<div className="h-full w-1/3 bg-secondary-container"></div>
<div className="h-full w-1/3 bg-surface-tint"></div>
</div>
<div className="w-full px-margin py-space-md">

<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-on-tertiary-fixed animate-pulse"></span>
          Step 2 of 2: Guardian Authentication
        </span>
<span className="text-on-surface-variant font-label-md text-label-md truncate">Session Token: <strong className="text-on-surface">#CP-DISM-9048-ACC</strong></span>
</div>
<div className="flex items-center gap-space-md">
<span className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-on-tertiary-container">qr_code_scanner</span>
          Scanned at Turnstile 2A • 14:28:15 GMT
        </span>
<button className="text-secondary font-label-sm text-label-sm uppercase tracking-wider hover:underline flex items-center gap-0.5"  type="button">
<span className="material-symbols-outlined text-sm">cancel</span>
          Abort Scan
        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">

<div className="lg:col-span-4 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md relative overflow-hidden">

<div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high">
<span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-widest">
              Basic Division • Class 2
            </span>
<span className="text-on-surface-variant font-label-sm text-label-sm">ID: CPS-2022-0482</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md mb-space-md">
<div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden shadow-sm">
<img className="w-full h-full object-cover" data-alt="Official portrait photograph of Kofi Mensah, a bright 8-year-old Ghanaian schoolboy in Carepoint Community School navy blue and gold trim uniform, cheerful expression, warm sunlight, crisp school campus background in Accra Ghana" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFtIAiX9eXLjZuK1R5IpyYEjKxpn6c2IZevVnmO4r7cWZ0RVTmGIi8eDDrpK-lcOSW6O1Ne-LD5PenNDbnUOrVwbVbcHEIWlr8KHkKhnd9mYPYpnmbu_tH4oruGC6fs8EFBoluB7rcBWD4q2aMa2aJ9GSzSBtyTY9KSGRtP5aHEIPeyplyFGlDZ0eAmC8aYUJR_CuMQt_y59jYNofZo5_qblktohxkVwHKLoN-cckh7Ow4_r6GuwNXGg"/>
<div className="absolute bottom-0 inset-x-0 bg-primary/80 backdrop-blur-xs py-0.5 text-center text-on-primary font-label-sm text-[10px]">
                BASIC 2
              </div>
</div>
<div className="flex flex-col min-w-0 text-center sm:text-left">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Registered Student</span>
<h2 className="font-headline-md text-headline-md text-primary leading-tight truncate">Kofi Mensah</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Age 8 • Sunflower Class</p>
<div className="mt-2 inline-flex items-center justify-center sm:justify-start gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-xs text-primary">person</span>
<span>Teacher: Mrs. Beatrice Abbey</span>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface">Dismissal Stage</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-bold">
              Classroom B-04 • Staged
            </span>
</div>

<div className="space-y-2">
<div className="bg-surface-container-high p-2.5 rounded-lg flex items-start gap-2">
<span className="material-symbols-outlined text-on-tertiary-container text-base shrink-0 mt-0.5">verified_user</span>
<div className="min-w-0">
<p className="font-label-sm text-label-sm font-bold text-on-surface">Custody Notice</p>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">Unrestricted legal custody shared by Father (Dr. Nana Mensah) &amp; Mother (Dr. Abena Mensah).</p>
</div>
</div>
<div className="bg-error-container p-2.5 rounded-lg flex items-start gap-2">
<span className="material-symbols-outlined text-error text-base shrink-0 mt-0.5">health_and_safety</span>
<div className="min-w-0">
<p className="font-label-sm text-label-sm font-bold text-on-error-container">Medical Safeguarding Notice</p>
<p className="font-body-sm text-body-sm text-on-error-container leading-snug">Mild dust/pollen allergy. Inhaler stored in Administration School Clinic Box #12.</p>
</div>
</div>
</div>

<div className="mt-space-md pt-space-sm border-t border-surface-container-high flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-[11px] uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-on-tertiary-container">eco</span>
              Mind • Heart • Hands
            </span>
<span className="font-label-sm text-[11px] font-bold text-primary">CAREPOINT 2024</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex items-center justify-between text-center gap-1">
<div className="flex-1 py-1 rounded bg-surface-container text-on-surface-variant opacity-50">
<p className="font-label-sm text-[9px] uppercase font-bold">Nursery</p>
</div>
<div className="flex-1 py-1 rounded bg-surface-container text-on-surface-variant opacity-50">
<p className="font-label-sm text-[9px] uppercase font-bold">KG</p>
</div>
<div className="flex-1 py-1 rounded bg-primary-container text-on-primary shadow-xs">
<p className="font-label-sm text-[9px] uppercase font-bold">Basic (P2)</p>
</div>
<div className="flex-1 py-1 rounded bg-surface-container text-on-surface-variant opacity-50">
<p className="font-label-sm text-[9px] uppercase font-bold">JHS</p>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md relative">
<div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">fingerprint</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Guardian Verification</h3>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">
              Primary Contact #1
            </span>
</div>

<div className="grid grid-cols-2 gap-space-sm mb-space-md">

<div className="flex flex-col items-center bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1 font-bold">
                Guardian on File
              </span>
<div className="w-24 h-24 rounded-full overflow-hidden shadow-sm relative mb-2">
<img className="w-full h-full object-cover" data-alt="Headshot of Dr. Nana Mensah, a distinguished Ghanaian father and medical doctor in smart collared shirt and glasses, smiling with quiet confidence, clean professional portrait for school identification registry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk7nHm7egIuiTau40KQEFHBKNDX3EptaSdTu9TBK2iwADoApEdjY9Kkt9Tjm_DoF2KYNTvFIWgNO5GlABZPWPHY658qTxcggA0vvpzxYpMpol0tKKMsBvv14t1fD96WIU0vH77Tjlup7Pbm-TJ2cyzQEIlGRhdG85eoLM-GTjxqblK4wxMDpCIWDtDAyb_zVdq8MuHW3anaXkB6adGWp9xlHqAM3FbRNIoqmH3e2xOnAIl_mjOPskfLg"/>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold text-center">Dr. Nana Mensah</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Father • Verified 2024</span>
</div>

<div className="flex flex-col items-center bg-surface-container-low p-space-sm rounded-xl relative">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1 font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping"></span> Live Turnstile 2 Cam
              </span>
<div className="w-24 h-24 rounded-full overflow-hidden shadow-sm relative mb-2 bg-inverse-surface">
<img className="w-full h-full object-cover" data-alt="CCTV security camera still capture of a gentleman matching Dr. Nana Mensah standing at Carepoint school turnstile kiosk, natural outdoor lighting under canopy, looking towards camera terminal screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXSR-EP4dORvcH_8BONAzq7-idu4aRSbf5O12X6L8bTfqVkPvrVWAkOBAg3TSY54drB4Sygt243V4_n27JdKUdY8f0HVFnIcFDps7MSFlegJcCo_z18XKyBAOLoWHmtLqS8AYOMaqGT5F3sc3Ob6K-qU6NybFBuHr0In4liKMGNyfecdWqXYcdiWSKdSp7wxmWy7WMqkNL0f5_1sBPO-mVrJ8bIILonG98NK_AHegjjcYvj280pgy9Rg"/>
<div className="absolute inset-0 bg-primary/10 pointer-events-none flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-fixed text-4xl opacity-75">face</span>
</div>
</div>
<span className="font-label-md text-label-md text-on-tertiary-container font-bold text-center flex items-center gap-1">
<span className="material-symbols-outlined text-sm">check_circle</span> 98.4% Match
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Biometric Cam Sync</span>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-sm space-y-2 mb-space-md">
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant font-label-sm">Phone Number:</span>
<span className="font-label-md text-label-md text-on-surface font-bold tracking-wider">+233 24 123 4567 (SMS Verified)</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant font-label-sm">Ghana Card PIN:</span>
<span className="font-label-md text-label-md text-on-surface font-bold">GHA-718293041-9</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant font-label-sm">Authorized Escorts:</span>
<span className="text-on-surface">Dr. Abena Mensah • Mrs. Grace Owusu (Aunt)</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<input defaultChecked={true} className="w-5 h-5 rounded text-primary focus:ring-primary cursor-pointer" id="photoMatchCheckbox" type="checkbox"/>
<label className="font-label-md text-label-md text-on-surface cursor-pointer select-none" htmlFor="photoMatchCheckbox">
                Officer Visual Identity Attestation Confirmed
              </label>
</div>
<span className="material-symbols-outlined text-on-tertiary-container text-xl">shield_locked</span>
</div>

<div className="mt-space-sm p-space-sm rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant text-base">supervisor_account</span>
<span className="font-label-sm text-label-sm text-on-surface">Alternate: <strong>Mrs. Grace Owusu</strong> (Aunt)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Backup PIN Active</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md">
<div className="flex items-center justify-between mb-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">SMS Token PIN</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Enter guardian dismissal PIN</p>
</div>
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-lg">pin</span>
</div>
</div>

<div className="flex items-center justify-center gap-space-sm mb-space-md">
<div className="w-12 h-14 rounded-lg bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-primary font-bold shadow-inner transition-all" id="pin-0">
              •
            </div>
<div className="w-12 h-14 rounded-lg bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-primary font-bold shadow-inner transition-all" id="pin-1">
              •
            </div>
<div className="w-12 h-14 rounded-lg bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-primary font-bold shadow-inner transition-all" id="pin-2">
              •
            </div>
<div className="w-12 h-14 rounded-lg bg-surface-container-high flex items-center justify-center font-headline-md text-headline-md text-primary font-bold shadow-inner transition-all" id="pin-3">
<span className="animate-pulse">|</span>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mb-space-sm">
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">1</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">2</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">3</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">4</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">5</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">6</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">7</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">8</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">9</button>
<button className="h-11 rounded-lg bg-surface-container-high hover:bg-surface-dim font-label-md text-label-md text-secondary font-bold shadow-xs active:scale-95 transition-all"  type="button">CLEAR</button>
<button className="h-11 rounded-lg bg-surface-container hover:bg-surface-container-high font-headline-sm text-headline-sm text-primary font-bold shadow-xs active:scale-95 transition-all"  type="button">0</button>
<button className="h-11 rounded-lg bg-surface-container-high hover:bg-surface-dim font-headline-sm text-headline-sm text-primary flex items-center justify-center shadow-xs active:scale-95 transition-all"  type="button">
<span className="material-symbols-outlined text-lg">backspace</span>
</button>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-[11px] pt-1">
<span>Dynamic One-Time Token</span>
<button className="text-primary hover:underline font-bold"  type="button">Resend Token via SMS</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
<span className="material-symbols-outlined text-xl">gate</span>
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface font-bold leading-tight">Turnstile Barrier 2A</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Status: Armed • Waiting on Terminal release confirmation</p>
</div>
</div>
</div>
</div>

<div className="mt-space-md bg-surface-container-lowest rounded-xl p-space-md shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t-2 border-primary-container">

<div className="flex-1 w-full md:w-auto">
<button className="w-full py-4 px-space-md rounded-xl bg-on-tertiary-container hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-space-sm" id="authorizeBtn"  type="button">
<span className="material-symbols-outlined text-2xl">door_open</span>
<span>CONFIRM VERIFICATION &amp; AUTHORIZE RELEASE</span>
<span className="text-xs px-2 py-0.5 rounded bg-on-tertiary/20 text-on-tertiary ml-2 hidden sm:inline">(Turnstile 2 Unlock)</span>
</button>
</div>

<div className="w-full md:w-auto shrink-0 flex items-center gap-space-sm">
<button className="w-full md:w-auto py-4 px-space-md rounded-xl bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center justify-center gap-2"  type="button">
<span className="material-symbols-outlined text-xl">warning</span>
<span>FLAG MISMATCH &amp; HOLD</span>
</button>
<button className="p-3.5 rounded-xl bg-surface-container-high hover:bg-surface-dim text-on-surface-variant hover:text-on-surface shadow-xs transition-colors flex items-center justify-center"  title="Call Security Supervisor" type="button">
<span className="material-symbols-outlined text-xl">phone_in_talk</span>
</button>
</div>
</div>

<div className="mt-space-sm px-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm text-on-tertiary-container">lock_person</span>
<span>Authorizing release writes an immutable signed cryptographic event to the <strong>NaSIA Campus Audit Log</strong>, SMS Gateway, and Teacher Registry.</span>
</div>
<div className="flex items-center gap-3">
<span className="text-outline">Terminal: GT-KIO-02</span>
<span className="text-outline">Latency: 18ms</span>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-space-md" id="releaseModal">
<div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-xl text-center flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-space-sm shadow-md animate-bounce">
<span className="material-symbols-outlined text-4xl">lock_open_right</span>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider mb-2">Gate Turnstile 2A Activated</span>
<h3 className="font-headline-lg text-headline-lg text-primary mb-1">Release Authorized!</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        Kofi Mensah (Basic 2) is cleared for departure with Dr. Nana Mensah. Classroom B-04 teacher and parents notified via instant SMS.
      </p>
<div className="w-full bg-surface-container-low rounded-xl p-space-sm text-left mb-space-md space-y-1">
<p className="font-label-sm text-label-sm text-on-surface"><strong>Timestamp:</strong> 14:28:44 GMT • Accra, Ghana</p>
<p className="font-label-sm text-label-sm text-on-surface"><strong>Audit Hash:</strong> e3b0c44298fc1c149afbf4c8996fb92427ae41e</p>
</div>
<button className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-container shadow-md"  type="button">
        NEXT VISITOR / SCANNER STANDBY
      </button>
</div>
</div>

</div>
    </>
  );
}
