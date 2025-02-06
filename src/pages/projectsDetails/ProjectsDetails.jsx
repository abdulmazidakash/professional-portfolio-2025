import {  FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      name: "Project One",
      image: "https://i.ibb.co.com/KpypCWf0/sholarship-Hub-banner.jpg",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      description:
        "A responsive e-commerce platform with dynamic product filtering and cart management.",
      liveLink: "https://projectone.com",
      githubLink: "https://github.com/user/project-one",
      challenges:
        "Implementing complex filtering and ensuring responsiveness across all devices.",
      improvements: "Add AI-powered recommendations and better performance optimizations.",
    },
    {
      id: 2,
      name: "Project Two",
      image: "/project2.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "A blog platform allowing users to create, edit, and share posts with real-time updates.",
      liveLink: "https://projecttwo.com",
      githubLink: "https://github.com/user/project-two",
      challenges: "Setting up real-time updates with WebSocket.",
      improvements: "Implement advanced search and tagging functionalities.",
    },
    {
      id: 3,
      name: "Project Three",
      image: "/project3.jpg",
      technologies: ["React", "Redux", "Firebase"],
      description:
        "A language learning app with interactive vocabulary and grammar exercises.",
      liveLink: "https://projectthree.com",
      githubLink: "https://github.com/user/project-three",
      challenges: "Designing an engaging and intuitive UI for users.",
      improvements: "Expand language options and include voice recognition features.",
    },
  ];

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) return <div className="text-white text-center">Project not found!</div>;

  return (
    <div className="container mx-auto px-4 rounded-lg my-8  py-10 shadow-lg border-2">
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
