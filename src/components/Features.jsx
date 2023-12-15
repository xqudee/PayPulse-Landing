import React from 'react'
import styles, { layout } from '../style'
import { logo, icon_check, icon_close } from '../assets'
import { featuresIncluded, featuresNotIncluded } from '../constants'

const FeaturesCard = ({ features, bgColor, textColor, title, icon }) => (
  <div className={`${bgColor} flex flex-col gap-[24px] sm:px-[56px] sm:py-[48px] 
  px-[32px] py-[48px] box_shadow min-w-[327px] max-w-[420px] h-fit w-[100%]`}>
    <h6 className={`${styles.heading_6} ${textColor} uppercase`}>{title}</h6>
    <ul className='flex flex-col gap-[24px]'>
      {features.map((feature, index) => (
        <li className='flex gap-[16px]'>
          <img src={icon} />
          <p className={`${styles.bodyParagraph} ${textColor}`}>{feature.content}</p>
        </li>
      ))}
    </ul>
  </div>
)

const Features = () => {
  return (
    <section className={styles.boxWidth}>
      <div className={`${layout.container} flex flex-col gap-[72px] items-center`}>
        <div className='flex flex-col gap-[40px] text-center max-w-[630px]'>
          <h2 className={`sm:${styles.heading_2_3}`}>Why PayPulse?</h2>
          <p className={`sm:${styles.leadParagraph}`}>Voilinta is fully reserved. Unlike banks, we don’t loan out your money. We publish our holdings and obligations in real time.</p>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 
        md:gap-[32px] gap-[48px] relative justify-center'>
          <div className='flex flex-col gap-[32px] items-center z-[1]'>
            <div className='flex gap-[10px] items-center'>
              <img src={logo} className='w-[47px] h-[47px]' />
              <span className='text-[29px] font-bold text-primary'>PayPulse</span>
            </div>
            <FeaturesCard features={featuresIncluded} 
              bgColor={'bg-blue'} 
              title={'FEATURES INCLUDED :'} 
              textColor={'text-white'}
              icon={icon_check}
            />
          </div>

          <div className='absolute w-[30%] h-[30%] top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%] blue__gradient z-0'></div>

          <div className='absolute md:top-[50%] top-[45%] md:left-[45%] left-[40%]
          z-10 bg-yellow rounded-[50%] 
          px-[22px] py-[20px] text-white text-[30px] font-bold animate-bounce'>
            VS
          </div>

          <div className='flex flex-col gap-[32px] items-center z-[1]'>
            <div className='flex gap-[10px] items-center'>
              <span className='text-[29px] font-bold text-primary'>Other Apps</span>
            </div>
            <FeaturesCard features={featuresNotIncluded} 
              bgColor={'bg-white'} 
              title={'FEATURES not INCLUDED :'} 
              textColor={'text-primary'}
              icon={icon_close}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
