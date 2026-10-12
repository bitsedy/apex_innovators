"use client";

import React from "react";
import Link from "next/link";

// Parent Messages
export default function MessagesPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-space-lg">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm uppercase tracking-wider mb-space-xs">
<span>Parent Portal</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span>Student Support Desk</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-primary font-bold">Welfare &amp; Remarks</span>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Communications &amp; Student Welfare Center</h1>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            Direct Gateway
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center font-bold font-headline-sm">
          KM
        </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="font-label-lg text-label-lg text-primary font-bold">Kofi Mensah</span>
<span className="material-symbols-outlined text-sm text-on-tertiary-container" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Class: Basic 2 - Sunflower • Roll #24-089</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-sm mb-space-lg bg-surface-container-low p-1.5 rounded-xl w-fit shadow-inner">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-primary shadow-sm font-label-lg transition-all" id="tab-conversations-btn" >
<span className="material-symbols-outlined text-lg">forum</span>
<span>Teacher Conversations</span>
<span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-xs">2 active</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all font-label-lg" id="tab-welfare-btn" >
<span className="material-symbols-outlined text-lg">medical_services</span>
<span>Health &amp; Welfare Logs</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs">1 pending acknowledgement</span>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg transition-all" id="view-conversations">

<aside className="lg:col-span-4 xl:col-span-4 flex flex-col gap-space-md">

<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 px-space-md rounded-xl font-label-lg flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-[0.99]" >
<span className="material-symbols-outlined text-lg">edit_square</span>
<span>Compose New Message to Staff</span>
</button>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="relative w-full mb-space-sm">
<span className="material-symbols-outlined absolute left-3 top-3 text-outline text-lg">search</span>
<input className="w-full bg-surface pl-10 pr-4 py-2 rounded-lg text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Search teacher, subject, remarks..." type="text"/>
</div>
<div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-space-sm text-xs">
<span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm cursor-pointer">All</span>
<span className="px-3 py-1 rounded-full bg-surface hover:bg-surface-container text-on-surface-variant font-label-sm cursor-pointer transition-colors">Class Teachers</span>
<span className="px-3 py-1 rounded-full bg-surface hover:bg-surface-container text-on-surface-variant font-label-sm cursor-pointer transition-colors">Specialists</span>
<span className="px-3 py-1 rounded-full bg-surface hover:bg-surface-container text-on-surface-variant font-label-sm cursor-pointer transition-colors">Clinic</span>
</div>

<div className="flex flex-col gap-2">

<div className="relative p-space-sm rounded-lg bg-surface-container cursor-pointer transition-all shadow-sm">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-secondary rounded-r"></div>
<div className="flex items-start gap-space-sm pl-1">
<div className="relative shrink-0">
<img className="w-11 h-11 rounded-full object-cover" data-alt="Portrait photo of Mrs. Beatrice Abbey, an experienced Ghanaian primary school educator wearing formal attire and smiling warmly in a bright classroom." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPteVlKZth6KMHVj6TPe1JJIQo68jPIHP-hZppwiiBqs2Z6Sxxen1QfVIViif6Xc4Hlas8ZUiV2hhuuitMbJwUsK4TUP4IQFYzADsgskbLyzBRb8pt2DcB3Od-f2wLeymLkzm1tdLG_Qhm8pIg0WM43_yHYsx1JLKfYE0INi-PLOrSesZdxNnkt4Wfl1zpGjki931i7DYuiJ761RL3_Vhe2rU3vjjFIOF_GIc96QpYLmnc0b7lOfvHA"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-on-tertiary-container ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<span className="font-label-lg text-primary truncate">Mrs. Beatrice Abbey</span>
<span className="font-label-sm text-secondary font-bold text-xs shrink-0">10:45 AM</span>
</div>
<span className="font-label-sm text-on-surface-variant block truncate mb-1">Class Teacher • Basic 2</span>
<p className="font-body-sm text-on-surface truncate text-xs font-semibold">
                    Thank you Dr. Mensah, Kofi received his new reading log...
                  </p>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer transition-all">
