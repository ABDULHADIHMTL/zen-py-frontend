import { useEffect } from "react";
import React from 'react'
import './service.css'
import { IoMdArrowDropright } from "react-icons/io";
import { useLocation, Link } from 'react-router-dom';

export default function Testing() {
// location and id
const location = useLocation();

useEffect(() => {
  let sectionId = null;
  
  if (location.hash === '#Penetration') {
    sectionId = 'Penetration';
  } else if (location.hash === '#Agile') {
    sectionId = 'Agile';
  } else if (location.hash === '#API') {
    sectionId = 'API';
  } else if (location.hash === '#Automation') {
    sectionId = 'Automation';
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
          const textElement = document.getElementById('testing-text');
          const backgroundElement = document.getElementById('testing-background');
          const scrollY = window.scrollY;
              textElement.style.transform = `translateY(-${scrollY * 1}px)`;
              backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      useEffect(() => {
        const handleScroll = () => {
          const textElement = document.getElementById('testing-text1');
          const backgroundElement = document.getElementById('testing-background1');
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
 <div id="testing-background"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"></div>
      <div id="testing-text"  className="relative z-10 lg:top-64 md:top-64 top-20 text-white lg:ml-[30%] md:ml-24 ml-5"> 
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
        Testing and Validation</h2> 
      
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
      <h2 class="text-3xl font-bold mb-4 gradient-text text-transparent">Software testing and validation</h2>
      <p class="mb-4">
      The vital phase in a software development lifecycle is Testing which implements bug-free code and full performing application. Testing and validation ensure quality and continuity in business applications. Testing involves validating the developed software through various stages to meet accuracy. Technical errors are identified during this phase, and an incident is raised for issues, if any. Validation is a dynamic mechanism that warrants an application for its expected functionality and anticipated outcomes.
      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Test scope and approach</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/><span>Test strategy</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Environment for support</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Test development</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Test case execution</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Defect Management</span>
        </li>
      </ul>
    </div>

    <div class="w-full lg:w-2/3 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/penetration-1.png')}
            alt="Magento"
            class="w-[150px] h-[130px] object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Penetration Testing</h3>
          <Link to='/service/testing#Penetration' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/agile-project-mangement.png')}
            alt="Shopware"
            class="w-[150px] h-[130px] object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Agile/DevOps Testing</h3>
          <Link to='/service/testing#Agile' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/API.png')}
            alt="WooCommerce"
            class="w-[150px] h-[130px] object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">API Testing</h3>
          <Link to='/service/testing#API' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/test_automation.png')}
            alt="JTL Shop"
            class="w-[150px] h-[130px] object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Test Automation</h3>
          <Link to='/service/testing#Automation' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
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
      <div id="testing-background1"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_450px] bg-fixed"></div>
      <div id="testing-text1"  className="relative z-10  text-white ml-20 lg:ml-52 md:ml-40 top-[600px] md:top-[650px] lg:top-[700px]"> 
        <h2 className="text-4xl font-bold mb-4">
        Performing a test plan that <br /> drives efficiency and plus <br /> innovation</h2> 
        <p>Prequesites are analyzed, defining various test approaches for clarity and usability.</p>
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

<div class=" relative mx-auto p-4 " style={{backgroundColor:"#f7f7f5"}} id='Penetration'>
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/penetration-1.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">Penetration Testing</h2>
      <p class="mb-4">
      Penetration testing helps determine unauthorised access from malicious users, detecting vulnerabilities and ensuring security. A kind of ethical hacking where pen tests are carried out through execution standards.
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


<div class=" relative flex flex-col md:flex-row items-center md:items-start p-6" style={{backgroundColor:"#f7f7f5"}} id='Agile'>
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
       <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">Agile/DevOps Testing</h1>
    <p class="text-lg mb-4">
    Agile development structures software development for consistency, flexibility, and cohesive interaction. DevOps automation testing in an Agile environment is executed through iterative testing procedures, leveraging extensive functionality reducing time and cost. DevOps testing approach involves QA implementation, strategy and planning cloud test environments, and continuous monitoring after release.
    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Agile Development
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Continuous Integration
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Iterative Testing
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Maintenance and Production Support
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/agile-project-mangement.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>


<div class="relative mx-auto p-4 "style={{backgroundColor:"#f7f7f5"}} id='Automation' >
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/test_automation.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">
      Test Automation</h2>
      <p class="mb-4">
      Test Automation plays a vital role in ensuring rapid test execution and deploying a continuous testing approach. Test automation process is a cost-effective method for regression testing of software products. Test automation delivers robust support, CI system integrations, and scalable tests.
      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Defining Automation Scope</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Framework Implementation</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Automated Test Developments</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Result Analysis and Reporting</span>
        </li>
      </ul>
    </div>
  </div>
</div>



<div class="relative flex flex-col md:flex-row items-center md:items-start p-6"style={{backgroundColor:"#f7f7f5"}} id='API' >
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
  <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">API Testing</h1>
    <p class="text-lg mb-4">
    API testing a testing type that validates the Application Programming interface with the purpose to evaluate software performance, functionality, security, and reliability. API is an intermediate layer in an application bridging the user interface and the application database. API test environment requires a complex setup, clear understanding of API functionality, test case execution and comparison of results.
    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Test Case Development
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Execution and Reporting
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Specification Review and Development
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Framework Development
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/API.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>

    </>
  )
}
