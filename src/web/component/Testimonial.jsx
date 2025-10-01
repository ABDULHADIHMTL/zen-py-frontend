
import React from 'react';
import '../style/testimonial.css';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay, } from 'swiper/modules';

import { FaQuoteLeft } from "react-icons/fa";
const ClientTestimonial = () => {
    return (
        <>
        
        <div className="section mt-12 shadow-lg p-6 " style={{background:"#92f1f1ff"}}>
    <div className="container mx-auto">
        <h3 className="heading-h3 text-center border-b-2 border-gray-300 pb-2 mb-6 text-dark blue">CLIENT TESTIMONIAL</h3>
        <div className="client-testimonial-section">
            <Swiper
                watchSlidesProgress={true}
                autoplay={{
                    delay: 11000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay]}
                className="mySwiper"
                style={{ height: "400px" }} // Set fixed height
            >
                <SwiperSlide>
                    <div className="client-testimonial-box bg-blue-900 p-6 rounded-lg shadow-xl h-96 overflow-y-auto text-lg">
                        <div className='quote-icon text-2xl text-white mb-3'>
                            <FaQuoteLeft />
                        </div>
                        <p className="para text-white mb-4 flex-1 overflow-y-auto">
                        Zen Py's vision for integrating AI into our SAP system was revolutionary.They demonstrated a deep understanding of how intelligent automation could streamline our supply chain, and their proof-of-concept was incredibly promising. We are excited to see, project come to life."                        </p>
                        <h4 className="heading-h4 font-semibold mt-4 text-white">Sijo,</h4>
                        <p className="para text-gray-200 font-bold"><b>Riyadh, Saudi Arabia</b></p>
                        <p>Managing Director, HNQ</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-testimonial-box bg-blue-900 p-6 rounded-lg shadow-xl h-96 overflow-y-auto text-lg">
                        <div className='quote-icon text-2xl text-white mb-3'>
                            <FaQuoteLeft />
                        </div>
                        <p className="para text-white mb-4 flex-1 overflow-y-auto">
                        The Zen Py team is currently developing our e-commerce platform. Their approach is highly professional—meticulous planning, regular updates, and a clear focus on our business goals. They are translating our vision into a digital reality with great expertise."                        </p>
                        <h4 className="heading-h4 font-semibold mt-4 text-white">S.M.Ali,</h4>
                        <p className="para text-gray-200 font-bold"><b>Malakpet, Hyderabad</b></p>
                        <p>Founder, AM International</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-testimonial-box bg-blue-900 p-6 rounded-lg shadow-xl h-96 overflow-y-auto text-lg">
                        <div className='quote-icon text-2xl text-white mb-3'>
                            <FaQuoteLeft />
                        </div>
                        <p className="para text-white mb-4 flex-1 overflow-y-auto">
                        Zen Py presented a groundbreaking AI model for preliminary skin analysis. Their concept demonstrates significant potential to enhance diagnostic accuracy and streamline patient triage. We are enthusiastic about collaborating on the development of this innovative solution for our clinical practice."                        </p>
                        <h4 className="heading-h4 font-semibold mt-4 text-white">Dr. Kavya Thotla,</h4>
                        <p className="para text-gray-200 font-bold"><b>K.P.H.B, Hyderabad</b></p>
                        <p>Dermatologist(Cosmetologist), TRIKUT Skin Hair Laser Clinic</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-testimonial-box bg-blue-900 p-6 rounded-lg shadow-xl h-96 overflow-y-auto text-lg">
                        <div className='quote-icon text-2xl text-white mb-3'>
                            <FaQuoteLeft />
                        </div>
                        <p className="para text-white mb-4 flex-1 overflow-y-auto">
                        Zen Py's conceptual framework aligns perfectly with our objectives at Iris Educare. Their proposed methodology has the clear potential to identify key customer patterns and create a strategic plan for cost reduction and personalized experience enhancement. We see great value in moving forward with this customized solution."                        </p>
                        <h4 className="heading-h4 font-semibold mt-4 text-white">Sirish Turlapati,</h4>
                        <p className="para text-gray-200 font-bold"><b>Hyderabad, Telangana</b></p>
                        <p>Chairman & Managing Director, Iris Educare Limited</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-testimonial-box bg-blue-900 p-6 rounded-lg shadow-xl h-96 overflow-y-auto text-lg">
                        <div className='quote-icon text-2xl text-white mb-3'>
                            <FaQuoteLeft />
                        </div>
                        <p className="para text-white mb-4 flex-1 overflow-y-auto">
                        Zen Py's innovative concepts for using robotics in construction—from automated marking to hydrogeological surveying—are ahead of the curve. Their technical proposals demonstrate a powerful blend of engineering and software expertise that can transform our industry."                        </p>
                        <h4 className="heading-h4 font-semibold mt-4 text-white">P. Krishnam Raju,</h4>
                        <p className="para text-gray-200 font-bold"><b>Kukatpally, Hyderabad</b></p>
                        <p>Director, Venkat Homes (P) LTD</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</div>


                   </>
    )
}

export default ClientTestimonial
