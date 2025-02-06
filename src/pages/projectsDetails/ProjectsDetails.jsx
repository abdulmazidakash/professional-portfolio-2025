import { FaArrowUpRightFromSquare, FaGithub, FaWrench } from "react-icons/fa6";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      name: "ScholarshipHub",
      image: "https://i.ibb.co/KpypCWf0/sholarship-Hub-banner.jpg",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Stripe"],
      description:
        "ScholarshipHub is a comprehensive Scholarship Management System designed to assist students in searching for suitable universities and scholarships. It also facilitates the application process, allowing students to apply for scholarships directly through the platform. The system supports three types of users: default users, administrators, and moderators. Upon registration, a user is assigned the 'user' role by default. Administrators have the capability to change user roles as needed.",
      liveLink: "https://scholarship-hub-akash.netlify.app",
      githubLink: "https://github.com/abdulmazidakash/c-assignment-12-client-side",
      challenges: [
        " Make a pagination in all Scholarship pages",
        " Implement sorting/filtering function in Manage Applied Application in moderator and admin Dashboard.",
        "  Implement an analytics Chart page in the Admin dashboard",
      ],
      improvements: [
        "Add AI-powered recommendations.",
        "Optimize performance for faster loading.",
      ],
    },
    {
      id: 2,
      name: "GlobalVisaHub",
      image: "https://i.ibb.co/Z6fLkkMD/global-visa-hub.jpg",
      technologies: ["React", "Tailwind CSS", "MongoDB"],
      description:
        "A user-friendly Global Visa Hub platform that simplifies the process of exploring, applying, and managing visa applications.",
      liveLink: "https://assignment-10-global-visa-hub-akash.netlify.app",
      githubLink: "https://github.com/abdulmazidakash/c-assignment-10-visa-navigating-client",
      challenges: [
        " At the top of the “All visas” page, Add a dropdown menu where you will implement filter functionality based on visa types.",
        " Implement Search functionality on the “My visa applications” page based on the country name through an input field and a search button.",
        " Implement a dark/light theme toggle for the home page.",
      ],
      improvements: ["Implement advanced search and tagging functionalities."],
    },
    {
      id: 3,
      name: "Artifact Atlas",
      image: "https://i.ibb.co/Tq0Pp0cf/artifacts-banner-image.jpg",
      technologies: ["React", "Tailwind CSS", "MongoDB"],
      description:
        "Artifact Atlas is an interactive web platform for exploring and managing historical artifacts.",
      liveLink: "https://assignment-11-artifact-atlas.netlify.app",
      githubLink: "https://github.com/abdulmazidakash/c-assignment-11",
      challenges: [
        "Toggle Like Button The Like Button allows users to toggle between Liked and Disliked states.",
        "Search Functionality On the top of the All Artifacts Page",
      ],
      improvements: [" Add a spinner when the data is in a loading state."],
    },
  ];

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) return <div className="text-white text-center">Project not found!</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="container mx-auto px-4 rounded-lg my-8 py-10 shadow-lg"
    >
      <div className="card bg-base-100 rounded-xl overflow-hidden text-black">
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{project.name}</h2>
          <p className="text-sm text-gray-700 mt-2">{project.description}</p>

          <h3 className="text-xl font-bold mt-4">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span className="badge badge-success" key={index}>{tech}</span>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-4 flex items-center gap-2">
            <FaExclamationTriangle className="text-yellow-500" /> Challenges Faced:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mt-4 flex items-center gap-2">
            <FaWrench className="text-blue-500" /> Potential Improvements:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
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
