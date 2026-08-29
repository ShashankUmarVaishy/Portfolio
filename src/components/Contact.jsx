"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_yntgu95',
      'template_e6xgyvm',
      {
        from_name: form.name,
        to_name: 'Shashank Umar Vaishy',
        from_email: form.email,
        to_email: 'umarshashank@gmail.com',
        message: form.email + ' \n ' + form.message,
      },
      "_PHxC0HAAOVTRPANE"
    ).then(
      () => {
        setLoading(false);
        alert('Thank You. I will get back to you ASAP.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      },
      (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      }
    );
  };

  return (
    <div>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="font-semibold text-slate-700 mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's Your Name?"
                className="bg-slate-50 border border-slate-200 py-3.5 px-5 placeholder:text-slate-400 text-slate-900 rounded-xl outline-none focus:border-purple-600 focus:bg-white transition-all"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold text-slate-700 mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="bg-slate-50 border border-slate-200 py-3.5 px-5 placeholder:text-slate-400 text-slate-900 rounded-xl outline-none focus:border-purple-600 focus:bg-white transition-all"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold text-slate-700 mb-2">Your Message</span>
              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you have to say?"
                className="bg-slate-50 border border-slate-200 py-3.5 px-5 placeholder:text-slate-400 text-slate-900 rounded-xl outline-none focus:border-purple-600 focus:bg-white transition-all resize-none"
              />
            </label>

            <button
              className="bg-purple-600 hover:bg-purple-700 py-3.5 px-8 outline-none w-fit text-white font-bold rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              type="submit"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[600px] h-[400px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Contact Handles & Links bar below */}
      <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap justify-center sm:justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <p className="text-slate-900 font-extrabold text-lg">Shashank Umar Vaishy</p>
          <p className="text-slate-500 text-sm">NIT Meghalaya · CSE &apos;27</p>
        </div>
        <p className='text-slate-900 font-semibold'>Contact me via my other profiles:</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:umarshashank@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200/80 text-sm font-semibold transition-all duration-200"
          >
            <span>umarshashank@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/shashankumarvaishy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200/80 text-sm font-semibold transition-all duration-200"
          >
            <span>linkedin.com/in/shashankumarvaishy</span>
          </a>
          <a
            href="https://github.com/ShashankUmarVaishy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200/80 text-sm font-semibold transition-all duration-200"
          >
            <span>github.com/ShashankUmarVaishy</span>
          </a>
          <a
            href="https://leetcode.com/u/umarshashank"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-200/80 text-sm font-semibold transition-all duration-200"
          >
            <span>leetcode.com/u/umarshashank</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");