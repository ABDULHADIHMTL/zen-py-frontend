// ScrollToTopButton.jsx
import React from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop}  className="fixed bottom-4 right-4 p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-lg" >
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
