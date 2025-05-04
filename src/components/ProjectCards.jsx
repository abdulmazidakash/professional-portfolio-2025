/* eslint-disable react/prop-types */
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router"; // Fixed import
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const ProjectCard = ({ project }) => {
  const { darkMode } = useContext(ThemeContext); // Optional for manual toggle
  // Define a mapping of technology names to DaisyUI badge colors
  const techColors = {
	React: "badge-primary",
	"Tailwind CSS": "badge-secondary",
	MongoDB: "badge-success",
	Stripe: "badge-warning",
	Express: "badge-accent",
	Firebase: "badge-error",
	Node: "badge-info",
  };
  

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`card w-full shadow-lg border bg-base-100 border-gray-200 dark:border-gray-700 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <figure>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body px-5 py-4">
        <h2 className={`card-title text-xl font-bold  ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          {project.name}
        </h2>
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
  {project.technologies.map((tech, index) => (
    <div
      key={index}
      className={`badge text-sm px-3 py-1 ${techColors[tech] || "badge-neutral"}`}
    >
      {tech}
    </div>
  ))}
</div>


        <div className="card-actions justify-between mt-5 flex flex-wrap gap-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline gap-2"
          >
            Live <FaExternalLinkAlt />
          </a>
          <Link
            to={`/projects/${project.id}`}
            className="btn btn-sm btn-outline gap-2"
          >
            View More <FaExternalLinkAlt />
          </Link>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline gap-2"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
