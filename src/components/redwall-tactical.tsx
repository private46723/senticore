
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ShieldCheck } from 'lucide-react';

export const RedwallLogo = ({ className = "h-8", iconOnly = false }: { className?: string, iconOnly?: boolean }) => (
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

export const TacticalCorner = () => (
  <>
    <div className="tactical-corner-tl" />
    <div className="tactical-corner-tr" />
    <div className="tactical-corner-bl" />
    <div className="tactical-corner-br" />
  </>
);

export const HUDMetadata = ({ text, className }: { text: string, className?: string }) => (
  <span className={cn("text-[7px] font-black text-zinc-800 uppercase tracking-[0.3em] pointer-events-none select-none", className)}>
    {text}
  </span>
);
