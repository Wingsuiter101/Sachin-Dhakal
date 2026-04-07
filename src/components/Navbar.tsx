"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/translations";

interface NavbarProps {
  lang: "en" | "np";
  setLang: (lang: "en" | "np") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang].navbar;

  return (
    <header className="fixed top-0 w-full z-50 bg-primary-navy/80 backdrop-blur-md text-white py-4 border-b border-white/10 transition-all duration-300">
      <div className="max-w-[90vw] mx-auto flex flex-row justify-between items-center">
        <div>
          <span className="text-lg md:text-2xl font-black tracking-tight leading-none whitespace-nowrap">
            SACHIN DHAKAL
          </span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="hidden md:flex flex-row items-center text-sm font-bold tracking-widest gap-8 uppercase">
            <a href="#vision" className="hover:text-accent-gold transition-colors">{t.philosophy}</a>
            <a href="#agenda" className="hover:text-accent-gold transition-colors">{t.agenda}</a>
            <a href="#media" className="hover:text-accent-gold transition-colors">{t.media}</a>
          </div>
          
          <div className="flex items-center bg-white/5 border border-white/10 p-1">
            <button 
              onClick={() => setLang("en")}
              className={`px-3 py-1 text-[10px] font-black transition-all duration-300 ${lang === "en" ? "bg-accent-gold text-white" : "text-gray-400 hover:text-white"}`}
            >
              ENG
            </button>
            <button 
              onClick={() => setLang("np")}
              className={`px-3 py-1 text-[10px] font-black transition-all duration-300 ${lang === "np" ? "bg-accent-gold text-white" : "text-gray-400 hover:text-white"}`}
            >
              NEP
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
