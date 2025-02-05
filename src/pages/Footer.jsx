import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900 opacity-80 text-base-content p-10 font-semibold text-white mt-8">
      {/* Wrapper to center all content */}
      <div className="flex flex-col items-center gap-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          <a href="#" className="link link-hover">
            Home
          </a>
          <a href="#" className="link link-hover">
            About
          </a>
          <a href="#" className="link link-hover">
            Skills
          </a>
          <a href="#" className="link link-hover">
            Project
          </a>
          <a href="#" className="link link-hover">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <nav className="flex justify-center gap-6">
          <a href="#" aria-label="Twitter" className="hover:text-primary transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-primary transition">
            <FaYoutube size={24} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-primary transition">
            <FaFacebook size={24} />
          </a>
        </nav>

        {/* Copyright */}
        <aside className="text-center">
          <p>© {new Date().getFullYear()} - All rights reserved by Abdul Mazid Akash</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
