import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/index';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={` sm:px-16 px-6 w-full flex items-center justify-center py-2 fixed top-0 z-50 bg-[#050816] `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);

          }}
        > <div className=" h-12 w-12 flex justify-center items-center bg-white rounded-full ">
            <img src={logo} alt="logo" className=' h-11 w-11  object-contain rounded-full' />
          </div>
          <p className='text-white text-[18px] font-bold'>Shashank Umar</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 text-white' >
          {navLinks.map((link) =>
            <li
              className={`${active === link.title ? 'text-white' : 'text-gray-600'
                } hover:text-white text-[18px] font-medium cursor-pointer  `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] cursor-pointer object-contain '
            onClick={() => { setToggle(!toggle) }}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl justify-center `}>
            <ul className='list-none flex flex-col gap-4 justify-end items-start '   >
              {navLinks.map((link) =>
                <li 
                  className={`${
                    active === link.title ? 'text-white' : 'text-gray-600'
                  } hover:text-white text-[18px] font-medium cursor-pointer  `}
                  onClick={()=>setActive(link.title)}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar