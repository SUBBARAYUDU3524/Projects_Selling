"use client"; // Mark this component as a client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Link from "next/link";
import Image from "next/image";
import { auth } from "../firebaseConfig";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful! Redirecting...");
      router.push("/"); // Redirect to dashboard or another page after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Login successful! Redirecting...");
      router.push("/"); // Redirect after successful Google sign-in
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>
          ErrTeknalozy | Login - Access Your Account for Web & App Services
        </title>
        <meta
          name="description"
          content="Login to ErrTeknalozy to access your personalized dashboard and manage your web and app development services. Secure account access for clients and developers."
        />
        <meta
          name="keywords"
          content="ErrTeknalozy, Login, Account Access, Secure Login, Client Login, User Authentication, Web Services Login, App Services Login, Tech Solutions, Member Area, Dashboard Access, Sign In, Client Portal, Secure Authentication, Account Management, Developer Portal"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://errteknalozy.netlify.app/login"
        />
        <meta
          property="og:title"
          content="ErrTeknalozy | Login - Access Your Account for Web & App Services"
        />
        <meta
          property="og:description"
          content="Login to ErrTeknalozy to access your dashboard, manage services, and explore tech solutions."
        />
        <meta
          property="og:image"
          content="https://errteknalozy.netlify.app/og-image-login.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://errteknalozy.netlify.app/login"
        />
        <meta
          name="twitter:title"
          content="ErrTeknalozy | Login - Access Your Account for Web & App Services"
        />
        <meta
          name="twitter:description"
          content="Login to ErrTeknalozy to access your dashboard, manage services, and explore tech solutions."
        />
        <meta
          name="twitter:image"
          content="https://errteknalozy.netlify.app/twitter-image-login.jpg"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ErrTeknalozy Login",
            url: "https://errteknalozy.netlify.app/login",
            description:
              "Login to ErrTeknalozy to access your dashboard, manage web and app development services, and explore tech solutions.",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://errteknalozy.netlify.app/search?query={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6">
        <Toaster /> {/* Add Toaster to render notifications */}
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <hr className="my-6 border-gray-300" />
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-white text-black py-2 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
                alt="Google Icon"
                className="w-6 h-6 mr-8"
                width={24} // Set the width explicitly
                height={24} // Set the height explicitly
              />
              Sign In with Google
            </button>
          </div>
          <p className="text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
