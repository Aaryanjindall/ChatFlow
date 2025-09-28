import React, { useState } from "react";
import chatImage from "../../assets/chat.jpg"; // apni image assets folder me daalna
import { Navigate, useNavigate } from "react-router-dom";
//use naviagte for redirection to sign in 
const Signup: React.FC = () => {
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("User registered successfully!");
        navigate('/signin');
      } else {
        alert("Failed to register user!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src={chatImage}
          alt="Chat Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-10">
          <h1 className="text-4xl font-bold text-indigo-400 mb-4 text-center">
            Connect. Chat. Enjoy.
          </h1>
          <p className="text-gray-300 text-lg text-center max-w-md">
            Join our community and start chatting with friends instantly in a secure and fun way!
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-indigo-400 mb-6">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
              {/* <FaEnvelope className="text-gray-400 mr-2" /> */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none text-gray-200"
              />
            </div>

            {/* Username */}
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
              {/* <FaUser className="text-gray-400 mr-2" /> */}
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none text-gray-200"
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
              {/* <FaLock className="text-gray-400 mr-2" /> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none text-gray-200"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
              {/* <FaLock className="text-gray-400 mr-2" /> */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none text-gray-200"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white font-semibold py-2 rounded-lg flex justify-center items-center space-x-2 shadow-md"
            >
              <span>Sign Up</span>
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-indigo-400 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
