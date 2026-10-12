"use client";

import React from "react";
import Link from "next/link";

// Gate Kiosk Scanner Viewport
export default function GatePage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="w-full flex h-1.5 shadow-sm">
<div className="w-1/3 bg-on-primary-container"></div>
<div className="w-1/3 bg-secondary"></div>
<div className="w-1/3 bg-tertiary-fixed-dim"></div>
</div>
<div className="w-full px-margin py-space-lg flex flex-col gap-space-lg max-w-[1440px] mx-auto">

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tertiary-container text-tertiary-fixed font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
          SCANNER STREAM ONLINE
        </span>
<span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
          DEVICE: SONY EXMOR CMOS #GATE-01
        </span>
<span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm hidden sm:inline-block">
          FPS: 60 • LATENCY: 14ms
        </span>
<span className="px-2.5 py-1 rounded-md bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase">
          NaSIA Level 3 SafeZone
        </span>
</div>

<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all active:scale-95 shadow-sm" id="toggle-torch-btn" type="button">
<span className="material-symbols-outlined text-base">flashlight_on</span>
<span>Torch Assist</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all active:scale-95 shadow-sm" id="switch-cam-btn" type="button">
<span className="material-symbols-outlined text-base">switch_camera</span>
<span>Switch Cam (NFC)</span>
</button>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md transition-all active:scale-95 shadow-md hover:bg-secondary-container" id="amber-alert-btn" type="button">
<span className="material-symbols-outlined text-base">warning</span>
<span>HALT / CODE AMBER</span>
</button>
</div>
</div>

<div className="w-full bg-tertiary text-on-tertiary rounded-xl p-space-md shadow-md flex flex-col md:flex-row md:items-center justify-between gap-space-md transition-all duration-300" id="verified-alert-banner">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center text-tertiary-fixed shadow-inner shrink-0">
<span className="material-symbols-outlined text-3xl animate-pulse">verified_user</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wide">
              Last Scan [14:28:12 GMT]
            </span>
<span className="text-tertiary-fixed-dim font-label-sm text-label-sm">Match Verified • Biometric Cleared</span>
</div>
<p className="font-headline-sm text-headline-sm text-surface-container-lowest mt-0.5">
            Token <strong className="text-tertiary-fixed">#CP-7714</strong>: Kofi Mensah (Basic 2 Sunflower)
          </p>
<p className="font-body-sm text-body-sm text-surface-dim">
            Guardian Authorized: <span className="font-bold text-surface-container-lowest">Dr. Nana Mensah</span> (Biological Parent) • Car Reg: <span className="font-bold text-surface-container-lowest">GE-8842-23</span>
</p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="px-3 py-2 rounded-lg bg-tertiary-container text-tertiary-fixed font-label-md text-label-md flex items-center gap-1.5 hover:bg-surface-tint hover:text-surface-container-lowest transition-colors" id="re-sound-btn" type="button">
<span className="material-symbols-outlined text-base">volume_up</span>
<span>Replay Chime</span>
</button>
<span className="px-3 py-2 rounded-lg bg-surface-container-lowest/10 text-on-tertiary font-label-md text-label-md">
          Turnstile Turn Complete
        </span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-md">

<div className="relative w-full rounded-2xl bg-on-background overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center select-none group">

<div className="absolute inset-0 w-full h-full bg-primary/95 flex items-center justify-center">

<img className="w-full h-full object-cover opacity-45 mix-blend-luminosity filter blur-[0.5px]" data-alt="First-person security kiosk camera feed showing a sunlit school courtyard gate in Accra Ghana with children in uniforms walking safely and a parents hand holding up a high-resolution QR pass to a scanner terminal lens, photorealistic security monitor view." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlfgNW5g4EJaHOa4yAFLSG8goTf95HIacxUw3gLTu3G10hG0dcZdg4f1d0saVco6mo2LfNIsUeZOkOaj8v_jyAjM0Mk_H6_GmezjKLer5l2Oi2Lp-5WGpyQ99v61LyLGW6w6u3wdyMK6QwWa2bIn0Sk0uZV3djAy8co2D82OWRjswbpA1eO3919UrfQjM1tXl95oBoZjDEbXNktxYmkd1TnDM1KW2W9q91BpuB8GW2kqXPRCYMI3Z2fg"/>

