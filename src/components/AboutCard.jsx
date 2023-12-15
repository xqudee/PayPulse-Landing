import React from 'react'
import styles, { layout } from '../style'

const AboutCard = ({ card, className }) => {
  return (
    <div className={`${className} md:px-[64px] px-[40px] md:py-[72px] py-[48px] 
    flex flex-col md:gap-[32px] gap-[24px] rounded-[17px]
    ${card.color == 'blue' && 'bg-[--color-grey-2]'}
    ${card.color == 'yellow' && 'bg-[--color-shades-accent-50]'}
    ${card.color == 'green' && 'bg-[--color-shades-success-50]'}
    `}>
        <img src={card.icon} className='w-[128px] h-[128px]' />
        <h4 className={styles.heading_4}>{card.title}</h4>
        <p className={styles.leadParagraph}>{card.content}</p>
    </div>
  )
}

export default AboutCard
