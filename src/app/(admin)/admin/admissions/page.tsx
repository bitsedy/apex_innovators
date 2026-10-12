"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCarepointStore, Applicant } from "@/store/useCarepointStore";

export default function AdmissionsPage() {
  const { applicants, updateApplicantStatus } = useCarepointStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<"all" | "nursery" | "kindergarten" | "basic" | "jhs">("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "incomplete" | "screening" | "decision" | "approved">("all");
  
  // Active selected applicant ID
  const [activeApplicantId, setActiveApplicantId] = useState<string>("app-1");
  
  // Toast state
  const [toastMessage, setToastMessage] = useState<{ title: string; desc: string } | null>(null);

  const showToast = (title: string, desc: string) => {
    setToastMessage({ title, desc });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Enriched applicants combining store with demo items
  const combinedApplicants = [
    ...applicants,
    {
      id: "demo-asare",
      referenceNumber: "CP-APP-2026-084",
      wardName: "Kwadwo Asare",
      dob: "2018-03-12",
      classApplyingFor: "Basic 1",
      guardianName: "Nana Kwame Asare",
      guardianPhone: "024 123 4567",
      guardianEmail: "nk.asare@precisionengineering.gh",
      relationship: "Father",
      status: "Pending" as const,
      submittedAt: "2 hrs ago",
    },
    {
      id: "demo-darko",
      referenceNumber: "CP-APP-2026-091",
      wardName: "Akosua Darko",
      dob: "2020-07-22",
      classApplyingFor: "KG 2",
      guardianName: "Dr. Joyce Darko",
      guardianPhone: "020 456 7891",
      guardianEmail: "joyce.darko@ridgehospital.org",
      relationship: "Mother",
      status: "Pending" as const,
      submittedAt: "Yesterday",
    },
    {
      id: "demo-quartey",
      referenceNumber: "CP-APP-2026-072",
      wardName: "Emmanuel Quartey",
      dob: "2013-11-05",
      classApplyingFor: "JHS 1",
      guardianName: "Frank Quartey",
      guardianPhone: "027 890 1234",
      guardianEmail: "frank.quartey@fintech.gh",
      relationship: "Father",
      status: "Approved" as const,
      submittedAt: "3 days ago",
    },
  ];

  // De-duplicate by ID
  const uniqueApplicants = Array.from(new Map(combinedApplicants.map((item) => [item.id, item])).values());

  // Filter applicants
  const filteredApplicants = uniqueApplicants.filter((applicant) => {
    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = applicant.wardName.toLowerCase().includes(q);
      const matchToken = applicant.referenceNumber.toLowerCase().includes(q);
      const matchGuardian = applicant.guardianName.toLowerCase().includes(q);
      if (!matchName && !matchToken && !matchGuardian) return false;
    }

    // Tier filter
    if (selectedTier !== "all") {
      const cls = applicant.classApplyingFor.toLowerCase();
      if (selectedTier === "nursery" && !cls.includes("nursery") && !cls.includes("creche")) return false;
      if (selectedTier === "kindergarten" && !cls.includes("kg") && !cls.includes("kindergarten")) return false;
      if (selectedTier === "basic" && !cls.includes("basic") && !cls.includes("primary")) return false;
      if (selectedTier === "jhs" && !cls.includes("jhs") && !cls.includes("junior")) return false;
    }

    // Status filter
    if (selectedStatus === "approved" && applicant.status !== "Approved") return false;
    if (selectedStatus === "decision" && applicant.status !== "Pending") return false;
    if (selectedStatus === "incomplete" && applicant.status !== "More Info Needed") return false;

    return true;
  });

  const activeApplicant = uniqueApplicants.find((a) => a.id === activeApplicantId) || uniqueApplicants[0] || null;

  const handleApprove = () => {
    if (!activeApplicant) return;
    updateApplicantStatus(activeApplicant.id, "Approved");
    showToast("Enrollment Approved", `Official Student ID CP-2026-${Math.floor(1000 + Math.random() * 9000)} generated for ${activeApplicant.wardName}. Parent credentials SMS dispatched.`);
  };

  const handleRequestInfo = () => {
    if (!activeApplicant) return;
    updateApplicantStatus(activeApplicant.id, "More Info Needed");
    showToast("Info Requested", `Notice sent to ${activeApplicant.guardianName} (${activeApplicant.guardianPhone}) requesting additional certification.`);
  };

  const handleReject = () => {
    if (!activeApplicant) return;
    updateApplicantStatus(activeApplicant.id, "Rejected");
    showToast("Application Rejected", `Application for ${activeApplicant.wardName} flagged as rejected.`);
  };

  return (
    <>
      <div className="flex flex-col w-full pb-space-xl">
        
        {/* Header Hero */}
        <div className="relative bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg mb-space-lg overflow-hidden border border-surface-container-high/60">
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
          <div className="absolute right-48 -bottom-16 w-56 h-56 rounded-full bg-secondary-fixed/30 blur-2xl pointer-events-none"></div>
          
          <div className="relative flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mb-space-lg">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs mb-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Admissions Cycle 2026/2027
                </span>
                <span className="text-outline-variant">•</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Main Intake Round 1
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                Admissions &amp; Enrollment Processing Studio
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Real-time scrutiny and credential authentication pipeline for online public portal enrollments
              </p>
            </div>
            
            <div className="flex items-center gap-space-xs self-start xl:self-auto">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm font-semibold border border-surface-container-high/50"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">download</span>
                <span>Export Intake Ledger</span>
              </button>
              <Link
                href="/admissions/apply"
                className="flex items-center gap-2 px-space-md py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                <span>Open Intake Form</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-sm">
            <div className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-3 border border-surface-container-high/40">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">assignment</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">{uniqueApplicants.length + 138}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant truncate">Total Inquiries</span>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-3 border border-surface-container-high/40">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                <span className="material-symbols-outlined text-[20px]">manage_search</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">{uniqueApplicants.length}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant truncate">Under Review</span>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-3 border border-surface-container-high/40">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">calendar_clock</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">8</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant truncate">Assessment Scheduled</span>
              </div>
            </div>

            <div className="bg-secondary/10 p-space-md rounded-xl flex items-center gap-3 border-l-4 border-secondary">
              <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">gavel</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline-sm text-headline-sm text-secondary tracking-tight font-bold">
                  {uniqueApplicants.filter((a) => a.status === "Pending").length}
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold truncate">Principal Action</span>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md rounded-xl flex items-center gap-3 border border-surface-container-high/40">
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                  {uniqueApplicants.filter((a) => a.status === "Approved").length + 18}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant truncate">Students Enrolled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-md mb-space-lg flex flex-col gap-space-md border border-surface-container-high/60">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
            
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search applicant name, guardian contact, or token (e.g. CP-2026-9041)..."
                className="w-full pl-11 pr-4 py-2.5 bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary shadow-sm border border-surface-container-high/50"
              />
            </div>

            {/* Tier chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {(
                [
                  { id: "all", label: "All Tiers" },
                  { id: "nursery", label: "Creche & Nursery" },
                  { id: "kindergarten", label: "Kindergarten" },
                  { id: "basic", label: "Basic School (1-6)" },
                  { id: "jhs", label: "Junior High (JHS 1-3)" },
                ] as const
              ).map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setSelectedTier(chip.id)}
                  className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap font-semibold ${
                    selectedTier === chip.id
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status Sub-Filters */}
          <div className="flex items-center justify-between border-t border-surface-container-high/40 pt-2 flex-wrap gap-space-sm">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setSelectedStatus("all")}
                className={`px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm font-bold transition-all ${
                  selectedStatus === "all"
                    ? "bg-surface-container-high text-primary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                All ({uniqueApplicants.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedStatus("decision")}
                className={`px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm font-bold flex items-center gap-1.5 transition-all ${
                  selectedStatus === "decision"
                    ? "bg-secondary-fixed text-on-secondary-fixed ring-2 ring-secondary"
                    : "bg-secondary-fixed/50 text-on-secondary-fixed hover:bg-secondary-fixed"
                }`}
              >
                <span>Principal Decision Needed</span>
                <span className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center text-[10px]">
                  {uniqueApplicants.filter((a) => a.status === "Pending").length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedStatus("incomplete")}
                className={`px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm transition-all font-semibold ${
                  selectedStatus === "incomplete"
                    ? "bg-amber-100 text-amber-900 ring-2 ring-amber-400"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                Incomplete Docs
              </button>
              <button
                type="button"
                onClick={() => setSelectedStatus("approved")}
                className={`px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm transition-all font-semibold ${
                  selectedStatus === "approved"
                    ? "bg-tertiary-fixed text-on-tertiary-fixed ring-2 ring-tertiary"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                Enrolled
              </button>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Sorted by: Submission Date (Newest)</span>
            </div>
          </div>
        </div>

        {/* Studio Body: Left List + Right Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          
          {/* Left Column: Applicant Cards */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center justify-between px-1">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
                Queue: Intake Decisions
              </span>
              <span className="font-label-sm text-label-sm text-primary font-bold">
                Showing {filteredApplicants.length} of {uniqueApplicants.length}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {filteredApplicants.map((applicant) => {
                const isSelected = activeApplicant?.id === applicant.id;
                const initials = applicant.wardName
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div
                    key={applicant.id}
                    onClick={() => setActiveApplicantId(applicant.id)}
                    className={`relative bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md cursor-pointer transition-all border-l-4 ${
                      isSelected
                        ? "border-primary ring-2 ring-primary/20 shadow-md"
                        : "border-transparent"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 left-4 right-4 h-1 flex rounded-b-sm overflow-hidden">
                        <div className="w-1/3 bg-sky-400"></div>
                        <div className="w-1/3 bg-secondary"></div>
                        <div className="w-1/3 bg-tertiary-fixed-dim"></div>
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-2 mt-1 mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-headline-sm font-bold shadow-sm ${
                          isSelected ? "bg-primary text-on-primary" : "bg-surface-container-high text-primary"
                        }`}>
                          {initials}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                              {applicant.wardName}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                              {applicant.classApplyingFor}
                            </span>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                            Token: #{applicant.referenceNumber}
                          </span>
                        </div>
                      </div>

                      <span className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1 shadow-sm ${
                        applicant.status === "Approved"
                          ? "bg-tertiary-fixed text-on-tertiary-fixed"
                          : applicant.status === "Rejected"
                          ? "bg-error-container text-on-error-container"
                          : "bg-secondary-fixed text-on-secondary-fixed"
                      }`}>
                        <span className="material-symbols-outlined text-[14px]">
                          {applicant.status === "Approved" ? "check_circle" : applicant.status === "Rejected" ? "cancel" : "pending"}
                        </span>
                        <span>{applicant.status}</span>
                      </span>
                    </div>

                    <div className="bg-surface-container-low rounded-xl p-space-sm mb-3 grid grid-cols-2 gap-2 text-on-surface-variant border border-surface-container-high/40">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="material-symbols-outlined text-[16px] text-outline">family_restroom</span>
                        <span className="font-body-sm text-body-sm truncate text-on-surface font-medium">{applicant.guardianName}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-outline">verified_user</span>
                        <span className="font-body-sm text-body-sm font-semibold text-tertiary-container">Verified Intake</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-on-surface-variant font-label-sm text-label-sm">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-secondary">phone</span>
                        <span className="text-on-surface font-mono font-medium">{applicant.guardianPhone}</span>
                      </div>
                      <span className="text-outline">{applicant.submittedAt}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Active Applicant Dossier */}
          {activeApplicant && (
            <div className="lg:col-span-7 flex flex-col gap-space-md animate-fade-in">
              
              {/* Executive Decision Banner */}
              <div className="relative bg-primary text-on-primary rounded-2xl shadow-md p-space-lg overflow-hidden border border-primary-container">
                <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-primary-container blur-xl pointer-events-none"></div>
                
                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex flex-col max-w-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                        {activeApplicant.status === "Approved" ? "Enrolled Student" : "Decisive Action Required"}
                      </span>
                      <span className="text-on-primary-container text-label-sm font-label-sm font-semibold">
                        Principal Executive Authority
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-primary tracking-tight font-bold">
                      {activeApplicant.status === "Approved"
                        ? `Official Enrolment Confirmed: ${activeApplicant.wardName}`
                        : `Approve &amp; Authorize Enrolment`}
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
                      {activeApplicant.status === "Approved"
                        ? `Student record confirmed under ${activeApplicant.referenceNumber}. Parent credentials active.`
                        : `Authorizes permanent student record, dispatches encrypted parent portal credentials via SMS, and activates secure gate pickup PIN.`}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    {activeApplicant.status !== "Approved" && (
                      <button
                        type="button"
                        onClick={handleApprove}
                        className="flex items-center justify-center gap-2 px-space-lg py-3 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg hover:bg-tertiary-fixed-dim transition-all shadow-md active:scale-95 font-bold"
                      >
                        <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                        <span>Execute Enrollment</span>
                      </button>
                    )}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleRequestInfo}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-on-primary-fixed-variant font-label-sm text-label-sm text-center transition-colors font-semibold"
                      >
                        Request Info
                      </button>
                      <button
                        type="button"
                        onClick={handleReject}
                        className="flex-1 px-3 py-1.5 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container font-label-sm text-label-sm text-center transition-colors font-semibold"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dossier Card */}
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg border border-surface-container-high/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-md border-b border-surface-container-high/40">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-primary text-on-primary flex items-center justify-center font-headline-lg font-bold">
                      {activeApplicant.wardName.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-md text-headline-md text-primary tracking-tight font-bold">
                          {activeApplicant.wardName}
                        </h3>
                        <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-bold">
                          DOB: {activeApplicant.dob}
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Applying for: <strong className="text-primary font-semibold">{activeApplicant.classApplyingFor}</strong> • Token ID: <code className="font-mono text-primary font-bold">#{activeApplicant.referenceNumber}</code>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-3 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Verified Portal Entry</span>
                    </span>
                  </div>
                </div>

                {/* Guardian & Location Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md my-space-md">
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-2 border border-surface-container-high/40">
                    <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold">
                      <span className="material-symbols-outlined text-[18px]">badge</span>
                      <span>Primary Guardian Dossier</span>
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">
                        {activeApplicant.relationship}: {activeApplicant.guardianName}
                      </span>
                      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-outline">call</span>
                        <span className="font-mono font-medium text-primary">{activeApplicant.guardianPhone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-outline">mail</span>
                        <span className="truncate">{activeApplicant.guardianEmail}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-2 border border-surface-container-high/40">
                    <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                      <span>Campus Logistics Hub</span>
                    </div>
                    <div className="flex flex-col gap-1 mt-1">
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">Greater Accra Campus Intake</span>
                      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-outline">directions_bus</span>
                        <span>Bus Service: <strong className="text-on-surface">Requested • Morning Route</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-outline">medical_services</span>
                        <span>Clinic File: <strong className="text-tertiary-container">Routine Pediatric Checkup</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document Verification Checklist */}
                <div className="flex flex-col gap-space-sm mt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-bold">
                      Document Verification Checklist (Verified Complete)
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      Validated by Admissions Intake Desk
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container-high/40">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="material-symbols-outlined text-tertiary-container text-[20px]">check_circle</span>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Official Birth Certificate</span>
                          <span className="font-label-sm text-[10px] text-on-surface-variant">Registrar General • Ghana</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] text-primary">visibility</span>
                    </div>

                    <div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container-high/40">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="material-symbols-outlined text-tertiary-container text-[20px]">check_circle</span>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Child Immunization Card</span>
                          <span className="font-label-sm text-[10px] text-on-surface-variant">GHS Complete Protocols</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] text-primary">visibility</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-8 z-50 bg-primary text-on-primary px-space-lg py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in border border-white/20">
            <div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[18px]">check</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg font-bold">{toastMessage.title}</span>
              <span className="font-body-sm text-body-sm text-on-primary-container">{toastMessage.desc}</span>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
