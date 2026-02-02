'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Globe, Eye, FileText, Database, Server, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const RedwallLogo = ({ className = "h-6" }: { className?: string }) => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className={cn("flex items-center", className)}>
      <span className="text-xl font-black tracking-tighter text-primary">Red</span>
      <div className="relative mx-1 w-5 h-6 flex items-center justify-center">
        <svg viewBox="0 0 100 120" className="w-full h-full fill-primary">
           <path d="M50 0 L90 20 V60 C90 90 50 115 50 115 C50 115 10 90 10 60 V20 L50 0Z" />
        </svg>
      </div>
      <span className="text-xl font-black tracking-tighter text-zinc-300">Wall</span>
    </div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-primary/30">
      <nav className="py-6 px-10 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 group">
          <RedwallLogo />
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
            <ShieldCheck className="w-12 h-12 text-primary" />
            <h1 className="text-6xl font-black tracking-tight uppercase">Privacy <span className="text-primary italic">Policy</span></h1>
          </div>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">
            Redwall Cyber Defense (hereafter "Redwall") is committed to maintaining the highest standards of data privacy and security. This policy outlines our technical and administrative procedures for the protection of sensitive information.
          </p>
        </header>

        <div className="space-y-24 text-zinc-300 leading-relaxed">
          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Database className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">1. Data Collection & Processing</h2>
            </div>
            <p>We process data under strict "Need-to-Know" principles. The scope of collection is determined by the specific security services engaged by the client.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold uppercase mb-4 flex items-center gap-2"><Server className="w-4 h-4 text-primary" /> Operational Telemetry</h3>
                <p className="text-sm text-zinc-400 mb-4">Collected for Managed SOC (L1/L2) functions:</p>
                <ul className="list-disc pl-6 space-y-2 text-xs">
                  <li>System Event Logs (SIEM ingestion)</li>
                  <li>Network Traffic Metadata (NetFlow/IPFIX)</li>
                  <li>Endpoint Process Telemetry (EDR artifacts)</li>
                  <li>Identity Access Management (IAM) audit trails</li>
                </ul>
              </div>
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold uppercase mb-4 flex items-center gap-2"><UserCheck className="w-4 h-4 text-primary" /> Personnel Information</h3>
                <p className="text-sm text-zinc-400 mb-4">Collected for platform access and service delivery:</p>
                <ul className="list-disc pl-6 space-y-2 text-xs">
                  <li>Enterprise email and professional identifiers</li>
                  <li>Multi-factor authentication (MFA) metadata</li>
                  <li>Administrative action logs (Audit Trail)</li>
                  <li>Technical consultation correspondence</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Lock className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">2. Cryptographic Controls</h2>
            </div>
            <p>Redwall employs industry-leading cryptographic standards to protect data integrity and confidentiality across all operational tiers.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "At Rest", detail: "AES-256-GCM encryption with hardware-based key management (HSM)." },
                { title: "In Transit", detail: "TLS 1.3 with Perfect Forward Secrecy (PFS) and HSTS enforcement." },
                { title: "Key Rotation", detail: "Automated 90-day cryptographic key rotation policies." }
              ].map((item, i) => (
                <div key={i} className="border border-white/10 p-6 rounded-xl bg-black/40">
                  <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-3">{item.title}</h4>
                  <p className="text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">3. Sovereignty & Sub-processors</h2>
            </div>
            <p>Redwall utilizes globally distributed infrastructure with strict data residency controls. Clients may request data pinning to specific geographic regions (e.g., EU-West, US-East).</p>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white uppercase text-xs">
                    <th className="pb-4">Entity</th>
                    <th className="pb-4">Function</th>
                    <th className="pb-4">Location</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-medium text-white">AWS Global</td>
                    <td className="py-4">Cloud Infrastructure</td>
                    <td className="py-4">Region-Specific</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-medium text-white">Google Cloud</td>
                    <td className="py-4">Precision AI Processing</td>
                    <td className="py-4">Multi-Regional</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-white">Datadog</td>
                    <td className="py-4">Performance Monitoring</td>
                    <td className="py-4">Global</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">4. Retention & Forensic purging</h2>
            </div>
            <p>Data retention is strictly governed by the Service Level Agreement (SLA). Upon termination of services, data is subjected to forensic-grade sanitization in accordance with NIST SP 800-88 standards.</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><span className="text-white font-bold">Hot Storage:</span> Logs retained for 30-90 days for active threat hunting.</li>
              <li><span className="text-white font-bold">Cold Archive:</span> Encrypted backups retained for up to 7 years for regulatory compliance.</li>
              <li><span className="text-white font-bold">Right to Erasure:</span> Clients may initiate a "Purge Request" at any time for non-regulated metadata.</li>
            </ul>
          </section>

          <section className="bg-primary/5 p-12 rounded-3xl border border-primary/20 space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Global Compliance Office</h2>
            <p className="text-zinc-400">For DSR (Data Subject Requests) or technical privacy audits, contact our specialized compliance team:</p>
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-primary font-bold">compliance@redwallcyber.com</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Response Window</p>
                <p className="text-white font-bold">24 Business Hours</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.5em]">
          Version 3.0.4 • Last Updated: February 2025 • © Redwall Cyber Defense
        </div>
      </main>
    </div>
  );
}