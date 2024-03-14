"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topAnim = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerAnim = {
    closed: {
      opacity: 1,
    },
    opened: {
      opactiy: 0,
    },
  };

  const bottomAnim = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listAnim = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemAnim = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-10 xl:px-48 text-lg xl:text-xl">
      {/* LOCAL LINKS */}
      <div className="hidden md:flex gap-4 md:w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden md:w-1/3 lg:flex justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Patient</span>
          <span className="w-20 h-8 rounded bg-white text-black flex items-center justify-center">
            Padawan
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden gap-4 md:flex md:justify-end md:w-1/3">
        <Link
          href="https://github.com/PatientPadawan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/static/images/github.png" alt="github logo" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alexmbraden"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/static/images/linkedin.png" alt="linkedIn logo" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topAnim}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerAnim}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomAnim}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listAnim}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemAnim} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
