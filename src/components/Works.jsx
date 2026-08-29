"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  subtitle,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const imgSrc = image?.src || image;
  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 3) * 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="h-full"
    >
      <div className="bg-white p-6 rounded-2xl sm:w-[360px] w-full border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col justify-between h-full group">
        <div>
          <div className="relative w-full h-[200px]">
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={name}
                className="w-full h-full object-cover rounded-xl border border-slate-100"
              />
            ) : (
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-50 via-slate-50 to-purple-100 p-6 flex flex-col justify-center items-center text-center border border-slate-200">
                <span className="text-3xl mb-2">⚡</span>
                <h4 className="text-slate-900 text-[18px] font-extrabold">{name}</h4>
                {subtitle && <p className="text-purple-700 text-[12px] font-semibold mt-1">{subtitle}</p>}
              </div>
            )}

            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-slate-300 hover:bg-purple-600 border border-slate-300 hover:border-purple-600 w-10 h-10 rounded-full justify-center flex items-center cursor-pointer shadow-md transition-all duration-200 group/btn"
                title="View Repository"
              >
                <img
                  src={github?.src || github}
                  alt="github"
                  className="w-5 h-5 object-contain opacity-80 group-hover/btn:opacity-100 group-hover/btn:invert transition-all"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-slate-900 text-[20px] font-extrabold">{name}</h3>
            {subtitle && (
              <p className="text-purple-700 text-[13px] font-semibold mt-0.5">
                {subtitle}
              </p>
            )}
            <p className="mt-2 text-slate-600 text-[14px] leading-[22px]">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-slate-100">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="text-[12px] font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-slate-600 text-[17px] max-w-3xl leading-[28px]"
        >
          Key engineering projects showcasing real-world experience in multi-modal AI/RAG systems, IoT communication ecosystems, and enterprise full-stack development.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");