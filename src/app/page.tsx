'use client';

import React, { useState, useMemo } from 'react';
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
  Linkedin, 
  Instagram, 
  Send, 
  ShieldCheck, 
  Target, 
  Zap, 
  Cpu, 
  Terminal, 
  CheckCircle2,
  Globe
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
  const [activePlatformTab, setActivePlatformTab] = useState('soc');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const navItems = [
    { name: t.nav.about, id: 'about' },
    { name: t.nav.services, id: 'services' },
    { name: t.nav.intel, id: 'intel' },
    { name: t.nav.proven, id: 'proven-success' },
    { name: t.nav.contact, id: 'contact' },
  ];

  const platforms = useMemo(() => [
    { 
      id: 'soc', 
      name: language === 'en' ? 'SOC as a Service' : (language === 'ru' ? 'SOC как услуга' : (language === 'tr' ? 'Hizmet Olarak SOC' : 'SOC एक सेवा के रूप में')), 
      icon: <Shield className={cn("w-5 h-5 transition-colors", activePlatformTab === 'soc' ? "text-primary" : "text-zinc-400")} />,
      largeTitle: 'BLUE TEAM L1/L2 OPERATIONS',
      description: 'Our primary 24/7 Security Operations Center provides elite log monitoring, SIEM management, and real-time alert analysis.',
      stats: [{ value: '24/7', label: 'MONITORING' }, { value: '15m', label: 'SLA RESPONSE' }],
      cta: 'Request SOC Consultation',
      themeColor: 'text-primary',
      btnColor: 'bg-primary hover:bg-primary/90 text-white',
      underlineColor: 'bg-primary',
      watermark: 'READY'
    },
    { 
      id: 'endpoint', 
      name: language === 'en' ? 'EDR / XDR Management' : (language === 'ru' ? 'Управление EDR / XDR' : (language === 'tr' ? 'EDR / XDR Yönetimi' : 'EDR / XDR प्रबंधन')),
      icon: <Activity className={cn("w-5 h-5 transition-colors", activePlatformTab === 'endpoint' ? "text-accent" : "text-zinc-400")} />,
      largeTitle: 'ENDPOINT DEFENSE & RESPONSE',
      description: 'Advanced management of your EDR/XDR stack across global deployments. Proactive threat hunting and remediation.',
      stats: [{ value: '100%', label: 'VISIBILITY' }, { value: '99.9%', label: 'PROTECTION' }],
      cta: 'Secure Your Fleet',
      themeColor: 'text-accent',
      btnColor: 'bg-accent hover:bg-[#00c853] text-black',
      underlineColor: 'bg-accent',
      watermark: 'EDR'
    },
    { 
      id: 'vulnerability', 
      name: language === 'en' ? 'Vulnerability Assessment' : (language === 'ru' ? 'Оценка уязвимостей' : (language === 'tr' ? 'Zafiyet Değerlendirmesi' : 'भेद्यता मूल्यांकन')),
      icon: <Bug className={cn("w-5 h-5 transition-colors", activePlatformTab === 'vulnerability' ? "text-cyan-400" : "text-zinc-400")} />,
      largeTitle: 'RISK REPORTS & REMEDIATION',
      description: 'Continuous asset discovery and detailed risk assessment. We provide technical remediation playbooks.',
      stats: [{ value: 'VA/PT', label: 'EXPERTS' }, { value: 'ZERO', label: 'MISSED GAPS' }],
      cta: 'Get Risk Audit',
      themeColor: 'text-cyan-400',
      btnColor: 'bg-cyan-400 hover:bg-cyan-500 text-black',
      underlineColor: 'bg-cyan-400',
      watermark: 'VA'
    },
  ], [activePlatformTab, language]);

  const currentPlatform = useMemo(() => platforms.find((p) => p.id === activePlatformTab) || platforms[0], [platforms, activePlatformTab]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-primary/30">
      <div className="bg-[#1a1a1a] text-white text-center py-2 text-[13px] border-b border-white/5">
        <p className="font-medium tracking-wide">Redwall Cyber Defense — Elite Blue Team Monitoring Now Available Globally</p>
      </div>

      <div className="bg-white text-zinc-800 py-2 px-6 flex justify-between items-center text-[13px] border-b border-gray-200">
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:text-primary transition-colors uppercase font-bold text-zinc-900 outline-none">
                <Globe className="w-4 h-4" /> {language.toUpperCase()} <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-gray-200">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as any)} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 text-zinc-900 font-bold uppercase text-xs py-3 px-4">
                  <span>{lang.flag}</span> {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="hover:text-primary transition-colors text-zinc-900"><Search className="w-4 h-4" /></button>
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

      <section id="services" className="bg-[#050505] py-32 border-t border-white/5 overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="flex flex-wrap items-center gap-16 border-b border-white/10 mb-24">
            {platforms.map((platform) => (
              <button 
                key={platform.id} 
                onClick={() => setActivePlatformTab(platform.id)} 
                className={cn(
                  "flex items-center gap-5 pb-8 transition-all relative group", 
                  activePlatformTab === platform.id ? "opacity-100" : "opacity-40 hover:opacity-100"
                )}
              >
                {platform.icon} 
                <span className={cn(
                  "text-xl font-black transition-colors uppercase tracking-widest", 
                  activePlatformTab === platform.id ? "text-white" : "text-zinc-500"
                )}>
                  {platform.name}
                </span>
                {activePlatformTab === platform.id && (
                  <div className={cn("absolute bottom-0 left-0 right-0 h-[3px]", platform.underlineColor)} />
                )}
              </button>
            ))}
          </div>
          <div key={activePlatformTab} className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h3 className={cn("text-6xl md:text-[100px] font-black tracking-[-0.03em] uppercase leading-[0.9] mb-20", currentPlatform.themeColor)}>
              {currentPlatform.largeTitle}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-16">
                <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed max-w-2xl font-normal">
                  {currentPlatform.description}
                </p>
                <div className="flex flex-wrap gap-24">
                  {currentPlatform.stats.map((stat, i) => (
                    <div key={i} className="space-y-4">
                      <div className="text-6xl md:text-7xl font-black text-white italic tracking-tighter">{stat.value}</div>
                      <div className="text-[11px] font-black text-zinc-500 tracking-[0.4em] uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[220px] font-black text-white/[0.03] italic leading-none select-none text-right flex items-end justify-end hidden lg:flex">
                {currentPlatform.watermark}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#050505] py-40 border-t border-white/10 scroll-mt-20">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-primary font-black uppercase tracking-[0.5em] text-[11px]">{t.nav.contact}</h2>
                <h3 className="text-6xl font-black text-white tracking-tighter leading-[1.1]">{t.contact.title}</h3>
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
                         <>{t.contact.transmit} <Send className="w-5 h-5" /></>
                       )}
                     </Button>
                   </form>
                 </Form>
               )}
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
