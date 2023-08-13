import React from 'react'
import Teamm from '../assets/team.png'
import Bigteamm from '../assets/bigteam.png'
import Dev1 from '../assets/dev1.png'
import Dev2 from '../assets/dev2.png'
import Dev3 from '../assets/dev3.png'
import Follow from '../assets/follow.png'

import Buy from '../assets/babybuy.png'
import Twit from '../assets/babytwit.png'
import Tell from '../assets/babytel.png'
import Twitbig from '../assets/twitbig.png'
import Telbig from '../assets/telbig.png'
import Buybig from '../assets/buybig.png'

function Team() {
  return (
    <div className='flex flex-col justify-center items-center  px-2'>
      <img src={Teamm} alt="" className=' w-80 m-2 mt-10 lg:hidden' />
      <img src={Bigteamm} alt="" className=' w-[800px] m-2 mt-10 lg:block hidden' />

      <div className="flex flex-col lg:flex-row justify-center align-middle items-center  ">
        <img src={Dev1} alt="" className='transition-all hover:w-72  w-80 m-2 mt-10' />
        <img src={Dev2} alt="" className='transition-all hover:w-72  w-80 m-2 mt-10' />
        <a href="https://twitter.com/lotaxgizmo">
          <img src={Dev3} alt="" className='transition-all hover:w-72  w-80 m-2 mt-10' />
        </a>
      </div>
      <img src={Follow} alt="" className=' w-80 m-2 mt-10 mb-24' />
    
    
      <div className='lg:hidden'>
        <a href="https://t.me/MEMESViportal">
        <img src={Tell} alt="" className='mb-20 w-64 hover:w-56 active:w-52 transition-all duration-75' />
      </a>
        
        <a href="https://twitter.com/ElonXParodyX">
          <img src={Twit} alt="" className='mb-20 w-64 hover:w-56 active:w-52 transition-all duration-75' />

        </a>
      </div>

      <div className="but2 hidden lg:flex items-center">
        <a href="https://t.me/MEMESViportal">
          <img src={Telbig} alt="" className='mb-20 w-96 transition-all hover:w-80 m-4' />
        </a>
        
        
        <a href="https://twitter.com/ElonXParodyX">
          <img src={Twitbig} alt="" className='mb-20 w-96 transition-all hover:w-80 m-4' />

        </a>
      </div>
      <p className='text-sm normtext'>
        MEME LAND DUCK - 2023
      </p>
    </div>
  )
}

export default Team