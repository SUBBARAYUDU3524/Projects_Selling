"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaEdit } from "react-icons/fa"; // For the edit icon
import Image from "next/image";
import { auth } from "../firebaseConfig";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Check the authentication state and set the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("current user", currentUser);
      } else {
        setUser(null); // User is not logged in
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle user sign out
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // After signing out, clear the user state
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <nav className="bg-white text-gray-900 py-6 px-8 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-900">
          <Link href="/">ERRTEKNALOZY</Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <span
              className={`relative text-xl cursor-pointer px-4 py-2 transition-colors duration-300 ease-in-out ${
                activeLink === "home" ? "text-blue-400" : "text-gray-900"
              } group`}
              onClick={() => setActiveLink("home")}
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 "></span>
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`relative cursor-pointer text-xl px-4 py-2 transition-colors duration-300 ease-in-out ${
                activeLink === "about" ? "text-blue-400" : "text-gray-900"
              } group`}
              onClick={() => setActiveLink("about")}
            >
              About Us
              <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Link>
          <Link href="/projects">
            <span
              className={`relative cursor-pointer text-xl px-4 py-2 transition-colors duration-300 ease-in-out ${
                activeLink === "projects" ? "text-blue-400" : "text-gray-900"
              } group`}
              onClick={() => setActiveLink("projects")}
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`relative cursor-pointer text-xl px-4 py-2 transition-colors duration-300 ease-in-out ${
                activeLink === "contact" ? "text-blue-400" : "text-gray-900"
              } group`}
              onClick={() => setActiveLink("contact")}
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Link>

          {/* Display login or user profile */}
          {user ? (
            <div className="relative flex items-center space-x-4 cursor-pointer">
              <Image
                onClick={toggleModal}
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span onClick={toggleModal} className="text-xl">
                {user.displayName || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Logout
              </button>

              {/* Modal for showing profile */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div
                    ref={modalRef}
                    className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
                  >
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                      onClick={toggleModal}
                    >
                      ✕
                    </button>
                    <div className="text-center">
                      <Image
                        src={
                          user.photoURL ||
                          "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                        }
                        alt="User Avatar"
                        className="w-24 h-24 mx-auto rounded-full mb-4"
                      />
                      <div className="text-2xl font-semibold flex justify-center items-center space-x-2">
                        <span>{user.displayName || "User"}</span>
                        <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
                      </div>
                      <p className="text-gray-500 mt-2">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <span
                className={`relative cursor-pointer text-xl px-4 py-2 transition-colors duration-300 ease-in-out ${
                  activeLink === "login" ? "text-blue-400" : "text-gray-900"
                } group`}
                onClick={() => setActiveLink("login")}
              >
                Login
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
