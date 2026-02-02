
'use client';

import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowLeft, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookiesPolicy() {
=======
import { ArrowLeft, Cookie, Settings, Shield, Info, CheckCircle2 } from 'lucide-react';
=======
import { ArrowLeft, Cookie, Shield, Info } from 'lucide-react';
>>>>>>> f51259d (Add Russian, Turkish, and Hindi as languages ​​and translate all pages i)
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

export default function CookiePolicy() {
  const { language } = useLanguage();
  const t = translations[language];

>>>>>>> ab01e70 (Complete all of these pages thoroughly, meticulously, and technically.)
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

<<<<<<< HEAD
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <Cookie className="w-12 h-12 text-primary" />
          <h1 className="text-5xl font-black tracking-tight uppercase">Cookies <span className="text-primary italic">Policy</span></h1>
        </div>

        <div className="space-y-12 text-zinc-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">1. Purpose of Cookies</h2>
            <p>Cookies are used to support core platform functionality, including secure access control, session management, service continuity, system performance monitoring, and protection against fraud or unauthorized use. Senticore does not use cookies for behavioral advertising or commercial tracking.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">2. Types of Cookies We Use</h2>
            <p>Senticore uses the following categories of cookies</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strictly Necessary Cookies – Required for authentication, security controls, and platform availability.</li>
              <li>Functional Cookies – Used to remember user preferences and enhance usability.</li>
              <li>Performance Cookies – Used in aggregated and anonymized form to analyze system performance and reliability.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">3. Data Protection & Security</h2>
            <p>All cookie-related data is handled in accordance with applicable data protection laws and cybersecurity best practices. Senticore does not sell, rent, or share cookie-derived information with third parties for marketing purposes. Cookies are retained only for the duration necessary to fulfill their intended security or operational purpose.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">4. User Control</h2>
            <p>Users may control or disable cookies through browser settings. Please note that disabling essential cookies may limit the functionality, availability, or security of Senticore services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">5. Updates to This Policy</h2>
            <p>Senticore may update this Cookie Policy to reflect changes in technology, legal requirements, or operational practices. Continued use of our website constitutes acceptance of the updated policy.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">6. Contact Information</h2>
            <p>For questions regarding this Cookie Policy, please contact Senticore through official communication channels listed on our website.</p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 text-center text-zinc-500 text-sm">
          Last Updated: January 2025 • © Senticore Security Global
=======
      <main className="container mx-auto px-6 py-20 max-w-5xl">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Cookie className="w-12 h-12 text-primary" />
            <h1 className="text-6xl font-black tracking-tight uppercase">{t.legal.cookies}</h1>
          </div>
          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">
            This policy explains how Redwall utilizes tracking technologies for security optimization.
          </p>
        </header>

        <div className="space-y-20">
          <section className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Info className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-black uppercase tracking-wide border-b border-white/10 pb-4 flex-grow">1. Overview</h2>
            </div>
            <p>Cookies are used exclusively for functional and analytical purposes to protect authorized personnel sessions.</p>
          </section>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.5em]">
<<<<<<< HEAD
<<<<<<< HEAD
          Cookie Framework v2.1 • © 2025 Senticore Security Global
>>>>>>> ab01e70 (Complete all of these pages thoroughly, meticulously, and technically.)
=======
          Cookie Framework v2.1 • © 2025 Redwall Cyber Defense
>>>>>>> 3039a9f (company name : redwall cyber defense , Change the company name everywher)
=======
          Cookie Framework v2.2 • © 2025 Redwall Cyber Defense
>>>>>>> f51259d (Add Russian, Turkish, and Hindi as languages ​​and translate all pages i)
        </div>
      </main>
    </div>
  );
}
