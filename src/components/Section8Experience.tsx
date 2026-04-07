"use client";

import { motion } from "framer-motion";
import { translations } from "@/data/translations";

interface Section8ExperienceProps {
  lang: "en" | "np";
}

export default function Section8Experience({ lang }: Section8ExperienceProps) {
  const t = translations[lang].experience;

  const experiences = [
    { role: t.founder, company: t.ila, date: lang === "en" ? "Jan 2025 - Present" : "जनवरी २०२५ - वर्तमान" },
    { role: t.board, company: t.ime_digital, date: lang === "en" ? "May 2023 - Present" : "मे २०२३ - वर्तमान" },
    { role: t.board, company: t.ime_india, date: lang === "en" ? "Sep 2022 - Present" : "सेप्टेम्बर २०२२ - वर्तमान" },
    { role: t.director, company: t.ime_group, date: lang === "en" ? "Jan 2022 - Present" : "जनवरी २०२२ - वर्तमान" },
    { role: t.president, company: t.fc_chitwan, date: lang === "en" ? "Feb 2021 - Present" : "फेब्रुअरी २०२१ - वर्तमान" },
    { role: t.alumni, company: t.lmu, date: lang === "en" ? "Aug 2018 - Aug 2021" : "अगस्ट २०१८ - अगस्ट २०२१" },
  ];

  return (
    <section id="experience" className="bg-[#111] text-white py-[20vh] px-8">
      <div className="max-w-[90vw] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          <div className="w-full md:w-1/3">
            <span className="text-accent-gold font-bold tracking-widest text-xs block mb-12">
              {t.tag}
            </span>
            <h2 className={`text-[5vw] md:text-[4vw] font-black leading-none uppercase tracking-tighter mb-8 ${lang === "np" ? "np-heading" : ""}`}>
              {t.title}
            </h2>
            <p className={`text-xl font-light text-gray-500 ${lang === "np" ? "np-body" : ""}`}>
              {t.desc}
            </p>
          </div>

          <div className="w-full md:w-2/3 flex flex-col pt-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border-t border-white/20 py-8 flex flex-col md:flex-row md:items-baseline justify-between hover:bg-white/5 transition-colors px-4"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white group-hover:text-accent-gold transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xl md:text-2xl font-light text-gray-400">
                    {exp.company}
                  </span>
                </div>
                <span className="text-sm font-bold tracking-widest text-gray-600 mt-4 md:mt-0 whitespace-nowrap uppercase">
                  {exp.date}
                </span>
              </motion.div>
            ))}
            <div className="border-t border-white/20"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
