
import { useState } from 'react';
import { logo, close, menu, } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [Toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between items-centre navbar py-6'>
      <img src={logo} alt="hookBank" className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map( (nav, index) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>


      <div className='sm:hidden flex flex-1 justify-end items-centre'>
        <img
         src={Toggle ? close : menu } 
         alt="toggle" 
         className='w-[28px] h-[28px] object-contain'
         onClick={() => setToggle(!Toggle)}
         />

         <div className={ `${Toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 sidebar min-w-[140px] rounded-xl` }>
            <ul className='list-none flex-1 justify-end sm:flex flex-col  '>
              {navLinks.map( (nav, index) => (
                <li 
                  key={nav.id}
                  className={
                    `font-Poppins
                    text-white
                    text-[16px]
                    ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`
                  }
                >
                  <a href="" className={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
         </div>
      </div>
    </nav>
  )
}

export default Navbar