import React, { useEffect } from 'react';
import '../style/herothird.css';
import { TbShoppingCartCopy } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { MdAgriculture } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaTruckPlane } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";

import "swiper/css";
import { Autoplay, } from 'swiper/modules';
export default function HeroThird() {



  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bgImage = document.getElementById('bg-image');
      const mainTitle = document.getElementById('main-title');
      const subTitle = document.getElementById('sub-title');

      if (bgImage) {
        bgImage.style.transform = `scale(${1 + scrollY * 0.001})`;
      }
      if (mainTitle) {
        mainTitle.style.transform = `translateY(-${scrollY * 0.2}px)`;
      }
      if (subTitle) {
        subTitle.style.transform = `translateY(-${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <div className="section shadow-lg p-6" style={{ background: "#e6e6e6" }}>
        <div className="container mx-auto">
          <div className="heading-h3 text-center border-b-2 border-gray-300 pb-2 mb-6 text-white" id='textbg'>
            <h3 id='text'>
              The Industries We Serve
            </h3>
          </div>
          <div className="client-testimonial-section">
            <Swiper
              watchSlidesProgress={true}
              autoplay={{
                delay: 1500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="client-testimonial-box p-4 rounded-md shadow-md" style={{ background: "#87eb60ff" }}>
                  <p className="para text-white" style={{ textAlign: "center" }}>
                    <TbShoppingCartCopy  style={{ fontSize: "40px", color: "rgba(14, 71, 230, 1)", marginLeft: "40%" }} />E-commerce/Retail
                   
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-testimonial-box p-4 rounded-md shadow-md" style={{ background: "#87eb60ff" }}>
                  <p className="para text-white" style={{ textAlign: "center" }}>
                    <GiStethoscope style={{ fontSize: "40px", color: "rgba(14, 71, 230, 1)", marginLeft: "40%" }} />Health Care Medical                       </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-testimonial-box p-4 rounded-md shadow-md" style={{ background: "#87eb60ff" }}>
                  <p className="para text-white" style={{ textAlign: "center" }}>
                    <RiSecurePaymentLine style={{ fontSize: "40px", color: "rgba(14, 71, 230, 1)", marginLeft: "40%" }} />Education                        </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-testimonial-box p-4 rounded-md shadow-md" style={{ background: "#87eb60ff" }}>
                  <p className="para text-white" style={{ textAlign: "center" }}>
                    <GrServices style={{ fontSize: "40px", color: "rgba(14, 71, 230, 1)", marginLeft: "40%" }} />Manufacturing                        </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-testimonial-box p-4 rounded-md shadow-md" style={{ background: "#87eb60ff" }}>
                  <p className="para text-white" style={{ textAlign: "center" }}>
                    <MdAgriculture style={{ fontSize: "40px", color: "rgba(14, 71, 230, 1)", marginLeft: "40%" }} />Agriculture Industry                        </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-testimonial-box p-4 rounded-md shadow-md" style={{ background: "#87eb60ff" }}>
                  <p className="para text-white" style={{ textAlign: "center" }}>
                    <FaBuildingColumns style={{ fontSize: "40px", color: "rgba(14, 71, 230, 1)", marginLeft: "40%" }} /> Real Estate                       </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-testimonial-box p-4 rounded-md shadow-md" style={{ background: "#87eb60ff" }}>
                 <p className="para text-white" style={{ textAlign: "center" }}>
                    <FaTruckPlane style={{ fontSize: "40px", color: "rgba(14, 71, 230, 1)", marginLeft: "40%" }} />Transportation and Logistics                       </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="client-testimonial-box p-4 rounded-md shadow-md" style={{ background: "#87eb60ff" }}>
                 <p className="para text-white" style={{ textAlign: "center" }}>
                    < GrTechnology style={{ fontSize: "40px", color: "rgba(14, 71, 230, 1)", marginLeft: "40%" }} />IT (Human Resources)                       </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>


      {/* <div class=" relative text-center py-12" style={{background:"#e6e6e6"}}>

  <h2 class="text-3xl font-bold mb-4 text-white" style={{color:"brown"}}>The Industries We Serve</h2>
  <p class="text-lg mb-8">Rebuilding digital solutions with security and tranquility</p>
  <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4  gap-8">
    <div class="flex flex-col items-center ">
      <p className='text-white'> <TbShoppingCartCopy style={{fontSize:"40px", color:"#dc8573"}} />E-commerce/Retail</p>  
    </div>
    <div class="flex flex-col items-center">
      <p className='text-white'> <GrServices style={{fontSize:"40px", color:"#dc8573"}} />On Demand Services</p>
    </div>
    <div class="flex flex-col items-center">
      <p className='text-white'><RiSecurePaymentLine style={{fontSize:"40px", color:"#dc8573"}}/>Payment Gateway</p>
    </div>
    <div class="flex flex-col items-center">
      <p className='text-white'> <GrTechnology style={{fontSize:"40px", color:"#dc8573"}}/>Financial Technologies</p>
    </div>
  </div>
</div> */}


      <div className="relative overflow-hidden h-[250px] md:h-[400px] lg:h-[600px] ">
        <div className="absolute w-full top-0 opacity-60 z-30">
          <img className="w-full h-auto" src={require('../../img/top_wave_01.png')} alt="" />
        </div>
        <div id="bg-image" className="bg-image"></div>
        <div className="relative z-10 flex items-center justify-center h-[1100px] md:h-full lg:h-full lg:pt-[850px]">
          <div className="text-center text-white px-8 md:px-20 lg:px-16">
            <h1 id="main-title" className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              We Transform Your Vision <br />
              Into Digital Reality
            </h1>
            <p id="sub-title" className=" text-white text-xl md:text-2xl lg:text-3xl font-bold ">
              Expertise in AI, Web Development, SAP, and Data Science to bring your projects to life.</p>
          </div>
        </div>
      </div>

    </>
  );
}
