"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SysadminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.includes("/login")) {
    return <>{children}</>;
  }

  const navItems = [
    { label: "Dashboard", href: "/sysadmin", icon: "grid_view", exact: true },
    { label: "User Provisioning", href: "/sysadmin/provisioning", icon: "badge", exact: false },
    { label: "Feature Flags", href: "/sysadmin/features", icon: "toggle_on", exact: false },
    { label: "Change Requests", href: "/sysadmin/changes", icon: "published_with_changes", exact: false },
    { label: "SLO Tracker", href: "/sysadmin/tracker", icon: "monitoring", exact: false },
    { label: "Integrations", href: "/sysadmin/integrations", icon: "hub", exact: false },
    { label: "Audit Logs", href: "/sysadmin/audit", icon: "receipt_long", exact: false },
  ];

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      {/* Super Admin Ops Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-white/10">
        <div className="flex flex-col">
          {/* Header Branding */}
          <Link href="/sysadmin" className="h-16 px-gutter flex items-center gap-space-sm bg-primary-container border-b border-white/10">
            <span className="material-symbols-outlined text-secondary-fixed text-headline-sm">
              terminal
            </span>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg text-on-primary leading-tight font-bold">
                Carepoint Ops
              </span>
              <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">
                Control Core
              </span>
            </div>
          </Link>

          <div className="px-gutter pt-space-lg pb-space-sm">
            <span className="font-label-sm text-label-sm uppercase text-primary-fixed-dim tracking-wider font-bold">
              Infrastructure &amp; Operations
            </span>
          </div>

          {/* Ops Navigation */}
          <nav className="flex flex-col gap-1 px-space-md">
            {navItems.map((item) => {
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-space-sm px-space-md py-2.5 rounded-lg transition-colors font-label-md text-label-md ${
                    isActive
                      ? "bg-primary-container text-on-primary font-bold shadow-xs border border-white/20"
                      : "text-primary-fixed hover:bg-primary-container/60 hover:text-on-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Security Access Notice */}
        <div className="p-space-md m-space-md rounded-xl bg-primary-container text-on-primary border border-white/10">
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-body-md">
              shield_lock
            </span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-primary uppercase tracking-wide font-bold">
                Access Notice
              </span>
              <span className="font-body-sm text-body-sm text-primary-fixed-dim text-[11px] leading-tight mt-space-xs">
                Configuration Authority Only • Approval Authority Held by Principal
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Viewport */}
      <div className="pl-72 w-full flex flex-col min-h-screen">
        {/* Fixed Topbar */}
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter border-b border-outline-variant/20">
          <div className="flex items-center gap-space-md">
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary leading-none font-bold">
                Carepoint Community School
              </span>
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider mt-0.5">
                Super Admin Console - SysOps Tier 0
              </span>
            </div>
            <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">
                US-EAST-ACC-POD01 • Production Healthy
              </span>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="hidden md:flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-space-md py-space-xs rounded-lg">
              <span className="material-symbols-outlined text-body-sm text-on-surface-variant">
                schedule
              </span>
              <span className="tabular-nums">Accra Time: 14:28:40 GMT</span>
            </div>

            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="text-right hidden lg:flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface leading-tight font-bold">
                  Ing. Kwabena Boateng
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  SysOps Lead
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <Link
                href="/sysadmin/login"
                className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                title="Lock Console"
              >
                <span className="material-symbols-outlined text-[20px]">logout</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="relative pt-20 w-full px-space-lg pb-space-xl bg-surface flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
