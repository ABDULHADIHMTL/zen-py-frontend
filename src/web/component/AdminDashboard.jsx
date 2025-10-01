import React, { useState, useEffect } from 'react';
import { FaDownload, FaSignOutAlt, FaUser, FaEnvelope, FaPhone, FaBuilding, FaCalendar, FaSync, FaBell } from 'react-icons/fa';

const AdminDashboard = ({ onLogout }) => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newEnquiryCount, setNewEnquiryCount] = useState(0);

  useEffect(() => {
    fetchEnquiries();
    setupRealTimeUpdates();
  }, []);

  // Real-time updates using polling (every 60 seconds)
  const setupRealTimeUpdates = () => {
    setInterval(() => {
      checkForNewEnquiries();
    }, 6000000); // Check every 600 seconds
  };

  const checkForNewEnquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('https://zen-py-backend-production.up.railway.app/api/auth/admin/enquiries', {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.length > enquiries.length) {
          setNewEnquiryCount(data.length - enquiries.length);
          setEnquiries(data);
          showNotification('New enquiry received!');
        }
      }
    } catch (error) {
      console.error('Error checking new enquiries:', error);
    }
  };

  const fetchEnquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('https://zen-py-backend-production.up.railway.app/api/auth/admin/enquiries', {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 403) {
        alert('Session expired. Please login again.');
        onLogout();
        return;
      }

      const data = await response.json();
      setEnquiries(data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message) => {
    // Browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('ZenPy Admin Alert', {
        body: message,
        icon: '/favicon.ico'
      });
    }
    
    // Audio notification
    const audio = new Audio('/notification.mp3');
    audio.play().catch(() => {});
    
    // Visual alert
    alert(`🔔 ${message}`);
  };

  const downloadCSV = () => {
    const headers = 'ID,Name,Email,Phone,Company,Message,Date\n';
    const csv = enquiries.map(e => 
      `"${e.id}","${e.name}","${e.email}","${e.phone}","${e.company}","${e.message.replace(/"/g, '""')}","${e.created_at}"`
    ).join('\n');
    
    const blob = new Blob([headers + csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enquiries-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    onLogout();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Enquiry Management System</p>
            </div>
            <div className="flex items-center space-x-4">
              {newEnquiryCount > 0 && (
                <div className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center">
                  <FaBell className="mr-1" />
                  {newEnquiryCount} New
                </div>
              )}
              <button
                onClick={fetchEnquiries}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaSync className="mr-2" />
                Refresh
              </button>
              <button
                onClick={downloadCSV}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaDownload className="mr-2" />
                Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaUser className="text-blue-600 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{enquiries.length}</h3>
                <p className="text-gray-600">Total Enquiries</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <FaEnvelope className="text-green-600 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{enquiries.filter(e => e.email).length}</h3>
                <p className="text-gray-600">With Email</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full">
                <FaPhone className="text-purple-600 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{enquiries.filter(e => e.phone).length}</h3>
                <p className="text-gray-600">With Phone</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-full">
                <FaBuilding className="text-orange-600 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{enquiries.filter(e => e.company).length}</h3>
                <p className="text-gray-600">With Company</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">ID</th>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Phone</th>
                  <th className="px-6 py-4 text-left">Company</th>
                  <th className="px-6 py-4 text-left">Message</th>
                  <th className="px-6 py-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-mono">{enquiry.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{enquiry.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600">{enquiry.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enquiry.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{enquiry.company}</td>
                    <td className="px-6 py-4 max-w-xs break-words">{enquiry.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(enquiry.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {enquiries.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No enquiries found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;