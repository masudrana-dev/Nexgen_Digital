import React from 'react'
import img1 from '../assets/Ai-1.png'
import img2 from '../assets/Ai-2.png'
import img3 from '../assets/Ai-3.png'

const About = () => {

  return (
    <div className="w-full min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[56px] sm:text-5xl lg:text-6xl font-semibold text-gray-900 text-center mb-12">
          About Us
        </h2>
        <div className=" text-[#121417] text-[30px] font-semibold mx-auto mb-16 space-y-6">
          Next Generation Digital Architects transforms businesses by harnessing
          cutting-edge technology to drive innovation and growth. Our
          multidisciplinary team delivers integrated solutions in AI, strategic
          consulting, and advanced analytics, empowering clients to unlock
          exceptional value from data, boost revenue, and achieve operational
          excellence.
          <span className='text-[#8A8F9C]'>
            With a passion for innovation and a commitment to
            measurable outcomes, we partner globally, leveraging deep expertise to
            navigate the digital landscape and ensure sustainable success.
          </span>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div>
            <img src={img1} alt="" className='w-[416px] h-[543px]' />
          </div>
          <div>
            <img src={img2} alt="" className='w-[416px] h-[487px]' />
          </div>
          <div>
            <img src={img3} alt="" className='w-[416px] h-[433px]' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
