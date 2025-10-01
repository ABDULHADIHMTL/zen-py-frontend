import React from 'react'
import '../pages/services/service.css'
import { useEffect} from 'react';
import { GiRadialBalance } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";
import { FaCheckDouble } from "react-icons/fa";
// import { BsBracesAsterisk } from "react-icons/bs";
// import { MdOutlineGroupAdd } from "react-icons/md";

export default function Vision() {

  //ist scrool
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('vision-text');
      const backgroundElement = document.getElementById('vision-background');
      const scrollY = window.scrollY;
      textElement.style.transform = `translateY(-${scrollY * 1}px)`;
      backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('vision-text1');
      const backgroundElement = document.getElementById('vision-background1');
      const scrollY = window.scrollY;
          textElement.style.transform = `translateY(-${scrollY * 0.25}px)`;
          backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {/* first hero */}
      <div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[800px] ">
        <div id="vision-background" className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"></div>
        <div id="vision-text" className="relative z-10 lg:top-64 md:top-64 top-20 text-white lg:ml-[30%] md:ml-24 ml-5">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            vision</h2>
          <p>Business growth and innovation .</p>

        </div>
        <div className="absolute animated-element bottom-10 -left-10 z-10">
          <img className="w-32 md:w-52 lg:w-96" src={require('../../img/floating_image_05.png')} alt="" />
        </div>
        <div className="absolute animated-element bottom-10 -right-0 ">
          <img className="w-20 md:w-32 lg:w-52" src={require('../../img/floating_image_08.png')} alt="" />
        </div>
        <div className="absolute -bottom-1">
          <img src={require('../../img/bottom_wave_02_gray.png')} alt="" />
        </div>
      </div>

      {/* second hero */}
      <div className=" mx-auto p-4 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Vision</h1>
        <h2 className="text-xl md:text-2xl text-center mb-8">Futuristic business landscape</h2>
        <p className="text-base md:text-lg mb-6">
zen py is to lead the transformation of treasury management through innovation, excellence, and ethical leadership. We envision a future where businesses of all sizes and industries seamlessly navigate the complexities of financial management with our cutting-edge IT solutions.
Central to our vision is our commitment to being industry pioneers, setting new standards in zen py that empower organizations to achieve unprecedented efficiency and strategic insight. We aspire to not only meet but exceed the expectations of our global clients by delivering tailored solutions that adapt to their evolving needs and challenges.        </p>

      </div>
      <div class=" mx-auto px-4 py-8 bg-white">
      <h2 className="text-3xl font-extrabold gradient-text text-transparent sm:text-4xl text-center mb-6">Our Core Value</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <GiRadialBalance style={{ fontSize: "100px", color: "#577B8D", marginLeft: "40%" }} />
            <h3 class="text-lg font-semibold">Innovation</h3>
            <p class="text-sm">Continually seeking new and better ways to solve problems and create value.</p>
          </div>
          <div class="text-center">
            <LuHeartHandshake style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Integrity</h3>
            <p class="text-sm">Maintaining honesty and transparency in all our dealings.</p>
          </div>
          <div class="text-center">
            <FaPeopleRoof style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Excellence</h3>
            <p class="text-sm">Striving for the highest standards in everything we do</p>
          </div>
          <div class="text-center">
            <TiSortAlphabeticallyOutline style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Collaboration</h3>
            <p class="text-sm">Working together with our clients and partners to achieve shared goals.</p>
          </div>
          <div class="text-center">
            <BsMicrosoftTeams style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>
            <h3 class="text-lg font-semibold">Customer-Centric</h3>
            <p class="text-sm">Prioritizing the needs and success of our clients above all.</p>
          </div>
          <div class="text-center">
            <FaCheckDouble style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Quality</h3>
          </div>
        
        </div>
      </div>



    {/* third stage 2scroll */}

<div className="relative overflow-hidden h-[400px] md:h-[600px] lg:h-[800px]" >
{/* <div className="absolute animated-element bottom-10 -left-0 z-20 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div> */}
      <div id="vision-background1"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_450px] bg-fixed"></div>
      <div id="vision-text1"  className="relative z-10  text-white ml-20 lg:ml-[40%] md:ml-40 top-[600px] md:top-[650px] lg:top-[700px]"> 
        <h2 className="text-6xl font-bold mb-4">
        Our Mission</h2> 
        <p>Expand our global presence to 10 countries by 2026</p>
      </div>
      <div className="absolute animated-element lg:top-[0px] left-10 z-10">
       <img className="w-32 md:w-52 lg:w-[450px]" src={require('../../img/floating_image_04.png')} alt="" />
      </div>
      <div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../img/floating_image_03.png')} alt="" />
      </div>
      <div className="absolute -bottom-1">
        <img src={require('../../img/bottom_wave_02_gray.png')} alt="" />
    </div>
    <div className="absolute top-0">
        <img src={require('../../img/top_wave_02.png')} alt="" />
    </div>
    </div>
   
      {/* second hero */}
      <div className=" mx-auto p-4 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Mission</h1>
        <h2 className="text-xl md:text-2xl text-center mb-8">Journey towards success</h2>
        <p className="text-base md:text-lg mb-6">

      zen py mission is to revolutionize zen py management through innovative IT solutions that empower businesses to thrive in a dynamic financial landscape. We are dedicated to delivering exceptional value to our clients by understanding their unique challenges and providing tailored, reliable, and scalable IT solutions.

