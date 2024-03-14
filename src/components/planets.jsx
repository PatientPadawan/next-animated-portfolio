"use client";

import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const Planets = ({ scrollYProgress }) => {
  const opacity0 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [1, 0, 0, 0]
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 0, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 0, 1, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 0, 0, 1]
  );

  const images = [
    { img: "/static/images/tatooine.png", style: opacity0 },
    { img: "/static/images/hoth.png", style: opacity1 },
    { img: "/static/images/cloudCity.png", style: opacity2 },
    { img: "/static/images/dagobah.png", style: opacity3 },
  ];

  return (
    <div className={`hidden sticky top-0 lg:flex flex-col lg:w-1/3`}>
      {images.map((item) => (
        <motion.div
          className={`h-screen relative ml-4 mr-8 rounded-lg my-4 overflow-hidden`}
          key={item.img}
          style={{ opacity: item.style }}
        >
          <Image
            src={item.img}
            alt="Star Wars Planetscapes"
            className="object-cover"
            fill
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Planets;
