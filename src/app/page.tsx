'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, X, ArrowRight, Shield, Activity, Bug, Lock, Globe, Mail, Linkedin, Instagram, Twitter, Send, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

/**
 * A unique, professional logo for Senticore.
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
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">Senti<span className="text-primary">core</span></span>
        <span className="text-[9px] tracking-[0.4em] text-gray-400 font-bold uppercase mt-1 border-t border-white/10 pt-1">Security Global</span>
      </div>
    )}
  </div>
);

export default function Home() {
  const [showCookies, setShowCookies] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activePlatformTab, setActivePlatformTab] = useState('soc');
  const [activeEngageTab, setActiveEngageTab] = useState('Executives');
  const menuRef = useRef<HTMLDivElement>(null);

  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveMenu(null);
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
      icon: <Shield className={cn("w-5 h-5 transition-colors", activePlatformTab === 'soc' ? "text-yellow-400" : "text-gray-400")} />,
      largeTitle: 'NEXT-GEN SOC AS A SERVICE',
      description: 'Our primary Blue Team (L1/L2) operations provide comprehensive log monitoring, SIEM management, and real-time alert analysis. We handle incident escalation with precision.',
      stats: [
        { value: '24/7', label: 'ELITE MONITORING' },
        { value: '15 MIN', label: 'RESPONSE SLA' }
      ],
      cta: 'Explore SOC Services',
      themeColor: 'text-yellow-400',
      btnColor: 'bg-yellow-400 hover:bg-yellow-500 text-black',
      underlineColor: 'bg-yellow-400',
      watermark: 'L1/L2'
    },
    { 
      id: 'endpoint', 
      name: 'EDR / XDR Management', 
      icon: <Activity className={cn("w-5 h-5 transition-colors", activePlatformTab === 'endpoint' ? "text-accent" : "text-gray-400")} />,
      largeTitle: 'ADVANCED ENDPOINT DEFENSE',
      description: 'Go beyond basic antivirus with our EDR and XDR management. We provide full-spectrum endpoint protection and automated response capabilities.',
      stats: [
        { value: '100%', label: 'VISIBILITY' },
        { value: '99.9%', label: 'BLOCK RATE' }
      ],
      cta: 'Secure Your Endpoints',
      themeColor: 'text-accent',
      btnColor: 'bg-accent hover:bg-[#00c853] text-black',
      underlineColor: 'bg-accent',
      awards: [
        { title: 'Detection', subtitle: 'Real-time threat hunting' },
        { title: 'Remediation', subtitle: 'Zero-touch restoration' }
      ]
    },
    { 
      id: 'vulnerability', 
      name: 'Vulnerability Assessment', 
      icon: <Bug className={cn("w-5 h-5 transition-colors", activePlatformTab === 'vulnerability' ? "text-cyan-400" : "text-gray-400")} />,
      largeTitle: 'RISK & REMEDIATION ADVICE',
      description: 'Continuous scanning and risk reporting tailored to your business needs. We provide actionable remediation advice to close security gaps.',
      stats: [
        { value: 'VA/PT', label: 'EXPERTS' },
        { value: '80%', label: 'FASTER FIXES' }
      ],
      cta: 'Get a Risk Report',
      themeColor: 'text-cyan-400',
      btnColor: 'bg-cyan-400 hover:bg-cyan-500 text-black',
      underlineColor: 'bg-cyan-400',
      awards: [
        { title: 'Web Pentest', subtitle: 'API security reviews' },
        { title: 'Compliance', subtitle: 'SOC2 readiness support' }
      ]
    },
  ];

  const currentPlatform = platforms.find(p => p.id === activePlatformTab) || platforms[0];

  const engageCards = [
    { title: 'Incident Response', description: 'Under attack? Our IR experts handle breach analysis and recovery.', cta: 'Start Recovery', imageId: 'under-attack' },
    { title: 'Cloud Security Review', description: 'Comprehensive AWS and Azure security reviews.', cta: 'Audit Your Cloud', imageId: 'executive-briefing' },
    { title: 'Purple Team Hunting', description: 'Collaborative exercises to stress-test your existing security controls.', cta: 'Schedule Hunting', imageId: 'ignite-on-tour' },
    { title: 'AI Security Services', description: 'Secure your AI transformation. LLM security and data leakage protection.', cta: 'Secure Your AI', imageId: 'ai-platforms' }
  ];

  const perspectives = [
    { type: 'RESEARCH', title: 'The State of SOC Operations: Proactive in 2025', imageId: 'article-network', theme: 'light' },
    { type: 'GUIDE', title: 'Defending Against Prompt Injection', imageId: 'article-ai', theme: 'dark-red' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-primary/30">
      {/* Top Banner */}
      <div className="bg-[#1a1a1a] text-white text-center py-2 text-[13px] border-b border-white/5">
        <p className="font-medium tracking-wide">Senticore SOC Launch — Elite Blue Team Monitoring Now Available Globally</p>
      </div>

      {/* Utility Nav */}
      <div className="bg-white text-[#444] py-2 px-6 flex justify-between items-center text-[13px] border-b border-gray-200">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 hover:text-black transition-colors uppercase font-normal">EN <ChevronDown className="w-3.5 h-3.5 opacity-60" /></button>
          <button className="hover:text-black transition-colors"><Search className="w-4 h-4" /></button>
        </div>
        <div className="flex items-center gap-6 font-normal">
          <a href="mailto:contact@senticore.com" className="hover:text-black transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> contact@senticore.com
          </a>
          <button onClick={() => scrollToSection('contact')} className="bg-white border border-gray-300 px-5 py-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-gray-600 font-medium">
            Emergency IR?
          </button>
        </div>
      </div>

      {/* Hero Container */}
      <div className="relative flex flex-col min-h-[700px]">
        <div className="absolute inset-0 z-0">
          {heroBg && <Image src={heroBg.imageUrl} alt={heroBg.description} fill className="object-cover opacity-50" priority data-ai-hint={heroBg.imageHint} />}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </div>

        <header className="relative z-[60]" ref={menuRef}>
          <nav className="py-6 px-10 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <SenticoreLogo className="w-12 h-12" />
              <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
                {navItems.map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-primary transition-colors py-2 relative text-[13px] tracking-wide uppercase font-bold text-gray-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#f16632] hover:bg-[#d95528] text-white rounded-full px-10 py-6 font-bold text-sm tracking-wide shadow-lg">
              Get in Touch
            </Button>
          </nav>
        </header>

        <main className="flex-grow flex items-center pb-20 overflow-hidden relative z-10">
          <div className="container mx-auto px-10 max-w-[1400px]">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-[68px] font-bold leading-[1.05] mb-10 tracking-tight text-white">
                Senticore Launches Global SOC Operations
              </h1>
              <p className="text-xl md:text-2xl text-gray-200/90 max-w-4xl leading-relaxed mb-12 font-normal">
                Elite Blue Team (L1/L2) monitoring, SIEM management, and precision incident response for the global enterprise.
              </p>
              <div className="h-[1px] w-full bg-white/20" />
            </div>
          </div>
        </main>
      </div>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-[#0a0a0a] to-black py-32 border-t border-white/10 relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-10 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0 group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative bg-[#121212] border border-white/10 rounded-2xl overflow-hidden h-full shadow-2xl">
                {PlaceHolderImages.find(img => img.id === 'feature-person-bg') && (
                  <Image src={PlaceHolderImages.find(img => img.id === 'feature-person-bg')!.imageUrl} alt="Operations" fill className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2">Established 2025</p>
                  <p className="text-white text-2xl font-bold uppercase tracking-tight">Senticore Global DNA</p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-primary font-black uppercase tracking-[0.4em] text-xs flex items-center gap-4"><div className="w-8 h-[1px] bg-primary" /> Our DNA</h2>
                <h3 className="text-5xl md:text-[64px] font-bold leading-[1.1] text-white tracking-tight">Defending with <span className="italic text-primary">uncompromising precision.</span></h3>
                <p className="text-gray-400 text-lg leading-relaxed font-normal">Senticore Security Global provides world-class Blue Team expertise with proprietary Precision AI® modeling. We manage complex EDR/XDR environments and 24/7 SOC operations.</p>
              </div>
              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/5">
                <div className="space-y-3"><div className="text-4xl font-black text-white italic tracking-tighter">Global</div><div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Operations</div></div>
                <div className="space-y-3"><div className="text-4xl font-black text-white italic tracking-tighter">24/7</div><div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Always-On</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#0a0a0a] py-24 border-t border-white/5 overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="flex flex-wrap items-center gap-12 border-b border-white/10 mb-20">
            {platforms.map((platform) => (
              <button key={platform.id} onClick={() => setActivePlatformTab(platform.id)} className={cn("flex items-center gap-4 pb-6 transition-all relative group", activePlatformTab === platform.id ? "opacity-100" : "opacity-60 hover:opacity-100")}>
                {platform.icon} <span className={cn("text-lg font-bold transition-colors", activePlatformTab === platform.id ? "text-white" : "text-gray-300")}>{platform.name}</span>
                {activePlatformTab === platform.id && <div className={cn("absolute bottom-0 left-0 right-0 h-1", currentPlatform.underlineColor)} />}
              </button>
            ))}
          </div>
          <div key={activePlatformTab} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className={cn("text-6xl md:text-[90px] font-black tracking-[0.02em] uppercase leading-none mb-16", currentPlatform.themeColor)}>{currentPlatform.largeTitle}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-12">
                <p className="text-gray-300 text-xl md:text-[18px] leading-relaxed max-w-xl font-normal">{currentPlatform.description}</p>
                <div className="flex flex-wrap gap-20">
                  {currentPlatform.stats.map((stat, i) => (
                    <div key={i} className="space-y-2"><div className="text-5xl md:text-6xl font-bold text-white">{stat.value}</div><div className="text-xs font-bold text-gray-400 tracking-widest uppercase">{stat.label}</div></div>
                  ))}
                </div>
                <Button onClick={() => scrollToSection('contact')} className={cn("rounded-full px-10 h-14 font-bold", currentPlatform.btnColor)}>Get Quote <ArrowRight className="w-5 h-5" /></Button>
              </div>
              <div className="text-[180px] font-black text-white/10 italic leading-none">{currentPlatform.watermark}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Success Section */}
      <section id="proven-success" className="bg-[#050505] py-24 border-t border-white/5 relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-10 max-w-[1400px] mb-20 text-center">
          <h2 className="text-5xl md:text-[80px] font-black leading-none tracking-tight uppercase mb-8">Proven <span className="text-primary italic">Success</span></h2>
        </div>
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden border-y border-white/10">
          <iframe src="https://www.youtube.com/embed/NBfcGrHR6P0?autoplay=1&mute=1&loop=1&playlist=NBfcGrHR6P0&controls=0&showinfo=0&rel=0" className="absolute inset-0 w-full h-[115%] -top-[7.5%] pointer-events-none" allow="autoplay; encrypted-media" title="Senticore Operations Video" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute bottom-12 left-12 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl flex items-center justify-center"><Shield className="text-primary w-8 h-8" /></div>
            <div><div className="text-xs font-black text-white/50 uppercase tracking-[0.3em]">Live Feed</div><div className="text-2xl font-bold text-white uppercase">Global Threat Hunting Strategy</div></div>
          </div>
        </div>
      </section>

      {/* Perspectives Section */}
      <section id="intel" className="bg-black py-24 border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <h2 className="text-5xl font-bold mb-16">Global Security <span className="text-primary italic">Perspectives</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perspectives.map((article, i) => (
              <div key={i} className={cn("rounded-sm overflow-hidden flex flex-col group cursor-pointer", article.theme === 'light' ? "bg-white text-black" : "bg-[#4a140b] text-white")}>
                <div className="p-10 flex-grow"><div className="text-[11px] font-black uppercase mb-10 opacity-60">{article.type}</div><h3 className="text-2xl font-bold leading-tight">{article.title}</h3></div>
                <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  {PlaceHolderImages.find(img => img.id === article.imageId) && <Image src={PlaceHolderImages.find(img => img.id === article.imageId)!.imageUrl} alt="Article" fill className="object-cover" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#080808] py-32 border-t border-white/10 scroll-mt-20">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-primary font-black uppercase tracking-[0.4em] text-xs">Contact Operations</h2>
                <h3 className="text-5xl font-bold text-white tracking-tight">Request a <span className="text-primary italic">Security Consultation</span></h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">Our experts are available to discuss your security posture, SOC requirements, or emergency incident response needs.</p>
              </div>
              
              <div className="space-y-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Operations</div>
                    <div className="text-lg font-bold text-white">contact@senticore.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Global HQ</div>
                    <div className="text-lg font-bold text-white">Distributed Network Operations</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Professional Connect</div>
                    <div className="text-lg font-bold text-white">Senticore Security Global</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#121212] p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <ShieldCheck className="w-32 h-32 text-primary" />
               </div>
               <form className="relative z-10 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Full Name</label>
                      <Input placeholder="John Doe" className="bg-black/50 border-white/10 text-white h-12 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Enterprise Email</label>
                      <Input type="email" placeholder="john@company.com" className="bg-black/50 border-white/10 text-white h-12 focus:border-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Service Interest</label>
                    <div className="grid grid-cols-2 gap-4">
                       <button type="button" className="px-4 py-2 bg-black border border-white/10 rounded-md text-xs font-bold text-gray-300 hover:border-primary hover:text-white transition-all">SOC as a Service</button>
                       <button type="button" className="px-4 py-2 bg-black border border-white/10 rounded-md text-xs font-bold text-gray-300 hover:border-primary hover:text-white transition-all">Incident Response</button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Security Inquiry</label>
                    <Textarea placeholder="Describe your security requirements..." className="bg-black/50 border-white/10 text-white min-h-[120px] focus:border-primary" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-widest h-14 rounded-full shadow-lg flex items-center justify-center gap-3">
                    Transmit Message <Send className="w-4 h-4" />
                  </Button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#555] py-20 border-t border-gray-200">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h3 className="text-black font-bold text-base mb-10 border-b-2 border-gray-100 pb-2 inline-block w-full max-w-[200px]">Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ul className="space-y-3 text-[13px]"><li>SOC as a Service</li><li>SIEM Management</li><li>Log Monitoring</li></ul>
                <ul className="space-y-3 text-[13px]"><li>EDR Management</li><li>XDR Operations</li><li>Vulnerability Assessment</li></ul>
                <ul className="space-y-3 text-[13px]"><li>Incident Response</li><li>Cloud Security</li><li>AI LLM Security</li></ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-black font-bold text-base mb-10 border-b-2 border-gray-100 pb-2 inline-block w-full">Connect</h3>
              <ul className="space-y-4 text-[13px]">
                <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
                <li><a href="mailto:contact@senticore.com" className="hover:text-black transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Email Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-24 pt-10 border-t border-gray-100 flex items-center justify-between">
            <SenticoreLogo className="w-10 h-10" />
            <p className="text-[11px] text-gray-400 font-medium">© 2025 Senticore Security Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
