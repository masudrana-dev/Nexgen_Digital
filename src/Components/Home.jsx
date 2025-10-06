import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/cube.png'
import logo from '../assets/logo.png'
import sectionBg from '../assets/hero_bg.png'
const Home = () => {
  return (
    <section className="relative h-screen w-full border rounded-[100px] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sectionBg})` }}
      id='home'
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      <nav className="fixed top-0 left-0 w-full flex justify-center py-6 z-20">
        <div className="flex items-center justify-between w-full max-w-[500px] border border-[#1f2937] rounded-2xl px-8 py-3 bg-[#030712]/50 backdrop-blur-md">
          <div className="text-sm font-semibold tracking-widest uppercase text-gray-300">
            <img src={logo} alt="" className='w-[86px]' />
          </div>
          <ul className="flex space-x-8 text-sm font-medium text-gray-300">
            <li>
              <a href='#home' className="text-[#CBB26A] hover:text-white transition text-[18px]">
                Home
              </a>
            </li>
            <li>
           <a href='#about' className="text-[#CBB26A] hover:text-white transition text-[18px]">
                About
              </a>
            </li>
            <li>
            <a href='#service' className="text-[#CBB26A] hover:text-white transition text-[18px]">
                Service
              </a>
            </li>
            <li>
            <a href='#contact' className="text-[#CBB26A] hover:text-white transition text-[18px]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="relative max-w-[1280px] m-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between h-full px-8 md:px-16 lg:px-24">
        <div className="max-w-xl mt-20 lg:mt-0">
          <h1 className="text-[64px] md:text-5xl text-left font-bold font-bold leading-tight mb-6">
            Empowering Innovation <br /> with{" "}
            <span className="text-blue-300">Cutting-Edge Data Solutions</span>
          </h1>
          <p className="text-gray-400 text-[18px] leading-[140%] text-left leading-relaxed mb-8">
            Transforming businesses through AI, analytics, and cloud
            technologies. Partner with Next Generation Digital Architects to
            unlock the full potential of your data and drive sustainable growth.
          </p>
          <a href="#contact">
            <button className="bg-[#DBBB5D] cursor-pointer text-gray-900 font-medium px-6 py-3 rounded-md hover:bg-yellow-300 transition">
            Get Started
          </button>
          </a>
         
        </div>

        <div className="relative w-[320px] md:w-[400px] mt-16 lg:mt-0">
          <img
            src={img}
            alt="3D Cube"
            className="object-contain w-[387px]"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default Home
