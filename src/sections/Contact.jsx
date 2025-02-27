import { FadeInUp ,FadeInRight, Wind } from "../components/index"
import { linkedin, github2, email } from "../assets/icons/index"
import VanillaTilt from "vanilla-tilt"
import { useEffect } from "react"

function Contact() {
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
    <section id="contact" className="relative flex h-[40svh] w-full justify-center overflow-x-clip mb-[5%]">
      <Wind />
      <div className="flex flex-col justify-center items-center mx-[5%] gap-[6svh]">
        <FadeInRight className="w-max">
          <h2 className="leaf unselectable shadow-lg shadow-black [border-radius:200px_/_95px_15px] 2xl:[border-radius:250px/120px_15px] max-md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svw_#195B26,inset_0_0_10px_2.5svw_#3B8447] md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svh_#195B26,inset_0_0_1.5svw_1.5svw_#3B8447] xl:[text-shadow:4px_2px_20px_#FC0] px-[2.7svh] py-[2.2svh] md:px-[2.5svw] md:py-[1.75svw] 2xl:px-[2.1svw] 2xl:py-[1.8svw]">
            Contact Me
          </h2>
        </FadeInRight>
        <FadeInUp>
          <div className="flex flex-col items-center gap-[3svh] 2xl:gap-[1svw]">
            <p className="text-[#FDE047] text-center [word-break:normal] [overflow-wrap:break-word] unselectable">
              Feel free to reach out for any professional inquiries or just to talk!
            </p>
            <div className="flex justify-center items-center gap-[3.5svh] mt-[1.5svw]">
              <a 
                href="https://www.linkedin.com/in/gabrielhernanizaguirre/"
                target="_blank" rel="noopener">
                <img 
                  src={linkedin}
                  alt="LinkedIn logo"
                  className="w-[8svw] h-[8svw] md:w-[3.8svw] md:h-[3.8svw] 2xl:w-[3.5svw] 2xl:h-[3.5svw] hover:scale-110"
                />
              </a>
              <a 
                href="https://github.com/IzaelDev"
                target="_blank" rel="noopener">
                <img 
                  src={github2}
                  alt="Github logo"
                  className="w-[8svw] h-[8svw] md:w-[4svw] md:h-[4svw] 2xl:w-[3.5svw] 2xl:h-[3.5svw] hover:scale-110"
                />
              </a>
              <a 
                href="mailto:gabrielhizaguirre@gmail.com"
                target="_blank" rel="noopener">
                  <img 
                    src={email}
                    alt="Email logo"
                    className="w-[8.8svw] h-[8.8svw] md:w-[4svw] md:h-[4svw] 2xl:w-[3.5svw] 2xl:h-[3.5svw] hover:scale-110"
                  />
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default Contact