import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center bg-black overflow-hidden rounded-2xl">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900 opacity-80"></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-grid.png')] opacity-20"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 max-w-screen-xl mx-auto  py-16 text-white">
        
        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:order-2">
          <img
            src="https://i.ibb.co/5h5kj6Jm/abdul-mazid-akash-portfolio.jpg"
            alt="Abdul Mazid Akash"
            className="rounded-2xl shadow-lg w-3/4 lg:w-full"
          />
        </div>

        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-1">
          <h1 className="md:text-5xl sm:text-4xl font-bold">
            Hi, This is <br />
            <span className="my-8">Abdul Mazid Akash</span>
          </h1>
          <p className="py-4 md:text-xl sm:text-md text-gray-300">
            Frontend Developer | Web Enthusiast
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-start gap-4 my-4">
            <a
              href="https://github.com/abdulmazidakash"
              className="text-xl hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulmazidakash/"
              className="text-xl hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/abdulmazidakash"
              className="text-xl hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Resume Button */}
          <button className="btn btn-primary mt-4">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
