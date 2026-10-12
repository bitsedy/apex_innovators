"use client";

import React from "react";
import Link from "next/link";

// Staff Timetable
export default function TimetablePage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="w-full bg-primary-container text-on-primary-container px-space-lg py-2.5 rounded-xl shadow-sm mb-space-md flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="flex h-2.5 w-2.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-fixed-dim"></span>
</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-primary font-bold">AUTO-SAVING ON</span>
<span className="hidden sm:inline text-on-primary-container/70">•</span>
<span className="font-body-sm text-body-sm text-surface-container-lowest">Saved 4 mins ago by Mrs. Beatrice Abbey</span>
</div>
<div className="flex items-center gap-space-md text-label-sm font-label-sm text-inverse-primary">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">cloud_done</span> Saved Online</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">lock_clock</span> Editing Allowed</span>
</div>
</div>

<div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mb-space-lg flex flex-col gap-space-md">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div>
<div className="flex flex-wrap items-center gap-space-sm mb-1">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">pending_actions</span>
            Status: Waiting for Headmistress
          </span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">verified</span>
            Official School Standards
          </span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
            Campus: Main Block
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Class Timetable &amp; Schedule</h1>
<p className="font-body-md text-body-md text-on-surface-variant">2026/2027 School Year • Term 1 • Basic 2 Sunflower Class</p>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<button className="px-space-md py-2.5 rounded-lg bg-surface-container-low text-primary font-label-lg text-label-lg font-bold hover:bg-surface-container-high transition-colors flex items-center gap-2" id="previewPupilModalBtn">
<span className="material-symbols-outlined text-[18px]">visibility</span>
          See Student View
        </button>
<button className="px-space-md py-2.5 rounded-lg bg-surface-container-low text-primary font-label-lg text-label-lg font-bold hover:bg-surface-container-high transition-colors flex items-center gap-2" id="conflictCheckBtn">
<span className="material-symbols-outlined text-[18px]">rule</span>
          Check for Clashes
        </button>
<button className="px-space-lg py-2.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold hover:opacity-95 shadow-md flex items-center gap-2 transition-transform active:scale-95" id="submitHeadmistressBtn">
<span className="material-symbols-outlined text-[18px]">send</span>
          Send to Headmistress
        </button>
</div>
</div>

<div className="p-space-sm bg-surface-container rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-space-sm">
<div className="inline-flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-md shadow-sm">
<span className="material-symbols-outlined text-primary text-[18px]">school</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Class:</span>
<span className="font-label-md text-label-md text-primary font-bold">Basic 2 — Sunflower Class</span>
</div>
<div className="inline-flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded-md shadow-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">date_range</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Week:</span>
<span className="font-label-md text-label-md text-primary font-bold">Week 6 of 14 (Oct 16 - Oct 20, 2026)</span>
</div>

<div className="inline-flex p-0.5 bg-surface-container-high rounded-md">
<button className="px-3 py-1 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">calendar_view_week</span> Weekly Schedule
          </button>
<button className="px-3 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">grid_on</span> Period List
          </button>
<button className="px-3 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">door_front</span> Classrooms
          </button>
</div>
</div>

<div className="flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-lowest">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">0 Time Clashes</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm font-bold text-primary">All 35 Lessons Scheduled</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">

<div className="xl:col-span-4 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[20px]">dataset</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Subjects</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">Click or drag a subject into any time slot</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">All Done (35/35)</span>
</div>

