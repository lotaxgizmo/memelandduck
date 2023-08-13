import React from 'react'
import Rolly from '../assets/rolly.png'
import Justo from '../assets/just.png'
import Justbig from '../assets/justbig.png'
import Buy from '../assets/babybuy.png'
import Twit from '../assets/babytwit.png'
import Tell from '../assets/babytel.png'
import Joinus from '../assets/joinus.png'
import Joinbig from '../assets/joinbig.png'
import Twitbig from '../assets/twitbig.png'
import Telbig from '../assets/telbig.png'
import Buybig from '../assets/buybig.png'

function Just() {
  return (
    <div className='bg-[#FFEDCB] px-2 flex flex-col justify-center items-center '>
      <img src={Rolly} alt="" className='slow-rotate mt-20 mb-20' />
      <img src={Justo} alt="" className='mb-20 lg:hidden' />
      <img src={Justbig} alt="" className='mb-20 hidden lg:block' />
      <img src={Joinus} alt="" className='mb-20 lg:hidden' />
      <img src={Joinbig} alt="" className='mb-20 hidden lg:block w-[90%]' />
      <div className="but1 flex flex-col justify-center items-center lg:hidden">
<a href="#">
<img src={Tell} alt="" className='mb-20 w-64 hover:w-56 active:w-52 transition-all duration-75' />
  </a>    
<a href="#">
<img src={Buy} alt="" className='mb-20 w-64 hover:w-56 active:w-52 transition-all duration-75' />

</a>
<a href="#">
<img src={Twit} alt="" className='mb-20 w-64 hover:w-56 active:w-52 transition-all duration-75' />

</a>
      </div>

      <div className="but2 hidden lg:flex items-center">
        <a href="#">
          <img src={Telbig} alt="" className='mb-20 w-96 transition-all hover:w-80 m-4' />
        </a>
        <a href="#">
          <img src={Buybig} alt="" className='mb-20 w-96 transition-all hover:w-80 mt-4' />

        </a>
        <a href="#">
          <img src={Twitbig} alt="" className='mb-20 w-96 transition-all hover:w-80 m-4' />

        </a>
      </div>

    </div>
  )
}

export default Just