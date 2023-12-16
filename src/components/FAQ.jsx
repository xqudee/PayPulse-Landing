import React, { useState } from 'react'
import styles, { layout } from '../style'
import { faq } from '../constants'
import { icon_minus, icon_plus } from '../assets'
import parse from 'html-react-parser';

const FAQItem = ({ item, isActive, handleClick }) => (
  <div className='flex flex-col gap-[32px]'>
    <div className='flex flex-row gap-[16px] justify-between'>
      <div className='flex flex-col gap-[12px]'>
        <h6 className={`font-urbanist text-[24px] font-bold leading-[32px] ${isActive && 'text-blue'} faq-question`}>
          <span>{`0${item.id}`} </span>{item.question}
        </h6>
          <p className={`${styles.bodyParagraph} text-animate ${isActive ? 'block' : 'hidden'}`}>{parse(item.answer)}</p>
      </div>
      <div className='flex items-start'>
        <div className={`p-[8px] w-[40px] h-[40px] ${isActive ? 'bg-blue' : 'bg-[--color-grey]'} rounded-[4px] faq-button cursor-pointer`}
          onClick={() => handleClick(item.id)}>
          <img src={`${isActive ? icon_minus : icon_plus}`} />
        </div>
      </div>
    </div>

    <div className='w-[100%] h-[1px] bg-[--color-grey]'></div>
  </div>
)

const FAQ = () => {
  const [currentActiveId, setCurrentActiveId] = useState(-1);

  const handleClick = (id) => {
    if (currentActiveId == id) {
      setCurrentActiveId(-1);
    } else {
      setCurrentActiveId(id);
    }
  }
  
  return (
    <section id='faq' className={`bg-[--color-grey-2]`}>
      <div className={`${layout.containerCenter}`}>
        <div className='max-w-[1064px] flex flex-col gap-[72px] w-[100%]'>
          <h2 className={`${styles.heading_2_3}`}>
            Frequently asked questions
          </h2>
          <div className='flex flex-col gap-[32px]'>
          {faq.map((item, index) => (
            <FAQItem key={index} item={item} isActive={item.id == currentActiveId} handleClick={handleClick}/>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
