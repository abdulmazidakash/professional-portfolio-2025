/* eslint-disable react/prop-types */
import { FaMoon, FaSun } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { Link } from "react-router"; // Ensure correct import
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-slate-900 shadow-lg text-white py-4">
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="btn btn-outline text-white normal-case text-lg md:text-xl font-bold flex items-center gap-2  hover:bg-blue-200 hover:text-black"
          >
            <FaLaptopCode />
            Abdul Mazid Akash
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-6 font-semibold">
        
          <Link to={'/'} className="hover:bg-opacity-40 hover:bg-blue-200 hover:text-black  px-4 py-2 rounded-lg transition-colors duration-300" href="#">Home</Link>
         
          <a className="hover:bg-opacity-40 hover:bg-blue-200 hover:text-black  px-4 py-2 rounded-lg transition-colors duration-300" href="#about">About</a>
          <a className="hover:bg-opacity-40 hover:bg-blue-200 hover:text-black  px-4 py-2 rounded-lg transition-colors duration-300" href="#skills">Skills</a>
          <a className="hover:bg-opacity-40 hover:bg-blue-200 hover:text-black  px-4 py-2 rounded-lg transition-colors duration-300" href="#projects">Projects</a>
          <a className="hover:bg-opacity-40 hover:bg-blue-200 hover:text-black  px-4 py-2 rounded-lg transition-colors duration-300" href="#contact">Contact</a>
           {/* dark and light mode toggle button  */}
           <button
              className="p-2 rounded-full hover:text-yellow-400 transition"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-square btn-ghost text-3xl">
              ☰
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gradient-to-tl from-sky-900 to-slate-900 text-white font-semibold rounded-box mt-3 w-56 p-2 shadow-lg gap-2"
            >
            
                <Link to={'/'} className="hover:bg-opacity-40 bg-sky-800 rounded-lg p-2 transition-colors">Home</Link>
            
              <li>
                <a href="#about" className="hover:bg-opacity-40 bg-sky-800 font-semibold rounded-lg p-2 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:bg-opacity-40 font-semibold bg-sky-800 rounded-lg p-2 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:bg-opacity-40 font-semibold bg-sky-800 rounded-lg p-2 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:bg-opacity-40 font-semibold bg-sky-800 rounded-lg p-2 transition-colors">Contact</a>
              </li>
              {/* dark and light mode toggle button  */}
           <button
              className="p-2 rounded-full hover:text-yellow-400 transition"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
