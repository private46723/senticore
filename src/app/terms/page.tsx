'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Gavel, ShieldAlert, Cpu, Scale, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsOfService() {
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

      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Gavel className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-black tracking-tight uppercase">Terms of <span className="text-primary italic">Service</span></h1>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            These Terms of Service govern your engagement with Senticore Security Global. By utilizing our platforms, SOC services, or research data, you agree to abide by these enterprise-grade legal requirements.
          </p>
        </header>

        <div className="space-y-16 text-zinc-300 leading-relaxed">
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <Cpu className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">1. Service Scope & SLAs</h2>
            </div>
            <p>Senticore provides Managed Security Services (MSSP) and Security Operations Center (SOC) functions. All primary services are governed by an individual <span className="text-white">Service Level Agreement (SLA)</span> which defines response times, availability, and specific technical parameters for Blue Team operations.</p>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5">
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 uppercase font-black">L1/L2 Response SLA</span>
                  <span className="text-primary font-bold">15 Minutes</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 uppercase font-black">Critical Incident Escalation</span>
                  <span className="text-primary font-bold">Immediate</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 uppercase font-black">Platform Uptime</span>
                  <span className="text-primary font-bold">99.99%</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <ShieldAlert className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">2. Acceptable Use Policy</h2>
            </div>
            <p>Senticore Global Intel and operational platforms are provided for authorized defensive purposes only. Users are strictly prohibited from:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Attempting to reverse engineer Senticore "Precision AI" algorithms or detection logic.</li>
              <li>Using our research data to facilitate unauthorized offensive operations.</li>
              <li>Accessing unauthorized segments of the Senticore SOC management console.</li>
              <li>Violating any local or international cyber-laws while using our services.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">3. Limitation of Liability</h2>
            </div>
            <p>While Senticore provides elite defensive monitoring, the cybersecurity landscape is inherently unpredictable. Senticore is not liable for data loss or operational disruptions resulting from zero-day vulnerabilities, nation-state attacks, or client failure to implement Senticore-provided remediation advice.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">4. Global Jurisdictions</h2>
            </div>
            <p>These terms are governed by the laws of the jurisdiction in which the specific Senticore contracting entity is located. Any disputes arising from these terms will be resolved through professional arbitration in accordance with global commercial standards.</p>
          </section>
        </div>

        <div className="mt-32 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.4em]">
          Version 1.4 • Effective January 2025 • © Senticore Security Global
        </div>
      </main>
    </div>
  );
}
