import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo1 from '../../assets/images/logo.png'; // Import the logo image

const Navbar = () => {
  let Links = [
    { name: "Accueil", link: "#hero" },
    { name: "Nos Services", link: "#nos-services" },
    { name: "Cosmetique", link: "#cosmetics" },
    { name: "Nos Offres", link: "#nos-offres" },
    { name: "Contact", link: "#contact" },
    // { name: "Contact", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <img src={logo1} alt="Logo" className="w-8 h-8" /> {/* Display the logo */}
          <span>Les Délices de Maha</span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link, index) => (
            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
            </li>
          ))}

        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
