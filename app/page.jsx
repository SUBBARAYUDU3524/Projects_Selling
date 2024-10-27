import React from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-200 min-h-screen w-full">
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
