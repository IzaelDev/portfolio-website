import { Hero, Projects, Technologies, Contact, About } from "./sections/index";
import { Nav } from "./components/index";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}

export default App;
