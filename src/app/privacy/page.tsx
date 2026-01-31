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
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">1. Introduction</h2>
            <p>Senticore Security Global ("we," "our," or "Senticore") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard information when you interact with our SOC services, EDR platforms, and our digital infrastructure.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">2. Data Collection</h2>
            <p>We collect information necessary to provide elite cybersecurity services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Log data and system metadata for threat detection.</li>
              <li>Enterprise contact information for operational communication.</li>
              <li>Network telemetry required for precision incident response.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">3. Security Standards</h2>
            <p>As a global security leader, your data is protected by industry-leading encryption and strict access controls. We maintain SOC 2 compliance and adhere to international data protection regulations (GDPR, CCPA).</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">4. Contact Us</h2>
            <p>If you have questions regarding our data handling practices, contact our Data Protection Officer at <strong>compliance@senticore.com</strong>.</p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center text-zinc-500 text-sm">
          Last Updated: January 2025 • © Senticore Security Global
        </div>
      </main>
    </div>
  );
}
