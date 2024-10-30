"use client";
import React, { useContext } from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ThemeContext from "./ThemeContext";
import Head from "next/head";

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
    </>
  );
};

export default Page;
