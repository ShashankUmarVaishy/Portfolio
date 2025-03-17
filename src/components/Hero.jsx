import React from 'react';
import {easeInOut, motion} from 'framer-motion';
import {styles} from '../styles';
import  {ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='  relative w-full h-screen mx-auto'>
      <div className={` px-16  absolute inset-0 top-[120px] w-full max-w-7xl flex flex-row items-start mx-auto  gap-5 `}>
        <div className={` flex flex-col justify-center items-center mt-5 `}>
          {/* the purple dot */}
          <div className=' m-7 w-5 h-5 rounded-full bg-[#915eff]' />
          {/* the line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
      </div>
      <div className="">
      <div className="">
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]' >Shashank</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 `} >"A web developer having experience with MERN Stack and Java.<br className=' hidden sm:block' />
            Let's build something amazing together!"</p>
          </div>
      </div>
      </div>
      <ComputersCanvas  />
      <div className='absolute xs:bottom-2 bottom-5 w-full flex justify-center items-center ' >
        <a href="#about"className='cursor-pointer z-20 '>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-500 flex justify-center items-start p-2 ">
            <motion.div 
              animate={{
                y:[0,40,0]}}
              transition={{
                repeat:Infinity,
                duration:1.5,
                ease:'easeInOut',
                repeatType:'loop',
              }}
              className='w-3 h-3 bg-[#915eff] rounded-full'
            />
          </div>
        </a>
      </div>
    </section>
   
  )
}

export default Hero