import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";

// ScrollToTop component that scrolls to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Main content component that handles routing
function MainContent({ darkMode }: { darkMode: boolean }) {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </>
      } />
      <Route path="/projects" element={<Projects darkMode={darkMode} showAll={true} />} />
      <Route path="/projects/:id" element={<ProjectDetail darkMode={darkMode} />} />
    </Routes>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <Router>
      <ScrollToTop />
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-slate-900" : "bg-slate-50"
        }`}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <MainContent darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
