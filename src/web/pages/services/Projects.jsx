import React, { useEffect } from "react";
import './service.css'
import { useLocation } from 'react-router-dom';
import { CheckCircle } from "lucide-react";  // ✅ Import CheckCircle icon

export default function Projects() {
  const location = useLocation();

  // ✅ background scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.getElementById('projects-text');
      const backgroundElement = document.getElementById('projects-background');
      const scrollY = window.scrollY;
      if (textElement && backgroundElement) {
        textElement.style.transform = `translateY(-${scrollY * 0.5}px)`;
        backgroundElement.style.backgroundPositionY = `${scrollY * 0.25}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="projects-background">
      {/* ✅ Heading */}
      <h1
        id="projects-text"
        className="text-6xl font-bold text-white drop-shadow-lg mb-12"
      >
        Projects & Consulting
      </h1>

      {/* ✅ List now inside background */}
      <ul className="space-y-3 mt-4">
        <li className="flex items-center text-5xl font-bold text-white drop-shadow-lg mb-12"><CheckCircle className="text-blue-500 mr-2" /> Custom ERP Development</li>
        <li className="flex items-center text-3xl font-bold text-white drop-shadow-lg mb-12"><CheckCircle className="text-blue-500 mr-2" /> Cloud Migration Projects</li>
        <li className="flex items-center text-3xl font-bold text-white drop-shadow-lg mb-12"><CheckCircle className="text-blue-500 mr-2" /> AI & Machine Learning Consulting</li>
        <li className="flex items-center text-3xl font-bold text-white drop-shadow-lg mb-12"><CheckCircle className="text-blue-500 mr-2" /> Data Analytics Dashboards</li>
        <li className="flex items-center text-3xl font-bold text-white drop-shadow-lg mb-12"><CheckCircle className="text-blue-500 mr-2" /> End-to-End SAP Consulting</li>
      </ul>
    </div>
  );
}





