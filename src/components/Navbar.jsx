import React from 'react'
import { navbar } from '../constants'
import styles, { layout } from '../style'
import { logo } from '../assets'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='w-full'>
      <div className={`${styles.paddingX}`}>
        <div className='lg:py-[30px] sm:py-[22px] py-[24px] flex justify-between 
        items-center lg:gap-[40px] sm:gap-[32px]'>
          <div className='flex md:gap-[10px] gap-[4px] items-center'>
            <img src={logo} alt='pay_pulse' className='sm:h-[47px] h-[31px] sm:w-[47px] w-[31px]' />
            <span className='text-primary sm:text-[29px] text-[19px] font-bold'>PayPulse</span>
          </div>

          <div className='md:flex hidden lg:gap-[40px] md:gap-[32px] items-center'>
            <ul className='md:flex hidden lg:gap-[40px] md:gap-[32px]'>
              {navbar.map((item, index) => (
                <li key={index}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
            <Button text={'Download App'} bgColor={'blue'} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
