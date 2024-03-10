"use client";

import { motion, useScroll, useInView } from "framer-motion";
import Falcon from "@/components/falcon";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });
  const skillRef = useRef();
  const isSkillRefInView = useInView(
    skillRef,
    { once: true },
    { margin: "-125px" },
  );
  const expRef = useRef();
  const isExpRefInView = useInView(
    expRef,
    { once: true },
    { margin: "-125px" },
  );

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-10 xl:p-48 flex flex-col gap-36 md:gap-48 lg:gap-52 xl:gap-60 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              I'm a seasoned Full-stack JavaScript developer adept at using
              tools like Mongo, Node, Express, React, and Next to create
              engaging web applications. My skills extend beyond development; I
              bring proficiency in marketing, data analysis, leadership, and
              communication, ensuring projects function flawlessly and engage
              effectively.
            </p>
            <span className="italic">
              Patience you must have, my young padawan.
            </span>
            {/* SIGNATURE SVG */}
            <div className="self-end pl-5 lg:self-start lg:pl-24">
              <svg
                width="297"
                height="82"
                viewBox="0 0 297 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M107.975 9.00209C104.87 9.00209 101.571 10.0634 98.8546 10.739C92.9947 12.1967 87.3923 14.3868 82.7065 16.755C78.2984 18.9829 74.2783 21.5019 71.1016 24.2637C65.7234 28.9397 60.9138 34.2146 57.8803 39.453C55.4266 43.6901 54.0308 48.2835 55.6342 52.6973C57.8258 58.7309 64.5217 64.9127 72.599 69.2707C79.1706 72.8163 87.5385 75.0048 95.9789 77.0327C100.354 78.0838 105.313 79.5741 110.119 80M2 4.60543C2.10947 5.18745 3.33595 5.79003 4.21207 6.07098C8.46224 7.43394 12.4877 8.99684 16.7188 10.3862C27.0975 13.7943 37.3268 17.3202 47.4325 20.9436C50.2262 21.9453 52.538 23.2355 55.2768 24.2366C56.3264 24.6203 56.9899 25.2258 57.8973 25.6117C59.414 26.2568 60.5727 27.2967 61.7939 28.0181C62.7706 28.595 63.2938 30.1809 64.4824 30.4969M126.176 47.1065C126.168 47.128 126.158 47.1491 126.146 47.1697M126.146 47.1697C125.903 47.5737 124.88 47.7904 124.305 48.0292C122.634 48.7231 121.161 49.539 119.438 50.2004C116.68 51.2593 113.455 52.7449 111.713 54.3076C107.203 58.3539 102.969 63.4071 106.574 68.1489C108.686 70.926 113.879 72.2688 118.894 73.1246C124.947 74.1577 133.728 75.5745 139.959 74.2192C148.258 72.4143 157.138 70.2762 159.715 65.3445C160.594 63.6625 161.093 62.0535 161.093 60.3055C161.093 59.5637 161.2 58.7222 160.48 58.0529C160.165 57.759 159.809 57.3641 159.63 57.0397C159.381 56.5901 158.719 56.3617 158.405 55.936C157.93 55.2937 156.758 54.8657 156.039 54.2714C155.53 53.8503 153.921 52.8724 153.062 52.6792C151.197 52.2599 149.765 51.1157 147.855 50.7251C144.454 50.0298 141.428 48.6206 137.951 48.0926C135.017 47.6468 132.627 47.1065 129.392 47.1065C128.247 47.1065 127.178 47.124 126.146 47.1697ZM126.146 47.1697C124.276 47.2524 122.528 47.4274 120.663 47.7578M217.274 53.1315C217.088 52.3404 211.33 52.1406 210.212 52.0731C207.378 51.9018 204.66 51.6994 201.823 51.9555C195.398 52.5355 189.137 54.3076 183.821 56.2255C180.051 57.5856 177.28 59.0618 175.619 61.4001C174.033 63.6316 173.908 66.9846 176.095 69.0988C177.62 70.5728 179.516 71.8409 182.187 72.7446C185.842 73.9811 189.319 74.3673 193.622 74.6625C199.951 75.0967 207.77 74.6367 211.386 71.4962C213.655 69.5259 216.44 67.7866 218.21 65.6701C219.374 64.2771 220.863 62.7677 221.562 61.2825C222.089 60.1612 223.197 59.1205 223.774 58.0167C224.519 56.591 226.156 55.0973 226.156 53.611C226.156 51.5511 227.819 49.478 228.3 47.4322C229.025 44.3471 231.834 41.5009 232.588 38.3946C233.568 34.3558 236.908 30.6109 238.169 26.5887C239.197 23.3112 241.145 20.0118 243.002 16.8184C244.21 14.7403 243.84 12.0767 246.082 10.2143C248.129 8.51337 250.379 6.85309 251.578 4.94015C252.223 3.91089 253.747 2.9506 254.641 2M257.939 44.1754C257.939 46.2082 258.743 47.5404 260.713 49.3319C267.515 55.5176 276.145 61.0193 283.821 66.8914C288.184 70.2294 291.65 73.9958 295 77.5574M264.371 53.7829C264.069 52.4951 258.19 51.9916 256.68 51.9916C252.547 51.9916 249.599 52.6532 246.13 53.9095C243.17 54.9818 240.041 56.0383 237.588 57.4468C232.953 60.1085 231.192 64.3536 232.381 67.8775C233.38 70.8347 239.278 72.5271 244.497 72.6813C250.022 72.8445 256.505 74.0618 261.989 73.1246C265.264 72.565 268.108 71.2589 271.11 70.3925C273.04 69.8354 274.737 68.9963 276.317 68.2032C277.641 67.5382 279.138 67.0316 279.686 66.1587"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-400px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-500px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Mongo.DB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Zustand
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tableau
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48 "
            ref={expRef}
          >
            <motion.h1
              initial={{ x: "-400px" }}
              animate={isExpRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-400px" }}
              animate={isExpRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Web Dev
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I wrote programs and did things
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023-Present
                  </div>
                  {/* EMPLOYER */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Patient Padawan Design
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelance Web Dev
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I wrote programs and did things
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023-Present
                  </div>
                  {/* EMPLOYER */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Patient Padawan Design
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelance Web Dev
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I wrote programs and did things
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023-Present
                  </div>
                  {/* EMPLOYER */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Patient Padawan Design
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30">
          <Falcon scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
