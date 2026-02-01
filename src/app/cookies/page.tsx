'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookiesPolicy() {
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
        </div>
      </main>
    </div>
  );
}
