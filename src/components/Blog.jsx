import React from 'react'
import styles, { layout } from '../style'
import { news } from '../constants'

const BlogCard = ({ title, content, publishing, image }) => (
  <div className='flex flex-col gap-[32px] min-w-[327px] sm:p-[32px] px-[16px] 
  pt-[16px] pb-[24px] items-center box_shadow rounded-[32px] bg-white'>
      <div className='rounded-[16px] overflow-hidden'>
        <img src={image} alt='news_cover' className='object-cover' />
      </div>
      <div className='flex flex-col gap-[24px]'>
        <h5 className={styles.heading_5_6}>
          {title} - 
          <span className='text-yellow'> {publishing}</span>
        </h5>
        <p className={styles.bodyParagraph}>{content}</p>
      </div>
  </div>
)

const Blog = () => {
  return (
    <section className={styles.section}>
      <div className={`${layout.containerCenter}`}>
        <div className={`${layout.containerTextCenter}`}>
          <h2 className={styles.heading_2_3}>What does the Media<br />says about us!</h2>
          <p className={styles.leadParagraph}>We make it easy for users to use our platform, that's why we provide this benefit.</p>
        </div>
        <div className='grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 gap-[20px]'>
          {news.map((item, index) => (
            <BlogCard {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
