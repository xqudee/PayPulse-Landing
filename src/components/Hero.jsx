import React from 'react'
import styles, { layout } from '../style'
import { bg_image, hero_gradient } from '../assets'
import Download from './Download'

const Hero = () => {
  return (
    <section id='home' className={`overflow-hidden`}>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-[100%] lg:h-[75%] md:h-[80%] sm:h-[50%] h-[60%] z-0'>
          <img src={hero_gradient} className='h-[100%] w-[100%] object-cover' />
        </div>
        
        <div className={`lg:pt-[112px] pt-[56px] flex md:flex-row flex-col md:gap-[0px] gap-[20px] justify-between`}>
          <div className='md:pl-[80px] sm:pl-[72px] pl-[24px] md:pr-[0] pr-[24px] flex flex-col gap-[40px]'>
            <div className='flex flex-col md:gap-[56px] sm:gap-[48px] gap-[40px] z-[1]'>
              <div className='flex flex-col gap-[40px]'>
                <div className='flex gap-[8px] items-center'>
                  <span className='px-[16px] py-[4px] bg-yellow rounded-[10px]
                  md:text-[16px] text-[14px] leading-[22px] text-white'>New</span>
                  <p className={`${styles.bodyParagraph} text-grey`}>Download and enjoy!</p>
                </div>
                <h1 className={`${styles.heading_1} max-w-[640px]`}>The 
                <span className='text-blue'> Easiest </span>
                way to send money safely to anywhere</h1>
              </div>
              <div className='w-[100%]'>
                <p>Send your money to everywhere in the world in less than a minute! <br className='
                md:hidden lg:flex' />
                Download the app now.</p>
              </div>
            </div>
            <Download />
          </div>
          <div className='flex justify-center z-[1]'>
            <img src={bg_image} className='max-w-[522px] min-w-[342px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
