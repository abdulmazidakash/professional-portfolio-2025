import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ProjectCard from "../../components/ProjectCards";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {

  const { darkMode } = useContext(ThemeContext); // Get dark mode state
  const { data: projects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: async()=> {
      const response = await axios.get("http://localhost:3000/six-project");
      // console.log(`response----> ${response.data}`);
      return response.data;
      },
  })
  console.log(`all project---->`,projects);

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
          key={project._id} 
          project={project} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
