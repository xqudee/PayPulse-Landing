import React, { useEffect, useRef, useState } from 'react'
import { navbar } from '../constants'
import styles, { layout } from '../style'
import { logo, mobile_toggle } from '../assets'
import Button from './Button'
import Logo from './Logo'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef();
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop - 1 && scrollPos <= sectionTop + sectionHeight + 1) {
          setActiveSection(section.id)
        }
      })
    }

    const handleOutsideClick = (e) => {
      if (mobileMenuRef.current 
          && !mobileMenuRef.current.contains(e.target)
          && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [])

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }

  const handleClickSection = (id) => {
    setActiveSection(id)
    setMenuOpen(false);
  }

  return (
    <nav className='w-full sticky -top-[10px] bg-white z-20' ref={navRef}>
      <div className={`${styles.paddingX} border-b-[1px] border-[--color-grey]`}>
        <div className={`lg:py-[30px] sm:py-[22px] py-[24px] flex justify-between 
        items-center lg:gap-[40px] sm:gap-[32px] relative`}>
          <a href='#home'>
            <Logo />
          </a>

          <div className='md:flex hidden lg:gap-[40px] md:gap-[32px] items-center'>
            <ul className='md:flex hidden lg:gap-[40px] md:gap-[32px]'>
              {navbar.map((item, index) => (
                <li key={index}>
                  <a href={`#${item.id}`} className={`border-blue hover:border-b-[1px]`}>{item.title}</a>
                </li>
              ))}
            </ul>
            <Button text={'Download App'} bgColor={'blue'} />
          </div>

          <div className='md:hidden flex' onClick={handleClick}>
              <img src={mobile_toggle} />
          </div>
          <div ref={mobileMenuRef}
            className={`${menuOpen ? 'flex' : 'hidden' } md:hidden absolute top-[114px] left-0 
            z-10 bg-white w-[100%] rounded-[5px] border-[1px] border-[--color-grey] 
            sidebar`}>
            <ul className='flex flex-col w-[100%]'>
              {navbar.map((item, index) => (
                <li key={index} className={`px-[10px] py-[5px] flex`} onClick={() => handleClickSection(item.id)}>
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
