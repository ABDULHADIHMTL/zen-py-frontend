import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaComment, FaPaperPlane } from 'react-icons/fa';

const EnquireNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://zen-py-backend-production.up.railway.app/api/enquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! We will get in touch with you soon.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="enquire" className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enquire Now
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Send your details and we will get in touch with you
          </p>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaComment className="text-amber-500 mr-3" />
              How can I help you?
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="relative">
                <FaBuilding className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info & Chatbot */}
          <div className="text-white">
            <div className="bg-blue-800 bg-opacity-50 rounded-2xl p-8 mb-8">
              <h4 className="text-2xl font-bold mb-4">Why Enquire?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Get expert consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Customized solutions for your business
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  Quick response within 24 hours
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  No obligation quote
                </li>
              </ul>
            </div>

            {/* Simple Chatbot Trigger */}
            <div className="bg-amber-500 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Quick Questions?</h4>
              <p className="mb-4">Chat with our AI assistant for instant answers</p>
              <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquireNow;