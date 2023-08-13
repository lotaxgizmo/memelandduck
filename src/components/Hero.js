import React from 'react'
import Bigduck from '../assets/bigduckmobile.png'
import MemeMobile from '../assets/MEMELANDMOBILE.png'
import Quack from '../assets/qam.png'
import Webdone from '../assets/websitedone.svg'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#FFEDCB] px-2 relative'>
      
      <img src={Webdone} alt="" className='w-72 mb-4' />

    <p className='text-xs mb-4'>CA: 0x9b538e056a22cd46ecfc5b7433d17fb92d891b98</p>
      <img src={MemeMobile} alt="" className='w-auto mb-4' />
      <img src={Quack} alt="" className='w-32 mb-4 absolute' />
      <img src={Bigduck} alt="" className='w-auto mb-4' />
     
    </div>
  )
}

export default Hero