import React from 'react';
import { Link } from 'react-router-dom';
import { BiBrain } from "react-icons/bi";
import { FaChartLine, FaDatabase, FaRobot, FaUserTie, FaPython } from "react-icons/fa";
import { SiTensorflow, SiPytorch } from "react-icons/si";

const TrainingDataScience = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BiBrain className="text-6xl text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Science & Analytics Training</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transform raw data into actionable insights and build intelligent systems that drive business decisions
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Program Structure */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaChartLine className="mr-3 text-green-500" />
              Program Structure
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPython className="text-2xl text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Python for Data Science</h3>
                  <p className="text-gray-600">Pandas, NumPy, and data manipulation</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaDatabase className="text-2xl text-purple-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">SQL & Database Management</h3>
                  <p className="text-gray-600">Advanced querying and database design</p>
                </div>
              </div>
              <div className="flex items-start">
                <SiTensorflow className="text-2xl text-orange-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Machine Learning</h3>
                  <p className="text-gray-600">Supervised and unsupervised learning algorithms</p>
                </div>
              </div>
              <div className="flex items-start">
                <SiPytorch className="text-2xl text-red-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Deep Learning</h3>
                  <p className="text-gray-600">Neural networks and AI applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRobot className="mr-3 text-blue-500" />
              Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm text-center">Python</span>
              <span className="bg-green-100 text-green-800 px-3 py-2 rounded text-sm text-center">R Programming</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-2 rounded text-sm text-center">Tableau</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded text-sm text-center">Power BI</span>
              <span className="bg-red-100 text-red-800 px-3 py-2 rounded text-sm text-center">TensorFlow</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-2 rounded text-sm text-center">PyTorch</span>
            </div>
          </div>
        </div>

        {/* Career Outcomes */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Career Pathways</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Data Scientist</h3>
              <p className="text-gray-600">$95,000 - $140,000</p>
            </div>
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Data Analyst</h3>
              <p className="text-gray-600">$65,000 - $90,000</p>
            </div>
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">ML Engineer</h3>
              <p className="text-gray-600">$110,000 - $160,000</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Begin Your Data Journey
          </Link>
          <p className="text-gray-600 mt-4">Real-world projects • Industry mentors • Certification preparation</p>
        </div>

      </div>
    </div>
  );
};

export default TrainingDataScience;