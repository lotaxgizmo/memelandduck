import React from 'react'
import Teamm from '../assets/team.png'
import Dev1 from '../assets/dev1.png'
import Dev2 from '../assets/dev2.png'
import Dev3 from '../assets/dev3.png'
import Follow from '../assets/follow.png'

function Team() {
  return (
    <div className='flex flex-col justify-center items-center  px-2'> 
<img src={Teamm} alt=""  className=' w-80 m-2 mt-10'/>
<img src={Dev1} alt=""  className=' w-80 m-2 mt-10'/>
<img src={Dev2} alt=""  className=' w-80 m-2 mt-10'/>
<img src={Dev3} alt=""  className=' w-80 m-2 mt-10'/>
<img src={Dev3} alt=""  className=' w-80 m-2 mt-10 mb-32'/>
<img src={Follow} alt=""  className=' w-80 m-2 mt-10 mb-24'/>
<p className='text-sm normtext'>
MEME LAND DUCK - 2023
          </p>
    </div>
  )
}

export default Team