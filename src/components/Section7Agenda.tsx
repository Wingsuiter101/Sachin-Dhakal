"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/translations";

interface Section7AgendaProps {
  lang: "en" | "np";
}

export default function Section7Agenda({ lang }: Section7AgendaProps) {
  const t = translations[lang].agenda;

  return (
    <section id="agenda" className="bg-[#111] text-white py-[20vh] px-8">
      <div className="max-w-[90vw] mx-auto">
        <span className="text-accent-gold font-bold tracking-widest text-xs block mb-24">
          {t.tag}
        </span>
        
        <div className="flex flex-col gap-8 md:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
          >
            <span className="text-[12vw] md:text-[6vw] font-black leading-none text-white/5 mt-2 shrink-0 w-[10vw] text-right">01</span>
            <div className="flex-1">
              <h3 className={`text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase ${lang === "np" ? "np-heading" : ""}`}>{t.item_1_title}</h3>
              <p className={`text-xl max-w-2xl text-gray-400 font-light leading-relaxed ${lang === "np" ? "np-body" : ""}`}>{t.item_1_desc}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-12 border-b border-white/10 pb-12"
          >
            <span className="text-[12vw] md:text-[6vw] font-black leading-none text-white/5 mt-2 shrink-0 w-[10vw] text-right">02</span>
            <div className="flex-1">
              <h3 className={`text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase ${lang === "np" ? "np-heading" : ""}`}>{t.item_2_title}</h3>
              <p className={`text-xl max-w-2xl text-gray-400 font-light leading-relaxed ${lang === "np" ? "np-body" : ""}`}>{t.item_2_desc}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
          >
            <span className="text-[12vw] md:text-[6vw] font-black leading-none text-white/5 mt-2 shrink-0 w-[10vw] text-right">03</span>
            <div className="flex-1">
              <h3 className={`text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase ${lang === "np" ? "np-heading" : ""}`}>{t.item_3_title}</h3>
              <p className={`text-xl max-w-2xl text-gray-400 font-light leading-relaxed ${lang === "np" ? "np-body" : ""}`}>{t.item_3_desc}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
