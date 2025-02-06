import { Route, Routes } from "react-router"
import AboutMe from "./pages/AboutMe/AboutMe"
import ContactInformation from "./pages/ContactInformation/ContactInformation"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero/Hero"
import Navbar from "./pages/Navbar"
import Projects from "./pages/projects/projects"
import SkillsSection from "./pages/SkillsSection/SkillsSection"
import ProjectDetails from "./pages/projectsDetails/projectsDetails"


function App() {

  return (  
       <>

       {/* navbar section  */}
        <div className="mb-8">
          <Navbar/>
        </div>

        {/* home page routes  */}
        <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <div  className="pt-16 container mx-auto">
                  <Hero />
                  <AboutMe />
                  <SkillsSection />
                  <Projects />
                  <ContactInformation />
                  </div>
                </>
              }
            />
        </Routes>

        {/* project details page  */}
         <Routes>
           <Route path="/projects/:id" element={<div  className="pt-10 container mx-auto"><ProjectDetails/></div>}></Route>
         </Routes>

        {/* footer section  */}
        <div>
        <Footer/>
        </div>
       </>
 
  )
}

export default App
