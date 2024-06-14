import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../styles/global.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaAngleDown, FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";

import logo from '../images/logo.png';
import logoWhite from '../images/logo-2.png';

export const query = graphql`
  query {
    allAssetsJson {
      nodes {
        title
        description
        logo
        link
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const assets = data.allAssetsJson.nodes;
  const images = data.allFile.edges;
  const [hovered, setHovered] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const [readMoreHovered, setReadMoreHovered] = useState(false);


  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>


      <header className="absolute w-full z-10">
        <div className="bg-transparent w-[95%] mx-auto text-white p-4 flex justify-between items-center">
          <img src={logoWhite} alt="Samagra Logo" className="w-44 h-auto" />
          <nav>
            <ul className="flex gap-x-14">
              <li className={`flex cursor-pointer items-center hover:font-bold ${showDropdown ? "font-bold" : ""}`} onClick={() => setShowDropdown(!showDropdown)}>
                Our Impact
                <FaAngleDown className="ml-1" />
              </li>

              {/* Dropdown menu */}

              {showDropdown && (
                <ul className="absolute  top-full w-[200px]  bg-white text-gray-800 border  border-gray-300  py-2 shadow-lg">
                  {/* Example links */}
                  <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">Agriculture</li>
                  <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">Education</li>
                  <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">Fellowships</li>
                  <li className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer">Health</li>
                </ul>
              )}
              <li className="hover:font-bold cursor-pointer">Our Programs</li>
              <li className="hover:font-bold cursor-pointer">SamagraX</li>
              <li className="hover:font-bold cursor-pointer">About Us</li>
              <li className="hover:font-bold cursor-pointer">Our Assets</li>
              <li className="hover:font-bold cursor-pointer">Ecosystem Initiatives</li>
            </ul>
          </nav>
        </div>
        <hr className="block border-t-2 w-[95%] mx-auto border-white mt-4" />

      </header>



      <main>
        <section className="relative text-center h-screen overflow-hidden">
          <img src='https://res.cloudinary.com/dxr2a2zrx/image/upload/v1718295434/yd5krooiw7v04pzvyyuk.jpg' alt="Banner" className="absolute inset-0 w-full h-full object-cover" style={{ backgroundAttachment: 'fixed' }} />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="text-8xl font-bold text-white">Our Assets</h1>
            <div className="absolute bottom-8 right-8 flex flex-col items-center cursor-pointer" onClick={handleScrollDown}>
              <div className="rounded-full border-2 border-white p-2 mb-2">
                <FaArrowDown className="text-white h-6 w-6" />
              </div>
              <span className="text-white">Scroll Down</span>
            </div>
          </div>
        </section>
        <section className="text-center w-1/2 mx-auto p-8 bg-white">
          <p className="text-lg mb-4 font-medium">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters.
          </p>
          <div className="flex justify-center items-center">
            <img src={logoWhite} alt="Hover Logo" className="w-12 h-auto" />
            <p className="ml-2 text-xl text-gray-600 ">👆 Hover on the logo to know more about it</p>
          </div>
        </section>


        <section className="p-8 w-[90%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-0">
            {assets.map((asset, index) => (
              <div key={index} className="p-12 border border-red-200">
                <div
                  className="border h-[100%] border-red-300 shadow-xl p-12 text-center relative transition duration-300 ease-in-out transform hover:shadow-xl hover:ring-1 hover:ring-red-300 hover:ring-opacity-50 rounded-lg"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img src={asset.logo} alt={asset.title} className="w-full h-auto mb-4" />
                  {hovered === index && (
                    <div className="absolute inset-0 bg-white  flex flex-col justify-center items-center p-4 transition-opacity duration-1000 ease-in opacity-100 rounded-lg">
                      <img src={asset.logo} alt={asset.title} className="w-1/4 h-auto mb-4" />

                      <p className="text-black mb-4 font-normal text-xl w-[90%] mx-auto ">{asset.description}</p>
                      <a
                        href={asset.link}
                        className="text-blue-500 flex items-center justify-center gap-1 relative"
                        onMouseEnter={() => setReadMoreHovered(true)}
                        onMouseLeave={() => setReadMoreHovered(false)}
                      >
                        <span className={`hover:underline  ${readMoreHovered ? "underline" : ""}`}>
                          Read more
                        </span>
                        <span className=" mt-1">
                          {readMoreHovered ? (
                            <FaArrowRight className="underline transition-all duration-300" />
                          ) : (
                            <CgArrowTopRight className=" transition-all duration-300" />
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





      </main>
      <footer className="bg-white text-black pt-12 px-8 border-t border-red-200 mt-8">
        <div className="max-w-7xl mx-auto flex justify-between pb-12 items-start space-y-4 md:space-y-0 md:flex-row flex-col">
          <div>
            <img src={logo} alt="Samagra Logo" className="w-56 h-auto mb-4" />
            <address className="not-italic">
              <strong>Samagra | Transforming Governance</strong><br />
              9/5 Sarvapriya Vihar, New Delhi 110016
            </address>
          </div>
          <div className="flex space-x-8">
            <div>
              <h4 className="font-semibold mb-2 text-yellow-500">About Us</h4>
              <ul>
                <li>Team</li>
                <li>News</li>
                <li>Blog</li>
                <li>Apply</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-yellow-500">Governance+</h4>
              <ul>
                <li>Amrit Series</li>
                <li>Governance Decluttered</li>
                <li>Governance Frameworks</li>
                <li>Sushasan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-yellow-500">Events & Initiatives</h4>
              <ul>
                <li>Code for GovTech (C4GT)</li>
                <li>The Governance Challenge (TGC)</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-yellow-500">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#"><FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className="w-6 h-6" /></a>
                  <a href="#"><FontAwesomeIcon icon={faFacebook} className="w-6 h-6" /></a>
                  <a href="#"><FontAwesomeIcon icon={faYoutube} className="w-6 h-6" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-4 pt-4 border-t border-gray-200">
          <p className="text-gray-600">&copy; 2024 Samagra Development Associates Pvt. Ltd. <a href="#" className="text-gray-500 underline">CSR</a></p>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
