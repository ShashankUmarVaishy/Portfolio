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
    subtitle: "The roots: low-level languages & algorithmic fundamentals",
    icon: "🌱",
    color: "#7c3aed",
    skills: ["C", "C++", "Java", "Data Structures & Algorithms", "Operating Systems", "Linux", "Git", "HTML5", "CSS3"],
  },
  {
    label: "Web & Databases",
    subtitle: "Core stack: scripting, UI frameworks & persistent storage",
    icon: "🌿",
    color: "#8b5cf6",
    skills: ["JavaScript", "TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "REST APIs"],
  },
  {
    label: "Full-Stack & Cloud",
    subtitle: "Production-ready apps, mobile platforms & cloud infra",
    icon: "📡",
    color: "#9333ea",
    skills: ["Next.js 15", "React Native", "NativeWind", "Flask", "AWS EC2", "Firebase", "Docker", "Ansible", "Zod"],
  },
  {
    label: "AI & Enterprise",
    subtitle: "Frontier: agentic AI systems, GenAI & enterprise automation",
    icon: "✨",
    color: "#a855f7",
    skills: ["Agentic-AI", "Generative-AI", "RAG Pipelines", "PyTorch", "TensorFlow", "YOLOv8", "Upstash Vector", "Redis & BullMQ", "Workday EIB", "Power Automate"],
  },
];

// -----------------------------------------------------------------------
// Individual skill pill — animates in from its side
// -----------------------------------------------------------------------
const SkillPill = ({ skill, color, side, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30, scale: 0.85 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-semibold border bg-white text-slate-800 border-slate-200 cursor-default select-none"
      style={{
        boxShadow: `0 2px 10px ${color}22`,
      }}
      whileHover={{
        borderColor: color,
        color: color,
        backgroundColor: `${color}10`,
        y: -2,
        transition: { duration: 0.15 },
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      {skill}
    </motion.span>
  );
};

// -----------------------------------------------------------------------
// One stage row — header on left, skills branch right; alternates sides
// -----------------------------------------------------------------------
const StageRow = ({ stage, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-0">
      {/* ---- Left column ---- */}
      <div className={`flex-1 flex flex-col ${isEven ? 'items-end pr-6 sm:pr-10' : 'items-start pl-6 sm:pl-10'} ${isEven ? 'order-1' : 'order-3'}`}>
        {isEven ? (
          // Stage header on left side for even rows
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-right max-w-xs"
          >
            <div className="flex items-center justify-end gap-2 mb-1">
              <span className="text-2xl">{stage.icon}</span>
              <h3 className="text-slate-900 text-[20px] font-extrabold">{stage.label}</h3>
            </div>
            <p className="text-slate-500 text-[13px] leading-snug">{stage.subtitle}</p>
          </motion.div>
        ) : (
          // Skills on left for odd rows
          <div className="flex flex-wrap gap-2 justify-start pt-1">
            {stage.skills.slice(0, Math.ceil(stage.skills.length / 2)).map((skill, i) => (
              <SkillPill key={skill} skill={skill} color={stage.color} side="left" delay={i * 0.05} />
            ))}
          </div>
        )}
      </div>

      {/* ---- Centre spine (vertical line + node) ---- */}
      <div className="order-2 flex flex-col items-center relative z-10" style={{ minWidth: 48 }}>
        {/* Branch node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-black border-4 border-white shadow-lg z-10 relative"
          style={{ background: stage.color, boxShadow: `0 0 18px ${stage.color}66` }}
        >
          {stage.icon}
        </motion.div>
      </div>

      {/* ---- Right column ---- */}
      <div className={`flex-1 flex flex-col ${isEven ? 'items-start pl-6 sm:pl-10' : 'items-end pr-6 sm:pr-10'} ${isEven ? 'order-3' : 'order-1'}`}>
        {isEven ? (
          // Skills on right for even rows
          <div className="flex flex-wrap gap-2 justify-start pt-1">
            {stage.skills.map((skill, i) => (
              <SkillPill key={skill} skill={skill} color={stage.color} side="right" delay={i * 0.05} />
            ))}
          </div>
        ) : (
          // Stage header on right side for odd rows
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-left max-w-xs"
          >
            <div className="flex items-center justify-start gap-2 mb-1">
              <span className="text-2xl">{stage.icon}</span>
              <h3 className="text-slate-900 text-[20px] font-extrabold">{stage.label}</h3>
            </div>
            <p className="text-slate-500 text-[13px] leading-snug">{stage.subtitle}</p>
            {/* Right side skills */}
            <div className="flex flex-wrap gap-2 justify-start mt-3">
              {stage.skills.slice(Math.ceil(stage.skills.length / 2)).map((skill, i) => (
                <SkillPill key={skill} skill={skill} color={stage.color} side="right" delay={i * 0.05 + 0.2} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------
// The animated vertical signal line between stages
// -----------------------------------------------------------------------
const SignalLine = ({ color, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex justify-center" style={{ height: 56 }}>
      <motion.div
        initial={{ scaleY: 0, originY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-0.5 rounded-full"
        style={{
          background: `linear-gradient(to bottom, ${color}, ${STAGES[Math.min(index + 1, STAGES.length - 1)].color})`,
          height: '100%',
          transformOrigin: 'top',
        }}
      />
    </div>
  );
};

// -----------------------------------------------------------------------
// Main Tech Component
// -----------------------------------------------------------------------
const Tech = () => {
  return (
    <>
      <div className="mb-10">
        <p className={styles.sectionSubText}>Skill Progression</p>
        <h2 className={styles.sectionHeadText}>Signal Tree.</h2>
        <p className="mt-3 text-slate-600 text-[17px] max-w-3xl leading-[28px]">
          Scroll to watch the skill signal grow — from primitive code foundations through full-stack engineering to frontier AI systems.
        </p>
      </div>

      {/* Top seed glow */}
      <div className="flex justify-center mb-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-5 h-5 rounded-full shadow-lg"
          style={{ background: '#7c3aed', boxShadow: '0 0 18px #7c3aed88' }}
        />
      </div>
      {/* Opening line */}
      <div className="flex justify-center" style={{ height: 32 }}>
        <div className="w-0.5 rounded-full" style={{ background: '#7c3aed', height: '100%' }} />
      </div>

      {/* Stages */}
      <div className="relative max-w-5xl mx-auto">
        {STAGES.map((stage, i) => (
          <React.Fragment key={stage.label}>
            <StageRow stage={stage} index={i} />
            {i < STAGES.length - 1 && <SignalLine color={stage.color} index={i} />}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom cap */}
      <div className="flex justify-center mt-0" style={{ height: 32 }}>
        <div className="w-0.5 rounded-full" style={{ background: '#a855f7', height: '100%' }} />
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-5 h-5 rounded-full shadow-lg"
          style={{ background: '#a855f7', boxShadow: '0 0 18px #a855f788' }}
        />
      </div>
      <p className="text-center text-slate-400 text-sm font-medium mt-3 tracking-wide">
        · · · and still growing · · ·
      </p>
    </>
  );
};

export default SectionWrapper(Tech, "tech");