<div className="flex items-start gap-space-sm">
<div className="relative shrink-0">
<img className="w-11 h-11 rounded-full object-cover" data-alt="Headshot of Mr. Kwesi Osei, a friendly Ghanaian male math teacher with wireframe glasses wearing a patterned navy tie inside an academic faculty lounge." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqjUKBXnkkavW41OlxceR7jWTwP6sqA80q6z7rlRgnpTtEhYGhdUoGCg6uvuOOTrxm9vQaEhQRwsjT_BqYEHiUX92ZmkUG6pael5CGXNFuesgG93NRoib_PuIvhTmFpAYL2p5WRroM18U-wNLr06u7dd6dtwpGEQEuaJWjjOY0HpCSex3xjl6gNA9N7ykjbtTndnXAcBGG0ce8jPe3Q7EtSASd7tzkKkI_1b4TlCeU8JDYXlnsewllcA"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<span className="font-label-lg text-on-surface truncate">Mr. Kwesi Osei</span>
<span className="font-label-sm text-outline text-xs shrink-0">Yesterday</span>
</div>
<span className="font-label-sm text-on-surface-variant block truncate mb-1">Mathematics Specialist</span>
<p className="font-body-sm text-on-surface-variant truncate text-xs">
                    Kofi achieved 100% in today's mental math speed drill...
                  </p>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer transition-all">
<div className="flex items-start gap-space-sm">
<div className="relative shrink-0 w-11 h-11 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined text-xl">local_hospital</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<span className="font-label-lg text-on-surface truncate">Carepoint Health Bay</span>
<span className="font-label-sm text-outline text-xs shrink-0">Oct 14</span>
</div>
<span className="font-label-sm text-on-surface-variant block truncate mb-1">Nurse Faustina Asante</span>
<p className="font-body-sm text-on-surface-variant truncate text-xs">
                    Routine Health Screening Report completed
                  </p>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer transition-all">
<div className="flex items-start gap-space-sm">
<div className="relative shrink-0 w-11 h-11 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">account_balance</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1 mb-0.5">
<span className="font-label-lg text-on-surface truncate">School Admin &amp; Accounts</span>
<span className="font-label-sm text-outline text-xs shrink-0">Oct 10</span>
</div>
<span className="font-label-sm text-on-surface-variant block truncate mb-1">Secretariat Office</span>
<p className="font-body-sm text-on-surface-variant truncate text-xs">
                    Term 2 Re-enrollment Notice &amp; Calendar
                  </p>
</div>
</div>
</div>
</div>

<div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-base mt-0.5">schedule</span>
<div className="flex flex-col text-xs font-body-sm">
<span className="font-bold text-primary">Teacher Direct Response Hours</span>
<span className="text-on-surface-variant">Class educators reply to messages between 14:30 and 16:00 Mon-Fri. For urgent inquiries, call the Administration Desk.</span>
</div>
</div>
</div>
</aside>

<section className="lg:col-span-8 xl:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm min-h-[640px] overflow-hidden">

<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" data-alt="Portrait photo of Mrs. Beatrice Abbey, primary school educator at Carepoint Community School with a reassuring smile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWWqCZ-bn2YWF9uZv8kazoYkYIwqWeQv-H_o1pgTQAW10T_PoHCvbkt3DEKSrpjCD3kmF2ZfuTcDqYF1CUbDdSrQMV15fzgouezx8zpXwwkr3DuJgcFwF2aQlXKrndw5F_vzthRVeR5iSKKnhqqmwp21HJMxG2M3g2z_l1R9Ip_s5cJO5sGzgRAJppDgukKgYRnDkKDw5P0d0Y31TRH1tElHc4O22MoplgmRxJacBB7qeTeFuWfA2zIw"/>
<span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-on-tertiary-container ring-2 ring-surface-container-low"></span>
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-primary">Mrs. Beatrice Abbey</h2>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] uppercase font-bold tracking-wider">Available</span>
</div>
<div className="flex items-center gap-3 text-xs font-body-sm text-on-surface-variant">
<span>Class Teacher • Basic 2 Sunflower</span>
<span>•</span>
<span className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-xs">cloud_download</span>
<span>Office hours: 14:30 - 16:00 Mon-Fri</span>
</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs self-start sm:self-center">
<a className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" href="tel:+233201122334" title="Contact via voice intercom">
<span className="material-symbols-outlined text-lg">call</span>
</a>
<a className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors" href="mailto:b.abbey@carepoint.edu.gh" title="Send Official Academic Email">
<span className="material-symbols-outlined text-lg">mail</span>
</a>
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm transition-colors" >
<span className="material-symbols-outlined text-base">health_and_safety</span>
<span className="hidden sm:inline">Kofi's Care Card</span>
</button>
</div>
</div>

