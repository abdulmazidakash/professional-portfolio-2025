import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="inset-0 bg-gray-900  p-10 font-semibold text-white mt-8">
      {/* Wrapper to center all content */}
      <div className="flex flex-col items-center gap-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          <a href="#" className="link link-hover">
            Home
          </a>
          <a href="#about" className="link link-hover">
            About
          </a>
          <a href="#skills" className="link link-hover">
            Skills
          </a>
          <a href="#projects" className="link link-hover">
            Project
          </a>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <nav className="flex justify-center gap-6">
          <a href="https://github.com/abdulmazidakash" aria-label="Twitter" className="hover:text-primary transition">
            <FaGithub size={24} />
          </a>
          <a  href="https://www.linkedin.com/in/abdulmazidakash/" aria-label="YouTube" className="hover:text-primary transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/abdulmazidakash" aria-label="Facebook" className="hover:text-primary transition">
            <FaTwitter size={24} />
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
