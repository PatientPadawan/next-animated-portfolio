"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  const portfolioRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const portfolio = [
    {
      id: 0,
      color: "from-red-300 to-blue-300",
      title: "EpiCypher",
      desc: "Biotech firm for specialized products, catering to industry needs with convenience and versatility built on BigCommerce platform using HTML CSS JavaScript.",
      img: "/static/images/epiCapture.png",
      link: "https://www.epicypher.com/",
    },
    {
      id: 1,
      color: "from-blue-300 to-violet-300",
      title: "Tabbed Inc",
      desc: "Seamless checkout app for restaurants, currently demoing in select venues. Features an admin dashboard for efficient operations built on GraphQL and TypeScript.",
      img: "/static/images/tabbedCapture.png",
      link: "https://www.tabbedinc.com/",
    },
    {
      id: 2,
      color: "from-violet-300 to-green-300",
      title: "JetSpy",
      desc: "Vue.js and Wordpress-powered platform enabling users to track and analyze jet operating metrics. Seamlessly integrates data for comprehensive insights.",
      img: "/static/images/jetspyCapture.png",
      link: "https://jetspy.com/",
    },
    {
      id: 3,
      color: "from-green-300 to-purple-300",
      title: "QwikBite",
      desc: "Next.js, Tailwind CSS, NextAuth.js, and Stripe-integrated demo showcasing a food delivery service. Demo credit card account number is available upon request.",
      img: "/static/images/qwikbiteCapture.png",
      link: "https://qwik-bite.vercel.app/",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {portfolio.map((project) => (
          <div
            className={`w-full flex items-center justify-center bg-gradient-to-r ${project.color}`}
            key={project.id}
          >
            <div className="flex flex-col text-white w-full">
              <div className="w-full h-56 xl:h-[420px] relative">
                <Image
                  src={project.img}
                  alt="project image"
                  className="object-cover"
                  fill
                />
                <div className="absolute bg-gray-500 bg-opacity-80 opacity-0 hover:opacity-100 transition-all h-full w-full flex flex-col items-center justify-center">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-center mb-4">
                    {project.title}
                  </h1>
                  <p className="w-80 md:w-96 lg:w-[500px] text-sm lg:text-xl xl:w-[600px] text-center">
                    {project.desc}
                  </p>
                  <Link
                    href={project.link}
                    className="flex justify-center"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="py-2 px-6 text-sm md:text-md lg:text-lg bg-black text-white font-semibold m-4 rounded">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="h-[600vh] relative" ref={portfolioRef}>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {portfolio.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
                key={project.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {project.title}
                  </h1>
                  <div className="w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] relative">
                    <Image
                      src={project.img}
                      alt="project image"
                      className="object-cover"
                      fill
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-xl xl:w-[600px]">
                    {project.desc}
                  </p>
                  <Link
                    href={project.link}
                    className="flex justify-end"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div> */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-white">
        <h1 className="text-5xl sm:text-6xl md:text-8xl">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 8, repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-stack Web Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href={"/contact"}
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
