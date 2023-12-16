import React from 'react'
import { logo } from '../assets'

const Logo = ({ styles }) => {
  return (
    <div className='flex gap-[11px] items-center'>
        <img src={logo} className='w-[47px] h-[47px]' />
        <span className={`text-[29px] font-bold text-primary ${styles}`}>PayPulse</span>
    </div>
  )
}

export default Logo
