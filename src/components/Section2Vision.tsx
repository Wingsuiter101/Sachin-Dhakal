"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { translations } from "@/data/translations";

interface Section2VisionProps {
  lang: "en" | "np";
}

export default function Section2Vision({ lang }: Section2VisionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const t = translations[lang].vision;
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="vision" ref={ref} className="bg-white py-[25vh] px-8 overflow-hidden">
      <motion.div style={{ y }} className="max-w-[90vw] mx-auto">
        <span className="text-accent-gold font-bold tracking-widest text-xs block mb-12">
          {t.tag}
        </span>
        <h2 className={`text-[6vw] md:text-[5vw] font-black text-primary-navy leading-[0.9] tracking-tighter uppercase ${lang === "np" ? "np-heading" : ""}`}>
          {t.title_1} <br /> {t.title_2} <span className="text-accent-gold">{t.title_gold}</span>
        </h2>
        <div className="mt-32 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.img 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="/Vision.png" 
              alt="Sachin Dhakal Vision" 
              className="w-full h-auto shadow-2xl" 
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <p className={`text-2xl md:text-3xl text-gray-900 font-light leading-snug ${lang === "np" ? "np-body" : ""}`}>
              {t.para_1}
            </p>
            <p className={`text-xl md:text-2xl text-gray-500 font-light leading-snug ${lang === "np" ? "np-body" : ""}`}>
              {t.para_2}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
