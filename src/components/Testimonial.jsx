import React, { Children, cloneElement, useEffect, useState } from 'react'
import styles, { layout } from '../style'
import { rectangle } from '../assets'
import { feedback } from '../constants'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const TestimonialCard = ({ id, content, author, position, photo }) => {
  return (
    <div className='flex md:flex-row flex-col'>
      <div className='flex flex-col gap-[40px]'>
          <div className='flex h-[41px]'>
            <img src={rectangle} className='h-[100%]' />
            <img src={rectangle} className='h-[100%]' />
          </div>

          <h3 className={styles.heading_3}>{content}</h3>

          <div className='flex flex-col gap-[8px]'>
            <h6 className={styles.heading_6}>{author}</h6>
            <p className={styles.smallParagraph}>{position}</p>
          </div>

          {/* <div>
            {feedback.map((item, index) => (
              <div key={index} className={`rounded-[50%] w-[14px] h-[14px] ${index == id ? 
              'bg-blue' : 'bg-[--color-grey]'}`}
                onClick={() => handleClick(index)}
              ></div>
            ))}
          </div> */}
      </div>
    </div>
  )
}

const Carousel = ({ children }) => {
  const [pages, setPages] = useState();

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: "100%",
            maxWidth: "100%",
          }
        })
      })
    )
  }, [])

  return (
    <div className='w-[100%] h-[100%]'>
      <div className='w-[100%] h-[100%]'>
        <div className='h-[100%] flex'>
          {children}
        </div>
      </div>
    </div>
  )
}

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Splide>
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
    <section className={`${styles.boxWidth}`}>
      <div className={`${layout.container}`}>
        <div className='flex flex-col gap-[72px]'>
          <div className='relative flex justify-end'>
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
