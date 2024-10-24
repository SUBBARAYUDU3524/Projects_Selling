"use client";
import React from "react";
import img1 from "../contact_img.webp";
import Image from "next/image";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { motion } from "framer-motion"; // Import framer-motion for animations

const ContactPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Top Section: Background Image with Heading */}
      <div className="relative flex flex-col items-center pt-5 pl-32 pr-32 min-h-screen bg-gray-100">
        <div className="relative w-full h-[50vh]">
          <Image
            src={img1}
            alt="Contact"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-white text-center">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="pt-10 pb-10">
          <motion.div
            className="flex flex-col p-20 md:flex-row bg-black text-white min-h-screen"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Left Section: Contact Information */}
            <div className="md:w-1/2 w-full p-10 flex flex-col justify-center space-y-8 bg-black">
              <h2 className="text-4xl font-bold">Always Here to Help you</h2>
              <p className="text-lg text-gray-400">
                Rest assured that we are perpetually available and committed to
                providing you with the assistance you need.
              </p>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <FiMapPin className="text-blue-500 text-4xl" />
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <p className="text-gray-400">
                    #235, 2nd & 3rd Floor, Indira Nagar II Stage, Bengaluru,
                    Karnataka 560038
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center space-x-4">
                <FiPhone className="text-blue-500 text-4xl" />
                <div>
                  <h3 className="text-lg font-bold">Contact</h3>
                  <p className="text-gray-400">+919731910827</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <FiMail className="text-blue-500 text-4xl" />
                <div>
                  <h3 className="text-lg font-bold">Email</h3>
                  <p className="text-gray-400">support@campalin.com</p>
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="flex items-center space-x-4">
                <FiClock className="text-blue-500 text-4xl" />
                <div>
                  <h3 className="text-lg font-bold">Hours of operation</h3>
                  <p className="text-gray-400">Tue–Sun: 10:00AM – 7:30PM</p>
                  <p className="text-gray-400">Monday: Holiday</p>
                </div>
              </div>
            </div>

            {/* Right Section: Contact Form */}
            <div className="md:w-1/2 w-full p-20 flex flex-col justify-center bg-gray-700">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready To Get Started?
              </h2>
              <p className="text-gray-300 mb-6">
                Your email address will not be published. Required fields are
                marked.
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-200 font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-200 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-200 font-semibold mb-2"
                  >
                    Enter number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-200 font-semibold mb-2"
                  >
                    Write a message...
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="accept"
                    className="h-5 w-5 text-blue-500 focus:ring-0 focus:outline-none"
                  />
                  <label htmlFor="accept" className="text-gray-300">
                    Accept{" "}
                    <a href="#" className="text-blue-400 underline">
                      terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-400 underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            className="w-full pt-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1011861836965!2d78.80720521482198!3d14.748186689712224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3f3f21ba1e87b%3A0x143607ef508f44f9!2sBadvel%2C%20Andhra%20Pradesh%20516447!5e0!3m2!1sen!2sin!4v1633520576359!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Company Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
