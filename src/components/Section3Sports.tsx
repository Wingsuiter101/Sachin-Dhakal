"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/translations";

interface Section3SportsProps {
  lang: "en" | "np";
}

export default function Section3Sports({ lang }: Section3SportsProps) {
  const t = translations[lang].sports;

  const points = [t.point_1, t.point_2, t.point_3, t.point_4];

  return (
    <section className="bg-accent-gold text-white py-[15vh] px-8 overflow-hidden relative">
      {/* Right accent block */}
      <div className="absolute top-0 right-0 w-[30vw] h-full bg-black/15 hidden md:block" />

      <div className="max-w-[90vw] mx-auto relative z-10">
        
        {/* Tag */}
        <span className="text-black/60 font-bold tracking-widest text-xs block mb-10">
          {t.tag}
        </span>

        {/* Full-width heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`text-[12vw] md:text-[9vw] leading-[0.85] font-black uppercase tracking-tighter text-white mb-16 md:mb-20 ${lang === "np" ? "np-heading" : ""}`}
        >
          {t.title_1} {t.title_2}<br className="hidden md:block" /> {t.title_3}
        </motion.h2>

        {/* Two-column body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-white/20 pt-12">
          
          {/* Left — body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-xl md:text-2xl font-light text-white/80 leading-relaxed ${lang === "np" ? "np-body" : ""}`}
          >
            {t.para}
          </motion.p>

          {/* Right — numbered points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                <span className="text-xs font-black text-black/40 mt-1 shrink-0 w-5">0{i + 1}</span>
                <span className={`text-lg md:text-xl font-bold text-white tracking-wide ${lang === "np" ? "np-heading" : ""}`}>{point}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
