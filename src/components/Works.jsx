import React from 'react';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';

const ProjectCard=({index,name, description,tags,image,source_code_link})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} >
      <Tilt
        options={{max:45 , scale:1, speed:450}}
        className='bg-[#151030] p-5 rounded-3xl sm:w-[350px] w-full '
      >
        <div className='relative w-full h-[230px]' >
          <img src={image} alt={name}  className='w-full h-full object-cover rounded-3xl' />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <div
              onClick={()=>(
                window.open(source_code_link,"_blank")
              )}
              className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer"
            >
              <img src={github} alt="github" 
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className='text-white text-[24px] font-bold ' >{name}</h3>
          <p className='mt-2 text-[#aaa6c3] text-[14px] ' >{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color} `} >#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>My Projects</p>
              <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px] '
        >
          Following projects showcase my skills and experience through real world examples of my work. Each project is briefly described with links to code repositories and live demos.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mini-projects mt-20"
      >
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} mb-8`}>Mini Projects.</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            className="bg-[#151030] p-6 rounded-3xl border border-[#232631] hover:border-[#915eff] transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-[#915eff] rounded-full mr-3"></div>
              <h3 className='text-white text-[20px] font-bold'>Image Generator SAAS</h3>
            </div>
            <p className='text-[#aaa6c3] text-[14px] leading-[22px]'>
              A comprehensive SAAS application featuring AI-powered image generation with Razor Pay payment gateway integration. 
              Demonstrates understanding of APIs, payment processing, and subscription models.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[12px] bg-[#232631] text-[#915eff] px-3 py-1 rounded-full">#SAAS</span>
              <span className="text-[12px] bg-[#232631] text-[#915eff] px-3 py-1 rounded-full">#RazorPay</span>
              <span className="text-[12px] bg-[#232631] text-[#915eff] px-3 py-1 rounded-full">#AI</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            className="bg-[#151030] p-6 rounded-3xl border border-[#232631] hover:border-[#915eff] transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-[#915eff] rounded-full mr-3"></div>
              <h3 className='text-white text-[20px] font-bold'>Rock Paper Scissors</h3>
            </div>
            <p className='text-[#aaa6c3] text-[14px] leading-[22px]'>
              Real-time multiplayer game with matchmaking system that connects players with random online opponents. 
              Features WebSocket integration for live gameplay and user presence management.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[12px] bg-[#232631] text-[#915eff] px-3 py-1 rounded-full">#Multiplayer</span>
              <span className="text-[12px] bg-[#232631] text-[#915eff] px-3 py-1 rounded-full">#RealTime</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            className="bg-[#151030] p-6 rounded-3xl border border-[#232631] hover:border-[#915eff] transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-[#915eff] rounded-full mr-3"></div>
              <h3 className='text-white text-[20px] font-bold'>Tic Tac Toe</h3>
            </div>
            <p className='text-[#aaa6c3] text-[14px] leading-[22px]'>
              Interactive game built to master React state management concepts. Features game logic implementation, 
              winner detection, and clean UI design with smooth animations.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[12px] bg-[#232631] text-[#915eff] px-3 py-1 rounded-full">#React</span>
              <span className="text-[12px] bg-[#232631] text-[#915eff] px-3 py-1 rounded-full">#StateManagement</span>
              <span className="text-[12px] bg-[#232631] text-[#915eff] px-3 py-1 rounded-full">#GameLogic</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works,"");