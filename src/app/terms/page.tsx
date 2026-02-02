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

<<<<<<< HEAD
        <div className="space-y-12 text-zinc-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">1. Service Agreement</h2>
            <p>By accessing, using, or engaging the services of Senticore Security Global (“Senticore”, “we”, “our”, or “us”), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. Senticore provides professional cybersecurity services including, but not limited to, Security Operations Center (SOC) monitoring, Endpoint Detection and Response (EDR), threat intelligence, digital forensics, incident response, and security advisory services</p>
            <p>All services are provided in accordance with defined operational methodologies, security standards, and industry best practices. Specific service scope, responsibilities, response timelines, and deliverables are governed by formal agreements such as Service Level Agreements (SLAs), Statements of Work (SOWs), or other contractual documents executed between Senticore and the client.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">2. Acceptable Use</h2>
            <p>Senticore services, platforms, tools, and intelligence resources are provided strictly for lawful, authorized, and defensive cybersecurity purposes. Users agree to use Senticore services only in compliance with applicable laws, regulations, and ethical standards within their jurisdiction.</p>
            <p>Any unauthorized access, reverse engineering, tampering, misuse, resale, or exploitation of Senticore systems, software, or proprietary intelligence is strictly prohibited. Use of Senticore services for offensive cyber operations, unlawful surveillance, or activities that violate third-party rights may result in immediate service suspension or termination.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">3. Limitation of Liability</h2>
            <p>Cybersecurity threats continuously evolve, and while Senticore employs advanced defensive technologies and expert methodologies, no security service can guarantee absolute protection against all cyber incidents. Senticore shall not be held liable for damages resulting from zero-day vulnerabilities, advanced persistent threats, third-party system failures, or customer non-compliance with recommended security controls.</p>
            <p>To the maximum extent permitted by law, Senticore shall not be responsible for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of data, revenue, business interruption, or reputational harm, even if Senticore has been advised of the possibility of such damages.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">4. Data Protection and Confidentiality</h2>
            <p>Senticore recognizes the highly sensitive nature of security-related data and client information. All data accessed, processed, or generated during service delivery is treated as confidential and handled in accordance with applicable data protection laws, contractual obligations, and recognized security standards.</p>
            <p>Access to client systems, logs, or telemetry data is strictly limited to the purpose of service delivery and security analysis. Such access does not grant Senticore ownership of client data, and all reasonable measures are taken to prevent unauthorized disclosure or misuse.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">5. Intellectual Property Rights</h2>
            <p>All intellectual property, including software, methodologies, documentation, threat intelligence, reports, and proprietary tools developed or provided by Senticore, remain the exclusive property of Senticore unless otherwise agreed in writing. Clients are granted a limited, non-transferable right to use deliverables solely for internal security purposes.</p>
            <p>Clients shall not copy, modify, distribute, or create derivative works based on Senticore intellectual property without prior written consent. Any unauthorized use may result in legal action.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">6. Third-Party Services and Dependencies</h2>
            <p>Certain Senticore services may rely on third-party technologies, platforms, or data sources. While Senticore carefully selects reputable providers, it does not control third-party systems and is not responsible for outages, failures, or security incidents originating from external services.</p>
            <p>Clients acknowledge that third-party terms, licenses, and policies may apply, and Senticore shall not be liable for disruptions caused by factors outside its reasonable control.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">7. Termination of Services</h2>
            <p>Senticore reserves the right to suspend or terminate services, with or without notice, if a client or user violates these Terms of Service, applicable laws, or security requirements. Services may also be terminated upon completion of contractual obligations or as specified within governing agreements.</p>
            <p>Upon termination, access to Senticore platforms and systems shall cease immediately. Provisions relating to confidentiality, intellectual property, limitation of liability, and jurisdiction shall survive termination.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">8. Force Majeure</h2>
            <p>Senticore shall not be held liable for failure or delay in performance resulting from events beyond its reasonable control, including but not limited to natural disasters, acts of government, cyber warfare, large-scale internet outages, labor disputes, or other force majeure events.</p>
            <p>During such events, Senticore will make reasonable efforts to restore services and communicate status updates as conditions permit.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">9. Jurisdiction and Governing Law</h2>
            <p>These Terms of Service shall be governed by and interpreted in accordance with the laws of the jurisdiction in which Senticore Security Global is legally incorporated. Any disputes arising out of or relating to these terms or the use of Senticore services shall be subject to the exclusive jurisdiction of the competent courts within that jurisdiction.</p>
=======
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
>>>>>>> f862879 (Write the page contents in detail.)
          </section>
        </div>

        <div className="mt-32 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.4em]">
          Version 1.4 • Effective January 2025 • © Senticore Security Global
        </div>
      </main>
    </div>
  );
}
