import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Thanks for connecting us</h2>
        <button
          onClick={onClose}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          Ok
        </button>
      </div>
    </div>
  );
};

export default Popup;
