"use client";

import React from "react";
import Link from "next/link";

export default function PortalHubPage() {
  const portals = [
    {
      title: "Parent & Guardian Portal",
      desc: "Track child attendance, terminal academic reports, cafeteria balance, and digital afternoon gate passes.",
      href: "/parent/login",
      icon: "family_restroom",
      badge: "SMS OTP Verified",
      color: "border-primary/20 hover:border-primary",
      iconBg: "bg-primary text-white",
    },
    {
      title: "Faculty & Educator Portal",
      desc: "Record classroom attendance registers, gradebook assessments, health logs, and student welfare notices.",
      href: "/staff/login",
      icon: "school",
      badge: "Teacher Terminal",
      color: "border-secondary/20 hover:border-secondary",
      iconBg: "bg-secondary text-white",
    },
    {
      title: "Campus Gate & Security Kiosk",
      desc: "Touch-screen 2FA barcode scanner, guardian photo verification, and code amber custody alerts.",
      href: "/gate/login",
      icon: "shield_person",
      badge: "NaSIA Level 3 Kiosk",
      color: "border-tertiary-container/30 hover:border-tertiary-container",
      iconBg: "bg-primary-container text-white",
    },
    {
      title: "Executive Administration",
      desc: "Principal inbox, student master records, admissions intake pipeline, and institutional reports.",
      href: "/admin/login",
      icon: "admin_panel_settings",
      badge: "FIPS 140-3 Cryptographic MFA",
      color: "border-primary/30 hover:border-primary",
      iconBg: "bg-primary text-white",
    },
    {
      title: "Technical Operations Core",
      desc: "SysOps Tier-0 console, tenant provisioning, feature flags, infrastructure telemetry, and immutable audit logs.",
      href: "/sysadmin/login",
      icon: "terminal",
      badge: "Hardware Token Required",
      color: "border-outline-variant hover:border-primary",
      iconBg: "bg-primary text-secondary-fixed",
    },
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col justify-between py-12 px-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* Institutional Branding */}
        <div className="flex flex-col items-center text-center mb-10">
          <Link href="/" className="flex items-center gap-3 mb-4 group">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[28px] text-secondary-fixed">
                school
              </span>
            </div>
            <div className="text-left">
              <div className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                Carepoint Community School
              </div>
              <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest text-[11px]">
                Mind • Heart • Hands
              </div>
            </div>
          </Link>

          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight font-extrabold">
            Unified Institutional Portals
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">
            Select your authorized portal to sign in. Every session is encrypted, logged, and audited under Ghana National Schools Inspectorate Authority (NaSIA) protocols.
          </p>
        </div>

        {/* Portal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {portals.map((portal) => (
            <Link
              key={portal.title}
              href={portal.href}
              className={`p-6 rounded-2xl bg-surface-container-lowest border ${portal.color} shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${portal.iconBg} flex items-center justify-center shadow-sm`}>
                    <span className="material-symbols-outlined text-[24px]">
                      {portal.icon}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-bold">
                    {portal.badge}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                  {portal.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  {portal.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-surface-container-high/60 flex items-center justify-between text-primary font-label-md text-label-md font-bold group-hover:translate-x-1 transition-transform">
                <span>Access Gateway</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </Link>
          ))}

          {/* Public Admissions CTA Card */}
          <Link
            href="/admissions/apply"
            className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between group md:col-span-2"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-label-sm text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Admissions Cycle 2026/2027 Open
                </div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  New Prospective Student Application
                </h3>
                <p className="text-white/80 text-sm mt-1 max-w-xl">
                  Applying for Creche, Nursery, Kindergarten, Primary, or Junior High enrollment? Begin your application or check your submission status online.
                </p>
              </div>
              <div className="px-5 py-2.5 rounded-xl bg-secondary text-white font-bold text-sm shadow-md self-start md:self-auto flex items-center gap-2 group-hover:bg-secondary-container transition-colors">
                <span>Start Application</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-on-surface-variant flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="hover:text-primary transition-colors font-medium">
            ← Back to Public Website
          </Link>
          <span>•</span>
          <span>NaSIA Accredited • Level 4 Institutional Compliance</span>
          <span>•</span>
          <span>Emergency Desk: +233 (0) 30 123 4567</span>
        </div>
      </div>
    </div>
  );
}
