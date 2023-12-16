import React, { Children, cloneElement, useEffect, useState } from 'react'
import styles, { layout } from '../style'
import { rectangle } from '../assets'
import { feedback } from '../constants'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const TestimonialCard = ({ id, content, author, position, photo }) => {
  return (
    <div className={`flex md:flex-row flex-col ${styles.paddingX}`}>
      <div className='flex flex-col gap-[40px]'>
          <div className='flex h-[41px]'>
            <img src={rectangle} className='h-[100%]' />
            <img src={rectangle} className='h-[100%]' />
          </div>

          <h3 className={styles.heading_3}>{content}</h3>

          <div className='flex gap-[15px] items-center'>
            <div className='h-[60px] w-[60px] rounded-[50%] overflow-hidden'>
              <img src={photo} alt={author} className='object-cover w-[100%] h-[100%]' />
            </div>
            <div className='flex flex-col gap-[8px]'>
              <h6 className={styles.heading_6}>{author}</h6>
              <p className={styles.smallParagraph}>{position}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

const SliderComponent = () => {
  return (
    <Splide options={{
      type: 'loop'
    }}>
      {feedback.map((item, index) => (
        <SplideSlide>
          <TestimonialCard {...item} id={index} />
        </SplideSlide>
      ))}
    </Splide>
  )

}

const Testimonial = () => {
  return (
    <section className={`overflow-hidden`}>
      <div className='lg:pt-[112px] pt-[56px] '>
        <div className='flex flex-col gap-[72px] lg:pb-[112px] pb-[56px]'>
          <div  className={`${styles.paddingX} relative flex justify-end`}>
            <div className='flex flex-col gap-[24px] text-right z-[1]'>
              <h2 className={styles.heading_2_3}>Real Feedback From Users</h2>
              <p className={styles.leadParagraph}>We make it easy for users to use our platform, that's why we provide this benefit.</p>
            </div>
            <div className='absolute left-[-204px] top-[26px] bg-[--color-grey-2] h-[64px] w-[713px] z-[0]' />
          </div>
          <SliderComponent />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
