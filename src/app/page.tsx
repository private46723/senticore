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
  AlertTriangle
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
} from "@/components/ui/dialog";
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

const RedwallLogo = ({ className = "h-8", iconOnly = false }: { className?: string, iconOnly?: boolean }) => (
  <div className={cn("flex items-center gap-2 group cursor-pointer", !iconOnly && "w-auto")}>
    <div className={cn("flex items-center", className)}>
      <span className="text-3xl font-black tracking-tighter text-primary">Red</span>
      <div className="relative mx-1 w-8 h-10 flex items-center justify-center">
        <svg viewBox="0 0 100 120" className="w-full h-full fill-primary drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]">
           <path d="M50 0 L90 20 V60 C90 90 50 115 50 115 C50 115 10 90 10 60 V20 L50 0Z" />
        </svg>
      </div>
      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-3xl font-black tracking-tighter text-zinc-300">Wall</span>
          <span className="text-[8px] tracking-[0.3em] text-zinc-500 font-bold uppercase -mt-1">Cyber Defense</span>
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const successVideoBg = PlaceHolderImages.find(img => img.id === 'video-case-study');

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
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-primary/30">
      {/* Utility Bar */}
      <div className="bg-white text-zinc-800 py-2 px-6 flex justify-between items-center text-[13px] border-b border-gray-200 sticky top-0 z-[60]">
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:text-primary transition-colors uppercase font-bold text-zinc-900 outline-none">
                <Globe className="w-4 h-4" /> {language.toUpperCase()} <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-gray-200 z-[100]">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as any)} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 text-zinc-900 font-bold uppercase text-xs py-3 px-4">
                  <span>{lang.flag}</span> {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => setIsSearchOpen(true)} className="hover:text-primary transition-colors text-zinc-900"><Search className="w-4 h-4" /></button>
        </div>
        <div className="flex items-center gap-6 font-bold text-zinc-900">
          <a href="mailto:contact@redwallcyber.com" className="hover:text-primary transition-colors flex items-center gap-2 hidden md:flex">
            <Mail className="w-4 h-4" /> contact@redwallcyber.com
          </a>
          <button onClick={() => scrollToSection('contact')} className="bg-white border border-gray-300 px-5 py-1.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-zinc-900 font-black uppercase text-[11px]">
            {t.nav.emergency}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col min-h-[850px]">
        <div className="absolute inset-0 z-0">
          {heroBg && <Image src={heroBg.imageUrl} alt={heroBg.description} fill className="object-cover opacity-50" priority data-ai-hint={heroBg.imageHint} />}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black" />
        </div>

        <header className="relative z-30">
          <nav className="py-8 px-12 flex items-center justify-between">
            <div className="flex items-center gap-16">
              <RedwallLogo className="h-10" />
              <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-primary transition-colors py-2 relative text-[13px] tracking-[0.1em] uppercase font-black text-white"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-7 font-black text-sm tracking-widest shadow-xl border-none transition-all hover:scale-105 active:scale-95">
              {t.nav.getInTouch}
            </Button>
          </nav>
        </header>

        <main className="flex-grow flex items-center pb-20 overflow-hidden relative z-10">
          <div className="container mx-auto px-12 max-w-[1400px]">
            <div className="max-w-5xl">
              <h1 className="text-6xl md:text-[88px] font-black leading-[1.0] mb-12 tracking-tighter text-white">
                {t.hero.title} <span className="text-primary italic">{t.hero.precision}</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl leading-relaxed mb-16 font-medium">
                {t.hero.sub}
              </p>
              <div className="flex flex-wrap gap-8">
                 <Button onClick={() => scrollToSection('services')} className="bg-white text-black hover:bg-gray-100 rounded-full px-12 py-8 font-black uppercase text-sm tracking-widest shadow-2xl border-none">
                   {t.hero.cta1}
                 </Button>
                 <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-12 py-8 font-black uppercase text-sm tracking-widest backdrop-blur-md">
                   {t.hero.cta2}
                 </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* About Section */}
      <section id="about" className="bg-black py-40 border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-primary font-black uppercase tracking-[0.5em] text-[11px]">{t.nav.about}</h2>
              <h3 className="text-6xl font-black text-white tracking-tighter leading-[1.1] uppercase">{t.about.title}</h3>
              <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl">{t.about.sub}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
                {[t.about.stat1, t.about.stat2, t.about.stat3].map((stat, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-4xl font-black text-white italic">{stat.value}</div>
                    <div className="text-[10px] font-black text-zinc-500 tracking-[0.3em] uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
               <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
               <div className="relative z-10 w-full h-full border border-white/10 rounded-3xl overflow-hidden bg-zinc-900/50 backdrop-blur-3xl flex items-center justify-center p-20">
                  <div className="relative w-full h-full">
                     <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 fill-primary">
                        <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M50 20 V80 M20 50 H80" stroke="currentColor" strokeWidth="0.5" />
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <RedwallLogo iconOnly className="h-40" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Grid */}
      <section id="services" className="bg-[#050505] py-32 border-t border-white/5 overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="mb-32">
            <h2 className="text-primary font-black uppercase tracking-[0.5em] text-[11px] mb-8">{t.nav.services}</h2>
            <h3 className="text-6xl font-black text-white tracking-tighter mb-8 uppercase">{t.services.title}</h3>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">{t.services.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service: any) => (
              <div key={service.id} className="group p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:border-primary/50 transition-all duration-500 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-black px-3 py-1 rounded-full border border-white/10 text-zinc-500 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    {service.status}
                  </span>
                </div>
                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-12 flex-grow">{service.desc}</p>
                <div className="pt-6 border-t border-white/5">
                   <button className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-primary transition-colors flex items-center gap-2">
                     Learn More <ArrowRight className="w-3 h-3" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Intel Section */}
      <section id="intel" className="bg-black py-40 border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
             <div className="space-y-8">
                <h2 className="text-primary font-black uppercase tracking-[0.5em] text-[11px]">{t.nav.intel}</h2>
                <h3 className="text-6xl font-black text-white tracking-tighter uppercase">{t.intel.title}</h3>
                <p className="text-zinc-400 text-xl max-w-xl">{t.intel.sub}</p>
             </div>
             <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-10 h-14 font-black uppercase text-[11px] tracking-widest">
                View Intelligence Archive
             </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {t.intel.news.map((item: any, i: number) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-zinc-900 rounded-3xl mb-8 overflow-hidden relative border border-white/5">
                  <div className="absolute top-6 left-6 z-10 bg-primary px-3 py-1 rounded text-[9px] font-black tracking-widest uppercase">
                    {item.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 opacity-30">
                     <Image 
                       src={`https://picsum.photos/seed/${i+50}/600/400`} 
                       alt="intel" 
                       fill 
                       className="object-cover" 
                       data-ai-hint="cybersecurity network"
                     />
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-4">
                   <span>{item.date}</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                   <span>Precision AI Audit</span>
                </div>
                <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors uppercase leading-tight">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Success Section (Video) */}
      <section id="proven-success" className="bg-[#050505] py-0 overflow-hidden relative min-h-[800px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {successVideoBg && <Image src={successVideoBg.imageUrl} alt="Case Study" fill className="object-cover opacity-30" data-ai-hint="data center" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-12 max-w-[1400px] relative z-10 text-center">
           <div className="max-w-4xl mx-auto space-y-12">
              <div className="w-24 h-24 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-16 group cursor-pointer hover:bg-primary hover:text-black transition-all duration-500">
                 <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                 {t.proven.title}
              </h3>
              <p className="text-2xl text-zinc-300 font-medium">
                 {t.proven.sub}
              </p>
              <div className="pt-12">
                 <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-16 h-18 font-black uppercase text-sm tracking-widest shadow-2xl">
                    Watch Operational Overview
                 </Button>
              </div>
           </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-12 flex justify-between items-center text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] z-20">
           <div className="flex items-center gap-8">
              <span>LATENCY: 14MS</span>
              <span>UPTIME: 99.998%</span>
           </div>
           <div>EST. 2025 // REDWALL GLOBAL OPS</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#050505] py-40 border-t border-white/10 scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-primary font-black uppercase tracking-[0.5em] text-[11px]">{t.nav.contact}</h2>
                <h3 className="text-6xl font-black text-white tracking-tighter leading-[1.1] uppercase">{t.contact.title}</h3>
                <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">{t.contact.sub}</p>
              </div>
              
              <div className="space-y-10 pt-12 border-t border-white/10">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-2">Email Operations</div>
                    <div className="text-xl font-black text-white uppercase tracking-tight">contact@redwallcyber.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ShieldCheck className="w-48 h-48 text-primary" />
               </div>
               
               {isSubmitted ? (
                 <div className="relative z-10 py-20 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-8 border border-primary/30">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-3xl font-black text-white uppercase tracking-tight mb-4">{t.contact.success}</h4>
                    <p className="text-zinc-400 text-lg max-w-sm mb-10">{t.contact.successSub}</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 font-black uppercase text-[11px] tracking-widest"
                    >
                      {t.contact.another}
                    </Button>
                 </div>
               ) : (
                 <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <FormField
                         control={form.control}
                         name="fullName"
                         render={({ field }) => (
                           <FormItem className="space-y-3">
                             <FormLabel className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">{t.contact.name}</FormLabel>
                             <FormControl>
                               <Input placeholder="John Doe" className="bg-black/80 border-white/10 text-white h-14 rounded-xl focus:border-primary text-base placeholder:opacity-30" {...field} />
                             </FormControl>
                             <FormMessage className="text-primary text-[10px] font-bold uppercase" />
                           </FormItem>
                         )}
                       />
                       <FormField
                         control={form.control}
                         name="email"
                         render={({ field }) => (
                           <FormItem className="space-y-3">
                             <FormLabel className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">{t.contact.email}</FormLabel>
                             <FormControl>
                               <Input type="email" placeholder="john@company.com" className="bg-black/80 border-white/10 text-white h-14 rounded-xl focus:border-primary text-base placeholder:opacity-30" {...field} />
                             </FormControl>
                             <FormMessage className="text-primary text-[10px] font-bold uppercase" />
                           </FormItem>
                         )}
                       />
                     </div>
                     <FormField
                       control={form.control}
                       name="message"
                       render={({ field }) => (
                         <FormItem className="space-y-3">
                           <FormLabel className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em]">{t.contact.message}</FormLabel>
                           <FormControl>
                             <Textarea placeholder="Operational requirements..." className="bg-black/80 border-white/10 text-white min-h-[160px] rounded-xl focus:border-primary text-base placeholder:opacity-30" {...field} />
                           </FormControl>
                           <FormMessage className="text-primary text-[10px] font-bold uppercase" />
                         </FormItem>
                       )}
                     />
                     <Button 
                       disabled={isSubmitting}
                       className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.4em] h-16 rounded-full shadow-2xl flex items-center justify-center gap-4 border-none text-sm transition-all hover:scale-[1.02]"
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
      <footer className="bg-black text-zinc-500 py-32 border-t border-white/10">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-6">
              <h3 className="text-white font-black text-lg mb-12 border-b-2 border-primary/20 pb-3 inline-block w-full max-w-[240px] uppercase tracking-tighter">{t.footer.services}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ul className="space-y-4 text-[14px] font-medium">
                  <li className="hover:text-primary transition-colors cursor-pointer">Managed SOC (L1/L2)</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">EDR/XDR Fleet Management</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Vulnerability Lifecycle</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Penetration Testing</li>
                </ul>
                <ul className="space-y-4 text-[14px] font-medium">
                  <li className="hover:text-primary transition-colors cursor-pointer">Incident Response</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Cloud Security Reviews</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">AI Security Audits</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Purple Team Operations</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-white font-black text-lg mb-12 border-b-2 border-primary/20 pb-3 inline-block w-full uppercase tracking-tighter">{t.footer.legal}</h3>
              <ul className="space-y-5 text-[14px] font-medium">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">{t.legal.privacy}</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">{t.legal.terms}</Link></li>
                <li><Link href="/cookies" className="hover:text-primary transition-colors">{t.legal.cookies}</Link></li>
                <li><Link href="/compliance" className="hover:text-primary transition-colors">{t.legal.compliance}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-white/10 flex items-center justify-between">
            <RedwallLogo className="h-10" />
            <p className="text-[12px] text-zinc-600 font-black uppercase tracking-[0.5em]">{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Search Command Center */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-3xl p-0 overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.1)]">
          <DialogHeader className="p-6 border-b border-white/5 bg-black/40">
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-primary" />
              <form onSubmit={handleSearch} className="flex-grow">
                <Input 
                  autoFocus
                  placeholder={t.search.placeholder} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-xl focus-visible:ring-0 placeholder:opacity-30 h-10 p-0"
                />
              </form>
              <button onClick={() => setIsSearchOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>
          </DialogHeader>
          
          <div className="p-8 min-h-[400px]">
            {isSearching ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-6">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-zinc-500 font-black uppercase tracking-[0.3em] text-[11px] animate-pulse">
                  {t.search.analyzing}
                </p>
              </div>
            ) : searchQuery ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-4">
                  <h4 className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.4em]">{t.search.results}</h4>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-primary/40 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <span className="text-lg font-bold">Threat Intelligence Report: {searchQuery}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
                <div className="p-12 text-center">
                   <p className="text-zinc-500 text-sm italic">{t.search.noResults}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="space-y-6">
                  <h4 className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.4em]">{t.search.quickLinks}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {navItems.map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsSearchOpen(false);
                        }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all text-left group"
                      >
                        <Zap className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-bold uppercase text-[11px] tracking-widest">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-black/60 border-t border-white/5 flex justify-between items-center text-[10px] text-zinc-600 font-black uppercase tracking-[0.2em]">
            <span>Redwall Precision AI v4.0</span>
            <span>ESC to close</span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}