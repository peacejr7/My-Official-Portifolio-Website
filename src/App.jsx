import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Certificates from "./components/Certificates"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  // Initialize AOS and check for saved dark mode preference
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      const isDark = savedMode === 'true';
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Refresh AOS when dark mode changes
  useEffect(() => {
    AOS.refresh()
  }, [darkMode]) 

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    // Update DOM class
    document.documentElement.classList.toggle('dark');
    
    // Save to localStorage
    localStorage.setItem('darkMode', newMode.toString());
  };
  
  return (
    <div className={
      darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode}/>
      <Experience darkMode={darkMode}/>
      <Certificates darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/> 
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App