"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const displayMsg = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-10 xl:px-48 text-lg xl:text-xl">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex items-center justify-center lg:h-full lg:w-1/2">
          <div>
            {displayMsg.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="ml-2">🤩</span>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-4 lg:p-24"
        >
          <span>Dear Patient Padawan,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black select-auto outline-none resize-none"
            name="user_message"
          />
          <span>My email address is:</span>
          <input
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_email"
            required
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Message sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Oops we encountered an error!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
