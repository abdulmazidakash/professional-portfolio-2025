/* eslint-disable react/prop-types */
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, proficiency: 80, color: "bg-orange-500" },
  { name: "CSS3", icon: <FaCss3 />, proficiency: 80, color: "bg-blue-500" },
  { name: "JavaScript", icon: <RiJavascriptLine />, proficiency: 50, color: "bg-yellow-500" },
  { name: "React", icon: <FaReact />, proficiency: 60, color: "bg-indigo-500" },
  { name: "MongoDB", icon: <SiMongodb />, proficiency: 60, color: "bg-green-800" },
  { name: "NextJS", icon: <TbBrandNextjs />, proficiency: 20, color: "bg-black" },
  { name: "NodeJS", icon: <FaNodeJs />, proficiency: 40, color: "bg-green-500" },
];

const SkillBar = ({ skill, darkMode }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className={`font-medium flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {skill.icon} {skill.name}
      </span>
      <span className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {skill.proficiency}%
      </span>
    </div>
    <motion.div
      className={`h-3 rounded-lg ${skill.color}`}
      initial={{ width: 0 }}
      animate={{ width: `${skill.proficiency}%` }}
      transition={{ duration: 1.2 }}
    ></motion.div>
  </div>
);

const SkillsSection = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      id="skills"
      className={`container mx-auto p-12 rounded-lg shadow-lg my-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-black"}`}>
            My Skills - Expertise in Frontend Web Development
          </h2>
          <p className={`mb-4 font-semibold ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            I create beautiful and scalable web products.
          </p>
          <p className={`mb-4 font-semibold text-justify ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            I specialize in web development and design, using modern technologies to create responsive and user-friendly websites. 
            My expertise covers front-end and back-end technologies, ensuring optimal performance and SEO-friendly structures.
          </p>
          <p className={`font-semibold text-justify ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            With experience in HTML, CSS, JavaScript, React, and more, I build scalable solutions that enhance user engagement.
          </p>
        </div>
        <div className="md:w-1/2 w-full space-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
