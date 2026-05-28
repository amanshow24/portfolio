import { Suspense, lazy } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import NavigationBar from "./components/NavBar/NavigationBar";
import Home from "./components/Home/HomeSection";

const About = lazy(() => import("./components/About/AboutSection"));
const Skills = lazy(() => import("./components/Skills/SkillsSection"));
const Experience = lazy(() => import("./components/Experience/ExperienceSection"));
const Projects = lazy(() => import("./components/Projects/ProjectSection"));
const Contact = lazy(() => import("./components/Contact/ContactSection"));

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NavigationBar />
      <main>
        <Home />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>      
      <Analytics />   
      <SpeedInsights /> 
    </ThemeProvider>
  )
}

export default App
