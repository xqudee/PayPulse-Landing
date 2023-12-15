import React, { useEffect, useState } from 'react'
import { navbar } from '../constants'
import styles, { layout } from '../style'
import { logo, mobile_toggle } from '../assets'
import Button from './Button'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }
  }, [])

  const handleClick = () => {
    setMenuOpen(menuOpen => !menuOpen);
  }

  return (
    <nav className='w-full'>
      <div className={`${styles.paddingX} border-b-[1px] border-[--color-grey]`}>
        <div className='lg:py-[30px] sm:py-[22px] py-[24px] flex justify-between 
        items-center lg:gap-[40px] sm:gap-[32px] relative'>
          <div className='flex md:gap-[10px] gap-[4px] items-center'>
            <img src={logo} alt='pay_pulse' className='sm:h-[47px] h-[31px] sm:w-[47px] w-[31px]' />
            <span className='text-primary sm:text-[29px] text-[19px] font-bold'>PayPulse</span>
          </div>

          <div className='md:flex hidden lg:gap-[40px] md:gap-[32px] items-center'>
            <ul className='md:flex hidden lg:gap-[40px] md:gap-[32px]'>
              {navbar.map((item, index) => (
                <li key={index} className={`
                ${activeSection == item.id ? 'border-b-[1px] border-blue' : ''}`}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
            <Button text={'Download App'} bgColor={'blue'} />
          </div>

          <div className='md:hidden flex' onClick={handleClick}>
              <img src={mobile_toggle} />
          </div>
          <div className={`${menuOpen ? 'flex' : 'hidden' } md:hidden absolute top-[114px] left-0 
          z-10 bg-white w-[100%] rounded-[5px] border-[1px] border-[--color-grey] 
          sidebar`}>
            <ul className='flex flex-col w-[100%]'>
              {navbar.map((item, index) => (
                <li key={index} className={`px-[10px] py-[5px] flex`}>
                  <a href={`#${item.id}`} className={`px-[10px] py-[10px] w-[100%] rounded-[5px]
                  ${activeSection == item.id ? 'bg-blue text-white' : ''}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
