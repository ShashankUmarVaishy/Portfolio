"use client";

import React from 'react';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full mx-auto flex flex-col justify-start pt-8 pb-16 sm:pb-24">
      <div className="px-6 sm:px-16 pt-[100px] max-w-7xl flex flex-row items-start mx-auto gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          {/* the purple dot */}
          <div className="w-5 h-5 rounded-full bg-purple-600 shadow-md shadow-purple-200" />
          {/* the line */}
          <div className="w-1 sm:h-72 h-40 bg-gradient-to-b from-purple-600 via-purple-300 to-transparent" />
        </div>
        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span className="text-purple-600">शशांक</span> 
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-slate-600 max-w-2xl leading-relaxed`}>
            A passionate Software Engineer & Full-Stack Developer specializing in MERN, Next.js, Java and going on with AI/ML.<br className="hidden sm:block" />
            Let's build something scalable and amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;