import React from 'react'
import Token from '../assets/tokenomics.png'
import Supply from '../assets/totsuppply.png'
import Buys from '../assets/buys.png'
import Own from '../assets/ownership.png'
import Lp from '../assets/lp.png'

function Tokenomics() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#FFEDCB] px-2'>
<img src={Token} alt=""  className=' w-80 m-2 mt-10'/>
<img src={Supply} alt=""  className=' w-80 m-2 mt-10'/>
<img src={Buys} alt=""  className=' w-80 m-2 mt-10'/>
<img src={Lp} alt=""  className=' w-80 m-2 mt-10'/>
<img src={Own} alt=""  className=' w-80 m-2 mt-10 mb-20'/>

    </div>
  )
}

export default Tokenomics