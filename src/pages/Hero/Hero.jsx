import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center bg-black overflow-hidden rounded-2xl p-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900 opacity-80"></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-grid.png')] opacity-20"></div>

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-8 container mx-auto px-4 text-white"
      >
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Hi, This is
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 lg:mt-4"
          >
            Abdul Mazid Akash
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="py-4 text-lg md:text-xl text-gray-300"
          >
            Frontend Developer | Web Enthusiast
          </motion.p>

          {/* Social Media Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center lg:justify-start gap-6 my-4"
          >
            <a href="https://github.com/abdulmazidakash" className="text-2xl hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abdulmazidakash/" className="text-2xl hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/abdulmazidakash" className="text-2xl hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/akashabdulmazid/" className="text-2xl hover:text-gray-300 transition" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </motion.div>

          {/* Resume Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center lg:justify-start mt-4"
          >
            <a 
              target="_blank" 
              href="https://drive.google.com/drive/folders/1--75kcFgvxmF5xWuTbKLai8OvSSoNCyf?usp=sharing" 
              download
              className="btn btn-primary px-6 py-3 text-lg"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end bg-white/10 backdrop-blur-sm rounded-lg"
        >
          <motion.img
            src="https://i.ibb.co/XkrcpbqY/abdul-mazid-akash-facebook-proflie-removebg-preview.png"
            alt="Abdul Mazid Akash"
            className="rounded-2xl md:h-[450px] w-64 md:w-full lg:w-full max-w-full object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
