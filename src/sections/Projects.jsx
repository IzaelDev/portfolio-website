import { LiveDocs, Nike, Arena } from "../assets/images/index";
import { github } from "../assets/icons/index";
import VanillaTilt from "vanilla-tilt";
import { useState, useEffect, useRef, lazy, Suspense } from "react";

const Card = lazy(() => import("../components/Card"));
const FadeInRight = lazy(() => import("../components/FadeInRight"));

function Projects() {
  const [loadProjects, setLoadProjects] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const element = document.querySelectorAll(".leaf");
    VanillaTilt.init(element, {
      max: 10,
      speed: 10,
      glare: true,
      "max-glare": 0.1,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!loadProjects) setLoadProjects(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -5% 0px",
        threshold: 0,
      },
    );
    observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, [loadProjects]);

  return (
    <section
      id="projects"
      className="relative min-h-[100svh] w-full overflow-x-clip pt-[10svh] mb-[10svh]"
    >
      <div className="flex flex-col items-center justify-center gap-[6svh]">
        <FadeInRight className="w-max">
          <h2 className="leaf unselectable shadow-lg shadow-black [border-radius:180px_/_95px_12px] max-md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svw_#195B26,inset_0_0_10px_2.5svw_#3B8447] md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svh_#195B26,inset_0_0_1.5svw_1.5svw_#3B8447] xl:[text-shadow:4px_2px_20px_#FC0] px-[4svh] py-[2svh] md:px-[2svw] md:py-[1svw]">
            Projects
          </h2>
        </FadeInRight>
        <div ref={projectsRef}>
          {loadProjects && (
            <div className="card-wrapper fade-up-section xl:gap-[2.5svw] ">
              <Suspense>
                <Card
                  image={LiveDocs}
                  alt="Live Docs Clone image"
                  title="Live Docs Clone"
                  description="A clone website for live sharing, commenting and editing documents taking after Live Docs."
                  tags={["Typescript", "Next.js"]}
                  git={github}
                  gitLink="https://github.com/IzaelDev/clone_live_docs"
                  goToLink="https://clone-live-docs.vercel.app"
                  index={1}
                />
              </Suspense>
              <Suspense>
                <Card
                  image={Nike}
                  alt="Nike Shop image"
                  title="Nike Landing Site"
                  description="A landing site for Nike shoes E-Commerce website made for practice."
                  tags={["Typescript", "Next.js"]}
                  git={github}
                  gitLink="https://github.com/IzaelDev/nike-shop"
                  goToLink="https://nike-shop-83i9601it-igris-projects-c9cf46a8.vercel.app"
                  index={2}
                />
              </Suspense>
              <Suspense>
                <Card
                  image={Arena}
                  alt="Videogame image"
                  title="Arena of The Chosen"
                  description="A local multiplayer card-grid-fighting game made on Unity, featuring two players combat, unique characters and abilities."
                  tags={["C#", "Unity"]}
                  git={github}
                  gitLink=""
                  goToLink=""
                  index={3}
                />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;