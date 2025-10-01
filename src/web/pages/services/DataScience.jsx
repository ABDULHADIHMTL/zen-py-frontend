import { useEffect } from "react";
import React from 'react'
import './service.css'
import { IoMdArrowDropright } from "react-icons/io";
import { useLocation, Link } from 'react-router-dom';


export default function Database() {
// location and id
const location = useLocation();

useEffect(() => {
  let sectionId = null;
  
  if (location.hash === '#SQL') {
    sectionId = 'SQL';
  } else if (location.hash === '#MYSQL') {
    sectionId = 'MYSQL';
  } else if (location.hash === '#MongoDB') {
    sectionId = 'MongoDB';
  } else if (location.hash === '#AWS') {
    sectionId = 'AWS';
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
      const textElement = document.getElementById('database-text');
      const backgroundElement = document.getElementById('database-background');
      const scrollY = window.scrollY;
          textElement.style.transform = `translateY(-${scrollY * 1}px)`;
          backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('database-text1');
      const backgroundElement = document.getElementById('database-background1');
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
 <div id="database-background"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"></div>
      <div id="database-text"  className="relative z-10 lg:top-64 md:top-64 top-20 text-white lg:ml-[30%] md:ml-24 ml-5"> 
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
        Customized database<br /> Management</h2> 
      
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
      <h2 class="text-3xl font-bold mb-4 gradient-text text-transparent">Data Organization and Accessibility</h2>
      <p class="mb-4">

  
A database is a structured collection of data that is organized in a way that allows efficient retrieval, management, and updating of information. It serves as a central repository where data is stored and can be accessed by various users or applications. Databases are fundamental to modern information systems and play a crucial role in enabling businesses and organizations to organize, analyze, and utilize their data effectively.          </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Data Integrity and Security</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/><span>Scalability and Performance</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Data Analysis and Decision Making</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Integration and Collaboration</span>
        </li>
      </ul>
    </div>

    <div class="w-full lg:w-2/3 p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/sql.png')}
            alt="Magento"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">SQL</h3>
          <Link to='/service/database#SQL' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/mysql.png')}
            alt="Shopware"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">MYSQL</h3>
          <Link to='/service/database#MYSQL' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/mongo.png')}
            alt="WooCommerce"
            class="w-[70%] h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">MongoDB</h3>
          <Link to='/service/database#MongoDB' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-4">
          <img
            src={require('../../../img/aws.png')}
            alt="JTL Shop"
            class="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">AWS</h3>
          <Link to='/service/database#AWS' class="bg-blue-500 text-white px-4 py-2 rounded-full" >Read More</Link>
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
      <div id="database-background1"  className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_450px] bg-fixed"></div>
      <div id="database-text1"  className="relative z-10  text-white ml-20 lg:ml-52 md:ml-40 top-[600px] md:top-[650px] lg:top-[700px]"> 
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

<div class=" relative mx-auto p-4 " style={{backgroundColor:"#f7f7f5"}} id="SQL">
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/sql.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">SQL</h2>
      <p class="mb-4">

      SQL, or Structured Query Language, is a standardized programming language used for managing and manipulating relational databases. Its primary function is to interact with data stored in a database, allowing users to execute queries, update records, manage tables, and perform various other data-related operations. SQL is essential in the field of data management due to its powerful and versatile nature, which can handle large amounts of data efficiently.      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Improved Data Management</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/><span>Enhanced Data Security</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Scalability</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Real-time Data Access</span>
        </li>
      </ul>
    </div>
  </div>
</div>


<div class=" relative flex flex-col md:flex-row items-center md:items-start p-6" style={{backgroundColor:"#f7f7f5"}} id="MYSQL">
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
       <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">MYSQL</h1>
    <p class="text-lg mb-4">
    MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) to manage and manipulate data. Developed by MySQL AB and now owned by Oracle Corporation, MySQL is a widely used database for web applications and many other software environments. Known for its speed, reliability, and ease of use, MySQL supports various operating systems, including Windows, Linux, and macOS. It is also highly compatible with different programming languages, making it a versatile choice for developers    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> High Performance
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Community Support and Documentation
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Iterative database
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Security
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/mysql.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>


<div class="relative mx-auto p-4 "style={{backgroundColor:"#f7f7f5"}} id="MongoDB">
<div className="absolute animated-element bottom-10 -right-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
      </div>
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 p-4">
      <img    src={require('../../../img/mongo.png')} alt="Magento Diagram" class="w-full h-auto" />
    </div>
    <div class="w-full md:w-1/2 p-4">
      <h2 class="text-3xl font-bold mb-4">
      MongoDB</h2>
      <p class="mb-4">
      MongoDB is a leading NoSQL database that has gained popularity for its scalability, flexibility, and performance. Unlike traditional relational databases, MongoDB stores data in a flexible, JSON-like format called BSON (Binary JSON). This allows for the storage of complex data structures without the need for a fixed schema. MongoDB’s document-oriented model enables developers to store, retrieve, and manage data efficiently, making it an ideal choice for modern applications that require rapid development and real-time data processing.      </p>
      <ul class="list-none space-y-2">
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>High Performance</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>High Availability and Reliability</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Stored Data in JSON Formate</span>
        </li>
        <li class="flex items-center">
        <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> <span>Result Analysis and Reporting</span>
        </li>
      </ul>
    </div>
  </div>
</div>



<div class="relative flex flex-col md:flex-row items-center md:items-start p-6"style={{backgroundColor:"#f7f7f5"}} id="AWS">
<div className="absolute animated-element bottom-10 -left-0 ">
       <img className="w-20 md:w-32 lg:w-52" src={require('../../../img/floating_image_04.png')} alt="" />
      </div>
  <div class="md:w-1/2 p-4">
    <h1 class="text-4xl font-bold mb-4">AWS</h1>
    <p class="text-lg mb-4">

    Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon. Launched in 2006, AWS offers a wide range of services, including computing power, storage options, and networking capabilities, designed to help businesses scale and grow. It is one of the most widely used cloud platforms in the world, trusted by millions of customers for its reliability, scalability, and robust security.

AWS operates on a pay-as-you-go pricing model, allowing businesses to pay only for the services they use, without upfront costs or long-term commitments. This flexibility makes it accessible to startups, enterprises, and government agencies alike. The platform includes more than 200 fully-featured services from data centers globally. Popular services include Amazon EC2 (Elastic Compute Cloud), Amazon S3 (Simple Storage Service), and Amazon RDS (Relational Database Service).    </p>
    <ul class="space-y-2">
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Global Reach
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Innovation
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Support and Resources
      </li>
      <li class="flex items-center">
      <IoMdArrowDropright  style={{fontSize:"25px" ,color:"#F05941"}}/> Advanced security features, compliance certifications
      </li>
    </ul>
  </div>
  <div class="md:w-1/2 p-4">
    <img    src={require('../../../img/aws.png')} alt="Shopware illustration" class="w-full h-auto" />
  </div>
</div>

   </>
  )
}
