import React from 'react'
import Logo from '../assets/logo.png'
import Btn from '../assets/navbutton.png'

function Header() {
  return (
  <>
  <div className="mobilenav flex-row justify-center items-center bg-[#FFEDCB] px-2 normtext h-20 border-black border-2 lg:hidden">

  </div>



  <div className=' flex-row justify-center items-center bg-[#FFEDCB] px-2 normtext h-20 bodrder-black border-2d
  hidden lg:flex
  '>
        
        <a href="#">
        <img src={Logo} alt="" />
        </a>


<div className="nav flxl:px-20 lg:px-10d ">
<a className='xl:px-5 px-2 xl:text-lg lg:text-md text-sm  transition-all hover:text-white' href="#">Home</a>
<a className='xl:px-5 px-2 xl:text-lg lg:text-md text-sm  transition-all hover:text-white' href="#about">About</a>
<a className='xl:px-5 px-2 xl:text-lg lg:text-md text-sm  transition-all hover:text-white' href="#roadmap">Roadmap</a>
<a className='xl:px-5 px-2 xl:text-lg lg:text-md text-sm  transition-all hover:text-white' href="https://t.me/MEMESViportal">Telegram</a>
<a className='xl:px-5 px-2 xl:text-lg lg:text-md text-sm  transition-all hover:text-white' href="https://twitter.com/ElonXParodyX">Twitter</a>
<a className='xl:px-5 px-2 xl:text-lg lg:text-md text-sm  transition-all hover:text-white' href="https://twitter.com/lotaxgizmo">Need a Website?</a>
</div>

        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x9b538e056a22cd46ecfc5b7433d17fb92d891b98" className='w-40 '>
        <img src={Btn} alt="" className='w-40 transition-all hover:w-36' />
        </a>



    </div>
  </>
  )
}

export default Header