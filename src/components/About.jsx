import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import { SectionWrapper } from '../hoc';
import {fadeIn} from '../utils/motion';


const ServiceCard = ({index,icon,title}) => {
  return(
    <Tilt className=' w-full  sm:w-[250px] ' >
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}//4 params direction type delay duration
        className='w-full green-pink-gradient p-1 rounded-[20px] shadow-card '
      >
        <div 
          className=" rounded-[20px] m-[1px]  min-h-[280px] py-5 px-12 flex justify-evenly items-center flex-col bg-black "
          options={{
            max: 25,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={icon} className='w-16  h-16 object-contain ' alt={title} />
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
};
// const About = () => {
//   return (
//     <>
//       <motion.div>
//         <p className={styles.sectionSubText} >Introduction</p>
//         <h2 className={styles.sectionHeadText} >Overview.</h2>
//       </motion.div>
//       <motion.p
//         variants={fadeIn("","",0.1,1)}//4 params direction type delay duration
//         className='mt-4 text-purple-300 text-[20px] max-w-3xl leading-[30px]'
//       >
//         I'm Shashank, a BTech student in Computer Science and Engineering at NIT Meghalaya. I've completed my 2nd year. I'm looking for opportunities to work on exciting projects and contribute to the success of the organization. I'm confident that my skills and experience make me a valuable asset to any team.
//       </motion.p>
//       <div className='mt-20   flex flex-wrap gap-15 justify-around ' >
//         {services.map((service,index)=>
//           <ServiceCard key={service.title} index={index} {...service} />
//         )}

//       </div>
//     </>
//   )
// }
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-purple-300 text-[20px] max-w-3xl leading-[30px]"
      >
        I'm <strong>Shashank</strong>, a passionate <strong>BTech student</strong> in
        <strong> Computer Science and Engineering</strong> currently in my <strong>5th semester</strong> at
        <strong> NIT Meghalaya</strong>. I enjoy crafting impactful tech solutions by combining creativity with clean code. <br /><br />

        I specialize in <strong>full-stack development</strong>, working with technologies like <strong>React</strong>, <strong>React Native</strong> and <strong>Express.js</strong>. I also have a strong foundation in <strong>Data Structures and Algorithms (DSA)</strong>, and actively solve problems to sharpen my logic and efficiency. <br /><br />

        I'm currently exploring <strong>System Design</strong>, <strong>AWS Cloud Architect</strong> and <strong>Software Architecture</strong>, aiming to build scalable systems that deliver exceptional user experiences. <br /><br />

        I'm excited to take on challenging problems, collaborate with passionate teams, and turn innovative ideas into reality.
      </motion.p>

    </>
  );
};


export default SectionWrapper(About,"about");
