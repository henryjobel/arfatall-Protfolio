"use client";
import Hero from "./hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";
import "./theme.css"

import dynamic from "next/dynamic";
import Reviews from "./reviews-section/ReviewGrid";
import { GlobeDemo } from "./globes/Globes";
import { TimelineDemo } from "./certtifications/certification";
import { BentoGridSecondDemo } from "./bentpgrid/bentogrid";
const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Blog = dynamic(() => import("./blog-section/BlogGrid"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />

      <NavBar />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center bg-gradient-to-r from-[#45c8d1] to-[#677cc9] glossy-gradient">
        <Hero />
        <Work />
        <Reviews/>
        <About />
       <TimelineDemo></TimelineDemo>
        <Blog />
        <GlobeDemo></GlobeDemo>
        <Contact />
        
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
