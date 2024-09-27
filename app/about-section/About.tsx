import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden  bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I MAKE BRANDS BEAUTIFUL, WEBSITES POWERFUL AND CONTENT CAPTIVATING."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I specialize in crafting high-converting landing pages and websites for SaaS, Web3 & AI startups. I'm passionate about building software that makes a difference and Digital Markeing."
              }
            />
            <AnimatedBody
              text={
                "I'm an experienced website developer and digital marketer with expertise in Shopify and WordPress. Along with SEO optimization, my areas of expertise are Facebook Ads, Instagram, TikTok, and SEO marketing. I have a limited educational background, but I have refined my abilities to produce high-caliber work. With over 6 years of experience, "
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "I'm dedicated to offering top-notch services on Fiverr and Upwork, and I use LinkedIn to network with other experts. Together, we can strengthen your brand and grow your company to new heights. I appreciate your consideration."
              }
            />
            <AnimatedBody
              text={
                "When I'm not coding, you can find me binge-watching anime, hanging out with friends, cheering on Manchester United, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React, Next.js, TypeScript, Prismic CMS, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik, WordPress, PHP."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, GSAP, Bootstrap, Chart.js, Aceternity UI."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, FigJam, Elementor, WPBakery, DIVI"
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
