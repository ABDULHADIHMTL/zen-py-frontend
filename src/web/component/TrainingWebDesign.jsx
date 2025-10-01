import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaPalette, FaMobile, FaSearch, FaUserTie } from "react-icons/fa";
import { SiJavascript, SiReact, SiCss3 } from "react-icons/si";

const TrainingWebDesign = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-pink-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaLaptopCode className="text-6xl text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Web Designer Training</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Master the art of creating stunning, responsive websites that convert visitors into customers
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Curriculum */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaPalette className="mr-3 text-purple-500" />
              Curriculum Highlights
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <SiCss3 className="text-2xl text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">HTML5 & CSS3 Mastery</h3>
                  <p className="text-gray-600">Modern web standards and responsive design principles</p>
                </div>
              </div>
              <div className="flex items-start">
                <SiJavascript className="text-2xl text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">JavaScript Fundamentals</h3>
                  <p className="text-gray-600">Interactive web elements and dynamic content</p>
                </div>
              </div>
              <div className="flex items-start">
                <SiReact className="text-2xl text-blue-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">React.js Framework</h3>
                  <p className="text-gray-600">Modern front-end development with React</p>
                </div>
              </div>
            
            </div>
          </div>

          {/* Skills You'll Gain */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaSearch className="mr-3 text-blue-500" />
              Skills You'll Master
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <span className="bg-purple-100 text-purple-800 px-3 py-2 rounded text-sm text-center">UI/UX Design</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm text-center">Responsive Layouts</span>
              <span className="bg-green-100 text-green-800 px-3 py-2 rounded text-sm text-center">Cross-Browser Compatibility</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded text-sm text-center">Performance Optimization</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-2 rounded text-sm text-center">Design Systems</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-2 rounded text-sm text-center">Accessibility Standards</span>
            </div>
          </div>
        </div>

        {/* Career Path */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Career Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Frontend Developer</h3>
              <p className="text-gray-600">$65,000 - $95,000</p>
            </div>
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">UI/UX Designer</h3>
              <p className="text-gray-600">$70,000 - $100,000</p>
            </div>
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Web Design Consultant</h3>
              <p className="text-gray-600">$80,000 - $120,000</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Start Your Design Journey
          </Link>
          <p className="text-gray-600 mt-4">Flexible schedules • Portfolio development • Job placement support</p>
        </div>

      </div>
    </div>
  );
};

export default TrainingWebDesign;