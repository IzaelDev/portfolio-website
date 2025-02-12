import { useEffect, useState, useRef, Suspense } from "react"
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
    <section className="flex min-h-[100svh] w-full justify-center pb-[5svh]">
      <Wind />
      <div className="flex flex-col items-center justify-center gap-[6svh] mt-[25svh]">
        <FadeInLeft className="w-max ">
          <h1 className="leaf unselectable shadow-lg shadow-black [border-radius:200px/12px_95px] px-6 py-6">
            Technologies
          </h1>
        </FadeInLeft>
        <FadeInUp>	
          <div className="tech-grid max-md:grid-cols-1 max-md:gap-2">
            <div className="flex flex-col h-max w-full col-span-1 row-span-1  font-fotrodin gap-1 z-10 mt-[2svh]">
              <h4>
                Languages
              </h4>
              <ul>
                <div>
                  <img
                    src={javascript}
                    alt="javascript logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>Javascript</h5>
                </div>
                <div>
                  <img
                    src={html}
                    alt="HMTL5 logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>HTML</h5>
                </div>
                <div>
                  <img
                    src={css}
                    alt="CSS logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>CSS</h5>
                </div>
                <div>
                  <img
                    src={typescript}
                    alt="Typescript logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>Typescript</h5>
                </div>
                <div>
                  <img
                    src={csharp}
                    alt="C Sharp logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>C#</h5>
                </div>
                <div>
                  <img
                    src={sql}
                    alt="SQL logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>SQL</h5>
                </div>
              </ul>
              <h4>
                Frontend
              </h4>
              <ul>
               <div>
                  <img
                    src={react}
                    alt="React logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>React.js</h5>
                </div>
               <div>
                  <img
                    src={tailwind}
                    alt="TailwindCSS logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>tailwindcss</h5>
                </div>
               <div>
                  <img
                    src={sass}
                    alt="Sass logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>Sass</h5>
                </div>
              </ul>
              <h4>
                Backend
              </h4>
              <ul>
                <div>
                  <img
                    src={node}
                    alt="Node logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>Node.js</h5>
                </div>
                <div>
                  <img
                    src={express}
                    alt="Express.js logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>Express.js</h5>
                </div>
               <div>
                  <img
                    src={mongo}
                    alt="MongoDB logo"
                    className="w-5 h-5 rounded-sm"
                  />
                  <h5>MongoDB</h5>
                </div>
              </ul>
              <h4>Tools</h4>
              <ul>
                <div>
                  <img
                    src={git}
                    alt="Git logo"
                    className="w-5 h-5 rounded-sm"
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
                      className="play-button unselectable"
                      onClickCapture={() => toggleAnimation()}
                      onTouchStartCapture={() => toggleAnimation()}
                    />
                    :
                    <img
                      src={play}
                      alt="Play button"
                      className="play-button unselectable"
                      onClickCapture={() => toggleAnimation()}
                      onTouchStartCapture={() => toggleAnimation()}
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