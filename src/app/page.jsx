"use client";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "../components";

export default function Home() {
  return (
    <div className="relative z-0 bg-white text-slate-900 flex flex-col w-full min-h-screen">
      <div className="bg-gradient-to-b from-purple-50/60 via-white to-white w-full border-b border-slate-100">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0 bg-slate-50/50">
        <Contact />
      </div>
    </div>
  );
}
