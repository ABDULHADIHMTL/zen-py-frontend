import React, { useState } from 'react';
import '../style/Home.css'
import EnquireNow from '../component/EnquireNow';
import HeroFirst from '../component/HeroFirst'
import HeroSecond from '../component/HeroSecond'
import HeroThrid from '../component/HeroThrid.jsx'
import Technologies from '../component/Technologies.jsx'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs"
import { MdProductionQuantityLimits } from "react-icons/md"
import { FaCity } from "react-icons/fa"
import ClientTestimonial from '../component/Testimonial.jsx';
import { FaAward } from "react-icons/fa";
import {Link} from 'react-router-dom'
export default function Home() {
  
  const [counterState, setCounterState] = useState(false)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const bgImage = document.getElementById('hero-back');


  //     if (bgImage) {
  //       bgImage.style.transform = `scale(${1 + scrollY * 0.0002})`;
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <div className="animated-element">
      I'm moving up and down!
    </div> */}
      <HeroFirst />


      <div
        className=" relative flex flex-col md:flex-row items-center justify-between p-8  dark:bg-zinc-900"
        style={{ backgroundColor: '#e6e6e6' }}>
        <div className="absolute animated-element bottom-10 right-10">
          <img className="w-16 md:w-32 lg:w-48" src={require('../../img/floating_image_08.png')} alt="" />
        </div>
        {/* <div className="absolute animated-element bottom-10 -right-0">
          <img src={require('../../img/floating_image_01.png')} alt="" />
        </div> */}
        <div class="md:w-1/2 mb-8 md:mb-0" style={{ textAlign: "center" }}>

        <div className='textbg'>
          <h3 style={{ color: '#081bcaff', fontSize: '48px', fontWeight: 'bold' }}>
          Effortless Integration
          </h3>
        </div>
         
          <p class="text-black dark:text-black mb-4">
          “We provide cutting-edge IT solutions that seamlessly integrate with your existing systems, ensuring smooth transitions and measurable results. From AI & Intelligent Solutions to Web Development, SAP Digital Transformation, Data Science & Analytics, Testing & Validation, and end-to-end Project Consulting — our services are designed to be scalable, secure, and tailored to your unique business needs.”
          </p>
          {/* <p class="text-zinc-500 dark:text-zinc-400 mb-6">
            "Start with the customer and work backward." - Steve Jobs
          </p> */}
          <Link to='/service'>           <button class="mt-6 bg-[#081bca] text-white py-2 px-4 rounded-full">Learn More</button>
          </Link>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <img
            src={require('../../img/pexels-negativespace-110078.jpg')} alt="Integration Illustration" class="w-full h-auto max-w-sm"
          />
        </div>
      </div>

      <HeroSecond />

      <div class="flex flex-col md:flex-row items-center  p-6 md:p-12" style={{ marginTop: "0px", backgroundColor: '#e6e6e6' }}>
        <div class="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={require('../../img/high_tech_environment.jpeg')} alt="Illustration" class="w-3/4 md:w-full h-64 object-cover" />
        </div>
        <div class="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
        <div className='textbg'>
          <h3 style={{ color: '#081bcaff', fontSize: '30px', fontWeight: 'bold' }}>
          Experience the Forefront of Technology
          </h3>
        </div>
          <p class="text-black dark:text-black mb-4 text-left">
          Step into a high-tech environment powered by our innovative solutions. We empower your business transformation through deep expertise in Web Development, SAP Digital Transformation, Data Science & Analytics, Testing & Validation, and end-to-end Project Consulting.
          </p>
          <p class="text-black dark:text-black mb-4 text-left">
           Our cutting-edge IT solutions are designed to seamlessly integrate with your existing systems, ensuring a smooth transition. Together, we'll propel your business into the digital age, helping you stay ahead of the curve and thrive in the future.
          </p>
          {/* <p class="mt-4 text-zinc-600 italic">
            "Start with the customer and work backward." - Steve Jobs
          </p> */}
          <Link to='/service'>           <button class="mt-6 bg-[#081bcaff] text-white py-2 px-4 rounded-full">Learn More</button>
          </Link>
        </div>

      </div>

      {/* ADD THE ENQUIRE NOW SECTION HERE */}
      <EnquireNow />

      <HeroThrid />
      <Technologies />

      {/* <div className="cover relative">
  <img src={require('../../img/mountain.png')} alt="" id='hero-back' className="w-full h-auto"/>
  <div className="content absolute top-6 left-1/3 md:top-1/3 md:left-1/3 lg:top-[100px] lg:left-1/3">
    <h1 className='text-2xl md:text-4xl lg:text-6xl gradient-text text-transparent'>Our Mile-Stone</h1>
  </div> */}
(
    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
      <div className='lg:mb-[100px]   lg:text-4xl text-center mt-[50px] mb-[30px] text-2xl text white'>Our Milestone</div>
      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
        <div className="text-white ">
          {/* <h2>{counterState && <CountUp start={0} end={1} duration={2.75} />} +</h2> */}
          <p><FaRegCalendarDays size={40} color="#eebb99ff" className='lg:ml-[100px]  mt-2  ml-[153px]'/>
          <br />
          Years of Experiences
          </p>
            
           </div>
        <div className="text-white">
          {/* <h2>{counterState && <CountUp start={0} end={1} duration={2.75} />}+</h2> */}
          <p >
            <MdProductionQuantityLimits size={40} color="#dceb0bff" className='lg:ml-[100px] mt-2 ml-[153px]' />
            <br />
            Projects Installed
          </p>
        </div>
        <div className="text-white">
          {/* <h2>{counterState && <CountUp start={0} end={1} duration={2.75} />} +</h2> */}
          <p>
            <FaAward size={40} color="#db0c85ff" className='lg:ml-[100px] mt-2 ml-[153px]' />
            <br />
            Industry Awards
          </p>
        </div>
        <div className="text-white">
          <h2>{counterState && <CountUp start={0} end={95} duration={2.75} />} %</h2>
          <p>
            <BsGraphUpArrow size={40} color="#dceb0bff" className='lg:ml-[100px] mt-2 ml-[153px]' />
            <br />
            Satisfied Client rate
          </p>
        </div>
        <div className="text-white">
          <h2>{counterState && <CountUp start={0} end={4} duration={2.75} />} +</h2>
          <p>
            <FaCity size={40} color="#eebb99ff" className='lg:ml-[100px] mt-2 ml-[153px]' />
            <br />
            Cities Covered in India & abroad
          </p>
        </div>
      </div>
    </ScrollTrigger>

      <ClientTestimonial/>
    </>
  )
}
