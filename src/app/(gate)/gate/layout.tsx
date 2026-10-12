"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GateKioskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.includes("/login")) {
    return <>{children}</>;
  }

  const navItems = [
    { label: "Scanner", href: "/gate", pathKey: "/gate" },
    { label: "Verification", href: "/gate/verify", pathKey: "/gate/verify" },
    { label: "Pickup Log", href: "/gate/log", pathKey: "/gate/log" },
    { label: "Security Alerts", href: "/gate/alert", pathKey: "/gate/alert" },
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      {/* Touch-First Kiosk Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        {/* Accreditation Top Ribbon */}
        <div className="bg-primary text-on-primary px-margin h-8 flex items-center justify-between text-xs font-label-sm tracking-wider uppercase">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-sm text-tertiary-fixed">
              verified
            </span>
            <span>Ghana NaSIA Accredited Security Protocol - Level 3 Campus Safety</span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
              Accra Time: 14:28:09 GMT
            </span>
            <span className="text-outline-variant">|</span>
            <span className="text-tertiary-fixed font-bold">SECURE - ACTIVE PATROL</span>
          </div>
        </div>

        {/* Primary Kiosk Navigation Bar */}
        <div className="h-20 w-full px-margin flex items-center justify-between gap-space-md bg-surface-container-lowest">
          <div className="flex items-center gap-space-md">
            <div className="w-11 h-11 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-2xl">shield_person</span>
            </div>
            <div>
              <div className="flex items-center gap-space-xs">
                <h1 className="font-headline-sm text-headline-sm text-primary leading-none">
                  Carepoint Community School
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  Gate Turnstile A
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-0.5">
                Mind • Heart • Hands • Security &amp; Visitor Reception Hub
              </p>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <nav className="flex items-center bg-surface-container-low p-1.5 rounded-xl gap-1 shadow-sm">
            {navItems.map((item) => {
              const isActive =
                item.pathKey === "/gate"
                  ? pathname === "/gate"
                  : pathname.startsWith(item.pathKey);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-space-md py-space-sm rounded-lg transition-all flex items-center justify-center font-label-lg text-label-lg ${
                    isActive
                      ? "bg-primary-container text-on-secondary-container font-bold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Tools & Officer Profile */}
          <div className="flex items-center gap-space-md">
            <button
              className="flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-base">call</span>
              <span>Intercom</span>
            </button>
            <div className="h-8 w-px bg-surface-container-high"></div>
            <div className="flex items-center gap-space-sm">
              <div className="text-right leading-tight">
                <p className="font-label-md text-label-md text-on-surface font-bold">
                  Off. Emmanuel Tetteh
                </p>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  ID #SEC-08
                </span>
              </div>
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UcOOFjMJZVJ59Yh3L8LzZiUZO0hEp_GwwTgvCtTnWZfJagO3-7TaJ4bxUgdy1S0Qh8tAD2MH6qGl39TQi65jkrsFxWRv-PuCoY4nMUoIztIr-M-TCSylx_ZDc-MCAG1QUpd-D-vnuiKsvstaH_9Jq_M2glwv__1QoKqT23MMd4t5D_zr35wty3UKyOV57GvEWnMEmNaQqzHhM6qGSpm3xSDR4xv5NwnsbzLg4MTkwc1oa_otpV5DwCDA_KcraFD6DtOcNBhDHiNQ"
              />
            </div>
            <Link
              className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
              title="Lock Kiosk Terminal"
              href="/gate/login"
            >
              <span className="material-symbols-outlined text-xl">lock</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Touch-Friendly Viewport */}
      <main className="pt-32 pb-space-xl px-space-lg max-w-7xl mx-auto flex flex-col gap-space-lg">
        {children}
      </main>
    </div>
  );
}
