import React from 'react';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn,textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ name, image , company , testimonial , designation, index }) => {
  return (
   <motion.div
   variants={fadeIn("","spring",index*0.5,1)}
   className='bg-[#090325] p-10  rounded-3xl w-full xs:w-[120px]  '
   >
    <p className='text-white font-black text-[48px]' >"</p>
    <div className="mt-1">
      <p>{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1  ">
        <div className="flex-1 flex flex-col max-w-fit ">
          <p>
            <span className='blue-text-gradient  ' >
              @
            </span>
            {name}
          </p>
          <p className='mt-1 text-[#aaa6c3] text-[12px] inline-block ' >
            {designation} of {company}
          </p>
        </div>
          <img src={image} alt={`feedback by-${name}`} className=' h-10 w-10 rounded-full object-cover ' />
      </div>
    </div>
   </motion.div>
  
  )
};



const Feedbacks = () => {
  return (
    <div className=" mt-12 bg-black-100 rounded-[20px] w-full  ">
      <div className={`bg-[#151030] rounded-2xl min-h-[200px] p-2 `} >
        <motion.div variants={textVariant()} className='m-5 ' >
          <p className={styles.sectionSubText} >What others say</p>
          <h2 className={`${styles.sectionHeadText}`} > Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} -mt-20 pb-14 flex gap-4 flex-wrap justify-around `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"");