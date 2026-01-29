'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, X, ArrowRight, Shield, Activity, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Home() {
  const [showCookies, setShowCookies] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>('Platforms');
  const [activePlatformTab, setActivePlatformTab] = useState('network');
  const menuRef = useRef<HTMLDivElement>(null);

  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // We keep 'Platforms' active as per the user's latest request screenshot
        // setActiveMenu(null);
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
      icon: <Shield className={cn("w-6 h-6 transition-colors", activePlatformTab === 'network' ? "text-yellow-400 fill-yellow-400/20" : "text-gray-400")} />,
      largeTitle: 'AI-POWERED NETWORK SECURITY'
    },
    { 
      id: 'ops', 
      name: 'AI-Driven Security Operations', 
      icon: <Activity className={cn("w-6 h-6 transition-colors", activePlatformTab === 'ops' ? "text-yellow-400" : "text-gray-400")} />,
      largeTitle: 'AI-DRIVEN SECURITY OPERATIONS'
    },
    { 
      id: 'cloud', 
      name: 'Real-Time Cloud Security', 
      icon: <Cloud className={cn("w-6 h-6 transition-colors", activePlatformTab === 'cloud' ? "text-yellow-400 fill-yellow-400/20" : "text-gray-400")} />,
      largeTitle: 'REAL-TIME CLOUD SECURITY'
    },
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
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-primary/10 via-accent/5 to-transparent skew-x-[-20deg] translate-x-1/4" />
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
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full blur-[1px] animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full blur-[1px] animate-pulse delay-700" />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full blur-[1px] animate-pulse delay-300" />
          <div className="absolute top-10 right-20 w-40 h-40 opacity-20 border-t-2 border-r-2 border-primary skew-x-[-20deg]" />
        </div>

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
      <section className="bg-black py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none opacity-40">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full bg-gradient-to-r from-red-900/10 to-transparent blur-3xl" />
           <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-red-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-10 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-16">
              <div className="space-y-4">
                <p className="text-gray-300 text-[11px] font-bold uppercase tracking-[0.15em]">
                  INCREASE IN EXPLOITED ZERO DAYS (YoY, 2023)
                </p>
                <div className="flex items-center gap-8">
                  <div className="flex-grow h-4 bg-[#1a1a1a] rounded-full relative overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-900/40 via-primary to-primary rounded-full"
                      style={{ width: '56%' }}
                    />
                  </div>
                  <span className="text-4xl md:text-5xl font-bold text-white min-w-[100px]">56%</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-[11px] font-bold uppercase tracking-[0.15em]">
                  INCREASE IN RANSOMWARE ATTACKS (YoY, 2023)
                </p>
                <div className="flex items-center gap-8">
                  <div className="flex-grow h-4 bg-[#1a1a1a] rounded-full relative overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-900/40 via-primary to-primary rounded-full"
                      style={{ width: '73%' }}
                    />
                  </div>
                  <span className="text-4xl md:text-5xl font-bold text-white min-w-[100px]">73%</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-[11px] font-bold uppercase tracking-[0.15em]">
                  INCREASE IN DATA BREACHES AND LEAKS (YoY, 2023)
                </p>
                <div className="flex items-center gap-8">
                  <div className="flex-grow h-4 bg-[#1a1a1a] rounded-full relative overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-900/40 via-primary to-primary rounded-full"
                      style={{ width: '56%' }}
                    />
                  </div>
                  <span className="text-4xl md:text-5xl font-bold text-white min-w-[100px]">56%</span>
                </div>
              </div>
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
      <section className="bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
          }} 
        />
        
        <div className="container mx-auto px-10 max-w-[1400px] relative z-10">
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
            
            <div className="shrink-0">
              <Button 
                variant="outline" 
                className="rounded-full border-white/20 bg-transparent hover:bg-white hover:text-black px-8 py-7 text-[15px] font-bold transition-all flex items-center gap-3 border-2"
              >
                See our platform approach <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }} 
        />
        
        <div className="container mx-auto px-10 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#121212] border border-white/10 rounded-[32px] p-10 min-h-[460px] flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, transparent 45%, #F16632 45%, #F16632 55%, transparent 55%)',
                  backgroundSize: '20px 20px'
                }} 
              />
              <div className="relative z-10 mt-auto">
                <div className="text-primary text-6xl md:text-[72px] font-bold mb-6 tracking-tight">90 %</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">reduction in MTTR</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-[280px] font-normal">
                  Drive innovation and digital transformation with AI.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#121212] border border-white/10 rounded-[32px] p-10 min-h-[460px] flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, transparent 45%, #F16632 45%, #F16632 55%, transparent 55%)',
                  backgroundSize: '20px 20px'
                }} 
              />
              <div className="relative z-10 mt-auto">
                <div className="text-white text-3xl font-normal mb-2 flex items-baseline gap-3">
                  up to <span className="text-primary text-6xl md:text-[72px] font-bold tracking-tight">30.9 B</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">inline attacks blocked per day</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-normal">
                  Proactively monitor, analyze and prevent sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121212] border border-white/10 rounded-[32px] p-10 min-h-[460px] flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, transparent 45%, #F16632 45%, #F16632 55%, transparent 55%)',
                  backgroundSize: '20px 20px'
                }} 
              />
              <div className="relative z-10 mt-auto">
                <div className="text-primary text-6xl md:text-[72px] font-bold mb-6 tracking-tight">480 B</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">endpoints scanned daily</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-normal">
                  Enable better, faster security with an integrated suite of battle-tested, AI-driven products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Tab Section */}
      <section className="bg-black py-24 border-t border-white/5">
        <div className="container mx-auto px-10 max-w-[1400px]">
          <h2 className="text-5xl md:text-[64px] font-bold leading-tight text-white mb-16 max-w-4xl">
            Introducing the Platforms, powered by Precision AI
          </h2>

          {/* Platform Tabs */}
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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                )}
              </button>
            ))}
          </div>

          {/* Platform Content Area */}
          <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-6xl md:text-[110px] font-black text-yellow-400 tracking-[0.05em] uppercase leading-none opacity-90 drop-shadow-[0_0_20px_rgba(250,204,21,0.15)]">
              {platforms.find(p => p.id === activePlatformTab)?.largeTitle}
            </h3>
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
              <Button 
                onClick={() => setShowCookies(false)}
                className="bg-accent hover:bg-[#00c853] text-black text-sm px-8 h-10 rounded-sm font-bold tracking-tight"
              >
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