<div className="flex-1 p-space-md sm:p-space-lg overflow-y-auto flex flex-col gap-space-md bg-gradient-to-b from-surface via-surface-container-lowest to-surface-container-lowest">

<div className="flex items-center justify-center my-space-xs">
<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-xs">
              Yesterday • Wednesday, Oct 15
            </span>
</div>

<div className="flex items-start gap-space-sm max-w-[85%] sm:max-w-[75%]">
<img className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" data-alt="Small thumbnail avatar of Mrs. Beatrice Abbey wearing professional glasses." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWXNVaS3-Dd5DcOk9UzQvUYcSCDVM6YuyKAJbigjgZxCiomhx8ciYVZhCiZpvleE3z3qDWTtR-pKohdttHtR5DTN-9wssGH4dcktAQkfGRlwEWbmIoUnuHQZWrXhiOJ4T85DYi2oVLl9HWZSWa2Hc-n38i3fZDYgzPgbRMv4zXcfSn2UA3svymo6Dh45UYokw8x0VS0ltW8ycqCQQCTsm9GxMU5weU6lH7IiJr8NNVNPQ9hJY2rlP01w"/>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-label-sm text-primary font-bold text-xs">Mrs. Beatrice Abbey</span>
<span className="text-on-surface-variant font-label-sm text-[11px]">14:15</span>
</div>
<div className="bg-surface-container-low text-on-surface p-space-md rounded-2xl rounded-tl-sm shadow-sm leading-relaxed font-body-sm">
                Good afternoon Dr. Mensah. I wanted to share that Kofi was  to represent Basic 2 in the upcoming Inter-Class Bible Recitation &amp; Quiz on Friday. We are very proud of his commitment and sharp memory during practice!
              </div>
</div>
</div>

<div className="flex items-start gap-space-sm max-w-[85%] sm:max-w-[75%] self-end flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shrink-0 mt-1">
              NM
            </div>
<div className="flex flex-col gap-1 items-end">
<div className="flex items-center gap-2">
<span className="text-on-surface-variant font-label-sm text-[11px]">16:30</span>
<span className="font-label-sm text-primary font-bold text-xs">Dr. Nana Mensah</span>
</div>
<div className="bg-primary text-on-primary p-space-md rounded-2xl rounded-tr-sm shadow-sm leading-relaxed font-body-sm">
                Wonderful news Mrs. Abbey! We will practice the memory verses with him at home tonight. Does he need any special costume or the standard ceremonial uniform?
              </div>
<span className="flex items-center gap-1 text-[10px] text-on-surface-variant font-label-sm">
<span className="material-symbols-outlined text-xs text-on-tertiary-container">done_all</span>
                Read by teacher
              </span>
</div>
</div>

<div className="flex items-center justify-center my-space-xs">
<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-xs">
              Today • Thursday, Oct 16
            </span>
</div>

