"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  FaEdit,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa"; // Added FaBars and FaTimes for mobile toggle
import Image from "next/image";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("home");
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu
  const modalRef = useRef(null);

  // Check the authentication state and set the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
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
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Optionally, you can add logic to set the theme in local storage or apply body class
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-gray-900 py-6 px-8 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-900">
          <Link href="/">ERRTEKNALOZY</Link>
        </div>

        {/* Desktop Menu - Show on Large Screens */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/">
            <span
              className={`text-xl font-semibold ${
                activeLink === "home" ? "text-blue-400" : "text-gray-900"
              }`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`text-xl font-semibold ${
                activeLink === "about" ? "text-blue-400" : "text-gray-900"
              }`}
              onClick={() => setActiveLink("about")}
            >
              About Us
            </span>
          </Link>
          <Link href="/services">
            <span
              className={`text-xl font-semibold ${
                activeLink === "services" ? "text-blue-400" : "text-gray-900"
              }`}
              onClick={() => setActiveLink("services")}
            >
              Services
            </span>
          </Link>
          <Link href="/projects">
            <span
              className={`text-xl font-semibold ${
                activeLink === "projects" ? "text-blue-400" : "text-gray-900"
              }`}
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`text-xl font-semibold ${
                activeLink === "contact" ? "text-blue-400" : "text-gray-900"
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Contact Us
            </span>
          </Link>

          {/* User Profile or Login */}
          {user ? (
            <div className="flex items-center space-x-4">
              <Image
                onClick={toggleModal}
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                width={40}
                height={40}
              />
              <span className="text-xl">{user?.displayName || "User"}</span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <span
                className={`text-xl font-semibold ${
                  activeLink === "login" ? "text-blue-400" : "text-gray-900"
                }`}
                onClick={() => setActiveLink("login")}
              >
                Login
              </span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button - Show on Small and Medium Screens */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Fullscreen Mobile Navigation - Visible on Small and Medium Screens */}
        <div
          className={`fixed inset-0 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 md:hidden ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } w-[80%] md:w-[40%]`} // Set width to 80% on small screens, 50% on medium screens
        >
          <div className="flex flex-col  h-full px-8 py-6 overflow-y-auto">
            {/* Theme Toggle Button in Blue Background */}
            <div className="flex justify-end  bg-blue-500 p-2 ">
              <button onClick={toggleTheme} className="text-2xl">
                {isDarkMode ? (
                  <FaSun className="text-white" /> // White Sun in Dark Mode
                ) : (
                  <FaMoon className="text-gray-800" /> // Dark Moon in Light Mode
                )}
              </button>
            </div>
            {/* User Profile Section */}
            <div className="bg-blue-500 text-white p-4  mb-4">
              {" "}
              {/* Different color for user section */}
              {user ? (
                <div className="flex flex-col items-center space-y-2">
                  {" "}
                  {/* Use flex-col for vertical stacking */}
                  <Image
                    onClick={toggleModal}
                    src={
                      user?.photoURL ||
                      "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                    }
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full cursor-pointer"
                    width={64}
                    height={64}
                  />
                  <span className="text-xl">{user?.displayName || "User"}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login">
                  <span
                    className={`text-xl font-semibold ${
                      activeLink === "login" ? "text-blue-400" : "text-gray-900"
                    }`}
                    onClick={() => setActiveLink("login")}
                  >
                    Login
                  </span>
                </Link>
              )}
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col">
              <Link href="/">
                <span
                  className={`flex items-center py-4 text-xl md:text-2xl font-semibold ${
                    activeLink === "home"
                      ? "text-blue-400"
                      : isDarkMode
                      ? "text-white" // White text in dark mode
                      : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("home");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  <FaHome className="mr-2" /> {/* Icon for Home */}
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span
                  className={`flex items-center py-4 text-xl md:text-2xl font-semibold ${
                    activeLink === "about"
                      ? "text-blue-400"
                      : isDarkMode
                      ? "text-white" // White text in dark mode
                      : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("about");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  <FaInfoCircle className="mr-2" /> {/* Icon for About Us */}
                  About Us
                </span>
              </Link>

              <Link href="/services">
                <span
                  className={`flex items-center py-4 text-xl md:text-2xl font-semibold ${
                    activeLink === "services"
                      ? "text-blue-400"
                      : isDarkMode
                      ? "text-white" // White text in dark mode
                      : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("services");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  <FaServicestack className="mr-2" /> {/* Icon for Services */}
                  Services
                </span>
              </Link>

              <Link href="/projects">
                <span
                  className={`flex items-center py-4 text-xl md:text-2xl font-semibold ${
                    activeLink === "projects"
                      ? "text-blue-400"
                      : isDarkMode
                      ? "text-white" // White text in dark mode
                      : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("projects");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  <FaProjectDiagram className="mr-2" />{" "}
                  {/* Icon for Projects */}
                  Projects
                </span>
              </Link>

              <Link href="/contact">
                <span
                  className={`flex items-center py-4 text-xl md:text-2xl font-semibold ${
                    activeLink === "contact"
                      ? "text-blue-400"
                      : isDarkMode
                      ? "text-white" // White text in dark mode
                      : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("contact");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  <FaEnvelope className="mr-2" /> {/* Icon for Contact Us */}
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
