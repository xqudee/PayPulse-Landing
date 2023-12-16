import React from 'react'
import { app_store, play_store } from '../assets'

const Download = ({ styles }) => {
  return (
    <div className={`flex sm:gap-[26px] gap-[25px] sm:flex-row flex-col z-[1] ${styles}`}>
      <img src={app_store} className='h-[62px] max-w-fit cursor-pointer' />
      <img src={play_store} className='h-[62px] max-w-fit cursor-pointer' />
    </div>
  )
}

export default Download
