
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
    <div className="flex flex-col min-h-screen bg-black text-white font-body">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm border-b border-white/10">
        <p className="font-medium tracking-wide">
          Deploy Bravely — Secure your AI transformation with Prisma AIRS
        </p>
      </div>

      {/* Utility Nav */}
      <div className="bg-[#f2f2f2] text-black py-1 px-6 flex justify-between items-center text-xs border-b border-gray-200">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
            Sign In <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors uppercase font-medium">
            EN <ChevronDown className="w-3 h-3" />
          </button>
          <button className="hover:text-primary transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          <a href="#" className="hover:text-primary transition-colors">What's New</a>
          <a href="#" className="hover:text-primary transition-colors">Get Support</a>
          <button className="bg-white border border-gray-300 px-4 py-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            Under Attack?
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <header className="relative z-[60]" ref={menuRef}>
        <nav className="bg-white text-black py-4 px-6 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {/* Simplified Logo SVG based on image */}
                <svg width="140" height="30" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 5.5L12 1L19.5 5.5V14.5L12 19L4.5 14.5V5.5Z" fill="#F16632"/>
                  <path d="M12 7V13M9 10H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <text x="28" y="20" fill="black" fontSize="18" fontWeight="bold" fontFamily="sans-serif">paloalto</text>
                  <text x="105" y="10" fill="black" fontSize="8" fontFamily="sans-serif">NETWORKS</text>
                </svg>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium h-full">
              {navItems.map((item) => (
                <div key={item.name} className="relative group h-full">
                  <button 
                    onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                    className={cn(
                      "hover:text-primary transition-colors py-2 relative",
                      activeMenu === item.name && "text-primary"
                    )}
                  >
                    {item.name}
                    {activeMenu === item.name && (
                      <div className="absolute -bottom-[21px] left-0 right-0 h-1 bg-primary" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-2 font-bold text-sm">
            Demos and Trials
          </Button>
        </nav>

        {/* Mega Menu - Products */}
        {activeMenu === 'Products' && (
          <div className="absolute top-full left-0 right-0 bg-white text-black border-t border-gray-200 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-10 py-12 max-w-[1400px]">
              <div className="grid grid-cols-12 gap-12">
                
                {/* Column 1: AI-Powered Network Security */}
                <div className="col-span-8">
                  <div className="flex items-center gap-2 mb-8 group cursor-pointer">
                    <h2 className="text-xl font-medium text-gray-500 group-hover:text-black transition-colors">AI-Powered Network Security Platform</h2>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="grid grid-cols-4 gap-8">
                    {/* Sub-Col: AI Security */}
                    <div>
                      <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">AI Security <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                      <ul className="space-y-3 text-[14px]">
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma AIRS</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">AI Access Security</a></li>
                      </ul>
                    </div>

                    {/* Sub-Col: Cloud Delivered */}
                    <div>
                      <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">Cloud Delivered Security Services <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                      <ul className="space-y-3 text-[14px]">
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Advanced Threat Prevention</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Advanced URL Filtering</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Advanced WildFire</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Advanced DNS Security</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Enterprise Data Loss Prevention</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Enterprise Device Security</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Medical Device Security</a></li>
                      </ul>
                    </div>

                    {/* Sub-Col: Next-Gen Firewalls */}
                    <div>
                      <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">Next-Generation Firewalls <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                      <ul className="space-y-3 text-[14px]">
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Hardware Firewalls</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Software Firewalls</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Strata Cloud Manager</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">SD-WAN for NGFW</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">PAN-OS</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Panorama</a></li>
                      </ul>
                    </div>

                    {/* Sub-Col: SASE */}
                    <div>
                      <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">Secure Access Service Edge <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                      <ul className="space-y-3 text-[14px]">
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma SASE</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Application Acceleration</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Autonomous Digital Experience Management</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Enterprise DLP</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma Access</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma Browser</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma SD-WAN</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column 2: AI-Driven Security Operations */}
                <div className="col-span-4 border-l border-gray-100 pl-12">
                  <div className="flex items-center gap-2 mb-8 group cursor-pointer">
                    <h2 className="text-xl font-medium text-gray-500 group-hover:text-black transition-colors">AI-Driven Security Operations Platform</h2>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {/* Sub-Col: Cloud Security */}
                    <div>
                      <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">Cloud Security <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                      <ul className="space-y-3 text-[14px]">
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex Cloud</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Application Security</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cloud Posture Security</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cloud Runtime Security</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Prisma Cloud</a></li>
                      </ul>
                    </div>

                    {/* Sub-Col: AI-Driven SOC */}
                    <div>
                      <h3 className="text-[15px] font-bold mb-4 flex items-center gap-1">AI-Driven SOC <ArrowRight className="w-3 h-3 text-gray-400" /></h3>
                      <ul className="space-y-3 text-[14px]">
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex XSIAM</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex XDR</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex AgentX</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex XSOAR</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex Exposure Management</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex Xpanse</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Cortex Advanced Email Security</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="relative flex-grow flex items-center min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBg && (
            <Image
              src={heroBg.imageUrl}
              alt={heroBg.description}
              fill
              className="object-cover opacity-60"
              priority
              data-ai-hint={heroBg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(241,102,50,0.15),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 max-w-4xl tracking-tight">
            Palo Alto Networks Completes Chronosphere Acquisition, Unifying Observability and Security for the AI Era
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10 font-normal">
            Combination of Chronosphere and Cortex AgentX platform will deliver real-time, agentic remediation for the world's leading AI-native companies.
          </p>
          <div className="h-[2px] w-full bg-white/20" />
        </div>
      </main>

      {/* Cookie Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#000000] border-t border-white/10 p-4 z-[100] animate-in slide-in-from-bottom duration-500">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl">
            <p className="text-[13px] text-gray-300 max-w-5xl leading-tight">
              This site uses cookies essential to its operation, for analytics, and for personalized content and ads. By continuing to browse this site, you acknowledge the use of cookies. <a href="#" className="text-[#00e676] hover:underline font-medium">Privacy statement</a>
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <Button 
                onClick={() => setShowCookies(false)}
                className="bg-[#00e676] hover:bg-[#00c853] text-black text-sm px-8 h-10 rounded-sm font-bold tracking-tight"
              >
                Manage My Cookie Settings
              </Button>
              <button onClick={() => setShowCookies(false)} className="text-gray-400 hover:text-white p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
