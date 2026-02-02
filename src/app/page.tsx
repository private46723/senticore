'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown, ArrowRight, Shield, Activity, Bug, Lock, Mail, Linkedin, Instagram, Send, ShieldCheck, Target, Zap, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

/**
 * Professional, unique logo for Senticore.
 */
const SenticoreLogo = ({ className = "w-10 h-10", iconOnly = false }: { className?: string, iconOnly?: boolean }) => (
  <div className={cn("flex items-center gap-3 group cursor-pointer", !iconOnly && "w-auto")}>
    <div className={cn("relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110", className)}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-primary drop-shadow-[0_0_8px_rgba(241,102,50,0.4)]">
        <path d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 L50 5Z" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" className="text-primary" />
        <path d="M50 15 L82 32.5 V67.5 L50 85 L18 32.5 V32.5 L50 15Z" className="fill-primary" />
        <path d="M50 25 L72 37.5 V62.5 L50 75 L28 62.5 V37.5 L50 25Z" fill="white" />
        <circle cx="50" cy="50" r="8" className="fill-primary animate-pulse" />
      </svg>
    </div>
    {!iconOnly && (
      <div className="flex flex-col text-left">
        <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">Senti<span className="text-primary">core</span></span>
        <span className="text-[9px] tracking-[0.4em] text-zinc-400 font-bold uppercase mt-1 border-t border-white/10 pt-1">Security Global</span>
      </div>
    )}
  </div>
);

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid enterprise email address." }),
  message: z.string().min(10, { message: "Inquiry must be at least 10 characters." }),
});

