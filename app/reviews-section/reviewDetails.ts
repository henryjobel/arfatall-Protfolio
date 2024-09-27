import { StaticImageData } from "next/image";
import henry from "../../public/henry.png"
import sohail from "../../public/640px-Upwork-logo.svg.webp"
import shoaib from "../../public/640px-Upwork-logo.svg.webp"
import miller_jeck from "../../public/JPEG_20240205_152651_2284387378115292667.webp"
import werdsffg6 from "../../public/bec8ef4e-e934-42c8-9137-09149f17f860.jpeg"
import alan from "../../public/1656739603transparent-fiverr-logo.webp"
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
    profileImg: henry,
    testimonial:
      "Syed Arfat A. did an outstanding job creating our Shopify dropshipping store and adding 300 products. His expertise, timely delivery, and effectiveness were impressive. Highly recommended!",
  },
  {
    name: "Sohail S.",
    role: "Jewelry Store Management",
    company: "Shopify Store Client",
    profileImg: sohail,
    testimonial:
      "Syed's really boosted our Jewelempire store sales. He's professional and effective. Highly recommended for great service.",
  },
  {
    name: "Shoaib A",
    role: "Business Manager",
    company: "Upwork",
    profileImg: shoaib,
    testimonial:
      "Syed Arfat A. did an amazing job on our website project. He was attentive to our needs and delivered exactly what we wanted. Working with him was easy, and I highly recommend his services",
  },
  {
    name: "miller_jeck",
    role: "United States",
    company: "Fiverr",
    profileImg: miller_jeck,
    testimonial:
      "I really appreciate them high-quality work and fair wages.",
  },
  {
    name: "werdsffg",
    role: "United Kingdom",
    company: "Fiverr",
    profileImg: werdsffg6,
    testimonial:
      "I really enjoyed working with Syed, his work is very professional and he did the work as per my requirements.",
  },
  {
    name: "Alan Franciskovic",
    role: "Fix Errors on WordPress Site",
    company: "Upwork",
    profileImg: alan,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  
];
