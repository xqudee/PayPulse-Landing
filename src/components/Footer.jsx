import React from 'react'
import styles, { layout } from '../style'
import Download from './Download'
import Logo from './Logo'
import { footerNav, footerSocials } from '../constants'
import { facebook, footer_cta_bg } from '../assets'

const FooterCta = () => (
  <aside className={styles.paddingX}>
    <div className={`bg-yellow grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 
    md:gap-[20px] gap-[40px] md:px-[48px] md:py-[80px] px-[32px] py-[48px] rounded-[10px]
    max-w-[1280px] relative z-[2]`}>
      <div className='flex flex-col justify-center gap-[16px] z-[1]'>
        <h3 className={`${styles.heading_3_5} text-white`}>Download now! A great app for Sending money</h3>
        <p className={`${styles.bodyParagraph} text-white`}>Send your money to everywhere in the world in less than a minute! Download the app now.</p>
      </div>
      <div className='flex md:justify-end justify-center items-center z-[1]'>
        <Download styles={'md:flex-col lg:flex-row'} />
      </div>
      <div className='absolute w-[100%] h-[100%] z-[0] top-0 left-0'>
        <img src={footer_cta_bg} className='object-cover' />
      </div>
    </div>
  </aside>
)

const Footer = () => {
  return (
    <footer>
      <div className={`flex flex-col justify-center items-center gap[-188px] relative`}>
        <FooterCta />

        <div className={`${styles.paddingX} w-[100%] flex flex-col justify-center gap-[40px]
        bg-blue pt-[256px] pb-[32px] absolute z-[1] md:top-[50%] top-[60%]`}>
          <div className='flex flex-col gap-[40px] items-center'>
            <Logo styles={'font-[35px] text-white'} />
            <nav>
              <ul className='flex md:gap-[40px] gap-[20px] flex-wrap justify-center'>
                {footerNav.map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.id}`} key={index} className='text-[16px] font-bold leading-[20px] text-white'
                    >{item.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className='flex flex-col gap-[33px]'>
            <div className='w-[100%] h-[1px] bg-white opacity-[.2]' />
            <div className='flex justify-between gap-[20px] items-center ms:flex-row flex-col-reverse'>
              <p className={`${styles.smallParagraph} text-white`}>© 2023 PayPulse inc. All right reserved</p>
              <div className='flex gap-[32px] items-center'>
                  <p className={`${styles.smallParagraph} text-white`}>Privacy Policy</p>
                  <p className={`${styles.smallParagraph} text-white`}>Term & Condition</p>
              </div>
              <ul className='flex gap-[24px]'>
                {footerSocials.map((item, index) => (
                  <li key={index} className='rounded-[50%] bg-[#FFFFFF0D] p-[8px] w-[40px] h-[40px] cursor-pointer'>
                    <a href={item.link}>
                      <img src={item.icon} alt={item.name} className='object-cover' />
                    </a>
                  </li>
                ))} 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
