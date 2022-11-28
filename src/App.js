import "./css/App.css";
import Navbar from "./components/navbar.js";
import Typewriterr from "./components/typewriter.js";
import Aboutme from "./components/aboutme.js";
import Skills from "./components/skills.js";
import ScrollToTop from "./components/scrollToTop";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
import ScrollIndicator from "./components/ScrollIndicator";
import React, { useEffect, useState } from "react";
import "./css/theme.css";
export const ThemeContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={darkMode ? "darkBody" : ""}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode}}>
        <ScrollIndicator />
        <Navbar />
        <Typewriterr />
        <ScrollToTop />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
