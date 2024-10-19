"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 1",
    amount: "$100",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 2",
    amount: "$200",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 3",
    amount: "$300",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 4",
    amount: "$400",
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 5",
    amount: "$500",
  },
  {
    id: 6,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 6",
    amount: "$600",
  },
  {
    id: 7,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 7",
    amount: "$700",
  },
  {
    id: 8,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 8",
    amount: "$800",
  },
  {
    id: 9,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 9",
    amount: "$900",
  },
  {
    id: 10,
    image: "/path/to/image10.jpg",
    name: "Project 10",
    amount: "$1000",
  },
  {
    id: 11,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 10",
    amount: "$1000",
  },
  {
    id: 12,
    image:
      "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrhk6luVn4qRdKFVNokuABLpPrVmM6cKODfNv_74dHQ=",
    name: "Project 10",
    amount: "$1000",
  },
  // Add more projects if necessary
];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  // Open and close modal functions
  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Pagination calculations
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Page navigation functions
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setTimeout(scrollToTop, 0); // Use setTimeout to ensure the scroll happens after state update
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      setTimeout(scrollToTop, 0); // Use setTimeout to ensure the scroll happens after state update
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setTimeout(scrollToTop, 0); // Use setTimeout to ensure the scroll happens after state update
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-white to-blue-100 min-h-screen">
      {/* Search bar */}
      <div className="flex justify-end mb-8">
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
            onClick={() => openModal(project)}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.name}
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

      {/* Modal for project details */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-md w-full transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
                  {selectedProject && (
                    <>
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        className="w-full h-60 object-cover rounded-lg mb-4"
                      />
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-medium leading-6 text-gray-900"
                      >
                        {selectedProject.name}
                      </Dialog.Title>
                      <div className="mt-4 text-left">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque vehicula dui eget neque gravida, ut
                          efficitur velit pharetra.
                        </p>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <p className="text-xl font-semibold text-green-500">
                          {selectedProject.amount}
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                          Buy Now
                        </button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProjectsPage;
