
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  ArrowRight, 
  Shield, 
  Activity, 
  Bug, 
  Lock, 
  Mail, 
  ShieldCheck, 
  Target, 
  Zap, 
  Cpu, 
  Terminal, 
  CheckCircle2,
  Globe,
  Loader2,
  X,
  Play,
  FileText,
  AlertTriangle,
  Radar,
  ScanSearch,
  Crosshair
} from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';
import { analyzeThreat, type AnalyzeThreatOutput } from '@/ai/flows/analyze-security-threat';

const RedwallLogo = ({ className = "h-8", iconOnly = false }: { className?: string, iconOnly?: boolean }) => (
  <div className={cn("flex items-center gap-2 group cursor-pointer", !iconOnly && "w-auto")}>
    <div className={cn("flex items-center", className)}>
      <span className="text-3xl font-black tracking-tighter text-primary">Red</span>
      <div className="relative mx-1 w-8 h-10 flex items-center justify-center">
        <svg viewBox="0 0 100 120" className="w-full h-full fill-primary drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]">
           <path d="M50 0 L90 20 V60 C90 90 50 115 50 115 C50 115 10 90 10 60 V20 L50 0Z" />
        </svg>
      </div>
      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-3xl font-black tracking-tighter text-zinc-100">Wall</span>
          <span className="text-[7px] tracking-[0.4em] text-zinc-500 font-black uppercase -mt-1">Cyber Defense</span>
        </div>
      )}
    </div>
  </div>
);

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid enterprise email." }),
  message: z.string().min(10, { message: "Inquiry must be at least 10 characters." }),
});

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  // Threat Hunter State
  const [isHunterOpen, setIsHunterOpen] = useState(false);
  const [threatInput, setThreatInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeThreatOutput | null>(null);

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
      title: t.contact.success,
      description: t.contact.successSub,
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  const handleAnalyzeThreat = async () => {
    if (!threatInput.trim()) return;
    setIsAnalyzing(true);
    try {
      const result = await analyzeThreat({ query: threatInput });
      setAnalysisResult(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: t.threatHunter.error,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const navItems = [
    { name: t.nav.about, id: 'about' },
    { name: t.nav.services, id: 'services' },
    { name: t.nav.intel, id: 'intel' },
    { name: t.nav.proven, id: 'proven-success' },
    { name: t.nav.contact, id: 'contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-primary/30 w-full overflow-x-hidden">
      {/* Utility Dashboard Bar */}
      <div className="bg-black/80 backdrop-blur-xl border-b border-white/5 py-2 px-6 md:px-12 flex justify-between items-center text-[11px] font-black uppercase tracking-widest sticky top-0 z-[100] w-full">
        <div className="flex items-center gap-6 md:gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-zinc-400 outline-none">
                <Globe className="w-3.5 h-3.5" /> {language} <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0a0a0a] border-white/10 z-[110]">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as any)} className="flex items-center gap-3 cursor-pointer hover:bg-white/5 text-zinc-300 font-black uppercase text-[10px] py-3 px-4">
                  <span className="opacity-60">{lang.flag}</span> {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="h-4 w-px bg-white/10" />
          <button onClick={() => setIsSearchOpen(true)} className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors">
            <Search className="w-3.5 h-3.5" /> {t.search.placeholder}
          </button>
        </div>
        <div className="flex items-center gap-6 md:gap-8 text-zinc-500">
          <div className="items-center gap-3 hidden md:flex">
             <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
             <span>Redwall Ops Online</span>
          </div>
          <button onClick={() => scrollToSection('contact')} className="text-primary hover:text-white transition-colors md:border-l border-white/10 md:pl-8">
            {t.nav.emergency}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBg && <Image src={heroBg.imageUrl} alt={heroBg.description} fill className="object-cover opacity-30 grayscale contrast-125" priority data-ai-hint={heroBg.imageHint} />}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/40 to-black" />
        </div>

        <header className="relative z-30 pt-10">
          <nav className="px-6 md:px-12 flex items-center justify-between">
            <div className="flex items-center gap-12 lg:gap-24">
              <RedwallLogo className="h-10 md:h-12" />
              <div className="hidden lg:flex items-center gap-12">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-primary transition-all py-2 text-[11px] tracking-[0.3em] uppercase font-black text-zinc-400 hover:tracking-[0.4em]"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 md:px-10 h-14 md:h-16 font-black text-xs tracking-[0.3em] uppercase border-none transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)]">
              {t.nav.getInTouch}
            </Button>
          </nav>
        </header>

        <main className="flex-grow flex items-center relative z-10">
          <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="max-w-5xl">
              <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] mb-8 md:mb-12 animate-in fade-in slide-in-from-left-4 duration-1000">
                <div className="w-8 md:w-12 h-px bg-primary" /> Global Precision Defense
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[92px] font-black leading-[0.95] mb-8 md:mb-12 tracking-tighter text-white uppercase italic">
                {t.hero.title} <br />
                <span className="text-primary not-italic">{t.hero.precision}</span>
              </h1>
              <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-12 md:mb-16 font-medium">
                {t.hero.sub}
              </p>
              <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                 <Button onClick={() => scrollToSection('services')} className="bg-white text-black hover:bg-zinc-200 rounded-none px-8 md:px-12 h-14 md:h-18 font-black uppercase text-xs tracking-[0.4em] shadow-2xl border-none">
                   {t.hero.cta1}
                 </Button>
                 <button onClick={() => setIsHunterOpen(true)} className="flex items-center gap-4 text-zinc-100 hover:text-primary transition-all font-black uppercase text-xs tracking-[0.4em] group">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Radar className="w-5 h-5 text-primary" />
                   </div>
                   {t.threatHunter.cta}
                 </button>
              </div>
            </div>
          </div>
        </main>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-12 z-20 hidden md:flex items-center gap-8">
           <div className="flex flex-col gap-2 items-center">
              <div className="w-px h-24 bg-gradient-to-t from-primary to-transparent" />
              <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest vertical-rl">OPS SCROLL</span>
           </div>
        </div>
      </div>

      {/* Stats Dashboard */}
      <section className="bg-black py-16 md:py-24 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
              {[t.about.stat1, t.about.stat2, t.about.stat3].map((stat, i) => (
                <div key={i} className="flex flex-col gap-4 group">
                   <div className="text-4xl md:text-6xl font-black text-white italic tracking-tighter group-hover:text-primary transition-colors">{stat.value}</div>
                   <div className="flex items-center gap-4">
                      <div className="w-8 h-[1px] bg-primary/30" />
                      <div className="text-[10px] font-black text-zinc-500 tracking-[0.4em] md:tracking-[0.5em] uppercase">{stat.label}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#050505] py-24 md:py-48 scroll-mt-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="space-y-8 md:space-y-12">
              <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">{t.nav.about}</h2>
              <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.0] uppercase italic">{t.about.title}</h3>
              <p className="text-zinc-400 text-lg md:text-2xl leading-relaxed max-w-2xl font-medium">{t.about.sub}</p>
              <div className="pt-8 md:pt-12">
                 <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-none px-10 md:px-12 h-14 md:h-16 font-black uppercase text-[11px] tracking-[0.4em]">
                    Read Operations Charter
                 </Button>
              </div>
            </div>
            <div className="relative aspect-square">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute w-[60%] h-[60%] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               </div>
               <div className="relative z-10 w-full h-full border border-white/5 bg-black/40 backdrop-blur-2xl flex items-center justify-center p-8 md:p-12 lg:p-20 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
                  <div className="relative w-full h-full flex items-center justify-center">
                     <svg viewBox="0 0 100 100" className="w-full h-full absolute opacity-20 text-zinc-600">
                        <path d="M50 0 V100 M0 50 H100" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 5 L88.97 27.5 V72.5 L50 95 L11.03 72.5 V27.5 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                     </svg>
                     <div className="relative z-20 transform scale-110 md:scale-125">
                        <RedwallLogo iconOnly className="h-20 md:h-40" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-black py-24 md:py-48 border-t border-white/5 scroll-mt-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="mb-16 md:mb-32 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="max-w-3xl">
              <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[10px] mb-8 md:mb-12">{t.nav.services}</h2>
              <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 md:mb-12 uppercase leading-none">{t.services.title}</h3>
              <p className="text-zinc-500 text-lg md:text-2xl font-medium leading-relaxed">{t.services.sub}</p>
            </div>
            <div className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] lg:tracking-[0.5em] pb-4">
               Tactical Roadmap v4.0
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {t.services.items.map((service: any) => (
              <div key={service.id} className="group p-8 md:p-12 bg-black hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col h-full relative">
                <div className="flex justify-between items-start mb-12 md:mb-16">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[8px] font-black px-3 py-1 bg-white/5 border border-white/5 text-zinc-500 uppercase tracking-widest">
                    {service.status}
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter italic group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-12 md:mb-16 flex-grow">{service.desc}</p>
                <div className="pt-8 flex items-center justify-between">
                   <div className="w-8 h-px bg-white/10 group-hover:w-16 transition-all group-hover:bg-primary" />
                   <button className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 group-hover:text-zinc-300 transition-colors">
                     INSPECT
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Intel Section */}
      <section id="intel" className="bg-[#050505] py-24 md:py-48 border-t border-white/5 scroll-mt-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16 md:mb-32">
             <div className="space-y-8 md:space-y-12">
                <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">{t.nav.intel}</h2>
                <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">{t.intel.title}</h3>
                <p className="text-zinc-500 text-lg md:text-2xl max-w-xl font-medium">{t.intel.sub}</p>
             </div>
             <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-none px-10 h-16 font-black uppercase text-[11px] tracking-[0.4em]">
                Intel Archive Access
             </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {t.intel.news.map((item: any, i: number) => (
              <div key={i} className="group cursor-pointer bg-black p-8 md:p-10 hover:bg-[#0a0a0a] transition-all border border-white/5">
                <div className="aspect-square bg-zinc-900 mb-8 md:mb-12 overflow-hidden relative border border-white/5">
                  <div className="absolute top-6 left-6 z-10 bg-primary px-3 py-1 rounded-none text-[8px] font-black tracking-[0.3em] uppercase">
                    {item.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-[1]" />
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-1000 opacity-40">
                     <Image 
                       src={`https://picsum.photos/seed/${i+100}/800/800`} 
                       alt="intel" 
                       fill 
                       className="object-cover grayscale" 
                       data-ai-hint="cybersecurity intelligence"
                     />
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[9px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-4 md:mb-6">
                   <span>{item.date}</span>
                   <div className="w-1 h-1 rounded-full bg-primary" />
                   <span>Classification Level 4</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors uppercase italic leading-[1.1]">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Case Study Section - Now Full Width */}
      <section id="proven-success" className="bg-black py-24 md:py-48 border-t border-white/5 scroll-mt-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="mb-16 md:mb-24 space-y-8">
            <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.4em] text-[10px]">
              <div className="w-8 h-px bg-primary" /> Operational Protocol
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] uppercase italic">{t.proven.title}</h3>
            <p className="text-zinc-400 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl">{t.proven.sub}</p>
          </div>
          
          <div className="relative w-full aspect-video group overflow-hidden shadow-[0_0_100px_rgba(255,0,0,0.1)] border border-white/5">
            <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none group-hover:border-primary/30 transition-colors" />
            <div className="absolute -inset-10 bg-primary/5 blur-[120px] opacity-20 pointer-events-none" />
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/NBfcGrHR6P0?start=1&autoplay=1&mute=1&loop=1&playlist=NBfcGrHR6P0&rel=0" 
              title="Redwall Operational Protocol" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-10">
            <div className="flex items-center gap-6">
               <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
               <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">Global Ops Streaming V4.0</span>
            </div>
            <div className="flex items-center gap-8 text-[9px] font-black text-zinc-800 uppercase tracking-[0.4em]">
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-800 rounded-full" /> Latency: 24ms</span>
              <span className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-800 rounded-full" /> Encrypted Feed: AES-256</span>
              <span className="hidden lg:block">Classification: L4-RESTRICTED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-24 md:py-48 border-t border-white/5 scroll-mt-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="space-y-12 md:space-y-16">
              <div className="space-y-8 md:space-y-12">
                <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">{t.nav.contact}</h2>
                <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] uppercase italic">{t.contact.title}</h3>
                <p className="text-zinc-400 text-lg md:text-2xl leading-relaxed max-w-xl font-medium">{t.contact.sub}</p>
              </div>
              
              <div className="space-y-8 md:space-y-12 pt-8 md:pt-16 border-t border-white/5">
                <div className="flex items-center gap-6 md:gap-10 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-700">
                    <Mail className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] mb-2 md:mb-3">Operational Support</div>
                    <div className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter italic break-all">contact@redwallcyber.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#050505] p-6 md:p-16 rounded-none border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <ShieldCheck className="w-32 md:w-64 h-32 md:h-64 text-primary" />
               </div>
               
               {isSubmitted ? (
                 <div className="relative z-10 py-16 md:py-24 flex flex-col items-center text-center animate-in fade-in zoom-in duration-700">
                    <div className="w-20 h-20 md:w-24 md:h-24 border border-primary/30 flex items-center justify-center mb-8 md:mb-10">
                      <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                    </div>
                    <h4 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 md:mb-6 italic">{t.contact.success}</h4>
                    <p className="text-zinc-500 text-lg md:text-xl max-sm mb-10 md:mb-12 font-medium">{t.contact.successSub}</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="border-white/10 text-white hover:bg-white/5 rounded-none px-10 md:px-12 h-14 md:h-16 font-black uppercase text-[10px] tracking-[0.4em]"
                    >
                      {t.contact.another}
                    </Button>
                 </div>
               ) : (
                 <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 space-y-8 md:space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                       <FormField
                         control={form.control}
                         name="fullName"
                         render={({ field }) => (
                           <FormItem className="space-y-3 md:space-y-4">
                             <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] md:tracking-[0.5em]">{t.contact.name}</FormLabel>
                             <FormControl>
                               <Input placeholder="OPERATOR NAME" className="bg-black/50 border-white/10 text-white h-14 md:h-16 rounded-none focus:border-primary text-base placeholder:opacity-20 uppercase font-bold" {...field} />
                             </FormControl>
                             <FormMessage className="text-primary text-[9px] font-black uppercase tracking-widest" />
                           </FormItem>
                         )}
                       />
                       <FormField
                         control={form.control}
                         name="email"
                         render={({ field }) => (
                           <FormItem className="space-y-3 md:space-y-4">
                             <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] md:tracking-[0.5em]">{t.contact.email}</FormLabel>
                             <FormControl>
                               <Input type="email" placeholder="ENTERPRISE EMAIL" className="bg-black/50 border-white/10 text-white h-14 md:h-16 rounded-none focus:border-primary text-base placeholder:opacity-20 uppercase font-bold" {...field} />
                             </FormControl>
                             <FormMessage className="text-primary text-[9px] font-black uppercase tracking-widest" />
                           </FormItem>
                         )}
                       />
                     </div>
                     <FormField
                       control={form.control}
                       name="message"
                       render={({ field }) => (
                         <FormItem className="space-y-3 md:space-y-4">
                           <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] md:tracking-[0.5em]">{t.contact.message}</FormLabel>
                           <FormControl>
                             <Textarea placeholder="DESCRIBE MISSION REQUIREMENTS..." className="bg-black/50 border-white/10 text-white min-h-[150px] md:min-h-[200px] rounded-none focus:border-primary text-base placeholder:opacity-20 uppercase font-bold" {...field} />
                           </FormControl>
                           <FormMessage className="text-primary text-[9px] font-black uppercase tracking-widest" />
                         </FormItem>
                       )}
                     />
                     <Button 
                       disabled={isSubmitting}
                       className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.4em] md:tracking-[0.5em] h-16 md:h-20 rounded-none shadow-2xl flex items-center justify-center gap-6 border-none text-xs transition-all hover:scale-[1.01]"
                     >
                       {isSubmitting ? (
                         <>{t.contact.encrypting} <Activity className="w-5 h-5 animate-pulse" /></>
                       ) : (
                         <>{t.contact.transmit} <ArrowRight className="w-5 h-5" /></>
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
      <footer className="bg-black text-zinc-600 py-24 md:py-48 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-6">
              <RedwallLogo className="h-10 md:h-12 mb-12 md:mb-16" />
              <p className="text-lg md:text-xl max-w-lg mb-12 md:mb-16 text-zinc-500 font-medium leading-relaxed">
                 Redwall Cyber Defense is the global authority in managed SOC services and AI-driven security orchestration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <ul className="space-y-4 md:space-y-6 text-[11px] font-black tracking-[0.2em] uppercase">
                  <li className="text-zinc-200">Managed SOC (L1/L2)</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">EDR/XDR Management</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Vulnerability Lifecycle</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Penetration Testing</li>
                </ul>
                <ul className="space-y-4 md:space-y-6 text-[11px] font-black tracking-[0.2em] uppercase">
                  <li className="hover:text-primary transition-colors cursor-pointer">Incident Response</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Cloud Security</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Purple Team</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">AI Security</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-white font-black text-xs mb-10 md:mb-16 uppercase tracking-[0.3em] border-l-2 border-primary pl-6">Governance</h3>
              <ul className="space-y-4 md:space-y-6 text-[11px] font-black tracking-[0.2em] uppercase">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">{t.legal.privacy}</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">{t.legal.terms}</Link></li>
                <li><Link href="/cookies" className="hover:text-primary transition-colors">{t.legal.cookies}</Link></li>
                <li><Link href="/compliance" className="hover:text-primary transition-colors">{t.legal.compliance}</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-3">
               <h3 className="text-white font-black text-xs mb-10 md:mb-16 uppercase tracking-[0.3em] border-l-2 border-primary pl-6">Operations</h3>
               <div className="space-y-6 md:space-y-8">
                  <div className="p-6 border border-white/5 bg-[#050505]">
                     <div className="text-[9px] font-black text-zinc-600 uppercase mb-2">SOC EMEA</div>
                     <div className="text-xs font-bold text-zinc-300">LONDON, UK // ACTIVE</div>
                  </div>
                  <div className="p-6 border border-white/5 bg-[#050505]">
                     <div className="text-[9px] font-black text-zinc-600 uppercase mb-2">SOC AMER</div>
                     <div className="text-xs font-bold text-zinc-300">AUSTIN, TX // ACTIVE</div>
                  </div>
               </div>
            </div>
          </div>
          <div className="mt-24 md:mt-48 pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[10px] text-zinc-800 font-black uppercase tracking-[0.4em] md:tracking-[0.8em]">{t.footer.rights}</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-12 text-[10px] font-black text-zinc-800 uppercase tracking-widest">
               <span>V4.0.28-STABLE</span>
               <span>ISO 27001</span>
               <span>SOC2 COMPLIANT</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Threat Hunter Dialog */}
      <Dialog open={isHunterOpen} onOpenChange={(open) => {
        setIsHunterOpen(open);
        if (!open) {
          setAnalysisResult(null);
          setThreatInput('');
        }
      }}>
        <DialogContent className="bg-black border-white/10 text-white max-w-4xl p-0 overflow-hidden shadow-[0_0_80px_rgba(255,0,0,0.2)] rounded-none">
          <DialogHeader className="p-6 md:p-10 border-b border-white/5 bg-[#050505]">
            <div className="flex items-center gap-6">
               <div className="w-12 h-12 md:w-16 md:h-16 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(255,0,0,0.2)]">
                  <Terminal className="w-6 h-6 md:w-8 md:h-8" />
               </div>
               <div>
                  <DialogTitle className="text-xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2 italic">
                    {t.threatHunter.modalTitle}
                  </DialogTitle>
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">{t.threatHunter.modalSub}</p>
               </div>
            </div>
          </DialogHeader>

          <div className="p-6 md:p-10 space-y-8 md:space-y-10">
            {!analysisResult ? (
              <div className="space-y-6 md:space-y-8">
                <div className="relative">
                  <div className="absolute top-6 left-6 text-primary opacity-30">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <Textarea 
                    placeholder={t.threatHunter.placeholder}
                    value={threatInput}
                    onChange={(e) => setThreatInput(e.target.value)}
                    className="bg-black/50 border-white/10 text-white min-h-[200px] md:min-h-[250px] rounded-none focus:border-primary text-base font-mono pl-14 md:pl-16 placeholder:opacity-20 py-6"
                  />
                </div>
                <Button 
                  onClick={handleAnalyzeThreat}
                  disabled={isAnalyzing || !threatInput.trim()}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.4em] md:tracking-[0.5em] h-16 md:h-20 rounded-none shadow-2xl flex items-center justify-center gap-6 transition-all hover:scale-[1.01]"
                >
                  {isAnalyzing ? (
                    <><Loader2 className="w-6 h-6 animate-spin" /> {t.threatHunter.analyzing}</>
                  ) : (
                    <><Crosshair className="w-6 h-6" /> {t.threatHunter.analyzeBtn}</>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-8 md:space-y-10 animate-in slide-in-from-bottom-8 duration-700">
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
                    <div className="md:col-span-1 p-6 md:p-8 bg-[#0a0a0a] border border-white/5 text-center flex flex-col items-center justify-center">
                       <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4 md:mb-6">{t.threatHunter.severity}</div>
                       <div className={cn(
                         "text-2xl md:text-3xl font-black uppercase italic tracking-tighter",
                         analysisResult.severity === 'critical' || analysisResult.severity === 'high' ? 'text-primary' : 'text-accent'
                       )}>
                         {analysisResult.severity}
                       </div>
                    </div>
                    <div className="md:col-span-3 p-6 md:p-10 bg-[#0a0a0a] border border-white/5">
                       <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-8 flex items-center gap-4">
                         <div className="w-6 h-[1px] bg-primary" /> {t.threatHunter.analysis}
                       </div>
                       <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
                         {analysisResult.analysis}
                       </p>
                    </div>
                 </div>

                 <div className="p-6 md:p-10 bg-[#0a0a0a] border border-white/5">
                    <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-8 flex items-center gap-4">
                      <div className="w-6 h-[1px] bg-primary" /> {t.threatHunter.recommendations}
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                       {analysisResult.recommendations.map((rec, i) => (
                         <li key={i} className="flex items-start gap-4 md:gap-6 text-zinc-400 group">
                            <div className="w-1.5 h-1.5 bg-primary mt-2 group-hover:scale-150 transition-transform" />
                            <span className="text-sm font-bold uppercase tracking-tight leading-snug">{rec}</span>
                         </li>
                       ))}
                    </ul>
                 </div>

                 <Button 
                   onClick={() => setAnalysisResult(null)}
                   variant="outline"
                   className="w-full border-white/10 text-white hover:bg-white/5 rounded-none h-14 md:h-16 font-black uppercase text-[11px] tracking-[0.4em] md:tracking-[0.5em]"
                 >
                   {t.threatHunter.close}
                 </Button>
              </div>
            )}
          </div>

          <div className="p-4 md:p-6 bg-[#050505] border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-700 font-black uppercase tracking-[0.3em]">
            <span>REDWALL PRECISION AI OPS V4.0</span>
            <div className="flex items-center gap-4 md:gap-6">
               <span className="hidden sm:flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> SYSTEM SECURE</span>
               <span>ESC TO CLOSE</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Search Intelligence Center */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="bg-black border-white/10 text-white max-w-4xl p-0 overflow-hidden shadow-[0_0_80px_rgba(255,0,0,0.1)] rounded-none">
          <DialogHeader className="p-6 md:p-10 border-b border-white/5 bg-[#050505]">
            <div className="flex items-center gap-6 md:gap-8">
              <Search className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <form onSubmit={handleSearch} className="flex-grow">
                <Input 
                  autoFocus
                  placeholder={t.search.placeholder} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-2xl md:text-4xl focus-visible:ring-0 placeholder:opacity-10 h-12 md:h-16 p-0 font-black uppercase tracking-tighter italic"
                />
              </form>
            </div>
          </DialogHeader>
          
          <div className="p-6 md:p-10 min-h-[350px] md:min-h-[450px]">
            {isSearching ? (
              <div className="flex flex-col items-center justify-center h-64 md:h-80 space-y-8 md:space-y-10">
                <div className="relative w-16 h-16 md:w-20 md:h-20">
                   <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
                   <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin" />
                </div>
                <p className="text-zinc-600 font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[11px] animate-pulse">
                  {t.search.analyzing}
                </p>
              </div>
            ) : searchQuery ? (
              <div className="space-y-10 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="space-y-6 md:space-y-8">
                  <h4 className="text-[11px] font-black text-zinc-700 uppercase tracking-[0.5em] md:tracking-[0.6em]">{t.search.results}</h4>
                  <div className="p-6 md:p-8 bg-[#0a0a0a] border border-white/5 flex items-center justify-between group hover:border-primary transition-all cursor-pointer">
                    <div className="flex items-center gap-6 md:gap-8">
                      <div className="w-10 h-10 md:w-12 md:h-12 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <span className="text-lg md:text-2xl font-black uppercase tracking-tighter italic">Precision Intelligence Report: {searchQuery}</span>
                    </div>
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:translate-x-0 transition-all text-primary" />
                  </div>
                </div>
                <div className="py-16 md:py-24 text-center">
                   <p className="text-zinc-700 text-base md:text-lg italic font-medium tracking-tight">{t.search.noResults}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-12 md:space-y-16">
                <div className="space-y-6 md:space-y-8">
                  <h4 className="text-[11px] font-black text-zinc-700 uppercase tracking-[0.5em] md:tracking-[0.6em]">{t.search.quickLinks}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                    {navItems.map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsSearchOpen(false);
                        }}
                        className="flex items-center gap-4 md:gap-6 p-6 md:p-8 bg-black hover:bg-[#0a0a0a] border border-white/5 transition-all text-left group"
                      >
                        <Zap className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
                        <span className="font-black uppercase text-[10px] tracking-[0.4em] text-zinc-400 group-hover:text-zinc-100">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 md:p-6 bg-[#050505] border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-700 font-black uppercase tracking-[0.3em]">
            <span>REDWALL COMMAND INTERFACE V4.0</span>
            <span>ESC TO DISCONNECT</span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
