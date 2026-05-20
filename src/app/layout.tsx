import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Babuserf — Automate Any Website. See Every Step.",
  description: "The observable automation platform. Playwright + n8n + Cloud Run. Automate trading, CRM, social media — any website without an API. By Alibabu.",
  keywords: ["automation", "playwright", "n8n", "tradingview", "browser automation", "SaaS", "trading bot"],
  openGraph: {
    title: "Babuserf — Automate Any Website",
    description: "Observable browser automation platform by Alibabu",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
