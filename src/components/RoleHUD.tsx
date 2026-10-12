"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCarepointStore } from "@/store/useCarepointStore";

export function RoleHUD() {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const {
    isTeacherClockedIn,
    clockInTime,
    clockIn,
    isMismatchAlertActive,
    triggerMismatchAlert,
    clearMismatchAlert,
  } = useCarepointStore();

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleSimClockIn = () => {
    clockIn();
    showToast("Teacher Clocked-In: GPS Geofence Verified at 07:15 GMT");
  };

  const handleSimAlert = () => {
    triggerMismatchAlert();
    router.push("/gate/alert");
    showToast("Safeguarding Alert Triggered: Unauthorized Custody Match");
  };

  // Determine current active portal label
  let portalName = "Public Marketing";
  if (pathname.startsWith("/admin")) portalName = "Admin Command";
  else if (pathname.startsWith("/principal")) portalName = "Principal Studio";
  else if (pathname.startsWith("/staff")) portalName = "Staff Portal";
  else if (pathname.startsWith("/parent")) portalName = "Parent Portal";
  else if (pathname.startsWith("/gate")) portalName = "Gate Security Kiosk";
  else if (pathname.startsWith("/sysadmin")) portalName = "Super Admin Telemetry";

  return (
    <>
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-6 right-6 z-[9999999] bg-primary text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-white/20 animate-bounce">
          <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
            verified
          </span>
          <span className="text-sm font-semibold">{toastMsg}</span>
        </div>
      )}

      {/* Floating Pill */}
      <div className="fixed bottom-5 right-5 z-[999999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 bg-primary text-white px-4 py-2 rounded-full shadow-2xl border border-white/20 hover:scale-105 transition-transform"
          type="button"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider">Demo HUD</span>
          <span className="text-xs text-primary-fixed-dim">| {portalName}</span>
          <span className="material-symbols-outlined text-[18px]">
            {isOpen ? "close" : "tune"}
          </span>
        </button>

        {/* Drawer Panel */}
        {isOpen && (
          <div className="absolute bottom-12 right-0 w-80 bg-white text-on-surface rounded-2xl shadow-2xl border border-surface-container-high p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-surface-container-low pb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  school
                </span>
                <span className="font-bold text-xs uppercase tracking-wider text-primary">
                  Carepoint Navigator
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-container-low text-primary">
                Next.js App
              </span>
            </div>

            <div className="text-xs text-on-surface-variant">
              Active Surface: <strong className="text-primary">{portalName}</strong>
            </div>

            <div className="text-[11px] font-bold uppercase text-on-surface-variant tracking-wider mt-1">
              Switch Role Portal
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-semibold border transition-all ${
                  pathname.startsWith("/admin")
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-lowest text-on-surface border-surface-container hover:bg-surface-container-low"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
                Admin
              </Link>

              <Link
                href="/principal"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-semibold border transition-all ${
                  pathname.startsWith("/principal")
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-lowest text-on-surface border-surface-container hover:bg-surface-container-low"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">gavel</span>
                Principal
              </Link>

              <Link
                href="/staff"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-semibold border transition-all ${
                  pathname.startsWith("/staff")
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-lowest text-on-surface border-surface-container hover:bg-surface-container-low"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">school</span>
                Teacher
              </Link>

              <Link
                href="/parent"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-semibold border transition-all ${
                  pathname.startsWith("/parent")
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-lowest text-on-surface border-surface-container hover:bg-surface-container-low"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">family_restroom</span>
                Parent
              </Link>

              <Link
                href="/gate"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-semibold border transition-all ${
                  pathname.startsWith("/gate")
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-lowest text-on-surface border-surface-container hover:bg-surface-container-low"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span>
                Gate Kiosk
              </Link>

              <Link
                href="/sysadmin"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-semibold border transition-all ${
                  pathname.startsWith("/sysadmin")
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container-lowest text-on-surface border-surface-container hover:bg-surface-container-low"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">terminal</span>
                Super Admin
              </Link>
            </div>

            <div className="border-t border-surface-container-low pt-2 flex flex-col gap-1.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  useCarepointStore.getState().openNotificationCenter();
                }}
                type="button"
                className="w-full py-2 px-3 text-left rounded-lg bg-surface-container-low hover:bg-surface-container text-primary text-xs font-bold flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">notifications_active</span>
                  Notifications Center
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-secondary text-white text-[10px] font-bold">
                  3
                </span>
              </button>

              <button
                onClick={handleSimClockIn}
                type="button"
                className="w-full py-2 px-3 text-left rounded-lg bg-surface-container-low hover:bg-surface-container text-primary text-xs font-bold flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  Simulate Clock-In
                </span>
                <span className="text-[10px] text-tertiary-container font-extrabold">
                  {isTeacherClockedIn ? "Active" : "Ready"}
                </span>
              </button>

              <button
                onClick={handleSimAlert}
                type="button"
                className="w-full py-2 px-3 text-left rounded-lg bg-error-container hover:bg-error text-error hover:text-white transition-colors text-xs font-bold flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">emergency</span>
                  Trigger Mismatch Alert
                </span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="w-full py-2 px-3 text-center rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold"
              >
                ← Back to Public Website
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
