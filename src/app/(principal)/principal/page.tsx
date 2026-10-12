"use client";

import React from "react";
import Link from "next/link";

// Principal Executive Approval Inbox
export default function PrincipalPage() {
  return (
    <>
<div className="flex flex-col w-full">

<div className="mb-space-lg rounded-xl bg-error text-on-error p-space-md shadow-md flex items-center justify-between relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-on-error/10 pointer-events-none"></div>
<div className="flex items-center gap-space-md z-10">
<div className="w-12 h-12 rounded-xl bg-on-error/20 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[28px] animate-bounce">priority_high</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider px-2 py-0.5 rounded-full bg-on-error text-error font-bold">Mandatory Dismissal Cut-Off</span>
<span className="font-label-sm text-label-sm opacity-80">Sync ID: #SAF-ACC-2026-08</span>
</div>
<p className="font-headline-sm text-headline-sm tracking-tight mt-0.5">
          Attention Headmistress: 2 High-Priority Safeguarding Escalations require immediate executive action before 16:00 GMT dismissal.
        </p>
</div>
</div>
<div className="flex items-center gap-space-sm z-10 shrink-0">
<button className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-all flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-error">gavel</span>
        Execute Fast-Clinic Check
      </button>
</div>
</div>

<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-1 max-w-3xl">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">Executive Operations Desk • Desk Ref: HA-EXEC-01</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">Principal Executive Inbox &amp; Priority Dispatch</h1>
<p className="font-body-md text-body-md text-on-surface-variant">
        Escalated decisions, statutory welfare advisories, and administrative sign-offs requiring Executive Authority.
      </p>
</div>

<div className="flex items-center gap-3">
<div className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">timer</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Clinic Check SLA Target</span>
<span className="font-label-lg text-label-lg text-primary font-bold">14m Avg Response</span>
</div>
</div>
<div className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">vpn_key</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Digital Signature Token</span>
<span className="font-label-lg text-label-lg text-on-tertiary-fixed font-bold">Valid • FIPS-140 Level 3</span>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-space-sm mb-space-lg scrollbar-none" id="inbox-filters">
<button className="filter-chip px-4 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm flex items-center gap-2 bg-primary text-on-primary font-bold" data-filter="all">
<span>All Urgent</span>
<span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary">7</span>
</button>
<button className="filter-chip px-4 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-semibold" data-filter="safeguarding">
<span>Custody &amp; Safeguarding</span>
<span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-error-container text-on-error-container">2</span>
</button>
<button className="filter-chip px-4 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-semibold" data-filter="faculty">
<span>Faculty Disciplinary &amp; Leaves</span>
<span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-container-high text-on-surface">2</span>
</button>
<button className="filter-chip px-4 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-semibold" data-filter="budget">
<span>Budget &amp; Procurement</span>
<span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-container-high text-on-surface">2</span>
</button>
<button className="filter-chip px-4 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-semibold" data-filter="nasia">
<span>Statutory NaSIA Filings</span>
<span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-container-high text-on-surface">1</span>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-space-md">

<article className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md relative overflow-hidden transition-all hover:shadow-md" data-category="safeguarding">

<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-secondary-container to-primary"></div>
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pt-2">
<div className="flex items-start gap-3">
<div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">shield_with_heart</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary text-on-secondary font-bold tracking-wider uppercase">CRITICAL PRIORITY</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant">Gate Turnstile A</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">14:18 GMT (12 mins ago)</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary mt-1 font-bold">
                Emergency Custody Restriction Notice — Student #24-089 (Kofi Mensah)
              </h2>
</div>
</div>
<span className="w-fit px-3 py-1 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-semibold">
            Action Cut-Off: 15:30 GMT
          </span>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row gap-space-md justify-between items-start md:items-center">
<div className="flex items-center gap-3">
<img className="w-12 h-12 rounded-full object-cover shadow-sm shrink-0" data-alt="Official portrait photograph of a young Ghanaian primary school student in Carepoint school uniform, clean neutral academic backdrop, soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVbEMNBDW_oXKz_3ZNBc6k-NMYKiQ7xhv1x8TdAiabfjN8fCRCwBMcIsGNHtQ41COlTlHxJRSS520m25QGAktG13NXCgghyqTCJTukmOTuJEBuHTiD2LPbF-n1XnYaD44iTAO7pZ28kjXqbs4uqcpPd8sME8vO3WsnlpYlAM5Z3tcki6I-Q9oYpHnHaWX-S3aW6KnANWiuQotiN5rPCJNHEFLbkOAHqMC7nhBajmMO0KUFChMZmLyqlw"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary">Child: Kofi Mensah • Primary 4 Gold</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Authorized Primary Caregiver: Mrs. Grace Mensah (Mother)</span>
</div>
</div>
<div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">badge</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Flagged Officer</span>
<span className="font-label-sm text-label-sm text-on-surface font-bold">Officer S. Tetteh (Gate A)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">verified_user</span>
<p className="font-body-md text-body-md text-on-surface">
<span className="font-bold text-primary">Security Desk Recommendation:</span> Uphold strict single-guardian pickup notice. Third-party claiming custodial privilege currently held at Reception Annex pending Principal action. Legal court order #GAR/FCT/881 remains in force.
            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-2">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Accra High Court Family Division Notification Attached</span>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="px-4 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg transition-colors">
              Hold at Gate Annex
            </button>
<a className="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-container transition-all font-label-lg text-label-lg shadow-sm flex items-center justify-center gap-2" data-path="principal-decision-studio" href="#">
<span>Open Executive Decision Studio</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md transition-all hover:shadow-md" data-category="faculty">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex items-start gap-3">
<div className="w-12 h-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">calendar_clock</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-primary-container text-on-primary font-bold uppercase tracking-wider">High Priority</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant">Academic Operations</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">13:40 GMT</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary mt-1 font-bold">
                Curriculum Pacing &amp; Timetable Amendment Request
              </h2>
</div>
</div>
<span className="px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-semibold">
            NaSIA ICT Audit Requirement
          </span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between gap-space-md">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait of an experienced Ghanaian female senior academic educator wearing traditional print over corporate attire, smiling warmly in a school library, high clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-BhU10pW2txoOMhWGECXoyKg2K96YOUypObgoIN6vkxMrC0rIkS1fIswHaPs6jsR_XZSneFe5Da_RFDdeF4LAcUnBin5mabZ41swGI-Uj06TmWajN0JMl3bQSW8C0E9kYzjvVq-fhw2Hj_6hBr6vCJL0_w4r6OfBEkgq3d4WOgVXf7IyWfFIUpZJNB_q9dkKDQpO5ruidU5ib6Qdbj_-FV2Zj15ewkor_ZjZ8ghfSLnwnam6VGrPOCA"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary">Department Lead: Mrs. Beatrice Abbey</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Basic 2 Sunflower &amp; JHS 1 Computing Lab Contention</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-on-surface-variant">
<span className="font-label-sm text-label-sm">48 Workstations • Period 5 &amp; 6</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface">
<span className="font-bold text-primary">Recommendation:</span> Approve revised split period distribution allocating Tuesday morning blocks to JHS 1 Robotics project and shifting Basic 2 Coding Literacy to Thursday block. Maintains statutory 120-minute weekly digital requirements.
        </p>

<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">Projected Lab Capacity Optimization</span>
<span className="font-label-sm text-label-sm text-primary font-bold">+18% Utilization</span>
</div>
<svg className="w-full h-8 text-primary" fill="none" viewBox="0 0 600 32">
<rect className="fill-primary-container" height="16" rx="4" width="160" x="0" y="8"></rect>
<text className="fill-on-primary text-[10px] font-bold" x="10" y="20">JHS 1 (08:30-10:00)</text>
<rect className="fill-surface-variant" height="16" rx="4" width="80" x="170" y="8"></rect>
<text className="fill-on-surface-variant text-[10px]" x="180" y="20">Sanitize</text>
<rect className="fill-secondary-container" height="16" rx="4" width="180" x="260" y="8"></rect>
<text className="fill-on-secondary text-[10px] font-bold" x="270" y="20">Basic 2 (11:00-12:30)</text>
<rect className="fill-surface-container-high" height="16" rx="4" width="150" x="450" y="8"></rect>
<text className="fill-on-surface-variant text-[10px]" x="460" y="20">Open Study Block</text>
</svg>
</div>
<div className="flex items-center justify-end gap-space-sm pt-2">
<button className="px-4 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg transition-colors">
            Request Modification
          </button>
<button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">draw</span>
<span>Review &amp; Sign</span>
</button>
</div>
</article>

<article className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md transition-all hover:shadow-md" data-category="faculty">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex items-start gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">person_off</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface font-bold uppercase tracking-wider">Normal Priority</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Human Resources</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">11:15 GMT</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary mt-1 font-bold">
                Faculty Compassionate Leave Request — Mr. David Mensah
              </h2>
</div>
</div>
<span className="px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-low text-primary font-semibold">
            Coverage Arranged
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface">
          JHS Integrated Science Lead Mr. David Mensah requests 3 business days compassionate absence (Bereavement). Peer relief confirmed: <span className="font-bold text-primary">Madam Joy (Biology Specialist)</span> will conduct double periods with prepared GES curriculum packages.
        </p>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Staff Balance: 11 / 14 statutory days remaining</span>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg transition-colors">
              Refer to Vice-Principal
            </button>
<button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span>Authorize</span>
</button>
</div>
</div>
</article>

<article className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md transition-all hover:shadow-md" data-category="nasia">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex items-start gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">calculate</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface font-bold uppercase tracking-wider">Statutory Sign-Off</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed">GES Compliant</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">09:50 GMT</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-primary mt-1 font-bold">
                Term 1 Continuous Assessment Terminal Weighting Sign-Off
              </h2>
</div>
</div>
<span className="px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-semibold">
            Registry Desk
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface">
          Academic Registrar submission: Formal ratification of the 60/40 SBA continuous assessment to terminal examination weighting matrix across Creche, Basic 1–6, and JHS 1–3 divisions for official upload to NaSIA SIS portal.
        </p>

<div className="grid grid-cols-3 gap-2 p-space-md rounded-xl bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Classwork &amp; Projects</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">30%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Mid-Term Assessments</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">30%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Terminal Examination</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">40%</span>
</div>
</div>
<div className="flex items-center justify-between pt-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Verified by Academic Board Secretary</span>
<button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">table_chart</span>
<span>Review Matrix</span>
</button>
</div>
</article>
</div>

<aside className="lg:col-span-4 flex flex-col gap-space-lg">

<div className="p-space-lg rounded-xl bg-primary text-on-primary shadow-lg flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-on-primary/5 pointer-events-none"></div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-on-primary text-[24px]">verified_user</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold">Executive Authority Vault</span>
<span className="font-label-sm text-label-sm opacity-80">Principal Dr. Elizabeth Appiah</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-primary-container flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-primary opacity-80">Digital Seal Status</span>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold">Active &amp; Encrypted</span>
</div>
<div className="flex items-center gap-2 text-on-primary">
<span className="material-symbols-outlined text-[18px]">key</span>
<span className="font-body-sm text-body-sm font-mono tracking-tight">RSA-4096 • SHA-256 #884A-91CC</span>
</div>
</div>
<p className="font-body-sm text-body-sm opacity-90 leading-relaxed">
          All formal ratifications, custody interventions, and NaSIA disclosures issued from this console carry legally binding executive authority under Education Act 778.
        </p>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Principal Priority Actions</h3>
<span className="material-symbols-outlined text-on-surface-variant">bolt</span>
</div>
<div className="flex flex-col gap-space-sm">

<button className="w-full text-left p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between group shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-all">
<span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary group-hover:text-primary font-bold">Direct Line: NaSIA Inspector</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Accra East Regional Directorate</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">call</span>
</button>

<button className="w-full text-left p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between group shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-secondary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-all">
<span className="material-symbols-outlined text-[20px]">cell_tower</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary font-bold">Broadcast Staff Notice</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">SMS &amp; Push to All 68 Faculty</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors text-[20px]">send</span>
</button>

<button className="w-full text-left p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between group shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-all">
<span className="material-symbols-outlined text-[20px]">camera_outdoor</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-primary font-bold">Security Turnstile Live Log</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Gates A, B &amp; C Realtime Sync</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">open_in_new</span>
</button>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">Campus Gate Pulse</span>
</div>
<span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold">Dismissal Prep</span>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant">Registered Students on Campus</span>
<span className="font-label-lg text-label-lg text-primary font-bold">742 / 760</span>
</div>
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant">Caregivers in Waiting Quadrangle</span>
<span className="font-label-lg text-label-lg text-primary font-bold">48 Logged</span>
</div>
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant">Security Patrol Posture</span>
<span className="font-label-lg text-label-lg text-on-tertiary-container font-bold">Level 1 Vigilance</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm">Next Statutory Sync: 15:45 GMT</span>
<span className="material-symbols-outlined text-[18px]">sync</span>
</div>
</div>
</aside>
</div>
</div>

    </>
  );
}
