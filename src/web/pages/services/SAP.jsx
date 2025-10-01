import { useEffect } from "react";
import React from 'react'
import './service.css'
import { IoMdArrowDropright } from "react-icons/io";
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from "lucide-react";


const SAP = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center">
      {/* ✅ SAP Digital Transformation section */}
      <h2>SAP Digital Transformation</h2>
      <ul className="space-y-5 mt-6 text-left inline-block">
        <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP S/4HANA Migration</li>
        <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP Business Process Automation</li>
        <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP Analytics & Reporting</li>
        <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP Integration with AI & Cloud</li>
        <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP Support & Maintenance</li>
      </ul>

      {/* ✅ Extra section */}
      <div className="mt-6">
        <h3>My Custom SAP Services</h3>
        <p>
          I help businesses unlock the full potential of SAP by combining modern
          AI-driven insights with enterprise-grade ERP solutions.
        </p>
        <p>
          Location path: <strong>{location.pathname}</strong>
        </p>
      </div>
    </div>
  );
};




export default function Microsoft() {
// location and id
const location = useLocation();

useEffect(() => {
  let sectionId = null;
  
  if (location.hash === '#SharePoint') {
    sectionId = 'SharePoint';
  } else if (location.hash === '#Azure') {
    sectionId = 'Azure';
  } else if (location.hash === '#PowerPlateForm') {
    sectionId = 'PowerPlateForm';
  } else if (location.hash === '#SharePointMigration') {
    sectionId = 'SharePointMigration';
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
      const textElement = document.getElementById('microsoft-text');
      const backgroundElement = document.getElementById('microsoft-background');
      const scrollY = window.scrollY;
          textElement.style.transform = `translateY(-${scrollY * 1}px)`;
          backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('microsoft-text1');
      const backgroundElement = document.getElementById('microsoft-background1');
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
 <div id="microsoft-background"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"></div>
      <div id="microsoft-text"  className="relative z-10 lg:top-20 md:top-64 top-10 text-white lg:ml-[5%] md:ml-24 ml-5"> 
        <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold mb-6">
        SAP Digital Transformation – Our Expertise</h2> <br /> 
        <ul className="space-y-5 mt-6 text-left inline-block">
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> AI & Machine Learning Consulting – Empower businesses with predictive insights and intelligent automation.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP Business Process Automation – Streamline operations and eliminate manual inefficiencies.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP Analytics & Reporting with Power BI – Build interactive dashboards for data-driven decision-making.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Enterprise Data Analytics – Transform raw data into actionable strategies across departments.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP Integration with AI & Cloud Platforms – Enhance scalability and connectivity with next-gen technologies.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> End-to-End SAP Consulting & Implementation – From strategy to execution, full lifecycle support.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> SAP Support & Maintenance Services – Ensure continuous optimization and business continuity.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Training in SAP PM Module – Practical, industry-focused training for Plant Maintenance professionals.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Data Science & AI Training Programs – Build future-ready skills in analytics, machine learning, and AI.</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" /> Digital Transformation Roadmaps – Customized strategies to align technology with your business goals.</li>
        </ul>
      
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
      <h2 class="text-3xl font-bold mb-4 gradient-text text-transparent">Microsoft’s products are designed to work seamlessly together</h2>
      <p class="mb-4">
      Microsoft has long been at the forefront of technological development, continuously innovating to provide robust solutions across various industries. The company's extensive range of products and services, from software and operating systems to cloud computing and artificial intelligence, reflects its commitment to driving digital transformation. Key among its developments are Microsoft Azure, a comprehensive cloud computing service; Microsoft 365, an integrated suite of productivity tools; and Dynamics 365, a set of intelligent business applications. These platforms not only enhance productivity but also support scalability, security, and data-driven decision-making for businesses.         </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Enhanced Productivity</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/><span>Independent</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Integration and Interoperability</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Advanced Security</span>
        </li>
      </ul>
    </div>

    <div class="w-full lg:w-2/3 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/sharepoint.png')}
            alt="Magento"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">SharePoint</h3>
          <Link to='/service/microsoft#SharePoint' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/azure.png')}
            alt="Shopware"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Azure</h3>
          <Link to='/service/microsoft#Azure' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/power-platforms-1.png')}
            alt="WooCommerce"
            class="w-full h-[130px] object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Power PlateForm</h3>
          <Link to='/service/microsoft#PowerPlateForm' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/sharepointMigration.png')}
            alt="JTL Shop"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">SharePoint Migration</h3>
          <Link to='/service/microsoft#SharePointMigration' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
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
      <div id="microsoft-background1"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_450px] bg-fixed"></div>
      <div id="microsoft-text1"  className="relative z-10  text-white ml-20 lg:ml-52 md:ml-40 top-[600px] md:top-[650px] lg:top-[700px]"> 
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

<div class=" relative mx-auto p-4 " style={{backgroundColor:"#f7f7f5"}} id='SharePoint'>
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/sharepoint.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">SharePoint</h2>
      <p class="mb-4">
      SharePoint development involves creating and customizing solutions within the Microsoft SharePoint platform to enhance collaboration, document management, and workflow efficiency in organizations. SharePoint developers utilize various tools and technologies, such as SharePoint Framework (SPFx), REST APIs, and Microsoft Power Platform, to build applications, design websites, and integrate third-party systems. The development process includes creating custom web parts, designing interactive dashboards, automating business processes, and ensuring robust security measures. SharePoint's flexibility allows developers to tailor solutions that meet specific business needs, whether it's for internal use, customer-facing portals, or enterprise-wide document management systems.      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Enhanced Collaboration</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/><span>Customized Solutions</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Improved Document Management</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Scalability and Flexibility</span>
        </li>
      </ul>
    </div>
  </div>
</div>


<div class=" relative flex flex-col md:flex-row items-center md:items-start p-6" style={{backgroundColor:"#f7f7f5"}} id='Azure'>
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
       <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">Azure</h1>
    <p class="text-lg mb-4">
    Azure, Microsoft's cloud computing service, offers a robust platform for developing, deploying, and managing applications through a global network of data centers. Azure supports a wide range of programming languages, frameworks, and tools, making it a versatile choice for developers. The platform provides numerous services including virtual machines, databases, and AI tools, which can be integrated to build scalable and resilient applications.    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> DevOps Enablement
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Continuous Integration
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Iterative microsoft
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Maintenance and Production Support
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/azure.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>


<div class="relative mx-auto p-4 "style={{backgroundColor:"#f7f7f5"}} id='PowerPlateForm'>
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/power-platforms-1.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">
      Power Plateform </h2>
      <p class="mb-4">
      Power platform development refers to the creation and customization of applications using Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. These tools allow businesses to analyze data, automate processes, create custom apps, and build chatbots, all without requiring extensive coding knowledge. By leveraging the Power Platform, organizations can drive digital transformation, enhance productivity, and foster innovation.      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Rapid Deployment</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Enhanced Data Insights</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Better Customer Engagement</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Result Analysis and Reporting</span>
        </li>
      </ul>
    </div>
  </div>
</div>



<div class="relative flex flex-col md:flex-row items-center md:items-start p-6"style={{backgroundColor:"#f7f7f5"}} id='SharePointMigration'>
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
  <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">SharePoint Migration</h1>
    <p class="text-lg mb-4">
    Migrating to SharePoint is a strategic move for many organizations aiming to streamline their collaboration, document management, and business process automation. SharePoint, a powerful platform developed by Microsoft, offers robust features that enhance productivity and communication. Migrating to SharePoint involves transferring content, data, and applications from existing systems to the SharePoint environment. This process, known as Power SharePoint Migration, leverages specialized tools and methodologies to ensure a seamless transition with minimal disruption to business operations.    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Improved Document Management
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/>Centralized Information
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/>    Improved Compliance
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Advanced Search Capabilities 
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/sharepointMigration.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>

   </>
  )
}
