import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <span className="cursor-pointer px-3 py-1 transition-colors duration-300 ease-in-out hover:text-blue-400">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="cursor-pointer px-3 py-1 transition-colors duration-300 ease-in-out hover:text-blue-400">
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span className="cursor-pointer px-3 py-1 transition-colors duration-300 ease-in-out hover:text-blue-400">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="cursor-pointer px-3 py-1 transition-colors duration-300 ease-in-out hover:text-blue-400">
                  Contact Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span className="cursor-pointer px-3 py-1 transition-colors duration-300 ease-in-out hover:text-blue-400">
                  Login
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="flex items-center space-x-2">
            <AiOutlineMail className="text-lg" />
            <a href="mailto:info@example.com" className="hover:text-blue-400">
              info@example.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} CompanyName. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