<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/80"></div>
</div>

<div className="absolute top-4 left-4 right-4 flex items-center justify-between text-surface-container-lowest z-20 pointer-events-none">
<div className="flex items-center gap-2 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
<span className="font-label-sm text-label-sm font-bold tracking-wider text-surface-container-lowest uppercase">LIVE REC • 4K ULTRA-WIDE</span>
</div>
<div className="flex items-center gap-2 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-tertiary-fixed text-base">sensors</span>
<span className="font-label-sm text-label-sm text-surface-container-lowest">NFC ANTENNA READY</span>
</div>
</div>

<div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl flex items-center justify-center pointer-events-none z-10">

<div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-primary-fixed rounded-tl-xl shadow-[0_0_12px_rgba(220,225,255,0.7)]"></div>
<div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-primary-fixed rounded-tr-xl shadow-[0_0_12px_rgba(220,225,255,0.7)]"></div>
<div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-primary-fixed rounded-bl-xl shadow-[0_0_12px_rgba(220,225,255,0.7)]"></div>
<div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-primary-fixed rounded-br-xl shadow-[0_0_12px_rgba(220,225,255,0.7)]"></div>

<div className="w-12 h-12 relative flex items-center justify-center opacity-70">
<div className="w-full h-0.5 bg-primary-fixed"></div>
<div className="h-full w-0.5 bg-primary-fixed absolute"></div>
</div>

<div className="absolute left-2 right-2 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent shadow-[0_0_15px_#df2d23] animate-[bounce_2.5s_infinite]"></div>

<div className="absolute -bottom-8 px-3 py-1 rounded-full bg-primary-container/90 text-on-secondary-container backdrop-blur-sm font-label-sm text-label-sm shadow-md whitespace-nowrap">
              Align Guardian QR Code or Tap Smart Band
            </div>
</div>

<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-surface-container-lowest z-20">
<span className="font-label-sm text-label-sm bg-primary/70 backdrop-blur-md px-3 py-1.5 rounded-lg">
              Auto-Focus: Multi-Zone Phase (Track 3 faces)
            </span>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold">DISMISSAL AUTH ACTIVE</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-xl">dialpad</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Manual Security Token Lookup</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">SMS or Pickup Card 6-Character ID</span>
</div>
<form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm mt-1" id="token-form">
<div className="relative flex-1">
<span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined text-xl">key</span>
</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface-container-low text-on-surface rounded-xl font-headline-sm text-headline-sm tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="token-input" maxLength={8} placeholder="e.g. CP-8924 or CP-3120" required={true} type="text"/>
</div>
<button className="px-space-lg py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 shadow-md active:scale-95" type="submit">
<span className="material-symbols-outlined text-lg">search_check</span>
<span>VERIFY CODE</span>
</button>
<button className="px-space-md py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all flex items-center justify-center gap-1.5" id="quick-rfid-demo" type="button">
<span className="material-symbols-outlined text-base">tap_and_play</span>
<span className="hidden sm:inline">Simulate NFC Tap</span>
</button>
</form>

<div className="flex items-center gap-2 pt-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-sm text-tertiary-container">info</span>
<span>If parent phone has no battery, check original photo ID card against registrar records before manual override.</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">

<div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col items-center justify-between text-center group hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-container mb-2">
<span className="material-symbols-outlined text-xl">child_care</span>
</div>
<div className="w-full">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Creche &amp; Nursery</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">42/48</span>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-on-primary-container h-full rounded-full w-[87%]"></div>
</div>
</div>
<div className="w-full mt-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider text-[10px]">
              NURSERY
            </div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col items-center justify-between text-center group hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary mb-2">
