import React from 'react';
import {styles} from '../styles';
import  {ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='  relative w-full h-screen mx-auto'>
      <div className={` px-16  absolute inset-0 top-[100px] w-full max-w-7xl flex flex-row items-start mx-auto  gap-5 `}>
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

      <div className="h-10"></div>
      <ComputersCanvas  />
      
    </section>
   
  )
}

export default Hero