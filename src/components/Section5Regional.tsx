"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/translations";

interface Section5PolicyProps {
  lang: "en" | "np";
}

export default function Section5Policy({ lang }: Section5PolicyProps) {
  const t = translations[lang].policy;

  return (
    <section className="bg-white py-[20vh] px-8 relative overflow-hidden">
      <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        <div className="w-full md:w-1/3">
          <span className="text-accent-gold font-bold tracking-widest text-xs block mb-12">
            {t.tag}
          </span>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
            alt="Corporate Unity"
            className="w-full h-auto grayscale contrast-150 mix-blend-darken"
          />
        </div>

        <div className="w-full md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={`text-[6vw] font-black uppercase leading-[0.9] tracking-tighter text-primary-navy mb-12 ${lang === "np" ? "np-heading" : ""}`}
          >
            {t.title_1} <br/><span className="text-accent-gold">{t.title_2}</span>
          </motion.h2>
          
          <div className="w-full h-[1px] bg-primary-navy/20 mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className={`text-2xl font-black text-primary-navy tracking-tighter mb-4 ${lang === "np" ? "np-heading" : ""}`}>{t.item_1_title}</h4>
              <p className={`text-lg text-gray-600 font-light leading-relaxed ${lang === "np" ? "np-body" : ""}`}>
                {t.item_1_para}
              </p>
            </div>
            <div>
              <h4 className={`text-2xl font-black text-primary-navy tracking-tighter mb-4 ${lang === "np" ? "np-heading" : ""}`}>{t.item_2_title}</h4>
              <p className={`text-lg text-gray-600 font-light leading-relaxed ${lang === "np" ? "np-body" : ""}`}>
                {t.item_2_para}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
