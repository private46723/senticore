'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, X, ArrowRight, Shield, Activity, Cloud, Trophy, Plus, Clock, Bug, Lock, User, Globe, Sparkles, Hexagon, Play, Send, Loader2, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { analyzeThreat, type AnalyzeThreatOutput } from '@/ai/flows/analyze-security-threat';

export default function Home() {
  const [showCookies, setShowCookies] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activePlatformTab, setActivePlatformTab] = useState('network');
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

  const engageCards = [
    {
      title: 'Ignite on Tour',
      description: 'Meet decision-makers, experts and practitioners for a day of hands-on learning, strategy building and networking.',
      cta: 'Attend our global roadshow',
      imageId: 'ignite-on-tour'
    },
    {
      title: 'Executive Briefing Center',
      description: 'Get a customized plan to see how our platforms, threat intelligence and expert services help you secure the way forward.',
      cta: 'Plan a collaborative discussion',
      imageId: 'executive-briefing'
    },
    {
      title: 'Under Attack? We\'re Here.',
      description: 'Unit 42® Incident Response explains the breach, works with you to contain and remedy it, and gets you back to business.',
      cta: 'Our experts are standing by',
      imageId: 'under-attack'
    },
    {
      title: 'AI-powered security platforms',
      description: 'Expert advice and insights for using AI-powered solutions to streamline your security posture and mitigate risk.',
      cta: 'Learn more',
      imageId: 'ai-platforms'
    }
  ];

  const perspectives = [
    {
      type: 'ARTICLE',
      title: 'Securing Your AI-Powered Network Transformation: A Guide for C-Suite Leaders',
      imageId: 'article-network',
      theme: 'light'
    },
    {
      type: 'ARTICLE',
      title: 'A New Era of Cybersecurity with AI',
      imageId: 'article-ai',
      theme: 'dark-red'
    }
  ];

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

      {/* Precision AI Analyst Section */}
      <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-24 relative overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-10 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-primary w-6 h-6" />
                <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                  Precision AI® Interactive
                </p>
              </div>
              <h2 className="text-5xl md:text-[64px] font-bold leading-[1.1] text-white mb-8">
                Consult the Precision AI® Analyst
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Leverage our industry-leading AI models to analyze potential threats, decode log anomalies, and receive precision remediation steps instantly.
              </p>
              
              <div className="bg-[#121212] border border-white/10 p-6 rounded-2xl shadow-2xl">
                <form onSubmit={handleAiSubmit} className="relative">
                  <input 
                    type="text" 
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="Ask about a threat or paste a security log..."
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Explain Heartbleed', 'Analyze log anomaly', 'Remediation for SQLi'].map((suggest) => (
                    <button 
                      key={suggest}
                      onClick={() => setAiQuery(suggest)}
                      className="text-[11px] font-bold uppercase tracking-wider text-gray-500 hover:text-primary transition-colors border border-white/5 px-3 py-1.5 rounded-full bg-white/5"
                    >
                      {suggest}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[400px] flex items-center justify-center">
              {aiResponse ? (
                <div className="w-full bg-[#121212] border border-primary/30 rounded-3xl p-10 animate-in fade-in zoom-in duration-500 shadow-[0_0_50px_rgba(241,102,50,0.15)]">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <Shield className="text-primary w-6 h-6" />
                      <h3 className="text-xl font-bold text-white">AI Analysis Result</h3>
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
                      <h4 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.2em] mb-3">Threat Assessment</h4>
                      <p className="text-gray-200 leading-relaxed italic border-l-2 border-primary pl-4">
                        "{aiResponse.analysis}"
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.2em] mb-4">Recommended Actions</h4>
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
                    {aiLoading ? "Consulting Precision AI® Knowledge Graph..." : "Waiting for your input to analyze threats"}
                  </p>
                </div>
              )}
            </div>
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
                  <div className="w-full max-w-2xl">
                    <div className="flex justify-end mb-6">
                      <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                        See all <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
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

      {/* Speed and Scale Live Data Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="mb-16">
            <h2 className="text-5xl md:text-[64px] font-bold leading-tight mb-4 tracking-tight">
              So you can defend at <span className="text-primary italic">speed and scale.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 bg-[#0d0d0d] border border-white/5 rounded-xl p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="relative z-10">
                <div className="text-7xl font-bold text-primary mb-1 tracking-tighter">1 T</div>
                <div className="text-white/60 text-[13px] font-bold uppercase tracking-[0.2em]">Cloud Events Processed</div>
              </div>
            </div>
            <div className="lg:col-span-3 bg-[#0d0d0d] border border-white/5 rounded-xl p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="relative z-10">
                <div className="text-5xl font-bold text-primary mb-1 tracking-tighter">3.13 K</div>
                <div className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em]">Exploit Attempts Detected</div>
              </div>
            </div>
            <div className="lg:col-span-3 bg-[#0d0d0d] border border-white/5 rounded-xl p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between shadow-2xl">
              <div className="relative z-10">
                <div className="text-5xl font-bold text-primary mb-1 tracking-tighter">309.39 K</div>
                <div className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em]">Malware Executions Blocked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engage with Us Section */}
      <section className="bg-black py-24 border-t border-white/5">
        <div className="container mx-auto px-10 max-w-[1400px]">
          {/* Segmented Control Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-[#121212] p-1 rounded-full border border-white/10 flex items-center">
              {['Executives', 'Specialists', 'Partners', 'Customers'].map((tab) => (
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engageCards.map((card, i) => {
              const imgData = PlaceHolderImages.find(img => img.id === card.imageId);
              return (
                <div key={i} className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row h-full group hover:border-primary/30 transition-all duration-500 shadow-xl">
                  {/* Left Side: Image */}
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

                  {/* Right Side: Content */}
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
                Staying ahead demands <br />
                <span className="text-primary italic">perspectives</span> you can trust.
              </h2>
            </div>
            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.2em] group">
              View all <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
            {/* Empty space/extra card placeholder */}
            <div className="hidden md:flex items-center justify-center border border-white/5 bg-[#0a0a0a]/40 rounded-sm">
               <div className="text-white/20 font-bold uppercase tracking-[0.3em] text-xs">Stay Informed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Video Section */}
      <section className="bg-[#0a0a0a] py-32 border-t border-white/5 overflow-hidden" id="proven-success">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="max-w-4xl mb-16">
            <h2 className="text-5xl md:text-[68px] font-bold leading-[1.05] tracking-tight text-white">
              Our customers are securing <br />
              their <span className="text-primary">digital transformation</span>
            </h2>
          </div>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] group">
             <video 
               autoPlay 
               muted 
               loop 
               playsInline 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             >
               <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
             <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-3 max-w-2xl">
                   <div className="inline-block px-3 py-1 bg-primary text-white text-[11px] font-bold tracking-widest uppercase rounded">
                     Case Study
                   </div>
                   <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                     Revolutionizing security architecture for the global AI-native enterprise.
                   </h3>
                </div>
                <Button className="rounded-full bg-white text-black hover:bg-[#f16632] hover:text-white px-12 h-14 font-bold text-base transition-all shadow-xl shrink-0">
                  Watch Story
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white text-[#555] py-20 border-t border-gray-200">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Products and Services Column */}
            <div className="lg:col-span-8">
              <div className="mb-10">
                <h3 className="text-black font-bold text-base mb-4 inline-block border-b-2 border-gray-100 pb-2 w-full max-w-[200px]">
                  Products and Services
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                {/* Network & Cloud Sub-col */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">AI-Powered Network Security Platform</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Secure AI by Design</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Prisma AIRS</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">AI Access Security</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Cloud Delivered Security Services</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Advanced Threat Prevention</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Advanced URL Filtering</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Advanced WildFire</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Advanced DNS Security</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Enterprise Data Loss Prevention</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Enterprise IoT Security</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Medical IoT Security</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Industrial OT Security</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">SaaS Security</a></li>
                    </ul>
                  </div>
                </div>

                {/* Firewalls & SASE Sub-col */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Next-Generation Firewalls</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Hardware Firewalls</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Software Firewalls</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Strata Cloud Manager</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">SD-WAN for NGFW</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">PAN-OS</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Panorama</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Secure Access Service Edge</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Prisma SASE</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Application Acceleration</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Autonomous Digital Experience Management</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Enterprise DLP</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Prisma Access</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Prisma Browser</a></li>
                    </ul>
                  </div>
                </div>

                {/* Ops & SOC & Intel Sub-col */}
                <div className="space-y-10">
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">AI-Driven Security Operations Platform</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Cloud Security</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Cortex Cloud</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Application Security</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Cloud Posture Security</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Cloud Runtime Security</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Prisma Cloud</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">AI-Driven SOC</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Cortex XSIAM</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Cortex XDR</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Cortex XSOAR</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Cortex Xpanse</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-[13px] mb-6 uppercase tracking-tight">Threat Intel and Incident Response Services</h4>
                    <ul className="space-y-3 text-[13px]">
                      <li><a href="#" className="hover:text-black transition-colors">Unit 42 Managed Detection & Response</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Managed XSIAM</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Proactive Assessments</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Incident Response</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Transform Your Security Strategy</a></li>
                      <li><a href="#" className="hover:text-black transition-colors">Discover Threat Intelligence</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h3 className="text-black font-bold text-base mb-10 border-b-2 border-gray-100 pb-2 inline-block w-full">
                Company
              </h3>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Corporate Responsibility</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Investor Relations</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Location</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Newsroom</a></li>
              </ul>
            </div>

            {/* Popular Links Column */}
            <div className="lg:col-span-2">
              <h3 className="text-black font-bold text-base mb-10 border-b-2 border-gray-100 pb-2 inline-block w-full">
                Popular Links
              </h3>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Communities</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Content Library</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Cyberpedia</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Event Center</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Manage Email Preferences</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Products A-Z</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Product Certifications</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Report a Vulnerability</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Sitemap</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Tech Docs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Unit 42</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Do Not Sell or Share My Personal Information</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Branding & Social */}
          <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <svg width="140" height="30" viewBox="0 0 160 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 6.5L14 1L23.5 6.5V17.5L14 23L4.5 17.5V6.5Z" fill="#F16632"/>
                <path d="M14 8V16M10 12H18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <text x="32" y="22" fill="black" fontSize="22" fontWeight="700" fontFamily="sans-serif">paloalto</text>
                <text x="124" y="12" fill="#666" fontSize="9" fontFamily="sans-serif" letterSpacing="0.05em">NETWORKS</text>
              </svg>
              <p className="text-[11px] text-gray-400 font-medium">
                © 2024 Palo Alto Networks, Inc. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#000000] border-t border-white/10 p-5 z-[100] animate-in slide-in-from-bottom duration-500">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1400px]">
            <p className="text-[14px] text-gray-200/90 leading-normal font-normal flex-grow">
              This site uses cookies essential to its operation, for analytics, and for personalized content and ads. By continuing to browse this site, you acknowledge the use of cookies. <a href="#" className="text-accent hover:underline font-medium">Privacy statement</a>
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <Button onClick={() => setShowCookies(false)} className="bg-[#00c853] hover:bg-[#00e676] text-black text-[13px] px-8 h-11 rounded-[4px] font-bold tracking-tight uppercase">
                Manage My Cookie Settings
              </Button>
              <button onClick={() => setShowCookies(false)} className="text-gray-400 hover:text-white p-2 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
