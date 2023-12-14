import React from 'react'

const Button = ({ text, bgColor }) => {
  return (
    <button className={`${bgColor == 'blue' ? 
    ('text-white' && 'bg-blue') : ('text-primary' && 'bg-white')} 
    text-white text-[16px] font-semibold leading-[24px] capitalize rounded-[4px]
    px-[29px] py-[14px] whitespace-nowrap`}>
        {text}
    </button>
  )
}

export default Button
