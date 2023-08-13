import React from 'react'
import Line from '../assets/emojiline.png'
import Marquee from "react-fast-marquee";
import Buymemes from '../assets/buymemesmobile.png'


function Emojiline() {
  return (
    <>
    <div  className='h-24 bgd-red-500 border-black border-y-[1px] flex flex-col items-center'>
    <Marquee> <img src={Line} alt="" className='w-[2002px] adbsolute' /></Marquee>
    <Marquee direction='right'> <img src={Line} alt="" className='w-[2002px] adbsolute' /></Marquee>
    <Marquee speed={60}> <img src={Line} alt="" className='w-[2002px] adbsolute' /></Marquee>
    </div>
    
    <div className="bg-[#FFEDCB] px-2 h-52 flex justify-center items-center 
    
    ">
    <img src={Buymemes} alt="" className='w-64 hover:w-56 active:w-52 animate transition-all duration-75'/>
    </div>
    
    </>
  )
}

export default Emojiline