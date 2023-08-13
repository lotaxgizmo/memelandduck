import React from 'react'
import Token from '../assets/tokenomics.png'
import Bigtoken from '../assets/bigtokeno.png'
import Supply from '../assets/totsuppply.png'
import Bigsupply from '../assets/bigsupplytot.png'
import Buys from '../assets/buys.png'
import Bigbuys from '../assets/smallbuys.png'
import Own from '../assets/ownership.png'
import Bigown from '../assets/ownershipr.png'
import Lp from '../assets/lp.png'
import Biglp from '../assets/biglp.png'

function Tokenomics() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#FFEDCB] px-9'>
<img src={Token} alt=""  className=' w-80 m-2 mt-10 lg:hidden'/>
<img src={Bigtoken} alt=""  className=' w-[1200px] m-2 mt-10 hidden lg:block'/>



<img src={Supply} alt=""  className=' w-80 m-2 mt-10 lg:hidden'/>
<img src={Bigsupply} alt=""  className=' w-auto m-2 mt-10 hidden lg:block cursor-pointer'/>
<img src={Buys} alt=""  className=' w-80 m-2 mt-10 lg:hidden'/>


<div className='flex '>
  
<img src={Bigbuys} alt=""  className=' w-[630px] m-2 mt-10 hidden lg:block cursor-pointer'/>
<img src={Biglp} alt=""  className=' w-[630px] m-2 mt-10 hidden lg:block cursor-pointer'/>

</div>


<img src={Lp} alt=""  className=' w-80 m-2 mt-10 lg:hidden'/>

<img src={Own} alt=""  className=' w-80 m-2 mt-10 mb-20 lg:hidden'/>
<img src={Bigown} alt=""  className=' w-auto m-2 mt-10 mb-20 hidden lg:block cursor-pointer'/>

    </div>
  )
}

export default Tokenomics