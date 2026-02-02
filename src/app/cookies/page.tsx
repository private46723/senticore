'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie, Settings, Shield, Info, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookiePolicy() {
  const cookieTypes = [
    {
      title: "Strictly Necessary",
      icon: <Shield className="w-5 h-5 text-primary" />,
      description: "Essential for core platform functionality including authentication, CSRF protection, and session persistence. These cannot be disabled.",
      examples: ["auth_token", "session_id", "csrf_token"]
    },
    {
      title: "Operational Analysis",
      icon: <Settings className="w-5 h-5 text-primary" />,
      description: "Helps us understand platform performance and user interaction patterns to optimize our SOC dashboard responsiveness.",
      examples: ["_ga", "_senticore_telemetry"]
    },
    {
      title: "Preferences",
      icon: <Cookie className="w-5 h-5 text-primary" />,
      description: "Enables the platform to remember your localized settings, such as timezone (critical for incident timestamps) and UI language.",
      examples: ["pref_timezone", "ui_theme"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-primary/30">
      <nav className="py-6 px-10 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
              <path d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 L50 5Z" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" className="text-primary" />
              <path d="M50 15 L82 32.5 V67.5 L50 85 L18 32.5 V32.5 L50 15Z" className="fill-primary" />
              <path d="M50 25 L72 37.5 V62.5 L50 75 L28 62.5 V37.5 L50 25Z" fill="white" />
            </svg>
          </div>
          <span className="text-xl font-black uppercase tracking-tighter">Senti<span className="text-primary">core</span></span>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="text-zinc-400 hover:text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </nav>

      <main className="container mx-auto px-6 py-20 max-w-5xl">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Cookie className="w-12 h-12 text-primary" />
            <h1 className="text-6xl font-black tracking-tight uppercase">Cookie <span className="text-primary italic">Policy</span></h1>
          </div>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">
            This policy explains how Senticore utilizes cookies and similar tracking technologies to ensure a secure and optimized experience across our global security infrastructure.
          </p>
        </header>

        <div className="space-y-20">
          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Info className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">1. Technical Overview</h2>
            </div>
            <p className="text-zinc-300">Cookies are small data fragments stored on your device that allow our platform to recognize authorized personnel and maintain state. We utilize both first-party and third-party cookies strictly for functional and analytical purposes.</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieTypes.map((type, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
                <div className="mb-6">{type.icon}</div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{type.title}</h3>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Key Identifiers</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((ex, j) => (
                      <span key={j} className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/5 text-zinc-300">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Settings className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">2. Preference Management</h2>
            </div>
            <p className="text-zinc-300">You can manage your cookie preferences through your browser settings. However, disabling "Strictly Necessary" cookies will result in complete loss of platform access, as we cannot authenticate your session or verify CSRF tokens.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-white/5 bg-white/5 rounded-xl">
                <h4 className="text-white font-bold mb-2">Browser Control</h4>
                <p className="text-sm text-zinc-400">Settings &gt; Privacy & Security &gt; Cookies</p>
              </div>
              <div className="p-6 border border-white/5 bg-white/5 rounded-xl">
                <h4 className="text-white font-bold mb-2">Do Not Track (DNT)</h4>
                <p className="text-sm text-zinc-400">Senticore respects global DNT browser signals.</p>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 p-12 rounded-3xl text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Data Integrity Guarantee</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Senticore cookies are encrypted and never contain PII (Personally Identifiable Information) in plaintext. We never sell cookie-derived data to third-party marketing entities.</p>
          </section>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.5em]">
          Cookie Framework v2.1 • © 2025 Senticore Security Global
        </div>
      </main>
    </div>
  );
}
