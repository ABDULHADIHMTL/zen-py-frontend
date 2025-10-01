import { useEffect } from "react";
import React from 'react'
import './service.css'
import { IoMdArrowDropright } from "react-icons/io";
import { useLocation, Link } from 'react-router-dom';

export default function Website() {
  // location and id
const location = useLocation();

useEffect(() => {
  let sectionId = null;
  
  if (location.hash === '#React') {
    sectionId = 'React';
  } else if (location.hash === '#Angular') {
    sectionId = 'Angular';
  } else if (location.hash === '#WooCommerce') {
    sectionId = 'WooCommerce';
  } else if (location.hash === '#JTL') {
    sectionId = 'JTL';
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
          const textElement = document.getElementById('website-text');
          const backgroundElement = document.getElementById('website-background');
          const scrollY = window.scrollY;
              textElement.style.transform = `translateY(-${scrollY * 1}px)`;
              backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      useEffect(() => {
        const handleScroll = () => {
          const textElement = document.getElementById('website-text1');
          const backgroundElement = document.getElementById('website-background1');
          const scrollY = window.scrollY;
              textElement.style.transform = `translateY(-${scrollY * 0.25}px)`;
              backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
  return (
   <>
   {/* first row */}
   <div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[800px] ">
   <div id="website-background"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"></div>
      <div id="website-text"  className="relative z-10 lg:top-64 md:top-64 top-20 text-black lg:ml-[30%] md:ml-24 ml-5"> 
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
Ecommerce <br /> Development</h2> 
        <p>Powered by technical experts, zen py is your <br />
         one-stop destination for all innovative and <br /> market-driving solutions.</p>
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
      <h2 class="text-3xl font-bold mb-4 gradient-text text-transparent">Full Stack Website Development.</h2>
      <p class="mb-4">
      Website migration involves moving a website from one hosting environment or platform to another. This process can be complex, requiring careful planning and execution to ensure a smooth transition. It typically involves transferring files, databases, and applications to the new server or platform. Website migration can be driven by various reasons such as the need for better performance, increased security, improved scalability, or cost savings. The process often includes steps like backing up the existing site, setting up the new environment, testing the new setup, and finally making the switch.
      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Increased Security</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Improved Scalability</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Access to Advanced Features</span>
        </li>
      </ul>
    </div>

    <div class="w-full lg:w-2/3 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/react.png')}
            alt="Magento"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">React</h3>
          <Link to='/service/website#React' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/angular.png')}
            alt="Shopware"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Angular</h3>
          <Link to='/service/website#Angular' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/Woocommerce-removebg-preview.png')}
            alt="WooCommerce"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">WooCommerce</h3>
          <Link to='/service/website#WooCommerce' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/jtl-shop-plugin-and-template-developer-1-1.jpeg')}
            alt="JTL Shop"
            class="w-[80%] h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">JTL Shop</h3>
          <Link to='/service/website#JTL' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
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
      <div id="website-background1"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_450px] bg-fixed"></div>
      <div id="website-text1"  className="relative z-10  text-black ml-20 lg:ml-52 md:ml-40 top-[600px] md:top-[650px] lg:top-[700px]"> 
        <h2 className="text-4xl font-bold mb-4">
        Our process reaches all <br /> digital drifts to bring in <br /> prudent results</h2> 
        <p>Strengthening client relationships through our top-notch services</p>
      </div>
      <div className="absolute animated-element lg:top-[0px] left-10 z-10">
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

<div class=" relative mx-auto p-4 " style={{backgroundColor:"#f7f7f5"}}id='WooCommerce' >
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/woo-commerce-shopping-cart-plugin.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">WooCommerce</h2>
      <p class="mb-4">
      WooCommerce is a versatile e-commerce platform built on WordPress, renowned for its robust features and flexibility in creating online stores. Here are five key points that make it an excellent choice for clients:
      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Ease of Use</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Customization</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/><span>Scalability</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>SEO-Friendly</span>
        </li>
      </ul>
    </div>
  </div>
</div>


<div class=" relative flex flex-col md:flex-row items-center md:items-start p-6" style={{backgroundColor:"#f7f7f5"}} id='React' >
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
       <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">React</h1>
    <p class="text-lg mb-4">
    React is a powerful JavaScript library used for building user interfaces, commonly utilized in creating dynamic and interactive web applications. Here are five key points highlighting its advantages for clients:
    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Interactive User Interfaces
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Component-Based Architecture
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Virtual DOM
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Declarative Syntax
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/react.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>


<div class="relative mx-auto p-4 "style={{backgroundColor:"#f7f7f5"}} id='Angular'>
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/angular.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">Angluar</h2>
      <p class="mb-4">
      Angular is a comprehensive platform for building web and mobile applications. It's maintained by Google and offers a robust framework that simplifies the development process. Here are five key points that make Angular an excellent choice for clients:
      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Modularity and Reusability</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Cross-Platform Capability</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Enhanced Performance</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Strong Community and Suppor</span>
        </li>
      </ul>
    </div>
  </div>
</div>



<div class="relative flex flex-col md:flex-row items-center md:items-start p-6"style={{backgroundColor:"#f7f7f5"}} id='JTL'>
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
  <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">JTL</h1>
    <p class="text-lg mb-4">
    JTL (Job Time Logger) is a versatile website designed to enhance productivity and streamline time management for clients across various industries. Here are  points highlighting its benefits for clients:
    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Efficient Time Tracking
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Customizable Reporting
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Task Prioritization
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Collaboration Tools
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/ris-development-blogbeitrag-jtl-shop5-850x619.jpg')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>
   </>
  )
}
