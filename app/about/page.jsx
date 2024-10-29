"use client";
import React, { useEffect, useState, useContext } from "react";
import img1 from "../about_img.webp";
import img2 from "../about2_img.jpeg"; // Add the new image for the left side
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa"; // Import icons for the buttons
import Footer from "../components/Footer";
import ThemeContext from "../ThemeContext";

const Page = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission"); // Default is "mission"
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Framer motion variants for sliding animations
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 }, // Starts off-screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Determine if the screen is small
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Tailwind's sm: is 640px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Text content for each tab
  const contentData = {
    mission:
      "Our mission is to deliver innovative, cutting-edge solutions that help businesses thrive in the digital age.",
    vision:
      "We aim to be the leading provider of web solutions, making technology accessible for businesses of all sizes.",
    values:
      "Innovation, Customer Success, Integrity and Transparency, Teamwork and Collaboration.",
  };

  const testimonials = [
    '"Their service was top-notch! They truly understood our needs and delivered beyond expectations." - Happy Client',
    '"Working with this team has been a game-changer for us." - Satisfied Customer',
    '"The best experience we’ve ever had. Highly recommend!" - Delighted Client',
    '"Innovative solutions and seamless execution, I’m impressed!" - Thrilled Customer',
  ];

  const openDialog = (member) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedMember(null);
  };

  const members = [
    {
      id: 1,
      name: "Team Member 1",
      role: "Role 1",
      img: img1,
      resume: "Resume 1",
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "Role 2",
      img: img2,
      resume: "Resume 2",
    },
    {
      id: 3,
      name: "Team Member 2",
      role: "Role 2",
      img: img2,
      resume: "Resume 2",
    },
    {
      id: 4,
      name: "Team Member 2",
      role: "Role 2",
      img: img2,
      resume: "Resume 2",
    },
    {
      id: 5,
      name: "Team Member 2",
      role: "Role 2",
      img: img2,
      resume: "Resume 2",
    },
    {
      id: 6,
      name: "Team Member 2",
      role: "Role 2",
      img: img2,
      resume: "Resume 2",
    },
    {
      id: 7,
      name: "Team Member 2",
      role: "Role 2",
      img: img2,
      resume: "Resume 2",
    },
    {
      id: 8,
      name: "Team Member 2",
      role: "Role 2",
      img: img2,
      resume: "Resume 2",
    },
    // Add more team members as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [testimonials.length]);

  return (
    <div
      className={`relative flex flex-col items-center pt-5 pl-8 pr-8 md:pl-10 md:pr-10 lg:pl-32 lg:pr-32 min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-white to-blue-200 text-gray-900"
      }`}
    >
      {/* Hero Section with main image */}
      <div className="relative w-full h-[50vh]">
        <Image
          src={img1}
          alt="About Us"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* Content Section with image on left and content on right */}
      <motion.div
        className={`flex flex-col lg:flex-row items-center justify-center shadow-lg rounded-lg overflow-hidden mt-12 p-8 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left Side - Image */}
        <motion.div
          className="w-full lg:w-1/2 h-64 relative"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={img2}
            alt="Team"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <motion.h2
            className="text-3xl font-semibold mb-4 text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            className={`text-lg leading-relaxed ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"
            }`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          >
            We are a team of dedicated professionals committed to creating
            innovative and user-friendly web solutions. Our mission is to
            deliver high-quality, cutting-edge services that drive success for
            our clients.
          </motion.p>

          {/* Button Section */}
          <div className="flex gap-4 mb-4 pt-5">
            <button
              className={`flex items-center gap-2 p-2 text-lg font-medium ${
                activeTab === "mission"
                  ? "text-white bg-blue-500"
                  : "text-blue-500 border border-blue-500"
              } rounded-lg transition duration-300`}
              onClick={() => setActiveTab("mission")}
            >
              <FaBullseye /> Our Mission
            </button>
            <button
              className={`flex items-center gap-2 p-2 text-lg font-medium ${
                activeTab === "vision"
                  ? "text-white bg-blue-500"
                  : "text-blue-500 border border-blue-500"
              } rounded-lg transition duration-300`}
              onClick={() => setActiveTab("vision")}
            >
              <FaEye /> Our Vision
            </button>
            <button
              className={`flex items-center gap-2 p-2 text-lg font-medium ${
                activeTab === "values"
                  ? "text-white bg-blue-500"
                  : "text-blue-500 border border-blue-500"
              } rounded-lg transition duration-300`}
              onClick={() => setActiveTab("values")}
            >
              <FaHeart /> Our Values
            </button>
          </div>

          {/* Dynamic Text Content with Transition */}
          <motion.p
            key={activeTab}
            className={`text-gray-600 text-lg leading-relaxed ${
              theme === "dark" ? "text-white" : "text-gray-600"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {contentData[activeTab]}
          </motion.p>
        </div>
      </motion.div>

      {/* Backstory and Testimonials */}

      <motion.div className="w-full mt-12 space-y-8">
        {/* Our Story Card */}
        <motion.div
          className={` shadow-lg rounded-lg p-8 flex flex-col lg:flex-row items-center ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900"
          }`}
          initial={{ opacity: 0, x: 100 }} // Starts from the right
          whileInView={{ opacity: 1, x: 0 }} // Moves into view when visible on screen
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left Side - Text */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className=" text-lg leading-relaxed">
              Established in [Year], we began as a small team of passionate
              developers. Over the years, we have grown into a dynamic team,
              working with clients across industries, delivering top-notch web
              solutions.
            </p>
          </div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-1/2 h-64 relative mt-6 lg:mt-0 lg:ml-8"
            initial={{ opacity: 0, scale: 0.9 }} // Start smaller and less opaque
            animate={{ opacity: 1, scale: 1 }} // Scale and fade in
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src={img1} // Replace with actual image path
              alt="Our Story Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Testimonials Card */}
        <motion.div
          className={`shadow-lg rounded-lg p-8 ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900"
          }`}
          initial={{ opacity: 0, y: 100 }} // Start from below
          whileInView={{ opacity: 1, y: 0 }} // Moves up when in view
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }} // Only animates once when it comes into view
        >
          <h2 className="text-4xl font-bold text-center mb-6">
            What Clients Say
          </h2>
          <p className="text-lg leading-relaxed text-center">
            {testimonials[currentTestimonial]}
          </p>
        </motion.div>
      </motion.div>

      {/* Our Team Section */}

      {/* Other sections (Hero, Content, Story, Testimonials) here */}

      {/* Our Team Section */}

      {/* Our Team Section */}
      <motion.div
        className={`w-full shadow-lg rounded-lg mt-12 p-4 sm:p-8 ${
          theme === "dark"
            ? "text-gray-200 bg-gray-800"
            : "text-gray-600 bg-white"
        }`}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: isSmallScreen ? 0 : 0.3 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 sm:p-6 rounded-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: isSmallScreen ? 0 : 0.3 }}
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
                <Image
                  src={member.img}
                  alt={`Team Member ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base">{member.role}</p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-300"
                onClick={() => openDialog(member)}
              >
                View Profile
              </button>
            </motion.div>
          ))}
        </div>

        {/* Dialog Box */}
        {isDialogOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDialog}
          >
            <motion.div
              className="bg-white p-8 rounded-lg w-full max-w-lg relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closeDialog}
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
                  <Image
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4">
                  {selectedMember.role}
                </p>
                <p>{selectedMember.resume}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      <Footer />
    </div>
  );
};

export default Page;
