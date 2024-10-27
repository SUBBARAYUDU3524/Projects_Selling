"use client";
import React, { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaRocket,
  FaPaintBrush,
  FaChartLine,
} from "react-icons/fa"; // Import icons
import Footer from "../components/Footer";
import { motion } from "framer-motion"; // Import framer-motion
import chooseImg from "../images/WhyChooseUS.jpeg";
import Image from "next/image";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: chooseImg, // Replace with the actual path of your images
      text: "iLander's team transformed our online presence, boosting our website traffic by 150%!",
      name: "Aron Loeb",
      role: "CEO, Company",
      rating: 5,
    },
    {
      image: chooseImg,
      text: "Their innovative approach and quality service has helped us reach new heights in customer satisfaction.",
      name: "Jane Doe",
      role: "CTO, TechCorp",
      rating: 4,
    },
    {
      image: chooseImg,
      text: "We are extremely happy with the results and look forward to future projects with iLander!",
      name: "Mark Smith",
      role: "Manager, Solutions Inc.",
      rating: 5,
    },
  ];

  useEffect(() => {
    // Automatically change testimonials every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const { image, text, name, role, rating } = testimonials[currentIndex];

  return (
    <div className="min-h-screen  flex flex-col items-center py-10 px-4 md:px-10 lg:px-32 lg:text-lg">
      {/* Header */}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-10 ">
        Our Services
      </h2>

      {/* Service List */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Trigger at 30% visibility
        variants={{
          hidden: { opacity: 0, x: -50 }, // Change x value as needed
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
        className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer w-full text-center mx-auto"
      >
        <div className="relative w-full max-w-4xl mx-auto my-5">
          {/* Vertical Line for desktop */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

          {/* Service 1 - Website Designing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col md:flex-row items-center mb-10 text-center md:text-left"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-10 mb-6 md:mb-0">
              <div className="bg-pink-100 p-6 md:p-8 rounded-full">
                <FaLaptopCode className="text-pink-500 text-3xl md:text-4xl" />
              </div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-10">
              <h3 className="text-pink-500 font-bold text-lg md:text-xl">
                WEBSITE DESIGNING
              </h3>
              <p className="text-gray-600 mt-2">
                Web Design contains a website with web pages linked to each
                other using a font or graphics-based logo, and containing text
                and simple design graphics.
              </p>
            </div>
          </motion.div>

          {/* Service 2 - Website Development */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col md:flex-row items-center mb-10 text-center md:text-left"
          >
            <div className="w-full md:w-1/2 pl-0 md:pl-10 mb-6 md:mb-0 order-last md:order-first">
              <h3 className="text-orange-500 font-bold text-lg md:text-xl">
                WEBSITE DEVELOPMENT
              </h3>
              <p className="text-gray-600 mt-2 pr-5">
                We focus on creating dynamic websites and highlight the benefits
                of this type of website for our clients to understand better.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-10">
              <div className="bg-orange-100 p-6 md:p-8 rounded-full">
                <FaRocket className="text-orange-500 text-3xl md:text-4xl" />
              </div>
            </div>
          </motion.div>

          {/* Service 3 - Graphic Designing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col md:flex-row items-center mb-10 text-center md:text-left"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-10 mb-6 md:mb-0">
              <div className="bg-green-100 p-6 md:p-8 rounded-full">
                <FaPaintBrush className="text-green-500 text-3xl md:text-4xl" />
              </div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-10">
              <h3 className="text-green-500 font-bold text-lg md:text-xl">
                GRAPHIC DESIGNING
              </h3>
              <p className="text-gray-600 mt-2">
                When it comes to logo design, we have the right approach and
                talented designers, but this does not make a logo design
                strategy.
              </p>
            </div>
          </motion.div>

          {/* Service 4 - Digital Marketing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col md:flex-row items-center mb-10 text-center md:text-left"
          >
            <div className="w-full md:w-1/2 pl-0 md:pl-10 mb-6 md:mb-0 order-last md:order-first">
              <h3 className="text-teal-500 font-bold text-lg md:text-xl">
                DIGITAL MARKETING
              </h3>
              <p className="text-gray-600 mt-2 pr-5">
                At iLander, we provide expert SEO services! We understand what
                it takes to get your business found on the web and break down
                the art and science behind SEO.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-10">
              <div className="bg-teal-100 p-6 md:p-8 rounded-full">
                <FaChartLine className="text-teal-500 text-3xl md:text-4xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Choose Us */}

      <div className="bg-white py-6 px-4 rounded-lg shadow-md my-10 w-full flex flex-col md:flex-row">
        {/* Image on the left */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {" "}
          {/* Adjust margins for small screens */}
          <Image
            src={chooseImg} // Replace with your image source
            alt="Description of the image"
            className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105" // Add hover effect
          />
        </div>

        {/* Text content on the right */}
        <div className="w-full md:w-2/3 pl-0 md:pl-4 lg:pt-8 lg:pl-10">
          <h3 className="text-xl font-bold text-blue-700 mb-4 text-left">
            Why Choose Us?
          </h3>
          <p className="text-gray-600 text-left">
            Our team is dedicated to delivering innovative and impactful
            solutions for all your digital needs. We prioritize customer
            satisfaction, quality, and timely delivery.
          </p>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-blue-600 py-6 px-4 rounded-lg shadow-md my-10 w-full flex flex-col items-center">
        {/* Image */}
        <div className="relative mb-4">
          <Image
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
            width={96}
            height={96}
          />
        </div>

        {/* Testimonial Text */}
        <p className="text-white text-center px-4 mb-4">"{text}"</p>

        {/* Client Name and Role */}
        <h4 className="text-white font-bold">{name}</h4>
        <p className="text-white">{role}</p>

        {/* Star Rating */}
        <div className="flex space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < rating ? "text-yellow-400" : "text-gray-400"}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-10 w-full max-w-4xl">
        <h3 className="text-xl font-bold text-blue-700 mb-4">
          Frequently Asked Questions
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">
            What makes iLander’s website design unique?
          </h4>
          <p className="text-gray-600">
            We emphasize user-friendly designs with high-quality graphics
            tailored to your brand’s needs.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">
            How long does it take to build a website?
          </h4>
          <p className="text-gray-600">
            Our development timeline varies depending on project complexity.
            Most projects take 4-8 weeks from start to finish.
          </p>
        </div>
      </div>

      {/* Call-to-Action (CTA) */}
      <div className="bg-blue-100 p-6 mt-10 rounded-lg text-center">
        <h3 className="text-xl font-bold text-blue-700">
          Ready to elevate your brand?
        </h3>
        <p className="text-gray-600 mt-2">
          Get in touch with us today to discover how we can help you reach your
          goals.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600">
          Contact Us
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;