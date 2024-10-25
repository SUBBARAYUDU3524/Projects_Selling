"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 1",
    amount: "$000",
  },
  // Add more projects if necessary
];

const ProjectsPage = () => {
  const router = useRouter(); // Initialize useRouter hook
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
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

  // Navigate to project details page
  const navigateToProject = () => {
    router.push("/projectdetails"); // Update with the correct path for your project details page
  };

  return (
    <div className="bg-gradient-to-r from-white to-blue-100 min-h-screen px-8 md:px-10 lg:px-32">
      {/* Search bar */}
      <div className="flex justify-end py-5">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            onClick={navigateToProject} // Use navigateToProject function
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
          </div>
        ))}
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
      <Footer />
    </div>
  );
};

export default ProjectsPage;
