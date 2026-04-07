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
        <div className="flex flex-row items-center text-[10px] md:text-sm font-bold tracking-widest gap-3 md:gap-8 uppercase">
          <a href="#vision" className="hover:text-accent-gold transition-colors">{t.philosophy}</a>
          <a href="#agenda" className="hover:text-accent-gold transition-colors">{t.agenda}</a>
          <a href="#media" className="hover:text-accent-gold transition-colors">{t.media}</a>
          
          <button 
            onClick={() => setLang(lang === "en" ? "np" : "en")}
            className="ml-4 px-2 py-1 border border-white/10 hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 text-xs font-black cursor-pointer"
          >
            {t.lang}
          </button>
        </div>
      </div>
    </header>
  );
}
