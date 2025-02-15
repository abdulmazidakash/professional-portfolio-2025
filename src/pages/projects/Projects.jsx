/* eslint-disable react/prop-types */

import { BiLinkExternal } from "react-icons/bi";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

// Project data
const projects = [
  {
    id: 1,
    name: "ScholarshipHub",
    image: "https://i.ibb.co/KpypCWf0/sholarship-Hub-banner.jpg",
    description:
      "ScholarshipHub is a comprehensive Scholarship Management System designed to assist students in searching for suitable universities and scholarships.",
    technologies: ["React", "Tailwind CSS", "MongoDB", "Stripe"],
    liveLink: "https://scholarship-hub-akash.netlify.app",
    githubLink: "https://github.com/abdulmazidakash/c-assignment-12-client-side",
  },
  {
    id: 2,
    name: "GlobalVisaHub",
    image: "https://i.ibb.co/Z6fLkkMD/global-visa-hub.jpg",
    description:
      "A user-friendly Global Visa Hub platform that simplifies the process of exploring, applying, and managing visa applications.",
    technologies: ["React", "Tailwind CSS", "MongoDB"],
    liveLink: "https://assignment-10-global-visa-hub-akash.netlify.app",
    githubLink: "https://github.com/abdulmazidakash/c-assignment-10-visa-navigating-client",
  },
  {
    id: 3,
    name: "Artifact Atlas",
    image: "https://i.ibb.co/Tq0Pp0cf/artifacts-banner-image.jpg",
    description:
      "Artifact Atlas is an interactive web platform for exploring and managing historical artifacts.",
    technologies: ["React", "Tailwind CSS", "MongoDB"],
    liveLink: "https://assignment-11-artifact-atlas.netlify.app",
    githubLink: "https://github.com/abdulmazidakash/c-assignment-11",
  },
];

// Define a mapping of technology names to DaisyUI badge colors
const techColors = {
  React: "badge-primary",       // Blue
  "Tailwind CSS": "badge-secondary", // Purple
  MongoDB: "badge-success",     // Green
  Stripe: "badge-warning",      // Yellow
};

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto px-4 my-8 py-10 bg-base-200 rounded-lg bg-opacity-30">
      <h2 className="text-4xl font-bold text-center">Featured Projects</h2>
      <p className="text-xl font-semibold text-center my-6">
        Showcasing My Web Development Work & Expertise
      </p>

      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden justify-center items-center p-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="md:w-1/3 w-full h-48 object-cover rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {/* Project Details */}
            <div className="p-6 md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
              <p className="text-gray-700 mt-2 font-semibold">{project.description}</p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`badge ${techColors[tech] || "badge-neutral"} px-3 py-1 text-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Buttons */}
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
                {/* Live Demo Button */}
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success w-full md:w-auto text-center flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BiLinkExternal size={18} /> Live Demo
                </motion.a>

                {/* GitHub Button */}
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info w-full md:w-auto text-center flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={18} /> GitHub
                </motion.a>

                {/* View More Button */}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-primary w-full md:w-auto text-center flex items-center gap-2"
                  >
                    View More <FaArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
