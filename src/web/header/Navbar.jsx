import React, { useState, useEffect } from 'react';
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Add this import at the top
import { FcServices } from "react-icons/fc";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaMobileRetro } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { LuDatabaseBackup } from "react-icons/lu";
import { SiPytest } from "react-icons/si";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GiGroundSprout } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdArrowForward } from "react-icons/io";
import ScrollToTop from '../../ScrollToTop';
import { FaRobot } from "react-icons/fa";
import { SiSap } from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import logoZen3 from '../../img/logozen3.png';
import {petgoldbar} from '../../img/pet-gold-bar.png';

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [erpOpen, setErpOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);
  const [mobileErpOpen, setMobileErpOpen] = useState(false);
  const [mobileCorporateOpen, setMobileCorporateOpen] = useState(false);

  // Handle scrolling to change background color
  const handleScroll = () => {
    if (window.scrollY > 220) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setIsOpen(false);
    setErpOpen(false);
    setCorporateOpen(false);
    setMobileErpOpen(false);
    setMobileCorporateOpen(false);
  };

  // Close menu when the location changes
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    setIsOpen(false);
    setErpOpen(false);
    setCorporateOpen(false);
    setMobileErpOpen(false);
    setMobileCorporateOpen(false);
  }, [location]);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle ERP dropdown on desktop
  const toggleErp = (e) => {
    e.stopPropagation();
    setErpOpen(!erpOpen);
    if (erpOpen) setCorporateOpen(false);
  };

  // Toggle Corporate dropdown on desktop
  const toggleCorporate = (e) => {
    e.stopPropagation();
    setCorporateOpen(!corporateOpen);
    if (corporateOpen) setErpOpen(false);
  };

  // Toggle ERP dropdown on mobile
  const toggleMobileErp = () => {
    setMobileErpOpen(!mobileErpOpen);
    if (mobileErpOpen) setMobileCorporateOpen(false);
  };

  // Toggle Corporate dropdown on mobile
  const toggleMobileCorporate = () => {
    setMobileCorporateOpen(!mobileCorporateOpen);
    if (mobileCorporateOpen) setMobileErpOpen(false);
  };

  return (
    <>
      <ScrollToTop />

      <nav className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#081bca]' : 'lg:bg-transparent bg-gray-900'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex space-x-8">
              <Link onClick={handleLinkClick} to="/" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium flex group">
                <IoHome style={{ fontSize: "25px", color: "white", marginRight: '6px' }} />Home
              </Link>
              <Link onClick={handleLinkClick} to="/about" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium flex group">
                <FaEarthAmericas style={{ fontSize: "25px", color: "white", marginRight: '6px' }} />About
              </Link>
              <div className="relative group">
                <Link to="/service" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium flex">
                  <FcServices style={{ fontSize: "25px", color: "ffa000", marginRight: '6px' }} />Services
                </Link>
                <div className="absolute left-0 hidden mt-0 w-64 bg-gray-800 shadow-lg group-hover:block pt-1 pb-1">
                  <Link onClick={handleLinkClick} to="/service/ai" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 flex items-center">
                    <FaRobot className="mr-2 mt-0.5" /> AI & Intelligent Solutions
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/website" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 flex items-center">
                    <FaLaptopCode className="mr-2 mt-0.5" /> Web Development
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/sap" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 flex items-center">
                    <SiSap className="mr-2 mt-0.5" /> SAP Digital Transformation
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/datascience" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 flex items-center">
                    <BiBrain className="mr-2 mt-0.5" /> Data Science & Analytics
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/testing" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 flex items-center">
                    <SiPytest className="mr-2 mt-0.5" /> Testing & Validation
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/projects" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 flex items-center">
                    <RiLightbulbFlashFill className="mr-2 mt-0.5" /> Projects & Consulting
                  </Link>
                  
                  {/* ERP Consulting with nested dropdown */}
                  <div className="relative submenu-item">
                    <div onMouseEnter={toggleErp} className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 flex items-center justify-between cursor-pointer">
                      <span>ERP Consulting</span>
                      <IoMdArrowForward className={`transform transition-transform ${erpOpen ? 'rotate-90' : ''}`} />
                    </div>
                    {erpOpen && (
                      <div className="absolute left-full top-0 ml-0 w-48 bg-gray-900 shadow-lg">
                        <Link onClick={handleLinkClick} to="/service/erp/sap" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 block">
                          SAP Consulting
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* Corporate with nested dropdown */}
                  <div className="relative submenu-item">
                    <div onMouseEnter={toggleCorporate} className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 flex items-center justify-between cursor-pointer">
                      <span>Corporate</span>
                      <IoMdArrowForward className={`transform transition-transform ${corporateOpen ? 'rotate-90' : ''}`} />
                    </div>
                    {corporateOpen && (
                      <div className="absolute left-full top-0 ml-0 w-72 bg-gray-900 shadow-lg">
                        <Link onClick={handleLinkClick} to="/corporate/sap-training" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 block">
                          SAP Training
                        </Link>
                        
                        <Link onClick={handleLinkClick} to="/corporate/web-training" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 block">
                          Web Designer Training
                        </Link>
                        <Link onClick={handleLinkClick} to="/corporate/data-training" className="px-4 py-1 text-sm text-white hover:bg-gray-700 hover:text-green-500 block">
                          Data Science & Analytics Training
                        </Link>
                        <Link to="/corporate/powerbi-training" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                          Power BI Training
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Link onClick={handleLinkClick} to="/" className="text-xl font-bold text-white"><img src={require('../../img/pet-gold-bar1.png')} alt="" className='h-12 w-10 ml-16' />zen py</Link>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link onClick={handleLinkClick} to="/vision" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium flex">
                <TbDeviceVisionPro style={{ fontSize: "25px", color: "white", marginRight: '6px' }} />Vision
              </Link>
              <Link onClick={handleLinkClick} to="/career" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium flex">
                <GiGroundSprout style={{ fontSize: "25px", color: "dark_green", marginRight: '6px' }} />Career
              </Link>
              <Link onClick={handleLinkClick} to="/contact" className="text-white hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium flex">
                <MdContacts style={{ fontSize: "25px", color: "white", marginRight: '6px' }} />Contact
              </Link>
              
            </div>
            <div className="flex lg:hidden ">
              <button onClick={toggleMenu} type="button" className="text-gray-500 hover:text-red focus:outline-none">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <Link onClick={handleLinkClick} to="/" className="text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium flex"><IoHome style={{ fontSize: "25px", color: "ffa000", marginRight: '3px' }} /> Home</Link>
            <Link onClick={handleLinkClick} to="/about" className="text-white hover:text-orange-500 flex px-3 py-2 rounded-md text-base font-medium"><FaEarthAmericas style={{ fontSize: "25px", color: "ffa000", marginRight: '3px' }} />About</Link>
            
            <div className="relative">
              <button onClick={toggleDropdown} className="text-white hover:text-orange-500 w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center">
                <span className="flex items-center">
                  <FcServices style={{ fontSize: "25px", color: "ffa000", marginRight: '3px' }} />Services
                </span>
                <IoMdArrowDropdown style={{ fontSize: "25px", color: "#ffffff" }} className={`transform ${menuOpen ? 'rotate-180' : ''}`} />
              </button>
              {menuOpen && (
                <div className="pl-6 mt-1 space-y-1">
                  <Link onClick={handleLinkClick} to="/service/ai" className="block px-3 py-1 text-sm text-white hover:text-orange-500 flex items-center">
                    <FaRobot className="mr-2 mt-0.5" /> AI & Intelligent Solutions
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/website" className="block px-3 py-1 text-sm text-white hover:text-orange-500 flex items-center">
                    <FaLaptopCode className="mr-2 mt-0.5" /> Web Development
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/sap" className="block px-3 py-1 text-sm text-white hover:text-orange-500 flex items-center">
                    <SiSap className="mr-2 mt-0.5" /> SAP Digital Transformation
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/datascience" className="block px-3 py-1 text-sm text-white hover:text-orange-500 flex items-center">
                    <BiBrain className="mr-2 mt-0.5" /> Data Science & Analytics
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/testing" className="block px-3 py-1 text-sm text-white hover:text-orange-500 flex items-center">
                    <SiPytest className="mr-2 mt-0.5" /> Testing & Validation
                  </Link>
                  <Link onClick={handleLinkClick} to="/service/projects" className="block px-3 py-1 text-sm text-white hover:text-orange-500 flex items-center">
                    <RiLightbulbFlashFill className="mr-2 mt-0.5" /> Projects & Consulting
                  </Link>
                  
                  {/* ERP Consulting for Mobile */}
                  <div>
                    <button onClick={toggleMobileErp} className="w-full text-left px-3 py-1 text-sm text-white hover:text-orange-500 flex justify-between items-center">
                      <span>ERP Consulting</span>
                      <IoMdArrowForward className={`transform transition-transform ${mobileErpOpen ? 'rotate-90' : ''}`} />
                    </button>
                    {mobileErpOpen && (
                      <div className="pl-6 mt-1 space-y-1">
                        <Link onClick={handleLinkClick} to="/service/erp/sap" className="block px-3 py-1 text-xs text-white hover:text-orange-500">
                          SAP Consulting
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* Corporate for Mobile */}
                  <div>
                    <button onClick={toggleMobileCorporate} className="w-full text-left px-3 py-1 text-sm text-white hover:text-orange-500 flex justify-between items-center">
                      <span>Corporate</span>
                      <IoMdArrowForward className={`transform transition-transform ${mobileCorporateOpen ? 'rotate-90' : ''}`} />
                    </button>
                    {mobileCorporateOpen && (
                      <div className="pl-6 mt-1 space-y-1">
                        <Link onClick={handleLinkClick} to="/corporate/sap-training" className="block px-3 py-1 text-xs text-white hover:text-orange-500">
                          SAP Training
                        </Link>
                        
                        <Link onClick={handleLinkClick} to="/corporate/web-training" className="block px-3 py-1 text-xs text-white hover:text-orange-500">
                          Web Designer Training
                        </Link>
                        <Link onClick={handleLinkClick} to="/corporate/data-training" className="block px-3 py-1 text-xs text-white hover:text-orange-500">
                          Data Science & Analytics Training
                        </Link>
                        <Link to="/corporate/powerbi-training" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                         Power BI Training
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link onClick={handleLinkClick} to="/vision" className="text-white hover:text-orange-500 flex px-3 py-2 rounded-md text-base font-medium"><TbDeviceVisionPro style={{ fontSize: "25px", color: "ffa000", marginRight: '3px' }} />Vision</Link>
            <Link onClick={handleLinkClick} to="/career" className="text-white hover:text-orange-500 flex px-3 py-2 rounded-md text-base font-medium"><GiGroundSprout style={{ fontSize: "25px", color: "ffa000", marginRight: '3px' }} />Career</Link>
            <Link onClick={handleLinkClick} to="/contact" className="text-white hover:text-orange-500 flex px-3 py-2 rounded-md text-base font-medium"><MdContacts style={{ fontSize: "25px", color: "ffa000", marginRight: '3px' }} />Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
