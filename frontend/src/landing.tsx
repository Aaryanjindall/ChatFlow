import React from "react";
import { motion } from "framer-motion";
import "./assets/BubbleBackground.css";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1b2e] to-[#2b2260] text-white flex flex-col relative overflow-hidden">
      {/* Background SVG Icons */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* SVG icons as background elements */}
        <svg className="bubble-bg-img bubble-anim1" style={{ position: 'absolute', top: "8%", left: "10%", width: 90, opacity: 0.08 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim2" style={{ position: 'absolute', top: "60%", left: "20%", width: 130, opacity: 0.07 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim3" style={{ position: 'absolute', top: "30%", left: "70%", width: 110, opacity: 0.09 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim4" style={{ position: 'absolute', top: "75%", left: "60%", width: 80, opacity: 0.08 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim5" style={{ position: 'absolute', top: "15%", left: "80%", width: 100, opacity: 0.06 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim6" style={{ position: 'absolute', top: "50%", left: "50%", width: 70, opacity: 0.10 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        
        {/* --- 15 NEW ICONS ADDED HERE --- */}
        <svg className="bubble-bg-img bubble-anim7" style={{ position: 'absolute', top: "80%", left: "85%", width: 120, opacity: 0.07 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim8" style={{ position: 'absolute', top: "40%", left: "15%", width: 75, opacity: 0.08 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim9" style={{ position: 'absolute', top: "20%", left: "35%", width: 85, opacity: 0.07 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim10" style={{ position: 'absolute', top: "70%", left: "40%", width: 100, opacity: 0.09 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim11" style={{ position: 'absolute', top: "10%", left: "60%", width: 65, opacity: 0.08 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim12" style={{ position: 'absolute', top: "85%", left: "30%", width: 110, opacity: 0.06 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim13" style={{ position: 'absolute', top: "55%", left: "75%", width: 90, opacity: 0.08 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim14" style={{ position: 'absolute', top: "35%", left: "85%", width: 80, opacity: 0.07 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim15" style={{ position: 'absolute', top: "65%", left: "10%", width: 70, opacity: 0.08 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim16" style={{ position: 'absolute', top: "25%", left: "55%", width: 105, opacity: 0.09 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim17" style={{ position: 'absolute', top: "90%", left: "5%", width: 115, opacity: 0.07 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim18" style={{ position: 'absolute', top: "5%", left: "25%", width: 75, opacity: 0.10 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim19" style={{ position: 'absolute', top: "45%", left: "90%", width: 95, opacity: 0.07 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim20" style={{ position: 'absolute', top: "70%", left: "0%", width: 80, opacity: 0.08 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
        <svg className="bubble-bg-img bubble-anim21" style={{ position: 'absolute', top: "95%", left: "50%", width: 85, opacity: 0.07 }} viewBox="0 0 24 24" fill="#a78bfa" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 6H6v-2h8v2zm4-6v-2H6v2h12z"></path></svg>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-6">
            <div className="flex items-center space-x-2">
                <img src={require("./assets/chat.jpg")} alt="ChatFlow Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">ChatFlow</span>
            </div>
            <div className="flex items-center space-x-6">
                <a href="#features" className="text-gray-300 hover:text-purple-400">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-purple-400">Pricing</a>
                <a href="#about" className="text-gray-300 hover:text-purple-400">About</a>
                <a href="#contact" className="text-gray-300 hover:text-purple-400">Contact</a>
                <a href="/signin" className="text-gray-300 font-semibold hover:text-purple-400">Sign In</a>
                <a href="/signup" className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-semibold">
                    Get Started
                </a>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 mt-16 flex-grow">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 space-y-6"
            >
                <h1 className="text-5xl font-extrabold leading-tight">
                    <span className="text-purple-400">Connect</span> instantly, <br />
                    chat <span className="text-purple-400">effortlessly</span>
                </h1>
                <p className="text-gray-300 text-lg">
                    Experience the future of communication with our lightning-fast, secure chat platform. Connect with friends, teams, and communities like never before.
                </p>
                <div className="flex space-x-4">
                    <a href="/signup" className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold">
                        <span>Start Chatting</span>
                    </a>
                    <a
                      href="#community"
                      className="border border-purple-500 text-gray-200 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        <span>Join Community</span>
                    </a>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mt-12 md:mt-0"
            >
                <img src="/chat-hero.png" alt="Chat illustration" className="w-full rounded-xl shadow-xl" />
            </motion.div>
        </section>

        {/* Features */}
        <section className="mt-16 mb-16 flex justify-around text-center px-8 md:px-24">
            <div className="space-y-2">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-4 rounded-full inline-block">⚡</div>
                <h3 className="font-semibold">Lightning Fast</h3>
                <p className="text-gray-400">Real-time messaging</p>
            </div>
            <div className="space-y-2">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-4 rounded-full inline-block">👥</div>
                <h3 className="font-semibold">Team Focused</h3>
                <p className="text-gray-400">Built for collaboration</p>
            </div>
            <div className="space-y-2">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-4 rounded-full inline-block">🔒</div>
                <h3 className="font-semibold">Secure</h3>
                <p className="text-gray-400">End-to-end encryption</p>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;