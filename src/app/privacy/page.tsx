
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Globe, Database, Server, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

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
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-primary/30">
      <nav className="py-6 px-10 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 group">
          <RedwallLogo />
        </Link>
        <Link href="/">
          <Button variant="ghost" className="text-zinc-400 hover:text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> {t.legal.backHome}
          </Button>
        </Link>
      </nav>

      <main className="container mx-auto px-6 py-20 max-w-5xl">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-12 h-12 text-primary" />
            <h1 className="text-6xl font-black tracking-tight uppercase">{t.legal.privacy}</h1>
          </div>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">
            Redwall Cyber Defense is committed to maintaining the highest standards of data privacy and security.
          </p>
        </header>

        <div className="space-y-24 text-zinc-300 leading-relaxed">
          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Database className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">1. Data Collection</h2>
            </div>
            <p>We process data under strict "Need-to-Know" principles, specifically for Managed SOC and EDR functions.</p>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Lock className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">2. Cryptographic Controls</h2>
            </div>
            <p>Redwall employs AES-256-GCM encryption for all sensitive telemetry and client identifiers.</p>
          </section>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.5em]">
          Version 3.1 • Last Updated: February 2025 • © Redwall Cyber Defense
        </div>
      </main>
    </div>
  );
}
