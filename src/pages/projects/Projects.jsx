
import { Link } from "react-router";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project One",
      image: "https://i.ibb.co.com/KpypCWf0/sholarship-Hub-banner.jpg",
      description:
        "A responsive e-commerce platform with dynamic product filtering and cart management.",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      liveLink: "https://projectone.com",
      githubLink: "https://github.com/user/project-one",
      challenges:
        "Implementing complex filtering and ensuring responsiveness across all devices.",
      improvements: "Add AI-powered recommendations and better performance optimizations.",
    },
    {
      id: 2,
      name: "Project Two",
      image: "https://i.ibb.co.com/KpypCWf0/sholarship-Hub-banner.jpg",
      description:
        "A blog platform allowing users to create, edit, and share posts with real-time updates.",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://projecttwo.com",
      githubLink: "https://github.com/user/project-two",
      challenges: "Setting up real-time updates with WebSocket.",
      improvements: "Implement advanced search and tagging functionalities.",
    },
    {
      id: 3,
      name: "Project Three",
      image: "https://i.ibb.co.com/KpypCWf0/sholarship-Hub-banner.jpg",
      description:
        "A language learning app with interactive vocabulary and grammar exercises.",
      technologies: ["React", "Redux", "Firebase"],
      liveLink: "https://projectthree.com",
      githubLink: "https://github.com/user/project-three",
      challenges: "Designing an engaging and intuitive UI for users.",
      improvements: "Expand language options and include voice recognition features.",
    },
  ];

  return (
    <div id="projects" className="container mx-auto px-4 my-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 shadow-xl rounded-xl overflow-hidden text-black">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold">{project.name}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
                <div className="mt-4">
                  <Link to={`/projects/${project.id}`} className="btn btn-primary btn-sm">
                    View More / Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
