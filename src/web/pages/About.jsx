import React from 'react'
import { useEffect, useRef } from 'react';
import { useLocation,Link } from 'react-router-dom';
import '../pages/services/service.css'
import { GiRadialBalance } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { FaCheckDouble } from "react-icons/fa";
import { BsBracesAsterisk } from "react-icons/bs";
import { MdOutlineGroupAdd } from "react-icons/md";

export default function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('about-text');
      const videoElement = videoRef.current;
      const scrollY = window.scrollY;
      
      if (textElement) {
        textElement.style.transform = `translateY(-${scrollY * 1}px)`;
      }
      
      // Add parallax effect to video
      if (videoElement) {
        videoElement.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // location and id
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#team') {
      const teamSection = document.getElementById('team');
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      {/* first hero with video background */}
      <div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[800px]">
        {/* Video Background */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-200 contrast-125" // CHANGED: Added brightness and contrast
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            zIndex: 0,
            filter: 'brightness(1.1) contrast(1.1)' // CHANGED: Additional filter for brightness
          }}
        >
          <source src={require('../../img/los_angeles.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Lighter overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-1"></div> {/* CHANGED: Reduced opacity from 40% to 20% */}
        
        {/* Content */}
        <div id="about-text" className="relative z-10 lg:top-64 md:top-64 top-20 text-white lg:ml-[30%] md:ml-24 ml-5">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 drop-shadow-2xl"> {/* CHANGED: Added text shadow */}
            About
          </h2>
          <p className="text-white font-medium drop-shadow-lg">We are a young and creative team <br /> and we offer you fresh business ideas.</p> {/* CHANGED: Added font weight and shadow */}
        </div>
        
        <div className="absolute animated-element bottom-10 -left-10 z-10">
          <img className="w-32 md:w-52 lg:w-96" src={require('../../img/floating_image_05.png')} alt="" />
        </div>
        <div className="absolute animated-element bottom-10 -right-0 z-10">
          <img className="w-20 md:w-32 lg:w-52" src={require('../../img/floating_image_08.png')} alt="" />
        </div>
        <div className="absolute -bottom-1 z-10">
          <img src={require('../../img/bottom_wave_02_gray.png')} alt="" />
        </div>
      </div>

      {/* second hero */}
      <div className=" mx-auto p-4 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">About us</h1>
        <h2 className="text-xl md:text-2xl text-center mb-8">How did we kick start?</h2>
        <p className="text-base md:text-lg mb-6">
        At zen py, our journey began with a shared passion for transformative technology, fueled by a vision to redefine how businesses leverage digital solutions. Founded in 2025, we set out to create innovative services that streamline operations and deliver exceptional technological experiences. With a commitment to core values such as innovation, reliability, and excellence, we quickly gained recognition for our ability to solve complex business challenges through cutting-edge solutions.

        </p>
        <p className="text-base md:text-lg">
          Teaming up with technical experts, zen py delivers comprehensive solutions that meet modern corporate requirements from day one. We have expanded our services globally, partnering with leading firms across Europe, America, Saudi Arabia, and Dubai. Our continued success is built on our "Work Hard, Play Hard" philosophy, driving us to excel while maintaining a vibrant and innovative company culture.
        </p>
      </div>
      <div class=" mx-auto px-4 py-8 bg-white">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <GiRadialBalance style={{ fontSize: "100px", color: "#0d3accff", marginLeft: "40%" }} />
            <h3 class="text-lg font-semibold">Customer centric</h3>
            <p class="text-sm">Prioritize customer first understanding user's pain factors</p>
          </div>
          <div class="text-center">
            <LuHeartHandshake style={{fontSize:"100px", color:"#0d3accff", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Trust</h3>
            <p class="text-sm">Build trust to deliver world class products</p>
          </div>
          <div class="text-center">
            <FaPeopleRoof style={{fontSize:"100px", color:"#0d3accff", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Partnership</h3>
            <p class="text-sm">Reputed and Reliable partners deeply rooted for years</p>
          </div>
          <div class="text-center">
            <TiSortAlphabeticallyOutline style={{fontSize:"100px", color:"#0d3accff", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Precise</h3>
            <p class="text-sm">Clear call for every action implemented</p>
          </div>
          <div class="text-center">
            <BsMicrosoftTeams style={{fontSize:"100px", color:"#0d3accff", marginLeft:"40%" }}/>
            <h3 class="text-lg font-semibold">Teamwork</h3>
          </div>
          <div class="text-center">
            <FaCheckDouble style={{fontSize:"100px", color:"#0d3accff", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Quality</h3>
          </div>
          <div class="text-center">
            <BsBracesAsterisk style={{fontSize:"100px", color:"#0d3accff", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Risk</h3>
          </div>
          <div class="text-center">
            <MdOutlineGroupAdd style={{fontSize:"100px", color:"#0d3accff", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Communication</h3>
          </div>
        </div>
      </div>

      {/* core team */}
      <div className="bg-white dark:bg-zinc-900 py-12" id='team'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Heading */}
           <h2 className="text-3xl font-extrabold sm:text-4xl relative inline-block">
             {/* Color splash elements */}
             <span className="absolute -top-4 -left-6 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></span>
             <span className="absolute -top-2 -right-8 w-6 h-6 bg-pink-500 rounded-full animate-bounce"></span>
             <span className="absolute -bottom-4 -left-8 w-5 h-5 bg-blue-500 rounded-full animate-pulse"></span>
             <span className="absolute -bottom-2 -right-6 w-4 h-4 bg-green-500 rounded-full animate-ping"></span>
             <span className="absolute top-2 -left-10 w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
             <span className="absolute bottom-2 -right-10 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
             {/* Text with gradient */}
             <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">Our Core Team</span>
             {/* Additional color dots around text */}
             <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
             <span className="absolute bottom-0 left-0 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></span>
             <p className="mt-4 text-lg leading-6 text-zinc-600 dark:text-zinc-900 transition-colors duration-300 hover:text-green-600 hover:dark:text-green-600 cursor-default">
          "Real-world expertise, not just theoretical knowledge"          </p>
             </h2>
             {/* Quote with hover effect */}
          <p className="mt-4 text-lg leading-6 text-zinc-600 dark:text-zinc-900 transition-colors duration-300 hover:text-green-600 hover:dark:text-green-600 cursor-default">
          "Great things in business are never done by one person; they're done by a team of people." - Steve Jobs"          </p>
        </div>
        <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-[350px] object-cover" src={require('../../img/Hadiphoto.png')} alt="Team Member 1" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Abdul Hadi</h3>
                <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">Founder CEO </p>
                <p className="mt-1 text-sm text-gray-200 lg:text-black">"Driven by a passion for innovation and excellence, Abdul Hadi leads zen py with a vision to redefine technology through practical solutions. His rare 37-year journey through technology evolution provides unique foresight into what truly moves businesses forward. Three decades of industry experience are distilled into results-driven approaches that blend deep technical expertise with business acumen. He ensures every zen py engagement delivers not just technical excellence, but tangible business impact. His mission: to make advanced technology accessible and valuable for businesses of all sizes." </p>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-[350px] object-cover" src={require('../../img/Omer.png')} alt="Team Member 2" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Omer</h3>
                <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">Strategic Growth Advisor | IIM Bangalore Alumni</p>
                <p className="mt-1 text-sm text-gray-200 lg:text-black">"An IIM Bangalore alumnus with extensive experience in enterprise software sales and strategic consulting, Omer brings cutting-edge business acumen to zen py. As a Strategic Growth Advisor, he leverages his expertise from leading MNC engagements to drive market expansion and client success strategies. His unique blend of premier business education and hands-on industry experience enables him to identify growth opportunities and craft scalable solutions that align with evolving market demands. Omer ensures zen py remains at the forefront of technology consulting excellence while maintaining strong client relationships and driving sustainable business growth." </p>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-[350px] object-cover" src={require('../../img/Abdulhai.png')} alt="Team Member 3" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Abdul Hai</h3>
                <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">Strategic Growth Consultant</p>
                <p className="mt-1 text-sm text-gray-200 lg:text-black">"A visionary growth strategist with a proven track record in technology business development. Abdul Hai specializes in identifying untapped opportunities where technology can drive exponential growth. His approach combines market intelligence with practical implementation roadmaps, ensuring every recommendation is backed by solid ROI analysis and executable strategies. Think of him as your strategic partner in navigating digital transformation journeys." </p>

              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-[350px] object-cover" src={require('../../img/karim1.png')} alt="Team Member 4" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Abdul Karim</h3>
                <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">Customer Success Consultant </p>
                <p className="mt-1 text-sm text-gray-200 lg:text-black">"The guardian of client value and relationship longevity. Abdul Karim designs success frameworks that ensure continuous ROI. Through meticulous planning, regular progress assessments, and adaptive strategy refinement, he guarantees that our solutions not only meet initial objectives but continue to deliver value as your business evolves. His commitment: making every client engagement a case study in successful technology partnership" </p>

              </div>
            </div>
            <Link to="/career">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-[350px] object-cover" src={require('../../img/Abdulsamad.png')} alt="Team Member 5" />
              <div className="p-4">
              <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">Senior Legal & Technology Advisor</p>
              <p className="mt-1 text-sm text-gray-200 lg:text-black">"Bringing a unique dual expertise in technology and legal compliance, Abdul Samad ensures our solutions are not just innovative but also legally sound. As an advocate with deep technology understanding, he bridges the gap between technical implementation and regulatory requirements. His advisory role guarantees that client solutions are scalable, compliant, and future-proof - addressing both business and legal considerations simultaneously." </p>               
              </div> 
            </div>
            </Link>
            <Link to="/career">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-[350px] object-cover" src={require('../../img/you-could-be-next.jpg')} alt="Team Member 5" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Could be You <br />
                A deserved candidate <br />
                Ready to Grow With Us?<br />
                Your potential, our platform<br />
                View Open Positions<br />
                </h3>                
              </div> 
            </div>
            </Link>
          
          </div>
        </div>
      </div>

      {/* how are we different */}
      <div className=" mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-50">How are we different?</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white  p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img src={require("../../img/klipartz.com (1).png")} alt="icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
            "Emphasizing our dedication to pioneering technologies, we specialize in creative problem-solving that drives innovation and achieves transformative results."
            </p>
          </div>
          <div className="bg-white  p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4 lg:h-[300px]">
            <img src={require("../../img/klipartz.com (2).png")} alt="icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exceptional Support</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
            "Focused on delivering exceptional support, we prioritize unparalleled customer service and steadfast, reliable assistance, ensuring your needs are met with dedication and expertise."
            </p>
          </div>
          <div className="bg-white  p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4 lg:h-[300px]">
            <img src={require("../../img/klipartz.com.png")} alt="icon" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Empowering Partnerships</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
            "Through empowering partnerships, our solutions are tailored to propel businesses towards achieving their goals, fostering success with innovation and strategic collaboration."
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
