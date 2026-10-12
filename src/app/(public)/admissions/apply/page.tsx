"use client";

import React, { useState, useRef, useId } from "react";
import Link from "next/link";
import { useCarepointStore } from "@/store/useCarepointStore";

export default function ApplyPage() {
  const { submitAdmission, applicants } = useCarepointStore();

  // Stepper State (1: Child, 2: Guardian, 3: Documents, 4: Declaration)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form Data State
  const [academicTier, setAcademicTier] = useState<"nursery" | "kindergarten" | "basic" | "jhs">("kindergarten");
  const [firstName, setFirstName] = useState("Kofi");
  const [middleName, setMiddleName] = useState("Kwame");
  const [surname, setSurname] = useState("Mensah");
  const [dob, setDob] = useState("2020-04-18");
  const [gender, setGender] = useState("Male");
  const [classApplyingFor, setClassApplyingFor] = useState("Kindergarten 2 (KG2)");
  const [previousSchool, setPreviousSchool] = useState("Grace Valley Early Learning Centre");
  const [lastGradeCompleted, setLastGradeCompleted] = useState("KG 1 Term 3");
  const [healthNotes, setHealthNotes] = useState("Mild dust sensitivity; requires inhaler during harmattan sports activities.");

  // Guardian Data
  const [guardianName, setGuardianName] = useState("Dr. Nana Kwame Mensah");
  const [relationship, setRelationship] = useState("Father");
  const [occupation, setOccupation] = useState("Medical Practitioner, Ridge Hospital");
  const [guardianPhone, setGuardianPhone] = useState("+233 24 456 7890");
  const [guardianEmail, setGuardianEmail] = useState("nana.mensah@gmail.com");
  const [residentialAddress, setResidentialAddress] = useState("Plot 14 Mango Tree Avenue, Community 18");
  const [gpsAddress, setGpsAddress] = useState("GE-234-9021");

  // Emergency Contact
  const [emergencyName, setEmergencyName] = useState("Mrs. Abena Serwaa Mensah");
  const [emergencyRelationship, setEmergencyRelationship] = useState("Mother");
  const [emergencyPhone, setEmergencyPhone] = useState("+233 20 890 1234");

  // Documents
  const [hasPassport, setHasPassport] = useState(true);
  const [passportFileName, setPassportFileName] = useState("kofi-mensah-passport.jpg");
  const [hasBirthCert, setHasBirthCert] = useState(true);
  const [birthCertFileName, setBirthCertFileName] = useState("ghana-birth-cert-mensah.pdf");
  const [hasReportCard, setHasReportCard] = useState(false);
  const [reportCardFileName, setReportCardFileName] = useState("");
  const [hasHealthRecord, setHasHealthRecord] = useState(false);
  const [healthRecordFileName, setHealthRecordFileName] = useState("");

  const reportCardInputRef = useRef<HTMLInputElement>(null);
  const healthRecordInputRef = useRef<HTMLInputElement>(null);
  const passportInputRef = useRef<HTMLInputElement>(null);
  const birthCertInputRef = useRef<HTMLInputElement>(null);

  // Declaration & Signature
  const [declarationAgree, setDeclarationAgree] = useState(false);
  const [rulesAgree, setRulesAgree] = useState(false);
  const [signerName, setSignerName] = useState("");

  // Submission State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedToast, setCopiedToast] = useState(false);
  const [draftSavedToast, setDraftSavedToast] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Status Tracker Modal State
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [statusSearchCode, setStatusSearchCode] = useState("");
  const [statusSearchResult, setStatusSearchResult] = useState<{
    found: boolean;
    name: string;
    classTarget: string;
    status: string;
    code: string;
    submittedAt: string;
  } | null>(null);

  // Dynamic calculations
  const candidateFullName = `${firstName} ${surname}`.trim() || "New Applicant";
  const candidateInitials = `${firstName?.[0] || ""}${surname?.[0] || ""}`.toUpperCase() || "NA";
  
  const attachedDocsCount = [hasPassport, hasBirthCert, hasReportCard, hasHealthRecord].filter(Boolean).length;
  
  const completionPercentage = currentStep === 1 ? 25 : currentStep === 2 ? 50 : currentStep === 3 ? 75 : 100;

  const todayFormatted = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  // Handle tier change and map default class
  const handleTierChange = (tier: "nursery" | "kindergarten" | "basic" | "jhs") => {
    setAcademicTier(tier);
    if (tier === "nursery") setClassApplyingFor("Nursery 1 (Age 2)");
    else if (tier === "kindergarten") setClassApplyingFor("Kindergarten 2 (KG2)");
    else if (tier === "basic") setClassApplyingFor("Basic 1");
    else if (tier === "jhs") setClassApplyingFor("Junior High School 1 (JHS 1)");
  };

  // Step navigation validations
  const goToNextStep = () => {
    setFormError(null);
    if (currentStep === 1) {
      if (!firstName.trim() || !surname.trim()) {
        setFormError("Please enter the child's first name and surname.");
        return;
      }
      if (!dob) {
        setFormError("Please enter the child's date of birth.");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!guardianName.trim()) {
        setFormError("Please enter the primary guardian's full name.");
        return;
      }
      if (!guardianPhone.trim()) {
        setFormError("Please enter a valid primary phone number.");
        return;
      }
      if (!guardianEmail.trim()) {
        setFormError("Please enter a valid guardian email address.");
        return;
      }
      if (!gpsAddress.trim()) {
        setFormError("Please provide the GhanaPost GPS Digital Address.");
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!hasPassport || !hasBirthCert) {
        setFormError("Child Passport Photo and Birth Certificate are mandatory before proceeding.");
        return;
      }
      setCurrentStep(4);
    }
  };

  // Form submission handler
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!declarationAgree || !rulesAgree) {
      setFormError("Please review and tick both declaration consent checkboxes.");
      return;
    }

    if (!signerName.trim()) {
      setFormError("Please type your full legal name as your digital signature.");
      return;
    }

    // Call Zustand Store to register real admission application
    const refCode = submitAdmission({
      wardName: candidateFullName,
      dob,
      classApplyingFor,
      guardianName,
      guardianPhone,
      guardianEmail,
      relationship,
    });

    setSubmittedRef(refCode);
    setIsSubmitted(true);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  // Copy to clipboard
  const handleCopyRef = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  // Save draft helper
  const handleSaveDraft = () => {
    const draftCode = `CP-DRAFT-${Math.floor(1000 + Math.random() * 9000)}`;
    setDraftSavedToast(`Draft saved successfully as ${draftCode}! A recovery link was sent to ${guardianEmail}.`);
    setTimeout(() => setDraftSavedToast(null), 4500);
  };

  // Status Lookup logic
  const handleStatusLookup = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = statusSearchCode.trim().toUpperCase();
    if (!query) return;

    // Search existing store applicants
    const match = applicants.find(
      (a) => a.referenceNumber.toUpperCase() === query || a.wardName.toUpperCase().includes(query)
    );

    if (match) {
      setStatusSearchResult({
        found: true,
        name: match.wardName,
        classTarget: match.classApplyingFor,
        status: match.status,
        code: match.referenceNumber,
        submittedAt: match.submittedAt,
      });
    } else {
      // Demo fallback match
      setStatusSearchResult({
        found: true,
        name: candidateFullName,
        classTarget: classApplyingFor,
        status: "Under Assessment Review",
        code: query,
        submittedAt: "Recent Intake Queue",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col w-full pb-space-xl">
        {/* Top Ghanaian Palette Header Strip */}
        <div className="w-full flex h-1.5 shadow-sm">
          <div className="flex-1 bg-sky-400"></div>
          <div className="flex-1 bg-secondary"></div>
          <div className="flex-1 bg-tertiary-fixed-dim"></div>
        </div>

        {/* Hero Section */}
        <section className="w-full bg-surface-container-low py-space-lg px-6 lg:px-12 border-b border-surface-container-high/40">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  Official Portal
                </span>
                <span className="bg-surface-container-high text-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold">
                  2026/2027 Academic Session
                </span>
                <span className="bg-tertiary text-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold">
                  Fee-Free Online Application
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Student Admission Intake Form
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
                Carepoint Community School welcomes applications across all tiers (Creche to JHS 3). Complete this verified registration to receive your permanent Reference Code and diagnostic screening appointment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 bg-surface-container-lowest p-3 rounded-xl shadow-sm self-start lg:self-auto border border-surface-container-high/60">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">support_agent</span>
              </div>
              <div className="flex flex-col text-left pr-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Admissions Helpline</span>
                <a className="font-label-lg text-label-lg text-primary hover:text-secondary transition-colors font-bold" href="tel:+233302998877">
                  +233 (0) 30 299 8877
                </a>
              </div>
              <div className="hidden sm:block w-px h-8 bg-surface-container-highest"></div>
              <button
                type="button"
                onClick={() => {
                  setIsStatusModalOpen(true);
                  if (submittedRef) setStatusSearchCode(submittedRef);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-label-sm text-label-sm transition-colors font-semibold"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">fact_check</span>
                <span>Track Status</span>
              </button>
            </div>
          </div>
        </section>

        {/* Global Toast Alerts */}
        {draftSavedToast && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-4 w-full">
            <div className="p-3.5 rounded-xl bg-primary text-on-primary shadow-lg flex items-center justify-between gap-3 animate-fade-in">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">bookmark_added</span>
                <span className="font-body-sm text-body-sm font-medium">{draftSavedToast}</span>
              </div>
              <button onClick={() => setDraftSavedToast(null)} className="text-on-primary/80 hover:text-white">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
        )}

        {formError && (
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-4 w-full">
            <div className="p-3.5 rounded-xl bg-error-container text-on-error-container shadow-md flex items-center justify-between gap-3 border border-error/30 animate-shake">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-error text-[20px]">warning</span>
                <span className="font-body-sm text-body-sm font-semibold">{formError}</span>
              </div>
              <button onClick={() => setFormError(null)} className="text-on-error-container/80 hover:text-on-error-container">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
        )}

        <main className="w-full px-6 lg:px-12 py-space-xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            
            {/* Left 8 Cols: Form Container */}
            <div className="lg:col-span-8 flex flex-col gap-space-lg">

              {/* Stepper Navigation Header */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high/60">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
                  
                  {/* Step 1 Tab */}
                  <button
                    type="button"
                    onClick={() => { setFormError(null); setCurrentStep(1); }}
                    className={`flex flex-col gap-1.5 p-3 rounded-lg text-left transition-all ${
                      currentStep === 1
                        ? "bg-primary text-on-primary shadow-sm"
                        : currentStep > 1
                        ? "bg-surface-container-low hover:bg-surface-container text-on-surface"
                        : "bg-surface-container-lowest text-on-surface-variant opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold ${
                        currentStep === 1
                          ? "bg-secondary text-on-secondary"
                          : currentStep > 1
                          ? "bg-tertiary text-tertiary-fixed"
                          : "bg-surface-container-highest text-on-surface-variant"
                      }`}>
                        {currentStep > 1 ? <span className="material-symbols-outlined text-[15px]">check</span> : "1"}
                      </span>
                      <span className={`font-label-sm text-label-sm uppercase font-bold text-[10px] ${
                        currentStep === 1 ? "text-secondary-fixed" : currentStep > 1 ? "text-tertiary" : "text-outline"
                      }`}>
                        {currentStep === 1 ? "Active" : currentStep > 1 ? "Done" : "Pending"}
                      </span>
                    </div>
                    <span className="font-label-md text-label-md font-semibold">1. Child Details</span>
                    <span className={`font-body-sm text-body-sm text-[12px] truncate ${
                      currentStep === 1 ? "text-on-primary/80" : "text-on-surface-variant"
                    }`}>
                      {candidateFullName}
                    </span>
                  </button>

                  {/* Step 2 Tab */}
                  <button
                    type="button"
                    onClick={() => { setFormError(null); setCurrentStep(2); }}
                    className={`flex flex-col gap-1.5 p-3 rounded-lg text-left transition-all ${
                      currentStep === 2
                        ? "bg-primary text-on-primary shadow-sm"
                        : currentStep > 2
                        ? "bg-surface-container-low hover:bg-surface-container text-on-surface"
                        : "bg-surface-container-lowest text-on-surface-variant opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold ${
                        currentStep === 2
                          ? "bg-secondary text-on-secondary"
                          : currentStep > 2
                          ? "bg-tertiary text-tertiary-fixed"
                          : "bg-surface-container-highest text-on-surface-variant"
                      }`}>
                        {currentStep > 2 ? <span className="material-symbols-outlined text-[15px]">check</span> : "2"}
                      </span>
                      <span className={`font-label-sm text-label-sm uppercase font-bold text-[10px] ${
                        currentStep === 2 ? "text-secondary-fixed" : currentStep > 2 ? "text-tertiary" : "text-outline"
                      }`}>
                        {currentStep === 2 ? "Active" : currentStep > 2 ? "Done" : "Pending"}
                      </span>
                    </div>
                    <span className="font-label-md text-label-md font-semibold">2. Guardian Info</span>
                    <span className={`font-body-sm text-body-sm text-[12px] truncate ${
                      currentStep === 2 ? "text-on-primary/80" : "text-on-surface-variant"
                    }`}>
                      {guardianName || "Pending"}
                    </span>
                  </button>

                  {/* Step 3 Tab */}
                  <button
                    type="button"
                    onClick={() => { setFormError(null); setCurrentStep(3); }}
                    className={`flex flex-col gap-1.5 p-3 rounded-lg text-left transition-all ${
                      currentStep === 3
                        ? "bg-primary text-on-primary shadow-sm"
                        : currentStep > 3
                        ? "bg-surface-container-low hover:bg-surface-container text-on-surface"
                        : "bg-surface-container-lowest text-on-surface-variant opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold ${
                        currentStep === 3
                          ? "bg-secondary text-on-secondary"
                          : currentStep > 3
                          ? "bg-tertiary text-tertiary-fixed"
                          : "bg-surface-container-highest text-on-surface-variant"
                      }`}>
                        {currentStep > 3 ? <span className="material-symbols-outlined text-[15px]">check</span> : "3"}
                      </span>
                      <span className={`font-label-sm text-label-sm uppercase font-bold text-[10px] ${
                        currentStep === 3 ? "text-secondary-fixed" : currentStep > 3 ? "text-tertiary" : "text-outline"
                      }`}>
                        {currentStep === 3 ? "Active" : currentStep > 3 ? "Done" : "Pending"}
                      </span>
                    </div>
                    <span className="font-label-md text-label-md font-semibold">3. Documents</span>
                    <span className={`font-body-sm text-body-sm text-[12px] truncate ${
                      currentStep === 3 ? "text-on-primary/80" : "text-on-surface-variant"
                    }`}>
                      {attachedDocsCount} of 4 Attached
                    </span>
                  </button>

                  {/* Step 4 Tab */}
                  <button
                    type="button"
                    onClick={() => { setFormError(null); setCurrentStep(4); }}
                    className={`flex flex-col gap-1.5 p-3 rounded-lg text-left transition-all ${
                      currentStep === 4
                        ? "bg-primary text-on-primary shadow-sm"
                        : "bg-surface-container-lowest text-on-surface-variant opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold ${
                        currentStep === 4
                          ? "bg-secondary text-on-secondary"
                          : "bg-surface-container-highest text-on-surface-variant"
                      }`}>
                        4
                      </span>
                      <span className={`font-label-sm text-label-sm uppercase font-bold text-[10px] ${
                        currentStep === 4 ? "text-secondary-fixed" : "text-outline"
                      }`}>
                        {currentStep === 4 ? "Active" : "Pending"}
                      </span>
                    </div>
                    <span className="font-label-md text-label-md font-semibold">4. Declaration</span>
                    <span className={`font-body-sm text-body-sm text-[12px] truncate ${
                      currentStep === 4 ? "text-on-primary/80" : "text-on-surface-variant"
                    }`}>
                      Sign &amp; Submit
                    </span>
                  </button>
                </div>
              </div>

              {/* Form Content */}
              {!isSubmitted ? (
                <form className="flex flex-col gap-space-lg" onSubmit={handleFinalSubmit}>
                  
                  {/* ==================== STEP 1: CHILD DETAILS ==================== */}
                  {currentStep === 1 && (
                    <div className="flex flex-col gap-space-md bg-surface-container-lowest p-6 lg:p-8 rounded-xl shadow-sm border border-surface-container-high/60 animate-fade-in">
                      <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/40">
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                            Step 01 / 04
                          </span>
                          <h2 className="font-headline-md text-headline-md text-primary font-bold">
                            Child &amp; Academic Background
                          </h2>
                        </div>
                        <span className="bg-surface-container-low text-primary font-label-sm text-label-sm px-3 py-1 rounded-full font-mono font-semibold">
                          Draft Ref: #CP-2026-9921
                        </span>
                      </div>

                      {/* Tier Selector Radio Cards */}
                      <div className="flex flex-col gap-1.5 py-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Select Educational Division <span className="text-secondary">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <button
                            type="button"
                            onClick={() => handleTierChange("nursery")}
                            className={`p-3 rounded-xl text-center transition-all flex flex-col items-center gap-1 border ${
                              academicTier === "nursery"
                                ? "bg-primary text-on-primary shadow-md border-primary ring-2 ring-primary ring-offset-2"
                                : "bg-surface-container-low hover:bg-surface-container text-on-surface border-transparent"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[24px]">child_care</span>
                            <div className="font-label-sm text-label-sm uppercase font-bold">Nursery</div>
                            <div className={`text-[11px] ${academicTier === "nursery" ? "text-secondary-fixed" : "text-on-surface-variant"}`}>
                              Ages 2 - 3
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleTierChange("kindergarten")}
                            className={`p-3 rounded-xl text-center transition-all flex flex-col items-center gap-1 border ${
                              academicTier === "kindergarten"
                                ? "bg-primary text-on-primary shadow-md border-primary ring-2 ring-primary ring-offset-2"
                                : "bg-surface-container-low hover:bg-surface-container text-on-surface border-transparent"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[24px]">school</span>
                            <div className="font-label-sm text-label-sm uppercase font-bold">Kindergarten</div>
                            <div className={`text-[11px] ${academicTier === "kindergarten" ? "text-secondary-fixed" : "text-on-surface-variant"}`}>
                              KG 1 &amp; KG 2
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleTierChange("basic")}
                            className={`p-3 rounded-xl text-center transition-all flex flex-col items-center gap-1 border ${
                              academicTier === "basic"
                                ? "bg-primary text-on-primary shadow-md border-primary ring-2 ring-primary ring-offset-2"
                                : "bg-surface-container-low hover:bg-surface-container text-on-surface border-transparent"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[24px]">auto_stories</span>
                            <div className="font-label-sm text-label-sm uppercase font-bold">Basic School</div>
                            <div className={`text-[11px] ${academicTier === "basic" ? "text-secondary-fixed" : "text-on-surface-variant"}`}>
                              Grades 1 - 6
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleTierChange("jhs")}
                            className={`p-3 rounded-xl text-center transition-all flex flex-col items-center gap-1 border ${
                              academicTier === "jhs"
                                ? "bg-primary text-on-primary shadow-md border-primary ring-2 ring-primary ring-offset-2"
                                : "bg-surface-container-low hover:bg-surface-container text-on-surface border-transparent"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[24px]">history_edu</span>
                            <div className="font-label-sm text-label-sm uppercase font-bold">Junior High</div>
                            <div className={`text-[11px] ${academicTier === "jhs" ? "text-secondary-fixed" : "text-on-surface-variant"}`}>
                              JHS 1 - 3 (BECE)
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Name Inputs */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                            First Name <span className="text-secondary">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="e.g. Kofi"
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/50"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">Middle Name(s)</label>
                          <input
                            type="text"
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                            placeholder="e.g. Kwame"
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/50"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Surname / Family Name <span className="text-secondary">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="e.g. Mensah"
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/50"
                          />
                        </div>
                      </div>

                      {/* DOB, Gender, Class */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Date of Birth <span className="text-secondary">*</span>
                          </label>
                          <input
                            required
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/50"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Gender <span className="text-secondary">*</span>
                          </label>
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/50"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Applying For Class <span className="text-secondary">*</span>
                          </label>
                          <select
                            value={classApplyingFor}
                            onChange={(e) => setClassApplyingFor(e.target.value)}
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md font-semibold border border-surface-container-high/50"
                          >
                            <option value="Creche (6m - 1.5y)">Creche (6m - 1.5y)</option>
                            <option value="Nursery 1 (Age 2)">Nursery 1 (Age 2)</option>
                            <option value="Nursery 2 (Age 3)">Nursery 2 (Age 3)</option>
                            <option value="Kindergarten 1 (KG1)">Kindergarten 1 (KG1)</option>
                            <option value="Kindergarten 2 (KG2)">Kindergarten 2 (KG2)</option>
                            <option value="Basic 1">Basic 1</option>
                            <option value="Basic 2">Basic 2</option>
                            <option value="Basic 3">Basic 3</option>
                            <option value="Basic 4">Basic 4</option>
                            <option value="Basic 5">Basic 5</option>
                            <option value="Basic 6">Basic 6</option>
                            <option value="Junior High School 1 (JHS 1)">Junior High School 1 (JHS 1)</option>
                            <option value="Junior High School 2 (JHS 2)">Junior High School 2 (JHS 2)</option>
                          </select>
                        </div>
                      </div>

                      {/* Schooling History */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">Previous School Attended (If any)</label>
                          <input
                            type="text"
                            value={previousSchool}
                            onChange={(e) => setPreviousSchool(e.target.value)}
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/50"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">Last Grade Completed</label>
                          <input
                            type="text"
                            value={lastGradeCompleted}
                            onChange={(e) => setLastGradeCompleted(e.target.value)}
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/50"
                          />
                        </div>
                      </div>

                      {/* Health & Special Needs */}
                      <div className="flex flex-col gap-1">
                        <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                          Special Health, Dietary, or Learning Considerations
                        </label>
                        <textarea
                          rows={2}
                          value={healthNotes}
                          onChange={(e) => setHealthNotes(e.target.value)}
                          placeholder="Mention allergies (e.g. peanut, lactose), physical assistance needs, or dietary preferences..."
                          className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/50"
                        />
                      </div>

                      <div className="flex justify-end pt-3 border-t border-surface-container-high/40">
                        <button
                          type="button"
                          onClick={goToNextStep}
                          className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors flex items-center gap-2 font-bold shadow-sm"
                        >
                          Continue to Guardian Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ==================== STEP 2: GUARDIAN DETAILS ==================== */}
                  {currentStep === 2 && (
                    <div className="flex flex-col gap-space-md bg-surface-container-lowest p-6 lg:p-8 rounded-xl shadow-sm border border-surface-container-high/60 animate-fade-in">
                      <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/40">
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                            Step 02 / 04
                          </span>
                          <h2 className="font-headline-md text-headline-md text-primary font-bold">
                            Guardian &amp; Emergency Contacts
                          </h2>
                        </div>
                        <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-3 py-1 rounded-full font-semibold">
                          Primary Caregiver
                        </span>
                      </div>

                      {/* Primary Guardian Card */}
                      <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-3 border border-surface-container-high/40">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">person</span>
                          <span className="font-label-lg text-label-lg text-primary font-bold">
                            Primary Guardian (Accountable for Billing &amp; Notices)
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                              Full Name <span className="text-secondary">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              value={guardianName}
                              onChange={(e) => setGuardianName(e.target.value)}
                              placeholder="e.g. Dr. Nana Kwame Mensah"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                              Relationship <span className="text-secondary">*</span>
                            </label>
                            <select
                              value={relationship}
                              onChange={(e) => setRelationship(e.target.value)}
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40"
                            >
                              <option value="Father">Father</option>
                              <option value="Mother">Mother</option>
                              <option value="Legal Guardian">Legal Guardian</option>
                              <option value="Grandparent">Grandparent</option>
                            </select>
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">Occupation / Employer</label>
                            <input
                              type="text"
                              value={occupation}
                              onChange={(e) => setOccupation(e.target.value)}
                              placeholder="e.g. Ridge Hospital"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                              Primary Phone (WhatsApp enabled) <span className="text-secondary">*</span>
                            </label>
                            <input
                              required
                              type="tel"
                              value={guardianPhone}
                              onChange={(e) => setGuardianPhone(e.target.value)}
                              placeholder="+233 24 000 0000"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40 font-mono"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                              Email Address <span className="text-secondary">*</span>
                            </label>
                            <input
                              required
                              type="email"
                              value={guardianEmail}
                              onChange={(e) => setGuardianEmail(e.target.value)}
                              placeholder="parent@example.com"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">Residential Street Address</label>
                            <input
                              type="text"
                              value={residentialAddress}
                              onChange={(e) => setResidentialAddress(e.target.value)}
                              placeholder="Plot 14 Mango Tree Ave"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                              GhanaPost GPS Digital Address <span className="text-secondary">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              value={gpsAddress}
                              onChange={(e) => setGpsAddress(e.target.value)}
                              placeholder="e.g. GE-234-9021"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40 font-mono uppercase"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Secondary Emergency Contact */}
                      <div className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-3 border border-surface-container-high/40">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">emergency</span>
                          <span className="font-label-lg text-label-lg text-primary font-bold">Secondary Emergency Contact</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">Full Name</label>
                            <input
                              type="text"
                              value={emergencyName}
                              onChange={(e) => setEmergencyName(e.target.value)}
                              placeholder="e.g. Mrs. Abena Serwaa"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">Relationship</label>
                            <input
                              type="text"
                              value={emergencyRelationship}
                              onChange={(e) => setEmergencyRelationship(e.target.value)}
                              placeholder="e.g. Mother / Aunt"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-label-lg text-label-lg text-on-surface font-semibold">Emergency Phone</label>
                            <input
                              type="tel"
                              value={emergencyPhone}
                              onChange={(e) => setEmergencyPhone(e.target.value)}
                              placeholder="+233 20 000 0000"
                              className="px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-surface-container-high/40 font-mono"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-surface-container-high/40">
                        <button
                          type="button"
                          onClick={() => { setFormError(null); setCurrentStep(1); }}
                          className="px-5 py-2.5 rounded-lg bg-surface-container text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-colors font-semibold"
                        >
                          ← Back to Child Details
                        </button>
                        <button
                          type="button"
                          onClick={goToNextStep}
                          className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors flex items-center gap-2 font-bold shadow-sm"
                        >
                          Proceed to Documents <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ==================== STEP 3: DOCUMENTS ==================== */}
                  {currentStep === 3 && (
                    <div className="flex flex-col gap-space-md bg-surface-container-lowest p-6 lg:p-8 rounded-xl shadow-sm border border-surface-container-high/60 animate-fade-in">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-2 border-b border-surface-container-high/40">
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                            Step 03 / 04
                          </span>
                          <h2 className="font-headline-md text-headline-md text-primary font-bold">
                            Required Verification Documents
                          </h2>
                        </div>
                        <div className="flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full font-label-sm text-label-sm font-bold">
                          <span className="material-symbols-outlined text-[16px]">verified</span>
                          <span>{attachedDocsCount} of 4 Documents Attached</span>
                        </div>
                      </div>
                      
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Please upload legible images (JPG, PNG) or PDF scans. Maximum size per file is 5MB. If you don't have all documents now, you can complete the online form and present originals on screening day.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Doc 1: Passport Photo */}
                        <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 relative border border-surface-container-high/40">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[18px]">account_box</span>
                              </span>
                              <div>
                                <div className="font-label-lg text-label-lg text-primary font-bold">Passport Photo of Child</div>
                                <span className="font-label-sm text-label-sm text-secondary font-bold">Mandatory</span>
                              </div>
                            </div>
                            <span className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1 font-bold ${
                              hasPassport ? "bg-tertiary text-tertiary-fixed" : "bg-surface-container text-on-surface-variant"
                            }`}>
                              {hasPassport ? (
                                <><span className="material-symbols-outlined text-[13px]">check_circle</span> Attached</>
                              ) : "Awaiting"}
                            </span>
                          </div>

                          {hasPassport ? (
                            <div className="flex items-center gap-3 bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
                              <div className="w-12 h-14 rounded bg-surface-container overflow-hidden shrink-0 flex items-center justify-center text-on-surface-variant font-label-sm">
                                <span className="material-symbols-outlined text-[24px] text-primary">face</span>
                              </div>
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="font-label-sm text-label-sm text-primary font-bold truncate">
                                  {passportFileName}
                                </span>
                                <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">1.2 MB • Verified</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => passportInputRef.current?.click()}
                                className="p-1 hover:text-secondary text-on-surface-variant transition-colors"
                                title="Change file"
                              >
                                <span className="material-symbols-outlined text-[20px]">refresh</span>
                              </button>
                            </div>
                          ) : (
                            <div
                              onClick={() => passportInputRef.current?.click()}
                              className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-lg border-2 border-dashed border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer text-center"
                            >
                              <span className="material-symbols-outlined text-[28px] text-primary">cloud_upload</span>
                              <span className="font-label-sm text-label-sm text-primary font-bold mt-1">Upload Child Photo</span>
                            </div>
                          )}
                          <input
                            ref={passportInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                setPassportFileName(e.target.files[0].name);
                                setHasPassport(true);
                              }
                            }}
                          />
                        </div>

                        {/* Doc 2: Birth Certificate */}
                        <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 relative border border-surface-container-high/40">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[18px]">description</span>
                              </span>
                              <div>
                                <div className="font-label-lg text-label-lg text-primary font-bold">Birth Certificate</div>
                                <span className="font-label-sm text-label-sm text-secondary font-bold">Mandatory</span>
                              </div>
                            </div>
                            <span className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1 font-bold ${
                              hasBirthCert ? "bg-tertiary text-tertiary-fixed" : "bg-surface-container text-on-surface-variant"
                            }`}>
                              {hasBirthCert ? (
                                <><span className="material-symbols-outlined text-[13px]">check_circle</span> Attached</>
                              ) : "Awaiting"}
                            </span>
                          </div>

                          {hasBirthCert ? (
                            <div className="flex items-center gap-3 bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
                              <div className="w-12 h-14 rounded bg-surface-container overflow-hidden shrink-0 flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined text-[24px]">picture_as_pdf</span>
                              </div>
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="font-label-sm text-label-sm text-primary font-bold truncate">
                                  {birthCertFileName}
                                </span>
                                <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">2.8 MB • PDF</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => birthCertInputRef.current?.click()}
                                className="p-1 hover:text-secondary text-on-surface-variant transition-colors"
                                title="Change file"
                              >
                                <span className="material-symbols-outlined text-[20px]">refresh</span>
                              </button>
                            </div>
                          ) : (
                            <div
                              onClick={() => birthCertInputRef.current?.click()}
                              className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-lg border-2 border-dashed border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer text-center"
                            >
                              <span className="material-symbols-outlined text-[28px] text-primary">cloud_upload</span>
                              <span className="font-label-sm text-label-sm text-primary font-bold mt-1">Upload Birth Certificate</span>
                            </div>
                          )}
                          <input
                            ref={birthCertInputRef}
                            type="file"
                            accept=".pdf,image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                setBirthCertFileName(e.target.files[0].name);
                                setHasBirthCert(true);
                              }
                            }}
                          />
                        </div>

                        {/* Doc 3: Terminal Report Card */}
                        <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container-high/40">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[18px]">grade</span>
                              </span>
                              <div>
                                <div className="font-label-lg text-label-lg text-primary font-bold">Latest Report Card / Testimonial</div>
                                <span className="font-label-sm text-label-sm text-on-surface-variant">Required for KG2 &amp; above</span>
                              </div>
                            </div>
                            <span className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold ${
                              hasReportCard ? "bg-tertiary text-tertiary-fixed font-bold" : "bg-surface-container text-on-surface-variant"
                            }`}>
                              {hasReportCard ? "Attached" : "Awaiting"}
                            </span>
                          </div>

                          {hasReportCard ? (
                            <div className="flex items-center gap-3 bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
                              <div className="w-12 h-14 rounded bg-surface-container overflow-hidden shrink-0 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[24px]">description</span>
                              </div>
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="font-label-sm text-label-sm text-primary font-bold truncate">
                                  {reportCardFileName}
                                </span>
                                <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Uploaded • Ready</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => { setHasReportCard(false); setReportCardFileName(""); }}
                                className="p-1 hover:text-secondary text-on-surface-variant transition-colors"
                                title="Remove file"
                              >
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                              </button>
                            </div>
                          ) : (
                            <div
                              onClick={() => reportCardInputRef.current?.click()}
                              className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-lg border-2 border-dashed border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer text-center group"
                            >
                              <span className="material-symbols-outlined text-[28px] text-primary group-hover:scale-110 transition-transform">cloud_upload</span>
                              <span className="font-label-sm text-label-sm text-primary font-bold mt-1">Click to browse or drop terminal report</span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">PDF or Scanned images up to 5MB</span>
                            </div>
                          )}
                          <input
                            ref={reportCardInputRef}
                            type="file"
                            accept=".pdf,image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                setReportCardFileName(e.target.files[0].name);
                                setHasReportCard(true);
                              }
                            }}
                          />
                        </div>

                        {/* Doc 4: Child Health Record */}
                        <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-surface-container-high/40">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[18px]">medical_services</span>
                              </span>
                              <div>
                                <div className="font-label-lg text-label-lg text-primary font-bold">Child Health Record (Yellow Card)</div>
                                <span className="font-label-sm text-label-sm text-on-surface-variant">Recommended</span>
                              </div>
                            </div>
                            <span className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold ${
                              hasHealthRecord ? "bg-tertiary text-tertiary-fixed font-bold" : "bg-surface-container text-on-surface-variant"
                            }`}>
                              {hasHealthRecord ? "Attached" : "Awaiting"}
                            </span>
                          </div>

                          {hasHealthRecord ? (
                            <div className="flex items-center gap-3 bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
                              <div className="w-12 h-14 rounded bg-surface-container overflow-hidden shrink-0 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[24px]">vaccines</span>
                              </div>
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="font-label-sm text-label-sm text-primary font-bold truncate">
                                  {healthRecordFileName}
                                </span>
                                <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Uploaded • Ready</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => { setHasHealthRecord(false); setHealthRecordFileName(""); }}
                                className="p-1 hover:text-secondary text-on-surface-variant transition-colors"
                                title="Remove file"
                              >
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                              </button>
                            </div>
                          ) : (
                            <div
                              onClick={() => healthRecordInputRef.current?.click()}
                              className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-lg border-2 border-dashed border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer text-center group"
                            >
                              <span className="material-symbols-outlined text-[28px] text-primary group-hover:scale-110 transition-transform">cloud_upload</span>
                              <span className="font-label-sm text-label-sm text-primary font-bold mt-1">Upload Child Health Record</span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">Page showing measles, polio &amp; BCG shots</span>
                            </div>
                          )}
                          <input
                            ref={healthRecordInputRef}
                            type="file"
                            accept=".pdf,image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                setHealthRecordFileName(e.target.files[0].name);
                                setHasHealthRecord(true);
                              }
                            }}
                          />
                        </div>

                      </div>

                      <div className="flex items-center gap-3 p-3.5 bg-surface-container rounded-lg">
                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">info</span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                          Carepoint School Clinic keeps dedicated confidential health records on each enrolled student with a registered nurse on site during school hours.
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-surface-container-high/40">
                        <button
                          type="button"
                          onClick={() => { setFormError(null); setCurrentStep(2); }}
                          className="px-5 py-2.5 rounded-lg bg-surface-container text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-colors font-semibold"
                        >
                          ← Back to Guardian Details
                        </button>
                        <button
                          type="button"
                          onClick={goToNextStep}
                          className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors flex items-center gap-2 font-bold shadow-sm"
                        >
                          Review &amp; Declaration <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ==================== STEP 4: DECLARATION & SUBMIT ==================== */}
                  {currentStep === 4 && (
                    <div className="flex flex-col gap-space-md bg-surface-container-lowest p-6 lg:p-8 rounded-xl shadow-sm border border-surface-container-high/60 animate-fade-in">
                      <div className="flex items-center justify-between pb-2 border-b border-surface-container-high/40">
                        <div>
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                            Step 04 / 04
                          </span>
                          <h2 className="font-headline-md text-headline-md text-primary font-bold">
                            Parental Declaration &amp; Submission
                          </h2>
                        </div>
                        <span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full font-bold">
                          Final Step
                        </span>
                      </div>

                      {/* Quick Profile Summary Box */}
                      <div className="p-4 bg-surface-container-low rounded-xl flex flex-col gap-2 border border-surface-container-high/40">
                        <div className="font-label-lg text-label-lg text-primary flex items-center gap-2 font-bold">
                          <span className="material-symbols-outlined text-[20px]">fact_check</span> Quick Profile Verification
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-body-sm pt-2">
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant block">Candidate</span>
                            <strong className="text-primary font-body-md font-bold">{candidateFullName}</strong>
                          </div>
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant block">Class Target</span>
                            <strong className="text-primary font-body-md font-bold">{classApplyingFor}</strong>
                          </div>
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant block">Guardian</span>
                            <strong className="text-primary font-body-md font-bold">{guardianName}</strong>
                          </div>
                          <div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant block">Phone</span>
                            <strong className="text-primary font-body-md font-bold font-mono">{guardianPhone}</strong>
                          </div>
                        </div>
                      </div>

                      {/* Consent Checkboxes */}
                      <div className="flex flex-col gap-3 p-4 bg-surface-container-low rounded-xl border border-surface-container-high/40">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={declarationAgree}
                            onChange={(e) => setDeclarationAgree(e.target.checked)}
                            className="mt-1 w-5 h-5 rounded text-primary focus:ring-primary cursor-pointer"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface leading-snug">
                            I solemnly declare that the facts and supporting attachments furnished herein are true and accurate. I understand that misrepresentation of identity or prior academic transcripts will lead to immediate cancellation of admission without recourse.
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={rulesAgree}
                            onChange={(e) => setRulesAgree(e.target.checked)}
                            className="mt-1 w-5 h-5 rounded text-primary focus:ring-primary cursor-pointer"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface leading-snug">
                            I acknowledge and consent to Carepoint Community School’s rules regarding character formation, dress codes, punctuality, and emergency first-aid protocols.
                          </span>
                        </label>
                      </div>

                      {/* Signature Field */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                            Digital Signature (Type Guardian Full Legal Name) <span className="text-secondary">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={signerName}
                            onChange={(e) => setSignerName(e.target.value)}
                            placeholder={`e.g. ${guardianName || "Nana Kwame Mensah"}`}
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:ring-2 focus:ring-primary focus:outline-none italic border border-surface-container-high/50"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-lg text-label-lg text-on-surface font-semibold">Today's Date</label>
                          <input
                            readOnly
                            type="text"
                            value={todayFormatted}
                            className="px-4 py-2.5 rounded-lg bg-surface-container text-on-surface-variant font-body-md text-body-md cursor-not-allowed border border-surface-container-high/50 font-medium"
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-container-high/40">
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <button
                            type="button"
                            onClick={() => { setFormError(null); setCurrentStep(3); }}
                            className="px-5 py-2.5 rounded-lg bg-surface-container text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-colors font-semibold"
                          >
                            ← Previous Step
                          </button>
                          <button
                            type="button"
                            onClick={handleSaveDraft}
                            className="px-4 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors flex items-center gap-1.5 font-semibold"
                          >
                            <span className="material-symbols-outlined text-[18px]">bookmark_border</span> Save Draft
                          </button>
                        </div>

                        <button
                          type="submit"
                          className="w-full sm:w-auto px-8 py-3.5 bg-secondary hover:bg-secondary-container text-on-secondary rounded-lg font-headline-sm text-headline-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          <span>Submit Application</span>
                          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                      </div>

                      <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                        Submission immediately generates your official Reference ID and places your child in the school admissions screening queue.
                      </p>
                    </div>
                  )}

                </form>
              ) : (
                /* ==================== SUBMISSION SUCCESS SCREEN ==================== */
                <div className="flex flex-col gap-space-md bg-surface-container-lowest p-8 lg:p-12 rounded-2xl shadow-xl text-center items-center border border-tertiary-fixed/40 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-1 shadow-md">
                    <span className="material-symbols-outlined text-[36px]">check_circle</span>
                  </div>
                  <span className="bg-secondary text-on-secondary font-label-sm text-label-sm uppercase px-3 py-1 rounded-full font-bold">
                    Official Application Received
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    Welcome to the Carepoint Family!
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                    Application for <strong>{candidateFullName}</strong> ({classApplyingFor}) has been successfully submitted to the Headmistress and admissions desk under:
                  </p>

                  <div className="p-4 bg-surface-container-low rounded-xl flex items-center justify-center gap-4 my-2 border border-surface-container-high/60 max-w-md w-full">
                    <span className="text-2xl sm:text-3xl font-mono font-extrabold text-primary tracking-wider">
                      {submittedRef}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyRef}
                      className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors flex items-center gap-1 text-xs font-semibold"
                      title="Copy Reference Code"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {copiedToast ? "done" : "content_copy"}
                      </span>
                      <span>{copiedToast ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                    A formal receipt along with the placement screening date has been queued for dispatch to <strong>{guardianEmail}</strong> and WhatsApp alert to <strong>{guardianPhone}</strong>.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsStatusModalOpen(true);
                        if (submittedRef) {
                          setStatusSearchCode(submittedRef);
                          handleStatusLookup();
                        }
                      }}
                      className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors font-bold shadow-sm"
                    >
                      Track Application Status
                    </button>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-5 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors flex items-center gap-1.5 font-semibold"
                    >
                      <span className="material-symbols-outlined text-[18px]">print</span> Print Summary
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setCurrentStep(1);
                        setFirstName("");
                        setSurname("");
                        setSignerName("");
                        setDeclarationAgree(false);
                        setRulesAgree(false);
                      }}
                      className="px-4 py-2.5 rounded-lg text-on-surface-variant hover:text-primary font-label-md text-label-md"
                    >
                      Submit Another Child
                    </button>
                  </div>
                </div>
              )}

              {/* Academic Spectrum Banner */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high/60">
                <div className="flex items-center justify-between pb-3">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                    Academic Spectrum at Carepoint
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    Mind • Heart • Hands
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center text-center gap-2 group hover:bg-surface-container transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">child_friendly</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider bg-primary text-on-primary px-3 py-1 rounded-full w-full">
                      Nursery
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                      Creche &amp; Early Play
                    </span>
                  </div>

                  <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center text-center gap-2 group hover:bg-surface-container transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">toys</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider bg-primary text-on-primary px-3 py-1 rounded-full w-full">
                      Kindergarten
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                      KG 1 &amp; KG 2 Foundations
                    </span>
                  </div>

                  <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center text-center gap-2 group hover:bg-surface-container transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">menu_book</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider bg-primary text-on-primary px-3 py-1 rounded-full w-full">
                      Basic School
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                      Primary Grades 1 to 6
                    </span>
                  </div>

                  <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center text-center gap-2 group hover:bg-surface-container transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider bg-primary text-on-primary px-3 py-1 rounded-full w-full">
                      Junior High
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                      BECE Preparation
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Dynamic Application Summary Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-space-lg">
              
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4 border border-surface-container-high/60">
                <div className="flex items-center justify-between border-b border-surface-container-high/40 pb-2">
                  <span className="font-label-lg text-label-lg text-primary flex items-center gap-2 font-bold">
                    <span className="material-symbols-outlined text-secondary">badge</span> Application Summary
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container-low text-primary px-2.5 py-0.5 rounded-full font-bold">
                    {isSubmitted ? "Submitted" : `Step ${currentStep} of 4`}
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-surface-container-high/30">
                  <div className="w-12 h-12 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-headline-sm font-bold shrink-0">
                    {candidateInitials}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-primary truncate leading-tight font-bold">
                      {candidateFullName}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Target: {classApplyingFor}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col divide-y divide-surface-container-high/40 text-body-sm">
                  <div className="py-2 flex justify-between">
                    <span className="text-on-surface-variant">Academic Term</span>
                    <span className="text-primary font-semibold">Term 1 (Sept 2026)</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-on-surface-variant">Application Fee</span>
                    <span className="text-tertiary-container font-bold uppercase">GHS 0.00 (Waived)</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-on-surface-variant">Active Reference</span>
                    <span className="font-mono text-primary font-bold">
                      {submittedRef || "#CP-2026-9921"}
                    </span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-on-surface-variant">Document Count</span>
                    <span className="text-primary font-semibold">{attachedDocsCount} of 4 attached</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 pt-1">
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant">Completion Meter</span>
                    <span className="text-primary font-bold">{completionPercentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Admissions Process Milestones */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col gap-4 border border-surface-container-high/60">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">timeline</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Admission Process</h3>
                </div>
                <div className="flex flex-col gap-4 relative pl-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-primary font-bold">Instant Reference Code</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                        Generates as soon as you submit. Retain it for all communications and status checks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-primary font-bold">Academic Board Review</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                        Applications undergo vetting within 48 to 72 working hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-primary font-bold">Screening &amp; Assessment</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                        Friendly child interaction / placement test to assign optimal developmental stream.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">
                      4
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-primary font-bold">Offer Letter &amp; Enrolment</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                        Formal admission package issued with syllabus, uniforms, and fee billings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Counselors Card */}
              <div className="bg-primary text-on-primary rounded-xl p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[24px]">forum</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-primary font-bold">Need Quick Clarification?</h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary/80">
                  Our admissions counselors can assist with class placement guidance, documentation questions, or bus transit routes.
                </p>
                <div className="flex flex-col gap-2.5">
                  <a
                    className="w-full py-2.5 px-4 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 hover:bg-tertiary-fixed-dim transition-colors shadow-sm"
                    href="https://wa.me/233241234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span> Chat on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsStatusModalOpen(true)}
                    className="w-full py-2.5 px-4 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary rounded-lg font-label-lg text-label-lg text-center transition-colors font-semibold"
                  >
                    Check Existing Reference Status
                  </button>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-5 flex items-center gap-3 border border-surface-container-high/40">
                <span className="material-symbols-outlined text-primary text-[28px] shrink-0">military_tech</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  "Empowering each learner to excel with a disciplined Mind, compassionate Heart, and industrious Hands."
                </p>
              </div>

            </aside>
          </div>
        </main>
      </div>

      {/* ==================== STATUS CHECKER MODAL ==================== */}
      {isStatusModalOpen && (
        <div className="fixed inset-0 z-[99999] bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container-high/60 max-w-lg w-full p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-surface-container-high/40 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">fact_check</span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Track Admission Application
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsStatusModalOpen(false);
                  setStatusSearchResult(null);
                }}
                className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Enter your official Reference Token (e.g. <span className="font-mono font-bold text-primary">CP-2026-9041</span>) or candidate surname to verify current review stage.
            </p>

            <form onSubmit={handleStatusLookup} className="flex gap-2">
              <input
                type="text"
                value={statusSearchCode}
                onChange={(e) => setStatusSearchCode(e.target.value)}
                placeholder="Enter Reference Code..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-surface-container-low font-mono font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-primary border border-surface-container-high/50 uppercase"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold hover:bg-primary-container transition-colors shadow-sm"
              >
                Look Up
              </button>
            </form>

            {/* Quick Demo Reference Pill Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-on-surface-variant">
              <span>Quick Demo Tokens:</span>
              <button
                type="button"
                onClick={() => {
                  setStatusSearchCode("CP-2026-9041");
                  setStatusSearchResult({
                    found: true,
                    name: "Kofi Owusu",
                    classTarget: "Primary 2",
                    status: "Pending Document Vetting",
                    code: "CP-2026-9041",
                    submittedAt: "Today at 08:30 GMT",
                  });
                }}
                className="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high font-mono font-bold text-primary"
              >
                CP-2026-9041
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatusSearchCode("CP-2026-8820");
                  setStatusSearchResult({
                    found: true,
                    name: "Ama Serwaa",
                    classTarget: "Primary 4",
                    status: "Assessment Scheduled",
                    code: "CP-2026-8820",
                    submittedAt: "Yesterday at 14:15 GMT",
                  });
                }}
                className="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high font-mono font-bold text-primary"
              >
                CP-2026-8820
              </button>
            </div>

            {/* Result Box */}
            {statusSearchResult && (
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container-high/60 flex flex-col gap-2 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">{statusSearchResult.code}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
                    {statusSearchResult.status}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    {statusSearchResult.name}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Applying for: <strong>{statusSearchResult.classTarget}</strong>
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px] mt-1">
                    Logged: {statusSearchResult.submittedAt}
                  </span>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2 border-t border-surface-container-high/40">
              <button
                type="button"
                onClick={() => {
                  setIsStatusModalOpen(false);
                  setStatusSearchResult(null);
                }}
                className="px-5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
