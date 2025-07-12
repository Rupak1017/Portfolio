import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy‐load each below‐the‐fold section in its own boundary:
const About      = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech       = lazy(() => import("./components/Tech"));
const Works      = lazy(() => import("./components/Works"));
const Contact    = lazy(() => import("./components/Contact"));
const StarsCanvas= lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero + Navbar paint first */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Each section in its own Suspense so chunks load on demand */}
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <Tech />
        </Suspense>
        <Suspense fallback={null}>
          <Works />
        </Suspense>
        <Suspense fallback={null}>
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
