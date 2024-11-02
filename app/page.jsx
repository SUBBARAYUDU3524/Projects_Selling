"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ThemeContext from "./ThemeContext";
import Head from "next/head";
import { SiGooglegemini } from "react-icons/si";
import errtek from "./home1.jpeg";
import Image from "next/image";

const Page = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>ErrTeknalozy | Home - Tech Solutions & Innovation</title>
        <meta
          name="description"
          content="Welcome to ErrTeknalozy, your go-to source for tech solutions, insights, and innovative ideas tailored for modern web development and design."
        />
        <meta
          name="keywords"
          content="ErrTeknalozy, Home, Tech Solutions, Web Development, Technology Blog, Modern Tech, Innovation"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://errteknalozy.netlify.app" />
        <meta
          property="og:title"
          content="ErrTeknalozy | Home - Tech Solutions & Innovation"
        />
        <meta
          property="og:description"
          content="Explore ErrTeknalozy for innovative tech solutions, web development insights, and modern design ideas."
        />
        <meta
          property="og:image"
          content="https://errteknalozy.netlify.app/og-image.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://errteknalozy.netlify.app" />
        <meta
          name="twitter:title"
          content="ErrTeknalozy | Home - Tech Solutions & Innovation"
        />
        <meta
          name="twitter:description"
          content="Explore ErrTeknalozy for innovative tech solutions, web development insights, and modern design ideas."
        />
        <meta
          name="twitter:image"
          content="https://errteknalozy.netlify.app/twitter-image.jpg"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ErrTeknalozy",
            url: "https://errteknalozy.netlify.app",
            description:
              "Explore ErrTeknalozy for tech solutions, insights, and modern web development ideas.",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://errteknalozy.netlify.app/search?query={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>

      <div
        className={`min-h-screen ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-br from-white to-blue-200 text-gray-900"
        }`}
      >
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
          className="text-center py-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to ErrTeknalozy
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Your source for tech solutions, insights, and innovation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
          >
            Explore Our Services
          </motion.button>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className=" sm:px-6 md:px-10 lg:px-14"
        >
          <Carousel />
        </motion.div>

        {/* About ErrTeknalozy Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
          className={`py-16 px-4  mt-10 sm:px-6 md:px-10 lg:px-14 rounded-lg shadow-lg lg:mx-16 ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
              : "bg-white text-gray-900"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="w-full md:w-1/2"
            >
              <Image
                src={errtek}
                alt="About ErrTeknalozy"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="w-full md:w-1/2 space-y-4"
            >
              <h2 className="text-3xl font-bold text-center mb-8">
                About ErrTeknalozy
              </h2>

              <h3 className="text-2xl font-semibold mb-2">
                Innovating the Future with Technology
              </h3>
              <p className="text-lg">
                At ErrTeknalozy, we’re passionate about driving technological
                progress. Our mission is to provide cutting-edge tech solutions
                tailored to meet the needs of modern businesses and individuals.
              </p>
              <p className="text-lg">
                Our team of experts is dedicated to innovation, quality, and
                excellence. From web development to tech consulting, we are here
                to empower you with the tools you need for success in today’s
                digital world.
              </p>
              <p className="text-lg">
                Discover what ErrTeknalozy can do for you – let’s create
                something extraordinary together.
              </p>
              {/* Centered Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  View About Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Services Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
          className={`py-16 px-4  mt-10 sm:px-6 md:px-10 lg:px-14  rounded-lg shadow-lg lg:mx-16 ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
              : "bg-white text-gray-900"
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Key Services
          </h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            {/* Service Boxes */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-lg shadow-lg "
            >
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>
                High-quality, responsive websites tailored to your needs and
                designed with modern technology.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-lg shadow-lg "
            >
              <h3 className="text-xl font-semibold mb-2">Tech Consulting</h3>
              <p>
                Get expert advice on your tech stack, development processes, and
                digital strategy.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-lg shadow-lg "
            >
              <h3 className="text-xl font-semibold mb-2">
                Innovative Solutions
              </h3>
              <p>
                Cutting-edge solutions to keep you ahead in the rapidly evolving
                tech landscape.
              </p>
            </motion.div>
          </motion.div>

          {/* View All Services Button */}
          <motion.div
            className="mt-8 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              View All Services
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Footer with Gemini Icon Fixed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="px-4 sm:px-6 md:px-10 lg:px-14"
        >
          <Footer />

          {/* Gemini Icon */}
          <motion.a
            href="/geminiai"
            className="fixed right-4 mr-10 bottom-4 md:bottom-8 md:right-8 bg-blue-600 p-4 rounded-full shadow-lg text-white hover:bg-blue-700 z-50"
            whileHover={{ scale: 1.1 }}
            title="Gemini"
          >
            <SiGooglegemini size={24} />
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