<span className="material-symbols-outlined text-xl">toys</span>
</div>
<div className="w-full">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Kindergarten</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">64/92</span>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-secondary-container h-full rounded-full w-[69%]"></div>
</div>
</div>
<div className="w-full mt-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider text-[10px]">
              KINDERGARTEN
            </div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col items-center justify-between text-center group hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary-container mb-2">
<span className="material-symbols-outlined text-xl">menu_book</span>
</div>
<div className="w-full">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Basic 1 - 6</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">58/120</span>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-on-tertiary-container h-full rounded-full w-[48%]"></div>
</div>
</div>
<div className="w-full mt-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider text-[10px]">
              BASIC
            </div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col items-center justify-between text-center group hover:bg-surface-container-low transition-colors">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary-fixed-variant mb-2">
<span className="material-symbols-outlined text-xl">school</span>
</div>
<div className="w-full">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Junior High (JHS)</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">20/80</span>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-1 overflow-hidden">
<div className="bg-surface-tint h-full rounded-full w-[25%]"></div>
</div>
</div>
<div className="w-full mt-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold uppercase tracking-wider text-[10px]">
              JUNIOR HIGH
            </div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-wider">AFTERNOON DISMISSAL FLOW</span>
<h3 className="font-headline-md text-headline-md text-primary leading-tight">Campus Gate Discharge</h3>
</div>
<div className="px-2.5 py-1 rounded-full bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm font-bold">
              PEAK WAVE 2
            </div>
</div>
<div className="flex items-center gap-space-md bg-surface-container-low p-space-md rounded-xl">

<div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">

<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>

<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="54, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
<span className="font-headline-sm text-headline-sm text-primary font-extrabold">54%</span>
<span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">CLEARED</span>
</div>
</div>

<div className="flex-1 flex flex-col justify-center">
<div className="flex items-baseline gap-1.5">
<span className="font-headline-xl text-headline-xl text-primary font-extrabold leading-none" id="cleared-counter">184</span>
<span className="font-headline-md text-headline-md text-on-surface-variant font-bold leading-none">/ 340</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Students Safely Handed Over to Guardians</p>
<div className="flex items-center gap-4 mt-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  156 In Classrooms
                </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                  4 Bus Manifest
                </span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm flex-1">
<div className="flex items-center justify-between border-b pb-2 border-surface-container-high">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">history_toggle_off</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Live Turnstile Queue</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
              Real-time Feed
            </span>
</div>

<div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center gap-space-sm">
<div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Portrait of an African school boy wearing clean Carepoint Community School navy and red uniform collar smiling into the camera with white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKklW4svgnjA5yMw4ArzXVl1WVKvamRrT69kTqiCP_1gvRzlwQj7wZsdD2e6pvLyJHhKXLGPKPHXhgJED9xIYuvSL04Aed_RRBg6R6LRrLV3gkhOr3UlTBskgnT1dqS7xPOXUwPq4SV63nS9fBx7KBBMu-N-SzrlJnjgsDCoKPxWsu7wBquQUFaxgP7QQeskjtRSnvPOrXFVw9ZfyqhDnGIzw8-rgowByL3pI_3cw_1ZKZuyx9WoPyJw"/>
<span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-tertiary-fixed-dim ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-primary font-bold">Kofi Mensah</span>
<span className="px-1.5 py-0.2 rounded bg-primary-container text-on-secondary-container font-label-sm text-[10px]">BASIC 2</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Guardian: <strong className="text-on-surface">Dr. Nana Mensah</strong> (Father)
                </p>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span>Token #CP-7714</span>
<span>•</span>
<span className="text-on-tertiary-container font-semibold">Exit Cleared (Gate A)</span>
</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-1 rounded-md bg-tertiary-fixed/30 text-on-tertiary-container font-label-sm text-label-sm font-bold block mb-1">
                COMPLETED
              </span>
