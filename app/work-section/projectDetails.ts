export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Greats",
    description:
      "Greats is your go-to destination for premium sneakers, offering a wide variety of stylish designs. Enjoy free shipping on all orders, ensuring that your new kicks arrive at your doorstep swiftly!",
    technologies: ["Shopify"],
    github: "https://www.greats.com/",
    demo: "https://www.greats.com/",
    image: require(".//../../public/projects/shiphype.png"),
    available: true,
  },
  {
    id: 1,
    name: "Lark Skin Co",
    description:
      "LARK Skin Co. focuses on natural skincare products designed to help you reconnect with your true self. Experience revitalizing formulas that nourish your skin and enhance your natural beauty every day!",
    technologies: ["Shopify"],
    github: "https://www.larkskinco.com/",
    demo: "https://www.larkskinco.com/",
    image: require(".//../../public/projects/lark.png"),
    available: true,
  },
  {
    id: 2,
    name: "Silvana",
    description:
      "Sivana Spirit offers unique clothing, jewelry, and gifts that empower communities and promote sustainability. Each purchase contributes to meaningful causes, allowing you to shop with purpose while expressing your individual style.",
    technologies: ["Shopify"],
    github: "https://www.sivanaspirit.com/",
    demo: "https://www.sivanaspirit.com/",
    image: require(".//../../public/projects/sivana.png"),
    available: true,
  },
  {
    id: 3,
    name: "Skin MD",
    description:
      "Project Skin MD® is Canada’s leading skincare clinic, specializing in advanced treatments and personalized care. Discover innovative solutions for all skin types and achieve your healthiest, most radiant complexion today!",
    technologies: ["WordPress", "Elementor"],
    github: "https://projectskinmd.com/",
    demo: "https://projectskinmd.com/",
    image: require(".//../../public/projects/skinmd.png"),
    available: true,
  },
  {
    id: 4,
    name: "Anayatechbd",
    description:
      "At Platinum Business, we prioritize professionalism and customer value through teamwork and commitment. Our focus is on delivering quality services that meet business targets and ensure supply and availability at all times.",
    technologies: ["WordPress", "Elementor"],
    github: "https://platinumbusiness.org/",
    demo: "https://platinumbusiness.org/",
    image: require(".//../../public/projects/platinum.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
