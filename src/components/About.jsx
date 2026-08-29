"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-600 text-[18px] max-w-3xl leading-[32px]"
      >
        I'm <strong className="text-purple-700 font-semibold">Shashank Umar Vaishy</strong>, a passionate <strong className="text-purple-700 font-semibold">BTech student</strong> in{" "}
        <strong className="text-purple-700 font-semibold">Computer Science and Engineering</strong> at{" "}
        <strong className="text-purple-700 font-semibold">NIT Meghalaya</strong> (CGPA: 9.57/10). I enjoy crafting impactful tech solutions by combining creativity with clean code. <br /><br />

        I specialize in <strong className="text-purple-700 font-semibold">full-stack web & mobile development</strong>, working with technologies like <strong className="text-slate-900 font-semibold">React, Next.js, React Native, Express.js</strong>, and more. I also have a strong foundation in <strong className="text-slate-900 font-semibold">Data Structures & Algorithms (DSA)</strong>. <br /><br />

        I'm actively working with <strong className="text-purple-700 font-semibold">AI/ML, Multi-Modal RAG Pipelines, Agentic-AI</strong>, and <strong className="text-purple-700 font-semibold">AWS Cloud Architectures</strong>, aiming to build scalable systems that deliver exceptional user experiences.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
