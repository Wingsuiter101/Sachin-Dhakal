"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/translations";

interface Section4TourismProps {
  lang: "en" | "np";
}

export default function Section4Tourism({ lang }: Section4TourismProps) {
  const t = translations[lang].tourism;

  const items = [
    { concept: t.concept_1, proof: t.proof_1 },
    { concept: t.concept_2, proof: t.proof_2 },
    { concept: t.concept_3, proof: t.proof_3 },
    { concept: t.concept_4, proof: t.proof_4 },
  ];

  return (
    <section id="portfolio" className="bg-primary-navy text-white py-32 px-8">
      <div className="max-w-[90vw] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-white/20 pb-12 gap-8">
          <div>
            <h2 className={`text-[5vw] leading-none font-black uppercase tracking-tighter mb-6 mt-4 ${lang === "np" ? "np-heading" : ""}`}>
              {t.title_1}<br/><span className="text-gray-500">{t.title_2}</span>
            </h2>
            <p className={`max-w-2xl text-xl text-gray-400 font-light ${lang === "np" ? "np-body" : ""}`}>
               {t.desc}
            </p>
          </div>
          <span className="text-accent-gold font-bold text-xs tracking-widest md:mb-4">{t.tag}</span>
        </div>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row justify-between items-start py-12 border-b border-white/10 hover:bg-white hover:text-primary-navy transition-colors px-4 cursor-default"
            >
              <h3 className={`text-[4vw] md:text-[5vw] font-black leading-[0.85] tracking-tighter group-hover:translate-x-4 transition-transform duration-500 md:w-2/3 ${lang === "np" ? "np-heading" : ""}`}>
                {item.concept}
              </h3>
              <span className="text-lg font-bold text-gray-500 group-hover:text-accent-gold mt-8 md:mt-0 transition-colors tracking-widest max-w-[200px] md:max-w-none">
                {item.proof}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
