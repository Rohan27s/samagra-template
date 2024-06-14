import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import AssetsSection from '../Components/AssetsSection';
import Footer from '../Components/Footer';
import '../styles/global.css';
import logoWhite from '../images/logo-2.png'
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
  }
`;

const IndexPage = ({ data }) => {
  const assets = data.allAssetsJson.nodes;

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Header />
      <main>
        <HeroSection handleScrollDown={handleScrollDown} />
        <section className="text-center w-1/2 mx-auto p-8 bg-white">
          <p className="text-lg mb-4 font-medium">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters.
          </p>
          <div className="flex justify-center items-center">
            <img src={logoWhite} alt="Hover Logo" className="w-12 h-auto" aria-label="Hover Logo" />
            <p className="ml-2 text-xl text-gray-600">👆 Hover on the logo to know more about it</p>
          </div>
        </section>
        <AssetsSection assets={assets} />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
