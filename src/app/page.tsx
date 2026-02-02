
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
  Target, 
  Zap, 
  Terminal, 
  CheckCircle2,
  Globe,
  Loader2,
  X,
  Radar,
  Crosshair,
  Mail,
  ShieldCheck
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

  const [isHunterOpen, setIsHunterOpen] = useState(false);
  const [threatInput, setThreatInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeThreatOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "", message: "" },
  });

  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({ title: t.contact.success, description: t.contact.successSub });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 2000);
  };

  const handleAnalyzeThreat = async () => {
    if (!threatInput.trim()) return;
    setIsAnalyzing(true);
    try {
      const result = await analyzeThreat({ query: threatInput });
      setAnalysisResult(result);
    } catch (error) {
      toast({ variant: "destructive", title: t.threatHunter.error });
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
      {/* Tactical Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-12 lg:gap-20">
          <RedwallLogo className="h-10" />
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-primary transition-all text-[10px] tracking-[0.4em] uppercase font-black text-zinc-500 hover:tracking-[0.5em]"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest text-zinc-500 outline-none">
                <Globe className="w-3 h-3" /> {language} <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0a0a0a] border-white/10">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as any)} className="flex items-center gap-3 cursor-pointer hover:bg-white/5 text-zinc-300 font-black uppercase text-[10px] py-3 px-4">
                  <span className="opacity-60">{lang.flag}</span> {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => setIsSearchOpen(true)} className="text-zinc-500 hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-none px-8 font-black text-[10px] tracking-[0.3em] uppercase h-12 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            {t.nav.emergency}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
           <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="max-w-6xl">
            <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.4em] text-[11px] mb-12">
              <div className="w-12 h-px bg-primary" /> GLOBAL PRECISION DEFENSE UNIT
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[120px] font-black leading-[0.9] mb-12 tracking-tighter uppercase italic">
              {t.hero.title} <br />
              <span className="text-primary not-italic">{t.hero.precision}</span>
            </h1>
            <p className="text-xl md:text-3xl text-zinc-500 max-w-3xl leading-relaxed mb-16 font-medium">
              {t.hero.sub}
            </p>
            <div className="flex flex-wrap gap-8 items-center">
               <Button onClick={() => scrollToSection('services')} className="bg-white text-black hover:bg-zinc-200 rounded-none px-12 h-20 font-black uppercase text-xs tracking-[0.4em]">
                 {t.hero.cta1}
               </Button>
               <button onClick={() => setIsHunterOpen(true)} className="flex items-center gap-4 text-zinc-100 hover:text-primary transition-all font-black uppercase text-xs tracking-[0.4em] group">
                 <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Radar className="w-6 h-6 text-primary" />
                 </div>
                 {t.threatHunter.cta}
               </button>
            </div>
          </div>
        </div>

        {/* Tactical Vertical Bar */}
        <div className="absolute bottom-12 right-12 flex items-center gap-8 hidden lg:flex">
           <span className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.6em] vertical-rl">OPS STATUS: ACTIVE</span>
           <div className="w-px h-32 bg-gradient-to-t from-primary to-transparent" />
        </div>
      </section>

      {/* About & Stats */}
      <section id="about" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[11px]">{t.nav.about}</h2>
                 <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase italic">{t.about.title}</h3>
                 <p className="text-zinc-500 text-xl md:text-2xl font-medium leading-relaxed">{t.about.sub}</p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
                    {[t.about.stat1, t.about.stat2, t.about.stat3].map((stat, i) => (
                      <div key={i} className="space-y-2">
                        <div className="text-4xl font-black text-white italic">{stat.value}</div>
                        <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="relative aspect-square flex items-center justify-center">
                 {/* The Tactical Display Frame */}
                 <div className="absolute inset-0 border border-white/5 rounded-full" />
                 <div className="absolute inset-10 border border-white/10 rounded-full animate-pulse opacity-20" />
                 
                 <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] text-zinc-900 absolute">
                        <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.1" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1" />
                        <path d="M50 10 L84.6 30 V70 L50 90 L15.4 70 V30 Z" fill="none" stroke="currentColor" strokeWidth="0.3" />
                    </svg>
                    
                    <div className="flex flex-col items-center gap-4 relative z-20">
                       <span className="text-6xl md:text-9xl font-black tracking-tighter text-primary">Red</span>
                       <div className="relative w-20 h-24 md:w-32 md:h-40">
                          <svg viewBox="0 0 100 120" className="w-full h-full fill-primary drop-shadow-[0_0_40px_rgba(255,0,0,0.5)]">
                            <path d="M50 0 L90 20 V60 C90 90 50 115 50 115 C50 115 10 90 10 60 V20 L50 0Z" />
                          </svg>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Roadmap */}
      <section id="services" className="py-32 md:py-48 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="mb-24 space-y-8">
            <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[11px]">{t.nav.services}</h2>
            <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic">{t.services.title}</h3>
            <p className="text-zinc-500 text-xl md:text-3xl max-w-4xl font-medium">{t.services.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {t.services.items.map((service: any) => (
              <div key={service.id} className="group p-10 bg-black hover:bg-zinc-950 transition-all duration-500 flex flex-col min-h-[400px]">
                <div className="flex justify-between items-start mb-16">
                   <div className="w-12 h-12 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                      <Target className="w-6 h-6" />
                   </div>
                   <span className="text-[9px] font-black px-3 py-1 bg-white/5 border border-white/5 text-zinc-600 uppercase tracking-widest">{service.status}</span>
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase italic group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-12 flex-grow">{service.desc}</p>
                <div className="pt-8 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                   <div className="w-12 h-px bg-white/10 group-hover:bg-primary transition-all" />
                   <button className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">INSPECT</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Operational Video */}
      <section id="proven-success" className="bg-black py-0 border-y border-white/5">
        <div className="w-full relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          <div className="absolute top-12 left-12 z-20 space-y-4">
             <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                <div className="w-8 h-px bg-primary" /> SOC OPERATIONS FEED
             </div>
             <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic">{t.proven.title}</h3>
          </div>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/NBfcGrHR6P0?start=1&autoplay=1&mute=1&loop=1&playlist=NBfcGrHR6P0&rel=0" 
            title="Redwall Operational Protocol" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 scale-105"
          ></iframe>
        </div>
      </section>

      {/* Global Intelligence */}
      <section id="intel" className="py-32 md:py-48 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
             <div className="space-y-8">
                <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[11px]">{t.nav.intel}</h2>
                <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">{t.intel.title}</h3>
                <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl font-medium">{t.intel.sub}</p>
             </div>
             <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-none px-12 h-16 font-black uppercase text-[10px] tracking-[0.4em]">
                INTEL ARCHIVE
             </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
             {t.intel.news.map((item: any, i: number) => (
                <div key={i} className="group bg-black p-10 hover:bg-zinc-950 transition-all cursor-pointer border border-white/5">
                   <div className="aspect-[4/3] bg-zinc-900 mb-10 overflow-hidden relative">
                      <div className="absolute top-6 left-6 z-10 bg-primary px-3 py-1 text-[8px] font-black uppercase tracking-widest">{item.tag}</div>
                      <Image src={`https://picsum.photos/seed/${i+500}/800/600`} alt="intel" fill className="object-cover grayscale group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-80" data-ai-hint="cyber intelligence" />
                   </div>
                   <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-4">{item.date} // L4-SECURE</div>
                   <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors uppercase italic leading-tight">{item.title}</h4>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Terminal */}
      <section id="contact" className="py-32 md:py-48 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-16">
              <div className="space-y-12">
                <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[11px]">{t.nav.contact}</h2>
                <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">{t.contact.title}</h3>
                <p className="text-zinc-500 text-xl md:text-3xl leading-relaxed max-w-xl font-medium">{t.contact.sub}</p>
              </div>
              <div className="flex items-center gap-8 p-10 border border-white/5 bg-[#050505] group">
                 <Mail className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                 <div>
                    <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">Operational Channel</div>
                    <div className="text-2xl font-black text-white uppercase italic tracking-tighter">contact@redwallcyber.com</div>
                 </div>
              </div>
            </div>

            <div className="bg-[#050505] p-10 md:p-16 border border-white/5 relative">
               {isSubmitted ? (
                 <div className="py-24 flex flex-col items-center text-center space-y-8">
                    <CheckCircle2 className="w-20 h-20 text-primary" />
                    <h4 className="text-4xl font-black text-white uppercase italic">{t.contact.success}</h4>
                    <p className="text-zinc-500 text-xl font-medium">{t.contact.successSub}</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="border-white/10 text-white hover:bg-white/5 rounded-none px-12 h-16 font-black uppercase text-[10px] tracking-[0.4em]">
                      {t.contact.another}
                    </Button>
                 </div>
               ) : (
                 <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{t.contact.name}</FormLabel>
                            <FormControl><Input placeholder="NAME" className="bg-black/50 border-white/10 h-16 rounded-none focus:border-primary uppercase font-bold text-white" {...field} /></FormControl>
                            <FormMessage className="text-primary text-[10px] font-black uppercase" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{t.contact.email}</FormLabel>
                            <FormControl><Input type="email" placeholder="ENTERPRISE EMAIL" className="bg-black/50 border-white/10 h-16 rounded-none focus:border-primary uppercase font-bold text-white" {...field} /></FormControl>
                            <FormMessage className="text-primary text-[10px] font-black uppercase" />
                          </FormItem>
                        )} />
                     </div>
                     <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{t.contact.message}</FormLabel>
                          <FormControl><Textarea placeholder="REQUIREMENTS..." className="bg-black/50 border-white/10 min-h-[180px] rounded-none focus:border-primary uppercase font-bold text-white" {...field} /></FormControl>
                          <FormMessage className="text-primary text-[10px] font-black uppercase" />
                        </FormItem>
                     )} />
                     <Button disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.5em] h-20 rounded-none shadow-2xl flex items-center justify-center gap-6">
                       {isSubmitting ? t.contact.encrypting : <>{t.contact.transmit} <ArrowRight className="w-6 h-6" /></>}
                     </Button>
                   </form>
                 </Form>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Grid */}
      <footer className="bg-black py-24 md:py-48 border-t border-white/5">
         <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
               <div className="space-y-12">
                  <RedwallLogo className="h-10" />
                  <p className="text-zinc-600 text-lg font-medium leading-relaxed">Global authority in managed SOC services and AI-driven security orchestration.</p>
               </div>
               <div>
                  <h5 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-12 border-l-2 border-primary pl-6">Capabilities</h5>
                  <ul className="space-y-4 text-[11px] font-black text-zinc-600 uppercase tracking-widest">
                     <li className="text-zinc-200">Managed SOC (L1/L2)</li>
                     <li className="hover:text-primary transition-colors cursor-pointer">EDR/XDR Management</li>
                     <li className="hover:text-primary transition-colors cursor-pointer">Vulnerability Lifecycle</li>
                     <li className="hover:text-primary transition-colors cursor-pointer">Cloud Security</li>
                  </ul>
               </div>
               <div>
                  <h5 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-12 border-l-2 border-primary pl-6">Governance</h5>
                  <ul className="space-y-4 text-[11px] font-black text-zinc-600 uppercase tracking-widest">
                     <li><Link href="/privacy" className="hover:text-primary transition-colors">{t.legal.privacy}</Link></li>
                     <li><Link href="/terms" className="hover:text-primary transition-colors">{t.legal.terms}</Link></li>
                     <li><Link href="/compliance" className="hover:text-primary transition-colors">{t.legal.compliance}</Link></li>
                  </ul>
               </div>
               <div className="space-y-6">
                  <div className="p-6 border border-white/5 bg-[#050505]">
                     <div className="text-[9px] font-black text-zinc-700 uppercase mb-2">SOC EMEA</div>
                     <div className="text-xs font-bold text-zinc-300">LONDON, UK // ACTIVE</div>
                  </div>
                  <div className="p-6 border border-white/5 bg-[#050505]">
                     <div className="text-[9px] font-black text-zinc-700 uppercase mb-2">SOC AMER</div>
                     <div className="text-xs font-bold text-zinc-300">AUSTIN, TX // ACTIVE</div>
                  </div>
               </div>
            </div>
            <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black text-zinc-800 uppercase tracking-[0.5em]">
               <span>{t.footer.rights}</span>
               <div className="flex gap-12">
                  <span>ISO 27001</span>
                  <span>SOC2 TYPE II</span>
               </div>
            </div>
         </div>
      </footer>

      {/* Analyzer Modal */}
      <Dialog open={isHunterOpen} onOpenChange={setIsHunterOpen}>
        <DialogContent className="bg-black border-white/10 text-white max-w-4xl p-0 rounded-none overflow-hidden">
           <DialogHeader className="p-8 md:p-12 border-b border-white/5 bg-[#050505]">
              <div className="flex items-center gap-8">
                 <Terminal className="w-10 h-10 text-primary" />
                 <div>
                    <DialogTitle className="text-3xl font-black uppercase italic tracking-tighter mb-2">{t.threatHunter.modalTitle}</DialogTitle>
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">{t.threatHunter.modalSub}</p>
                 </div>
              </div>
           </DialogHeader>
           
           <div className="p-8 md:p-12 space-y-10">
              {!analysisResult ? (
                 <div className="space-y-10">
                    <Textarea 
                       placeholder={t.threatHunter.placeholder}
                       value={threatInput}
                       onChange={(e) => setThreatInput(e.target.value)}
                       className="bg-zinc-950 border-white/10 min-h-[250px] rounded-none focus:border-primary font-mono text-white p-8"
                    />
                    <Button onClick={handleAnalyzeThreat} disabled={isAnalyzing || !threatInput.trim()} className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.5em] h-20 rounded-none shadow-2xl flex items-center justify-center gap-6">
                       {isAnalyzing ? <><Loader2 className="w-6 h-6 animate-spin" /> {t.threatHunter.analyzing}</> : <><Crosshair className="w-6 h-6" /> {t.threatHunter.analyzeBtn}</>}
                    </Button>
                 </div>
              ) : (
                 <div className="space-y-10 animate-in slide-in-from-bottom-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                       <div className="p-8 bg-zinc-950 border border-white/5 text-center flex flex-col items-center justify-center">
                          <div className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mb-4">SEVERITY</div>
                          <div className={cn("text-3xl font-black uppercase italic", analysisResult.severity === 'critical' || analysisResult.severity === 'high' ? 'text-primary' : 'text-accent')}>
                             {analysisResult.severity}
                          </div>
                       </div>
                       <div className="md:col-span-3 p-10 bg-zinc-950 border border-white/5">
                          <div className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mb-6 flex items-center gap-4"><div className="w-6 h-px bg-primary" /> TECHNICAL ANALYSIS</div>
                          <p className="text-zinc-300 text-lg leading-relaxed font-medium">{analysisResult.analysis}</p>
                       </div>
                    </div>
                    <div className="p-10 bg-zinc-950 border border-white/5">
                       <div className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mb-8 flex items-center gap-4"><div className="w-6 h-px bg-primary" /> REMEDIATION PATH</div>
                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {analysisResult.recommendations.map((rec, i) => (
                             <li key={i} className="flex items-start gap-4 text-zinc-400 group">
                                <div className="w-1.5 h-1.5 bg-primary mt-2 group-hover:scale-150 transition-transform" />
                                <span className="text-sm font-bold uppercase tracking-tight leading-snug">{rec}</span>
                             </li>
                          ))}
                       </ul>
                    </div>
                    <Button onClick={() => setAnalysisResult(null)} variant="outline" className="w-full border-white/10 text-white rounded-none h-16 font-black uppercase text-[10px] tracking-[0.5em]">RESCAN TERMINAL</Button>
                 </div>
              )}
           </div>
        </DialogContent>
      </Dialog>

      {/* Search Modal */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
         <DialogContent className="bg-black border-white/10 text-white max-w-4xl p-0 rounded-none overflow-hidden">
            <div className="p-12 space-y-12">
               <div className="flex items-center gap-8 border-b border-white/10 pb-8">
                  <Search className="w-10 h-10 text-primary" />
                  <form onSubmit={handleSearch} className="flex-grow">
                     <Input 
                        autoFocus
                        placeholder={t.search.placeholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none text-4xl md:text-6xl font-black italic uppercase tracking-tighter focus-visible:ring-0 p-0 text-white"
                     />
                  </form>
               </div>
               
               <div className="min-h-[300px]">
                  {isSearching ? (
                     <div className="flex flex-col items-center justify-center h-full space-y-8 py-20">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 animate-pulse">{t.search.analyzing}</p>
                     </div>
                  ) : searchQuery ? (
                     <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8">
                        <div className="p-10 bg-zinc-950 border border-white/5 flex items-center justify-between group hover:border-primary transition-all">
                           <div className="flex items-center gap-8">
                              <Terminal className="w-8 h-8 text-primary" />
                              <span className="text-2xl font-black uppercase italic">Intelligence Report: {searchQuery}</span>
                           </div>
                           <ArrowRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                        <p className="text-center text-zinc-700 italic text-xl">{t.search.noResults}</p>
                     </div>
                  ) : (
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {navItems.map((item) => (
                           <button key={item.id} onClick={() => { scrollToSection(item.id); setIsSearchOpen(false); }} className="p-8 bg-zinc-950 border border-white/5 hover:border-primary transition-all text-left group">
                              <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">GO TO</div>
                              <div className="text-xl font-black uppercase italic text-white">{item.name}</div>
                           </button>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </DialogContent>
      </Dialog>
    </div>
  );
}
