import React, { useState, useEffect } from 'react';
import Preloader from './pre_Loader/Preloader.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './web/pages/Home.jsx'
import Navbar from './web/header/Navbar.jsx'
import Footer from './web/footer/Footer.jsx'
import About from './web/pages/About.jsx'
import Contact from './web/pages/Contact.jsx'
import Service from './web/pages/services/Service.jsx'
import AI from "./web/pages/services/AI.jsx";
import SAP from "./web/pages/services/SAP.jsx";
import DataScience from "./web/pages/services/DataScience.jsx";
import Projects from "./web/pages/services/Projects.jsx";
import Website from "./web/pages/services/Website.jsx";
import Testing from './web/pages/services/Testing.jsx'
import Vision from './web/pages/Vision.jsx'
import Career from './web/pages/Career.jsx'
import TrainingSAP from './web/component/TrainingSAP';
import TrainingWebDesign from './web/component/TrainingWebDesign';
import TrainingDataScience from './web/component/TrainingDataScience';
import ScrollToTopButton from './web/component/ScrollToTopButton.jsx';
import AdminPanel from './web/component/AdminPanel';
import TrainingPowerBI from './web/component/TrainingPowerBI';
import Chatbot from './web/component/Chatbot';
console.log('TrainingPowerBI component:', TrainingPowerBI);
console.log('Type of TrainingPowerBI:', typeof TrainingPowerBI);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track page views - UPDATED TO PRODUCTION URL
    fetch('https://zen-py-backend-production.up.railway.app/api/track-visitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      }),
    })
    
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="App">
        {loading ? <Preloader /> : (
          <div>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/career" element={<Career />} />
                
                {/* ✅ ADD THIS MISSING ADMIN ROUTE */}
                <Route path="/admin" element={<AdminPanel />} />
                
                <Route path="/service" element={<Service />} />
                <Route path="/service/ai" element={<AI />} />
                <Route path="/service/website" element={<Website />} />
                <Route path="/service/sap" element={<SAP />} />
                <Route path="/service/datascience" element={<DataScience />} />
                <Route path="/service/testing" element={<Testing />} />
                <Route path="/service/projects" element={<Projects />} />
                <Route path="/corporate/sap-training" element={<TrainingSAP />} />
                <Route path="/corporate/web-training" element={<TrainingWebDesign />} />
                <Route path="/corporate/data-training" element={<TrainingDataScience />} />
                <Route path="/corporate/powerbi-training" element={<TrainingPowerBI />} />
              </Routes>
              <ScrollToTopButton/>
              <Footer/>
              <Chatbot />
            </BrowserRouter>
          </div>
        )}
      </div>
    </>
  )
}
