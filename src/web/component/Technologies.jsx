import React from 'react';
import { useEffect, useState } from 'react';
import '../style/Technologies.css'
import imageA1 from '../../img/wordpress.png';
import imageA2 from '../../img/react.png';
import imageA3 from '../../img/angular.png';
import imageA4 from '../../img/Drupal.png';


import imageB1 from '../../img/android.png';
import imageB2 from '../../img/ios.png';
import imageB3 from '../../img/java.png';
import imageB4 from '../../img/flutter.png';

import imagec1 from '../../img/sharepoint.png';
import imagec2 from '../../img/azure.png';
import imagec3 from '../../img/power-platforms-1.png';
import imagec4 from '../../img/sharepointMigration.png';

import imageD1 from '../../img/sql.png';
import imageD2 from '../../img/mysql.png';
import imageD3 from '../../img/mongo.png';
import imageD4 from '../../img/aws.png';

import imageE1 from '../../img/penetration-1.png';
import imageE2 from '../../img/agile.png';
import imageE3 from '../../img/API.png';
import imageE4 from '../../img/test_automation.png';

const Technologies = () => {
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const button = document.querySelector('.fixed button');
        button.addEventListener('click', scrollToTop);

        return () => {
            button.removeEventListener('click', scrollToTop);
        };
    }, []);






    const [images, setImages] = useState([]);

    const handleClick = (type) => {
        let newImages = [];
        switch (type) {
            case 'a':
                newImages = [
                    { id: 1, src: imageA1, alt: 'Image A1', name: "Wordpress" },
                    { id: 2, src: imageA2, alt: 'Image A2', name: "React" },
                    { id: 3, src: imageA3, alt: 'Image A3', name: "Angular" },
                    { id: 4, src: imageA4, alt: 'Image A4', name: "Viu" },
                ];
                break;
            case 'b':
                newImages = [
                    { id: 1, src: imageB1, alt: 'Image B1', name: "Android" },
                    { id: 2, src: imageB2, alt: 'Image B2', name: "Ios" },
                    { id: 3, src: imageB3, alt: 'Image B3', name: "Java" },
                    { id: 4, src: imageB4, alt: 'Image B4', name: "Flutter" },
                ];
                break;
            case 'c':
                newImages = [
                    { id: 1, src: imagec1, alt: 'Image A1', name: "SharePoint" },
                    { id: 2, src: imagec2, alt: 'Image A2', name: "Azure" },
                    { id: 3, src: imagec3, alt: 'Image A3', name: "Power Plateform" },
                    { id: 4, src: imagec4, alt: 'Image A4', name: "sharepoint migration" },
                ];
                break;
            case 'd':
                newImages = [
                    { id: 1, src: imageD1, alt: 'Image A1', name: "SQL" },
                    { id: 2, src: imageD2, alt: 'Image A2', name: "MYSQL" },
                    { id: 3, src: imageD3, alt: 'Image A3', name: "MongoDB" },
                    { id: 4, src: imageD4, alt: 'Image A4', name: "AWS" },
                ];
                break;
            case 'e':
                newImages = [
                    { id: 1, src: imageE1, alt: 'Image A1', name: "Penetration Testing" },
                    { id: 2, src: imageE2, alt: 'Image A2', name: "Agile Testing" },
                    { id: 3, src: imageE3, alt: 'Image A3', name: "API Testing" },
                    { id: 4, src: imageE4, alt: 'Image A4', name: "Test Automation" },
                ];
                break;
            default:
                newImages = [];
        }
        setImages(newImages);
    };


    return (

        <>
            <div className="relative bg-white dark:bg-white py-12">
                {/* <div className="absolute inset-0 overflow-hidden">

                    
                    <img src={require("../../img/arrow1.png")} alt="" className="absolute top-0 left-0  h-12 md:h-full lg:h-[220px] lg:top-10 animate-spin-slow" />
                    <img src={require("../../img/arrow2.png")} alt="" className="absolute bottom-0 right-0  h-12 md:h-full lg:h-[220px] lg:top-10  animate-spin-slow-reverse" />

                </div> */}
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-black">
                        Technologies we work with
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-500 mt-2">
                        In pace with the evolving trends
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center space-x-1 space-y-2 md:space-y-0 md:space-x-1">
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full" onClick={() => handleClick('a')}>Web Development</button>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full" onClick={() => handleClick('b')}>AI Solutions</button>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full" onClick={() => handleClick('c')}>SAP Digital Transformation</button>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full" onClick={() => handleClick('d')}>Data Science & Analytics</button>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full" onClick={() => handleClick('e')}>Testing</button>
                        <button className="bg-blue-900 text-white px-4 py-2 rounded-full" onClick={() => handleClick('e')}>Projects & Consulting</button>
                    </div>
                    <div className="mt-8 flex justify-center space-x-8">
                        {images.map(image => (
                            <div>
                                <img key={image.id} src={image.src} alt={image.alt} className="w-16 h-16" />
                                <p>{image.name}</p>
                            </div>

                        ))}
                    </div>
                </div>


            </div>


        </>
    );
};

export default Technologies;
