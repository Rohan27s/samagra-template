import React from 'react';
import { FaArrowDown } from "react-icons/fa6";

const HeroSection = ({ handleScrollDown }) => (
  <section className="relative text-center h-screen overflow-hidden">
    <img src='https://res.cloudinary.com/dxr2a2zrx/image/upload/v1718295434/yd5krooiw7v04pzvyyuk.jpg' alt="Banner" className="absolute inset-0 w-full h-full object-cover" style={{ backgroundAttachment: 'fixed' }} />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-white">Our Assets</h1>
      <div className="absolute bottom-8 right-8 flex flex-col items-center cursor-pointer" onClick={handleScrollDown} aria-label="Scroll Down">
        <div className="rounded-full border-2 border-white p-2 mb-2">
          <FaArrowDown className="text-white h-6 w-6" aria-hidden="true" />
        </div>
        <span className="text-white">Scroll Down</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
