"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaEdit, FaBars, FaTimes } from "react-icons/fa"; // Added FaBars and FaTimes for mobile toggle
import Image from "next/image";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("home");
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                width={40}
                height={40}
              />
              <span className="text-xl">{user.displayName || "User"}</span>

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
          className={`fixed inset-0 bg-white text-gray-900 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 md:hidden`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-3xl"
          >
            <FaTimes />
          </button>

          <div className="flex flex-col justify-between h-full px-8 py-6">
            <div>
              <Link href="/">
                <span
                  className={`block text-2xl font-semibold py-4 ${
                    activeLink === "home" ? "text-blue-400" : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("home");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span
                  className={`block text-2xl font-semibold py-4 ${
                    activeLink === "about" ? "text-blue-400" : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("about");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  About Us
                </span>
              </Link>
              <Link href="/projects">
                <span
                  className={`block text-2xl font-semibold py-4 ${
                    activeLink === "projects"
                      ? "text-blue-400"
                      : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("projects");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  Projects
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className={`block text-2xl font-semibold py-4 ${
                    activeLink === "contact" ? "text-blue-400" : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("contact");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  Contact Us
                </span>
              </Link>
            </div>

            {/* User Profile or Login */}
            {user ? (
              <div className="flex flex-col items-center justify-end space-y-4">
                <Image
                  onClick={toggleModal}
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                  }
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full"
                  width={64}
                  height={64}
                />
                <span className="text-xl">{user.displayName || "User"}</span>

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
                  className={`block text-2xl font-semibold py-4 ${
                    activeLink === "login" ? "text-blue-400" : "text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveLink("login");
                    toggleMobileMenu(); // Close menu on click
                  }}
                >
                  Login
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
