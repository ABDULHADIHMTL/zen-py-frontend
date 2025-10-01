import React, { useState, useEffect } from 'react';
import { FaDownload, FaTrash } from 'react-icons/fa';

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    const response = await fetch('/api/enquiries');
    const data = await response.json();
    setEnquiries(data);
  };

  const downloadCSV = () => {
    const headers = 'Name,Email,Phone,Company,Message,Created At\n';
    const csv = enquiries.map(e => 
      `"${e.name}","${e.email}","${e.phone}","${e.company}","${e.message}","${e.created_at}"`
    ).join('\n');
    
    const blob = new Blob([headers + csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'enquiries.csv';
    a.click();
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Enquiry Management</h2>
      <button onClick={downloadCSV} className="bg-blue-900 text-white px-4 py-2 rounded mb-4">
        <FaDownload className="inline mr-2" />
        Download CSV
      </button>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td className="px-4 py-2">{enquiry.name}</td>
                <td className="px-4 py-2">{enquiry.email}</td>
                <td className="px-4 py-2">{enquiry.phone}</td>
                <td className="px-4 py-2">{enquiry.company}</td>
                <td className="px-4 py-2">{enquiry.message}</td>
                <td className="px-4 py-2">{enquiry.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEnquiries;