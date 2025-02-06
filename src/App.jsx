
import AboutMe from "./pages/AboutMe/AboutMe"
import ContactInformation from "./pages/ContactInformation/ContactInformation"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero/Hero"
import Navbar from "./pages/Navbar"
import SkillsSection from "./pages/SkillsSection/SkillsSection"


function App() {

  return (
   
        // <Routes>
        //   <Route path="/" element={<Root/>}>
        //   <Route index element={<Home />}></Route>
        //   </Route>
       
        // </Routes>
       <>
        <div className="mb-8">
        <Navbar/>
        </div>
        <div className="pt-16 container mx-auto">
        <Hero/>
        </div>
        <div>
          <AboutMe/>
        </div>
        <div>
          <SkillsSection/>
        </div>
        <div>
          <ContactInformation/>
        </div>
        <Footer/>
       </>
 
  )
}

export default App
