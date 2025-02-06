import { FaLaptopCode } from "react-icons/fa6";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0d0d2b] to-[#1e1e5c] shadow-lg text-white py-4">
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="btn btn-outline text-white normal-case md:text-xl font-bold flex items-center gap-2"
          >
            <FaLaptopCode />
            Abdul Mazid Akash
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 md:font-semibold">
          <a className="hover:bg-opacity-40 bg-sky-800 px-4 py-2 rounded-lg transition-colors duration-300" href="#">Home</a>
          <a className="hover:bg-opacity-40 bg-sky-800 px-4 py-2 rounded-lg transition-colors duration-300" href="#about">About</a>
          <a className="hover:bg-opacity-40 bg-sky-800 px-4 py-2 rounded-lg transition-colors duration-300" href="#skills">Skills</a>
          <a className="hover:bg-opacity-40 bg-sky-800 px-4 py-2 rounded-lg transition-colors duration-300" href="#projects">Projects</a>
          <a className="hover:bg-opacity-40 bg-sky-800 px-4 py-2 rounded-lg transition-colors duration-300" href="#contact">Contact</a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-square btn-ghost text-4xl">
              ☰
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gradient-to-tl from-sky-900 to-slate-900 text-white font-semibold rounded-box mt-3 w-48 p-2 shadow-lg gap-2"
            >
              <li>
                <a href="#" className="hover:bg-opacity-40 bg-sky-800 rounded-lg p-2 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:bg-opacity-40 bg-sky-800 rounded-lg p-2 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:bg-opacity-40 bg-sky-800 rounded-lg p-2 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:bg-opacity-40 bg-sky-800 rounded-lg p-2 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:bg-opacity-40 bg-sky-800 rounded-lg p-2 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
