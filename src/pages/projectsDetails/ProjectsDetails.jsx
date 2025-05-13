import { FaArrowUpRightFromSquare, FaGithub, FaWrench } from "react-icons/fa6";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log('use params',id);
  const { darkMode } = useContext(ThemeContext); // Get dark mode state

  const { data: project = [], isLoading, isError } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects/${id}`);
      return response.data;
    },
  });
  console.log(`all project---->`,project);
  
  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (isError || !project) return <p className="text-center text-red-500">Project not found!</p>;

  // Define a mapping of technology names to DaisyUI badge colors
  const techColors = {
    React: "badge-primary",       // Blue
    "Tailwind CSS": "badge-secondary", // Purple
    MongoDB: "badge-success",     // Green
    Stripe: "badge-warning",      // Yellow
  };

  // const project = projects.find((project) => project.id === parseInt(id));

  if (!project) return <div className="text-white text-center">Project not found!</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className={`container mx-auto px-4 rounded-lg my-8 py-10 shadow-lg ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className={`card bg-base-100 rounded-xl overflow-hidden text-black ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}>
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{project.name}</h2>
          <p className="text-sm  mt-2">{project.description}</p>

          <h3 className="text-xl font-bold mt-4">Technologies Used:</h3>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {typeof project.technologies === "string"
              ? project.technologies.split(',').map((tech, index) => (
                  <span className={`badge ${techColors[tech.trim()] || "badge-neutral"}`} key={index}>
                    {tech.trim()}
                  </span>
                ))
              : project.technologies.map((tech, index) => (
                  <span className={`badge ${techColors[tech.trim()] || "badge-neutral"}`} key={index}>
                    {tech.trim()}
                  </span>
                ))}
          </div>


          <h3 className="text-xl font-bold mt-4 flex items-center gap-2">
            <FaExclamationTriangle className="text-yellow-500" /> Challenges Faced:
          </h3>
          <ul className="list-disc list-inside ">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mt-4 flex items-center gap-2">
            <FaWrench className="text-blue-500" /> Potential Improvements:
          </h3>
          <ul className="list-disc list-inside ">
            {project.improvements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              <FaArrowUpRightFromSquare /> Live Project
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
