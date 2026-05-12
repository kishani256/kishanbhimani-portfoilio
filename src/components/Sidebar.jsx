import {
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-4 rounded-2xl transition-all duration-300
    ${
      isActive
        ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
        : "text-white hover:bg-[#1e293b]"
    }`;

  return (
    <div className="w-[250px] h-screen bg-[#0f172a] fixed left-0 top-0 border-r border-gray-800 p-5">

      {/* LOGO */}

      <h1 className="border-2 border-violet-500 rounded-full text-6xl font-bold text-violet-500 mb-10 w-24 h-24 flex items-center justify-center mx-auto justify-items-center">
        KB
      </h1>

      {/* MENU */}

      <div className="flex flex-col gap-5">

        <NavLink to="/" className={linkClass}>
          <Home size={22} />
          Home
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          <User size={22} />
          About
        </NavLink>

        <NavLink to="/skills" className={linkClass}>
          <Code2 size={22} />
          Skills
        </NavLink>

        <NavLink to="/projects" className={linkClass}>
          <Briefcase size={22} />
          Projects
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          <Mail size={22} />
          Contact
        </NavLink>

       

      </div>

    </div>
  );
}

export default Sidebar;