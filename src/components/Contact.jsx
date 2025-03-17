import React, { useState ,useRef}  from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//template_2j3fk7m
//service_ucx3aew
//_PHxC0HAAOVTRPANE
const Contact = () => {

  const formRef =useRef();
  const [form, setForm]=useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_ucx3aew','template_e6xgyvm',
      {
        from_name:form.name,
        to_name:'Shashank Umar Vaishy',
        from_email:form.email,
        to_email:'umarshashank@gmail.com',
        message:form.message, 
      }
      ,"_PHxC0HAAOVTRPANE").
      then(()=>{
        setLoading(false);
        alert('Thank You. I will get back to you ASAP .');
        setForm({
          name:'',
          email:'',
          message:'',
        })
      },(error)=>{
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse  flex gap-10 overflow-hidden ' >
      <motion.div
        variants={slideIn('left',"tween",0.2,1)}
        className='flex-[0.75] bg-[#100d25] p-8 rounded-2xl '
      >
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText} >Contact.</h3>
        <form action="" 
        ref={formRef} 
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col ' >
            <span className='font-medium text-white mb-4' >Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's Your Name ?" className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outlined-none border-none  '/>
          </label>
          <label className='flex flex-col ' >
            <span className='font-medium text-white mb-4' >Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Your e-mail" className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outlined-none border-none  '/>
          </label>
          <label className='flex flex-col ' >
            <span className='font-medium text-white mb-4' >Your Message</span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder="What do you have to say. . ." className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outlined-none border-none  '/>
          </label>
          <button
            className='bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#050816]
            rounded-xl '
            type='submit'
          >
            {loading?'Sending . . . ' : 'Send '}
          </button>
        </form>

      </motion.div>
      <motion.div
        variants={slideIn('right',"tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  '
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact ,"contact")