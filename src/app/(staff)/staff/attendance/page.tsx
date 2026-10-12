"use client";

import React from "react";
import Link from "next/link";

// Staff Attendance
export default function AttendancePage() {
  return (
    <>
<div className="flex flex-col w-full pb-space-xl">

<div className="h-1.5 w-full bg-gradient-to-r from-surface-tint via-secondary to-tertiary-fixed-dim rounded-full mb-space-md opacity-90"></div>

<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md uppercase tracking-wider">Teacher Attendance</span>
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-amber-100 text-amber-900 font-label-sm text-label-sm font-bold shadow-sm">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          TAKING ATTENDANCE • NOT SAVED YET
        </span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span> Synced 1m ago
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight flex items-center gap-space-sm mt-1">
        Sunflower Class Attendance
        <span className="font-body-md text-body-md text-on-surface-variant font-normal">| Term 1</span>
</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Basic 2 • Mark which students are here today.
      </p>
</div>

<div className="flex items-center gap-space-sm flex-wrap self-start lg:self-auto">
<div className="bg-surface-container-lowest px-space-md py-2 rounded-xl shadow-sm flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
<div className="text-left">
<div className="font-label-sm text-label-sm text-on-surface-variant leading-none">Date</div>
<div className="font-label-lg text-label-lg text-primary">Thursday, Oct 16, 2026</div>
</div>
</div>
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all transform active:scale-95" id="lockRegisterBtn" type="button">
<span className="material-symbols-outlined text-[18px]">lock</span>
<span>Save Attendance</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md mb-space-lg">

<div className="md:col-span-7 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row gap-space-md items-center justify-between">
<div className="w-full sm:w-1/2 flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold" htmlFor="classSelect">Classroom</label>
<div className="relative w-full">
<select className="w-full appearance-none bg-surface-container-low px-space-md py-2.5 rounded-lg font-headline-sm text-headline-sm text-primary font-bold pr-8 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer" id="classSelect">
<option>Basic 2 — Sunflower (Room 104)</option>
<option>Basic 2 — Orchid (Room 105)</option>
<option>Basic 1 — Daisy (Room 101)</option>
<option>Basic 3 — Bluebell (Room 108)</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-3 text-primary text-[20px]">expand_more</span>
</div>
</div>
<div className="w-full sm:w-1/2 flex flex-col gap-1">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold" htmlFor="periodSelect">Class Time</label>
<div className="relative w-full">
<select className="w-full appearance-none bg-surface-container-low px-space-md py-2.5 rounded-lg font-label-lg text-label-lg text-on-surface pr-8 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer" id="periodSelect">
<option>Period 1: Morning Devotion (08:00 - 08:30)</option>
<option>Period 2: Reading &amp; Phonics (08:30 - 09:30)</option>
<option>Period 3: Math (09:45 - 10:45)</option>
<option>Period 4: Assembly (12:00 - 12:45)</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-3 text-primary text-[20px]">expand_more</span>
</div>
</div>
</div>

<div className="md:col-span-5 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-around gap-2">
<div className="text-center">
<div className="font-label-sm text-label-sm text-outline uppercase font-semibold">Total</div>
<div className="font-headline-lg text-headline-lg text-primary font-extrabold" id="statTotal">28</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Students</span>
</div>
<div className="h-10 w-px bg-surface-container-highest"></div>
<div className="text-center">
<div className="font-label-sm text-label-sm text-tertiary-container uppercase font-bold flex items-center justify-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> Present
        </div>
<div className="font-headline-lg text-headline-lg text-emerald-800 font-extrabold" id="statPresent">26</div>
<span className="font-label-sm text-label-sm text-emerald-700">92.8%</span>
</div>
<div className="h-10 w-px bg-surface-container-highest"></div>
<div className="text-center">
<div className="font-label-sm text-label-sm text-amber-800 uppercase font-bold flex items-center justify-center gap-1">
<span className="w-2 h-2 rounded-full bg-amber-500"></span> Late
        </div>
<div className="font-headline-lg text-headline-lg text-amber-900 font-extrabold" id="statLate">1</div>
<span className="font-label-sm text-label-sm text-amber-800">Traffic</span>
</div>
<div className="h-10 w-px bg-surface-container-highest"></div>
<div className="text-center">
<div className="font-label-sm text-label-sm text-sky-800 uppercase font-bold flex items-center justify-center gap-1">
<span className="w-2 h-2 rounded-full bg-sky-500"></span> Excused
        </div>
<div className="font-headline-lg text-headline-lg text-sky-900 font-extrabold" id="statExcused">1</div>
<span className="font-label-sm text-label-sm text-sky-800">Clinic</span>
</div>
<div className="h-10 w-px bg-surface-container-highest"></div>
<div className="text-center">
<div className="font-label-sm text-label-sm text-secondary uppercase font-bold flex items-center justify-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Absent
        </div>
<div className="font-headline-lg text-headline-lg text-secondary font-extrabold" id="statAbsent">0</div>
<span className="font-label-sm text-label-sm text-secondary">None</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm flex-wrap">
<button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-label-lg text-label-lg font-bold shadow-sm transition-colors" id="markAllPresentBtn" type="button">
<span className="material-symbols-outlined text-[18px]">done_all</span>
        Mark All as Present
      </button>
<div className="h-6 w-px bg-surface-container-highest hidden sm:block"></div>

<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="filter-chip px-space-sm py-1 rounded-md text-label-sm font-label-sm font-bold bg-primary text-on-primary shadow-sm transition-all" data-filter="all" type="button">All (28)</button>
<button className="filter-chip px-space-sm py-1 rounded-md text-label-sm font-label-sm font-bold text-on-surface-variant hover:text-primary transition-all" data-filter="present" type="button">Present (26)</button>
<button className="filter-chip px-space-sm py-1 rounded-md text-label-sm font-label-sm font-bold text-on-surface-variant hover:text-primary transition-all" data-filter="late" type="button">Late (1)</button>
<button className="filter-chip px-space-sm py-1 rounded-md text-label-sm font-label-sm font-bold text-on-surface-variant hover:text-primary transition-all" data-filter="excused" type="button">Excused (1)</button>
<button className="filter-chip px-space-sm py-1 rounded-md text-label-sm font-label-sm font-bold text-on-surface-variant hover:text-primary transition-all" data-filter="absent" type="button">Absent (0)</button>
</div>
</div>

<div className="relative w-full md:w-72">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
<input className="w-full bg-surface-container-low pl-9 pr-3 py-2 rounded-lg text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="pupilSearchInput" placeholder="Search student name or ID..." type="text"/>
</div>
</div>

<div className="carepoint-hover-card bg-surface-container-low p-space-md rounded-xl mb-space-md flex items-start gap-space-sm shadow-sm cursor-pointer transition-all">
<div className="p-2 rounded-lg bg-surface-container-highest text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">shield</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between gap-space-sm flex-wrap">
<div className="flex items-center gap-space-sm">
<span className="font-label-lg text-label-lg text-primary font-bold">Attendance Rules:</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">School Policy</span>
</div>
<span className="carepoint-hover-hint">Hover for details</span>
</div>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
        If a student is marked <strong>Absent</strong>, a text message is sent to parents at <strong>09:00 GMT</strong>. Once attendance is saved, changes require Headmistress approval.
      </p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-space-lg">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3.5 px-space-md w-12 text-center">#</th>
<th className="py-3.5 px-space-md">Student Name &amp; ID</th>
<th className="py-3.5 px-space-md">Parent / Emergency Contact</th>
<th className="py-3.5 px-space-md">Arrival Time</th>
<th className="py-3.5 px-space-md min-w-[300px]">Attendance Status</th>
<th className="py-3.5 px-space-md min-w-[240px]">Teacher Notes</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface" id="rosterTableBody">

<tr className="hover:bg-surface-container-low/60 transition-colors" data-name="kofi mensah 24-089" data-status="present">
<td className="py-3.5 px-space-md text-center font-label-sm text-label-sm text-outline">01</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Close-up portrait of a cheerful 7-year-old Ghanaian boy wearing a crisp navy Carepoint Community School polo uniform with green collar trim in bright morning natural light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ49QDBSHwP5l9K1e4BzD45F81C6wnIWVTMbMs1cbxzLS1wmGLaSKOka47PXZsoIy_GPqxgmHGEdpQKhLsnIThZuUcZZXw24KSWvYBZTXw2VzNQ-QOJ7dN5tGhfKxy8780t1QibuAGOek8id_RW_pJKl-kGm6DTF5-XBHtXRYYfnphglwpoP1pfkYZgNpQAMwR5PuN10HS-2bDjW6LU4Aqp_ep60Lykf2SgG6jqyEZCoIa5MZ0Ilojfw"/>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Kofi Mensah</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Roll: <span className="font-mono text-primary font-semibold">#24-089</span> • Basic 2</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">Dr. Emmanuel Mensah (Father)</div>
<div className="font-label-sm text-label-sm text-outline-variant text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">call</span> +233 24 498 1120
              </div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                07:42 GMT (Turnstile B)
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 status-button-group">
<button className="btn-status-present px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-emerald-700 text-on-primary shadow-sm" data-role="present" type="button">Present</button>
<button className="btn-status-late px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-amber-100 hover:text-amber-900" data-role="late" type="button">Late</button>
<button className="btn-status-excused px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-sky-100 hover:text-sky-900" data-role="excused" type="button">Excused</button>
<button className="btn-status-absent px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-red-100 hover:text-secondary" data-role="absent" type="button">Absent</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<input className="w-full bg-surface-container-low px-2.5 py-1.5 rounded text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Add note..." type="text" value="On time, dressed in ceremonial blazer."/>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors" data-name="ama boateng 24-012" data-status="present">
<td className="py-3.5 px-space-md text-center font-label-sm text-label-sm text-outline">02</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Headshot of a smiling young African schoolgirl with braided hair wearing the school uniform navy dress with neat red crest embroidery in a sunny classroom background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGWTRyboYVcvLMUP4lsMUugOcTjf85cccZBJsI4pHmLCUmL_zmrC0YI80GX7ALgomJNvIXvLh8WTAy3-EX1WofKPApXa1QSmxLW57rEfWDNnxI2FOh0yHHrtndXHufdhrSf2M2dnCoD_IZm7ZsHojVOOFhbWssGoeTu8C8htQSu2-k3YQssSR9fhb2kh2YC-d925OnddTrzlBLzZxAYJ5_DHtLS6UlN-pcfv-HTwck48Kz_H60jJMlSQ"/>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Ama Boateng</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Roll: <span className="font-mono text-primary font-semibold">#24-012</span> • Basic 2</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">Mrs. Grace Boateng (Mother)</div>
<div className="font-label-sm text-label-sm text-outline-variant text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">call</span> +233 20 812 4433
              </div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                07:35 GMT (Main Gate)
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 status-button-group">
<button className="btn-status-present px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-emerald-700 text-on-primary shadow-sm" data-role="present" type="button">Present</button>
<button className="btn-status-late px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-amber-100 hover:text-amber-900" data-role="late" type="button">Late</button>
<button className="btn-status-excused px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-sky-100 hover:text-sky-900" data-role="excused" type="button">Excused</button>
<button className="btn-status-absent px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-red-100 hover:text-secondary" data-role="absent" type="button">Absent</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<input className="w-full bg-surface-container-low px-2.5 py-1.5 rounded text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Add note..." type="text"/>
</td>
</tr>

<tr className="bg-amber-50/40 hover:bg-amber-50/70 transition-colors" data-name="kwabena osei 24-055" data-status="late">
<td className="py-3.5 px-space-md text-center font-label-sm text-label-sm text-outline">03</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait of an energetic primary school boy in uniform holding a yellow backpack strap looking attentively at camera in warm institutional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZnTp4VkTpj5L9lQUFS2DtjK42pmxOqn0PeAB4jtsFnSDJcmh0_6UIitahOvYUZm-ZHZDIAJNHeWww5uHE1YJ_Pg94ffrcf06648AIKHkx7lICmJcMllBdBFZbSgjj1tMVF9xRTuSbKAuElpLrY4q5oS1hqSiWmyjskuSA6Gt8WQx_orWiXcQt0SAroV7N-UI7mIU4ZcPfrMVgio-vYMk5WrS9S6ugHJW3VYirFXSKNXbZTO7lW8tgvg"/>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Kwabena Osei</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Roll: <span className="font-mono text-primary font-semibold">#24-055</span> • Basic 2</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">Mr. Seth Osei (Father)</div>
<div className="font-label-sm text-label-sm text-outline-variant text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">call</span> +233 55 330 9012
              </div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-label-sm text-label-sm font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping"></span>
                08:12 GMT (Main Gate)
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 status-button-group">
<button className="btn-status-present px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-emerald-100 hover:text-emerald-900" data-role="present" type="button">Present</button>
<button className="btn-status-late px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-amber-800 text-on-primary shadow-sm" data-role="late" type="button">Late</button>
<button className="btn-status-excused px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-sky-100 hover:text-sky-900" data-role="excused" type="button">Excused</button>
<button className="btn-status-absent px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-red-100 hover:text-secondary" data-role="absent" type="button">Absent</button>
</div>
<div className="flex items-center gap-1 text-[11px] text-amber-900 font-semibold">
<span className="material-symbols-outlined text-[14px]">alarm</span> Arrived 08:12 GMT (12 mins delay)
                </div>
</div>
</td>
<td className="py-3.5 px-space-md">
<input className="w-full bg-surface-container-lowest px-2.5 py-1.5 rounded text-body-sm font-body-sm text-on-surface shadow-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" value="Heavy traffic at Achimota roundabout, parent called front desk."/>
</td>
</tr>

<tr className="bg-sky-50/40 hover:bg-sky-50/70 transition-colors" data-name="akosua mensah-bonsu 24-031" data-status="excused">
<td className="py-3.5 px-space-md text-center font-label-sm text-label-sm text-outline">04</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait of a young Ghanaian primary girl with bright expressive eyes, dressed in neat school uniform against light blue background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsatPEHjsRRwXfA81cH_uLiacPYIAMqaZ4NK8m_rBCE-LYymyuWB1FD_4nkh1OARuQZnHY-cBum4iBfSkRSh6haMRVoyUfgCeONzxsFGpLSgTw7Q6jLDUIw7czbGJpl8A7WUMVjqsOqRAHKEGvvzCOLo8ST6UPSebNoU8cek0DvwkNJrAnaE_oe7HmbA-sUEpV9eUd4EGHWjjCSxi_fZ3Y8hptu4wsDF95_4CdJnBbf-M4TlwWPC_5jw"/>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Akosua Mensah-Bonsu</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Roll: <span className="font-mono text-primary font-semibold">#24-031</span> • Basic 2</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">Nana Yaa Mensah-Bonsu (Mother)</div>
<div className="font-label-sm text-label-sm text-outline-variant text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">call</span> +233 24 991 8000
              </div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-100 text-sky-900 font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[14px]">local_hospital</span>
                Health Bay In-Care
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 status-button-group">
<button className="btn-status-present px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-emerald-100 hover:text-emerald-900" data-role="present" type="button">Present</button>
<button className="btn-status-late px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-amber-100 hover:text-amber-900" data-role="late" type="button">Late</button>
<button className="btn-status-excused px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-sky-800 text-on-primary shadow-sm" data-role="excused" type="button">Excused</button>
<button className="btn-status-absent px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-red-100 hover:text-secondary" data-role="absent" type="button">Absent</button>
</div>
<div className="text-[11px] text-sky-900 font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Approved by School Clinic Nurse (Ref #MED-902)
                </div>
</div>
</td>
<td className="py-3.5 px-space-md">
<input className="w-full bg-surface-container-lowest px-2.5 py-1.5 rounded text-body-sm font-body-sm text-on-surface shadow-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" value="Documented medical appointment at Health Bay."/>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors" data-name="emmanuel addo 24-077" data-status="present">
<td className="py-3.5 px-space-md text-center font-label-sm text-label-sm text-outline">05</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait of an African school boy with short neat haircut smiling politely in school uniform setting with soft daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTHzVZtiSudOsKxJvhvLgPZrNSiKnYUwCXgRNjS2punohpI-JXz2dCMP8FS4PzU_BeWEZtWUGXTCnuhZS-AXP_HDMjhPoA79Hb6diKPHIIrIl_ah2AbdbzZkZNf4brD3Nfc1IRg9iqcKHYECYOsCIyOjz7oQOWvW512YUfZDjx0_2pjFTBVj9wuhl5I4_gCqn7lFnnIX8DFNjial5Svh9Kdu5pfvypbstea8vKnOfZV-NX-fOosuKyzg"/>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Emmanuel Addo</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Roll: <span className="font-mono text-primary font-semibold">#24-077</span> • Basic 2</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">Pastor Joshua Addo (Father)</div>
<div className="font-label-sm text-label-sm text-outline-variant text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">call</span> +233 27 744 1982
              </div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                07:50 GMT (Turnstile A)
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 status-button-group">
<button className="btn-status-present px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-emerald-700 text-on-primary shadow-sm" data-role="present" type="button">Present</button>
<button className="btn-status-late px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-amber-100 hover:text-amber-900" data-role="late" type="button">Late</button>
<button className="btn-status-excused px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-sky-100 hover:text-sky-900" data-role="excused" type="button">Excused</button>
<button className="btn-status-absent px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-red-100 hover:text-secondary" data-role="absent" type="button">Absent</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<input className="w-full bg-surface-container-low px-2.5 py-1.5 rounded text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Add note..." type="text"/>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors" data-name="jessica darko 24-064" data-status="present">
<td className="py-3.5 px-space-md text-center font-label-sm text-label-sm text-outline">06</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Close up photography of a smiling young African schoolgirl wearing red ribbons in hair and clean school collared shirt." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2EK0H1Roj08hMkBFORDKG4b6wGKgxtty--rG9RbmYhPgQ0hoFDkSldLcgsgx2u--KxTKBYZ-1EwZQss1n970FMZ7TeLcwTeN_DbRC53FJDtnzGdc9wOn4hLXc6eQ8EOw5JzLBpaD-XQfLblwr5uEJpr-Hh_HpFOnhiFikqU-q65p-Dgac1iYJSdTFtRH71st2xML0795HhPeSPUUkp_rP3Lzfc9jDEFhYFHku6y90t5oJgbxUwj6TA"/>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Jessica Darko</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Roll: <span className="font-mono text-primary font-semibold">#24-064</span> • Basic 2</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">Maame Serwaa Darko (Mother)</div>
<div className="font-label-sm text-label-sm text-outline-variant text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">call</span> +233 26 550 7171
              </div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                07:48 GMT (Bus 03 Drop)
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 status-button-group">
<button className="btn-status-present px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-emerald-700 text-on-primary shadow-sm" data-role="present" type="button">Present</button>
<button className="btn-status-late px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-amber-100 hover:text-amber-900" data-role="late" type="button">Late</button>
<button className="btn-status-excused px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-sky-100 hover:text-sky-900" data-role="excused" type="button">Excused</button>
<button className="btn-status-absent px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-red-100 hover:text-secondary" data-role="absent" type="button">Absent</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<input className="w-full bg-surface-container-low px-2.5 py-1.5 rounded text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Add note..." type="text"/>
</td>
</tr>

<tr className="hover:bg-surface-container-low/60 transition-colors" data-name="samuel quaye 24-099" data-status="present">
<td className="py-3.5 px-space-md text-center font-label-sm text-label-sm text-outline">07</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Studio school profile portrait of an 8-year-old boy in school uniform with a gentle smile and confident expression, bright background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMoPgLZhXbFOmCu775k04w1W0MF5BnFMWZD4d_As6d8RBF-y9XK2Y_0mEpVAT_BhqPLc-QLQ2oBBJg2FH8os5eqZ9hE3Q6PC-urb-FhnLtNR-ZCiN5lQsu6cq5Q-xgdhM1XPdmoL8dtX7Y50Ptfb2V3Z86hBCOtOvyHOmSccFWyqXOWfDVNuBgbnGxQ2tZXjsAVpVns_I9upxObHb5-rygdWWRwXigyuy3iZao0xvPeXEdSOAu7ndEdw"/>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Samuel Quaye</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Roll: <span className="font-mono text-primary font-semibold">#24-099</span> • Basic 2</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">David Quaye (Uncle / Guardian)</div>
<div className="font-label-sm text-label-sm text-outline-variant text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">call</span> +233 50 123 9988
              </div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                07:40 GMT (Main Gate)
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 status-button-group">
<button className="btn-status-present px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-emerald-700 text-on-primary shadow-sm" data-role="present" type="button">Present</button>
<button className="btn-status-late px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-amber-100 hover:text-amber-900" data-role="late" type="button">Late</button>
<button className="btn-status-excused px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-sky-100 hover:text-sky-900" data-role="excused" type="button">Excused</button>
<button className="btn-status-absent px-3 py-1.5 rounded-md font-label-sm text-label-sm font-bold bg-surface-container-high text-on-surface-variant hover:bg-red-100 hover:text-secondary" data-role="absent" type="button">Absent</button>
</div>
</td>
<td className="py-3.5 px-space-md">
<input className="w-full bg-surface-container-low px-2.5 py-1.5 rounded text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Add note..." type="text"/>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="font-label-sm text-label-sm text-on-surface-variant">
        Displaying <strong>7 of 28</strong> active student records in sunflower roster.
      </div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-outline">Class Gate Ingestion: <strong>96.4% on campus</strong></span>
<button className="px-space-sm py-1 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold hover:bg-surface-container-highest transition-colors" type="button">
          Download PDF Register
        </button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 flex items-center justify-center hidden p-space-md" id="lockModal">
<div className="bg-surface-container-lowest max-w-md w-full rounded-2xl shadow-xl p-space-lg flex flex-col gap-space-md transform scale-95 transition-transform duration-200">
<div className="flex items-center gap-space-sm text-primary">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">lock</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary">Save Attendance?</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">Period 1 • Oct 16, 2026</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        You are saving attendance for <strong>Basic 2 Sunflower (28 students)</strong>:
      </p>
<ul className="text-body-sm font-body-sm text-on-surface space-y-1 bg-surface-container-low p-space-sm rounded-lg">
<li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-emerald-700 text-[18px]">check</span> Parents can see this on their portal.</li>
<li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-secondary text-[18px]">sms</span> Parents of absent students get a text at 09:00 GMT.</li>
<li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-amber-800 text-[18px]">gavel</span> Changes after saving need Headmistress approval.</li>
</ul>
<div className="flex items-center justify-end gap-space-sm mt-2">
<button className="px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors" id="cancelLockBtn" type="button">
          Cancel
        </button>
<button className="px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-colors" id="confirmLockBtn" type="button">
          Yes, Save Attendance
        </button>
</div>
</div>
</div>
</div>

    </>
  );
}