<div className="flex items-start gap-space-sm max-w-[85%] sm:max-w-[75%]">
<img className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" data-alt="Small thumbnail avatar of Mrs. Beatrice Abbey." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVyvrGo-2TWrcx-XOVMwI18IC12h-ypAOjOdWtza6PB9VucUnw6VdL4pBp-5VXiIKwKfYpivRsd1_GzD9mpGbmBRcDrQaes4nzSyHNL3RUWP4uMYzZnQF88P7GT_LFsucsc96M5Sp3s5IsTW30PixdfyMZvBoMj5p3zKWNh7q5HcNNQUQ_aaNCa-7wZhQ9vwrRwnCTnzO_CZYRqKppZ437enl-qnqryfMBmXHIK1JG_YPpqUWevfZv9g"/>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-label-sm text-primary font-bold text-xs">Mrs. Beatrice Abbey</span>
<span className="text-on-surface-variant font-label-sm text-[11px]">09:15</span>
</div>
<div className="bg-surface-container-low text-on-surface p-space-md rounded-2xl rounded-tl-sm shadow-sm leading-relaxed font-body-sm">
                Standard ceremonial Wednesday uniform with the school crest blazer will be perfect. Thank you for your continued support at home!
              </div>
</div>
</div>

<div className="self-start ml-11 max-w-[320px] bg-surface-container rounded-xl p-space-sm flex items-center gap-space-sm shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined">menu_book</span>
</div>
<div className="flex-1 min-w-0">
<span className="font-label-sm text-primary font-bold block truncate">Quiz_Memory_Verses_Basic2.pdf</span>
<span className="font-label-sm text-[11px] text-on-surface-variant block">PDF Document • 1.4 MB</span>
</div>
<a className="p-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container transition-colors" href="#" title="Download Reference Verses">
<span className="material-symbols-outlined text-lg">download</span>
</a>
</div>
</div>

<div className="px-space-md py-2 bg-surface-container-low flex items-center gap-2 overflow-x-auto">
<span className="text-xs font-label-sm text-on-surface-variant uppercase shrink-0">Quick Remarks:</span>
<button className="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest hover:bg-surface-container text-primary font-label-sm text-xs transition-colors shadow-sm" >
            Confirming Receipt
          </button>
<button className="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest hover:bg-surface-container text-primary font-label-sm text-xs transition-colors shadow-sm" >
            Thank you teacher
          </button>
<button className="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest hover:bg-surface-container text-primary font-label-sm text-xs transition-colors shadow-sm" >
            Request brief call
          </button>
</div>

<div className="p-space-md bg-surface-container-lowest flex flex-col gap-space-sm">
<div className="flex items-center gap-1 text-on-surface-variant">
<button className="p-1.5 hover:text-primary hover:bg-surface-container rounded transition-colors" title="Bold text" type="button">
<span className="material-symbols-outlined text-lg">format_bold</span>
</button>
<button className="p-1.5 hover:text-primary hover:bg-surface-container rounded transition-colors" title="Italic text" type="button">
<span className="material-symbols-outlined text-lg">format_italic</span>
</button>
<button className="p-1.5 hover:text-primary hover:bg-surface-container rounded transition-colors" title="List" type="button">
<span className="material-symbols-outlined text-lg">format_list_bulleted</span>
</button>
<div className="w-px h-4 bg-outline-variant mx-1"></div>
<label className="p-1.5 hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer flex items-center gap-1 text-xs font-label-sm">
<span className="material-symbols-outlined text-lg">attach_file</span>
<span className="hidden sm:inline">Attach Homework / Note</span>
<input className="hidden" type="file"/>
</label>
</div>
<div className="flex items-end gap-space-sm">
<textarea className="flex-1 bg-surface-container-low rounded-xl px-4 py-3 text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all resize-none" id="composer-input" placeholder="Write a direct message to Mrs. Beatrice Abbey..." rows={2}></textarea>
<button className="bg-primary hover:bg-primary-container text-on-primary px-space-md py-3 rounded-xl font-label-lg flex items-center gap-2 shadow-sm transition-transform active:scale-95 shrink-0" >
<span>Send Message</span>
<span className="material-symbols-outlined text-lg">send</span>
</button>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant font-label-sm">
<span>Conversations are archived according to Carepoint Child Safeguarding Policy.</span>
<span>Press Enter to send</span>
</div>
</div>
</section>
</div>

<div className="mt-space-lg flex flex-col gap-space-lg" id="view-welfare">

