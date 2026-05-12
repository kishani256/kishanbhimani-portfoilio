import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
 
} from "react-icons/si";


import {
  SiPostman,
  SiCplusplus,
  SiFigma,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skill() {
  return (
    <section className="min-h-screen px-8 py-16 bg-[#020617] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <div className="flex items-center gap-3 text-white text-4xl font-bold tracking-tight before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-br before:from-cyan-300 before:to-emerald-400 before:shadow-[0_0_15px_rgba(45,212,191,0.9)] before:ring-4 before:ring-emerald-400/20">
          My Skills
        </div>

        {/* Frontend */}
        <div className="flex items-center gap-3 text-white text-2xl font-bold tracking-tight before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-br before:from-cyan-300 before:to-emerald-400 before:shadow-[0_0_15px_rgba(45,212,191,0.9)] before:ring-4 before:ring-emerald-400/20 mt-20">
          Frontend
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {/* React */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] cursor-pointer">
            <FaReact className="text-5xl text-cyan-400 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                React
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                UI Development
              </p>
            </div>
          </div>

          {/* JavaScript */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.25)] cursor-pointer">
            <SiJavascript className="text-5xl text-yellow-400 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                JavaScript
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Dynamic Web Apps
              </p>
            </div>
          </div>

          {/* TypeScript */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] cursor-pointer">
            <SiTypescript className="text-5xl text-sky-400 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                TypeScript
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Type Safety
              </p>
            </div>
          </div>

          {/* HTML */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] cursor-pointer">
            <FaHtml5 className="text-5xl text-orange-400 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                HTML5
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Semantic Markup
              </p>
            </div>
          </div>

          {/* CSS */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.25)] cursor-pointer">
            <FaCss3 className="text-5xl text-blue-400 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                CSS3
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Responsive Design
              </p>
            </div>
          </div>

          {/* Tailwind */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] cursor-pointer">
            <SiTailwindcss className="text-5xl text-cyan-300 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                Tailwind
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Utility CSS
              </p>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="flex items-center gap-3 text-white text-2xl font-bold tracking-tight before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-br before:from-cyan-300 before:to-emerald-400 before:shadow-[0_0_15px_rgba(45,212,191,0.9)] before:ring-4 before:ring-emerald-400/20 mt-20">
          Backend
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {/* Node */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)] cursor-pointer">
            <FaNodeJs className="text-5xl text-green-400 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                Node.js
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Server Runtime
              </p>
            </div>
          </div>

          {/* Express */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-gray-400/40 hover:shadow-[0_0_30px_rgba(156,163,175,0.25)] cursor-pointer">
            <SiExpress className="text-5xl text-gray-300 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                Express
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                REST APIs
              </p>
            </div>
          </div>

          {/* MongoDB */}
          <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] cursor-pointer">
            <SiMongodb className="text-5xl text-green-500 group-hover:rotate-6 transition-transform duration-300" />

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold tracking-tight">
                MongoDB
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                NoSQL Database
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
<div className="flex items-center gap-3 text-white text-2xl font-bold tracking-tight before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-br before:from-cyan-300 before:to-emerald-400 before:shadow-[0_0_15px_rgba(45,212,191,0.9)] before:ring-4 before:ring-emerald-400/20 mt-20">
  Languages
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
  {/* Java */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(251,146,60,0.25)] cursor-pointer">
    <FaJava className="text-5xl text-orange-300 group-hover:rotate-6 transition-transform duration-300" />

    <div className="text-center">
      <h2 className="text-white text-2xl font-bold tracking-tight">
        Java
      </h2>

      <p className="text-gray-400 text-sm mt-1">
        OOP Programming
      </p>
    </div>
  </div>

  {/* C */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.25)] cursor-pointer">
    <div className="text-5xl font-bold text-blue-400 group-hover:rotate-6 transition-transform duration-300">
      C
    </div>

    <div className="text-center">
      <h2 className="text-white text-2xl font-bold tracking-tight">
        C
      </h2>

      <p className="text-gray-400 text-sm mt-1">
        Core Programming
      </p>
    </div>
  </div>

  {/* C++ */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[190px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] cursor-pointer">
    <SiCplusplus className="text-5xl text-sky-400 group-hover:rotate-6 transition-transform duration-300" />

    <div className="text-center">
      <h2 className="text-white text-2xl font-bold tracking-tight">
        C++
      </h2>

      <p className="text-gray-400 text-sm mt-1">
        DSA & Logic
      </p>
    </div>
  </div>
</div>

{/* CS Fundamentals */}
<div className="flex items-center gap-3 text-white text-2xl font-bold tracking-tight before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-br before:from-cyan-300 before:to-emerald-400 before:shadow-[0_0_15px_rgba(45,212,191,0.9)] before:ring-4 before:ring-emerald-400/20 mt-20">
  CS Fundamentals
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
  {/* DSA */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[170px] flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(192,132,252,0.25)] cursor-pointer">
    <div className="text-4xl font-bold text-purple-400">
      DSA
    </div>

    <div className="text-center">
      <h2 className="text-white text-xl font-bold tracking-tight">
        Data Structures
      </h2>

      <p className="text-gray-400 text-sm mt-1">
        Problem Solving
      </p>
    </div>
  </div>

  {/* OOP */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[170px] flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-pink-400/40 hover:shadow-[0_0_30px_rgba(244,114,182,0.25)] cursor-pointer">
    <div className="text-4xl font-bold text-pink-400">
      OOP
    </div>

    <div className="text-center">
      <h2 className="text-white text-xl font-bold tracking-tight">
        Object Oriented
      </h2>

      <p className="text-gray-400 text-sm mt-1">
        Programming Concepts
      </p>
    </div>
  </div>
</div>

{/* Tools */}
<div className="flex items-center gap-3 text-white text-2xl font-bold tracking-tight before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-br before:from-cyan-300 before:to-emerald-400 before:shadow-[0_0_15px_rgba(45,212,191,0.9)] before:ring-4 before:ring-emerald-400/20 mt-20">
  Tools
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
  {/* Git */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[180px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] cursor-pointer">
    <FaGitAlt className="text-5xl text-orange-500 group-hover:rotate-6 transition-transform duration-300" />

    <h2 className="text-white text-2xl font-bold tracking-tight">
      Git
    </h2>
  </div>

  {/* GitHub */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[180px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-gray-400/40 hover:shadow-[0_0_30px_rgba(156,163,175,0.25)] cursor-pointer">
    <FaGithub className="text-5xl text-white group-hover:rotate-6 transition-transform duration-300" />

    <h2 className="text-white text-2xl font-bold tracking-tight">
      GitHub
    </h2>
  </div>

  {/* VS Code */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[180px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.25)] cursor-pointer">
    <VscVscode className="text-5xl text-blue-400 group-hover:rotate-6 transition-transform duration-300" />

    <h2 className="text-white text-2xl font-bold tracking-tight">
      VS Code
    </h2>
  </div>

  {/* Figma */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[180px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-pink-400/40 hover:shadow-[0_0_30px_rgba(244,114,182,0.25)] cursor-pointer">
    <SiFigma className="text-5xl text-pink-400 group-hover:rotate-6 transition-transform duration-300" />

    <h2 className="text-white text-2xl font-bold tracking-tight">
      Figma
    </h2>
  </div>

  {/* Postman */}
  <div className="group bg-[#111827]/80 backdrop-blur-sm border border-gray-800 rounded-4xl h-[180px] flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] cursor-pointer">
    <SiPostman className="text-5xl text-orange-400 group-hover:rotate-6 transition-transform duration-300" />

    <h2 className="text-white text-2xl font-bold tracking-tight">
      Postman
    </h2>
  </div>
</div>
      </motion.div>
    </section>
  );
}