Central to our mission is a commitment to continuous innovation. We strive to remain at the forefront of technological advancements, ensuring that our solutions not only meet but anticipate the evolving needs of our clients. By fostering a culture of creativity and collaboration, we encourage our team to push boundaries and develop groundbreaking solutions that drive efficiency and strategic advantage for our clients.
     
     </p> </div>
      {/* <div class=" mx-auto px-4 py-8 bg-white">
      <h2 className="text-3xl font-extrabold gradient-text text-transparent sm:text-4xl  text-center">Goals & Objectives</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <GiRadialBalance style={{ fontSize: "100px", color: "#577B8D", marginLeft: "40%" }} />
            <h3 class="text-lg font-semibold">Customer centric</h3>
            <p class="text-sm">Prioritize customer first understanding user’s pain factors</p>
          </div>
          <div class="text-center">
            <LuHeartHandshake style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Trust</h3>
            <p class="text-sm">Build trust to deliver world class products</p>
          </div>
          <div class="text-center">
            <FaPeopleRoof style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Partnership</h3>
            <p class="text-sm">Reputed and Reliable partners deeply rooted for years</p>
          </div>
          <div class="text-center">
            <TiSortAlphabeticallyOutline style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Precise</h3>
            <p class="text-sm">Clear call for every action implemented</p>
          </div>
          <div class="text-center">
            <BsMicrosoftTeams style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>
            <h3 class="text-lg font-semibold">Teamwork</h3>
          </div>
          <div class="text-center">
            <FaCheckDouble style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Quality</h3>
          </div>
          <div class="text-center">
            <BsBracesAsterisk style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Risk</h3>
          </div>
          <div class="text-center">
            <MdOutlineGroupAdd style={{fontSize:"100px", color:"#577B8D", marginLeft:"40%" }}/>      <h3 class="text-lg font-semibold">Communication</h3>
          </div>
        </div>
      </div> */}

{/* core vale */}
          <div className="bg-zinc-800 text-white  px-5 ">
            <h2 className="text-3xl font-bold text-center mb-10">Goals & Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-10 justify-center items-center">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center border-4 border-gray-200">
                    <span className="text-4xl">⏳</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovative Technologies</h3>
                <p className="text-sm text-zinc-400">Continuously research and implement cutting-edge technologies to enhance efficiency, security, and scalability in zen py operations.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center border-4 border-gray-200">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Educational Advocacy</h3>
                <p className="text-sm text-zinc-400">Empower clients through education and training on the latest zen py technologies, fostering their autonomy and confidence in using our solutions.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center border-4 border-gray-200">
                    <span className="text-4xl">💡</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Partnerships</h3>
                <p className="text-sm text-zinc-400">Cultivate strong partnerships with industry leaders and stakeholders to co-create solutions that anticipate and respond to future zen py challenges.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center border-4 border-gray-200">
                    <span className="text-4xl">🏆</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ethical Standards</h3>
                <p className="text-sm text-zinc-400">Uphold strict ethical standards in all our interactions, ensuring transparency, trust, and respect in every client relationship.</p>
              </div>
              <div className="flex flex-col items-center text-center ">
                <div className="relative mb-5">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center  border-4 border-gray-200">
                    <span className="text-4xl">🎓</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-sm text-zinc-400">Extend our reach globally to support diverse businesses and organizations in optimizing their financial strategies through advanced IT solutions.</p>
              </div>
            </div>
          </div>
        
        
    </>
  )
}





















