"use client";

import React from "react";
import Link from "next/link";

// Staff Health
export default function HealthPage() {
  return (
    <>
<div className="flex flex-col w-full">
<div className="relative w-full overflow-hidden rounded-2xl bg-surface-container-low shadow-sm mb-space-lg">
<div className="h-1.5 w-full flex">
<div className="h-full w-1/3 bg-sky-400"></div>
<div className="h-full w-1/3 bg-secondary"></div>
<div className="h-full w-1/3 bg-tertiary-fixed-dim"></div>
</div>
<div className="p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-gradient-to-r from-surface-container-lowest via-surface-container-low to-surface-container-high">
<div className="space-y-1 max-w-3xl">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm uppercase tracking-wider font-bold">Student Health &amp; Safety</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">School Clinic</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Send Student to School Clinic</h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Send a student quickly to Nurse Faustina Asante at the school clinic. If the issue is serious, the school will text the parents right away.
        </p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-center shrink-0">
<div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm text-center min-w-[110px]">
<div className="font-label-sm text-label-sm text-outline uppercase font-semibold">Clinic Status</div>
<div className="inline-flex items-center gap-1.5 mt-0.5 text-tertiary-container font-headline-sm text-headline-sm">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
            Open
          </div>
</div>
<div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm text-center min-w-[110px]">
<div className="font-label-sm text-label-sm text-outline uppercase font-semibold">Beds Free</div>
<div className="text-primary font-headline-sm text-headline-sm">3 Free</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pb-space-xl">
<div className="lg:col-span-7 flex flex-col gap-space-md">
<form className="flex flex-col gap-space-md" id="incidentForm">
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center">01</span>
<label className="font-headline-sm text-headline-sm text-primary" htmlFor="studentSearch">Select Student</label>
</div>
<span className="text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">Required</span>
</div>
<div className="relative">
<div className="flex items-center gap-space-sm bg-surface-container-low p-2 rounded-xl">
<span className="material-symbols-outlined text-outline ml-2">person_search</span>
<input className="w-full bg-transparent text-on-surface font-body-md text-body-md focus:outline-none placeholder:text-outline" id="studentSearch" placeholder="Type student name or ID..." type="text" defaultValue="Kofi Mensah"/>
<button className="px-space-sm py-1 bg-surface-container-highest rounded-lg text-primary font-label-sm text-label-sm font-semibold hover:bg-surface-container transition-colors" type="button">
                Change
              </button>
</div>
<div className="mt-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-md">
<img className="w-12 h-12 rounded-xl object-cover shadow-sm" data-alt="Close-up portrait of a young Ghanaian boy student wearing Carepoint Community School white collared uniform with navy trim, looking politely at the camera with gentle classroom lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzHXKofyKd-GchiwXCWNHr2cMg2PUkpeB_B5b81jrDWiyWxSezPS_f0atyFkYDA2HSgvGndR5pyCjcOBDQDQOXb9kZLJ0SKRPR2qHTg-XzR5RNaAqefyESaJMdYKdYm_xcsNcyBOUqByk7QlTSwV8t3YKmAc0eUiLIZ5j-e_mehUAjeaJCWWcboWue2iRHsav3S0X-FUPK9_JYODWjAnnioqOiVKtHcItPDQq0GxCTx64a1HOybxTptg"/>
<div>
<div className="font-headline-sm text-headline-sm text-primary">Kofi Mensah</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Basic 2 Sunflower • ID #24-089</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded bg-amber-100 text-amber-800 font-label-sm text-label-sm font-bold">Known Allergies</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim" style={{"fontVariationSettings": "'FILL' 1"}}>check_circle</span>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center">02</span>
<span className="font-headline-sm text-headline-sm text-primary">When &amp; Where Did It Happen?</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="incidentTime">Time <span className="text-secondary">*</span></label>
<div className="flex items-center bg-surface-container-low px-space-md py-2.5 rounded-lg">
<span className="material-symbols-outlined text-outline text-[20px] mr-2">schedule</span>
<input className="bg-transparent w-full text-on-surface font-body-md text-body-md focus:outline-none" id="incidentTime" type="text" defaultValue="10:45 GMT (Break Time)"/>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-lg text-label-lg text-on-surface" htmlFor="incidentLocation">Location on Campus <span className="text-secondary">*</span></label>
<div className="flex items-center bg-surface-container-low px-space-md py-2.5 rounded-lg">
<span className="material-symbols-outlined text-outline text-[20px] mr-2">pin_drop</span>
<select className="bg-transparent w-full text-on-surface font-body-md text-body-md focus:outline-none cursor-pointer" id="incidentLocation">
<option>Junior Playground</option>
<option>Sunflower Basic 2 Classroom</option>
<option>Dining Hall</option>
<option>School Compound</option>
<option>Sports Field</option>
</select>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center">03</span>
<span className="font-headline-sm text-headline-sm text-primary">What Are the Symptoms?</span>
</div>
<span className="font-label-sm text-label-sm text-outline">Check all that apply</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
<label className="carepoint-hover-card flex items-center gap-3 p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="w-5 h-5 rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">High Fever</span>
<span className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Hot forehead or red face</span>
</div>
</label>
<label className="carepoint-hover-card flex items-center gap-3 p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="w-5 h-5 rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Asthma / Coughing</span>
<span className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Hard to breathe or tight chest</span>
</div>
</label>
<label className="carepoint-hover-card flex items-center gap-3 p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="w-5 h-5 rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Playground Cut or Scrape</span>
<span className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Small fall or scrape</span>
</div>
</label>
<label className="carepoint-hover-card flex items-center gap-3 p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="w-5 h-5 rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Severe Allergic Reaction</span>
<span className="carepoint-hover-detail font-label-sm text-label-sm text-secondary font-bold">Swollen face or lips (Emergency)</span>
</div>
</label>
<label className="carepoint-hover-card flex items-center gap-3 p-space-sm rounded-xl bg-primary-container text-on-primary cursor-pointer shadow-sm">
<input defaultChecked={true} className="w-5 h-5 rounded accent-secondary-container cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold">Eye Irritation / Dust Allergy</span>
<span className="carepoint-hover-detail font-label-sm text-label-sm text-on-primary-container">Watery or red eyes</span>
</div>
</label>
<label className="carepoint-hover-card flex items-center gap-3 p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="w-5 h-5 rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Stomach Ache or Vomiting</span>
<span className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Upset stomach or throwing up</span>
</div>
</label>
<label className="carepoint-hover-card flex items-center gap-3 p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors sm:col-span-2">
<input className="w-5 h-5 rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Sudden Dizziness or Very Weak</span>
<span className="carepoint-hover-detail font-label-sm text-label-sm text-on-surface-variant">Cannot walk straight or looks very dizzy</span>
</div>
</label>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center">04</span>
<span className="font-headline-sm text-headline-sm text-primary">How Urgent Is This?</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase">Urgency Level</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
<label className="carepoint-hover-card p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer flex flex-col justify-between gap-space-sm transition-all">
<div className="flex items-start justify-between">
<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-bold">Level 1</span>
<input className="w-4 h-4 text-primary cursor-pointer" name="severity" type="radio" value="low"/>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">Mild</div>
<p className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant mt-1">Small scrape, needs water, or short rest in the clinic.</p>
</div>
</label>
<label className="carepoint-hover-card p-space-md rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-sm relative overflow-hidden transition-all">
<div className="absolute top-0 left-0 right-0 h-1 bg-amber-400"></div>
<div className="flex items-start justify-between">
<span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-label-sm text-label-sm font-bold">Level 2</span>
<input defaultChecked={true} className="w-4 h-4 text-secondary-container cursor-pointer" name="severity" type="radio" value="moderate"/>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-primary leading-tight font-bold">Moderate</div>
<p className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant mt-1">Needs nurse care, eye drops, or bandage.</p>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span> Selected
              </span>
</label>
<label className="carepoint-hover-card p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer flex flex-col justify-between gap-space-sm transition-all">
<div className="flex items-start justify-between">
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">Level 3</span>
<input className="w-4 h-4 text-secondary cursor-pointer" name="severity" type="radio" value="high"/>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-secondary leading-tight font-bold">Emergency</div>
<p className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant mt-1">Needs immediate doctor care or emergency phone call.</p>
</div>
</label>
</div>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center">05</span>
<label className="font-headline-sm text-headline-sm text-primary" htmlFor="observations">What Happened &amp; What Did You Do?</label>
</div>
<span className="font-label-sm text-label-sm text-outline">Teacher's Note</span>
</div>
<textarea className="w-full bg-surface-container-low p-space-md rounded-xl text-on-surface font-body-md text-body-md focus:outline-none placeholder:text-outline" id="observations" placeholder="Explain what happened, what help you gave, and how the child looks..." rows={4} defaultValue="During play near the courtyard sandpit, the student said both eyes were hurting and red. The teacher took the student to the shade, washed hands with clean water, and told him not to rub his eyes. Eyes are still watery. Accompanied by classroom friend to the clinic." />
<div className="flex flex-wrap items-center justify-between gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">check</span>
              Seen with Assisting Teacher: <strong>Mr. E. Addo</strong>
</div>
<div className="text-outline font-label-sm text-label-sm">Word count: 52 words</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
<button className="w-full sm:w-auto px-space-lg py-3 rounded-xl bg-surface-container-highest text-primary font-label-lg text-label-lg hover:bg-surface-container transition-colors flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">save</span>
            Save Draft
          </button>
<button className="w-full sm:w-auto px-space-xl py-3 rounded-xl bg-secondary hover:bg-red-800 text-on-secondary font-label-lg text-label-lg shadow-md transition-all flex items-center justify-center gap-2 active:scale-95" id="submitBtn" type="button">
<span className="material-symbols-outlined text-[20px]">send</span>
            Send to Clinic &amp; Headmaster or Headteacher
          </button>
</div>
</form>
</div>
<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase font-bold text-outline tracking-wider">Student Health Info</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">Health File #882</span>
</div>
<div className="flex items-center gap-space-md">
<img className="w-20 h-20 rounded-2xl object-cover shadow-sm shrink-0" data-alt="Official school ID photograph of Kofi Mensah, cheerful 7-year-old schoolboy with short neat hair wearing Carepoint Community School polo with crest insignia, well-lit portrait against neutral background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZfuBnbOzYbJIu_AcBor2UPeL6mlWtZS6ndMxxec3jeQTiN8nKHFJKwTJrvLvblIaYxP2L09zZIHzXhT2VK13T3f57PYvUPv-_WjTW4a18k6mVI0VxFaAUFGNAaRDiXQpQd4xVLlwiKlKvayQTiSo21DgWtd_1Sg8ROpK92LQmimhZzw9_ue8nX6BXz8wl6cZytw5QpIvSKmkc2dD137oi234Df09eZBEyjVjM2FlbQ0v7vBMtwWjrw"/>
<div className="space-y-0.5">
<h2 className="font-headline-md text-headline-md text-primary">Kofi Mensah</h2>
<div className="font-body-sm text-body-sm text-on-surface-variant">Class: <strong>Basic 2 Sunflower</strong></div>
<div className="font-label-sm text-label-sm text-outline">Date of Birth: 14 March 2017 (Age 8)</div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-center pt-space-xs">
<div className="bg-surface-container-low p-2 rounded-xl">
<div className="font-label-sm text-label-sm text-outline">Blood Group</div>
<div className="font-headline-sm text-headline-sm text-secondary font-bold">O+</div>
</div>
<div className="bg-surface-container-low p-2 rounded-xl">
<div className="font-label-sm text-label-sm text-outline">G6PD Status</div>
<div className="font-headline-sm text-headline-sm text-primary font-bold">Normal</div>
</div>
<div className="bg-surface-container-low p-2 rounded-xl">
<div className="font-label-sm text-label-sm text-outline">Genotype</div>
<div className="font-headline-sm text-headline-sm text-primary font-bold">AA</div>
</div>
</div>
<div className="carepoint-hover-card p-space-sm rounded-xl bg-amber-50 flex items-start gap-2.5 cursor-pointer transition-all">
<span className="material-symbols-outlined text-amber-700 text-[20px] shrink-0 mt-0.5">warning</span>
<div className="text-amber-900 font-body-sm text-body-sm">
<strong>Dust &amp; Pollen Allergy</strong>
<div className="carepoint-hover-detail mt-1">Student reacts to dry air and chalk dust. Prescribed saline eye drops kept in Clinic Cabinet #B-04.</div>
          </div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase font-bold text-outline tracking-wider">Emergency Contacts</span>
<span className="font-label-sm text-label-sm text-primary font-bold">SMS Ready</span>
</div>
<div className="space-y-space-sm">
<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">
                DM
              </div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Dr. Nana Mensah</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Father • Main Contact</div>
</div>
</div>
<div className="text-right">
<a className="font-label-md text-label-md font-bold text-primary hover:underline flex items-center gap-1 justify-end" href="tel:+233241234567">
<span className="material-symbols-outlined text-[16px]">call</span> +233 24 123 4567
              </a>
<span className="font-label-sm text-label-sm text-tertiary-fixed-dim font-semibold">First Call</span>
</div>
</div>
<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-surface-container-highest text-primary font-label-md text-label-md flex items-center justify-center font-bold">
                GO
              </div>
<div>
<div className="font-label-lg text-label-lg text-on-surface">Mrs. Grace Owusu</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Aunt • Second Contact</div>
</div>
</div>
<div className="text-right">
<a className="font-label-md text-label-md font-bold text-primary hover:underline flex items-center gap-1 justify-end" href="tel:+233207654321">
<span className="material-symbols-outlined text-[16px]">call</span> +233 20 765 4321
              </a>
<span className="font-label-sm text-label-sm text-outline">Second Call</span>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase font-bold text-outline tracking-wider">Past Visits to Clinic (Term 1)</span>
<span className="font-label-sm text-label-sm text-outline">1 Visit Finished</span>
</div>
<div className="space-y-space-sm">
<div className="carepoint-hover-card p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm cursor-pointer transition-all">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[22px] shrink-0 mt-0.5">check_circle</span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Dust Allergy in Eyes</span>
<span className="font-label-sm text-label-sm text-outline">14 Oct 2026</span>
</div>
<div className="carepoint-hover-detail">
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Nurse Asante washed eyes with saline water. Student rested for 20 minutes in clinic, then returned to class feeling well.
              </p>
<div className="mt-1 font-label-sm text-label-sm text-primary font-semibold">Nurse: Faustina Asante, RN</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase font-bold text-outline tracking-wider">What Happens Next</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">Steps</span>
</div>
<div className="relative pl-6 space-y-space-md before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
<div className="carepoint-hover-card relative cursor-pointer">
<span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
<div className="font-label-lg text-label-lg text-primary font-bold">1. Teacher Sends Note</div>
<div className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant">Mrs. Beatrice Abbey submits the health note through the teacher portal.</div>
</div>
<div className="carepoint-hover-card relative cursor-pointer">
<span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest animate-pulse"></span>
<div className="font-label-lg text-label-lg text-secondary font-bold">2. School Clinic Gets Alert</div>
<div className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant">Nurse Faustina Asante gets the alert and prepares to treat the student.</div>
</div>
<div className="carepoint-hover-card relative cursor-pointer">
<span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-outline ring-4 ring-surface-container-lowest"></span>
<div className="font-label-lg text-label-lg text-on-surface font-semibold">3. Headmaster or Headteacher Is Notified</div>
<div className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant">The Headmaster or Headteacher sees this record on her office dashboard.</div>
</div>
<div className="carepoint-hover-card relative cursor-pointer">
<span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-outline ring-4 ring-surface-container-lowest"></span>
<div className="font-label-lg text-label-lg text-on-surface font-semibold">4. Parents Receive SMS</div>
<div className="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant">An automatic text message is sent to the parents.</div>
</div>
</div>
</div>
</div>
</div>
<div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none bg-primary text-on-primary px-space-lg py-space-md rounded-2xl shadow-xl flex items-center gap-space-md" id="toastNotification">
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-primary">Sent to School Clinic</div>
<div className="font-body-sm text-body-sm text-on-primary-container">Nurse Asante was alerted. Text message sent to student's father.</div>
</div>
</div>
</div>

    </>
  );
}
