import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../pages/services/service.css';
import { FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineMailLock } from 'react-icons/md';
import { TbClockHour3 } from 'react-icons/tb';
import Popup from '../component/Popup';

export default function Contact() {
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('contact-text');
      const backgroundElement = document.getElementById('contact-background');
      const scrollY = window.scrollY;
      textElement.style.transform = `translateY(-${scrollY * 0.50}px)`;
      backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_olcp9xf', 'template_rxu1ky8', form.current, {
        publicKey: 'nkd7lY4bt2KmttPP5',
      })
      .then(
        () => {
          alert('SUCCESSFULL MESSAGE SEND'); // ✅ FIXED: Changed console.alert to alert
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* first hero */}
      <div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[800px] ">
        <div id="contact-background" className="absolute inset-0 lg:bg-cover md:bg-[length:800px_400px] bg-[length:400px_250px] bg-fixed"></div>
        <div id="contact-text" className="relative z-10 lg:top-64 md:top-64 top-20 text-white lg:ml-[30%] md:ml-24 ml-5">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Contact Us</h2>
          <p className="gradient-text text-transparent">Get In Touch With Us.</p>
        </div>
        <div className="absolute animated-element bottom-10 -left-10 z-10">
          <img className="w-32 md:w-52 lg:w-96" src={require('../../img/floating_image_05.png')} alt="" />
        </div>
        <div className="absolute animated-element bottom-10 -right-0">
          <img className="w-20 md:w-32 lg:w-52" src={require('../../img/floating_image_08.png')} alt="" />
        </div>
        <div className="absolute -bottom-1">
          <img src={require('../../img/bottom_wave_02_gray.png')} alt="" />
        </div>
      </div>

      <section className="contact_section">
        <div className="bg-white p-8">
          <h1 className="text-4xl font-bold text-center pt-20 gradient-text text-transparent">Get In Touch With Us</h1>
          <h2 className="text-2xl text-center mt-4">Contact Us</h2>
          <div className="flex justify-center my-4">
            <div className="w-4 h-1 bg-gray-400 mx-1"></div>
            <div className="w-8 h-1 bg-gray-400 mx-1"></div>
            <div className="w-4 h-1 bg-gray-400 mx-1"></div>
          </div>
          <p className="text-center text-gray-700">
            "We're here to help you with any questions or needs you may have. Reach out to us today, and let's start a conversation about how we can support your business goals."
          </p>
          <p className="text-center text-gray-700">
            Feel free to reach out to us through any of the following methods:
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center py-12 bg-white">
          <div className="text-center md:text-left">
            <div className="block items-center my-2">
              <div className="ml-0 md:ml-3">
                <FaMobileAlt className="ml-32 text-3xl text-red-300" />
                <h3 className="block font-semibold">Mobile Number</h3>
                <p className="text-gray-700">India          :   +91 8341615422</p>
                <p className="text-gray-700">India Land Line:   +91 40 4240 8113</p>
                <p className="text-gray-700">Saudi Arabia   :   +966 530895317</p>
              </div>
            </div>
            <div className="block items-center my-2">
              <div className="ml-0 md:ml-3">
                <MdOutlineMailLock className="ml-32 text-3xl text-red-300" />
                <h3 className="block font-semibold">E-mail</h3>
                <p className="text-gray-700">info@zen-py.com</p>
                <p className="text-gray-700">contact@zen-py.com</p>
                <p className="text-gray-700">zenpy314@gmail.com</p>
                <p className="text-gray-700">hadi35986@gmail.com</p>
              </div>
            </div>
            <div className="block md:flex-row items-center my-2">
              <div className="ml-0 md:ml-3">
                <FaMapMarkerAlt className="ml-32 text-3xl text-red-300" />
                <span className="block font-semibold">Address</span>
                <span className="text-gray-700">204 2nd floor, Shanthi Enclave, <br />Madhavi Nagar,
                 Kukatpally, Hyderabad-500072 <br />Telangana state <br />India</span>
              </div>
            </div>
            <div className="block md:flex-row items-center my-2">
              <div className="ml-0 md:ml-3">
                <TbClockHour3 className="ml-32 text-3xl text-red-300" />
                <span className="block font-semibold">Opening Hours</span>
                <span className="text-gray-700">Monday - Friday (9:00 AM to 6:00 PM )</span><br />
                <span className="text-gray-700">Saturday: 10:00 AM - 2:00 PM </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <form ref={form} onSubmit={sendEmail} className="bg-gray-200 p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="form-control border border-gray-300 p-2 rounded"
                  placeholder="First Name"
                  name="firstname"
                  required
                />
                <input
                  type="text"
                  className="form-control border border-gray-300 p-2 rounded"
                  placeholder="Last Name"
                  name="user_lastname"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="email"
                  className="form-control border border-gray-300 p-2 rounded"
                  placeholder="Email"
                  name="email"
                  required
                />
                <input
                  type="text"
                  className="form-control border border-gray-300 p-2 rounded"
                  placeholder="Mobile Number"
                  name="mobile"
                  required
                />
              </div>
              <textarea
                rows="5"
                className="form-control border border-gray-300 p-2 rounded mt-4"
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <div className="text-center mt-5">
                <button
                  onClick={handleButtonClick}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  Contact Us
                </button>
                {isPopupOpen && <Popup onClose={handleClosePopup} />}
              </div>
            </form>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.184122620263!2d78.40660500000001!3d17.498722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c0ae3813b3%3A0x5f25284f555627a!2sShanthi%20Enclave!5e0!3m2!1sen!2sin!4v1756495850373!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}
