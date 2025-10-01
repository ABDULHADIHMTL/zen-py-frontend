import React from 'react';
import { Link } from 'react-router-dom';
import { SiSap } from "react-icons/si";
import { FaChalkboardTeacher, FaUsers, FaBriefcase, FaUserTie, FaHandsHelping } from "react-icons/fa";

const TrainingSAP = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <SiSap className="text-6xl text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SAP End-User Training Program</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empower your workforce with practical SAP skills for daily operations and business excellence
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Program Overview */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaChalkboardTeacher className="mr-3 text-blue-500" />
              Program Overview
            </h2>
            <p className="text-gray-700 mb-4">
              Our specialized SAP end-user training is designed to equip your employees with the practical skills 
              needed to efficiently navigate and utilize SAP systems in their daily work operations.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Hands-on practical training with real business scenarios</li>
              <li>Experienced trainers with industry knowledge</li>
              <li>Focused on daily operational tasks and processes</li>
              <li>Flexible learning options (online & classroom)</li>
              <li>Customized to your organization's specific SAP setup</li>
            </ul>
          </div>

          {/* Course Modules */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaUsers className="mr-3 text-green-500" />
              Available Modules
            </h2>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-blue-600">SAP FI/CO End-User Training</h3>
                <p className="text-sm text-gray-600">Daily financial transactions and reporting</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-blue-600">SAP MM End-User Training</h3>
                <p className="text-sm text-gray-600">Procurement and inventory management tasks</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-blue-600">SAP SD End-User Training</h3>
                <p className="text-sm text-gray-600">Sales order processing and customer management</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-blue-600">SAP Plant Maintenance (PM) End-User Training</h3>
                <p className="text-sm text-gray-600">Plant Maintenence from end to end </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-blue-600">SAP HCM End-User Training</h3>
                <p className="text-sm text-gray-600">Employee data management and payroll processes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
            <FaHandsHelping className="mr-3 text-purple-500" />
            Training Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Increased Productivity</h3>
              <p className="text-gray-600">Employees work efficiently with proper SAP knowledge</p>
            </div>
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Reduced Errors</h3>
              <p className="text-gray-600">Minimize operational mistakes and data entry errors</p>
            </div>
            <div className="text-center p-4">
              <FaUserTie className="text-4xl text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Better Utilization</h3>
              <p className="text-gray-600">Maximize your SAP investment through proper usage</p>
            </div>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Ideal For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Business Users</h3>
              <p className="text-gray-600">Employees who use SAP in their daily work</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2 text-green-600">Department Teams</h3>
              <p className="text-gray-600">Finance, HR, Procurement, Sales departments, Plant Maintenence (PM)</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2 text-purple-600">New Employees</h3>
              <p className="text-gray-600">Staff needing SAP orientation and training</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg mb-2 text-orange-600">Existing Users</h3>
              <p className="text-gray-600">Personnel needing skill refreshment or updates</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Get Training Proposal
          </Link>
          <p className="text-gray-600 mt-4">Customized training solutions for your organization</p>
        </div>

      </div>
    </div>
  );
};

export default TrainingSAP;