import { FadeInUp ,FadeInRight, Wind } from "../components/index"
import { linkedin, github2, email } from "../assets/icons/index"
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
    <section className="flex min-h-[100svh] w-full justify-center overflow-visible pb-[5svh]">
      <Wind />
      <div className="flex flex-col items-center justify-center gap-[6svh] mt-[5svh]">
        <FadeInRight className="w-max">
          <h1 className="leaf unselectable [border-radius:200px_/_95px_15px] shadow-lg shadow-black px-7 py-5">
            Contact Me
          </h1>
        </FadeInRight>
        <FadeInUp>
          <p className="text-sm text-[#FDE047]">
            Feel free to reach out if you have any inquiries or just want to say hi!
          </p>
          <div className="flex justify-center items-center gap-4 mt-3">
            <a 
              href="https://www.linkedin.com/in/gabriel-izaguirre-fernández-5a729a197/"
              className=""
              target="_blank" >
              <img 
                src={linkedin}
                alt="LinkedIn logo"
                className="w-[3svw] h-[3svw] hover:scale-110"
              />
            </a>
            <a 
              href="https://github.com/IzaelDev"
              className=""
              target="_blank" >
              <img 
                src={github2}
                alt="Github logo"
                className="w-[3svw] h-[3svw] hover:scale-110"
              />
            </a>
            <a 
              href="mailto:gabrielhizaguirre@gmail.com"
              className=""
              target="_blank" >
                <img 
                  src={email}
                  alt="Email logo"
                  className="w-[4svw] h-[4svw] hover:scale-110"
                />
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default Projects