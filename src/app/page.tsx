"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Section1Hero from "@/components/Section1Hero";
import Section8Experience from "@/components/Section8Experience";
import Section2Vision from "@/components/Section2Vision";
import Section3Sports from "@/components/Section3Sports";
import Section4Tourism from "@/components/Section4Tourism";
import Section5Policy from "@/components/Section5Regional";
import Section6Media from "@/components/Section6Media";
import Section7Agenda from "@/components/Section7Agenda";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"en" | "np">("en");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex min-h-screen flex-col w-full">
        <Section1Hero lang={lang} />
        <Section8Experience lang={lang} />
        <Section2Vision lang={lang} />
        <Section7Agenda lang={lang} />
        <Section3Sports lang={lang} />
        <Section4Tourism lang={lang} />
        <Section5Policy lang={lang} />
        <Section6Media lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
