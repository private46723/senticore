'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, X, ArrowRight, Shield, Activity, Cloud, Trophy, Plus, Clock, Bug, Lock, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Home() {
  const [showCookies, setShowCookies] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activePlatformTab, setActivePlatformTab] = useState('network');
  const menuRef = useRef<HTMLDivElement>(null);

  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Why Palo Alto Networks?', hasMenu: false },
    { name: 'Platforms', hasMenu: true },
    { name: 'Solutions', hasMenu: false },
    { name: 'Proven Success', hasMenu: false },
    { name: 'Engage with Us', hasMenu: false },
  ];

  const platforms = [
    { 
      id: 'network', 
      name: 'AI-Powered Network Security', 
      icon: <Shield className={cn("w-5 h-5 transition-colors", activePlatformTab === 'network' ? "text-yellow-400" : "text-gray-400")} />,
      largeTitle: 'AI-POWERED NETWORK SECURITY',
      description: 'Securing everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the Strata™ Network Security Platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.',
      stats: [
        { value: '95%', label: 'OF THE FORTUNE 100' },
        { value: '70 K', label: 'CUSTOMERS' }
      ],
      cta: 'Explore Network Security',
      themeColor: 'text-yellow-400',
      btnColor: 'bg-yellow-400 hover:bg-yellow-500 text-black',
      underlineColor: 'bg-yellow-400',
      watermark: '13x',
      watermarkLabel: ['NETWORK', 'SECURITY', 'LEADER']
    },
    { 
      id: 'ops', 
      name: 'AI-Driven Security Operations', 
      icon: <Activity className={cn("w-5 h-5 transition-colors", activePlatformTab === 'ops' ? "text-accent" : "text-gray-400")} />,
      largeTitle: 'AI-DRIVEN SECURITY OPERATIONS',
      description: 'Transform the SOC and enable better, faster security with the #1 AI-driven SecOps platform powered by unified data, artificial intelligence and automation.',
      stats: [
        { value: '700+', label: 'PARTNER INTEGRATIONS' },
        { value: '480 B', label: 'ENDPOINTS SCANNED DAILY' }
      ],
      cta: 'Explore SecOps',
      themeColor: 'text-accent',
      btnColor: 'bg-accent hover:bg-[#00c853] text-black',
      underlineColor: 'bg-accent',
      awards: [
        { title: 'Gartner.', subtitle: '2024 Gartner® Magic Quadrant™ for Endpoint Protection Platforms' },
        { title: 'FORRESTER', subtitle: 'Forrester Cybersecurity IR Services Wave' },
        { title: 'FROST & SULLIVAN', subtitle: 'Frost & Sullivan MDR Radar' },
        { title: 'FORRESTER', subtitle: 'Forrester Wave™: Extended Detection And Response Platforms, Q2 2024' }
      ]
    },
    { 
      id: 'cloud', 
      name: 'Real-Time Cloud Security', 
      icon: <Cloud className={cn("w-5 h-5 transition-colors", activePlatformTab === 'cloud' ? "text-accent" : "text-gray-400")} />,
      largeTitle: 'REAL-TIME CLOUD SECURITY',
      description: 'See more, remediate faster, and prevent what others miss with independent, multi-cloud protection on the only platform that merges the industry\'s leading CNAPP with best-in-class CDR.',
      stats: [
        { value: '90%', label: 'RISK REDUCTION WITH SHIFT LEFT' },
        { value: '25x', label: 'REDUCTION IN ALERTS & REMEDIATION WORKFLOWS' }
      ],
      cta: 'Explore Cloud Security',
      themeColor: 'text-accent',
      btnColor: 'bg-accent hover:bg-[#00c853] text-black',
      underlineColor: 'bg-accent',
      awards: [
        { title: 'GIGAOM', subtitle: 'A Leader and Outperformer in the GigaOm Radar for CIEM' },
        { title: 'GIGAOM', subtitle: 'Palo Alto Networks: Cloud Security Leader in First-Ever CNAPP Report' },
        { title: 'FORRESTER', subtitle: 'The Forrester Wave™: Cloud Workload Security, Q1 2024' },
        { title: 'FROST & SULLIVAN', subtitle: 'Frost Radar™: Cloud Security Posture Management, 2024' },
        { title: 'FROST & SULLIVAN', subtitle: 'Frost Radar™ names Palo Alto Networks a CNAPP Leader' },
        { title: 'KUPPINGERCOLE', subtitle: 'Overall leader : 2024 Leadership Compass: Cloud Security Orchestration' }
      ]
    },
  ];

  const currentPlatform = platforms.find(p => p.id === activePlatformTab) || platforms[0];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-primary/30">
      {/* Top Banner */}
      <div className="bg-[#1a1a1a] text-white text-center py-2 text-[13px] border-b border-white/5">
        <p className="font-medium tracking-wide">
          Deploy Bravely — Secure your AI transformation with Prisma AIRS
        </p>
      </div>

      {/* Utility Nav */}
      <div className="bg-white text-[#444] py-2 px-6 flex justify-between items-center text-[13px] border-b border-gray-200">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 hover:text-black transition-colors font-normal">
            Sign In <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>
          <button className="flex items-center gap-1 hover:text-black transition-colors uppercase font-normal">
            EN <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>
          <button className="hover:text-black transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-6 font-normal">
          <a href="#" className="hover:text-black transition-colors">Contact Us</a>
          <a href="#" className="hover:text-black transition-colors">What's New</a>
          <a href="#" className="hover:text-black transition-colors">Get Support</a>
          <button className="bg-white border border-gray-300 px-5 py-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-gray-600 font-medium">
            Under Attack?
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
              <div className="flex items-center cursor-pointer">
                <svg width="160" height="34" viewBox="0 0 160 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6.5L14 1L23.5 6.5V17.5L14 23L4.5 17.5V6.5Z" fill="#F16632"/>
                  <path d="M14 8V16M10 12H18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <text x="32" y="22" fill="white" fontSize="22" fontWeight="700" fontFamily="sans-serif">paloalto</text>
                  <text x="124" y="12" fill="white" fontSize="9" fontFamily="sans-serif" letterSpacing="0.05em">NETWORKS</text>
                </svg>
              </div>
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
              Demos and trials
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="flex-grow flex items-center pb-20 overflow-hidden relative z-10">
          <div className="container mx-auto px-10 max-w-[1400px]">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-[68px] font-bold leading-[1.05] mb-10 tracking-tight text-white">
                Palo Alto Networks Completes Chronosphere Acquisition, Unifying Observability and Security for the AI Era
              </h1>
              <p className="text-xl md:text-2xl text-gray-200/90 max-w-4xl leading-relaxed mb-12 font-normal">
                Combination of Chronosphere and Cortex AgentX platform will deliver real-time, agentic remediation for the world's leading AI-native companies.
              </p>
              <div className="h-[1px] w-full bg-white/20" />
            </div>
          </div>
        </main>
      </div>

      {/* AI Transformation Stats Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="container mx-auto px-10 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-xl">
              <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6">
                The Good News
              </p>
              <h2 className="text-5xl md:text-[64px] font-bold leading-[1.1] text-white">
                AI is rapidly transforming your organization
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-8">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-800" />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 80}
                      strokeDashoffset={(1 - 0.78) * 2 * Math.PI * 80}
                      strokeLinecap="round"
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-white">78 %</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-primary text-2xl font-bold">~1.5X growth</p>
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">In usage in last 12 months</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-8">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-800" />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 80}
                      strokeDashoffset={(1 - 0.94) * 2 * Math.PI * 80}
                      strokeLinecap="round"
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-white">94 %</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-primary text-2xl font-bold lowercase">development</p>
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">Enterprises using Gen AI software</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attackers Scale Section */}
      <section className="bg-black py-24 border-t border-white/5">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-16">
              {[
                { label: 'INCREASE IN EXPLOITED ZERO DAYS (YoY, 2023)', percent: 56 },
                { label: 'INCREASE IN RANSOMWARE ATTACKS (YoY, 2023)', percent: 73 },
                { label: 'INCREASE IN DATA BREACHES AND LEAKS (YoY, 2023)', percent: 56 }
              ].map((stat, i) => (
                <div key={i} className="space-y-4">
                  <p className="text-gray-300 text-[11px] font-bold uppercase tracking-[0.15em]">
                    {stat.label}
                  </p>
                  <div className="flex items-center gap-8">
                    <div className="flex-grow h-4 bg-[#1a1a1a] rounded-full relative overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-900/40 via-primary to-primary rounded-full"
                        style={{ width: `${stat.percent}%` }}
                      />
                    </div>
                    <span className="text-4xl md:text-5xl font-bold text-white min-w-[100px]">{stat.percent}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-xl lg:pl-16">
              <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6">
                The Bad News
              </p>
              <h2 className="text-5xl md:text-[64px] font-bold leading-[1.1] text-white">
                Attackers are supercharging their speed and scale.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Platformization Section */}
      <section className="bg-[#050505] py-24 border-t border-white/5">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-4xl">
              <p className="text-primary text-[13px] font-bold tracking-[0.2em] uppercase mb-8">
                Why Palo Alto Networks
              </p>
              <h2 className="text-4xl md:text-[54px] font-bold leading-[1.2] text-white">
                Platformization empowers you to harness AI-ready infrastructure.
                <span className="text-primary block mt-2">
                  And leverage services powered by Precision AI<sup>®</sup> to keep everything secure.
                </span>
              </h2>
            </div>
            <Button variant="outline" className="rounded-full border-white/20 bg-transparent hover:bg-white hover:text-black px-8 py-7 text-[15px] font-bold transition-all flex items-center gap-3 border-2 shrink-0">
              See our platform approach <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats Cards */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: '90 %', title: 'reduction in MTTR', desc: 'Drive innovation and digital transformation with AI.' },
              { val: '30.9 B', title: 'inline attacks blocked per day', desc: 'Proactively monitor, analyze and prevent sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.', prefix: 'up to ' },
              { val: '480 B', title: 'endpoints scanned daily', desc: 'Enable better, faster security with an integrated suite of battle-tested, AI-driven products.' }
            ].map((card, i) => (
              <div key={i} className="bg-[#121212] border border-white/10 rounded-[32px] p-10 min-h-[460px] flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(135deg, transparent 45%, #F16632 45%, #F16632 55%, transparent 55%)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10 mt-auto">
                  <div className="text-white text-3xl font-normal mb-2 flex items-baseline gap-3">
                    {card.prefix && <span className="text-white text-2xl font-normal opacity-60">{card.prefix}</span>}
                    <span className="text-primary text-6xl md:text-[72px] font-bold tracking-tight">{card.val}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">{card.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-normal">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Tab Section */}
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

              {/* Graphic/Awards Section */}
              <div className="relative flex flex-col items-center justify-center lg:items-end">
                {currentPlatform.awards ? (
                  /* Awards Grid */
                  <div className="w-full max-w-2xl">
                    <div className="flex justify-end mb-6">
                      <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                        See all <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                      {/* Background stylized graphic */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none -z-10 overflow-hidden">
                        <div className="w-full h-full transform scale-150 rotate-[15deg]" style={{ 
                          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, currentColor 10px, currentColor 12px)`,
                          maskImage: 'radial-gradient(circle, black, transparent 70%)'
                        }} className={currentPlatform.themeColor} />
                      </div>

                      {currentPlatform.awards.map((award, i) => (
                        <div key={i} className={cn(
                          "p-6 rounded-lg text-black flex flex-col gap-4 min-h-[140px] hover:scale-[1.02] transition-transform cursor-pointer shadow-lg",
                          currentPlatform.id === 'cloud' ? "bg-accent" : "bg-accent/90"
                        )}>
                          <Trophy className="w-8 h-8 opacity-60" />
                          <div>
                            <h4 className="text-lg font-bold tracking-tight mb-1">{award.title}</h4>
                            <p className="text-[13px] font-medium leading-tight opacity-90">{award.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Watermark Section for Strata */
                  <div className="relative">
                    {/* Diagonal Lines behind the text */}
                    <div className="absolute inset-0 flex items-center justify-center transform scale-150 rotate-[25deg] opacity-40 translate-x-12">
                      <div className="w-[600px] h-[400px]" style={{ 
                        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 12px, currentColor 12px, currentColor 15px)`,
                        maskImage: 'linear-gradient(to right, transparent, black 40%, black 60%, transparent)'
                      }} />
                    </div>
                    
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

      {/* Speed and Scale Live Data Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="mb-16">
            <h2 className="text-5xl md:text-[64px] font-bold leading-tight mb-4">
              So you can defend at <span className="text-primary">speed and scale.</span>
            </h2>
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium tracking-wide">
              <Clock className="w-4 h-4" />
              <span>Daily data as of 01.29.26 at 7AM PST</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            {/* Card 1: Cloud Events */}
            <div className="lg:col-span-7 bg-[#111] border border-white/10 rounded-lg p-10 relative overflow-hidden group hover:border-primary/50 transition-colors flex flex-col justify-between">
              {/* Animated Visualization Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 500">
                  <path d="M100 250 H700" stroke="currentColor" strokeWidth="1" className="text-primary animate-pulse" />
                  <path d="M100 250 Q 200 150 400 250 T 700 250" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/40" />
                  <circle cx="400" cy="250" r="100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary animate-spin-slow" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-8 mb-20">
                  <div className="w-24 h-24 rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-2xl">
                    <Cloud className="w-10 h-10 text-primary" />
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-primary to-transparent" />
                  <div className="w-24 h-24 rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-2xl relative">
                    <Shield className="w-10 h-10 text-primary" />
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary animate-ping opacity-20" />
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-primary" />
                  <div className="w-24 h-24 rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-2xl">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-6xl md:text-[80px] font-bold text-white mb-2 tracking-tighter">1 T</div>
                <div className="text-gray-400 text-lg uppercase tracking-[0.2em] font-bold">Cloud Events Processed</div>
              </div>
            </div>

            {/* Card 2: Exploits Detected */}
            <div className="lg:col-span-5 bg-[#111] border border-white/10 rounded-lg p-10 relative overflow-hidden group hover:border-primary/50 transition-colors flex flex-col justify-between">
              <div className="relative z-10">
                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-10">Exploits Detected</p>
                <div className="space-y-8">
                  {[
                    { name: 'Heartbleed', desc: 'Severely impacts enterprise servers', icon: <Globe className="w-5 h-5" /> },
                    { name: 'Spectre and Meltdown', desc: 'Hardware-based vulnerabilities', icon: <Bug className="w-5 h-5" /> },
                    { name: 'EternalBlue', desc: 'Code exploiting a vulnerability', icon: <Bug className="w-5 h-5" /> },
                    { name: 'ZeroLogon', desc: 'Elevation of privilege (EoP) vulnerability', icon: <Lock className="w-5 h-5" /> }
                  ].map((exploit, i) => (
                    <div key={i} className="flex gap-4 group/item cursor-default">
                      <div className="p-3 rounded-lg bg-black border border-white/5 group-hover/item:border-primary/50 transition-colors">
                        <div className="text-primary">{exploit.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-primary font-bold text-[15px]">{exploit.name}</h4>
                        <p className="text-gray-500 text-sm font-medium">{exploit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-10 mt-auto">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">3.13 K</div>
                <div className="text-gray-400 text-sm uppercase tracking-[0.1em] font-bold">Exploit Attempts Detected</div>
              </div>
            </div>

            {/* Card 3: Malware Executions (Bottom Row Simulation via Grid) */}
            <div className="lg:col-span-4 bg-[#111] border border-white/10 rounded-lg p-10 relative overflow-hidden group hover:border-primary/50 transition-colors min-h-[400px] flex flex-col">
              <div className="flex-grow relative flex items-center justify-center">
                {/* Falling Malware Animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute top-[-20px] w-[2px] h-10 bg-gradient-to-b from-transparent to-red-600 animate-malware-fall"
                      style={{ 
                        left: `${15 + i * 15}%`, 
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: '3s'
                      }}
                    />
                  ))}
                </div>
                <div className="w-20 h-20 rounded-full bg-black border-2 border-primary/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(241,102,50,0.2)]">
                  <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping-slow" />
                </div>
              </div>
              <div className="mt-auto">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">309.39 K</div>
                <div className="text-gray-400 text-sm uppercase tracking-[0.1em] font-bold">Malware Executions Blocked</div>
              </div>
            </div>
            
            {/* Added a filler card to maintain the grid logic if needed, or just let spans handle it */}
            <div className="lg:col-span-8 bg-[#111] border border-white/10 rounded-lg p-10 relative overflow-hidden flex items-center justify-between group hover:border-primary/50 transition-colors">
               <div className="max-w-xl">
                 <h3 className="text-3xl font-bold mb-4">Precision AI<sup>®</sup> for better security</h3>
                 <p className="text-gray-400 text-lg leading-relaxed">
                   Harnessing the power of advanced data and automation to deliver real-time, agentic remediation.
                 </p>
               </div>
               <div className="hidden md:block w-48 h-48 relative">
                 <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow" />
                 <div className="absolute inset-4 border border-primary/40 rounded-full animate-reverse-spin" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-primary" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#000000] border-t border-white/10 p-5 z-[100] animate-in slide-in-from-bottom duration-500">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1400px]">
            <p className="text-[14px] text-gray-200/90 leading-normal font-normal flex-grow">
              This site uses cookies essential to its operation, for analytics, and for personalized content and ads. By continuing to browse this site, you acknowledge the use of cookies. <a href="#" className="text-accent hover:underline font-medium">Privacy statement</a>
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <Button onClick={() => setShowCookies(false)} className="bg-accent hover:bg-[#00c853] text-black text-sm px-8 h-10 rounded-sm font-bold tracking-tight">
                Manage My Cookie Settings
              </Button>
              <button onClick={() => setShowCookies(false)} className="text-gray-400 hover:text-white p-2 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes malware-fall {
          0% { transform: translateY(-20px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(180px); opacity: 0; }
        }
        .animate-malware-fall {
          animation: malware-fall linear infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-reverse-spin {
          animation: spin 8s linear reverse infinite;
        }
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
