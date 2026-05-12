import { motion } from "framer-motion";
import profileimg from "../assets/profileimg.png";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen bg-[#020617] text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-10 py-20 gap-16 max-w-7xl mx-auto">
        
        {/* LEFT SIDE */}
        <div className="flex-1 max-w-[650px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-6"
          >
            👋 Hi, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            Kishan <br />
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Bhimani
            </span>
          </motion.h1>

          <p className="text-xl text-gray-300 mt-6">
            • BCA Student • Frontend Developer <br/>• React Enthusiast
          </p>

          <p className="text-gray-400 mt-6 text-lg leading-8 max-w-[600px]">
            I build modern responsive web applications using
            React, Node.js and modern technologies.
          </p>

          <div className="flex gap-5 mt-10">
            <NavLink
              to="/projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:scale-105 transition duration-300"
            >
              View Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="px-8 py-4 rounded-2xl border border-gray-700 hover:bg-[#111827] transition duration-300"
            >
              Contact Me
            </NavLink>
          </div>
        </div>

     
        {/* RIGHT SIDE - MOVED INSIDE THE FLEX CONTAINER */}
        <div className="flex-1 flex  lg:justify-end max-w-[650px]">
          <div className="relative">
            <div className="absolute -inset-4 lg:-inset-6 bg-violet-600 blur-[120px] opacity-20 rounded-full"></div>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              src={profileimg}
              alt="Kishan Bhimani"
              className="relative z-10 w-[200px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full object-cover border-4 border-violet-500 shadow-2xl"
            />
          </div>
          </div>
        </div>
    </section>
  );
}

export default Hero;