"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

// -----------------------------------------------------------------------
// Skill data — 4 progressive stages
// -----------------------------------------------------------------------
const STAGES = [
  {
    label: "Foundations",
    subtitle: "Low-level languages, algorithms & core CS fundamentals",
    icon: "🌱",
    color: "#7c3aed",
    skills: ["C", "C++", "Java", "Data Structures & Algorithms", "Operating Systems", "Linux", "Git", "HTML5", "CSS3"],
  },
  {
    label: "Web & Databases",
    subtitle: "Modern web stack, scalable APIs & persistent databases",
    icon: "🌿",
    color: "#8b5cf6",
    skills: ["JavaScript", "TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "REST APIs"],
  },
  {
    label: "Full-Stack & Cloud",
    subtitle: "Production cloud systems, mobile apps & DevOps",
    icon: "📡",
    color: "#9333ea",
    skills: ["Next.js 15", "React Native", "NativeWind", "Flask", "AWS EC2", "Firebase", "Docker", "Ansible", "Zod"],
  },
  {
    label: "AI & Enterprise",
    subtitle: "Agentic AI workflows, Gen-AI, RAG & enterprise automation",
    icon: "✨",
    color: "#a855f7",
    skills: ["Agentic-AI", "Generative-AI", "RAG Pipelines", "PyTorch", "TensorFlow", "YOLOv8", "Upstash Vector", "Redis & BullMQ", "Workday EIB", "Power Automate"],
  },
];

// -----------------------------------------------------------------------
// Individual skill pill
// -----------------------------------------------------------------------
const SkillPill = ({ skill, color, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.25, delay, ease: "easeOut" }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold border bg-white text-slate-800 border-slate-200 cursor-default select-none shadow-xs transition-all duration-200 hover:border-purple-500 hover:text-purple-700 hover:bg-purple-50/50 hover:-translate-y-0.5"
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      {skill}
    </motion.span>
  );
};

// -----------------------------------------------------------------------
// Responsive Stage Row
// Desktop (md+): Alternating left & right with central spine
// Mobile & Tablet (< md): Clean left-aligned timeline with full-width cards
// -----------------------------------------------------------------------
const StageRow = ({ stage, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative my-8 sm:my-12">
      {/* ===================== MOBILE & TABLET LAYOUT (< md) ===================== */}
      <div className="md:hidden flex items-start pl-14 sm:pl-16 relative">
        {/* Node Circle on left spine */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.35, type: "spring", stiffness: 300 }}
          className="absolute left-0 top-0.5 w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-black border-4 border-white shadow-md z-10"
          style={{
            background: stage.color,
            boxShadow: `0 0 0 3px ${stage.color}33, 0 4px 12px ${stage.color}55`,
          }}
        >
          {stage.icon}
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{stage.icon}</span>
            <h3 className="text-slate-900 text-[18px] font-extrabold">{stage.label}</h3>
          </div>
          <p className="text-slate-500 text-[13px] leading-relaxed mb-3">{stage.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {stage.skills.map((skill, i) => (
              <SkillPill key={skill} skill={skill} color={stage.color} delay={i * 0.03} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ===================== DESKTOP LAYOUT (>= md) ===================== */}
      <div className="hidden md:flex items-start gap-8">
        {/* Left Column */}
        <div className={`flex-1 flex flex-col ${isEven ? 'items-end text-right' : 'items-start text-left'} ${isEven ? 'order-1' : 'order-3'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-md"
          >
            <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'justify-end' : 'justify-start'}`}>
              {isEven ? (
                <>
                  <h3 className="text-slate-900 text-[20px] font-extrabold">{stage.label}</h3>
                  <span className="text-2xl">{stage.icon}</span>
                </>
              ) : (
                <>
                  <span className="text-2xl">{stage.icon}</span>
                  <h3 className="text-slate-900 text-[20px] font-extrabold">{stage.label}</h3>
                </>
              )}
            </div>
            <p className="text-slate-500 text-[13px] leading-relaxed mb-4">{stage.subtitle}</p>
            <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
              {stage.skills.map((skill, i) => (
                <SkillPill key={skill} skill={skill} color={stage.color} delay={i * 0.04} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center Node on Central Spine */}
        <div className="order-2 flex flex-col items-center relative z-10 flex-shrink-0 pt-1">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, type: "spring", stiffness: 280 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-black border-4 border-white shadow-md z-10 relative cursor-pointer"
            style={{
              background: stage.color,
              boxShadow: `0 0 0 3px ${stage.color}33, 0 4px 14px ${stage.color}66`,
            }}
            whileHover={{ scale: 1.15 }}
          >
            {stage.icon}
          </motion.div>
        </div>

        {/* Right Column Spacer for balance */}
        <div className={`flex-1 ${isEven ? 'order-3' : 'order-1'}`} />
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------
// Main Tech Component
// -----------------------------------------------------------------------
const Tech = () => {
  return (
    <>
      <div className="mb-10 sm:mb-12">
        <p className={styles.sectionSubText}>Skill Progression</p>
        <h2 className={styles.sectionHeadText}>Signal Tree.</h2>
        <p className="mt-3 text-slate-600 text-[17px] max-w-3xl leading-[28px]">
          A connected roadmap of technical expertise — progressing from foundational algorithms through full-stack architecture to multi-modal agentic AI.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto py-2">
        {/* Continuous uninterrupted vertical spine line:
            - On Mobile/Tablet (< md): aligned with the left icons (left-[22px])
            - On Desktop (>= md): perfectly centered (left-1/2 -translate-x-1/2)
        */}
        <div
          className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #7c3aed, #8b5cf6, #9333ea, #a855f7)",
            boxShadow: "0 0 10px rgba(124, 58, 237, 0.35)",
          }}
        />

        {/* Top seed dot */}
        <div className="flex justify-start pl-3 md:justify-center md:pl-0 relative z-10 mb-2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, type: "spring" }}
            className="w-5 h-5 rounded-full border-4 border-white shadow-md"
            style={{
              background: "#7c3aed",
              boxShadow: "0 0 14px #7c3aed88",
            }}
          />
        </div>

        {/* Stage rows */}
        <div className="relative z-10">
          {STAGES.map((stage, i) => (
            <StageRow key={stage.label} stage={stage} index={i} />
          ))}
        </div>

        {/* Bottom terminus dot */}
        <div className="flex justify-start pl-3 md:justify-center md:pl-0 relative z-10 mt-2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, type: "spring" }}
            className="w-5 h-5 rounded-full border-4 border-white shadow-md"
            style={{
              background: "#a855f7",
              boxShadow: "0 0 14px #a855f788",
            }}
          />
        </div>

        <p className="text-center text-slate-400 text-sm font-semibold mt-6 tracking-wide relative z-10">
          · · · and continuously learning · · ·
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");