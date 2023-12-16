import React from 'react'
import styles, { layout } from '../style'
import { benefits } from '../constants'

const BenefitsCard = ({ icon, title, content }) => (
  <div className='flex flex-col p-[32px] gap-[24px] bg-white rounded-[8px]
  max-w-[305px] min-w-[300px] box_shadow_hover'>
    <img src={icon} className='w-[64px] h-[64px]' />
    <div className='flex flex-col md:gap-[16px] gap-[24px]'>
      <h6 className={`${styles.heading_6} text-blue`}>{title}</h6>
      <p className={`${styles.smallParagraph} text-blue`}>{content}</p>
    </div>
  </div>
)

const Benefits = () => {
  return (
    <section id='benefits' className={` bg-[--color-grey-2]`}>
      <div className={`${layout.containerCenter}`}>
        <div className={layout.containerTextCenter}>
          <h2 className={`sm:${styles.heading_2_3}`}>Benefits & advantages</h2>
          <p className={`sm:${styles.leadParagraph}`}>We make it easy for users to use our platform, that's why we provide this benefit.</p>
        </div>

        <ul className='flex flex-wrap gap-[20px] justify-center'>
          {benefits.map((benefit, index) => (
            <BenefitsCard key={index} {...benefit} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Benefits
