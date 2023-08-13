import React from 'react'
import { motion } from "framer-motion"
import Bigduck from '../assets/bigduckmobile.png'
import Biggduck from '../assets/bigduck.png'
import MemeMobile from '../assets/MEMELANDMOBILE.png'
import Memedesk from '../assets/memedesk.png'
import Quack from '../assets/qam.png'
import Quackbig from '../assets/quackbig.png'
import Webdone from '../assets/websitedone.svg'
import Rounduck from '../assets/rounduck.png'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#FFEDCB] px-2 relative'>

<a href="#" className='w-72s h-20 flex justdify-center'>
<img src={Webdone} alt="" className='w-72 mb-4 mdt-20 transition-all hover:w-60' />

</a>
      <p className='text-xs mb-0 lg:text-3xl'>CA: 0x9b538e056a22cd46ecfc5b7433d17fb92d891b98</p>
      <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}      
      transition={{ ease: ["easeIn", "easeOut"], duration: 0.5 }}
      >
      <img src={Memedesk} alt="" className='w-auto px-3 mb-4 hidden lg:block mt-[-40px]' />
      </motion.div>
      <img src={MemeMobile} alt="" className='w-auto mb-4 lg:hidden' />

      <img src={Quack} alt="" className='w-32 mb-4 absolute lg:hidden bottom-[90px]' />
      <img src={Quackbig} alt="" className='w-80 mb-4 absolute hidden lg:block z-10 animate-pulse' />

      <img src={Bigduck} alt="" className='w-auto mb-4 lg:hidden' />
      <div className='relative mb-10 hidden lg:block'>
        <img src={Biggduck} alt="" className='w-auto mb-4' />
        <img src={Rounduck} alt="" className='w-60 mb-4 absolute bottom-[-50px] right-0 animate-bounce' />
      </div>

    </div>
  )
}

export default Hero