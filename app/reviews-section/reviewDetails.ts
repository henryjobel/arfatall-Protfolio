import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Henry Jobel",
    role: "Founder",
    company: "Moonu tech Solution",
    profileImg: alex,
    testimonial:
      "Syed Arfat A. did an outstanding job creating our Shopify dropshipping store and adding 300 products. His expertise, timely delivery, and effectiveness were impressive. Highly recommended!",
  },
  {
    name: "Sohail S.",
    role: "Jewelry Store Management",
    company: "Shopify Store Client",
    profileImg: jerry,
    testimonial:
      "Syed's really boosted our Jewelempire store sales. He's professional and effective. Highly recommended for great service.",
  },
  {
    name: "Shoaib A",
    role: "Business Manager",
    company: "Up work Client",
    profileImg: mauro,
    testimonial:
      "Syed Arfat A. did an amazing job on our website project. He was attentive to our needs and delivered exactly what we wanted. Working with him was easy, and I highly recommend his services",
  },
  {
    name: "Umar Abdullahi",
    role: "Head of Engineering",
    company: "Mono",
    profileImg: umar,
    testimonial:
      "Henry is hardworking and has great sense of ownership. He was able to contribute in engineering excellent user interfaces and user experiences at Mono. I’m confident he will be a great asset to any engineering team.",
  },
  {
    name: "Olamide Sholanke",
    role: "Senior Frontend Engineer",
    company: "Mono",
    profileImg: olamide,
    testimonial:
      "I had the pleasure of working with Victor on a frontend development project at Mono, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  },
  {
    name: "Alan Franciskovic",
    role: "Sales Specialist",
    company: "Croatia Osiguranje d.d",
    profileImg: alan,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  
];
