import React from "react";
import {
  FaLaptopCode,
  FaRocket,
  FaPaintBrush,
  FaChartLine,
} from "react-icons/fa"; // Import icons

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-200 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
        Our Services
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* Vertical Line for desktop, hidden on small screens */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

        {/* Service 1 - Website Designing */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10 text-center md:text-left">
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
              Web Design contains a website with web pages linked to each other
              using a font or graphics-based logo, and containing text and
              simple design graphics.
            </p>
          </div>
        </div>

        {/* Service 2 - Website Development */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10 text-center md:text-left">
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
        </div>

        {/* Service 3 - Graphic Designing */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10 text-center md:text-left">
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
              talented designers, but this does not make a logo design strategy.
            </p>
          </div>
        </div>

        {/* Service 4 - Digital Marketing */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10 text-center md:text-left">
          <div className="w-full md:w-1/2 pl-0 md:pl-10 mb-6 md:mb-0 order-last md:order-first">
            <h3 className="text-teal-500 font-bold text-lg md:text-xl">
              DIGITAL MARKETING
            </h3>
            <p className="text-gray-600 mt-2">
              At iLander, we provide expert SEO services! We understand what it
              takes to get your business found on the web and break down the art
              and science behind SEO.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-10">
            <div className="bg-teal-100 p-6 md:p-8 rounded-full">
              <FaChartLine className="text-teal-500 text-3xl md:text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
