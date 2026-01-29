
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [showCookies, setShowCookies] = useState(true);
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-[#1a1a1a] text-center py-2 text-sm border-b border-white/10">
        <p className="font-medium">
          Deploy Bravely — Secure your AI transformation with Prisma AIRE
        </p>
      </div>

      {/* Utility Nav */}
      <div className="bg-white text-black py-2 px-6 flex justify-between items-center text-xs border-b border-gray-200">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            Sign In <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors uppercase">
            EN <ChevronDown className="w-3 h-3" />
          </button>
          <button className="hover:text-primary transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          <a href="#" className="hover:text-primary transition-colors">What's New</a>
          <a href="#" className="hover:text-primary transition-colors">Get Support</a>
          <button className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
            Under Attack?
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-black py-4 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 100 20"
              className="h-6 w-auto fill-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 2h4v16H5V2zm10 0h4v16h-4V2zm10 0h4v16h-4V2z" />
              <text x="35" y="15" className="fill-white font-bold text-[12px]">paloalto</text>
            </svg>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Products</a>
            <a href="#" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">Partners</a>
            <a href="#" className="hover:text-primary transition-colors">Company</a>
            <a href="#" className="hover:text-primary transition-colors">More</a>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2">
          Demos and Trials
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="relative flex-grow flex items-center min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBg && (
            <Image
              src={heroBg.imageUrl}
              alt={heroBg.description}
              fill
              className="object-cover opacity-40"
              priority
              data-ai-hint={heroBg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(241,102,50,0.1),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Palo Alto Networks Completes Chronosphere Acquisition, Unifying Observability and Security for the AI Era
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Combination of Chronosphere and Cortex AgentX platform will deliver real-time, agentic remediation for the world's leading AI-native companies
          </p>
          <div className="mt-12 flex gap-4">
            <div className="h-px bg-white/20 flex-grow" />
          </div>
        </div>
      </main>

      {/* Cookie Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 p-4 z-[100] animate-in slide-in-from-bottom duration-500">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 max-w-4xl text-center md:text-left">
              This site uses cookies essential to its operation, for analytics, and for personalized content and ads. By continuing to browse this site, you acknowledge the use of cookies. <a href="#" className="text-primary hover:underline">Privacy statement</a>
            </p>
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setShowCookies(false)}
                className="bg-accent hover:bg-accent/90 text-white text-xs px-4 h-8 rounded-sm font-bold"
              >
                Manage My Cookie Settings
              </Button>
              <button onClick={() => setShowCookies(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
