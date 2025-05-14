import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
import lottieAbout from '../../assets/lottie/about.json'
import Lottie from "lottie-react";


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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                  {/* Hobbies Section */}
        <motion.div
          className={`card shadow-xl p-4 md:p-6 overflow-hidden ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-base-100 text-gray-700"
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         
          <Lottie
            animationData={lottieAbout}
            loop={true}
            className="w-full h-96"/>
       
        </motion.div>

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
            <p className=" text-base font-semibold text-justify">
            This is Abdul Mazid Akash. I’m a student currently studying B.Sc. in Textile Engineering at Narsingdi Textile Engineering College. My hometown is Feni, but I’m now living in Narsingdi for my studies.
            </p>
            <p className="text-base font-semibold text-justify">
            I recently completed a web development course from <a className="underline text-blue-500" target="_blank" href="https://www.programming-hero.com/">Programming Hero</a>. Right now, I’m building web applications using JavaScript, React.js, Node.js, and MongoDB. I enjoy creating websites that are both user-friendly and responsive.
            </p>
            <p className="text-base font-semibold text-justify">
            I’ve worked on several projects, including <a className="underline text-blue-500" target="_blank" href="https://scholarship-hub-akash.netlify.app/">ScholarshipHub</a>, a scholarship management system. One of my main team projects is <a  className="underline text-blue-500" target="_blank" href="https://tickto-booking.netlify.app/">TickTo</a>, a bus ticket booking platform. In TickTo, I worked on real-time seat selection and secure payment features. This project helped me grow my frontend and backend skills and taught me how to work well in a team.
            </p>
          </div>
        </motion.div>


      </div>
    </motion.div>
  );
};

export default AboutMe;
