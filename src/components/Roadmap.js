import React from 'react'
import Rmap from '../assets/roadmap.png'
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/p3.png'

function Roadmap() {
  return (
    <>
<div className="alll flex flex-col justify-center items-center">
<img src={Rmap} alt=""  className=' w-80 m-2 mt-10'/>
<div className="phase">
<img src={P1} alt=""  className=' w-80 m-2 mt-10'/>
<img src={P2} alt=""  className=' w-80 m-2 mt-10'/>
<img src={P3} alt=""  className=' w-80 m-2 mt-10 mb-10'/>

</div>
</div>    </>
  )
}

export default Roadmap