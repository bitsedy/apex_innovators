"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCarepointStore } from "@/store/useCarepointStore";

interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: string | number;
}

interface AppShellProps {
  role: "admin" | "principal" | "staff" | "gate" | "parent" | "sysadmin";
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const NAV_CONFIG: Record<string, NavItem[]> = {
  admin: [
    { label: "Dashboard", href: "/admin", icon: "dashboard" },
    { label: "Approvals Queue", href: "/admin/approvals", icon: "fact_check", badge: 12 },
    { label: "Principal Inbox", href: "/principal", icon: "move_to_inbox", badge: 5 },
    { label: "Admissions Review", href: "/admin/admissions", icon: "how_to_reg", badge: 28 },
    { label: "Student Records", href: "/admin/wards", icon: "badge" },
    { label: "User Management", href: "/admin/users", icon: "manage_accounts" },
    { label: "Reports & Analytics", href: "/admin/reports", icon: "analytics" },
    { label: "School Settings", href: "/admin/settings", icon: "tune" },
  ],
  principal: [
    { label: "Executive Inbox", href: "/principal", icon: "move_to_inbox", badge: 5 },
    { label: "Decision Studio", href: "/principal/decision", icon: "gavel" },
    { label: "School Overview", href: "/admin", icon: "dashboard" },
  ],
  staff: [
    { label: "Dashboard", href: "/staff", icon: "grid_view" },
    { label: "Attendance Entry", href: "/staff/attendance", icon: "fact_check" },
    { label: "Gradebook", href: "/staff/gradebook", icon: "menu_book" },
    { label: "Timetable Builder", href: "/staff/timetable", icon: "calendar_month" },
    { label: "Health Escalation", href: "/staff/health", icon: "medical_services" },
    { label: "Approvals Engine", href: "/staff/approvals", icon: "verified", badge: 3 },
  ],
  gate: [
    { label: "QR Scanner", href: "/gate", icon: "qr_code_scanner" },
    { label: "2FA Verification", href: "/gate/verify", icon: "verified_user" },
    { label: "Custody Alert", href: "/gate/alert", icon: "warning" },
    { label: "Pickup Log", href: "/gate/log", icon: "receipt_long" },
  ],
  parent: [
    { label: "Child Dashboard", href: "/parent", icon: "home" },
    { label: "Academics", href: "/parent/academics", icon: "menu_book" },
    { label: "Pickup Pass", href: "/parent/pickup", icon: "verified_user" },
    { label: "Messages & Welfare", href: "/parent/messages", icon: "chat_bubble" },
  ],
  sysadmin: [
    { label: "Telemetry Dashboard", href: "/sysadmin", icon: "terminal" },
    { label: "User Provisioning", href: "/sysadmin/provisioning", icon: "person_add" },
    { label: "Feature Flags", href: "/sysadmin/features", icon: "toggle_on" },
    { label: "Change Requests", href: "/sysadmin/changes", icon: "assignment" },
    { label: "API Integrations", href: "/sysadmin/integrations", icon: "hub" },
    { label: "System Audit Log", href: "/sysadmin/audit", icon: "history" },
  ],
};

export function AppShell({ role, title, subtitle, children }: AppShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const navItems = NAV_CONFIG[role] || [];
  const { isTeacherClockedIn, clockInTime } = useCarepointStore();

  const roleLabels = {
    admin: { name: "Dr. Elizabeth Appiah", title: "Headmaster or Headteacher / Administrator" },
    principal: { name: "Dr. Elizabeth Appiah", title: "Principal & Executive Authority" },
    staff: { name: "Mr. Ebenezer Abbey", title: "Class Master • Basic 4A" },
    gate: { name: "Officer Kwame Osei", title: "Front-Desk & Campus Security" },
    parent: { name: "Dr. Mensah Mansa", title: "Guardian of Akua Mansa (Basic 4A)" },
    sysadmin: { name: "SysAdmin Console", title: "Technical Infrastructure Layer" },
  };

  const user = roleLabels[role];

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest border-r border-surface-container-high z-40 flex flex-col justify-between shadow-xs">
        <div>
          {/* Brand Emblem */}
          <div className="h-20 px-6 flex items-center gap-3 border-b border-surface-container-low">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm text-primary uppercase tracking-tight">Carepoint</span>
              <span className="text-[11px] font-semibold text-on-surface-variant">Mind • Heart • Hands</span>
            </div>
          </div>

          {/* Academic Session Chip */}
          <div className="px-5 py-3">
            <div className="px-3.5 py-1.5 bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                <span className="text-xs font-semibold text-on-surface">Session 2026/26 Term 2</span>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                Wk 8
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 px-4 mt-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-medium text-xs transition-all ${
                    isActive
                      ? "bg-primary text-white font-bold shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-secondary-container text-white"
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

        {/* Bottom Safety & Lockdown Trigger */}
        <div className="p-4 bg-surface-container-lowest border-t border-surface-container-low flex flex-col gap-2">
          <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-2 border border-surface-container">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-on-surface-variant">Campus Protocol</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-tertiary-fixed text-on-tertiary-fixed">
                Normal
              </span>
            </div>
            <button
              onClick={() => router.push("/gate/alert")}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-secondary text-white text-xs font-bold hover:bg-secondary-container transition-colors shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px]">lock_open</span>
              <span>Emergency Lockdown</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Pane */}
      <div className="pl-72 flex-1 flex flex-col min-h-screen">
        {/* Top Header Bar */}
        <header className="fixed top-0 left-72 right-0 h-20 bg-surface/85 backdrop-blur-xl border-b border-surface-container-high z-30 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest">
              <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
              <span className="text-xs font-bold text-on-surface">NaSIA / GES Accredited • Level 4</span>
            </div>
            {title && (
              <span className="text-xs font-semibold text-on-surface-variant hidden md:inline">
                {title} {subtitle ? `• ${subtitle}` : ""}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {role === "staff" && isTeacherClockedIn && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Clocked-in at {clockInTime}</span>
              </div>
            )}

            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface text-xs font-semibold border border-surface-container transition-colors shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">home</span>
              <span>Public Site</span>
            </Link>

            <button
              onClick={() => useCarepointStore.getState().openNotificationCenter()}
              className="relative p-2 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer border border-surface-container shadow-xs"
              title="Open Notifications"
              aria-label="Notifications"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-secondary text-white text-[9px] font-bold flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile lockup */}
            <div className="flex items-center gap-3 pl-2 border-l border-surface-container">
              <div className="flex flex-col text-right hidden sm:flex">
                <span className="font-bold text-xs text-on-surface">{user.name}</span>
                <span className="text-[10px] text-on-surface-variant">{user.title}</span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm">
                <span className="material-symbols-outlined text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* Viewport Content */}
        <main className="pt-20 px-8 pb-16 flex-1 bg-surface">{children}</main>
      </div>
    </div>
  );
}
