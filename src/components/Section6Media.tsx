"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { translations } from "@/data/translations";

const videos = [
  {
    id: "ELJrzbWMJ9c",
    url: "https://www.youtube.com/watch?v=ELJrzbWMJ9c",
    label: "Hamro KhelCast E91",
    title: "FC Chitwan & The Sports Economy"
  },
  {
    id: "3TMyw-5mR1E",
    url: "https://www.youtube.com/watch?v=3TMyw-5mR1E",
    label: "On Air With Sanjay #464",
    title: "Next Gen Entrepreneurs!"
  },
  {
    id: "I5CWJctoUFo",
    url: "https://www.youtube.com/watch?v=I5CWJctoUFo",
    label: "Dekhapadhi",
    title: "In Search of Identity & Building FC Chitwan"
  }
];

interface Section6MediaProps {
  lang: "en" | "np";
}

export default function Section6Media({ lang }: Section6MediaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = translations[lang].media;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth : scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="media" className="bg-primary-navy text-white pt-32 pb-48 px-8 border-t border-white/20 overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        <span className="text-accent-gold font-bold tracking-widest text-xs block mb-24">
          {t.tag}
        </span>

        {/* --- VIDEO CAROUSEL --- */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-12 border-b border-white/20 pb-4">
             <h3 className="text-3xl font-black uppercase tracking-tighter">{t.video_title}</h3>
             
             <div className="flex items-center gap-6">
               <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase hidden md:block">{t.swipe}</span>
               <div className="flex gap-4">
                 <button onClick={() => scroll("left")} className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-primary-navy transition-colors hidden md:block">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                 </button>
                 <button onClick={() => scroll("right")} className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-primary-navy transition-colors hidden md:block">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                 </button>
               </div>
             </div>
          </div>

          {/* Native scroll carousel */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
             {videos.map((video, idx) => (
                <div key={idx} className="w-full md:w-[calc(50%-1rem)] shrink-0 snap-center">
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer aspect-video bg-gray-900 overflow-hidden block">
                    <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" alt={video.label} />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:bg-accent-gold group-hover:border-accent-gold transition-colors">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                       </div>
                    </div>
                    <div className="absolute bottom-6 left-6 pr-6">
                       <span className="bg-accent-gold text-white text-[10px] font-bold px-2 py-1 tracking-widest mb-3 inline-block">{video.label}</span>
                       <h4 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">{video.title}</h4>
                    </div>
                  </a>
                </div>
             ))}
          </div>
        </div>

        {/* --- ARTICLES SECTION --- */}
        <div>
          <div className="flex justify-between items-end mb-12 border-b border-white/20 pb-4">
             <h3 className="text-3xl font-black uppercase tracking-tighter">Publications & Editorial</h3>
          </div>

          <div className="flex flex-col border-t border-white/10">
             <a href="https://np.ictframe.com/shresthas-panel-files-candidacy-for-associate-vice-president/" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4">
               <div className="w-full md:w-2/3">
                 <span className="text-gray-500 text-xs font-bold tracking-widest block mb-2">ICTFrame</span>
                 <h4 className={`text-2xl md:text-3xl font-black tracking-tighter group-hover:text-accent-gold transition-colors ${lang === "np" ? "np-heading" : ""}`}>{t.article_1_title}</h4>
               </div>
               <span className="mt-4 md:mt-0 text-sm font-bold text-gray-600 group-hover:text-white transition-colors tracking-widest">{t.read}</span>
             </a>

             <a href="https://insurancekhabar.com/jyotsna-team-with-sachin-dhakal-becomes-stronger/" target="_blank" rel="noopener noreferrer" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4">
               <div className="w-full md:w-2/3">
                 <span className="text-gray-500 text-xs font-bold tracking-widest block mb-2">Insurance Khabar</span>
                 <h4 className={`text-2xl md:text-3xl font-black tracking-tighter group-hover:text-accent-gold transition-colors ${lang === "np" ? "np-heading" : ""}`}>{t.article_2_title}</h4>
               </div>
               <span className="mt-4 md:mt-0 text-sm font-bold text-gray-600 group-hover:text-white transition-colors tracking-widest">{t.read}</span>
             </a>
          </div>
        </div>

      </div>
    </section>
  );
}
