import { useContext } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Typewriter } from "react-simple-typewriter";


const AboutMe = () => {
  const { darkMode } = useContext(ThemeContext); // Get dark mode state

  return (
    <motion.div
      id="about"
      className={`container mx-auto px-4 sm:px-6 py-8 md:py-12 font-semibold rounded-lg my-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Title Section */}
      <div className="text-center mb-6 md:mb-8">
        <motion.h1
          className={`text-3xl md:text-4xl font-extrabold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typewriter
          words={['About Me']}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </motion.h1>
        <motion.p
          className={`text-base md:text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } mt-1 md:mt-2`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A little bit about myself
        </motion.p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Introduction Section */}
        <motion.div
          className={`card shadow-xl p-4 md:p-6 overflow-hidden ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-base-100 text-gray-700"
          }`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="card-body p-0 md:p-4">
            <p className="mb-3 md:mb-4 text-base md:text-lg leading-relaxed">
              Hi, I’m Abdul Mazid Akash, a passionate frontend web developer with a knack for creating beautiful and functional web applications. My journey started from curiosity, and over time, I&apos;ve honed my skills in HTML, CSS, JavaScript, React, and Tailwind CSS.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              I love building interactive UI/UX and enjoy the challenge of solving problems with code. There’s always something new to learn in programming, which keeps me motivated and excited about the work I do.
            </p>
          </div>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div
          className={`card shadow-xl p-4 md:p-6 overflow-hidden ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-base-100 text-gray-700"
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="card-body p-0 md:p-4">
            <h3 className={`text-lg md:text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            } mb-3 md:mb-4`}>
              Hobbies & Interests
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <MdSportsCricket className="flex-shrink-0 text-xl md:text-2xl mr-2 md:mr-3 text-green-600" />
                <span className="text-sm md:text-base">
                  Cricket - I&apos;m passionate about cricket, both playing and watching. The strategy and teamwork involved in the game fascinate me, and I enjoy weekend matches with friends.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <GiShuttlecock className="flex-shrink-0 text-xl md:text-2xl mr-2 md:mr-3 text-purple-600" />
                <span className="text-sm md:text-base">
                  Badminton - I love the fast-paced nature of badminton. It&apos;s my go-to sport for staying active and improving reflexes, playing regularly at local courts.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <FaLaptopCode className="flex-shrink-0 text-xl md:text-2xl mr-2 md:mr-3 text-blue-600" />
                <span className="text-sm md:text-base">
                  Coding - Of course, coding is both my profession and my passion! It’s the heart of everything I do.
                </span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
