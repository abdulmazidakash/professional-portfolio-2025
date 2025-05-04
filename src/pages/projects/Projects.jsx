import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ProjectCard from "../../components/ProjectCards";

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



const Projects = () => {

  const { darkMode } = useContext(ThemeContext); // Get dark mode state
  return (
    <div id="projects" className={`container mx-auto px-4 my-8 py-10 bg-base-200 rounded-lg bg-opacity-30 ${
      darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`} >
      <h2 className="text-4xl font-bold text-center">Featured Projects</h2>
      <p className="text-xl font-semibold text-center my-6">
        Showcasing My Web Development Work & Expertise
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          // Pass the project data to ProjectCards component
          <ProjectCard 
          key={project.id} 
          project={project} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