<div className="flex flex-col gap-2 max-h-[580px] overflow-y-auto pr-1">

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-primary"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Mathematics</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Room B-04 • Lead: Mrs. B. Abbey</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">6 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">English &amp; Phonics</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Room B-04 • Literacy Lead</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">8 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Integrated Science</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Science Pod 1 • STEM Assistant</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">4 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-primary-container"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Computing / ICT</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">ICT Lab B • Mr. K. Mensah</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">2 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Creative Arts &amp; Craft</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Atelier Wing • Lead Art Tutor</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">3 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-primary-fixed"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Ghanaian Language</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Twi &amp; Cultural Heritage</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">3 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-tertiary-fixed"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Physical Education</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Playground Zone A • Coach Sam</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">2 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-secondary-container"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">R.M.E. (Moral Ed.)</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Values &amp; Ethics Focus</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">2 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card group p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between cursor-grab active:cursor-grabbing shadow-sm">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-outline">drag_indicator</span>
<div className="w-3 h-3 rounded-full bg-outline-variant"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Library &amp; Research</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">School Library Core</div>
</div>
</div>
<div className="text-right">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold">2 Lessons</span>
<div className="font-label-sm text-[10px] text-on-tertiary-container font-semibold mt-0.5">Scheduled</div>
</div>
</div>

<div className="carepoint-hover-card p-2.5 rounded-lg bg-surface-container-highest/60 flex items-center justify-between opacity-80 cursor-pointer transition-all">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">lock</span>
<div className="w-3 h-3 rounded-full bg-primary-container"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Morning Devotion (Fixed)</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Daily 08:00 - 08:30 • Assembly Yard</div>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold">Daily Lock</span>
</div>
<div className="carepoint-hover-card p-2.5 rounded-lg bg-surface-container-highest/60 flex items-center justify-between opacity-80 cursor-pointer transition-all">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">lock</span>
<div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Dining Hall &amp; Break Time (Fixed)</div>
<div className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">10:30 &amp; 12:00 Dining Protocols</div>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold">Daily Lock</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Clash Checker</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">All Clear</span>
</div>
<div className="flex flex-col gap-2 mt-1">
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
<span className="material-symbols-outlined text-[18px] text-on-tertiary-container mt-0.5">check_circle</span>
<div>
<div className="font-label-md text-label-md text-primary font-bold">Computer Lab Booked</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Reserved Tuesday 11:00 - 12:00. No overlap with other classes.</div>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
<span className="material-symbols-outlined text-[18px] text-on-tertiary-container mt-0.5">check_circle</span>
<div>
<div className="font-label-md text-label-md text-primary font-bold">Playground Area Clear</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Scheduled Friday 11:00 - 12:00. Other classes are on Field B.</div>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
<span className="material-symbols-outlined text-[18px] text-on-tertiary-container mt-0.5">check_circle</span>
<div>
<div className="font-label-md text-label-md text-primary font-bold">Science Room Checked</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Ready Wednesday 13:00 - 14:00. Lab assistant confirmed.</div>
</div>
</div>
</div>

<div className="p-space-sm bg-surface-container-high/70 rounded-lg flex items-start gap-2 mt-1">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">policy</span>
<p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
<strong className="text-primary">Note:</strong> Sending this timetable asks <strong>Headmistress Dr. Elizabeth Appiah</strong> to approve it. Once approved, it shows on the Parent App.
          </p>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">assignment_turned_in</span>
<span className="font-label-lg text-label-lg font-bold text-primary">Notes from Headmistress</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">v1.3 feedback</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2 mb-1">
<img className="w-6 h-6 rounded-full object-cover" data-alt="Headmistress Dr. Elizabeth Appiah official headshot in formal Ghanaian kente trim academic attire smiling warmly in Carepoint office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLctvPPkqG1Sk7Oo3IZvw9hTxK8nqR_3zO2vauzbC5PKkDlvN_rs1KhLBjQJxkewnGPzEvYNy9GI3Fd3N4u1qqK94uDZidQahYIYiNL--SPOuSst1TXWk3dOARGB0S0dMwy2t55HCUaLMGvylT88rqHP6DT0mCBOtXUaEV_DheBBFLuUANkVPdhN0Lm5Gim2Jl5OrSL57gOUgWQ_aFEquXLHKok0rV5QTNY9LrAKiOJfUKdniRSDUtYQ"/>
<span className="font-label-md text-label-md font-bold text-primary">Dr. Elizabeth Appiah</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">• Oct 14, 15:40</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
            "Previous revision requested resolved: Shifted ICT Lab slot to Tuesday Period 3 to resolve contention with JHS 1 Computing. Ready for your final sign-off Beatrice."
          </p>
