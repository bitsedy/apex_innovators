"use client";

import React from "react";
import Link from "next/link";

// Teacher Dashboard
export default function StaffPage() {
  return (
    <>
<div className="flex flex-col w-full pb-space-xl">

<div className="w-full flex h-1.5 rounded-full overflow-hidden mb-space-md shadow-sm">
<div className="w-1/3 bg-sky-400"></div>
<div className="w-1/3 bg-secondary"></div>
<div className="w-1/3 bg-emerald-500"></div>
</div>

<div className="relative w-full rounded-2xl bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary p-space-lg md:p-space-xl shadow-xl overflow-hidden mb-space-lg">

<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-on-primary/5 blur-2xl pointer-events-none"></div>
<div className="absolute right-8 bottom-0 opacity-10 pointer-events-none hidden lg:block">
<span className="material-symbols-outlined text-[190px] leading-none text-on-primary">school</span>
</div>
    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
      <div className="flex flex-col gap-space-xs max-w-2xl">
        <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-on-primary/10 text-on-primary backdrop-blur-md w-fit text-label-sm font-label-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>ON CAMPUS • CLOCKED IN AT 07:22 AM</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-primary mt-1">
          Good morning, Mrs. Beatrice Abbey!
        </h1>
        <p className="font-body-md text-body-md text-surface-container-highest/90 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-1 font-semibold text-on-primary">
            <span className="material-symbols-outlined text-[18px] text-amber-300">local_florist</span> Basic 2 Sunflower
          </span>
          <span className="text-surface-container-highest/60">•</span>
          <span>28 Students</span>
          <span className="text-surface-container-highest/60">•</span>
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">meeting_room</span> Room B-04
          </span>
        </p>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center gap-space-sm w-full lg:w-auto">
        <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-xl bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"  type="button">
          <span className="material-symbols-outlined text-[20px]">fact_check</span>
          <span>Take Attendance</span>
        </button>
        <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-lg text-label-lg shadow-sm hover:shadow transition-all" type="button">
          <span className="material-symbols-outlined text-[20px] text-secondary">medical_services</span>
          <span>Report Health Issue</span>
        </button>
        <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-xl bg-on-primary/10 hover:bg-on-primary/20 text-on-primary backdrop-blur font-label-lg text-label-lg transition-all" type="button">
          <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
          <span>Weekly Report</span>
        </button>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">

    <div className="rounded-xl bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex items-start justify-between">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Today's Attendance</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Not Taken Yet</h2>
        </div>
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shadow-sm">
          <span className="material-symbols-outlined text-[22px]">timer</span>
        </div>
      </div>
      <div className="mt-space-md">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-label-sm text-label-sm font-bold">
          <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
          Starts in 15 mins
        </div>
        <div className="mt-3 flex items-center justify-between text-body-sm text-body-sm text-on-surface-variant">
          <span>Due by 08:15 AM</span>
          <span className="font-semibold text-secondary">0 of 28 marked</span>
        </div>
      </div>
    </div>

    <div className="rounded-xl bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Approvals</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">2 Waiting</h2>
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-[22px]">approval</span>
        </div>
      </div>
      <div className="mt-space-md">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-100 text-sky-900 font-label-sm text-label-sm font-bold w-fit">
          <span className="material-symbols-outlined text-[14px]">history_edu</span>
          With Headmistress Dr. Appiah
        </div>
        <div className="mt-3 flex items-center justify-between text-body-sm text-body-sm text-on-surface-variant">
          <span>1 Lesson Plan, 1 Health Note</span>
          <span className="font-semibold text-primary">In Review</span>
        </div>
      </div>
    </div>

    <div className="rounded-xl bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Class Marks</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">85% Entered</h2>
        </div>
        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-[22px]">auto_stories</span>
        </div>
      </div>
      <div className="mt-space-md">
        <div className="w-full bg-surface-container-high rounded-full h-2 mb-2 overflow-hidden">
          <div className="bg-emerald-600 h-2 rounded-full transition-all duration-500" style={{"width": "85%"}}></div>
        </div>
        <div className="flex items-center justify-between text-body-sm text-body-sm text-on-surface-variant">
          <span>Mid-Term: English &amp; Math</span>
          <span className="font-semibold text-emerald-700">24 of 28 marked</span>
        </div>
      </div>
    </div>

    <div className="rounded-xl bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Messages</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">1 New Message</h2>
        </div>
        <div className="w-10 h-10 rounded-xl bg-red-100 text-secondary flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-[22px]">mark_chat_unread</span>
        </div>
      </div>
      <div className="mt-space-md">
        <div className="flex items-center gap-2 p-1.5 rounded-lg bg-surface-container-low text-on-surface">
          <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[10px]">NM</div>
          <div className="truncate text-body-sm text-body-sm">
            <span className="font-bold text-on-surface">Dr. Nana Mensah:</span>
            <span className="text-on-surface-variant text-[13px]">Re: Kofi's inhaler</span>
          </div>
        </div>
      </div>
    </div>
  </div>

<div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm mb-space-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<h2 className="font-headline-md text-headline-md text-primary">Today's Schedule &amp; Duties</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sunflower Class (Basic 2) • Tuesday</p>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
<span>Time: <span className="font-bold text-primary" id="current-clock">07:45 GMT</span></span>
</div>
</div>

<div className="overflow-x-auto pb-space-sm -mx-space-sm px-space-sm">
<div className="flex gap-space-md min-w-[1100px]">

<div className="flex-1 rounded-xl bg-amber-50 p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
<div>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-amber-800">08:00 – 08:30</span>
<span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-label-sm text-[11px] font-bold">NEXT UP</span>
</div>
<h3 className="font-headline-sm text-[17px] text-amber-950 font-bold leading-snug">Devotion &amp; Attendance</h3>
<p className="font-body-sm text-body-sm text-amber-900 mt-1">Courtyard &amp; Room B-04</p>
</div>
<div className="mt-4 pt-2 flex items-center justify-between text-body-sm text-amber-900 font-semibold">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">groups</span> 28 Students</span>
<span className="text-amber-800 text-[12px]">Assembly &amp; Hymns</span>
</div>
</div>

<div className="flex-1 rounded-xl bg-surface-container p-space-md flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">08:30 – 10:00</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[11px]">Period 2</span>
</div>
<h3 className="font-headline-sm text-[17px] text-on-surface font-bold leading-snug">Mathematics</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Fractions &amp; Basic 2D Shapes</p>
</div>
<div className="mt-4 pt-2 flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">room</span> Room B-04</span>
<span className="font-medium text-primary">Textbook Bk 2</span>
</div>
</div>

<div className="flex-1 rounded-xl bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-secondary">10:00 – 10:30</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">ON DUTY</span>
</div>
<h3 className="font-headline-sm text-[17px] text-on-surface font-bold leading-snug">Break Time &amp; Playground Duty</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Supervise students outside</p>
</div>
<div className="mt-4 pt-2 flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">sports_soccer</span> Play Zone A</span>
<span className="text-secondary font-medium">Safety Duty</span>
</div>
</div>

<div className="flex-1 rounded-xl bg-surface-container p-space-md flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">10:30 – 12:00</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[11px]">Period 3</span>
</div>
<h3 className="font-headline-sm text-[17px] text-on-surface font-bold leading-snug">Integrated Science</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Plant Life &amp; Growing Seeds</p>
</div>
<div className="mt-4 pt-2 flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">biotech</span> Science Pod 1</span>
<span className="font-medium text-tertiary-container">Lab Kit Ready</span>
</div>
</div>

<div className="flex-1 rounded-xl bg-surface-container-low p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-on-surface-variant">12:00 – 13:00</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[11px]">Lunch</span>
</div>
<h3 className="font-headline-sm text-[17px] text-on-surface font-bold leading-snug">Lunch Break</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dining Hall 2</p>
</div>
<div className="mt-4 pt-2 flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">restaurant</span> Hall 2</span>
<span>Table 4</span>
</div>
</div>

<div className="flex-1 rounded-xl bg-surface-container p-space-md flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">13:00 – 14:30</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[11px]">Period 4</span>
</div>
<h3 className="font-headline-sm text-[17px] text-on-surface font-bold leading-snug">Computing / ICT</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Typing &amp; Mouse Skills</p>
</div>
<div className="mt-4 pt-2 flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">computer</span> ICT Lab 1</span>
<span className="text-on-surface-variant">w/ Miss Sarah</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">

<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-red-100 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">notifications_active</span>
</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Things to Do</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tasks for Mrs. Beatrice Abbey today</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">3 Tasks</span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="carepoint-hover-card p-space-md rounded-xl bg-amber-50/60 hover:bg-amber-50 transition-colors flex items-start justify-between gap-space-sm group">
<div className="flex items-start gap-space-sm flex-1">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">how_to_reg</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Morning Attendance Needed</span>
<span className="px-2 py-0.2 rounded bg-amber-200 text-amber-900 text-[10px] font-bold uppercase tracking-wider">Do First</span>
<span className="carepoint-hover-hint">Hover for details &bull;</span>
</div>
<p className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant">
                  Attendance closes at 08:30 AM. 28 students waiting.
                </p>
</div>
</div>
<button className="shrink-0 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm font-bold transition-all shadow-sm"  type="button">
              Take Attendance
            </button>
</div>

<div className="carepoint-hover-card p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-start justify-between gap-space-sm group">
<div className="flex items-start gap-space-sm flex-1">
<div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-bold">3 English Homework Marks Missing</span>
<span className="px-2 py-0.2 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Due 12:00</span>
<span className="carepoint-hover-hint">Hover for details &bull;</span>
</div>
<p className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant">
                  English pronoun marks missing for: Aaron Tetteh, Efua Blankson, and David Osei.
                </p>
</div>
</div>
<button className="shrink-0 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-highest font-label-sm text-label-sm font-bold transition-colors" type="button">
              Enter Marks
            </button>
</div>

<div className="carepoint-hover-card p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-start justify-between gap-space-sm group">
<div className="flex items-start gap-space-sm flex-1">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">description</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Week 7 Lesson Plan Draft</span>
<span className="px-2 py-0.2 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Due Friday</span>
<span className="carepoint-hover-hint">Hover for details &bull;</span>
</div>
<p className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant">
                  Theme: "Our Environment and Living Things". You are almost halfway done.
                </p>
</div>
</div>
<button className="shrink-0 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-highest font-label-sm text-label-sm font-bold transition-colors" type="button">
              Continue Plan
            </button>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">badge</span>
</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Student Health Notes</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sunflower Class students with allergies or care notes</p>
</div>
</div>
<a className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-1" href="#">
            View All 28 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<div className="carepoint-hover-card p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between cursor-pointer transition-all">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold">KM</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface leading-tight">Kofi Mensah</div>
<div className="carepoint-hover-detail font-body-sm text-[12px] text-secondary font-semibold">Mild Asthma • Inhaler at school clinic</div>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]">medical_information</span>
</div>
<div className="carepoint-hover-card p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between cursor-pointer transition-all">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold">AA</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface leading-tight">Abena Asare</div>
<div className="carepoint-hover-detail font-body-sm text-[12px] text-amber-800 font-semibold">Peanut Allergy • Do not give peanuts</div>
</div>
</div>
<span className="material-symbols-outlined text-amber-700 text-[20px]">lunch_dining</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col h-full justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">verified</span>
</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Requests &amp; Approvals</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Updates from Headmistress Dr. Appiah</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">Connected</span>
</div>

<div className="flex flex-col gap-space-md relative pl-4 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-highest">

<div className="relative flex items-start gap-space-sm">
<span className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-surface-container-lowest"></span>
<div className="carepoint-hover-card flex-1 bg-surface-container-low p-space-md rounded-xl cursor-pointer transition-all">
<div className="flex items-center justify-between mb-1">
<span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-[10px] font-bold">APPROVED</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Yesterday, 16:20</span>
</div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold">Mark Change: English Mid-Term</h4>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Approved by Headmistress Dr. Elizabeth Appiah. Class Mark Sheet updated.
                </p>
<div className="mt-2 text-[12px] font-semibold text-emerald-700 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Ref: APP-2026-08912
                </div>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-sm">
<span className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-surface-container-lowest"></span>
<div className="carepoint-hover-card flex-1 bg-surface-container-low p-space-md rounded-xl cursor-pointer transition-all">
<div className="flex items-center justify-between mb-1">
<span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-label-sm text-[10px] font-bold">IN REVIEW</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Today, 06:45</span>
</div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold">Health Note: Kofi Mensah</h4>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Sent to school nurse to excuse Kofi from sports.
                </p>
<div className="mt-2 text-[12px] font-semibold text-sky-700 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">pending</span>
                  With Nurse Florence &amp; Dr. Appiah
                </div>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-sm">
<span className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-amber-400 ring-4 ring-surface-container-lowest"></span>
<div className="carepoint-hover-card flex-1 bg-surface-container-low p-space-md rounded-xl cursor-pointer transition-all">
<div className="flex items-center justify-between mb-1">
<span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-label-sm text-[10px] font-bold">QUEUED FOR SIGN-OFF</span>
<span className="font-label-sm text-[11px] text-on-surface-variant">Term 1 Wk 6</span>
</div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold">Weekly Lesson Plan</h4>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Hands-on Science &amp; Art for Basic 2.
                </p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm">
<button className="w-full py-2.5 px-space-md rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>See All Approvals</span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-8 rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">event_note</span>
</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Important School Dates</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Upcoming events for this term</p>
</div>
</div>
<button className="text-primary font-label-sm text-label-sm font-bold hover:underline" type="button">
          View All Dates
        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="carepoint-hover-card p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between cursor-pointer transition-all">
<div>
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold">OCT 20</span>
<span className="material-symbols-outlined text-[18px] text-secondary">groups</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Parent-Teacher Meeting</h3>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Talk with parents about student progress in Room B-04.
            </p>
<div className="mt-4 pt-2 text-[12px] font-semibold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span> 09:00 AM - 03:30 PM
          </div>
</div>
</div>
</div>

<div className="carepoint-hover-card p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between cursor-pointer transition-all">
<div>
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold">OCT 25</span>
<span className="material-symbols-outlined text-[18px] text-emerald-600">science</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">School Science Fair</h3>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Primary class projects on seeds and clean water filters.
            </p>
<div className="mt-4 pt-2 text-[12px] font-semibold text-emerald-700 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">location_on</span> Main School Hall
          </div>
</div>
</div>
</div>

<div className="carepoint-hover-card p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between cursor-pointer transition-all">
<div>
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded bg-red-100 text-secondary font-label-sm text-label-sm font-bold">NOV 05</span>
<span className="material-symbols-outlined text-[18px] text-secondary">lock_clock</span>
</div>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold">Final Marks Deadline</h3>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Last day to enter all class test and project marks.
            </p>
<div className="mt-4 pt-2 text-[12px] font-semibold text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">warning</span> Marks System Closes
          </div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-sm mb-space-md">
<span className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">folder_special</span>
</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Quick Classroom Links</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Guides, clinic phone &amp; printer</p>
</div>
</div>
<div className="flex flex-col gap-2">
<a className="carepoint-hover-card p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-between transition-colors cursor-pointer" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-primary">menu_book</span>
<div className="text-left">
<div className="font-label-md text-label-md text-on-surface font-bold">Basic 2 Teaching Guides</div>
<div className="carepoint-hover-detail text-on-surface-variant text-[11px]">Curriculum and lesson guides (PDF)</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">download</span>
</a>
<a className="carepoint-hover-card p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-between transition-colors cursor-pointer" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-primary">contact_phone</span>
<div className="text-left">
<div className="font-label-md text-label-md text-on-surface font-bold">School Clinic Phone</div>
<div className="carepoint-hover-detail text-on-surface-variant text-[11px]">Nurse Florence Adjei (Ext. 204)</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-emerald-600">call</span>
</a>
<a className="carepoint-hover-card p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-between transition-colors cursor-pointer" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[20px] text-primary">print</span>
<div className="text-left">
<div className="font-label-md text-label-md text-on-surface font-bold">Print Worksheets</div>
<div className="carepoint-hover-detail text-on-surface-variant text-[11px]">Printer in Block B is ready</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">arrow_forward</span>
</a>
</div>
</div>
<div className="mt-space-md p-space-sm rounded-xl bg-primary text-on-primary flex items-center justify-between">
<div>
<div className="font-label-sm text-label-sm font-bold">Need Help with Computers or Repairs?</div>
<div className="text-[11px] text-on-primary-container">Call School Helpdesk (Ext. 4100)</div>
</div>
<button className="px-2.5 py-1 rounded bg-on-primary text-primary font-label-sm text-label-sm font-bold shadow-sm" type="button">
          Call Now
        </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm hidden items-center justify-center p-space-md" id="roll-call-modal">
<div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full p-space-lg shadow-2xl overflow-hidden flex flex-col max-h-[921px]">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[24px]">fact_check</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary">Take Morning Attendance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sunflower Class (Basic 2) • Room B-04</p>
</div>
</div>
<button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant"  type="button">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
</div>
<div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2 my-2">
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-[12px]">1</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Kofi Mensah</div>
<div className="text-[12px] text-on-surface-variant">ID: CP-B2-004 • Transport: Bus Route 3</div>
</div>
</div>
<div className="flex gap-1.5">
<button className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-label-sm text-label-sm font-bold">Present</button>
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Absent</button>
</div>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-[12px]">2</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Abena Asare</div>
<div className="text-[12px] text-on-surface-variant">ID: CP-B2-012 • Transport: Parent Dropoff</div>
</div>
</div>
<div className="flex gap-1.5">
<button className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-label-sm text-label-sm font-bold">Present</button>
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Absent</button>
</div>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-[12px]">3</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">David Osei</div>
<div className="text-[12px] text-on-surface-variant">ID: CP-B2-019 • Transport: Bus Route 1</div>
</div>
</div>
<div className="flex gap-1.5">
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Present</button>
<button className="px-3 py-1 rounded-lg bg-red-600 text-white font-label-sm text-label-sm font-bold">Absent</button>
</div>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-[12px]">4</div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Efua Blankson</div>
<div className="text-[12px] text-on-surface-variant">ID: CP-B2-023 • Transport: Bus Route 2</div>
</div>
</div>
<div className="flex gap-1.5">
<button className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-label-sm text-label-sm font-bold">Present</button>
<button className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Absent</button>
</div>
</div>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="text-body-sm text-body-sm text-on-surface-variant">Must finish before 08:30 AM</span>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg"  type="button">Cancel</button>
<button className="px-5 py-2 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md"  type="button">Save Attendance</button>
</div>
</div>
</div>
</div>

</div>
    </>
  );
}
