import React from 'react'
import BigMobile from '../assets/biggestmobile.png'
import Marquee from 'react-fast-marquee'
import Line from '../assets/emojiline.png'
import Bigd from '../assets/bigdesk.png'

function Biggest() {
  return (
    <>
    <div  className='h-24 lg:h-40 bgd-red-500 border-black border-y-[1px] flex flex-col justify-center items-center'>
    <Marquee direction='right'> <img src={BigMobile} alt="" className='w-52s lg:hidden'/> </Marquee>
    <Marquee direction='right'> <img src={Bigd} alt="" className='w-52s hidden lg:block'/> </Marquee>
</div>
    <div  className='h-16 bgd-red-500 borders-black borderd-y-[1px] flex flex-col justify-center items-center'>
     <Marquee> <img src={Line} alt="" className='w-[2002px] adbsolute' /></Marquee>
</div>
    </>
  )
}

export default Biggest