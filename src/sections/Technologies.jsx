import { useEffect, useState, useRef } from "react"
import { javascript, html, css, typescript, csharp, sql, react, tailwind, sass, node, express, mongo, git, play, pause } from "../assets/icons/index"
import { FadeInLeft, FadeInUp, Wind } from "../components/index"
import { Canvas } from "@react-three/fiber"
import VanillaTilt from "vanilla-tilt"
import Scene from "../components/Scene"

function Technologies() {
    const [playAnimation, setPlayAnimation] = useState(true)
    const modelRef = useRef(null);

  useEffect(()=>{
    const element = document.querySelectorAll(".leaf");
    VanillaTilt.init(element, {
      max: 10,
      speed: 10,
      glare: true,
      "max-glare": 0.10,
    });
  }, []);

  const toggleAnimation = () => {
    if (playAnimation) {
      modelRef.current.stop();
    } else {
      modelRef.current.play();
    };
    setPlayAnimation((play) => !play);
  }

  return (
    <section id="technologies" className="relative flex min-h-[100svh] w-full justify-center overflow-x-clip pt-[10svh]">
      <Wind />
      <div className="flex flex-col items-center justify-center gap-[6svh]">
        <FadeInLeft className="w-max ">
          <h2 className="leaf unselectable shadow-lg shadow-black [border-radius:200px/12px_95px] 2xl:[border-radius:300px/12px_120px] max-md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svw_#195B26,inset_0_0_10px_2.5svw_#3B8447] md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svh_#195B26,inset_0_0_1.5svw_1.5svw_#3B8447] xl:[text-shadow:4px_0px_20px_#FC0] px-[4svw] py-[4svw] md:px-[2svw] md:py-[2svw] 2xl:px-[2.5svw] 2xl:py-[1.8svw]">
            Technologies
          </h2>
        </FadeInLeft>
        <FadeInUp>
          <div className="tech-grid max-md:grid-cols-1 max-md:gap-2">
            <div className="flex flex-col h-max w-full col-span-1 row-span-1 font-fotrodin gap-[1svw] z-10 mt-[2svh]">
              <h4>
                Languages
              </h4>
              <ul>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={javascript}
                    alt="javascript logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>Javascript</h5>
                </div>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={html}
                    alt="HMTL5 logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>HTML</h5>
                </div>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={css}
                    alt="CSS logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>CSS</h5>
                </div>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={typescript}
                    alt="Typescript logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>Typescript</h5>
                </div>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={csharp}
                    alt="C Sharp logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>C#</h5>
                </div>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={sql}
                    alt="SQL logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>SQL</h5>
                </div>
              </ul>
              <h4>
                Frontend
              </h4>
              <ul>
               <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={react}
                    alt="React logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>React.js</h5>
                </div>
               <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={tailwind}
                    alt="TailwindCSS logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[1.8svw] md:h-[1.8svw] rounded-sm"
                  />
                  <h5>tailwindcss</h5>
                </div>
               <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={sass}
                    alt="Sass logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>Sass</h5>
                </div>
              </ul>
              <h4>
                Backend
              </h4>
              <ul>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={node}
                    alt="Node logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>Node.js</h5>
                </div>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={express}
                    alt="Express.js logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>Express.js</h5>
                </div>
               <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable">
                  <img
                    src={mongo}
                    alt="MongoDB logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>MongoDB</h5>
                </div>
              </ul>
              <h4>Tools</h4>
              <ul>
                <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                  <img
                    src={git}
                    alt="Git logo"
                    className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                  />
                  <h5>Git</h5>
                </div>
              </ul>
            </div>
            <div className="unselectable flex flex-col relative col-span-1 row-span-1 h-[100svh] w-full">
                  <Canvas shadows dpr={[1, 1.5]}>
                    <Scene modelRef={modelRef}/>
                  </Canvas>
                  { playAnimation
                    ?
                    <img
                      src={pause}
                      alt="Pause button"
                      className="play-button h-[10svw] w-[10svw] md:h-[3.5svw] md:w-[3.5svw] unselectable"
                      onClickCapture={() => toggleAnimation()}
                    />
                    :
                    <img
                      src={play}
                      alt="Play button"
                      className="play-button h-[10svw] w-[10svw] md:h-[3.5svw] md:w-[3.5svw] unselectable"
                      onClickCapture={() => toggleAnimation()}
                    />
                  }
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default Technologies