</div>
</div>
</div>

<div className="xl:col-span-8 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Weekly Class Schedule</span>
<span className="text-outline-variant">|</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">40 Hours Total (35 Lessons + Assembly &amp; Breaks)</span>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">print</span> Print
          </button>
<button className="px-2.5 py-1 rounded bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">file_download</span> Download PDF
          </button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-x-auto">
<div className="min-w-[760px] p-space-md flex flex-col gap-2">

<div className="grid grid-cols-6 gap-2 text-center pb-2 border-b border-surface-container-high">
<div className="font-label-sm text-label-sm font-bold text-outline uppercase tracking-wider text-left pl-2">Time / Period</div>
<div className="p-2 rounded bg-surface-container-high text-primary font-label-lg text-label-lg font-bold">Monday</div>
<div className="p-2 rounded bg-surface-container-high text-primary font-label-lg text-label-lg font-bold">Tuesday</div>
<div className="p-2 rounded bg-surface-container-high text-primary font-label-lg text-label-lg font-bold">Wednesday</div>
<div className="p-2 rounded bg-surface-container-high text-primary font-label-lg text-label-lg font-bold">Thursday</div>
<div className="p-2 rounded bg-surface-container-high text-primary font-label-lg text-label-lg font-bold">Friday</div>
</div>

<div className="grid grid-cols-6 gap-2 items-center">
<div className="pl-2">
<div className="font-label-md text-label-md font-bold text-primary">08:00 - 08:30</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Devotion Core</div>
</div>
<div className="col-span-5 p-2 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-between px-space-md shadow-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">diversity_3</span>
<span className="font-label-md text-label-md font-bold text-surface-container-lowest uppercase tracking-wider">Morning Devotion, National Anthem &amp; Assembly</span>
</div>
<span className="px-2 py-0.5 rounded bg-primary text-surface-container-lowest font-label-sm text-label-sm">All Students • School Yard</span>
</div>
</div>

