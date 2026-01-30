'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, X, ArrowRight, Shield, Activity, Cloud, Trophy, Plus, Clock, Bug, Lock, User, Globe, Sparkles, Hexagon, Play, Send, Loader2, Linkedin, Twitter, Youtube, Facebook, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { analyzeThreat, type AnalyzeThreatOutput } from '@/ai/flows/analyze-security-threat';

/**
 * A unique, professional logo for Senticore.
 * Combines a geometric hexagon (stability) with a shielded core (security).
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
  const [aiQuery, setAiQuery] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<AnalyzeThreatOutput | null>(null);
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

  async function handleAiSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!aiQuery.trim() || aiLoading) return;

    setAiLoading(true);
    setAiResponse(null);
    try {
      const result = await analyzeThreat({ query: aiQuery });
      setAiResponse(result);
    } catch (error) {
      console.error('AI Analysis failed:', error);
    } finally {
      setAiLoading(false);
    }
  }

  const navItems = [
    { name: 'Why Senticore?', hasMenu: false },
    { name: 'Services', hasMenu: true },
    { name: 'Global Intel', hasMenu: false },
    { name: 'Proven Success', hasMenu: false },
    { name: 'Contact Us', hasMenu: false },
  ];

  const platforms = [
    { 
      id: 'soc', 
      name: 'SOC as a Service', 
      icon: <Shield className={cn("w-5 h-5 transition-colors", activePlatformTab === 'soc' ? "text-yellow-400" : "text-gray-400")} />,
      largeTitle: 'NEXT-GEN SOC AS A SERVICE',
      description: 'Our primary Blue Team (L1/L2) operations provide comprehensive log monitoring, SIEM management, and real-time alert analysis. We handle incident escalation with precision, ensuring your infrastructure is monitored 24/7 by elite security analysts.',
      stats: [
        { value: '24/7', label: 'ELITE MONITORING' },
        { value: '15 MIN', label: 'RESPONSE SLA' }
      ],
      cta: 'Explore SOC Services',
      themeColor: 'text-yellow-400',
      btnColor: 'bg-yellow-400 hover:bg-yellow-500 text-black',
      underlineColor: 'bg-yellow-400',
      watermark: 'L1/L2',
      watermarkLabel: ['BLUE TEAM', 'SOC', 'OPERATIONS']
    },
    { 
      id: 'endpoint', 
      name: 'EDR / XDR Management', 
      icon: <Activity className={cn("w-5 h-5 transition-colors", activePlatformTab === 'endpoint' ? "text-accent" : "text-gray-400")} />,
      largeTitle: 'ADVANCED ENDPOINT DEFENSE',
      description: 'Go beyond basic antivirus with our EDR and XDR management. We provide full-spectrum endpoint protection and automated response capabilities to isolate threats before they can move laterally through your network.',
      stats: [
        { value: '100%', label: 'ENDPOINT VISIBILITY' },
        { value: '99.9%', label: 'THREAT BLOCK RATE' }
      ],
      cta: 'Secure Your Endpoints',
      themeColor: 'text-accent',
      btnColor: 'bg-accent hover:bg-[#00c853] text-black',
      underlineColor: 'bg-accent',
      awards: [
        { title: 'Detection', subtitle: 'Real-time threat hunting and automated containment' },
        { title: 'Remediation', subtitle: 'Zero-touch restoration of compromised systems' },
        { title: 'Analytics', subtitle: 'Behavioral modeling for unknown exploit detection' },
        { title: 'Reporting', subtitle: 'Detailed incident lifecycle and root cause analysis' }
      ]
    },
    { 
      id: 'vulnerability', 
      name: 'Vulnerability Assessment', 
      icon: <Bug className={cn("w-5 h-5 transition-colors", activePlatformTab === 'vulnerability' ? "text-accent" : "text-gray-400")} />,
      largeTitle: 'RISK & REMEDIATION ADVICE',
      description: 'Continuous scanning and risk reporting tailored to your business needs. We don\'t just find bugs; we provide actionable remediation advice to help your team close security gaps and reduce your attack surface.',
      stats: [
        { value: 'VA/PT', label: 'CERTIFIED EXPERTS' },
        { value: '80%', label: 'FASTER REMEDIATION' }
      ],
      cta: 'Get a Risk Report',
      themeColor: 'text-accent',
      btnColor: 'bg-accent hover:bg-[#00c853] text-black',
      underlineColor: 'bg-accent',
      awards: [
        { title: 'Web Pentest', subtitle: 'Focused testing for web applications and APIs' },
        { title: 'Network PT', subtitle: 'Internal and external network security reviews' },
        { title: 'Risk Scoring', subtitle: 'Contextual prioritization of security patches' },
        { title: 'Compliance', subtitle: 'Support for ISO 27001, SOC2, and GDPR readiness' }
      ]
    },
  ];

  const currentPlatform = platforms.find(p => p.id === activePlatformTab) || platforms[0];

  const engageCards = [
    {
      title: 'Incident Response',
      description: 'Under attack? Our IR experts handle breach analysis and recovery, getting your business back online with minimum data loss.',
      cta: 'Start Emergency Recovery',
      imageId: 'under-attack'
    },
    {
      title: 'Cloud Security Review',
      description: 'Comprehensive AWS and Azure security reviews. We ensure your cloud configuration follows industry best practices.',
      cta: 'Audit Your Cloud',
      imageId: 'executive-briefing'
    },
    {
      title: 'Purple Team Hunting',
      description: 'Advanced collaborative exercises between red and blue teams to stress-test your existing security controls.',
      cta: 'Schedule Hunting',
      imageId: 'ignite-on-tour'
    },
    {
      title: 'AI Security Services',
      description: 'Secure your AI transformation. We specialize in LLM security, prompt injection prevention, and data leakage protection.',
      cta: 'Secure Your AI',
      imageId: 'ai-platforms'
    }
  ];

  const perspectives = [
    {
      type: 'RESEARCH',
      title: 'The State of SOC Operations: Moving from Reactive to Proactive in 2025',
      imageId: 'article-network',
      theme: 'light'
    },
    {
      type: 'GUIDE',
      title: 'Defending Against Prompt Injection: A Security Framework for AI Teams',
      imageId: 'article-ai',
      theme: 'dark-red'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-primary/30">
      {/* Top Banner */}
      <div className="bg-[#1a1a1a] text-white text-center py-2 text-[13px] border-b border-white/5">
        <p className="font-medium tracking-wide">
          Senticore SOC Launch — Elite Blue Team Monitoring Now Available Globally
        </p>
      </div>

      {/* Utility Nav */}
      <div className="bg-white text-[#444] py-2 px-6 flex justify-between items-center text-[13px] border-b border-gray-200">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 hover:text-black transition-colors uppercase font-normal">
            EN <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>
          <button className="hover:text-black transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-6 font-normal">
          <a href="mailto:contact@senticore.com" className="hover:text-black transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> contact@senticore.com
          </a>
          <button className="bg-white border border-gray-300 px-5 py-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-gray-600 font-medium">
            Emergency IR?
          </button>
        </div>
      </div>

      {/* Hero Container */}
      <div className="relative flex flex-col min-h-[700px]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {heroBg && (
            <Image
              src={heroBg.imageUrl}
              alt={heroBg.description}
              fill
              className="object-cover opacity-50"
              priority
              data-ai-hint={heroBg.imageHint}
            />
          )}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

        {/* Header */}
        <header className="relative z-[60]" ref={menuRef}>
          <nav className="py-6 px-10 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <SenticoreLogo className="w-12 h-12" />
              <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
                {navItems.map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                    className={cn(
                      "hover:text-primary transition-colors py-2 relative text-[13px] tracking-wide uppercase font-bold",
                      activeMenu === item.name ? "text-primary" : "text-gray-200"
                    )}
                  >
                    {item.name}
                    {activeMenu === item.name && (
                      <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <Button className="bg-[#f16632] hover:bg-[#d95528] text-white rounded-full px-10 py-6 font-bold text-sm tracking-wide shadow-lg">
              Get in Touch
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="flex-grow flex items-center pb-20 overflow-hidden relative z-10">
          <div className="container mx-auto px-10 max-w-[1400px]">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-[68px] font-bold leading-[1.05] mb-10 tracking-tight text-white">
                Senticore Launches Global SOC Operations, Redefining Real-Time Threat Defense
              </h1>
              <p className="text-xl md:text-2xl text-gray-200/90 max-w-4xl leading-relaxed mb-12 font-normal">
                Our elite Blue Team (L1/L2) provides unified log monitoring, SIEM management, and precision incident response for the global enterprise.
              </p>
              <div className="h-[1px] w-full bg-white/20" />
            </div>
          </div>
        </main>
      </div>

      {/* Senticore AI Analyst Section */}
      <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-24 relative overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-10 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-primary w-6 h-6" />
                <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                  Senticore Precision AI®
                </p>
              </div>
              <h2 className="text-5xl md:text-[64px] font-bold leading-1.1 text-white mb-8">
                Consult the Security Analyst
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Leverage our industry-leading threat models to analyze potential risks, decode anomalies, and receive precision remediation steps instantly.
              </p>
              
              <div className="bg-[#121212] border border-white/10 p-6 rounded-2xl shadow-2xl">
                <form onSubmit={handleAiSubmit} className="relative">
                  <input 
                    type="text" 
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="Describe a threat or paste a log snippet..."
                    className="w-full bg-black border border-white/20 rounded-xl py-4 pl-5 pr-14 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button 
                    disabled={aiLoading}
                    type="submit" 
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-lg text-white hover:bg-primary/80 transition-all disabled:opacity-50"
                  >
                    {aiLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  </button>
                </form>
              </div>
            </div>

            <div className="relative min-h-[400px] flex items-center justify-center">
              {aiResponse ? (
                <div className="w-full bg-[#121212] border border-primary/30 rounded-3xl p-10 animate-in fade-in zoom-in duration-500 shadow-[0_0_50px_rgba(241,102,50,0.15)]">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <Shield className="text-primary w-6 h-6" />
                      <h3 className="text-xl font-bold text-white">Senticore Analysis</h3>
                    </div>
                    <div className={cn(
                      "px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest",
                      aiResponse.severity === 'critical' ? "bg-red-500 text-white" : "bg-primary/20 text-primary border border-primary/30"
                    )}>
                      {aiResponse.severity} severity
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.2em] mb-3">Assessment</h4>
                      <p className="text-gray-200 leading-relaxed italic border-l-2 border-primary pl-4">
                        "{aiResponse.analysis}"
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.2em] mb-4">Remediation Steps</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {aiResponse.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-center gap-3 bg-black/40 border border-white/5 p-4 rounded-xl group hover:border-primary/40 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm font-medium text-gray-300">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-8 max-w-sm">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20 animate-pulse">
                    <Sparkles className="text-primary w-10 h-10" />
                  </div>
                  <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm">
                    {aiLoading ? "Consulting Senticore Knowledge Base..." : "Ready to Analyze Security Logs"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Tab Section */}
      <section className="bg-[#0a0a0a] py-24 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-10 max-w-[1400px]">
          {/* Main Tabs */}
          <div className="flex flex-wrap items-center gap-12 border-b border-white/10 mb-20">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActivePlatformTab(platform.id)}
                className={cn(
                  "flex items-center gap-4 pb-6 transition-all relative group",
                  activePlatformTab === platform.id ? "opacity-100" : "opacity-60 hover:opacity-100"
                )}
              >
                {platform.icon}
                <span className={cn(
                  "text-lg font-bold transition-colors",
                  activePlatformTab === platform.id ? "text-white" : "text-gray-300"
                )}>
                  {platform.name}
                </span>
                {activePlatformTab === platform.id && (
                  <div className={cn("absolute bottom-0 left-0 right-0 h-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]", currentPlatform.underlineColor)} />
                )}
              </button>
            ))}
          </div>

          {/* Platform Content Area */}
          <div key={activePlatformTab} className="animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
            {activePlatformTab === 'soc' && (
              <div className="mb-8 flex items-center gap-3">
                 <div className="px-3 py-1 bg-accent/20 border border-accent/30 rounded text-accent text-[10px] font-black uppercase tracking-[0.2em]">
                    Available Now
                 </div>
              </div>
            )}
            <h3 className={cn("text-6xl md:text-[90px] font-black tracking-[0.02em] uppercase leading-none opacity-90 mb-16 max-w-6xl", currentPlatform.themeColor)}>
              {currentPlatform.largeTitle}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              <div className="space-y-12 relative z-10">
                <p className="text-gray-300 text-xl md:text-[18px] leading-relaxed max-w-xl font-normal opacity-90">
                  {currentPlatform.description}
                </p>

                <div className="flex flex-wrap gap-20">
                  {currentPlatform.stats.map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-5xl md:text-6xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs font-bold text-gray-400 tracking-widest uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Button className={cn("rounded-full px-10 h-14 font-bold text-[15px] flex items-center gap-3 shadow-xl transition-all", currentPlatform.btnColor)}>
                  {currentPlatform.cta} <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Graphic/Details Section */}
              <div className="relative flex flex-col items-center justify-center lg:items-end">
                {currentPlatform.awards ? (
                  <div className="w-full max-w-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                      {currentPlatform.awards.map((award, i) => (
                        <div key={i} className={cn(
                          "p-6 rounded-lg text-black flex flex-col gap-4 min-h-[140px] hover:scale-[1.02] transition-transform cursor-pointer shadow-lg",
                          currentPlatform.id === 'vulnerability' ? "bg-accent" : "bg-accent/90"
                        )}>
                          <Lock className="w-8 h-8 opacity-60" />
                          <div>
                            <h4 className="text-lg font-bold tracking-tight mb-1">{award.title}</h4>
                            <p className="text-[13px] font-medium leading-tight opacity-90">{award.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
                      <div className="text-[180px] md:text-[220px] font-black text-white/10 leading-none tracking-tighter italic select-none">
                        {currentPlatform.watermark}
                      </div>
                      <div className="mt-[-20px] space-y-1">
                        {currentPlatform.watermarkLabel?.map((line, idx) => (
                          <div key={idx} className="text-3xl md:text-4xl font-black text-white/20 uppercase tracking-[0.15em] leading-tight select-none">
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed and Scale Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="mb-16">
            <h2 className="text-5xl md:text-[64px] font-bold leading-tight mb-4 tracking-tight">
              Defending global infrastructure at <span className="text-primary italic">speed and scale.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 bg-[#0d0d0d] border border-white/5 rounded-xl p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="relative z-10">
                <div className="text-7xl font-bold text-primary mb-1 tracking-tighter">1.2 B</div>
                <div className="text-white/60 text-[13px] font-bold uppercase tracking-[0.2em]">Security Events Analyzed Daily</div>
              </div>
            </div>
            <div className="lg:col-span-3 bg-[#0d0d0d] border border-white/5 rounded-xl p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="relative z-10">
                <div className="text-5xl font-bold text-primary mb-1 tracking-tighter">4.5 K</div>
                <div className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em]">Malicious IPs Blocked</div>
              </div>
            </div>
            <div className="lg:col-span-3 bg-[#0d0d0d] border border-white/5 rounded-xl p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="relative z-10">
                <div className="text-5xl font-bold text-primary mb-1 tracking-tighter">150+</div>
                <div className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em]">Active Breach Responses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Success Section - Full Width Video */}
      <section id="proven-success" className="bg-[#050505] py-24 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-10 max-w-[1400px] mb-20 text-center">
          <h2 className="text-5xl md:text-[80px] font-black leading-none tracking-tight uppercase mb-8">
            Proven <span className="text-primary italic">Success</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-4xl mx-auto">
            Senticore delivers measurable security outcomes for the world's most targeted industries. Witness our global Blue Team in action.
          </p>
        </div>

        {/* Full Width Video Container */}
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden border-y border-white/10 shadow-[0_0_120px_rgba(241,102,50,0.1)]">
          <iframe
            src="https://www.youtube.com/embed/NBfcGrHR6P0?autoplay=1&mute=1&loop=1&playlist=NBfcGrHR6P0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1"
            className="absolute inset-0 w-full h-[115%] -top-[7.5%] pointer-events-none"
            allow="autoplay; encrypted-media"
            title="Senticore Operations Video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />
          
          <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl flex items-center justify-center">
                <Shield className="text-primary w-8 h-8" />
              </div>
              <div>
                <div className="text-xs font-black text-white/50 uppercase tracking-[0.3em] mb-1">Live Operation Feed</div>
                <div className="text-2xl font-bold text-white uppercase tracking-tight">Global Threat Hunting Strategy 2025</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Secure Protocol Active</span>
               </div>
               <div className="text-white/40 text-sm font-mono tracking-widest uppercase">08:42:12</div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pt-20 border-t border-white/5">
            <div className="space-y-4">
              <div className="text-6xl font-black text-white tracking-tighter">99.9%</div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] border-l-2 border-primary pl-4">Threat Containment Rate</p>
              <p className="text-sm text-gray-500 leading-relaxed">Verified precision in isolating high-risk vectors before lateral movement occurs.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-black text-white tracking-tighter">&lt; 15m</div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] border-l-2 border-primary pl-4">Average Response SLA</p>
              <p className="text-sm text-gray-500 leading-relaxed">Industry-leading response times powered by Senticore's global L1/L2 distribution.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-black text-white tracking-tighter">1.5M</div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] border-l-2 border-primary pl-4">Daily Anomalies Resolved</p>
              <p className="text-sm text-gray-500 leading-relaxed">Seamless AI-driven filtering ensures only critical alerts reach your leadership team.</p>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-16 py-8 font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
              View Detailed Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Engage with Us Section */}
      <section className="bg-black py-24 border-t border-white/5">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="flex justify-center mb-16">
            <div className="bg-[#121212] p-1 rounded-full border border-white/10 flex items-center">
              {['Executives', 'Security Teams', 'Partners', 'Compliance'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveEngageTab(tab)}
                  className={cn(
                    "px-8 py-3 rounded-full text-sm font-bold transition-all uppercase tracking-wider",
                    activeEngageTab === tab 
                      ? "bg-primary text-white shadow-lg" 
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engageCards.map((card, i) => {
              const imgData = PlaceHolderImages.find(img => img.id === card.imageId);
              return (
                <div key={i} className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row h-full group hover:border-primary/30 transition-all duration-500 shadow-xl">
                  <div className="relative w-full md:w-[45%] h-[240px] md:h-auto overflow-hidden">
                    {imgData && (
                      <Image
                        src={imgData.imageUrl}
                        alt={imgData.description}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        data-ai-hint={imgData.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#121212]/10 md:to-[#121212]/40" />
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8 flex-grow">
                      {card.description}
                    </p>
                    <button className="flex items-center gap-3 text-primary font-bold text-sm tracking-wide uppercase group/btn transition-colors hover:text-primary/80">
                      {card.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perspectives Section */}
      <section className="bg-black py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 40px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-10 max-w-[1400px] relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <h2 className="text-5xl md:text-[64px] font-bold leading-tight tracking-tight">
                Global security demands <br />
                <span className="text-primary italic">perspectives</span> you can trust.
              </h2>
            </div>
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.2em] group">
              View Intel Library <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perspectives.map((article, i) => {
              const imgData = PlaceHolderImages.find(img => img.id === article.imageId);
              return (
                <div key={i} className={cn(
                  "flex flex-col h-full rounded-sm overflow-hidden transition-all duration-500 group cursor-pointer hover:translate-y-[-4px]",
                  article.theme === 'light' ? "bg-white text-black" : "bg-[#4a140b] text-white"
                )}>
                  <div className="p-10 flex-grow flex flex-col">
                    <div className={cn("text-[11px] font-black tracking-[0.3em] uppercase mb-10 opacity-60")}>
                      {article.type}
                    </div>
                    <h3 className="text-2xl md:text-[28px] font-bold leading-tight mb-12">
                      {article.title}
                    </h3>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    {imgData && (
                      <Image
                        src={imgData.imageUrl}
                        alt={imgData.description}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={imgData.imageHint}
                      />
                    )}
                  </div>
                </div>
              );
            })}
            <div className="hidden md:flex flex-col items-center justify-center border border-white/5 bg-[#0a0a0a]/40 rounded-sm p-10 text-center">
               <Globe className="w-12 h-12 text-primary mb-6 opacity-40" />
               <div className="text-white/20 font-bold uppercase tracking-[0.3em] text-xs">Senticore Global Intelligence Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#555] py-20 border-t border-gray-200">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="mb-10">
                <h3 className="text-black font-bold text-base mb-4 inline-block border-b-2 border-gray-100 pb-2 w-full max-w-[200px]">
                  Services & Operations
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                <div className="space-y-10">
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Managed SOC</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">SOC as a Service (L1/L2)</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">SIEM Management</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Log Monitoring</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Endpoint Defense</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">EDR Management</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">XDR Operations</a></li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-10">
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Assessments</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Vulnerability Assessment</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Penetration Testing</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Incident Response</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Breach Analysis</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Forensics Recovery</a></li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-10">
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Cloud & AI Security</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Cloud Reviews</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">AI LLM Security</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Advanced</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Purple Team Hunting</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-black font-bold text-base mb-10 border-b-2 border-gray-100 pb-2 inline-block w-full">Company</h3>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                <li><a href="mailto:contact@senticore.com" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-black font-bold text-base mb-10 border-b-2 border-gray-100 pb-2 inline-block w-full">Connect</h3>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
                <li><a href="#" className="hover:text-black transition-colors flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter / X</a></li>
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

      {/* Cookie Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 p-5 z-[100]">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1400px]">
            <p className="text-[14px] text-gray-200/90 leading-normal font-normal flex-grow">
              Senticore uses essential cookies to ensure global security and personalized insights. <a href="#" className="text-accent hover:underline font-medium">Privacy statement</a>
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <Button onClick={() => setShowCookies(false)} className="bg-[#00c853] hover:bg-[#00e676] text-black text-[13px] px-8 h-11 rounded-[4px] font-bold tracking-tight uppercase">
                Manage Cookie Settings
              </Button>
              <button onClick={() => setShowCookies(false)} className="text-gray-400 hover:text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
