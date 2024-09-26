import Image from 'next/image';
import service from "../../public/services/service1.jpg";
import service2 from "../../public/services/service2.jpg";
import service3 from "../../public/services/service 3.jpg";
import service4 from "../../public/services/service 4.jpg";
import { motion } from "framer-motion"; // Importing motion from framer-motion

const data = [
  {
    title: "You will get a pro Shopify private label store",
    description: `
      - Shopify Store Design
      - Quick Responses
      - Mobile-Friendly Optimization
      - Fully Functional Website
      - Free On-Page SEO
      - Winning Products Dropshipping Store
      - Free Domain and Sitemap Submission
    `,
    image: service
  },
  {
    title: "You will get a pro develop and modern WordPress website design",
    description: `
      - Responsive Layout Ensuring Seamless User Experience
      - Tailored Automated Product Setup for Your Niche
      - Comprehensive Niche & Product Research
      - Unique Branded Logo for Your WordPress Site
      - Integration of Sales-Boosting WordPress Plugins
      - Expertly Configured Pages & Menu (About, FAQs, Contact, Policies)
      - Strategic Email Marketing (Abandoned Cart, Order Confirmation, and more)
      - Free Lifetime Support for Your Peace of Mind
    `,
    image: service2
  },
  {
    title: "You will get a pro responsive Wix website design and redesign",
    description: `
      - Engaging Design on Wix for Optimal Conversions
      - Responsive Layout for a Seamless User Experience
      - Unique Branded Logo for Your WordPress Site
      - Integration of Sales-Boosting WordPress Plugins
      - Expertly Configured Pages & Menu (About, FAQs, Contact, Policies)
      - Strategic Email Marketing (Abandoned Cart, Order Confirmation, and more)
      - Free Lifetime Support for Your Peace of Mind
    `,
    image: service3
  },
  {
    title: "You will get a pro Shopify dropshipping store",
    description: `
      - Designing Shopify Store
      - Quick Responses
      - Mobile-Friendly Store
      - Complete functional Shopify website (The website will be ready for visitors)
      - Free On-Page SEO
      - Winning Products Dropshipping Store
      - Free domain and sitemap submission in Google and Bing webmaster tools.
    `,
    image: service4
  },
];

export default function Services() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-white">
        My Services
      </h1>
      
      {/* Grid Layout with 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            className="rounded-lg overflow-hidden shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(103, 124, 201, 0.7) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "50px",
              opacity: 0.85,
              padding: "20px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <a href="#">
              <Image
                className="w-full rounded-t-lg"
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
              />
            </a>
            <div className="p-6 text-white">
              <a
                href="#"
                className="font-semibold text-xl inline-block mb-2"
              >
                {item.title}
              </a>
              <ul className="text-left text-white list-disc pl-5 space-y-2">
                {item.description.split("\n").filter(Boolean).map((line, idx) => (
                  <li key={idx} className="text-sm">{line.trim()}</li>
                ))}
              </ul>

              {/* Add the button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-5 px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300 ease-in-out"
              >
                Get Service
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