<div className="grid grid-cols-6 gap-2 items-stretch pt-1">
<div className="pl-2 flex flex-col justify-center">
<div className="font-label-md text-label-md font-bold text-primary">08:30 - 09:30</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Period 1 (60m)</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary text-surface-container-lowest font-label-sm text-[10px] font-bold">MATH</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Mathematics</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Number Concepts</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary text-surface-container-lowest font-label-sm text-[10px] font-bold">MATH</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Mathematics</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Basic Addition</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary text-surface-container-lowest font-label-sm text-[10px] font-bold">ENG</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">English Grammar</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Noun &amp; Pronoun</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-tertiary text-surface-container-lowest font-label-sm text-[10px] font-bold">SCI</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Integrated Science</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Plants Around Us</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Science Pod 1</span>
<span className="font-semibold text-primary">Mr. Ofori</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">ART</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Creative Arts</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Clay &amp; Fiber Craft</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Atelier Wing</span>
<span className="font-semibold text-primary">Madam Joy</span>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-2 items-stretch pt-1">
<div className="pl-2 flex flex-col justify-center">
<div className="font-label-md text-label-md font-bold text-primary">09:30 - 10:30</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Period 2 (60m)</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary text-surface-container-lowest font-label-sm text-[10px] font-bold">ENG</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">English Language</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Sight Words &amp; Dictation</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-tertiary text-surface-container-lowest font-label-sm text-[10px] font-bold">SCI</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Integrated Science</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Water &amp; Weather</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Science Pod 1</span>
<span className="font-semibold text-primary">Mr. Ofori</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary text-surface-container-lowest font-label-sm text-[10px] font-bold">MATH</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Mathematics</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Measurement Units</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary text-surface-container-lowest font-label-sm text-[10px] font-bold">ENG</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">English Reading</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Story Comprehension</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-[10px] font-bold">GH LANG</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Ghanaian Language</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Asante Twi Phonics</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Madam Naa</span>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-2 items-center my-1">
<div className="pl-2">
<div className="font-label-md text-label-md font-bold text-secondary">10:30 - 11:00</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Break Time &amp; Fruit</div>
</div>
<div className="col-span-5 p-2 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-between px-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">local_florist</span>
<span className="font-label-md text-label-md font-bold text-primary">Healthy Snack Break &amp; Free Play</span>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold">Playground Zone A</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Duty: Mr. Sam &amp; Mrs. Abbey</span>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-2 items-stretch pt-1">
<div className="pl-2 flex flex-col justify-center">
<div className="font-label-md text-label-md font-bold text-primary">11:00 - 12:00</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Period 3 (60m)</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-tertiary text-surface-container-lowest font-label-sm text-[10px] font-bold">SCI</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Integrated Science</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Living &amp; Non-Living</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Science Pod 1</span>
<span className="font-semibold text-primary">Mr. Ofori</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-secondary/30">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary-container text-surface-container-lowest font-label-sm text-[10px] font-bold">COMPUTING</span>
<span className="material-symbols-outlined text-[16px] text-secondary" title="Approved Slot Reallocation">verified</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Computing / ICT</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Mouse Skills &amp; Typing</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span className="font-bold text-primary">ICT Lab B</span>
<span className="font-semibold text-primary">Mr. K. Mensah</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[10px] font-bold">RME</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">R.M.E. (Moral Ed.)</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Golden Rule &amp; Respect</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary text-surface-container-lowest font-label-sm text-[10px] font-bold">MATH</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Mathematics</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Simple Subtraction</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-tertiary font-label-sm text-[10px] font-bold">P.E.</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Physical Education</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Gross Motor Drills</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Playground A</span>
<span className="font-semibold text-primary">Coach Sam</span>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-2 items-center my-1">
<div className="pl-2">
<div className="font-label-md text-label-md font-bold text-primary">12:00 - 13:00</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Lunch Roster</div>
</div>
<div className="col-span-5 p-2 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-between px-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">restaurant</span>
<span className="font-label-md text-label-md font-bold text-primary">Nutritious Hot Lunch &amp; Dining Hall Manners</span>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold">Dining Hall Hall 2</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Supervised Quiet Rest</span>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-2 items-stretch pt-1">
<div className="pl-2 flex flex-col justify-center">
<div className="font-label-md text-label-md font-bold text-primary">13:00 - 14:00</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Period 4 (60m)</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">ART</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Creative Arts</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Drawing &amp; Painting</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Atelier Wing</span>
<span className="font-semibold text-primary">Madam Joy</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary text-surface-container-lowest font-label-sm text-[10px] font-bold">ENG</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">English Phonics</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Vowel Blends &amp; Rhyme</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-[10px] font-bold">LIBRARY</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Library &amp; Reading</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Story Corner Hour</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Library Wing</span>
<span className="font-semibold text-primary">Librarian Esi</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary-container text-surface-container-lowest font-label-sm text-[10px] font-bold">COMPUTING</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Computing Lab</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Coding Basics &amp; Logic</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>ICT Lab B</span>
<span className="font-semibold text-primary">Mr. K. Mensah</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary text-surface-container-lowest font-label-sm text-[10px] font-bold">CLUBS</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Co-Curricular Clubs</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Music, Chess &amp; Debate</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Activity Center</span>
<span className="font-semibold text-primary">Staff Roster</span>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-2 items-stretch pt-1">
<div className="pl-2 flex flex-col justify-center">
<div className="font-label-md text-label-md font-bold text-primary">14:00 - 15:00</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Period 5 (60m)</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-[10px] font-bold">GH LANG</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Ghanaian Language</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Oral Folk Tales (Ananse)</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Madam Naa</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-tertiary font-label-sm text-[10px] font-bold">P.E.</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Physical Education</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Team Coordination</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Playground A</span>
<span className="font-semibold text-primary">Coach Sam</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[10px] font-bold">RME</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">R.M.E. (Moral Ed.)</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Care For Environment</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-[10px] font-bold">LIBRARY</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Library Hour</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Individual Book Review</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Library Wing</span>
<span className="font-semibold text-primary">Librarian Esi</span>
</div>
</div>

