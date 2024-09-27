// components/Features.jsx

import React from 'react';
import Image from 'next/image';
import img1 from "../../public/featureImages/About Me.png"
import img2 from "../../public/featureImages/Skills.png"
import img3 from "../../public/featureImages/Terms & Conditions.png"
import img4 from "../../public/featureImages/Testimonials & Recommendations.png"
import img5 from "../../public/featureImages/Thank You.png"

const Features = () => {
  return (
    <section className=" overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto">
          {/* Starts component */}
          <a href="#_">
            <Image
              src={img1}
              className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="Description of image 1"
              width={2670}
              height={1600}
            />
          </a>
          <a href="#_">
            <Image
              src={img2}
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="Description of image 2"
              width={2672}
              height={1600}
            />
          </a>
          <a href="#_">
            <Image
              src={img3}
              className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="Description of image 3"
              width={2670}
              height={1600}
            />
          </a>
          <a href="#_">
            <Image
              src={img4}
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="Description of image 4"
              width={2574}
              height={1600}
            />
          </a>
          <a href="#_">
            <Image
              src={img5}
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
              alt="Description of image 4"
              width={2574}
              height={1600}
            />
          </a>
          {/* Ends component */}
        </div>   
       
      </div>
    </section>
  );
};

export default Features;
