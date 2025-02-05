
import { FaGoogleScholar } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-opacity-30 bg-gradient-to-tr from-sky-900 to-slate-800 backdrop-blur-md text-white shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="btn btn-outline text-white normal-case md:text-xl font-bold flex items-center gap-2"
          >
            <FaGoogleScholar />
            Abdul Mazid Akash
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 md:font-semibold">
          <NavLink to="/" className="hover:bg-sky-700 md:px-2 px-4 py-2 rounded-lg">
            Home
          </NavLink>
          <NavLink
            to="/"
            className="hover:bg-sky-700 md:px-2 px-4 py-2 rounded-lg"
          >
            About
          </NavLink>
          <NavLink to="/" className="hover:bg-sky-700 md:px-2 px-4 py-2 rounded-lg">
           Skills
          </NavLink>
          <NavLink to="/" className="hover:bg-sky-700 md:px-2 px-4 py-2 rounded-lg">
           Project
          </NavLink>
          {/* <NavLink className="hover:bg-sky-700 md:px-2 px-4 py-2 rounded-lg"> */}
           <a className="hover:bg-sky-700 md:px-2 px-4 py-2 rounded-lg" href="#contact">Contact</a>
          {/* </NavLink> */}
        </div>

        

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-square btn-ghost text-4xl">
              ☰
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-opacity-90 bg-gradient-to-tr from-sky-900 to-slate-900 text-white font-semibold rounded-box mt-3 w-48 p-2 shadow-lg"
            >
              <li>
                <NavLink to="/" className="hover:bg-sky-700 rounded-lg p-2">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allScholarship"
                  className="hover:bg-sky-700 rounded-lg p-2"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="hover:bg-sky-700 rounded-lg p-2">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="hover:bg-sky-700 rounded-lg p-2">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="hover:bg-sky-700 rounded-lg p-2">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
