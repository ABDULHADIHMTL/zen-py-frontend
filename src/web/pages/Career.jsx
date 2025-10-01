import React from 'react'
import { useEffect } from 'react';
import '../pages/services/service.css'
import { PiShapesDuotone } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";
import { GiRecycle } from "react-icons/gi";
import { MdOutlineContactMail } from "react-icons/md";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { TbHandThreeFingers } from "react-icons/tb";
import { GiLockers } from "react-icons/gi";
import { GiDiscGolfBag } from "react-icons/gi";
import { MdGroups3 } from "react-icons/md";
export default function Career() {
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('career-text');
      const backgroundElement = document.getElementById('career-background');
      const scrollY = window.scrollY;
      textElement.style.transform = `translateY(-${scrollY * 1}px)`;
      backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
   <>
     {/* first hero */}
      <div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[800px] ">
        <div id="career-background" className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"></div>
        <div id="career-text" className="relative z-10 lg:top-64 md:top-64 top-20 text-white lg:ml-[30%] md:ml-24 ml-5">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            
Life @ zen py Solutions</h2>
          <p>Join our team and embark on a journey <br />
          of professional growth and innovation. we empower <br /> our employees 
           to achieve their full potential and make a meaningful impact.</p>

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


{/* life of zen py */}
<div className=" mx-auto py-8 bg-slate-100">
          <h2 className="text-center text-2xl font-bold mb-8">Life @ zen py</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white  p-6 rounded-lg shadow-md text-center">
            <PiShapesDuotone  style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}}/>              <p className="text-lg font-medium">Shape Your Career</p>
            </div>
            <div className="bg-white  p-6 rounded-lg shadow-md text-center">
            <GrWorkshop style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}} />              <p className="text-lg font-medium">Work & Play Hard</p>
            </div>
            <div className="bg-white  p-6 rounded-lg shadow-md text-center">
            <FaMoneyBillTrendUp style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}}/>              <p className="text-lg font-medium">Competitive Salary</p>
            </div>
          </div>
        </div>
{/* benifits */}
<div className="bg-white dark:bg-zinc-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center gradient-text text-transparent mb-8">Benefits and Perks</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md text-center">
              <FaCoins style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}} />                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Insurance for you and your loved ones</h3>
                <p className="text-zinc-600 dark:text-zinc-300">Your health comes first, and we got you covered with comprehensive health insurance & accidental coverage.</p>
              </div>
              <div className="bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md text-center">
              <AiOutlineFieldTime style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}}/>                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Flexible Working Hours</h3>
                <p className="text-zinc-600 dark:text-zinc-300">We understand the importance of work-life balance, and our flexible working hours help to achieve it.</p>
              </div>
              <div className="bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md text-center">
              <GiLockers style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}}/>                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Key person Insurance</h3>
                <p className="text-zinc-600 dark:text-zinc-300">zen py  values the key people within the organization and provides special life insurance for them</p>
              </div>
              <div className="bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md text-center">
              <GiDiscGolfBag style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}}/>                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">On-site Opportunities</h3>
                <p className="text-zinc-600 dark:text-zinc-300">Unleash your true potential by working abroad and gain valuable work experience.</p>
              </div>
              <div className="bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md text-center">
              <MdGroups3 style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}}/>                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Amazing Peers</h3>
                <p className="text-zinc-600 dark:text-zinc-300">Opportunity to work with the best talent in the industry.</p>
              </div>
              <div className="bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md text-center">
              <CgGym style={{fontSize:"150px", marginLeft:"30%", color:"#577B8D"}}/>                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Well-equipped Fitness Room</h3>
                <p className="text-zinc-600 dark:text-zinc-300">Go for a run anytime, lift some weights and be part of a healthy work environment.</p>
              </div>
            </div>
          </div>
        </div>


{/* steps of selection */}
 <div className="bg-zinc-50 dark:bg-zinc-900 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold gradient-text text-transparent mb-4">Steps of Recruitment Process</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10">
              Smart products are built by awesome teams. We do not hire awesome people, we create them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
<FiPhoneCall style={{fontSize:"150px", color:"#577B8D"}}/>                <p className="text-zinc-900 dark:text-white">Initial Screening</p>
              </div>
              <div className="flex flex-col items-center">
<GiBookshelf style={{fontSize:"150px", color:"#577B8D"}}/>                <p className="text-zinc-900 dark:text-white">Interview Process</p>
              </div>
              <div className="flex flex-col items-center">
<GiRecycle style={{fontSize:"150px", color:"#577B8D"}}/>                <p className="text-zinc-900 dark:text-white">Managerial Decision</p>
              </div>
              <div className="flex flex-col items-center">
<MdOutlineContactMail style={{fontSize:"150px", color:"#577B8D"}}/>                <p className="text-zinc-900 dark:text-white">Onboarding</p>
              </div>
            </div>
          </div>
        </div>
  {/* google review */} 
  <div className="bg-zinc-50   mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-8">Real Google Reviews</h2>
      <div className="flex flex-wrap justify-center gap-20">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-500">
<FaRegStarHalfStroke style={{fontSize:"150px", color:"#577B8D"}}/>          </div>
          <p className="text-2xl font-semibold mt-4"></p>
          <p className="text-zinc-600">Ratings</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-500">
<IoIosPeople style={{fontSize:"150px", color:"#577B8D"}}/>          </div>
          <p className="text-2xl font-semibold mt-4"></p>
          <p className="text-zinc-600">Approved User</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-500">
<TbHandThreeFingers style={{fontSize:"150px", color:"#577B8D"}}/>          </div>
          <p className="text-2xl font-semibold mt-4"></p>
          <p className="text-zinc-600">Interview Experiences</p>
        </div>
      </div>
    </div>

   </>
  )
}
