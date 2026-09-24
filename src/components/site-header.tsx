"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav } from "@/lib/content";

export function Emblem() { return <span aria-hidden className="grid h-10 w-10 place-items-center rounded-full border border-gold text-lg text-gold">G</span>; }

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-[#d9cdb7] bg-parchment/95 backdrop-blur"><div className="container flex h-18 items-center justify-between"><a href="#top" className="flex items-center gap-3"><Image src="/images/oguia-logo.jpg" alt="O Guia Chocolates logo" width={44} height={44} className="h-11 w-11 rounded-full object-cover" priority/><span className="display text-lg">O Guia <i>Chocolates</i></span></a><nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">{nav.map(([n,h])=><a key={h} href={h} className="text-xs font-bold tracking-wide hover:text-canopy">{n}</a>)}<a href="#contact" className="rounded-lg bg-cocoa px-4 py-3 text-xs font-bold text-parchment">Investor relations</a></nav><button aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)} className="grid h-11 w-11 place-items-center lg:hidden">{open?<X/>:<Menu/>}</button></div>{open&&<nav className="container grid gap-1 border-t border-[#d9cdb7] py-4 lg:hidden" aria-label="Mobile">{nav.map(([n,h])=><a onClick={()=>setOpen(false)} key={h} href={h} className="rounded-lg px-4 py-3 text-sm font-bold hover:bg-cream">{n}</a>)}<a href="#contact" onClick={()=>setOpen(false)} className="rounded-lg bg-cocoa px-4 py-3 text-sm font-bold text-parchment">Investor relations</a></nav>}</header>;
}
