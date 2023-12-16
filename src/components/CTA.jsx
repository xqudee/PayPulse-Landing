import React from 'react'
import styles, { layout } from '../style'
import { bg_cta, bg_elemnets_1 } from '../assets'
import { ctaImages } from '../constants'
import Button from './Button'

const CTA = () => {
  return (
    <aside className={`bg-blue overflow-hidden`}>
      <div className={`${styles.paddingX} flex lg:flex-row flex-col-reverse lg:pt-[112px] pt-[56px] items-center relative`}>
        <div className='px-[72px] z-[1]'>
          <img src={bg_cta} className='max-w-[486px]' />
        </div>

        <div className='py-[48px] flex items-center justify-center z-[1]'>
          <div className='flex flex-col gap-[40px] max-w-[520px]'>
            <div className='flex flex-col gap-[24px]'>
              <h2 className={`${styles.heading_2_3} text-white`}>Getting Paid is now easier!</h2>
              <p className={`${styles.leadParagraph} text-white`}>PayPulse is fully reserved. Unlike banks, we don't loan out your money. We publish our holdings and obligations in real time.</p>
            </div>
            
            <div className='flex'>
              <div className='relative min-w-[72px]'>
                {ctaImages.map((image, index) => (
                  <div key={index} 
                    style={{ left: `${15 * index}px` }}
                    className={`rounded-[50%] border-[1px] border-white
                    w-[24px] h-[24px] overflow-hidden absolute`}>
                    <img src={image.url} className='w-[100%] h-[100%] object-cover' />
                  </div>
                ))}
              </div>
              <p className={`${styles.smallParagraph} text-white ml-[8px]`}>More than 10,000 people have tried</p>
            </div>
            
            <Button text={'Try Our App'} bgColor={'white'} />
          </div>
        </div>

        <div className='absolute md:w-[100%] md:h-auto h-[100%] z-[0] left-0 bottom-0 flex items-start animate-pulse'>
          <img src={bg_elemnets_1} className='md:h-auto h-[100%] w-[100%] md:pl-[80px] pl-[24px] object-cover max-w-none w-auto' />
        </div>
      </div>
    </aside>
  )
}

export default CTA
