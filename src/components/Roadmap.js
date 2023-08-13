import React from 'react'
import Rmap from '../assets/roadmap.png'
import Rmapbig from '../assets/roadmapbig.png'
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/p3.png'
import P11 from '../assets/p11.png'
import P22 from '../assets/p22.png'
import P33 from '../assets/p33.png'

function Roadmap() {
  return (
    <>
<div id='roadmap' className="alll flex flex-col justify-center items-center">
<img src={Rmap} alt=""  className=' w-80 m-2 mt-10 lg:hidden'/>
<img src={Rmapbig} alt=""  className=' w-[1000px] m-2 mt-10 hidden lg:block'/>
<div className="phase flex flex-col justify-center items-center">
<img src={P1} alt=""  className=' w-80 m-2 mt-10 lg:hidden'/>
<img src={P2} alt=""  className=' w-80 m-2 mt-10 lg:hidden'/>
<img src={P3} alt=""  className=' w-80 m-2 mt-10 mb-10 lg:hidden'/>


<img src={P11} alt=""  className=' w-[90%] m-2 mt-10 hidden lg:block'/>
<img src={P22} alt=""  className=' w-[90%] m-2 mt-10 hidden lg:block'/>
<img src={P33} alt=""  className=' w-[90%] m-2 mt-10 hidden lg:block mb-10'/>

</div>
</div>    </>
  )
}

export default Roadmap