<div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">vital_signs</span>
</div>
<div>
<div className="flex items-center gap-2 flex-wrap">
<h2 className="font-headline-sm text-headline-sm text-primary">Health Bay Clinical Observations &amp; Incident Log</h2>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-bold uppercase tracking-wider">
                Action Required
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Every on-campus clinic intervention, dental checkup, or nurse visit is permanently logged here with authorized clinician timestamps.
            </p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-xs flex items-center gap-1.5 transition-colors" >
<span className="material-symbols-outlined text-sm">print</span>
<span>Print Health Record</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md">

<div className="bg-primary-container text-on-primary p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed">health_and_safety</span>
<span className="font-headline-sm text-base text-surface-container-lowest font-bold">Annual Children's Screening &amp; Dental Review</span>
</div>
<div className="flex items-center gap-2 text-xs font-label-md">
<span className="text-primary-fixed">Session: Term 1 Week 8</span>
<span className="text-surface-variant">•</span>
<span className="text-surface-container-lowest">Recorded: Oct 14, 2026 at 11:20 AM</span>
</div>
</div>
<div className="p-space-md sm:p-space-lg flex flex-col gap-space-lg">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-low p-space-md rounded-xl">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                FA
              </div>
<div className="flex flex-col">
<span className="font-label-lg text-primary font-bold">Faustina Asante, RN</span>
<span className="font-body-sm text-xs text-on-surface-variant">Carepoint Campus Health Bay • License #NMC-GH-88421</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex flex-col text-right">
<span className="font-label-sm text-xs text-on-surface-variant uppercase">Incident Severity</span>
<span className="inline-flex items-center justify-end gap-1 font-label-lg text-on-tertiary-container">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                  Low / Informational
                </span>
</div>
</div>
</div>

<div>
<h3 className="font-label-lg text-label-lg text-primary mb-space-sm uppercase tracking-wider">Vitals &amp; Physical Assessment</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-container rounded-xl p-space-sm flex flex-col">
<span className="font-label-sm text-xs text-on-surface-variant uppercase">Recorded Height</span>
<span className="font-headline-md text-headline-md text-primary font-bold my-1">122 <span className="font-body-sm text-sm text-on-surface-variant font-normal">cm</span></span>
<span className="font-label-sm text-[11px] text-on-tertiary-container flex items-center gap-0.5">
<span className="material-symbols-outlined text-xs">arrow_upward</span>
                  +2.5 cm since Term 3
                </span>
</div>
<div className="bg-surface-container rounded-xl p-space-sm flex flex-col">
<span className="font-label-sm text-xs text-on-surface-variant uppercase">Weight Check</span>
<span className="font-headline-md text-headline-md text-primary font-bold my-1">24.0 <span className="font-body-sm text-sm text-on-surface-variant font-normal">kg</span></span>
<span className="font-label-sm text-[11px] text-primary">Normal BMI range (55th percentile)</span>
</div>
<div className="bg-surface-container rounded-xl p-space-sm flex flex-col">
<span className="font-label-sm text-xs text-on-surface-variant uppercase">Visual Acuity</span>
<span className="font-headline-md text-headline-md text-primary font-bold my-1">20 / 20</span>
<span className="font-label-sm text-[11px] text-on-tertiary-container">Snellen Chart • Both Eyes Clear</span>
</div>
<div className="bg-surface-container rounded-xl p-space-sm flex flex-col">
<span className="font-label-sm text-xs text-on-surface-variant uppercase">Dental Hygiene</span>
<span className="font-headline-md text-headline-md text-primary font-bold my-1">Clean</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Zero cavities detected</span>
</div>
</div>
</div>

<div className="bg-surface p-space-md rounded-xl flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary font-label-lg">
<span className="material-symbols-outlined text-base">clinical_notes</span>
<span>Clinical Observations &amp; Interventions</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
              Mild seasonal dust allergy noted after playground break time. Administered prescribed saline nasal rinse. Student rested comfortably in the health bay for 20 minutes and returned cheerfully to class without fever or respiratory discomfort.
            </p>
