'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileCheck, ShieldCheck, ClipboardCheck, Globe, Activity, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ComplianceAudit() {
  const frameworks = [
    { name: "SOC 2 Type II", status: "Certified", detail: "Annual audit covering Security, Availability, and Confidentiality trust principles." },
    { name: "ISO/IEC 27001", status: "Compliant", detail: "International standard for information security management systems (ISMS)." },
    { name: "HIPAA / HITECH", status: "Certified", detail: "Ensures the security of PHI for healthcare enterprise partners." },
    { name: "GDPR / CCPA", status: "Validated", detail: "Global data protection compliance for EU and North American jurisdictions." }
  ];

  const auditSteps = [
    { step: "01", title: "Evidence Ingestion", desc: "Automated collection of control artifacts from infrastructure." },
    { step: "02", title: "Gap Analysis", desc: "AI-driven identification of control deficiencies." },
    { step: "03", title: "Remediation", desc: "Technical implementation of missing security controls." },
    { step: "04", title: "Final Attestation", desc: "Third-party validation and issuance of report." }
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
            <ClipboardCheck className="w-12 h-12 text-primary" />
            <h1 className="text-6xl font-black tracking-tight uppercase">Compliance <span className="text-primary italic">Audit</span></h1>
          </div>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">
            Senticore's Compliance Audit Service bridges the gap between complex regulatory requirements and technical operational reality. We provide continuous control monitoring and automated evidence collection for the modern enterprise.
          </p>
        </header>

        <div className="space-y-24">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((f, i) => (
              <div key={i} className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/10 hover:border-primary/40 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{f.name}</h3>
                  <span className="text-[10px] font-black bg-primary/20 text-primary px-3 py-1 rounded-full uppercase tracking-widest">{f.status}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </section>

          <section className="space-y-12">
            <div className="flex items-center gap-4 text-white">
              <Activity className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">The Audit Lifecycle</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {auditSteps.map((s, i) => (
                <div key={i} className="relative group">
                  <div className="text-5xl font-black text-white/5 group-hover:text-primary/10 transition-colors mb-4">{s.step}</div>
                  <h4 className="text-white font-black uppercase text-xs mb-2 tracking-widest">{s.title}</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#050505] p-12 rounded-3xl border border-white/10 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Terminal className="w-64 h-64 text-primary" />
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight flex items-center gap-4">
                <Globe className="w-8 h-8 text-primary" /> Global GRC Dashboard
              </h3>
              <p className="text-zinc-400 max-w-2xl">Senticore enterprise clients receive real-time access to our GRC (Governance, Risk, and Compliance) dashboard, providing a live view of control effectiveness and audit readiness across the entire global infrastructure.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
                <div>
                  <p className="text-3xl font-black text-white tracking-tighter">0.0%</p>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Unmitigated High Risk</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white tracking-tighter">100%</p>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Control Coverage</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white tracking-tighter">Automated</p>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Evidence Collection</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.5em]">
          Audit Framework v1.9.2 • ISO/SOC/HIPAA Compliant • © Senticore Global
        </div>
      </main>
    </div>
  );
}
