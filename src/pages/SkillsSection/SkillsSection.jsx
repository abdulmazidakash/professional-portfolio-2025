/* eslint-disable react/prop-types */
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaJs } from 'react-icons/fa'; // Icons for skills
import { motion } from 'framer-motion'; // Import motion from framer-motion

const skills = [
  { name: 'React', icon: <FaReact />, proficiency: 85 },
  { name: 'HTML', icon: <FaHtml5 />, proficiency: 90 },
  { name: 'CSS', icon: <FaCss3 />, proficiency: 90 },
  { name: 'Node.js', icon: <FaNodeJs />, proficiency: 80 },
  { name: 'MongoDB', icon: <FaDatabase />, proficiency: 75 },
  { name: 'JavaScript', icon: <FaJs />, proficiency: 90 },
];

const SkillCard = ({ skill }) => (
  <motion.div
    className="card w-40 bg-gradient-to-r from-blue-500 to-green-400 shadow-lg flex flex-col items-center p-6 space-y-4 opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out transform hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-4xl">{skill.icon}</div>
    <div className="font-semibold text-lg text-white">{skill.name}</div>
    <motion.div
      className="w-full bg-gray-300 rounded-full h-2"
      initial={{ width: 0 }}
      animate={{ width: `${skill.proficiency}%` }}
      transition={{ duration: 1 }}
    >
      <div className="bg-green-500 h-2 rounded-full"></div>
    </motion.div>
  </motion.div>
);

const SkillsSection = () => (
  <div className="container mx-auto p-6 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg">
    <h2 className="text-3xl font-bold mb-6 text-center text-white">My Skills</h2>

    {/* All Skills in a Single Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center justify-center items-center mx-auto">
      {skills.map(skill => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

export default SkillsSection;
