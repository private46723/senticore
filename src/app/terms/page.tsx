'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Gavel, ShieldAlert, Cpu, Scale, HelpCircle, FileCheck, AlertTriangle } from 'lucide-react';
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

export default function TermsOfService() {
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
            <Gavel className="w-12 h-12 text-primary" />
            <h1 className="text-6xl font-black tracking-tight uppercase">Terms of <span className="text-primary italic">Service</span></h1>
          </div>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">
            These Terms of Service ("Terms") constitute a legally binding agreement between your organization ("Client") and Redwall Cyber Defense regarding the provision of managed security services.
          </p>
        </header>

        <div className="space-y-24 text-zinc-300 leading-relaxed">
          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Cpu className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">1. Service Delivery & SLAs</h2>
            </div>
            <p>Redwall provides technical security services on a 24/7/365 basis. Service availability and response metrics are defined by the Tier Level of the Client's active subscription.</p>
            <div className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 space-y-6">
              <h3 className="text-white font-bold uppercase text-sm border-b border-white/10 pb-2">Operational Commitment Matrix</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest font-black">
                    <span>L1 Alert Analysis</span>
                    <span className="text-primary">15 Min</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="w-[90%] h-full bg-primary" /></div>
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest font-black">
                    <span>Critical Escalation</span>
                    <span className="text-primary">Immediate</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="w-full h-full bg-primary" /></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest font-black">
                    <span>Monthly Reporting</span>
                    <span className="text-primary">T+3 Days</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="w-[75%] h-full bg-primary" /></div>
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest font-black">
                    <span>Platform Uptime</span>
                    <span className="text-primary">99.99%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="w-[99%] h-full bg-primary" /></div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <ShieldAlert className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">2. Authorization & Ethical Conduct</h2>
            </div>
            <p>Engagement with Redwall services requires explicit written authorization from the Client's executive leadership. By engaging Redwall, the Client confirms they have the legal right to authorize security monitoring and testing on the target infrastructure.</p>
            <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl space-y-4">
              <h4 className="text-red-400 font-bold uppercase text-xs flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Prohibited Activities</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-400">
                <li>• Reverse-engineering detection logic</li>
                <li>• Unauthorized scraping of Intel feeds</li>
                <li>• Testing Redwall systems without a specific ROE</li>
                <li>• Misusing AI models for offensive purposes</li>
              </ul>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Scale className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">3. Liability & Indemnification</h2>
            </div>
            <p>Redwall provides professional security monitoring but does not guarantee a total absence of threats. Cybersecurity is a relative state of risk management, not an absolute state of immunity.</p>
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-primary bg-white/5 rounded-r-xl">
                <h4 className="text-white font-bold mb-2">Maximum Liability</h4>
                <p className="text-sm">Redwall's aggregate liability for any claim arising from these terms is limited to the total fees paid by the Client during the twelve (12) months preceding the event.</p>
              </div>
              <div className="p-6 border-l-4 border-zinc-700 bg-white/5 rounded-r-xl">
                <h4 className="text-white font-bold mb-2">Exclusions</h4>
                <p className="text-sm">Redwall is not liable for damages resulting from: zero-day exploits, nation-state attacks (Advanced Persistent Threats), or failure by the Client to implement remediation guidance.</p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <FileCheck className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">4. Intellectual Property</h2>
            </div>
            <p>All detection signatures, custom SIEM rules, AI model weights, and research reports generated by Redwall remain the exclusive intellectual property of Redwall Cyber Defense. Clients are granted a non-exclusive, non-transferable license to use these artifacts for their internal security operations for the duration of the contract.</p>
          </section>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.4em]">
          Master Service Agreement (MSA) v4.2 • Effective Jan 2025 • © Redwall Cyber Defense
        </div>
      </main>
    </div>
  );
}