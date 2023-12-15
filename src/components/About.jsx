import React from 'react'
import styles, { layout } from '../style'
import { features } from '../constants'
import Button from './Button'


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

const AboutTextCard = ({className}) => (
    <div className={`${className} flex flex-col sm:gap-[40px] sm:py-[16px] py-[32px] sm:px-[32px]`}>
        <h2 className={`${styles.heading_2_3}`}>Some distinguishing features that set PayPulse apart from others.</h2>
        <p className={styles.bodyParagraph}>Exceptional Attributes that Differentiate PayPulse from Competitors</p>
        <Button text={'Download App'} bgColor={'blue'} />
    </div>
)

const About = () => {
  return (
    <section className={`${styles.boxWidth}`}>
        <div className={`${layout.container} flex flex-col gap-[20px]`}>
            <AboutTextCard className={'lg:hidden flex'} />
            <div className='grid md:grid-cols-2 gap-[20px]'>
                {features.map((feature, index) => (
                    index == 0 && (
                        <AboutCard key={feature.id} card={feature} />
                    )
                ))}
                <AboutTextCard className={'lg:flex hidden'} />
                {features.map((feature, index) => (
                    index > 0 && (
                        <AboutCard key={feature.id} card={feature} className={`${index == 2 &&
                        "md:col-span-2 lg:col-span-1"}`} />
                    )
                ))}
            </div>
        </div>
    </section>
  )
}

export default About
