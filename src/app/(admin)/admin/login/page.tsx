"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("e.appiah@carepoint.edu.gh");
  const [password, setPassword] = useState("");
  const [totp, setTotp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(45);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "error" | "success"; message: string } | null>(null);

  const totpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTotp(["", "", "", "", "", ""]);
          totpRefs[0].current?.focus();
          return 45;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTotpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[value.length - 1];
    }
    const newTotp = [...totp];
    newTotp[index] = value;
    setTotp(newTotp);

    if (value && index < 5) {
      totpRefs[index + 1].current?.focus();
    }
  };

  const handleTotpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !totp[index] && index > 0) {
      totpRefs[index - 1].current?.focus();
    }
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    const totpVal = totp.join("");
    setTimeout(() => {
      setLoading(false);
      if (totpVal.length < 6) {
        setAlert({
          type: "error",
          message: "Incomplete TOTP key. Please enter the full 6-digit rolling authentication code (or any 6 digits for testing).",
        });
      } else {
        setAlert({
          type: "success",
          message: "Identity verified. Handing off cryptographic certificate to NaSIA Admin Cluster Pod A...",
        });
        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 800);
      }
    }, 900);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-space-lg bg-surface">
      <div className="flex flex-col w-full items-center justify-center py-space-md">
        {/* Subtle decorative ambient orbs */}
        <div className="relative w-full max-w-4xl flex flex-col items-center">
          <div className="absolute -top-16 -left-12 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 -right-16 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

          {/* Institutional Tricolor Accent Bar */}
          <div className="w-full max-w-xl h-1.5 flex rounded-t-xl overflow-hidden shadow-sm">
            <div className="w-1/3 bg-primary"></div>
            <div className="w-1/3 bg-secondary"></div>
            <div className="w-1/3 bg-tertiary-container"></div>
          </div>

          {/* Main Administrative Gateway Card */}
          <div className="w-full max-w-xl bg-surface-container-lowest rounded-b-xl shadow-xl p-space-md sm:p-space-xl flex flex-col relative z-10">
            {/* Seal & Institutional Branding Header */}
            <div className="flex flex-col items-center text-center">
              {/* School Crest/Insignia */}
              <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center p-2 shadow-sm relative group mb-space-sm">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-inner">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                </div>
                <span className="absolute bottom-0 right-1 w-5 h-5 bg-tertiary-fixed-dim rounded-full flex items-center justify-center text-tertiary shadow-sm" title="Active Sentinel Encryption">
                  <span className="material-symbols-outlined text-xs font-bold">verified_user</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-1">
                <span>Mind</span>
                <span className="text-outline-variant">•</span>
                <span>Heart</span>
                <span className="text-outline-variant">•</span>
                <span>Hands</span>
              </div>
              <h1 className="font-headline-md text-headline-md sm:font-headline-lg sm:text-headline-lg text-primary tracking-tight">
                Executive Administration &amp; Principal Portal
              </h1>
              <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                <span>Secure Single Sign-On • NaSIA Tier-4 Institutional Gateway</span>
              </div>
            </div>

            {/* Compliance & Node Perimeter Status */}
            <div className="mt-space-md bg-surface-container-low rounded-lg p-3 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wide">FIPS 140-3 Compliant</span>
                  <span className="font-label-sm text-label-sm text-outline-variant">•</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Active Perimeter IP Restriction:</span>
                </div>
                <p className="font-body-sm text-body-sm text-primary font-semibold truncate">
                  Accra Campus Pod A (Subnet 10.142.4.0/24)
                </p>
              </div>
            </div>

            {/* Authentication Form */}
            <form className="mt-space-lg flex flex-col gap-space-md" onSubmit={handleAuth}>
              {/* Institutional ID / Email Field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-label-lg text-label-lg text-on-surface flex items-center gap-1" htmlFor="admin-email">
                    Institutional Email / Official ID
                    <span className="text-secondary font-bold">*</span>
                  </label>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">e.g. e.appiah@carepoint.edu.gh</span>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 material-symbols-outlined text-outline pointer-events-none text-xl">badge</span>
                  <input
                    id="admin-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.appiah@carepoint.edu.gh"
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-11 pr-4 py-2.5 rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-low transition-colors"
                  />
                </div>
              </div>

              {/* Master Password Field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-label-lg text-label-lg text-on-surface flex items-center gap-1" htmlFor="admin-pwd">
                    Master Access Passphrase
                    <span className="text-secondary font-bold">*</span>
                  </label>
                  <a className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors" href="#">Reset key?</a>
                </div>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 material-symbols-outlined text-outline pointer-events-none text-xl">key</span>
                  <input
                    id="admin-pwd"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••••••"
                    className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-11 pr-11 py-2.5 rounded-lg shadow-sm focus:outline-none focus:bg-surface-container-low transition-colors font-mono"
                  />
                  <button
                    type="button"
                    aria-label="Toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-outline hover:text-on-surface focus:outline-none transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">{showPassword ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
              </div>

              {/* Two-Factor MFA Segment */}
              <div className="mt-1 bg-surface-container-high/60 rounded-xl p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">phonelink_lock</span>
                    <span className="font-label-lg text-label-lg text-primary">Two-Factor Cryptographic TOTP</span>
                  </div>
                  {/* Live Active Timeout Timer */}
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-lowest shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-sm animate-spin" style={{ animationDuration: "3s" }}>history</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                      Expires: <strong className="text-secondary">{timeLeft}s</strong>
                    </span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Enter 6-digit rolling code generated via physical YubiKey or registered authenticator app:
                </p>

                {/* 6-Digit TOTP Matrix */}
                <div className="flex items-center justify-between gap-2 max-w-sm mx-auto w-full pt-1">
                  {[0, 1, 2].map((idx) => (
                    <input
                      key={idx}
                      ref={totpRefs[idx]}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={totp[idx]}
                      onChange={(e) => handleTotpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleTotpKeyDown(idx, e)}
                      className="w-11 h-12 text-center font-headline-sm text-headline-sm font-bold text-primary bg-surface-container-lowest rounded-lg shadow-sm focus:outline-none focus:bg-primary-fixed transition-colors"
                    />
                  ))}
                  <span className="text-outline font-bold select-none">-</span>
                  {[3, 4, 5].map((idx) => (
                    <input
                      key={idx}
                      ref={totpRefs[idx]}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={totp[idx]}
                      onChange={(e) => handleTotpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleTotpKeyDown(idx, e)}
                      className="w-11 h-12 text-center font-headline-sm text-headline-sm font-bold text-primary bg-surface-container-lowest rounded-lg shadow-sm focus:outline-none focus:bg-primary-fixed transition-colors"
                    />
                  ))}
                </div>
              </div>

              {/* Feedback alert placeholder */}
              {alert && (
                <div className={`rounded-lg p-3 font-body-sm text-body-sm flex items-center gap-2 ${
                  alert.type === "error"
                    ? "bg-secondary-fixed text-on-secondary-fixed"
                    : "bg-tertiary-fixed text-on-tertiary-fixed"
                }`}>
                  <span className="material-symbols-outlined text-secondary">
                    {alert.type === "error" ? "error" : "check_circle"}
                  </span>
                  <span>{alert.message}</span>
                </div>
              )}

              {/* Primary Action Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-2 py-3 px-6 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all ${
                  loading ? "opacity-75" : ""
                }`}
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">token</span>
                    <span>Authenticate &amp; Access Command Center</span>
                  </>
                )}
              </button>
            </form>

            {/* Institutional Direct Dial Support & Helpdesk */}
            <div className="mt-space-lg pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-surface-container-low/50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-primary text-lg">support_agent</span>
                <span>Emergency Bypass / IT Command:</span>
              </div>
              <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-secondary-container transition-colors py-1 px-2.5 rounded-full bg-surface-container-lowest shadow-sm" href="tel:+233240001200">
                <span className="material-symbols-outlined text-sm font-bold">call</span>
                <span>+233 24 000 1200</span>
              </a>
            </div>

            {/* Statutory Audit Regulatory Disclaimer */}
            <div className="mt-space-md pt-3 text-center">
              <p className="font-label-sm text-label-sm text-outline leading-relaxed max-w-lg mx-auto">
                Authorized statutory administrative access only. All actions are logged, session-recorded, and permanently audited under Ghana National Schools Inspectorate Authority (NaSIA) &amp; Ghana Education Service (GES) cybersecurity protocols.
              </p>
            </div>
          </div>

          {/* Security Tier Metadata Footer Badges */}
          <div className="w-full max-w-xl mt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-2">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-tertiary-container">lock</span>
              <span>256-Bit Quantum TLS</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Session ID:</span>
              <span className="font-mono text-outline uppercase tracking-wider">CP-SEC-9844-GH</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
