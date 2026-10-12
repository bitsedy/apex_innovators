"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCarepointStore } from "@/store/useCarepointStore";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.includes("/login")) {
    return <>{children}</>;
  }

  const desktopNav = [
    { label: "Dashboard", href: "/parent", pathKey: "/parent", exact: true },
    { label: "Performance & Reports", href: "/parent/academics", pathKey: "/parent/academics", exact: false },
    { label: "Attendance & Welfare", href: "/parent/messages", pathKey: "/parent/messages", exact: false },
    { label: "Pickup Security", href: "/parent/pickup", pathKey: "/parent/pickup", exact: false },
  ];

  const mobileNav = [
    { label: "Child", href: "/parent", icon: "home", pathKey: "/parent", exact: true },
    { label: "Academics", href: "/parent/academics", icon: "menu_book", pathKey: "/parent/academics", exact: false },
    { label: "Welfare", href: "/parent/messages", icon: "health_and_safety", pathKey: "/parent/messages", exact: false },
    { label: "Pickup Pass", href: "/parent/pickup", icon: "verified_user", pathKey: "/parent/pickup", exact: false },
    { label: "Profile", href: "/parent#child", icon: "person", pathKey: "/parent#child", exact: false },
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col">
      {/* Fixed Institutional Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        {/* Academic Session Bar */}
        <div className="bg-primary-container text-on-primary border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between text-xs font-label-md">
            <div className="flex items-center gap-space-lg">
              <div className="flex items-center gap-space-xs font-medium">
                <span className="material-symbols-outlined text-sm text-tertiary-fixed">
                  school
                </span>
                <span>Term 1, 2026/2027 Academic Session • Active Week 8</span>
              </div>
              <div className="hidden md:flex items-center gap-space-xs text-primary-fixed">
                <span className="material-symbols-outlined text-sm text-secondary-fixed">
                  phone_in_talk
                </span>
                <span>Emergency: +233 (0) 30 123 4567</span>
              </div>
            </div>

            <div className="flex items-center gap-space-sm">
              <div className="flex items-center gap-space-xs bg-primary px-space-sm py-1 rounded text-on-primary cursor-pointer hover:bg-primary/80 transition-colors">
                <span className="material-symbols-outlined text-sm text-primary-fixed">
                  face
                </span>
                <span className="font-label-sm uppercase tracking-wider text-surface-variant">
                  Child:
                </span>
                <span className="font-label-sm font-bold text-surface-container-lowest">
                  Kofi Mensah (Basic 2 - Sunflower)
                </span>
                <span className="material-symbols-outlined text-sm text-outline-variant">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand & Desktop Navigation */}
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/parent" className="flex items-center gap-space-md">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-2xl">shield_person</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary leading-none">
                CAREPOINT
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Mind • Heart • Hands
              </span>
            </div>
          </Link>

          {/* Desktop Sub-Navigation Tabs */}
          <nav className="hidden xl:flex items-center gap-space-lg h-full">
            {desktopNav.map((tab) => {
              const isActive = tab.exact
                ? pathname === tab.pathKey
                : pathname.startsWith(tab.pathKey);

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`transition-colors py-2 font-label-lg text-label-lg ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-space-md">
            <button
              onClick={() => useCarepointStore.getState().openNotificationCenter()}
              aria-label="Notifications"
              title="Open Notifications"
              className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-secondary text-on-secondary rounded-full font-label-sm text-[10px] leading-tight flex items-center justify-center font-bold">
                3
              </span>
            </button>
            <div className="h-8 w-px bg-outline-variant/40 hidden sm:block"></div>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="text-right hidden sm:flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface font-bold">
                  Dr. Nana Mensah
                </span>
                <span className="font-label-sm text-[11px] text-on-surface-variant">
                  Guardian • Father
                </span>
              </div>
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UcOOFjMJZVJ59Yh3L8LzZiUZO0hEp_GwwTgvCtTnWZfJagO3-7TaJ4bxUgdy1S0Qh8tAD2MH6qGl39TQi65jkrsFxWRv-PuCoY4nMUoIztIr-M-TCSylx_ZDc-MCAG1QUpd-D-vnuiKsvstaH_9Jq_M2glwv__1QoKqT23MMd4t5D_zr35wty3UKyOV57GvEWnMEmNaQqzHhM6qGSpm3xSDR4xv5NwnsbzLg4MTkwc1oa_otpV5DwCDA_KcraFD6DtOcNBhDHiNQ"
              />
              <Link
                href="/parent/login"
                className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors"
                title="Sign Out"
              >
                <span className="material-symbols-outlined text-base">logout</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto px-space-md sm:px-space-lg pt-36 pb-24 md:pb-12 flex-1 flex flex-col gap-space-lg">
        {children}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(1,21,73,0.05)] border-t border-outline-variant/20">
        <div className="flex justify-around items-center h-16 px-space-xs">
          {mobileNav.map((tab) => {
            const isActive = tab.exact
              ? pathname === tab.pathKey
              : pathname.startsWith(tab.pathKey);

            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] flex-1 py-space-xs transition-colors ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">
                  {tab.icon}
                </span>
                <span className="font-label-sm text-label-sm mt-0.5">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Institutional Desktop Footer */}
      <footer className="w-full bg-surface-container-low mt-auto border-t border-outline-variant/30 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-lg">
            <div className="md:col-span-1">
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="material-symbols-outlined text-primary text-xl">
                  verified_user
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  Carepoint
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                Excellence in early, primary, and secondary education. Mind, Heart, and Hands nurtured for leadership.
              </p>
              <div className="flex items-center gap-space-xs text-on-tertiary-container font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span>256-Bit SSL Encrypted Session</span>
              </div>
            </div>

            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface mb-space-sm uppercase tracking-wider">
                Portal Assistance
              </h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    IT &amp; Parent Helpdesk
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Fee Payment Verification
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Busing &amp; Route Logistics
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    School Clinic &amp; Medical
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface mb-space-sm uppercase tracking-wider">
                Security &amp; Gate Desk
              </h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>Main Gate Post: Ext 104</li>
                <li>Security Coordinator: 020 000 1122</li>
                <li>Dispatch &amp; Pickup Desk: Ext 108</li>
                <li>Emergency Response: 030 123 4567</li>
              </ul>
            </div>

            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface mb-space-sm uppercase tracking-wider">
                Institutional Compliance
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-xs">
                Accredited by National Schools Inspectorate Authority (NaSIA) • Ghana Education Service (GES).
              </p>
              <div className="p-space-sm rounded-lg bg-surface-container border border-outline-variant/40">
                <span className="font-label-sm text-label-sm font-bold text-primary block">
                  Strict Parent Verification
                </span>
                <span className="font-body-sm text-[12px] text-on-surface-variant block">
                  Always present digital authorization code at afternoon gate checkout.
                </span>
              </div>
            </div>
          </div>

          <div className="pt-space-md border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
            <div>
              © 2026 Carepoint Community School. All Rights Reserved. National Schools Inspectorate Authority Compliant.
            </div>
            <div className="flex items-center gap-space-md font-label-sm text-label-sm">
              <a className="hover:text-primary transition-colors" href="#">
                Child Safeguarding
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Portal Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
