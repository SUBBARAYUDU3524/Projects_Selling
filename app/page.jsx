import React from "react";
import Carousel from "./components/Carousel";

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom-right, white, #add8e6)", // White to light blue gradient
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full page height
        width: "100%", // Full width
      }}
    >
      <Carousel />
    </div>
  );
};

export default Page;
