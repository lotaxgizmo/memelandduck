import React from 'react'
import Aboutmob from '../assets/aboutmob.png'
import Aboutbig from '../assets/aboutbig.png'
import Memmuch from '../assets/memmuch.png'
import Marquee from 'react-fast-marquee'


function About() {
  return (
    <>
      <div className='flex flex-col align-middle justify-center items-center'>
        <img src={Aboutmob} alt="" className='m-6 ml-[-20px]   lg:hidden' />
        <img src={Aboutbig} alt="" className='m-6 hidden lg:block w-[1000px]' />
        <div className="longassmobilebox block lg:hidden normtext border-2 border-black rounded-3xl p-5 mx-2 mb-16 shadow-lg">
          <p className='text-xl lg:text-2xl'>
            Welcome to the whimsical world of Meme Land Duck, the crypto meme coin on a mission to gather all the iconic star memes under one virtual sky, where joy and prosperity reign supreme!
            <br /><br />
            Imagine a land where Shooting Stars, Doge, Nyan Cat, and countless other beloved internet sensations come together in a harmonious dance of memes.
            <br /><br />
            Meme Land Duck isn't just a coin; it's a carnival of nostalgia. As we embark on this delightful journey, let's unite the stars and create a haven where both meme enthusiasts and crypto aficionados alike can revel in a world full of joy.
            <br /><br />
            Join the feathered frenzy, and let's make Meme Land Duck the ultimate destination for meme magic and financial fun!
          </p>
        </div>
        <div className="longassbox lg:block hidden normtext border-2 border-black rounded-3xl p-5 mx-20 mb-16 shadow-lg">
          <p className='text-xl lg:text-2xl'>
            Welcome to the whimsical world of Meme Land Duck, the crypto meme coin on a mission to gather all the iconic star memes under one virtual sky, where joy and prosperity reign supreme!
            <br /><br />
            Imagine a land where Shooting Stars, Doge, Nyan Cat, and countless other beloved internet sensations come together in a harmonious dance of memes.
            <br /><br />
            Meme Land Duck isn't just a coin; it's a carnival of nostalgia. As we embark on this delightful journey, let's unite the stars and create a haven where both meme enthusiasts and crypto aficionados alike can revel in a world full of joy.
            <br /><br />
            Join the feathered frenzy, and let's make Meme Land Duck the ultimate destination for meme magic and financial fun!
          </p>
        </div>
        <Marquee className=''>    <img src={Memmuch} alt="" className='m-6 lg:hidden' />  </Marquee> 
        <Marquee direction='right'>    <img src={Memmuch} alt="" className='m-6' />  </Marquee> 
        <Marquee speed={70}>    <img src={Memmuch} alt="" className='m-6 lg:hidden' />  </Marquee> 

      </div>
    </>
  )
}

export default About