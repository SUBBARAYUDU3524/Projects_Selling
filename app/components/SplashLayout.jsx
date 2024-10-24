"use client"; // Client-side code for splash screen and layout
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SplashScreen = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-black text-white"
      style={{
        backgroundImage:
          'url("https://www.netscribes.com/wp-content/uploads/2023/04/Blog-cover_1-1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1
        className="text-9xl font-bold"
        style={{
          animation: "fadeIn 2s ease-in-out, bounceIn 2s ease-out",
          // Adding keyframes directly in style
          "@keyframes fadeIn": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          "@keyframes bounceIn": {
            "0%": { transform: "scale(0.5)", opacity: 0 },
            "50%": { transform: "scale(1.1)", opacity: 1 },
            "100%": { transform: "scale(1)", opacity: 1 },
          },
        }}
      >
        ERRTEKNALOZY
      </h1>
    </div>
  );
};

const SplashLayout = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a 5-second timeout for the splash screen
    const timer = setTimeout(() => setShowSplash(false), 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar /> {/* Navbar will display after the splash screen */}
          <main className="min-h-screen w-full bg-gray-100 text-gray-900">
            {children} {/* Page content */}
          </main>
          <Footer /> {/* Footer will display after splash screen */}
        </>
      )}
    </>
  );
};

export default SplashLayout;
