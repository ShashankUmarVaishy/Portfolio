"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants/index';
import { menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideTimer, setHideTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Always show when near top
      if (currentY < 60) {
        setVisible(true);
        setLastScrollY(currentY);
        return;
      }

      // Show on any scroll activity
      setVisible(true);

      // Clear existing hide timer
      if (hideTimer) clearTimeout(hideTimer);

      // Hide after 2.5s of scroll inactivity
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2500);
      setHideTimer(timer);

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [lastScrollY, hideTimer]);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center justify-center py-4 fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-transform duration-500 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <p className="text-slate-900 text-[19px] font-extrabold cursor-pointer tracking-tight">
            Shashank Umar <span className="text-purple-600 font-normal text-[0.85em] ml-1">(शशांक)</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-purple-600 font-semibold' : 'text-slate-600'} hover:text-purple-600 text-[16px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? (close?.src || close) : (menu?.src || menu)}
            alt="menu"
            className="w-[26px] h-[26px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-white border border-slate-200 shadow-xl absolute top-16 right-0 mx-4 my-2 min-w-[160px] z-50 rounded-2xl`}>
            <ul className="list-none flex flex-col gap-4 justify-end items-start w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-purple-600 font-semibold' : 'text-slate-600'} hover:text-purple-600 text-[16px] font-medium cursor-pointer transition-colors duration-200`}
                  onClick={() => { setActive(link.title); setToggle(false); }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;