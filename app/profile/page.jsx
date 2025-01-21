"use client";
import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Update with your path
import Image from "next/image";

const ProfileBox = ({ user, onClose }) => {
  // Ensure `user` is defined before using it
  const [displayName, setDisplayName] = useState(
    user ? user.displayName || "" : ""
  );

  // Handle profile update
  const handleUpdateProfile = async () => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName });
        alert("Profile updated successfully");
        onClose(); // Close the profile box after update
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  // Return null or some loading UI if user is not yet defined
  if (!user) return null;

  return (
    <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-50">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        &times;
      </button>
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={
            user.photoURL ||
            "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
          }
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="text-xl font-semibold">{user.displayName || "User"}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Update Profile
      </button>

      {/* Optional Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-600 transition-colors duration-300 w-full"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileBox;
