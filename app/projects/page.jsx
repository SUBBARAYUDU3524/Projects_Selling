"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion"; // Import framer-motion

const projects = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 1",
    amount: "$000",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "lroject 2",
    amount: "$2000",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "mroject 2",
    amount: "$2000",
  },
  // Add more projects if necessary
];

const ProjectsPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navigateToProject = () => {
    router.push("/projectdetails");
  };

  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>
          ErrTeknalozy | Projects - Explore Our Development & Tech Solutions
          Portfolio
        </title>
        <meta
          name="description"
          content="Discover ErrTeknalozy’s diverse portfolio of development projects, from web solutions to app innovations. Explore our work in design, technology, and client success stories."
        />
        <meta
          name="keywords"
          content="ErrTeknalozy, Projects, Portfolio, Development Projects, Tech Solutions, Case Studies, Web Development Portfolio, App Development Projects, Client Success Stories, Innovation Portfolio, Featured Projects, ErrTeknalozy Work, Our Projects, Technology Solutions, Project Showcase, Completed Projects, Client Projects, Digital Solutions Portfolio, Design & Development"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://errteknalozy.netlify.app/projects"
        />
        <meta
          property="og:title"
          content="ErrTeknalozy | Projects - Explore Our Development & Tech Solutions Portfolio"
        />
        <meta
          property="og:description"
          content="Explore ErrTeknalozy’s portfolio of projects showcasing innovative web and app development solutions. View case studies, success stories, and design excellence."
        />
        <meta
          property="og:image"
          content="https://errteknalozy.netlify.app/og-image-projects.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://errteknalozy.netlify.app/projects"
        />
        <meta
          name="twitter:title"
          content="ErrTeknalozy | Projects - Explore Our Development & Tech Solutions Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore ErrTeknalozy’s portfolio of projects showcasing innovative web and app development solutions. View case studies, success stories, and design excellence."
        />
        <meta
          name="twitter:image"
          content="https://errteknalozy.netlify.app/twitter-image-projects.jpg"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ErrTeknalozy Projects",
            url: "https://errteknalozy.netlify.app/projects",
            description:
              "Explore ErrTeknalozy’s diverse portfolio of development projects, showcasing expertise in web and app solutions and highlighting client success.",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://errteknalozy.netlify.app/search?query={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>

      <div className="bg-gradient-to-r from-white to-blue-100 min-h-screen">
        {/* Search bar */}
        <div className="flex justify-end py-5 px-4 sm:px-8 md:px-10 lg:px-32">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-2 top-2 text-gray-500">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="bg-blue-50 px-4 sm:px-8 md:px-10 lg:px-32 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={navigateToProject}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // Trigger at 30% visibility
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={960}
                  height={540}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-green-500 text-lg font-semibold">
                    {project.amount}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={previousPage}
            className={`px-3 py-2 rounded-md bg-blue-500 text-white ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={`px-3 py-2 rounded-md ${
                  currentPage === pageNumber
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}

          <button
            onClick={nextPage}
            className={`px-3 py-2 rounded-md bg-blue-500 text-white ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
