"use client";
import React, { useContext } from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ThemeContext from "./ThemeContext";

const Page = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen w-full ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-white to-blue-200 text-gray-900"
      }`}
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-14">
        <Carousel />
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-14">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
