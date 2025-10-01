import {Link} from 'react-router-dom'
import React from 'react';
import './Footer.css'; 
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { SiSap } from "react-icons/si";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="relative w-full">
                <img className="w-full h-auto" src={require('../../img/Wave_grey_bottom_left_shape_01.png')} alt="" />
            </div>
            
            <div className="relative text-black py-10" style={{background:"#f7f7f5"}}>
                {/* Footer Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {/* Footer Column 1 */}
                        <div>
                            <h4 className="font-bold mb-4 text-[#081bca]">About Us</h4>
                            <ul>
                                <li className="mb-2"><Link to="/about" className="text-[#081bca] hover:text-[#081bca]/70">Our Story</Link></li>
                                <li className="mb-2"><Link to="/about#team" className="text-[#081bca] hover:text-[#081bca]/70">Team</Link></li>
                                <li className="mb-2"><Link to="/careers" className="text-[#081bca] hover:text-[#081bca]/70">Careers</Link></li>
                            </ul>
                        </div>

                        {/* Footer Column 2 */}
                        <div>
                            <h4 className="font-bold mb-4 text-[#081bca]">Services</h4>
                            <ul>
                                <li className="mb-2"><Link to="/service/application" className="text-[#081bca] hover:text-[#081bca]/70">AI & Intelligent Solutions</Link></li>
                                <li className="mb-2"><Link to="/service/website" className="text-[#081bca] hover:text-[#081bca]/70">Website Development</Link></li>
                                <li className="mb-2"><Link to="/service/microsoft" className="text-[#081bca] hover:text-[#081bca]/70">SAP Digital Transformation</Link></li>
                                <li className="mb-2"><Link to="/service/database" className="text-[#081bca] hover:text-[#081bca]/70">Data Science & Analytics</Link></li>
                                <li className="mb-2"><Link to="/service/testing" className="text-[#081bca] hover:text-[#081bca]/70">Testing & Validation</Link></li>
                                <li className="mb-2"><Link to="/service/testing" className="text-[#081bca] hover:text-[#081bca]/70">Projects & Consulting</Link></li>
                            </ul>
                        </div>

                        {/* Footer Column 3 */}
                        <div>
                            <h4 className="font-bold mb-4 text-[#081bca]">Support</h4>
                            <ul>
                                <li className="mb-2"><Link to="/contact" className="text-[#081bca] hover:text-[#081bca]/70">Contact Us</Link></li>
                            </ul>
                            <p className='text-[#081bca]'>204, 2nd Floor, Shanthi Enclave, Madhavi Nagar,<br />
                            Kukatpally,<br /> Hyderabad-500 072, <br />India</p>
                            <div className="-ml-3 md:ml-0">
                                <p className="text-[#081bca]">        
                                +91-8341615422: INDIA<br /> +966-530895317: KSA</p>
                            </div>
                        </div>

                        {/* Footer Column 4 */}
                        <div>
                            <h4 className="font-bold mb-4 text-[#081bca]">Follow Us</h4>
                            <div className="flex space-x-1.5">
                                <Link to="https://www.facebook.com/share/1GZGd3LriM/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaFacebook style={{fontSize:"30px",color:"blue"}}/>
                                </Link>
                                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaXTwitter style={{fontSize:"30px",color:"#1DA1F2"}}/>
                                </Link>
                                <Link to="https://www.instagram.com/hadi359862023/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaInstagram style={{fontSize:"30px", color:"#fa7e1e"}}/>
                                </Link>
                                <Link to="https://www.linkedin.com/in/abdul-hadi-6ba9b6180/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaLinkedin style={{fontSize:"30px", color:"#0072b1"}}/>
                                </Link>
                                <Link to="https://whatsapp.com/channel/0029VbBTyHwCMY0C0Cvar2I024" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaWhatsapp style={{fontSize:"30px", color:"#0cc243"}}/>
                                </Link>
                                <Link to="https://whatsapp.com/channel/0029VbBM6Yo6LwHmsVHmyo3a" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaWhatsapp style={{fontSize:"30px", color:"#0cc243"}}/>
                                </Link>
                                <Link to="https://www.youtube.com/watch?v=FamY8fPUyLs&t=8s" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FaYoutube style={{fontSize:"40px", color:"#eb0909ff"}}/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Text */}
                    <div className="text-center mt-8 text-[#081bca]">
                        <Link to="https://zen-py.com/">
                            <p>&copy; 2025: zen py. All rights reserved.</p>
                            <p></p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
