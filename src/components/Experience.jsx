"use client";

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  const iconSrc = experience.icon?.src || experience.icon;
  return (
    <VerticalTimelineElement
      contentStyle={{ 
        background: '#ffffff', 
        color: '#0f172a', 
        borderRadius: '1rem', 
        border: '1px solid #e2e8f0', 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)' 
      }}
      contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
      date={<span className="text-slate-500 font-semibold px-2">{experience.date}</span>}
      iconStyle={{ background: '#ffffff', border: '3px solid #7c3aed', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      icon={
        iconSrc ? (
          <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center p-1.5 shadow-sm border border-purple-200">
            <img 
              src={iconSrc} 
              alt={experience.company_name} 
              className="w-full h-full object-contain rounded-full" 
            />
          </div>
        ) : (
          <span className="text-slate-700 text-xl font-bold">💼</span>
        )
      }
    >
      <h3 className="text-slate-900 text-[20px] font-extrabold">{experience.title}</h3>
      <p className="text-purple-700 text-[15px] font-semibold mt-1" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-slate-600 text-[14px] pl-1 leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-12 flex flex-col">
        <VerticalTimeline lineColor="#e2e8f0">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