export default function Home() {
  const [activePlatformTab, setActivePlatformTab] = useState('soc');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const menuRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Transmission Secure",
      description: "Your message has been successfully encrypted and transmitted to our Global SOC.",
    });
  };

  const navItems = [
    { name: 'Why Senticore?', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Global Intel', id: 'intel' },
    { name: 'Proven Success', id: 'proven-success' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const platforms = [
    { 
      id: 'soc', 
      name: 'SOC as a Service', 
      icon: <Shield className={cn("w-5 h-5 transition-colors", activePlatformTab === 'soc' ? "text-primary" : "text-zinc-400")} />,
      largeTitle: 'BLUE TEAM L1/L2 OPERATIONS',
      description: 'Our primary 24/7 Security Operations Center provides elite log monitoring, SIEM management, and real-time alert analysis. We deliver precision incident escalation for modern enterprises, ensuring zero-latency response to critical security events.',
      stats: [
        { value: '24/7', label: 'MONITORING' },
        { value: '15m', label: 'SLA RESPONSE' }
      ],
      cta: 'Request SOC Consultation',
      themeColor: 'text-primary',
      btnColor: 'bg-primary hover:bg-primary/90 text-white',
      underlineColor: 'bg-primary',
      watermark: 'READY'
    },
    { 
      id: 'endpoint', 
      name: 'EDR / XDR Management', 
      icon: <Activity className={cn("w-5 h-5 transition-colors", activePlatformTab === 'endpoint' ? "text-accent" : "text-zinc-400")} />,
      largeTitle: 'ENDPOINT DEFENSE & RESPONSE',
      description: 'Advanced management of your EDR/XDR stack across global deployments. Our team handles specialized policy tuning, proactive threat hunting, and automated endpoint remediation to neutralize threats before they can move laterally.',
      stats: [
        { value: '100%', label: 'VISIBILITY' },
        { value: '99.9%', label: 'PROTECTION' }
      ],
      cta: 'Secure Your Fleet',
      themeColor: 'text-accent',
      btnColor: 'bg-accent hover:bg-[#00c853] text-black',
      underlineColor: 'bg-accent',
      watermark: 'EDR'
    },
    { 
      id: 'vulnerability', 
      name: 'Vulnerability Assessment', 
      icon: <Bug className={cn("w-5 h-5 transition-colors", activePlatformTab === 'vulnerability' ? "text-cyan-400" : "text-zinc-400")} />,
      largeTitle: 'RISK REPORTS & REMEDIATION',
      description: 'Continuous asset discovery and detailed risk assessment. We provide technical remediation playbooks to close critical security gaps, focusing on high-impact vulnerabilities that represent true enterprise risk.',
      stats: [
        { value: 'VA/PT', label: 'EXPERTS' },
        { value: 'ZERO', label: 'MISSED GAPS' }
      ],
      cta: 'Get Risk Audit',
      themeColor: 'text-cyan-400',
      btnColor: 'bg-cyan-400 hover:bg-cyan-500 text-black',
      underlineColor: 'bg-cyan-400',
      watermark: 'VA'
    },
  ];

  const currentPlatform = platforms.find((p) => p.id === activePlatformTab) || platforms[0];

  const specializedServices = [
    { title: 'Penetration Testing', description: 'Advanced web application and network infrastructure testing to validate existing security controls and discover hidden exploit paths.', icon: <Target className="w-6 h-6 text-primary" />, status: 'Limited Availability' },
    { title: 'Incident Response', description: 'Elite IR specialists for rapid breach analysis, containment, and forensic recovery. We minimize downtime and ensure evidence integrity.', icon: <Zap className="w-6 h-6 text-primary" />, status: 'On-Call' },
    { title: 'Cloud Security', description: 'Deep AWS, Azure, and GCP configuration reviews. We harden cloud identities and secure complex multi-cloud architectures.', icon: <Lock className="w-6 h-6 text-primary" />, status: 'Strategic' },
    { title: 'AI Security Services', description: 'Specialized LLM security, including prompt injection protection, red-teaming for AI models, and data leakage prevention frameworks.', icon: <Cpu className="w-6 h-6 text-primary" />, status: 'Future-Ready' },
    { title: 'Purple Team Hunting', description: 'Collaborative offensive and defensive exercises designed to stress-test your detection capabilities and tune SIEM rules.', icon: <Terminal className="w-6 h-6 text-primary" />, status: 'Advanced' }
  ];

  const perspectives = [
    { type: 'RESEARCH', title: 'The State of Blue Team Operations 2025: Navigating Hyper-Scaled Threats', imageId: 'article-network', theme: 'light' },
    { type: 'GUIDE', title: 'Zero-Day Defense: Implementing Precision AI in Managed SOC Workflows', imageId: 'article-ai', theme: 'dark-red' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-primary/30">
      {/* Top Banner */}
      <div className="bg-[#1a1a1a] text-white text-center py-2 text-[13px] border-b border-white/5">
        <p className="font-medium tracking-wide">Senticore SOC Launch — Elite Blue Team Monitoring Now Available Globally</p>
      </div>

      {/* Utility Nav */}
      <div className="bg-white text-zinc-800 py-2 px-6 flex justify-between items-center text-[13px] border-b border-gray-200">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 hover:text-primary transition-colors uppercase font-bold">EN <ChevronDown className="w-3.5 h-3.5 opacity-60" /></button>
          <button className="hover:text-primary transition-colors"><Search className="w-4 h-4" /></button>
        </div>
        <div className="flex items-center gap-6 font-bold">
          <a href="mailto:contact@senticore.com" className="hover:text-primary transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> contact@senticore.com
          </a>
          <button onClick={() => scrollToSection('contact')} className="bg-white border border-gray-300 px-5 py-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-zinc-900 font-black uppercase text-[11px]">
            Emergency IR?
          </button>
        </div>
      </div>

      {/* Hero Container */}
      <div className="relative flex flex-col min-h-[850px]">
        <div className="absolute inset-0 z-0">
          {heroBg && <Image src={heroBg.imageUrl} alt={heroBg.description} fill className="object-cover opacity-50" priority data-ai-hint={heroBg.imageHint} />}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black" />
        </div>

        <header className="relative z-[60]" ref={menuRef}>
          <nav className="py-8 px-12 flex items-center justify-between">
            <div className="flex items-center gap-16">
              <SenticoreLogo className="w-12 h-12" />
              <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium">
                {navItems.map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-primary transition-colors py-2 relative text-[13px] tracking-[0.1em] uppercase font-black text-zinc-100"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-7 font-black text-sm tracking-widest shadow-xl border-none transition-all hover:scale-105 active:scale-95">
              Get in Touch
            </Button>
          </nav>
        </header>

        <main className="flex-grow flex items-center pb-20 overflow-hidden relative z-10">
          <div className="container mx-auto px-12 max-w-[1400px]">
            <div className="max-w-5xl">
              <h1 className="text-6xl md:text-[88px] font-black leading-[1.0] mb-12 tracking-tighter text-white">
                Defending the Global Enterprise with <span className="text-primary italic">Precision.</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl leading-relaxed mb-16 font-medium">
                Next-generation Managed SOC, EDR orchestration, and AI-driven threat intelligence. We are your primary Blue Team partner for 24/7 technical defense across every digital perimeter.
              </p>
              <div className="flex gap-8">
                 <Button onClick={() => scrollToSection('services')} className="bg-white text-black hover:bg-gray-100 rounded-full px-12 py-8 font-black uppercase text-sm tracking-widest shadow-2xl border-none">
                   Explore SOC Services
                 </Button>
                 <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-12 py-8 font-black uppercase text-sm tracking-widest backdrop-blur-md">
                   Contact Operations
                 </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* About Section */}
      <section id="about" className="bg-black py-40 border-t border-white/10 relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0 group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden h-full shadow-2xl">
                {PlaceHolderImages.find(img => img.id === 'feature-person-bg') && (
                  <Image src={PlaceHolderImages.find(img => img.id === 'feature-person-bg')!.imageUrl} alt="Operations" fill className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-3">Established 2025</p>
                  <p className="text-white text-3xl font-black uppercase tracking-tight">Senticore DNA</p>
                </div>
              </div>
            </div>
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-primary font-black uppercase tracking-[0.5em] text-[11px] flex items-center gap-6"><div className="w-12 h-[1px] bg-primary" /> Our DNA</h2>
                <h3 className="text-5xl md:text-[72px] font-black leading-[1.05] text-white tracking-tight">Protecting your <span className="italic text-primary">digital frontier.</span></h3>
                <p className="text-zinc-400 text-xl leading-relaxed font-normal">Senticore was engineered to bridge the critical gap between complex security data and actionable defense. We provide the elite expertise required to manage the modern threat landscape with technical precision, operational agility, and global scale.</p>
              </div>
              <div className="grid grid-cols-2 gap-16 pt-12 border-t border-white/10">
                <div className="space-y-4"><div className="text-5xl font-black text-white italic tracking-tighter">Global</div><div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">Operational Reach</div></div>
                <div className="space-y-4"><div className="text-5xl font-black text-white italic tracking-tighter">24/7</div><div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">Always-On Defense</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#050505] py-32 border-t border-white/5 overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="flex flex-wrap items-center gap-16 border-b border-white/10 mb-24">
            {platforms.map((platform) => (
              <button key={platform.id} onClick={() => setActivePlatformTab(platform.id)} className={cn("flex items-center gap-5 pb-8 transition-all relative group", activePlatformTab === platform.id ? "opacity-100" : "opacity-40 hover:opacity-100")}>
                {platform.icon} <span className={cn("text-xl font-black transition-colors uppercase tracking-widest", activePlatformTab === platform.id ? "text-white" : "text-zinc-500")}>{platform.name}</span>
                {activePlatformTab === platform.id && <div className={cn("absolute bottom-0 left-0 right-0 h-[3px]", currentPlatform.underlineColor)} />}
              </button>
            ))}
          </div>
          <div key={activePlatformTab} className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h3 className={cn("text-6xl md:text-[100px] font-black tracking-[-0.03em] uppercase leading-[0.9] mb-20", currentPlatform.themeColor)}>{currentPlatform.largeTitle}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-16">
                <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-2xl font-normal">{currentPlatform.description}</p>
                <div className="flex flex-wrap gap-24">
                  {currentPlatform.stats.map((stat, i) => (
                    <div key={i} className="space-y-4"><div className="text-6xl md:text-7xl font-black text-white italic tracking-tighter">{stat.value}</div><div className="text-[11px] font-black text-zinc-500 tracking-[0.4em] uppercase">{stat.label}</div></div>
                  ))}
                </div>
                <Button onClick={() => scrollToSection('contact')} className={cn("rounded-full px-12 h-16 font-black uppercase text-sm tracking-widest border-none !text-black transition-all hover:scale-105 shadow-2xl", currentPlatform.btnColor)}>{currentPlatform.cta} <ArrowRight className="w-6 h-6 ml-3" /></Button>
              </div>
              <div className="text-[220px] font-black text-white/[0.03] italic leading-none select-none text-right flex items-end justify-end">{currentPlatform.watermark}</div>
            </div>
          </div>
          
          <div className="mt-40 pt-24 border-t border-white/5">
            <h4 className="text-4xl font-black mb-16 text-white tracking-tight">Specialized <span className="text-primary italic">Security Capabilities</span></h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, i) => (
                <div key={i} className="bg-[#0a0a0a] border border-white/10 p-10 rounded-2xl hover:border-primary/40 hover:bg-[#111111] transition-all duration-300 group flex flex-col min-h-[300px]">
                  <div className="mb-8">{service.icon}</div>
                  <h5 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{service.title}</h5>
                  <p className="text-zinc-500 text-[15px] leading-relaxed mb-10 flex-grow">{service.description}</p>
                  <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mt-auto">{service.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proven Success Section */}
      <section id="proven-success" className="bg-black border-t border-white/10 relative overflow-hidden scroll-mt-20">
        <div className="w-full relative aspect-video md:aspect-[21/9] overflow-hidden">
          <iframe 
            src="https://www.youtube.com/embed/NBfcGrHR6P0?autoplay=1&mute=1&loop=1&playlist=NBfcGrHR6P0&controls=0&showinfo=0&rel=0" 
            className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none scale-105" 
            allow="autoplay; encrypted-media" 
            title="Senticore Operations Video" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-12">
             <div className="max-w-5xl">
                <h2 className="text-6xl md:text-[90px] font-black leading-none tracking-tighter uppercase mb-10 text-white">Proven <span className="text-primary italic">Success</span></h2>
                <p className="text-2xl md:text-3xl text-zinc-100 font-medium tracking-tight">Real-time threat visibility and automated containment across global enterprise infrastructure.</p>
             </div>
          </div>
          <div className="absolute bottom-16 left-16 flex items-center gap-8">
            <div className="w-20 h-20 rounded-2xl border border-white/20 bg-black/60 backdrop-blur-2xl flex items-center justify-center shadow-2xl"><Shield className="text-primary w-10 h-10" /></div>
            <div><div className="text-[11px] font-black text-primary uppercase tracking-[0.5em] mb-1">Live Feed</div><div className="text-3xl font-black text-white uppercase tracking-tighter">Operational Center Alpha</div></div>
          </div>
        </div>
      </section>

      {/* Perspectives Section */}
      <section id="intel" className="bg-black py-32 border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-6xl font-black text-white tracking-tighter">Global Security <span className="text-primary italic">Perspectives</span></h2>
            <button className="text-primary font-black hover:underline flex items-center gap-3 text-sm tracking-widest uppercase">View Archive <ArrowRight className="w-5 h-5" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {perspectives.map((article, i) => (
              <div key={i} className={cn("rounded-xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:-translate-y-3 shadow-2xl border border-white/5", article.theme === 'light' ? "bg-white text-black" : "bg-[#1a0a05] text-white")}>
                <div className="p-12 flex-grow"><div className="text-[11px] font-black uppercase mb-12 tracking-[0.4em] opacity-60">{article.type}</div><h3 className="text-3xl font-black leading-tight tracking-tight uppercase">{article.title}</h3></div>
                <div className="relative aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  {PlaceHolderImages.find(img => img.id === article.imageId) && <Image src={PlaceHolderImages.find(img => img.id === article.imageId)!.imageUrl} alt="Article" fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#050505] py-40 border-t border-white/10 scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-primary font-black uppercase tracking-[0.5em] text-[11px]">Contact Operations</h2>
                <h3 className="text-6xl font-black text-white tracking-tighter leading-[1.1]">Request a <span className="text-primary italic">Security Consultation</span></h3>
                <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">Our specialists are standing by to discuss your 24/7 Managed SOC requirements, specialized EDR/XDR orchestration, or emergency incident response needs.</p>
              </div>
              
              <div className="space-y-10 pt-12 border-t border-white/10">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-2">Email Operations</div>
                    <div className="text-xl font-black text-white uppercase tracking-tight">contact@senticore.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-2">LinkedIn</div>
                    <div className="text-xl font-black text-white uppercase tracking-tight">Senticore Security Global</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ShieldCheck className="w-48 h-48 text-primary" />
               </div>
               
               {isSubmitted ? (
                 <div className="relative z-10 py-20 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-8 border border-primary/30">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Transmission Successful</h4>
                    <p className="text-zinc-400 text-lg max-w-sm mb-10">Your secure message has been encrypted and delivered to our Global SOC. A senior security analyst will review your inquiry shortly.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 font-black uppercase text-[11px] tracking-widest"
                    >
                      Send Another Message
                    </Button>
                 </div>
               ) : (
                 <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 space-y-8">
                     <div className="grid grid-cols-2 gap-8">
                       <FormField
                         control={form.control}
                         name="fullName"
                         render={({ field }) => (
                           <FormItem className="space-y-3">
                             <FormLabel className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">Full Name</FormLabel>
                             <FormControl>
                               <Input placeholder="John Doe" className="bg-black/80 border-white/10 text-white h-14 rounded-xl focus:border-primary text-base placeholder:opacity-30" {...field} />
                             </FormControl>
                             <FormMessage className="text-primary text-[10px] font-bold uppercase" />
                           </FormItem>
                         )}
                       />
                       <FormField
                         control={form.control}
                         name="email"
                         render={({ field }) => (
                           <FormItem className="space-y-3">
                             <FormLabel className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">Enterprise Email</FormLabel>
                             <FormControl>
                               <Input type="email" placeholder="john@company.com" className="bg-black/80 border-white/10 text-white h-14 rounded-xl focus:border-primary text-base placeholder:opacity-30" {...field} />
                             </FormControl>
                             <FormMessage className="text-primary text-[10px] font-bold uppercase" />
                           </FormItem>
                         )}
                       />
                     </div>
                     <FormField
                       control={form.control}
                       name="message"
                       render={({ field }) => (
                         <FormItem className="space-y-3">
                           <FormLabel className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">Security Inquiry</FormLabel>
                           <FormControl>
                             <Textarea placeholder="Describe your security operational requirements..." className="bg-black/80 border-white/10 text-white min-h-[160px] rounded-xl focus:border-primary text-base placeholder:opacity-30" {...field} />
                           </FormControl>
                           <FormMessage className="text-primary text-[10px] font-bold uppercase" />
                         </FormItem>
                       )}
                     />
                     <Button 
                       disabled={isSubmitting}
                       className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.4em] h-16 rounded-full shadow-2xl flex items-center justify-center gap-4 border-none text-sm transition-all hover:scale-[1.02]"
                     >
                       {isSubmitting ? (
                         <>Encrypting Transmission... <Activity className="w-5 h-5 animate-pulse" /></>
                       ) : (
                         <>Transmit Secure Message <Send className="w-5 h-5" /></>
                       )}
                     </Button>
                   </form>
                 </Form>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-zinc-500 py-32 border-t border-white/10">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-6">
              <h3 className="text-white font-black text-lg mb-12 border-b-2 border-primary/20 pb-3 inline-block w-full max-w-[240px] uppercase tracking-tighter">Core Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ul className="space-y-4 text-[14px] font-medium">
                  <li className="hover:text-primary transition-colors cursor-pointer">Managed SOC (L1/L2)</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">SIEM Orchestration</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Real-time Log Monitoring</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Dynamic Alert Analysis</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">EDR/XDR Fleet Management</li>
                </ul>
                <ul className="space-y-4 text-[14px] font-medium">
                  <li className="hover:text-primary transition-colors cursor-pointer">Vulnerability Lifecycle</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Precision Incident Response</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Multi-Cloud Hardening</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">AI Infrastructure Security</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">External Pentesting</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-white font-black text-lg mb-12 border-b-2 border-primary/20 pb-3 inline-block w-full uppercase tracking-tighter">Legal</h3>
              <ul className="space-y-5 text-[14px] font-medium">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Compliance Audit</button></li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-white font-black text-lg mb-12 border-b-2 border-primary/20 pb-3 inline-block w-full uppercase tracking-tighter">Connect</h3>
              <ul className="space-y-5 text-[14px] font-medium">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-3"><Linkedin className="w-5 h-5" /> LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-3"><Instagram className="w-5 h-5" /> Instagram</a></li>
                <li><a href="mailto:contact@senticore.com" className="hover:text-primary transition-colors flex items-center gap-3"><Mail className="w-5 h-5" /> Email Operations</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-white/10 flex items-center justify-between">
            <SenticoreLogo className="w-12 h-12" />
            <p className="text-[12px] text-zinc-600 font-black uppercase tracking-[0.5em]">© 2025 Senticore Security Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
