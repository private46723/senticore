'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
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
        <div className="flex items-center gap-4 mb-12">
          <ShieldCheck className="w-12 h-12 text-primary" />
          <h1 className="text-5xl font-black tracking-tight uppercase">Privacy <span className="text-primary italic">Policy</span></h1>
        </div>

        <div className="space-y-12 text-zinc-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">1. Corporate Commitment to Privacy</h2>
            <p>Senticore Security Global (“Senticore”, “we”, “our”, or “us”) is a cybersecurity services provider specializing in security operations, threat intelligence, endpoint protection, and digital risk management. We recognize that trust and confidentiality are foundational to cybersecurity, and we are committed to protecting all information entrusted to us.</p>
            <p>This Privacy Policy defines how Senticore collects, processes, stores, and safeguards information in connection with our website, platforms, managed security services, and professional engagements.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">2. Information Collected</h2>
            <p>Senticore collects information strictly necessary for the delivery, operation, and security of its services, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Security telemetry, logs, network metadata, IP addresses, device identifiers, and event data for monitoring, detection, and response.</li>
              <li>Business and enterprise contact information for contractual, operational, and compliance purposes.</li>
              <li>Information submitted through inquiries, onboarding processes, service agreements, or incident response engagements.</li>
            </ul>
            <p>Senticore does not engage in the sale, trade, or unauthorized use of personal data.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">3. Purpose of Data Processing</h2>
            <p>Information collected is processed exclusively for legitimate cybersecurity and business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Threat detection, investigation, incident response, and forensic analysis.</li>
              <li>Service delivery, optimization, and infrastructure protection.</li>
              <li>Regulatory compliance, audit readiness, and contractual obligations.</li>
              <li>Communication regarding service updates, alerts, and security advisories.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">4. Data Security & Protection Measures</h2>
            <p>Senticore employs industry-leading security controls including encryption, strict access management, continuous monitoring, segmentation, and secure infrastructure practices to prevent unauthorized access, loss, or misuse of data.</p>
            <p>Access to sensitive information is limited to authorized personnel under confidentiality obligations.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">5. Data Sharing & Disclosure</h2>
            <p>Information may be disclosed only under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To trusted partners or subprocessors essential to service delivery under strict confidentiality agreements.</li>
              <li>When legally required by applicable laws, regulations, or lawful requests.</li>
              <li>To protect the rights, security, or integrity of Senticore, its clients, or the public.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">6. Data Retention</h2>
            <p>Data is retained only for the duration necessary to fulfill its operational, contractual, or legal purpose and is securely deleted thereafter in accordance with retention policies.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">7. Policy Modifications</h2>
            <p>Senticore reserves the right to update this Privacy Policy to reflect regulatory, operational, or technological changes. Continued use of our services constitutes acceptance of the revised policy.</p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center text-zinc-500 text-sm">
          Last Updated: January 2025 • © Senticore Security Global
        </div>
      </main>
    </div>
  );
}
