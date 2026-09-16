import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg text-slate-800">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-orange-400 inline-block"></span>
          DevStack
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#technologies" className="hover:text-slate-900">Technologies</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:opacity-90 transition">
            Sign Up
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-slate-600 text-sm font-medium">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="mt-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-pink-500">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;