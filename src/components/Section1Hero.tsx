"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/translations";

interface Section1HeroProps {
  lang: "en" | "np";
}

export default function Section1Hero({ lang }: Section1HeroProps) {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col bg-primary-navy text-white overflow-hidden">

      {/* ── DESKTOP: portrait floats on the right ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex absolute top-[8%] bottom-[12%] right-0 w-[36vw] z-0 pointer-events-none select-none items-end justify-end"
      >
        <img src="/Floating-hero.png" alt="Sachin Dhakal" className="h-full w-auto object-contain object-bottom" />
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-primary-navy via-primary-navy/60 to-transparent" />
      </motion.div>

      {/* ── MOBILE: stacked layout ── */}
      <div className="md:hidden flex flex-col flex-1 px-6 pt-28 pb-10">

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent-gold font-bold tracking-widest text-xs mb-5"
        >
          {t.tag}
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`text-[14vw] leading-[0.88] font-black tracking-tighter uppercase ${lang === "np" ? "np-heading" : ""}`}
        >
          {t.title_1}<br />{t.title_2}<br />
          <span className="text-accent-gold">{t.title_gold}</span>
        </motion.h1>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-full mt-4 flex justify-center"
        >
          <img
            src="/Floating-hero.png"
            alt="Sachin Dhakal"
            className="w-[75%] h-auto object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-navy to-transparent" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="border-t border-white/20 pt-5 mt-2 flex flex-col gap-3"
        >
          <p className={`text-sm font-light text-gray-400 leading-relaxed ${lang === "np" ? "np-body" : ""}`}>{t.desc}</p>
          <a href="#vision" className="text-xs font-bold tracking-widest text-accent-gold">{t.scroll}</a>
        </motion.div>
      </div>

      {/* ── DESKTOP: original layout ── */}
      <div className="hidden md:flex flex-col justify-between flex-1 px-8 pt-40 pb-16 relative z-10">
        <div className="w-full max-w-[90vw] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-accent-gold font-bold tracking-widest text-sm mb-4"
          >
            {t.tag}
          </motion.p>
        </div>

        <div className="w-full max-w-[90vw] mx-auto mt-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`text-[11vw] leading-[0.85] font-black tracking-tighter uppercase mb-8 ${lang === "np" ? "np-heading" : ""}`}
          >
            {t.title_1}<br />{t.title_2}<br />
            <span className="text-accent-gold">{t.title_gold}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row gap-8 justify-between items-end border-t border-white/20 pt-8"
          >
            <p className={`text-3xl font-light max-w-2xl text-gray-400 ${lang === "np" ? "np-body" : ""}`}>{t.desc}</p>
            <a href="#vision" className="text-sm font-bold tracking-widest text-accent-gold hover:text-white transition-colors whitespace-nowrap">{t.scroll}</a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
