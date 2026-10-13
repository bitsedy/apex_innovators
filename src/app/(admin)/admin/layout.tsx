"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCarepointStore } from "@/store/useCarepointStore";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.includes("/login")) {
    return <>{children}</>;
  }

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: "dashboard", exact: true },
    { label: "Approvals Queue", href: "/admin/approvals", icon: "fact_check", badge: "12", exact: false },
    { label: "Principal Inbox", href: "/principal", icon: "move_to_inbox", badge: "5", exact: false },
    { label: "Admissions Review", href: "/admin/admissions", icon: "how_to_reg", badge: "28", exact: false },
    { label: "Student Records", href: "/admin/wards", icon: "badge", exact: false },
    { label: "User Management", href: "/admin/users", icon: "manage_accounts", exact: false },
    { label: "Reports & Analytics", href: "/admin/reports", icon: "analytics", exact: false },
    { label: "School Settings", href: "/admin/settings", icon: "tune", exact: false },
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      {/* Institutional Admin Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between border-r border-outline-variant/30">
        <div className="flex flex-col">
          {/* Brand header */}
          <Link href="/admin" className="h-20 px-space-lg flex items-center gap-space-sm bg-surface-container-lowest border-b border-outline-variant/20">
            <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-primary uppercase tracking-tight font-bold">
                Carepoint
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Mind • Heart • Hands
              </span>
            </div>
          </Link>

          {/* Academic Term Info */}
          <div className="px-space-md py-space-sm">
            <div className="px-space-md py-space-xs bg-surface-container-low rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface font-medium">
                  Session 2026/26 Term 2
                </span>
              </div>
              <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">
                Wk 8
              </span>
            </div>
          </div>

          {/* Module Navigation */}
          <nav className="flex flex-col gap-1 px-space-md mt-space-xs">
            {navItems.map((item) => {
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-space-md py-2.5 rounded-xl transition-all font-label-md text-label-md ${
                    isActive
                      ? "bg-primary-container text-on-primary font-bold shadow-xs"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-secondary-container text-on-secondary"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Lockdown & Emergency Drill Box */}
        <div className="p-space-md bg-surface-container-lowest border-t border-outline-variant/20 flex flex-col gap-space-xs">
          <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs border border-outline-variant/30">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Campus Protocol
              </span>
              <span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                Normal
              </span>
            </div>
            <button
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm hover:bg-secondary-container transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">lock_open</span>
              <span>Emergency Lockdown</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Viewport Content */}
      <div className="pl-72 w-full flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg border-b border-outline-variant/20">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2 px-space-sm py-1.5 rounded-full bg-surface-container-high">
              <span className="material-symbols-outlined text-primary text-[18px]">
                verified
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                NaSIA / GES Accredited • Level 4
              </span>
            </div>
            <div className="hidden xl:flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
              <span>Executive Oversight System</span>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            <button
              onClick={() => useCarepointStore.getState().openNotificationCenter()}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors relative shadow-sm cursor-pointer"
              title="Open Notifications"
              aria-label="Notifications"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary-container"></span>
            </button>
            <div className="flex items-center gap-3 pl-space-sm">
              <div className="flex flex-col text-right hidden sm:flex">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">
                  Dr. Elizabeth Appiah
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Headmaster or Headteacher / Principal
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <Link
                href="/admin/login"
                className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                title="Lock Session"
              >
                <span className="material-symbols-outlined text-[20px]">logout</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="relative pt-24 w-full px-space-lg pb-space-xl bg-surface flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
