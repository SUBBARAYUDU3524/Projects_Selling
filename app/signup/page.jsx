"use client"; // Mark this component as a client component

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import { motion } from "framer-motion";
import ThemeContext from "../ThemeContext";
import signup from "../../public/images/signup.jpeg";
import Image from "next/image";

export default function SignUp() {
  const { theme } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      let imageURL = "";
      if (image) {
        const imageRef = ref(storage, `profile_images/${user.uid}`);
        await uploadBytes(imageRef, image);
        imageURL = await getDownloadURL(imageRef);
      }

      await updateProfile(user, {
        displayName: username,
        photoURL: imageURL,
      });

      await setDoc(doc(db, "users", user.uid), {
        username,
        phone,
        gender,
        email: user.email,
        photoURL: imageURL,
      });

      toast.success("SignUp successful! Redirecting to login...");

      router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Head>
        {/* SEO and meta tags */}
        <title>ErrTeknalozy | Signup - Create Your Account</title>
        <meta name="description" content="Create your ErrTeknalozy account." />
        {/* Additional meta tags here */}
      </Head>

      <div
        className={`flex min-h-screen items-center justify-center p-4 md:p-10 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-br from-white to-blue-200 text-gray-900"
        }`}
      >
        <Toaster />
        <div
          className={`p-4 md:p-10 ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          } rounded-lg shadow-lg`}
        >
          <div className="flex flex-col md:flex-row items-center max-w-5xl ">
            {/* Image Section with Framer Motion */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 md:w-[50%] shadow-lg overflow-hidden p-5 md:p-0"
            >
              <Image
                src={signup}
                alt="Signup illustration"
                width={500}
                height={500}
                className="w-full h-auto max-w-full max-h-full object-cover md:h-[700px] md:w-[500px] "
              />
            </motion.div>

            {/* Form Section with Framer Motion */}
            <motion.form
              onSubmit={handleSignUp}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 w-full max-w-md md:max-w-[500px] p-4 md:p-8 shadow-lg flex flex-col justify-center mx-auto"
            >
              <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Profile Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Gender</label>
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
                    <span className="ml-2">Male</span>
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
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>

              <p className="mt-4 text-center text-lg">
                Already signed up?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Please login
                </Link>
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
}
