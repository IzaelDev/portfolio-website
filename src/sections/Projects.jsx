import { FadeInUp ,FadeInRight, Card, Wind } from "../components/index"
import { ToonWallpaper } from "../assets/images/index"
import { github } from "../assets/icons/index"
import VanillaTilt from "vanilla-tilt"
import { useEffect } from "react"

function Projects() {
    useEffect(()=>{
    const element = document.querySelectorAll(".leaf");
    VanillaTilt.init(element, {
      max: 10,
      speed: 10,
      glare: true,
      "max-glare": 0.10,
    });
  }, []);
  return (
    <section className="min-h-[100svh] w-full overflow-visible pb-[5svh]">
      <div className="flex flex-col items-center justify-center gap-[6svh] mt-[25svh]">
        <FadeInRight className="w-max">
          <h1 className="leaf unselectable [border-radius:180px_/_95px_12px] shadow-lg shadow-black px-10 py-4">
            Projects
          </h1>
        </FadeInRight>
        <FadeInUp>
          <div className="card-wrapper lg:gap-6 transition-[all_.8s_ease]">
              <Card 
                image={ToonWallpaper}
                alt="Live Docs Clone image"
                title="Live Docs Clone"
                description="A website for live sharing and editing documents heavily inspired by Live Docs."
                tags={["Typescript", "Next.js"]}
                git={github}
                gitLink="https://github.com/IzaelDev/portfolio-website"
                goToLink="https://github.com/IzaelDev/portfolio-website"
                index={1}
              />
              <Card 
                image={ToonWallpaper}
                alt="Live Docs Clone image"
                title="Live Docs Clone"
                description="A website for live sharing and editing documents heavily inspired by Live Docs"
                tags={["Typescript", "Next.js"]}
                git={github}
                gitLink="https://github.com/IzaelDev/portfolio-website"
                goToLink="https://github.com/IzaelDev/portfolio-website"
                index={2}
              />
              <Card 
                image={ToonWallpaper}
                alt="Live Docs Clone image"
                title="Live Docs Clone"
                description="A website for live sharing and editing documents heavily."
                tags={["Typescript", "Next.js"]}
                git={github}
                gitLink="https://github.com/IzaelDev/portfolio-website"
                goToLink="https://github.com/IzaelDev/portfolio-website"
                index={3}
              />
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default Projects