<div className="flex items-center gap-space-xs text-xs font-label-sm text-on-surface-variant mt-1">
<span className="material-symbols-outlined text-sm">medication</span>
<span>Medication administered: Sterile Sodium Chloride 0.9% Nasal Spray (Batch #K209).</span>
</div>
</div>

<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md transition-all" id="acknowledgement-box">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">notification_important</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-primary font-bold">Mandatory Parent Receipt Sign-off</span>
<span className="font-body-sm text-xs text-on-surface-variant">Please confirm review of Nurse Faustina's clinical remark for student file #24-089.</span>
</div>
</div>
<button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg shadow-sm transition-all transform active:scale-95 flex items-center justify-center gap-2" id="btn-acknowledge" >
<span className="material-symbols-outlined text-lg">how_to_reg</span>
<span>Acknowledge Receipt</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm">
<h3 className="font-headline-sm text-primary mb-space-md">Previous Term Logs &amp; Immunization Tracking</h3>
<div className="space-y-space-sm">
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary">check_circle</span>
<div className="flex flex-col">
<span className="font-label-lg text-on-surface">Term 3 Final Physical &amp; Growth Assessment</span>
<span className="font-label-sm text-xs text-on-surface-variant">July 18, 2026 • Nurse Faustina Asante</span>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs font-bold">
              Acknowledged by Dr. Nana Mensah
            </span>
</div>
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary">vaccines</span>
<div className="flex flex-col">
<span className="font-label-lg text-on-surface">Ghana Health Service Child Wellness Booster Sync</span>
<span className="font-label-sm text-xs text-on-surface-variant">March 04, 2026 • Ministry Outreach Visit</span>
</div>
</div>
<span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-xs font-bold">
              Verified &amp; Certified
            </span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm hidden items-center justify-center p-4" id="compose-modal">
<div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl flex flex-col gap-space-md animate-in fade-in zoom-in-95 duration-150">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-base">forward_to_inbox</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Compose Message</h3>
</div>
<button className="p-1 rounded-full hover:bg-surface-container text-on-surface-variant" >
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex flex-col gap-3 font-body-sm text-on-surface">
<div>
<label className="block font-label-lg text-primary text-xs uppercase tracking-wider mb-1">Select Staff Recipient <span className="text-secondary">*</span></label>
<select className="w-full bg-surface px-3 py-2 rounded-lg text-on-surface font-body-sm focus:outline-none focus:bg-surface-container">
<option>Mrs. Beatrice Abbey (Class Teacher - Basic 2 Sunflower)</option>
<option>Mr. Kwesi Osei (Mathematics Specialist)</option>
<option>Nurse Faustina Asante, RN (Carepoint Health Bay)</option>
<option>Mrs. Lydia Addo (Head of Early &amp; Primary Division)</option>
<option>Accounts &amp; Finance Secretariat</option>
</select>
</div>
<div>
<label className="block font-label-lg text-primary text-xs uppercase tracking-wider mb-1">Subject</label>
<input className="w-full bg-surface px-3 py-2 rounded-lg text-on-surface font-body-sm focus:outline-none focus:bg-surface-container" placeholder="e.g. Inquiring on Homework Sheet / Sports Day Logistics" type="text"/>
</div>
<div>
<label className="block font-label-lg text-primary text-xs uppercase tracking-wider mb-1">Message Content</label>
<textarea className="w-full bg-surface px-3 py-2 rounded-lg text-on-surface font-body-sm focus:outline-none focus:bg-surface-container resize-none" placeholder="Write your remark or inquiry clearly..." rows={4}></textarea>
</div>
</div>
<div className="flex items-center justify-end gap-space-sm pt-space-xs">
<button className="px-4 py-2 rounded-lg hover:bg-surface-container text-on-surface-variant font-label-lg" >
          Cancel
        </button>
<button className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg flex items-center gap-1.5 shadow-sm" >
<span>Dispatch Note</span>
<span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</div>


</div>
    </>
  );
}
