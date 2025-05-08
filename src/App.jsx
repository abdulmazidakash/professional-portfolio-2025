import { Route, Routes } from "react-router";
import AboutMe from "./pages/AboutMe/AboutMe";
import ContactInformation from "./pages/ContactInformation/ContactInformation";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar";
import Projects from "./pages/projects/projects";
import SkillsSection from "./pages/SkillsSection/SkillsSection";
import ProjectDetails from "./pages/projectsDetails/projectsDetails";
import ParticlesBackground from "./components/ParticlesBackground";
import PersonalDashboard from "./personal-dashboard/PersonalDashboard";
import AddProject from "./personal-dashboard/AddProject";

function App() {
  return (
    <>
      {/* Particle Background */}
      <div className="fixed top-0 left-0 w-full h-full z-10">
        <ParticlesBackground />
      </div>

      {/* Your actual content */}
      <div className="relative z-10">
        {/* Navbar */}
        <div className="mb-8">
          <Navbar />
        </div>

        {/* All Routes in ONE <Routes> block */}
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <div className="pt-16 container mx-auto">
                <Hero />
                <AboutMe />
                <Projects />
                <SkillsSection />
                <ContactInformation />
              </div>
            }
          />

          {/* Project Details */}
          <Route
            path="/projects/:id"
            element={
              <div className="pt-10 container mx-auto">
                <ProjectDetails />
              </div>
            }
          />
{/* --------personal dashboard start area ----------------------------- */}
          <Route
          path="/personal-dashboard"
          element={
            <div className="pt-10 mt-16 container mx-auto">
              <PersonalDashboard/>
            </div>
          }
          />
          <Route
          path="/add-project"
          element={
            <div className="pt-10 mt-16 container mx-auto">
              <AddProject/>
            </div>
          }
          />
          {/* --------------------personal dashboard end area -------------- */}
        </Routes>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
