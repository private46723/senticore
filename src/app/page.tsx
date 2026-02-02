
'use client';

import React, { useState } from 'react';
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
  ShieldCheck,
  Cpu,
  Lock,
  Wifi,
  Play
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

const TacticalCorner = () => (
  <>
    <div className="tactical-corner-tl" />
    <div className="tactical-corner-tr" />
    <div className="tactical-corner-bl" />
    <div className="tactical-corner-br" />
  </>
);

const HUDMetadata = ({ text, className }: { text: string, className?: string }) => (
  <span className={cn("text-[7px] font-black text-zinc-800 uppercase tracking-[0.3em] pointer-events-none select-none", className)}>
    {text}
  </span>
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

  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-visual');

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-primary/30 w-full overflow-x-hidden">
      <div className="scanline" />
      
      {/* HUD Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/60 backdrop-blur-xl border-b border-white/10 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-12 lg:gap-20">
          <RedwallLogo className="h-10" />
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-primary transition-all text-[10px] tracking-[0.3em] uppercase font-black text-zinc-500 hover:tracking-[0.4em] flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-primary/20" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex flex-col items-end mr-8 border-r border-white/10 pr-8">
            <HUDMetadata text="NET STATUS" className="mb-1" />
            <span className="text-[10px] font-bold text-accent flex items-center gap-2"><Wifi className="w-3 h-3" /> SECURED // 128-BIT</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest text-zinc-500 outline-none border border-white/10 px-4 py-2 bg-white/5">
                <Globe className="w-3 h-3" /> {language} <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0a0a0a] border-white/10 rounded-none">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as any)} className="flex items-center gap-3 cursor-pointer hover:bg-white/5 text-zinc-300 font-black uppercase text-[10px] py-3 px-4 rounded-none">
                  <span className="opacity-60">{lang.flag}</span> {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => setIsSearchOpen(true)} className="text-zinc-500 hover:text-primary transition-colors p-2 border border-white/10">
            <Search className="w-5 h-5" />
          </button>
          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-none px-8 font-black text-[10px] tracking-[0.3em] uppercase h-12 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            {t.nav.emergency}
          </Button>
        </div>
      </nav>

      {/* Hero: Precision Defense */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
           <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
          <div className="max-w-6xl relative p-12 md:p-20">
            <TacticalCorner />
            <HUDMetadata text="COORD: 30.2672° N, 97.7431° W" className="absolute top-4 right-8" />
            
            <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.6em] text-[11px] mb-12">
              <div className="w-12 h-px bg-primary" /> GLOBAL PRECISION DEFENSE UNIT
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black leading-[0.85] mb-12 tracking-tighter uppercase italic">
              {t.hero.title} <br />
              <span className="text-primary not-italic text-shadow-glow">{t.hero.precision}</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-zinc-500 max-w-3xl leading-relaxed mb-16 font-medium border-l border-primary/30 pl-8">
              {t.hero.sub}
            </p>
            
            <div className="flex flex-wrap gap-12 items-center">
               <Button onClick={() => scrollToSection('services')} className="bg-white text-black hover:bg-zinc-200 rounded-none px-12 h-20 font-black uppercase text-xs tracking-[0.4em] relative">
                 <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
                 {t.hero.cta1}
               </Button>
               <button onClick={() => setIsHunterOpen(true)} className="flex items-center gap-6 text-zinc-100 hover:text-primary transition-all font-black uppercase text-xs tracking-[0.4em] group">
                 <div className="w-16 h-16 rounded-none border border-white/10 flex items-center justify-center group-hover:border-primary transition-all relative">
                    <TacticalCorner />
                    <Radar className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="flex flex-col items-start">
                   <HUDMetadata text="SYSTEM ANALYZER v4.0" className="mb-1" />
                   {t.threatHunter.cta}
                 </div>
               </button>
            </div>
          </div>
        </div>

        {/* Vertical HUD Elements */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-center gap-8 hidden lg:flex">
           <span className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.6em] vertical-rl">OPS STATUS: ACTIVE</span>
           <div className="w-px h-64 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
           <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em] vertical-rl animate-pulse">THREAT LEVEL: LOW</span>
        </div>
      </section>

      {/* About & Mission Data */}
      <section id="about" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12 relative p-12">
                 <TacticalCorner />
                 <HUDMetadata text="OP_INTEL_STREAM" className="absolute top-4 right-8" />
                 <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[11px] flex items-center gap-4">
                   <Shield className="w-4 h-4" /> {t.nav.about}
                 </h2>
                 <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase italic">{t.about.title}</h3>
                 <p className="text-zinc-500 text-xl md:text-2xl font-medium leading-relaxed">{t.about.sub}</p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
                    {[t.about.stat1, t.about.stat2, t.about.stat3].map((stat, i) => (
                      <div key={i} className="space-y-3 p-6 border border-white/5 bg-black/50 relative">
                        <div className="text-4xl font-black text-white italic">{stat.value}</div>
                        <HUDMetadata text={stat.label} />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-primary/20" />
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="relative aspect-video lg:aspect-square flex items-center justify-center p-4">
                 <div className="absolute inset-0 border border-white/5" />
                 <TacticalCorner />
                 
                 <div className="relative z-10 w-full h-full p-8">
                   <div className="relative w-full h-full border border-white/10 overflow-hidden group">
                      <TacticalCorner />
                      <Image 
                        src={aboutImage?.imageUrl || "/placeholder.svg"} 
                        alt={aboutImage?.description || "About Visual"}
                        fill
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        data-ai-hint={aboutImage?.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-6 right-6 flex flex-col items-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                        <HUDMetadata text="VISUAL_SCAN_MODE" />
                        <div className="w-24 h-1 bg-primary/20 overflow-hidden">
                          <div className="w-1/2 h-full bg-primary animate-[scanline_2s_linear_infinite]" />
                        </div>
                      </div>

                      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary text-black">
                           <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                           <HUDMetadata text="VISUAL_IDENT" />
                           <span className="text-xs font-black text-white uppercase italic">PRECISION_DEFENSE_MODE</span>
                        </div>
                      </div>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Global Capabilities Grid */}
      <section id="services" className="py-32 md:py-48 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="mb-24 space-y-10 relative">
            <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[11px] flex items-center gap-4">
              <Cpu className="w-4 h-4" /> {t.nav.services}
            </h2>
            <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic">{t.services.title}</h3>
            <p className="text-zinc-500 text-xl md:text-3xl max-w-4xl font-medium border-l border-primary/30 pl-8">{t.services.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {t.services.items.map((service: any) => (
              <div key={service.id} className="group p-12 bg-black hover:bg-zinc-950 transition-all duration-500 flex flex-col min-h-[450px] relative">
                <TacticalCorner />
                <div className="flex justify-between items-start mb-16">
                   <div className="w-14 h-14 flex items-center justify-center text-primary border border-white/10 bg-white/5 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <Target className="w-6 h-6" />
                   </div>
                   <span className="text-[9px] font-black px-4 py-2 bg-white/5 border border-white/10 text-zinc-500 uppercase tracking-widest">{service.status}</span>
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase italic group-hover:text-primary transition-colors tracking-tighter">{service.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-12 flex-grow font-medium">{service.desc}</p>
                <div className="pt-8 flex items-center justify-between">
                   <div className="w-full h-px bg-white/5 group-hover:bg-primary/20 transition-all" />
                   <button className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 group-hover:text-primary transition-colors pl-8">ACCESS_PROTOCOL</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational SOC Feed - Full Width */}
      <section id="proven-success" className="bg-black py-0 border-y border-white/10 overflow-hidden">
        <div className="w-full relative aspect-video group">
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none group-hover:bg-black/20 transition-all duration-1000" />
          
          <div className="absolute top-12 left-12 z-20 space-y-6 p-8 bg-black/40 backdrop-blur-md border border-white/10">
             <TacticalCorner />
             <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.5em] text-[10px]">
                <Activity className="w-4 h-4 animate-pulse" /> LIVE_SOC_FEED_ALPHA
             </div>
             <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic">{t.proven.title}</h3>
          </div>
          
          <div className="w-full h-full relative">
            <iframe 
              src="https://www.youtube.com/embed/NBfcGrHR6P0?autoplay=1&mute=1&loop=1&playlist=NBfcGrHR6P0&controls=0&showinfo=0&rel=0&iv_load_policy=3&start=1" 
              title="Redwall Operational Protocol" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full object-cover scale-[1.35] grayscale opacity-70 pointer-events-none"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Threat Intelligence Terminal */}
      <section id="intel" className="py-32 md:py-48 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
             <div className="space-y-10 relative p-8">
                <TacticalCorner />
                <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[11px] flex items-center gap-4">
                  <Terminal className="w-4 h-4" /> {t.nav.intel}
                </h2>
                <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">{t.intel.title}</h3>
                <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl font-medium">{t.intel.sub}</p>
             </div>
             <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-none px-12 h-16 font-black uppercase text-[10px] tracking-[0.4em] relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
                INTEL ARCHIVE
             </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
             {t.intel.news.map((item: any, i: number) => (
                <div key={i} className="group bg-black p-10 hover:bg-zinc-950 transition-all cursor-pointer border border-white/5 relative">
                   <TacticalCorner />
                   <div className="aspect-[16/9] bg-zinc-900 mb-10 overflow-hidden relative border border-white/5">
                      <div className="absolute top-4 left-4 z-10 bg-primary px-3 py-1 text-[8px] font-black uppercase tracking-widest">L4_{item.tag}</div>
                      <Image src={`https://picsum.photos/seed/${i+123}/800/450`} alt="intel" fill className="object-cover grayscale group-hover:scale-110 transition-transform duration-1000 opacity-30 group-hover:opacity-60" data-ai-hint="cyber intel" />
                   </div>
                   <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                     <Lock className="w-3 h-3" /> {item.date} // SECURE_REPORT
                   </div>
                   <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors uppercase italic leading-tight tracking-tighter">{item.title}</h4>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Operational Contact Grid */}
      <section id="contact" className="py-32 md:py-48 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-16">
              <div className="space-y-12 relative p-12">
                <TacticalCorner />
                <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[11px] flex items-center gap-4">
                  <Mail className="w-4 h-4" /> {t.nav.contact}
                </h2>
                <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">{t.contact.title}</h3>
                <p className="text-zinc-500 text-xl md:text-3xl leading-relaxed max-w-xl font-medium">{t.contact.sub}</p>
              </div>
              <div className="flex items-center gap-10 p-12 border border-white/10 bg-[#050505] group relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                 <Mail className="w-12 h-12 text-primary relative z-10" />
                 <div className="relative z-10">
                    <HUDMetadata text="SECURE_CHANNEL: ALPHA" className="mb-2" />
                    <div className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">ops@redwallcyber.defense</div>
                 </div>
              </div>
            </div>

            <div className="bg-[#050505] p-12 md:p-20 border border-white/10 relative">
               <TacticalCorner />
               {isSubmitted ? (
                 <div className="py-24 flex flex-col items-center text-center space-y-10">
                    <CheckCircle2 className="w-20 h-20 text-primary" />
                    <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter">{t.contact.success}</h4>
                    <p className="text-zinc-500 text-xl font-medium">{t.contact.successSub}</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="border-white/10 text-white hover:bg-white/5 rounded-none px-12 h-16 font-black uppercase text-[10px] tracking-[0.4em]">
                      NEW_TRANSMISSION
                    </Button>
                 </div>
               ) : (
                 <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">ID_NAME</FormLabel>
                            <FormControl><Input placeholder="REQUIRED" className="bg-black border-white/10 h-16 rounded-none focus:border-primary uppercase font-bold text-white placeholder:text-zinc-800" {...field} /></FormControl>
                            <FormMessage className="text-primary text-[9px] font-black uppercase" />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">ID_EMAIL</FormLabel>
                            <FormControl><Input type="email" placeholder="ENTERPRISE" className="bg-black border-white/10 h-16 rounded-none focus:border-primary uppercase font-bold text-white placeholder:text-zinc-800" {...field} /></FormControl>
                            <FormMessage className="text-primary text-[9px] font-black uppercase" />
                          </FormItem>
                        )} />
                     </div>
                     <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">TRANSMISSION_DATA</FormLabel>
                          <FormControl><Textarea placeholder="ENCRYPT_MESSAGE..." className="bg-black border-white/10 min-h-[200px] rounded-none focus:border-primary uppercase font-bold text-white placeholder:text-zinc-800" {...field} /></FormControl>
                          <FormMessage className="text-primary text-[9px] font-black uppercase" />
                        </FormItem>
                     )} />
                     <Button disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.5em] h-24 rounded-none shadow-2xl flex items-center justify-center gap-8 relative group overflow-hidden">
                       <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                       <span className="relative z-10">{isSubmitting ? t.contact.encrypting : <>{t.contact.transmit} <ArrowRight className="w-6 h-6" /></>}</span>
                     </Button>
                   </form>
                 </Form>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise HUD Footer */}
      <footer className="bg-black py-24 md:py-48 border-t border-white/10">
         <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
               <div className="space-y-12">
                  <RedwallLogo className="h-12" />
                  <p className="text-zinc-600 text-lg font-medium leading-relaxed border-l border-primary/20 pl-6 italic">Global authority in managed SOC services and AI-driven security orchestration.</p>
               </div>
               <div>
                  <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary" /> CORE_OPS
                  </h5>
                  <ul className="space-y-6 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
                     <li className="text-zinc-200 hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                       <div className="w-1.5 h-1.5 border border-primary/50" /> Managed SOC (L1/L2)
                     </li>
                     <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                       <div className="w-1.5 h-1.5 border border-zinc-800" /> EDR/XDR Management
                     </li>
                     <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                       <div className="w-1.5 h-1.5 border border-zinc-800" /> Vulnerability Lifecycle
                     </li>
                     <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-3">
                       <div className="w-1.5 h-1.5 border border-zinc-800" /> Cloud Security
                     </li>
                  </ul>
               </div>
               <div>
                  <h5 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary" /> GOVERNANCE
                  </h5>
                  <ul className="space-y-6 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
                     <li><Link href="/privacy" className="hover:text-primary transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 border border-zinc-800" /> {t.legal.privacy}</Link></li>
                     <li><Link href="/terms" className="hover:text-primary transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 border border-zinc-800" /> {t.legal.terms}</Link></li>
                     <li><Link href="/compliance" className="hover:text-primary transition-colors flex items-center gap-3"><div className="w-1.5 h-1.5 border border-zinc-800" /> {t.legal.compliance}</Link></li>
                  </ul>
               </div>
               <div className="space-y-8">
                  <div className="p-8 border border-white/10 bg-[#050505] relative">
                     <div className="tactical-corner-tl" />
                     <HUDMetadata text="SOC_EMEA_STATUS" className="mb-2" />
                     <div className="text-xs font-bold text-zinc-300 flex justify-between">LONDON, UK <span className="text-accent">ACTIVE</span></div>
                  </div>
                  <div className="p-8 border border-white/10 bg-[#050505] relative">
                     <div className="tactical-corner-tl" />
                     <HUDMetadata text="SOC_AMER_STATUS" className="mb-2" />
                     <div className="text-xs font-bold text-zinc-300 flex justify-between">AUSTIN, TX <span className="text-accent">ACTIVE</span></div>
                  </div>
               </div>
            </div>
            <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 text-[9px] font-black text-zinc-700 uppercase tracking-[0.8em]">
               <span>{t.footer.rights}</span>
               <div className="flex gap-16">
                  <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> ISO_27001</span>
                  <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> SOC2_TYPE_II</span>
               </div>
            </div>
         </div>
      </footer>

      {/* Analyzer Modal: HUD Terminal */}
      <Dialog open={isHunterOpen} onOpenChange={setIsHunterOpen}>
        <DialogContent className="bg-black border-white/10 text-white max-w-5xl p-0 rounded-none overflow-hidden">
           <DialogHeader className="p-12 border-b border-white/10 bg-[#050505] relative">
              <TacticalCorner />
              <div className="flex items-center gap-10">
                 <Terminal className="w-14 h-14 text-primary" />
                 <div>
                    <DialogTitle className="text-4xl font-black uppercase italic tracking-tighter mb-2">{t.threatHunter.modalTitle}</DialogTitle>
                    <HUDMetadata text="COMMAND_TERMINAL // PRECISION_AI_v4.2" />
                 </div>
              </div>
           </DialogHeader>
           
           <div className="p-12 space-y-12">
              {!analysisResult ? (
                 <div className="space-y-12">
                    <div className="relative">
                      <TacticalCorner />
                      <Textarea 
                         placeholder={t.threatHunter.placeholder}
                         value={threatInput}
                         onChange={(e) => setThreatInput(e.target.value)}
                         className="bg-zinc-950 border-white/10 min-h-[300px] rounded-none focus:border-primary font-mono text-white p-12 text-lg"
                      />
                    </div>
                    <Button onClick={handleAnalyzeThreat} disabled={isAnalyzing || !threatInput.trim()} className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.6em] h-24 rounded-none shadow-2xl flex items-center justify-center gap-8 relative group overflow-hidden">
                       <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                       {isAnalyzing ? <><Loader2 className="w-6 h-6 animate-spin" /> ANALYZING_STREAM...</> : <><Crosshair className="w-6 h-6" /> EXECUTE_SCAN</>}
                    </Button>
                 </div>
              ) : (
                 <div className="space-y-12 animate-in slide-in-from-bottom-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                       <div className="p-10 bg-zinc-950 border border-white/10 text-center flex flex-col items-center justify-center relative">
                          <TacticalCorner />
                          <HUDMetadata text="RISK_RATING" className="mb-6" />
                          <div className={cn("text-4xl font-black uppercase italic", analysisResult.severity === 'critical' || analysisResult.severity === 'high' ? 'text-primary' : 'text-accent')}>
                             {analysisResult.severity}
                          </div>
                       </div>
                       <div className="md:col-span-3 p-12 bg-zinc-950 border border-white/10 relative">
                          <TacticalCorner />
                          <div className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mb-8 flex items-center gap-4"><div className="w-8 h-px bg-primary" /> CORE_ANALYSIS</div>
                          <p className="text-zinc-300 text-xl leading-relaxed font-medium border-l border-primary/30 pl-8 italic">{analysisResult.analysis}</p>
                       </div>
                    </div>
                    <div className="p-12 bg-zinc-950 border border-white/10 relative">
                       <TacticalCorner />
                       <div className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mb-10 flex items-center gap-4"><div className="w-8 h-px bg-primary" /> REMEDIATION_PATH</div>
                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          {analysisResult.recommendations.map((rec, i) => (
                             <li key={i} className="flex items-start gap-6 text-zinc-400 group">
                                <div className="w-2 h-2 bg-primary mt-2 group-hover:scale-150 transition-all" />
                                <span className="text-base font-bold uppercase tracking-tight leading-tight">{rec}</span>
                             </li>
                          ))}
                       </ul>
                    </div>
                    <Button onClick={() => setAnalysisResult(null)} variant="outline" className="w-full border-white/10 text-white rounded-none h-20 font-black uppercase text-[11px] tracking-[0.6em]">REBOOT_TERMINAL</Button>
                 </div>
              )}
           </div>
        </DialogContent>
      </Dialog>

      {/* Global Intel Search */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
         <DialogContent className="bg-black border-white/10 text-white max-w-5xl p-0 rounded-none overflow-hidden">
            <div className="p-16 space-y-16">
               <div className="flex items-center gap-10 border-b border-white/10 pb-12 relative">
                  <Search className="w-12 h-12 text-primary" />
                  <form onSubmit={handleSearch} className="flex-grow">
                     <Input 
                        autoFocus
                        placeholder="ENTER_INTEL_QUERY..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none text-4xl md:text-7xl font-black italic uppercase tracking-tighter focus-visible:ring-0 p-0 text-white placeholder:text-zinc-900"
                     />
                  </form>
               </div>
               
               <div className="min-h-[400px]">
                  {isSearching ? (
                     <div className="flex flex-col items-center justify-center h-full space-y-10 py-24">
                        <Loader2 className="w-16 h-16 text-primary animate-spin" />
                        <HUDMetadata text="SCRUBBING_GLOBAL_TELEMETRY..." className="animate-pulse" />
                     </div>
                  ) : searchQuery ? (
                     <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12">
                        <div className="p-12 bg-zinc-950 border border-white/10 flex items-center justify-between group hover:border-primary transition-all relative">
                           <TacticalCorner />
                           <div className="flex items-center gap-10">
                              <Terminal className="w-10 h-10 text-primary" />
                              <span className="text-3xl font-black uppercase italic tracking-tighter">DATA_STREAM: {searchQuery}</span>
                           </div>
                           <ArrowRight className="w-10 h-10 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                        </div>
                        <p className="text-center text-zinc-800 italic text-2xl tracking-widest uppercase">MATCH_NOT_FOUND // AI_SCAN_INITIATED</p>
                     </div>
                  ) : (
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {navItems.map((item) => (
                           <button key={item.id} onClick={() => { scrollToSection(item.id); setIsSearchOpen(false); }} className="p-10 bg-zinc-950 border border-white/10 hover:border-primary transition-all text-left group relative">
                              <TacticalCorner />
                              <HUDMetadata text="QUICK_ROUTE" className="mb-6 group-hover:text-primary transition-colors" />
                              <div className="text-2xl font-black uppercase italic text-white tracking-tighter">{item.name}</div>
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
