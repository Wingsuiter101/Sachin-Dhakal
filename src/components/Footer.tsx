"use client";

import { translations } from "@/data/translations";

interface FooterProps {
  lang: "en" | "np";
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer id="endorse" className="bg-accent-gold text-white pt-32 pb-16 px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-[90vw] mx-auto text-center">
        
        <h2 className={`text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-16 text-white ${lang === "np" ? "np-heading" : ""}`}>
          {t.cta_1}<br/>{t.cta_2}
        </h2>

        <a
          href="mailto:contact@sachindhakal.com"
          className={`inline-block border-[3px] border-white text-white text-3xl font-black tracking-tighter px-16 py-8 hover:bg-white hover:text-accent-gold transition-colors duration-300 uppercase ${lang === "np" ? "np-heading" : ""}`}
        >
          {t.endorse}
        </a>

        <div className="mt-32 pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between w-full text-sm font-bold tracking-widest text-black/60 uppercase">
          <span>&copy; {new Date().getFullYear()} {t.copyright}</span>
          <div className="space-x-8 mt-8 md:mt-0">
            <a href="https://www.facebook.com/sachin.dhakal.71" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.social_fb}</a>
            <a href="https://www.linkedin.com/in/sachin-dhakal-246507171/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.social_li}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
