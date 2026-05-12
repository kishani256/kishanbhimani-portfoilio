import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "../src/components/Skill";
import Projects from "../src/components/Project";
import Contact from "../src/components/Contact";

function App() {
  return (
    <BrowserRouter>

      <div className="bg-[#020617] min-h-screen">

        {/* SIDEBAR ALWAYS VISIBLE */}

        <Sidebar />

        {/* PAGE CONTENT */}

        <main className="ml-[250px]">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;