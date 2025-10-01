// import React from 'react'
// import '../style/Hero.css'
// import { ReactComponent as MySvg } from '../../img/01.svg';
// // import { ReactComponent as MySvg2 } from '../../img/geo_round_blob_medium.svg';


// export default function HeroSecond() {
//   return (
//     <>
//     <div className="relative w-full">
//       <img className="w-full h-auto" src={require('../../img/New-Microsoft-Word-Document.png')} alt="" />
//       <div className="absolute top-1/3 left-1/3 text-center p-4 sm:p-6 md:p-8 lg:p-10">
//   <h3 className="gradient-text text-transparent text-2xl  md:text-5xl lg:text-6xl font-extrabold">
//   A futuristic digital interface <br /> showcasing technology and innovation
//   </h3>
//   <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
//     Exclusive Access
//   </p>
// </div>
// <div className="absolute top-5 left-2.5 sm:top-8 sm:left-4 md:top-12 md:left-6 lg:top-16 lg:left-8">
//   <MySvg id='mySvg'/>
// </div>
// <div className="absolute">
//   {/* <MySvg2 id='mySvg2'/> */}
//   <img src={require('../../img/image_processing20210908-6085-9h03qr.gif')} alt="" id='mySvg2'/>
// </div>
// <div className="absolute">
//   {/* <MySvg2 id='mySvg2'/> */}
//   <img src={require('../../img/—Pngtree—2.5d technology internet creative design_4028904.png')} alt="" id='mySvg3'/>
// </div>
// <div className="absolute">
//   {/* <MySvg2 id='mySvg2'/> */}
//   <img src={require('../../img/—Pngtree—information technology cloud computing computer_6406341.png')} alt="" id='mySvg4'/>
// </div>
//     </div>

//     </>

//   )
// }


import React from 'react';
import { ReactComponent as MySvg } from '../../img/01.svg';

export default function HeroSecond() {
  return (
    <div className="relative w-full">
      <img
        className="w-full h-auto"
        src={require('../../img/New-Microsoft-Word-Document.png')}
        alt=""
      />
      <div className="absolute top-1/3 left-1/3 text-center p-4 sm:p-6 md:p-8 lg:p-10">
        <h3 className="text-white text-base sm:text-lg md:text-3xl lg:text-4xl font-extrabold">
          A futuristic digital interface <br /> showcasing technology and innovation
        </h3>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
          Exclusive Access
        </p>
      </div>
      <div className="absolute top-5 left-2.5 sm:top-8 sm:left-4 md:top-12 md:left-6 lg:top-16 lg:left-8">
        <MySvg className="w-[150px] h-[275px] sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[450px] lg:w-[400px] lg:h-[950px]" />
      </div>
      <div className="absolute top-20 right-10 sm:top-32 sm:right-20 md:top-40 md:right-30 lg:top-48 lg:right-50">
        <img
          src={require('../../img/image_processing20210908-6085-9h03qr.gif')}
          alt=""
          className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[200px]"
        />
      </div>
      <div className="absolute top-40 left-20 sm:top-60 sm:left-30 md:top-80 md:left-40 lg:top-96 lg:left-50">
        <img
          src={require('../../img/—Pngtree—2.5d technology internet creative design_4028904.png')}
          alt=""
          className="w-[80px] sm:w-[100px] md:w-[150px] lg:w-[300px]"
        />
      </div>
      <div className="absolute top-60 right-20 sm:top-80 sm:right-30 md:top-1/2 md:right-1/3 lg:top-2/4 lg:right-1/3">
        <img
          src={require('../../img/—Pngtree—information technology cloud computing computer_6406341.png')}
          alt=""
          className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[300px]"
        />
      </div>
    </div>
  );
}