<span className="font-label-sm text-label-sm text-outline">14:28:12</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center gap-space-sm">
<div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Portrait photo of a young Ghanaian girl with hair beads in nursery school smock smiling happily." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB8bNdR6Ts4_g76g4TBTb0JInU-3n8qz2XMNgubbBGcdhrGoMbc5hzQy7WD2WdBs2YEG_0ZaDyKwTBoOx2wl07q6CBN5Q4em1f3EVIux3LvsVyOLhafpPikRYkuxOfkA0oOpUP51LJ10ysBZknatBYzERRUHyHEaSSessFoz-DNrxTrLcOhLH9YHsb-Tf084PRonqnXohPO8LexXcVh8WG72lFhqiKQ_uFQKJLt_iJiQbX5cb36IR96A"/>
<span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-tertiary-fixed-dim ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-primary font-bold">Akosua Baah</span>
<span className="px-1.5 py-0.2 rounded bg-secondary text-on-secondary font-label-sm text-[10px]">NURSERY B</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Pickup: <strong className="text-on-surface">Grace Adjei</strong> (Designated Nanny)
                </p>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span>Token #CP-4902</span>
<span>•</span>
<span className="text-on-surface font-semibold">SMS Auth Confirmed</span>
</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-1 rounded-md bg-tertiary-fixed/30 text-on-tertiary-container font-label-sm text-label-sm font-bold block mb-1">
                COMPLETED
              </span>
<span className="font-label-sm text-label-sm text-outline">14:26:45</span>
</div>
</div>

<div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
<div className="flex items-center gap-space-sm">
<div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Portrait photo of an adolescent Ghanaian junior high school student in neat pressed school polo with books under arm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxKWQjMBOBiUVxgmC-8Y3aRAMQ6iPWmtHQpjqJ8-2QMHksYVCMTKu8mp7NQjaFYg33qXqg4k7-SoUU_fPPZZwmUfyFnrJYdwWLPLFmSr1AfJWIMUf8Bmt1bXmxXjEroEfFOPviPtj8zvOCwkBRa449bJkbDky8q6KkaId6Ghn9UUELh5qGJMG4AyMrVx01vkYaIoHnI1N8IfeVmmaOURkznEkM20v0AtvHNVSbV6eBZ6gobUrOxowngw"/>
<span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-primary-fixed ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-primary font-bold">Kwame Osei-Bonsu</span>
<span className="px-1.5 py-0.2 rounded bg-surface-tint text-on-secondary font-label-sm text-[10px]">JHS 2</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Authorized: <strong className="text-on-surface">Self-Departure (Walk Permit)</strong>
</p>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span>Smart Badge NFC #8819</span>
<span>•</span>
<span className="text-outline">Escorting Sibling Basic 1</span>
</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-1 rounded-md bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold block mb-1">
                LOGGED
              </span>
<span className="font-label-sm text-label-sm text-outline">14:24:02</span>
</div>
</div>

<div className="mt-space-sm p-3 rounded-xl bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-lg">router</span>
<div className="leading-tight">
<span className="font-label-sm text-label-sm text-on-surface font-bold block">Turnstile Solenoid Gate 1</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Turn Relay: Auto-locking in 12s</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-highest hover:bg-surface-tint hover:text-surface-container-lowest text-primary font-label-sm text-label-sm font-bold transition-all shadow-sm" id="manual-unlock-btn" type="button">
              MANUAL PASS
            </button>
</div>
</div>
</div>
</div>

<div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-2xl">policy</span>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary">Ghana NaSIA Campus Safety Notice 2024-B</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Under Carepoint Community School Child Protection Policy, no early learner (Creche to Basic 3) may exit perimeter gates without confirmed biometric or guardian token match.
          </p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span className="font-label-sm text-label-sm text-outline-variant">Station Terminal: GT-ACC-01A</span>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md" type="button">
          Print Shift Report
        </button>
</div>
</div>
</div>
</div>

    </>
  );
}
