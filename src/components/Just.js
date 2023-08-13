import React from 'react'
import Rolly from '../assets/rolly.png'
import Justo from '../assets/just.png'
import Buy from '../assets/babybuy.png'
import Twit from '../assets/babytwit.png'
import Tell from '../assets/babytel.png'
import Joinus from '../assets/joinus.png'

function Just() {
  return (
    <div className='bg-[#FFEDCB] px-2 flex flex-col justify-center items-center '>
      <img src={Rolly} alt="" className='slow-rotate mt-20 mb-20'/>
      <img src={Justo} alt="" className='mb-20'/>
      <img src={Joinus} alt="" className='mb-20'/>
      <img src={Tell} alt="" className='mb-20'/>
      <img src={Buy} alt="" className='mb-20'/>
      <img src={Twit} alt="" className='mb-20'/>

    </div>
  )
}

export default Just