import type { Metadata } from "next";
import "./globals.css";
import { RoleHUD } from "@/components/RoleHUD";
import { NotificationCenter } from "@/components/NotificationCenter";

export const metadata: Metadata = {
  title: "Carepoint Community School — Management System",
  description: "Next.js Frontend for Carepoint Community School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-surface text-on-surface">
        {children}
        <NotificationCenter />
        <RoleHUD />
      </body>
    </html>
  );
}
