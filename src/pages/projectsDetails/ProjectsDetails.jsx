import {  FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      name: "ScholarshipHub",
      image: "https://i.ibb.co/KpypCWf0/sholarship-Hub-banner.jpg",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Stripe"],
      description:
        "ScholarshipHub is a comprehensive Scholarship Management System designed to assist students in searching for suitable universities and scholarships.",
      liveLink: "https://scholarship-hub-akash.netlify.app",
      githubLink: "https://github.com/abdulmazidakash/c-assignment-12-client-side",
      challenges:
        "Implementing complex filtering and ensuring responsiveness across all devices.",
      improvements: "Add AI-powered recommendations and better performance optimizations.",
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
      challenges: "Setting up real-time updates with WebSocket.",
      improvements: "Implement advanced search and tagging functionalities.",
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
      challenges: "Designing an engaging and intuitive UI for users.",
      improvements: "Expand language options and include voice recognition features.",
    },
  ];

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) return <div className="text-white text-center">Project not found!</div>;

  return (
    <div className="container mx-auto px-4 rounded-lg my-8  py-10 shadow-lg">
      <div className="">
        <div className="card bg-base-100 rounded-xl overflow-hidden text-black">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{project.name}</h2>
            <p className="text-sm text-gray-700 mt-2">{project.description}</p>
            <h3 className="text-xl font-bold mt-4">Technologies Used:</h3>
            <ul className="list-disc">
              {project.technologies.map((tech, index) => (
                <li className="badge badge-success mr-2" key={index}>{tech}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mt-4">Challenges Faced:</h3>
            <p>{project.challenges}</p>
            <h3 className="text-xl font-bold mt-4">Potential Improvements:</h3>
            <p>{project.improvements}</p>
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
      </div>
    </div>
  );
};

export default ProjectDetails;
