"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For scroll animations
import UserContext from "../UserContext";
import ThemeContext from "../ThemeContext";

const pages = [
  {
    id: 1,
    name: "Login Page",
    description: "loginDesc",
    imageKey: "loginImage",
  },
  {
    id: 2,
    name: "Signup Page",
    description: "signupDesc",
    imageKey: "signupImage",
  },
  {
    id: 3,
    name: "Homepage",
    description: "homeDesc",
    imageKey: "homeImage",
  },
  {
    id: 4,
    name: "About Page",
    description: "aboutDesc",
    imageKey: "aboutImage",
  },
  {
    id: 5,
    name: "Contact Page",
    description: "contactDesc",
    imageKey: "contactImage",
  },
];

const ProjectDetailsPage = () => {
  const router = useRouter();
  const { projectDetails } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  // Function to navigate to a particular page
  const navigateToPage = (pageName) => {
    router.push(`/${pageName.toLowerCase().replace(/\s/g, "")}`);
  };

  // Framer motion variants for animation
  const leftAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      className={`container mx-auto  rounded-lg shadow-md ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-white to-blue-200 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold p-6 text-center">
        {projectDetails.name} - {projectDetails.amount}
      </h1>

      {/* Main Project Image */}
      <div className="md:w-1/2 mb-4 md:mb-0 mx-auto">
        <Image
          src={projectDetails.image}
          alt={projectDetails.name}
          width={500}
          height={300}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      <div className={`grid gap-16  rounded-lg shadow-lg lg:p-16`}>
        {/* Project Pages with Images */}
        {pages.map((page, index) => (
          <motion.div
            key={page.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } rounded-lg shadow-md p-6 hover:shadow-2xl cursor-pointer ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"
            }`}
            onClick={() => navigateToPage(page.name)}
            variants={index % 2 === 0 ? leftAnimation : rightAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {/* Conditionally Render Image Based on imageKey */}
            {projectDetails[page.imageKey] ? (
              <div className="md:w-1/2 mb-4 md:mb-0">
                <Image
                  src={projectDetails[page.imageKey]}
                  alt={page.name}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            ) : null}

            {/* Text Container */}
            <div className="md:w-1/2 md:px-8">
              <h2 className="text-3xl font-semibold mb-4">{page.name}</h2>
              <p className="text-lg">{projectDetails[page.description]}</p>
            </div>
          </motion.div>
        ))}

        {/* Live Preview and Buy Now Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <button
            className="bg-blue-500 font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => window.open("https://www.google.com", "_blank")}
          >
            Live Preview Of Project
          </button>
          <button
            className="bg-green-500 font-semibold py-3 px-6 rounded-lg hover:bg-green-600 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => router.push("/razorpay")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