<div className="p-2.5 rounded-lg bg-surface-container-low hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-start justify-between gap-1">
<span className="px-1.5 py-0.5 rounded bg-primary text-surface-container-lowest font-label-sm text-[10px] font-bold">REVIEW</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-grab">drag_indicator</span>
</div>
<div className="my-1.5">
<div className="font-label-md text-label-md font-bold text-primary leading-tight">Weekly Reflection</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Clean-up &amp; Praise Board</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1 border-t border-surface-container-highest">
<span>Room B-04</span>
<span className="font-semibold text-primary">Mrs. Abbey</span>
</div>
</div>
</div>

<div className="grid grid-cols-6 gap-2 items-center pt-2">
<div className="pl-2">
<div className="font-label-md text-label-md font-bold text-secondary">15:00 - 15:30</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Pick-Up Time</div>
</div>
<div className="col-span-5 p-2 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-between px-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">shield_person</span>
<span className="font-label-md text-label-md font-bold text-primary">Afternoon Dismissal &amp; Parent Pick-Up</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">School Gate • Teacher on Duty</span>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[22px]">approval</span>
</div>
<div>
<div className="font-label-lg text-label-lg text-primary font-bold">Timetable Ready to Send</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Timetable meets official school lesson requirements.</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-space-md py-2 rounded-lg text-on-surface-variant hover:text-secondary font-label-md text-label-md font-bold transition-colors" id="discardChangesBtn">
            Cancel Changes
          </button>
<button className="px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-bold transition-colors flex items-center gap-1.5 shadow-sm" id="submitHeadmistressSecondaryBtn">
<span className="material-symbols-outlined text-[16px]">task_alt</span>
            Send to Headmistress
          </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 hidden flex items-center justify-center p-space-md" id="pupilPreviewModal">
<div className="bg-surface-container-lowest max-w-2xl w-full rounded-2xl shadow-2xl p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between border-b border-surface-container pb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[24px]">child_care</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Parent App Preview</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">What parents see on their phone</span>
</div>
</div>
<button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" id="closePupilModalBtn">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase font-bold text-primary">Today: Wednesday, Oct 18</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-[10px] font-bold">Term 1 Week 6</span>
</div>
<div className="space-y-2">
<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-primary font-bold">08:30</span>
<div>
<div className="font-label-md text-label-md text-primary font-semibold">English Grammar</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Bring Sunflower Phonics Workbook 2</div>
</div>
</div>
<span className="material-symbols-outlined text-primary text-[20px]">menu_book</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-primary font-bold">09:30</span>
<div>
<div className="font-label-md text-label-md text-primary font-semibold">Mathematics</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Measuring rulers &amp; color pencils</div>
</div>
</div>
<span className="material-symbols-outlined text-primary text-[20px]">calculate</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="font-label-md text-label-md text-primary font-bold">11:00</span>
<div>
<div className="font-label-md text-label-md text-primary font-semibold">RME (Moral Education)</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Respect in the family discussion</div>
</div>
</div>
<span className="material-symbols-outlined text-primary text-[20px]">auto_stories</span>
</div>
</div>
</div>
<div className="flex justify-end gap-2">
<button className="px-space-md py-2 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md font-bold" id="closePupilModalBtn2">Close Preview</button>
</div>
</div>
</div>


</div>
    </>
  );
}
