'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Globe, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-black tracking-tight uppercase">Privacy <span className="text-primary italic">Policy</span></h1>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            At Senticore Security Global, we treat privacy as a fundamental component of enterprise security. This document details our data handling practices for clients, partners, and users of our digital infrastructure.
          </p>
        </header>

        <div className="space-y-16 text-zinc-300 leading-relaxed">
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">1. Data Governance Framework</h2>
            </div>
            <p>Senticore operates under a strict data governance framework designed for the specialized needs of cybersecurity operations. We collect and process data strictly for the purposes of threat detection, risk management, and service improvement.</p>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-white font-bold uppercase text-sm">Processed Data Categories:</h3>
              <ul className="list-disc pl-6 space-y-3 text-sm">
                <li><span className="text-white font-medium">Operational Telemetry:</span> System logs, network metadata, and endpoint telemetry required for SOC L1/L2 monitoring.</li>
                <li><span className="text-white font-medium">Enterprise Identifiers:</span> Corporate contact details, API keys, and infrastructure identifiers for secure platform access.</li>
                <li><span className="text-white font-medium">Technical Support Data:</span> Information shared during incident response consultations or technical troubleshooting sessions.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">2. Security & Encryption Standards</h2>
            </div>
            <p>As a global security leader, we utilize military-grade encryption for all data at rest and in transit. Our infrastructure is audited against SOC 2 Type II and ISO 27001 standards to ensure the highest level of integrity.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>AES-256 encryption for all database records.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>TLS 1.3 protocol for all external transmissions.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Strict multi-factor authentication for all Senticore personnel.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Automated threat hunting on our own internal systems.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <Globe className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">3. International Compliance</h2>
            </div>
            <p>We adhere to international data protection regulations including <span className="text-white">GDPR</span> (European Union), <span className="text-white">CCPA</span> (California), and <span className="text-white">HIPAA</span> (Healthcare) where applicable. We utilize Standard Contractual Clauses (SCCs) for cross-border data transfers to ensure consistent protection regardless of location.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">4. Retention & Deletion</h2>
            </div>
            <p>Client operational data is retained only for the duration specified in your Service Level Agreement (SLA). Upon contract termination, data is purged using forensic-grade sanitization techniques to ensure it cannot be recovered.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">5. Data Protection Officer</h2>
            <p>Questions regarding our privacy practices or requests to exercise your data rights should be directed to our Global Compliance Office:</p>
            <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5 inline-block">
              <p className="text-white font-black uppercase tracking-tight">Senticore Compliance Hub</p>
              <p className="text-primary font-bold">compliance@senticore.com</p>
            </div>
          </section>
        </div>

        <div className="mt-32 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.4em]">
          Version 2.1 • Effective January 2025 • © Senticore Security Global
        </div>
      </main>
    </div>
  );
}
