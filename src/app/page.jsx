"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col z-10 overflow-auto lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-10 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/static/images/jedi-hero.png"
            alt="Obi Wan Kenobi"
            fill
            className="object-contain"
            priority={true}
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 xshort:pt-[18rem] short:pt-[10rem] lg:h-full lg:w-1/2 flex flex-col gap-6 md:gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold">
            Crafting Digital Experiences Designing Tomorrow
          </h1>
          {/* DESC */}
          <p className="md:text-lg">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="flex pb-5 gap-4 w-full">
            <Link href={"/portfolio"}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
