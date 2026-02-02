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

<<<<<<< HEAD
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
=======
        <div className="space-y-24 text-zinc-300 leading-relaxed">
          <section className="space-y-8">
>>>>>>> ab01e70 (Complete all of these pages thoroughly, meticulously, and technically.)
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
<<<<<<< HEAD
<<<<<<< HEAD
            <p>While Senticore provides elite defensive monitoring, the cybersecurity landscape is inherently unpredictable. Senticore is not liable for data loss or operational disruptions resulting from zero-day vulnerabilities, nation-state attacks, or client failure to implement Senticore-provided remediation advice.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-4 text-white">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-2 flex-grow">4. Global Jurisdictions</h2>
            </div>
            <p>These terms are governed by the laws of the jurisdiction in which the specific Senticore contracting entity is located. Any disputes arising from these terms will be resolved through professional arbitration in accordance with global commercial standards.</p>
>>>>>>> f862879 (Write the page contents in detail.)
=======
            <p>All detection signatures, custom SIEM rules, AI model weights, and research reports generated by Senticore remain the exclusive intellectual property of Senticore Security Global. Clients are granted a non-exclusive, non-transferable license to use these artifacts for their internal security operations for the duration of the contract.</p>
>>>>>>> ab01e70 (Complete all of these pages thoroughly, meticulously, and technically.)
=======
            <p>All detection signatures, custom SIEM rules, AI model weights, and research reports generated by Redwall remain the exclusive intellectual property of Redwall Cyber Defense. Clients are granted a non-exclusive, non-transferable license to use these artifacts for their internal security operations for the duration of the contract.</p>
>>>>>>> 3039a9f (company name : redwall cyber defense , Change the company name everywher)
          </section>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 text-center text-zinc-600 text-[11px] font-black uppercase tracking-[0.4em]">
          Master Service Agreement (MSA) v4.2 • Effective Jan 2025 • © Redwall Cyber Defense
        </div>
      </main>
    </div>
  );
}