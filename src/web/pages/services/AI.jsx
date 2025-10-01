import React from 'react'
import { useEffect } from "react";
import './service.css'
import { IoMdArrowDropright } from "react-icons/io";
import { useLocation, Link } from 'react-router-dom';

export default function Application() {

// location and id
const location = useLocation();

useEffect(() => {
  let sectionId = null;
  
  if (location.hash === '#Penetration') {
    sectionId = 'Penetration';
  } else if (location.hash === '#Android') {
    sectionId = 'Android';
  } else if (location.hash === '#Ios') {
    sectionId = 'Ios';
  } else if (location.hash === '#Hybrid') {
    sectionId = 'Hybrid';
  }

  if (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, [location]);







  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('application-text');
      const backgroundElement = document.getElementById('application-background');
      const scrollY = window.scrollY;
          textElement.style.transform = `translateY(-${scrollY * 1}px)`;
          backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('application-text1');
      const backgroundElement = document.getElementById('application-background1');
      const scrollY = window.scrollY;
          textElement.style.transform = `translateY(-${scrollY * 0.25}px)`;
          backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
 
{/* first row */}
<div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[800px]">
  {/* Background */}
  <div
    id="application-background"
    className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"
  ></div>

  {/* Text */}
  <div
    id="application-text"
    className="relative z-10 top-10 md:top-12 lg:top-16 text-white ml-5 md:ml-10 lg:ml-16 max-w-4xl"
  >
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">
      AI & Intelligent Solutions
    </h2>

    <ul className="space-y-4 text-lg md:text-xl lg:text-2xl leading-relaxed">
      <li>
        <span className="text-yellow-300">★</span> AI-Powered Automation — Streamline business workflows with intelligent bots and predictive algorithms that reduce manual effort and accelerate throughput.
      </li>
      <li>
        <span className="text-yellow-300">★</span> Generative AI & NLP — Deploy advanced natural language and generative models for conversational agents, content generation and smarter customer experiences.
      </li>
      <li>
        <span className="text-yellow-300">★</span> Computer Vision & Analytics — Extract actionable insights from images and video with object detection, anomaly detection and visual analytics.
      </li>
      <li>
        <span className="text-yellow-300">★</span> Predictive & Prescriptive Intelligence — Forecast trends using ML models and deliver prescriptive recommendations to optimize decisions and KPIs.
      </li>
      <li>
        <span className="text-yellow-300">★</span> Custom AI Solutions — Tailored AI models and integrations tuned to your data and business processes for measurable impact.
      </li>
    </ul>
  </div>
</div>


 {/* first row */}
 <div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[800px] ">
 <div id="application-background"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"></div>
      <div id="application-text"  className="relative z-10 top-10 md:top-12 lg:top-16 text-white ml-5 md:ml-10 lg:ml-16 max-w-4xl"> 
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
    
        Customized AI <br /> Application  Development</h2> 
      
      </div>
      <div className="absolute animated-element bottom-10 -left-10 z-10">
       <img className="w-32 md:w-52 lg:w-96" src={require('../../../img/floating_image_05.png')} alt="" />
      </div>
      <div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
      <div className="absolute -bottom-1">
        <img src={require('../../../img/bottom_wave_02_gray.png')} alt="" />
    </div>
    </div>
    
{/* second stage */}
<div class="relative mx-auto p-4" style={{backgroundColor:"#f7f7f5"}}>
<div className="absolute animated-element lg:bottom-[220px] md:bottom-[180px] top-[370px] left-9 z-10 ">
       <img className="w-32 md:w-52 lg:w-96 opacity-50" src={require('../../../img/super_dots.png')} alt="" />
      </div>
      <div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-1/3 p-4">
      <h2 class="text-3xl font-bold mb-4 gradient-text text-transparent">Full-stack Mobile application development with end-to-end service</h2>
      <p class="mb-4">
      We intensely focus on the client’s requirements to build a custom application on modern architecture and design patterns. From planning to execution, we apply our expertise to outsmart your application among competitors.      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Scalable</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/><span>Independent</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Efficient</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Reliable</span>
        </li>
      </ul>
    </div>

    <div class="w-full lg:w-2/3 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/penetration-1.png')}
            alt="Magento"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Penetration application</h3>
          <Link to='/service/application#Penetration' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/android.png')}
            alt="Shopware"
            class="w-[50%] h-48 object-cover rounded-t-lg mb-4 align-middle"
          />
          <h3 class="text-xl font-semibold mb-2">Android</h3>
          <Link class="bg-blue-500 text-white px-4 py-2 rounded-full" to='/service/application#Android'>Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/ios.png')}
            alt="WooCommerce"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Ios Development</h3>
          <Link class="bg-blue-500 text-white px-4 py-2 rounded-full" to='/service/application#Ios'>Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/flutter.png')}
            alt="JTL Shop"
            class="w-[80%] h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Hybrid</h3>
          <Link class="bg-blue-500 text-white px-4 py-2 rounded-full" to='/service/application#Hybrid'>Read More</Link>
        </div>
      </div>
    </div>
  </div>
</div>
{/* third stage 2scroll */}

<div className="relative overflow-hidden h-[400px] md:h-[600px] lg:h-[800px]" >
{/* <div className="absolute animated-element bottom-10 -left-0 z-20 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div> */}
      <div id="application-background1"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_450px] bg-fixed"></div>
      <div id="application-text1"  className="relative z-10  text-black ml-20 lg:ml-52 md:ml-40 top-[600px] md:top-[650px] lg:top-[700px]"> 
        <h2 className="text-4xl font-bold mb-4">
        Performing a test plan that <br /> drives efficiency and plus <br /> innovation</h2> 
        <p>Prequesites are analyzed, defining various test approaches for clarity and usability.</p>
      </div>
      <div className="absolute animated-element lg:top-[0px] left-10 z-10 opacity-5">
       <img className="w-32 md:w-52 lg:w-[450px]" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
      <div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_03.png')} alt="" />
      </div>
      <div className="absolute -bottom-1">
        <img src={require('../../../img/bottom_wave_02_gray.png')} alt="" />
    </div>
    <div className="absolute top-0">
        <img src={require('../../../img/top_wave_02.png')} alt="" />
    </div>
    </div>
   

{/* fourth stage */}

<div class=" relative mx-auto p-4 " style={{backgroundColor:"#f7f7f5"}} id='Penetration'>
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/penetration-1.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4" >
      <h2 class="text-3xl font-bold mb-4">Penetration application</h2>
      <p class="mb-4">
      Penetration application helps determine unauthorised access from malicious users, detecting vulnerabilities and ensuring security. A kind of ethical hacking where pen tests are carried out through execution standards.
      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Define Scope</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/><span>Detect and Analyse Vulnerability</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Vulnerability Exploitation</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Reporting</span>
        </li>
      </ul>
    </div>
  </div>
</div>


<div class=" relative flex flex-col md:flex-row items-center md:items-start p-6" style={{backgroundColor:"#f7f7f5"}} id='Android'>
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
       <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">Android</h1>
    <p class="text-lg mb-4">
    Android, as an operating system developed by Google, has revolutionized the way we interact with mobile technology. Its open-source nature has fostered innovation, allowing a diverse range of devices from various manufacturers to run on it, contributing to its widespread adoption across the globe.    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Affordability and Choice
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Integration with Google Services
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Hardware Diversity
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Easy Customization
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/android.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>


<div class="relative mx-auto p-4 "style={{backgroundColor:"#f7f7f5"}} id='Ios'>
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/ios.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">
      Ios Devolopment</h2>
      <p class="mb-4">

     
iOS development focuses on creating applications for Apple's mobile devices, including iPhones, iPads, and iPod Touch. Apple's ecosystem is renowned for its stringent quality standards and robust security measures, which contribute to its popularity among developers and users alike. The development process typically involves using Apple's proprietary programming languages like Swift or Objective-C, along with Xcode, the integrated development environment (IDE) designed specifically for iOS app creation.      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>High Security Standards</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Smooth User Experience</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Timely Updates</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Ecosystem Integration</span>
        </li>
      </ul>
    </div>
  </div>
</div>



<div class="relative flex flex-col md:flex-row items-center md:items-start p-6"style={{backgroundColor:"#f7f7f5"}} id='Hybrid'>
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
  <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">Hybrid Development</h1>
    <p class="text-lg mb-4">

   
Flutter is a versatile UI toolkit developed by Google for creating natively compiled applications across mobile, web, and desktop from a single codebase. It uses the Dart programming language and offers a rich set of pre-designed widgets, facilitating rapid development and customizable interfaces. Flutter's framework is known for its performance, flexibility, and ability to deliver native-like experiences on multiple platforms.    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Cross-Platform Development
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Native Performance
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/>Open-Source and Community Support
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Rich UI Experience
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/flutter.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>

    </>
  )
}
