import React, { useState, useEffect } from 'react';

export default function HeroFirst() {
  const [loadedText, setLoadedText] = useState('');
  const text = `Transform Your Vision into Digital Reality`;

  useEffect(() => {
    setLoadedText('');
    const textArray = text.split('');
    let timeouts = [];

    textArray.forEach((char, index) => {
      const timeout = setTimeout(() => {
        setLoadedText(prevText => prevText + char);
      }, 100 * index);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [text]);

  return (
    <>
      <div className="relative pt-[70px] lg:pt-0 min-h-screen">
        <video
          className="top-0 left-0 w-full h-full object-cover -z-10"
          src={require('../../img/video.mp4')}
          autoPlay
          loop               
          muted
        ></video>

        {/* MAIN TEXT */}
        <div className="absolute top-1/3 right-1/3 text-center">
          <h3 className="text-white text-4xl lg:text-6xl font-extrabold text-center">
            {loadedText}
          </h3>
        </div>
        
        {/* EXPERTISE BADGES CONTAINER - ABSOLUTELY POSITIONED */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
          
          {/* SAP + AI-Powered Solutions - Exact Diagonal Split */}
          <div className="relative w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            {/* Main Blue Background */}
            <div className="absolute inset-0 bg-blue-900"></div>
            
            {/* Diagonal Gold Divider Section */}
            <div className="absolute top-0 left-0 w-full h-full bg-amber-500 clip-diagonal"></div>
            
            {/* SAP Text - Top Left */}
            <div className="absolute top-3 left-3 text-white z-10">
              <span className="font-bold text-xl md:text-2xl lg:text-3xl">SAP</span>
            </div>
            
            {/* AI-Powered Solutions Text - Bottom Right */}
            <div className="absolute bottom-2 right-2 text-white z-10 text-right">
              <p className="text-xs md:text-sm font-semibold">AI-Powered<br/>Solutions</p>
            </div>
          </div>

          {/* Web Development - Exact Diagonal Split */}
          <div className="relative w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            {/* Main Purple Background */}
            <div className="absolute inset-0 bg-purple-800"></div>
            
            {/* Diagonal Gold Divider Section */}
            <div className="absolute top-0 left-0 w-full h-full bg-amber-500 clip-diagonal"></div>
            
            {/* Web Text - Top Left */}
            <div className="absolute top-3 left-3 text-white z-10">
              <span className="font-bold text-xl md:text-2xl lg:text-3xl">Web</span>
            </div>
            
            {/* Development Text - Bottom Right */}
            <div className="absolute bottom-2 right-2 text-white z-10 text-right">
              <p className="text-xs md:text-sm font-semibold">Development</p>
            </div>
          </div>
          
          {/* Data & AI + Predictive Analytics - Exact Diagonal Split */}
          <div className="relative w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            {/* Main Green Background */}
            <div className="absolute inset-0 bg-green-800"></div>
            
            {/* Diagonal Gold Divider Section */}
            <div className="absolute top-0 left-0 w-full h-full bg-amber-500 clip-diagonal"></div>
            
            {/* Data & AI Text - Top Left */}
            <div className="absolute top-3 left-3 text-white z-10">
              <span className="font-bold text-lg md:text-xl lg:text-2xl">Data & AI</span>
            </div>
            
            {/* Predictive Analytics Text - Bottom Right */}
            <div className="absolute bottom-2 right-2 text-white z-10 text-right">
              <p className="text-xs md:text-sm font-semibold">Predictive<br/>Analytics</p>
            </div>
          </div>
        </div>

        {/* EXISTING ELEMENTS */}
        <div className="absolute animated-element bottom-10 -left-10">
          <img className="w-32 md:w-52 lg:w-96" src={require('../../img/floating_image_05.png')} alt="" />
        </div>
        <div className="absolute animated-element bottom-10 -right-0 ">
          <img className="w-20 md:w-32 lg:w-52" src={require('../../img/floating_image_08.png')} alt="" />
        </div>
        <div className="absolute w-full bottom-0 opacity-50">
          <img className="w-full h-auto" src={require('../../img/22.png')} alt="" />
        </div>
      </div>
      
      <div className="w-full">
        <img className="w-full h-auto" src={require('../../img/22 (1).png')} alt="" />
      </div>

      {/* Add this style tag for the diagonal clip */}
      <style>
        {`
          .clip-diagonal {
            clip-path: polygon(100% 0, 0% 100%, 100% 100%);
          }
        `}
      </style>
    </>
  );
};