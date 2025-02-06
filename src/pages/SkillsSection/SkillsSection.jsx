/* eslint-disable react/prop-types */
import { FaHtml5, FaCss3,FaReact } from "react-icons/fa";
import { SiMongodb} from "react-icons/si";
import { motion } from "framer-motion";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, proficiency: 80, color: "bg-orange-500" },
  { name: "CSS3", icon: <FaCss3 />, proficiency: 80, color: "bg-blue-500" },
  { name: "JavaScript", icon: <RiJavascriptLine />, proficiency: 50, color: "bg-yellow-500" },
  { name: "React", icon: <FaReact />, proficiency: 60, color: "bg-indigo-500" },
  { name: "MongoDB", icon: <SiMongodb />, proficiency: 60, color: "bg-green-800" },
  { name: "NextJS", icon: <TbBrandNextjs />, proficiency: 20, color: "bg-black" },
  { name: "NodeJS", icon: <FaNodeJs />, proficiency: 40, color: "bg-green-500" },
];

const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-medium text-gray-700 flex items-center gap-2">
        {skill.icon} {skill.name}
      </span>
      <span className="font-medium text-gray-700">{skill.proficiency}%</span>
    </div>
    <motion.div
      className={`h-3 rounded-lg ${skill.color}`}
      initial={{ width: 0 }}
      animate={{ width: `${skill.proficiency}%` }}
      transition={{ duration: 1.2 }}
    ></motion.div>
  </div>
);

const SkillsSection = () => (
  <div id="skills" className="container mx-auto p-12 bg-white rounded-lg shadow-lg">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 w-full text-center md:text-left">
      
    <h2 className="text-3xl font-bold mb-6  text-blue-600">My Skills - Expertise in Frontend Web Development</h2>
        <p className="text-gray-600 mb-4 font-semibold">I create beautiful and scalable web products.</p>
        <p  className="text-gray-600 mb-4 font-semibold"> I specialize in web development and design, using modern technologies to create responsive and user-friendly websites. 
        My expertise covers front-end and back-end technologies, ensuring optimal performance and SEO-friendly structures.</p>
        <p className="text-gray-600 font-semibold">With experience in HTML, CSS, JavaScript, WordPress, and more, I build scalable solutions that enhance user engagement.</p>
      </div>
      <div className="md:w-1/2 w-full space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
