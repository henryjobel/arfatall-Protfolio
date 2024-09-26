import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import certificate1 from "../../public/certificates/certificate1_page-0001.jpg";
import certificate2 from "../../public/certificates/certificate2_page-0001.jpg";
import certificate3 from "../../public/certificates/certificate3.jpeg";
import crtificate4 from "../../public/certificates/certificate4.jpeg"

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div
  style={{
    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(103, 124, 201, 0.7) 100%)", // Black to #677cc9 gradient
    backdropFilter: "blur(20px)", // Blur effect for the glassy look
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)", // Shadow for a 3D effect
    border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
    borderRadius: "50px", // Rounded corners
    opacity: 0.85, // Transparency
    padding: "20px", // Add padding for space
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "500px"
  }}
>
  <p className="text-white text-xs md:text-xl font-bold mb-8">
    Licenses & Certifications <br />
    Google Ads - Measurement Certification <br />
    Issued Sep 2024 <br />
    Credential ID 115956224
  </p>
  <div>
    <Image
      src={certificate1}
      alt="Google Ads - Measurement Certification"
      width={500}
      height={500}
      style={{
        borderRadius: "15px", // Rounded corners for the image
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)", // Shadow for a subtle 3D effect on the image
      }}
    />
  </div>
</div>

      ),
    },
    {
      title: "2024",
      content: (
        <div
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(103, 124, 201, 0.7) 100%)", // Black to #677cc9 gradient
          backdropFilter: "blur(20px)", // Blur effect for the glassy look
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)", // Shadow for a 3D effect
          border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
          borderRadius: "50px", // Rounded corners
          opacity: 0.85, // Transparency
          padding: "20px", // Add padding for space
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "500px"
        }}
      >
        <p className="text-white text-xs md:text-xl font-bold mb-8">
        Google Analytics Certification <br />
Issued Sep 2024<br />
Credential ID 115856262
        </p>
        <div>
          <Image
            src={certificate2}
            alt="Google Ads - Measurement Certification"
            width={500}
            height={500}
            style={{
              borderRadius: "15px", // Rounded corners for the image
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)", // Shadow for a subtle 3D effect on the image
            }}
          />
        </div>
      </div>
      ),
    },
    
    {
      title: "2019",
      content: (
        <div
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(103, 124, 201, 0.7) 100%)", // Black to #677cc9 gradient
          backdropFilter: "blur(20px)", // Blur effect for the glassy look
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)", // Shadow for a 3D effect
          border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
          borderRadius: "50px", // Rounded corners
          opacity: 0.85, // Transparency
          padding: "20px", // Add padding for space
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "500px"
        }}
      >
        <p className="text-white text-xs md:text-xl font-bold mb-8">
        
The Fundamentals Of Digital Marketing <br />
Google Certified Digital Marketing Course
        </p>
        <div>
          <Image
            src={crtificate4}
            alt="Google Ads - Measurement Certification"
            width={500}
            height={500}
            style={{
              borderRadius: "15px", // Rounded corners for the image
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)", // Shadow for a subtle 3D effect on the image
            }}
          />
        </div>
      </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(103, 124, 201, 0.7) 100%)", // Black to #677cc9 gradient
          backdropFilter: "blur(20px)", // Blur effect for the glassy look
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)", // Shadow for a 3D effect
          border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
          borderRadius: "50px", // Rounded corners
          opacity: 0.85, // Transparency
          padding: "20px", // Add padding for space
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "500px"
        }}
      >
        <p className="text-white text-xs md:text-xl font-bold mb-8">
       

Create Your E-Commerce Store With Shopify <br />
Coursera
        </p>
        <div>
          <Image
            src={certificate3}
            alt="Google Ads - Measurement Certification"
            width={500}
            height={500}
            style={{
              borderRadius: "15px", // Rounded corners for the image
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)", // Shadow for a subtle 3D effect on the image
            }}
          />
        </div>
      </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
