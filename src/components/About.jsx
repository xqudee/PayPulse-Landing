import React from 'react'
import styles, { layout } from '../style'
import { features } from '../constants'
import AboutCard from './AboutCard'
import Button from './Button'

const AboutTextCard = ({className}) => (
    <div className={`${className} flex flex-col sm:gap-[40px] sm:py-[16px] py-[32px] sm:px-[32px]`}>
        <h2 className={`md:text-[56px] md:leading-[65px] ${styles.heading_3}`}>Some distinguishing features that set PayPulse apart from others.</h2>
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
