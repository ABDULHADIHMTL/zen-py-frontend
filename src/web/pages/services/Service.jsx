import React, { useEffect } from 'react'
import './service.css'
import { Link } from 'react-router-dom';
export default function Service() {
    useEffect(() => {
        const handleScroll = () => {
          const textElement = document.getElementById('parallax-text');
          const backgroundElement = document.getElementById('parallax-background');
          const scrollY = window.scrollY;
              textElement.style.transform = `translateY(-${scrollY * 1}px)`;
              backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;  };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      useEffect(() => {
        const handleScroll = () => {
          const textElement = document.getElementById('parallax-text1');
          const backgroundElement = document.getElementById('parallax-background1');
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
<div id="parallax-background" className="absolute inset-0  bg-fixed lg:bg-cover md:bg-[length:800px_400px] bg-[length:500px_350px]"></div>
  <div id="parallax-text" className="relative z-10 top-32 md:top-64 text-black ml-2 md:ml-16 lg:ml-32 text-center md:text-left">
    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-blue-900">
    Elevate Your Business  <br />with Innovative web Solutions
    </h2>
    <p className="text-sm md:text-base lg:text-3xl">
      Explore our comprehensive services to craft dynamic web experiences that engage your audiance, <br />
       enhance your brand, and drive your success. Partner with us to transform your vision <br />
        into a digital reality tailored to drive your success.
    </p>
  </div>
  <div className="absolute animated-element bottom-10 -left-10 z-10">
    <img className="w-20 md:w-32 lg:w-52 xl:w-96" src={require('../../../img/floating_image_05.png')} alt="" />
  </div>
  <div className="absolute animated-element bottom-10 -right-0 z-10">
    <img className="w-16 md:w-24 lg:w-32 xl:w-52" src={require('../../../img/floating_image_08.png')} alt="" />
  </div>
  <div className="absolute -bottom-1 w-full">
    <img src={require('../../../img/bottom_wave_02_gray.png')} alt="" />
  </div>
</div>








{/* one third row */}

<div className="bg-zinc-50 dark:white p-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
    <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
      <h2 className="text-3xl font-bold gradient-text text-transparent">Why are we best?</h2>
      <p className="text-zinc-900 mb-8 md:mb-0">
      Discover why zen py Technoliges stands out: We combine cutting-edge solutions with a commitment to client success, driving ROI and fostering lasting brand loyalty.<br /> zen py offers unmatched value: With a focus on innovation and client satisfaction,
      we elevate businesses with solutions that drive profitability, enhance brand reputation, and attract new opportunities.      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-1/2">
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <img src={require('../../../img/team4.jpg')} alt="Certified Team" className="mx-auto mb-4 w-1/2 md:w-full"/>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Certified Team</h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          Deploying well-skilled and highly organized core team in all domains
        </p>
      </div>
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <img src={require('../../../img/seo1.jpg')} alt="SEO Friendly Markup" className="mx-auto mb-4 w-1/2 md:w-full"/>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">SEO Friendly Markup</h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          Optimizing website content for high rankings and better reach
        </p>
      </div>
    </div>
  </div>
</div>
            
{/* forth row */}
            
<div className="block lg:flex gap-4 p-6 bg-zinc-100 dark:bg-zinc-100">
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
    <img src={require('../../../img/mobile.jpg')} alt="Mobile First Approach" className="mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-center mb-2  text-zinc-800 dark:text-zinc-200">Mobile First Approach</h3>
    <p className="text-center text-zinc-600 dark:text-zinc-400 mb-2">With mobility as kingpin we build responsive applications</p>
    <p className="text-center text-zinc-800 dark:text-zinc-200">High</p>
  </div>
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
    <img src={require('../../../img/loudspeaker.png')} alt="High Touch Communication" className="mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-center mb-2  text-zinc-800 dark:text-zinc-200">High Touch Communication</h3>
    <p className="text-center text-zinc-600 dark:text-zinc-400 mb-2">Highly interactive and in good relationship with clients</p>
  </div>
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
    <img src={require('../../../img/software.png')} alt="Automation" className="mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-center mb-2  text-zinc-800 dark:text-zinc-200">Automation</h3>
    <p className="text-center text-zinc-600 dark:text-zinc-400 mb-2">Comparing results for accuracy to build effective products</p>
    <p className="text-center text-zinc-800 dark:text-zinc-200">Agile</p>
  </div>
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/4">
    <img src={require('../../../img/3d.png')} alt="Architecture" className="mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-center mb-2  text-zinc-800 dark:text-zinc-200">Architecture</h3>
    <p className="text-center text-zinc-600 dark:text-zinc-400 mb-2">Analyse technically to define roadmaps and to provide alternate solutions</p>
  </div>
</div>





{/* scroll second */}
<div className="relative overflow-hidden"  id='service_scrollimg'>
  <div id="parallax-background1" className="absolute inset-0 bg-fixed lg:bg-cover md:bg-[length:800px_400px] bg-[length:370px_350px]"></div>
  <div id="parallax-text1" className="relative z-10 text-white ml-4 md:ml-20 lg:ml-52" >
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
      Our process reaches all <br /> digital drifts to bring in <br /> prudent results
    </h2>
    <p className="text-sm md:text-base lg:text-lg">Strengthening client relationships through our top-notch services</p>
  </div>
  <div className="absolute animated-element bottom-10 -left-10 z-10">
    <img className="w-16 md:w-32 lg:w-52" src={require('../../../img/floating_image_05.png')} alt="" />
  </div>
  <div className="absolute animated-element bottom-10 right-0 z-10">
    <img className="w-10 md:w-20 lg:w-32" src={require('../../../img/floating_image_08.png')} alt="" />
  </div>
  <div className="absolute bottom-0 w-full">
    <img className="w-full" src={require('../../../img/bottom_wave_02_gray.png')} alt="" />
  </div>
  <div className="absolute top-0 w-full">
    <img className="w-full" src={require('../../../img/top_wave_02.png')} alt="" />
  </div>
</div>
        

       {/* hero third */}
       <div class="flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12 bg-white">
  <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
    <img src={require('../../../img/ecommerce.png')} alt="E-Commerce Development" className="w-full lg:w-[400px] lg:ml-10" />
  </div>
  <div class="w-full lg:w-1/2 lg:pl-12">
    <h2 class="text-3xl font-bold mb-4">Website Development</h2>
    <p class="text-lg mb-6">
    We specialize in crafting versatile web applications and websites that enhance your online presence. Our solutions are meticulously designed for seamless integration with various extensions, ensuring your platform stands out and excels globally.    </p>
    <ul class="mb-6">
      <li class="flex items-center mb-2">
        <span>Enhanced Online Presence</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Seamless Integration</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Global Thrive</span>
      </li>
    </ul>
    <Link to="/service/website" class="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Read More</Link>
  </div>
</div>

<div class="flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12">
  <div class="w-full lg:w-1/2 lg:pl-12 order-last lg:order-first  text-zinc-200 dark:text-zinc-200">
    <h2 class="text-3xl font-bold mb-4">Mobile Application Development</h2>
    <p class="text-lg mb-6">
    We excel in developing cutting-edge mobile applications that enhance user interaction and boost business performance. Our solutions ensure intuitive user experiences and reliable functionality across both iOS and Android    </p>
    <ul class="mb-6 ">
      <li class="flex items-center mb-2">
        <span>Engaging User Experiences</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Platform Compatibility</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Business Impact</span>
      </li>
    </ul>
    <Link to="/service/application" class="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Read More</Link>
  </div>
  <div class="w-full lg:w-1/2 mb-6 lg:mb-0 order-first lg:order-last">
    <img src={require('../../../img/android.png')} alt="E-Commerce Development" className="w-full lg:w-[400px] lg:ml-10" />
  </div>
</div>

<div class="flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12 bg-white">
  <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
    <img src={require('../../../img/sharepoint.png')} alt="E-Commerce Development" className="w-full lg:w-[400px] lg:ml-10" />
  </div>
  <div class="w-full lg:w-1/2 lg:pl-12">
    <h2 class="text-3xl font-bold mb-4">MicroSoft Development</h2>
    <p class="text-lg mb-6">
    We excel in harnessing Azure, Power Platform, and SharePoint to deliver customized solutions that drive efficiency and elevate business performance. Our expertise ensures seamless integration and robust functionality across Microsoft platforms, empowering your organization with tailored solutions that meet precise business requirements.    </p>
    <ul class="mb-6">
      <li class="flex items-center mb-2">
        <span>Customized Solutions</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Seamless Integration</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Business Empowerment</span>
      </li>
    </ul>
    <Link to="/service/microsoft" class="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Read More</Link>
  </div>
</div>

<div class="flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12">
  <div class="w-full lg:w-1/2 lg:pl-12 order-last lg:order-first  text-zinc-200 dark:text-zinc-200">
    <h2 class="text-3xl font-bold mb-4">Testing and Validation</h2>
    <p class="text-lg mb-6">
    we specialize in comprehensive testing and validation services to ensure the quality and reliability of your software solutions. Utilizing industry-leading practices and tools, we deliver meticulous testing across all stages of development, guaranteeing seamless performance and user satisfaction.    </p>
    <ul class="mb-6">
      <li class="flex items-center mb-2">
        <span>Comprehensive Testing</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Industry-Leading Practices</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Quality Assurance</span>
      </li>
    </ul>
    <Link to="/service/testing" class="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Read More</Link>
  </div>
  <div class="w-full lg:w-1/2 mb-6 lg:mb-0 order-first lg:order-last">
    <img src={require('../../../img/API.png')} alt="E-Commerce Development" className="w-full lg:w-[400px] lg:ml-10" />
  </div>
</div>

<div class="flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12 bg-white">
  <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
    <img src={require('../../../img/sql.png')} alt="E-Commerce Development" className="w-full lg:w-[400px] lg:ml-10" />
  </div>
  <div class="w-full lg:w-1/2 lg:pl-12">
    <h2 class="text-3xl font-bold mb-4">DataBase Management </h2>
    <p class="text-lg mb-6">
    we specialize in robust database solutions designed to optimize data management and drive business efficiency. Leveraging advanced technologies and industry best practices, we deliver scalable and secure database solutions tailored to meet your organization's specific needs.    </p>
    <ul class="mb-6">
      <li class="flex items-center mb-2">
        <span>Optimized Data Management</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Advanced Technologies</span>
      </li>
      <li class="flex items-center mb-2">
        <span>Scalability and Security</span>
      </li>
    </ul>
    <Link to="/service/database" class="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Read More</Link>
  </div>
</div>




        </>
    )
}
