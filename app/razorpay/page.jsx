"use client";
import { useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOd5ECgMhm1-ZnQ24xarH1PpLbjfgMW54",
  authDomain: "test-api-21587.firebaseapp.com",
  databaseURL: "https://test-api-21587-default-rtdb.firebaseio.com",
  projectId: "test-api-21587",
  storageBucket: "test-api-21587.appspot.com",
  messagingSenderId: "799269760293",
  appId: "1:799269760293:web:6769ef12be08610804becc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const RazorpayComponent = () => {
  const RAZORPAY_KEY_ID = "YOUR_RAZORPAY_KEY_ID";

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      // Replace this with your Razorpay order creation logic
      const orderData = {
        amount: 50000, // Amount in paise
        currency: "INR",
        receipt: `receipt_${new Date().getTime()}`,
        status: "created",
        createdAt: serverTimestamp(),
      };

      // Save the order to Firestore
      const orderRef = await addDoc(collection(db, "orders"), orderData);

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Your Project Name",
        description: "Purchase Description",
        image: "/your-logo.png",
        order_id: orderRef.id, // Use Firestore document ID as the order ID
        handler: function (response) {
          alert(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );

          // Update Firestore with payment confirmation
          // You can enhance this logic as needed
          console.log("Payment Response:", response);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error handling payment:", error);
      alert("Failed to initialize payment.");
    }
  };

  useEffect(() => {
    handlePayment();
  }, []);

  return (
    <div className="text-center mt-10 text-lg">Redirecting to Razorpay...</div>
  );
};

export default RazorpayComponent;
