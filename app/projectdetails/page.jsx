"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For scroll animations

const pages = [
  {
    id: 1,
    name: "Login Page",
    description:
      "This is the login page where users can access their accounts.",
    image: "https://via.placeholder.com/300x200.png?text=Login+Page",
  },
  {
    id: 2,
    name: "Signup Page",
    description: "This is the signup page where new users can register.",
    image: "https://via.placeholder.com/300x200.png?text=Signup+Page",
  },
  {
    id: 3,
    name: "Homepage",
    description: "The homepage serves as the main entry point to the site.",
    image: "https://via.placeholder.com/300x200.png?text=Homepage",
  },
  {
    id: 4,
    name: "About Page",
    description:
      "The about page gives an overview of the website and its purpose.",
    image: "https://via.placeholder.com/300x200.png?text=About+Page",
  },
  {
    id: 5,
    name: "Contact Page",
    description:
      "The contact page contains details on how users can reach out.",
    image: "https://via.placeholder.com/300x200.png?text=Contact+Page",
  },
];

const ProjectDetailsPage = () => {
  const router = useRouter(); // Router to navigate to individual pages

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Project Details</h1>

      <div className="container mx-auto py-16">
        <div className="grid gap-16">
          {pages.map((page, index) => (
            <motion.div
              key={page.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl cursor-pointer`}
              onClick={() => navigateToPage(page.name)}
              variants={index % 2 === 0 ? leftAnimation : rightAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }} // Ensure the animation occurs on scroll
            >
              {/* Image container */}
              <div className="md:w-1/2 mb-4 md:mb-0">
                <Image
                  src={page.image}
                  alt={page.name}
                  width={500} // Increased image size
                  height={300}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              {/* Text container */}
              <div className="md:w-1/2 md:px-8">
                <h2 className="text-3xl font-semibold mb-4">{page.name}</h2>
                <p className="text-lg text-gray-700">{page.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Live Preview and Buy Now Buttons */}
        <div className="mt-10 flex justify-center gap-6">
          {/* Live Preview Button */}
          <button
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => window.open("https://www.google.com", "_blank")} // Example route for the live preview
          >
            Live Preview Of Project
          </button>

          {/* Buy Now Button */}
          <button
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => alert("Redirecting to purchase...")} // Example Buy Now action
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
