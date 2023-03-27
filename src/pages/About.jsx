import React from "react";

import { animateScroll as scroll } from 'react-scroll';

import { BsFillCaretUpFill } from 'react-icons/bs';

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import FeaturesZigZag from "../partials/FeaturesZigzag";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Banner from "../partials/Banner";
import Footer from "../partials/Footer";
import History from "../partials/History";

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <button onClick={() => scroll.scrollToTop({duration: 400})} className="fixed bottom-8 right-8 bg-white text-black text-4xl rounded-full px-2 py-2 hover:bg-gray-100">
        <BsFillCaretUpFill />
      </button>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        {/* <HeroHome /> */}
        {/* <FeaturesBlocks /> */}
        <History />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default About;
