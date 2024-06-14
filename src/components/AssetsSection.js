import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";

const AssetsSection = ({ assets }) => {
  const [hovered, setHovered] = useState(null);
  const [readMoreHovered, setReadMoreHovered] = useState(false);

  return (
    <section className="p-8 w-[90%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-0">
        {assets.map((asset, index) => (
          <div key={index} className="p-12 border border-red-200">
            <div
              className="border h-[100%] border-red-300 shadow-xl p-12 text-center relative transition duration-300 ease-in-out transform hover:shadow-xl hover:ring-1 hover:ring-red-300 hover:ring-opacity-50 rounded-lg"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              aria-label={`Asset: ${asset.title}`}
            >
              <img src={asset.logo} alt={asset.title} className="w-full h-auto mb-4" />
              {hovered === index && (
                <div className="absolute inset-0 bg-white flex flex-col justify-center items-center p-4 transition-opacity duration-1000 ease-in opacity-100 rounded-lg">
                  <img src={asset.logo} alt={asset.title} className="w-1/4 h-auto mb-4" />
                  <p className="text-black mb-4 font-normal text-xl w-[90%] mx-auto">{asset.description}</p>
                  <a
                    href={asset.link}
                    className="text-blue-500 flex items-center justify-center gap-1 relative"
                    onMouseEnter={() => setReadMoreHovered(true)}
                    onMouseLeave={() => setReadMoreHovered(false)}
                    aria-label={`Read more about ${asset.title}`}
                  >
                    <span className={`hover:underline ${readMoreHovered ? "underline" : ""}`}>
                      Read more
                    </span>
                    <span className="mt-1">
                      {readMoreHovered ? (
                        <FaArrowRight className="underline transition-all duration-300" aria-hidden="true" />
                      ) : (
                        <CgArrowTopRight className="transition-all duration-300" aria-hidden="true" />
                      )}
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssetsSection;
