
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Home() {
  const [showCookies, setShowCookies] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
    { name: 'Products', hasMenu: true },
    { name: 'Solutions', hasMenu: false },
    { name: 'Services', hasMenu: false },
    { name: 'Partners', hasMenu: false },
    { name: 'Company', hasMenu: false },
    { name: 'More', hasMenu: false },
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

      {/* Hero & Main Nav Container */}
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
          {/* Hexagonal Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          {/* Diagonal Accents (representing the orange/green shapes in the original) */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-primary/10 via-accent/5 to-transparent skew-x-[-20deg] translate-x-1/4" />
        </div>

        {/* Header - Transparent over Hero */}
        <header className="relative z-[60]" ref={menuRef}>
          <nav className="py-6 px-10 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="flex items-center cursor-pointer">
                {/* Logo SVG */}
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
                      "hover:text-primary transition-colors py-2 relative",
                      activeMenu === item.name && "text-primary"
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
              Demos and Trials
            </Button>
          </nav>

          {/* Mega Menu - Products */}
          {activeMenu === 'Products' && (
            <div className="absolute top-full left-0 right-0 bg-white text-black border-t border-gray-200 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="container mx-auto px-10 py-12 max-w-[1400px]">
                <div className="grid grid-cols-12 gap-12">
                  <div className="col-span-8">
                    <div className="flex items-center gap-2 mb-8 group cursor-pointer">
                      <h2 className="text-xl font-medium text-gray-500 group-hover:text-black transition-colors">AI-Powered Network Security Platform</h2>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">AI Security <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                        <ul className="space-y-3 text-[14px]">
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma AIRS</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">AI Access Security</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">Cloud Delivered Security Services <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                        <ul className="space-y-3 text-[14px]">
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Advanced Threat Prevention</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Advanced URL Filtering</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">Next-Generation Firewalls <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                        <ul className="space-y-3 text-[14px]">
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Hardware Firewalls</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Software Firewalls</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">SASE <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                        <ul className="space-y-3 text-[14px]">
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma SASE</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma Browser</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 border-l border-gray-100 pl-12">
                    <div className="flex items-center gap-2 mb-8 group cursor-pointer">
                      <h2 className="text-xl font-medium text-gray-500 group-hover:text-black transition-colors">AI-Driven SOC Platform</h2>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      <div>
                        <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">Cortex <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                        <ul className="space-y-3 text-[14px]">
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex XSIAM</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex XDR</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

      {/* Cookie Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#000000] border-t border-white/10 p-5 z-[100] animate-in slide-in-from-bottom duration-500">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1400px]">
            <p className="text-[14px] text-gray-200/90 leading-normal font-normal">
              This site uses cookies essential to its operation, for analytics, and for personalized content and ads. By continuing to browse this site, you acknowledge the use of cookies. <a href="#" className="text-accent hover:underline font-medium">Privacy statement</a>
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <Button 
                onClick={() => setShowCookies(false)}
                className="bg-accent hover:bg-[#00c853] text-black text-sm px-8 h-12 rounded-sm font-bold tracking-tight"
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
