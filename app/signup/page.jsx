"use client"; // Mark this component as a client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import for storage
import { storage, db, auth } from "../firebaseConfig";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male"); // Default gender
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null); // State for the image
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user", user);

      // Handle image upload
      let imageURL = "";
      if (image) {
        const imageRef = ref(storage, `profile_images/${user.uid}`);
        await uploadBytes(imageRef, image);
        imageURL = await getDownloadURL(imageRef);
      }

      // Set displayName in Firebase Authentication
      await updateProfile(user, {
        displayName: username,
        photoURL: imageURL, // Set the profile image URL
      });

      // Save additional user details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username, // Include displayName as username
        phone: phone, // User's phone number
        gender: gender, // User's gender
        email: user.email, // User's email
        photoURL: imageURL, // Store the image URL in Firestore
      });

      toast.success("SignUp successful! Redirecting To Login...");

      // Redirect to login page after successful sign-up
      router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>
          ErrTeknalozy | Signup - Create Your Account for Web & App Services
        </title>
        <meta
          name="description"
          content="Create your ErrTeknalozy account to access personalized tech solutions, web development, and app development services. Join us for a secure and streamlined signup experience."
        />
        <meta
          name="keywords"
          content="ErrTeknalozy, Signup, Account Creation, User Registration, Create Account, Join Now, Sign Up Page, Web Services Registration, App Services Signup, New Account, Secure Onboarding, Member Registration, Join ErrTeknalozy, Start Now, User Signup, Client Registration, Developer Signup, Secure Account Creation, Tech Solutions Access"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://errteknalozy.netlify.app/signup"
        />
        <meta
          property="og:title"
          content="ErrTeknalozy | Signup - Create Your Account for Web & App Services"
        />
        <meta
          property="og:description"
          content="Sign up for ErrTeknalozy to access tech solutions, web and app development services, and a secure user experience."
        />
        <meta
          property="og:image"
          content="https://errteknalozy.netlify.app/og-image-signup.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://errteknalozy.netlify.app/signup"
        />
        <meta
          name="twitter:title"
          content="ErrTeknalozy | Signup - Create Your Account for Web & App Services"
        />
        <meta
          name="twitter:description"
          content="Sign up for ErrTeknalozy to access tech solutions, web and app development services, and a secure user experience."
        />
        <meta
          name="twitter:image"
          content="https://errteknalozy.netlify.app/twitter-image-signup.jpg"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ErrTeknalozy Signup",
            url: "https://errteknalozy.netlify.app/signup",
            description:
              "Create an account on ErrTeknalozy to access tech solutions, web development, and app services. Join securely and start your journey today.",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://errteknalozy.netlify.app/search?query={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6">
        <Toaster />
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Sign Up
          </h1>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Gender
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
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

          {/* Error Display */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-gray-700 text-sm">
            Already signed up?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Please login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
