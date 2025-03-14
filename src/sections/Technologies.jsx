import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import VanillaTilt from "vanilla-tilt";

const Wind = lazy(() => import("../components/Wind"));
const FadeInLeft = lazy(() => import("../components/FadeInLeft"));
const Scene = lazy(() => import("../components/Scene"));

function Technologies() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [playAnimation, setPlayAnimation] = useState(true);
  const [loadTechs, setLoadTechs] = useState(false);
  const [icons, setIcons] = useState({});
  const modelRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    if (loadTechs) {
      import("../assets/icons/index").then((module) => {
        setIcons(module);
      });
    }
  }, [loadTechs]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          if (!loadTechs) setLoadTechs(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -5% 0px",
        threshold: 0,
      },
    );
    observer.observe(techRef.current);
    return () => observer.disconnect();
  }, [loadTechs]);

  const toggleAnimation = () => {
    if (playAnimation) {
      modelRef.current.stop();
    } else {
      modelRef.current.play();
    }
    setPlayAnimation((play) => !play);
  };

  return (
    <section
      id="technologies"
      className="relative flex min-h-[100svh] w-full justify-center overflow-x-clip pt-[10svh]"
    >
      {!isMobile && 
        <Suspense>
          <Wind />
        </Suspense>
      }
      <div className="flex flex-col items-center justify-center gap-[6svh]">
        <Suspense>
          <FadeInLeft className="w-max ">
            <h2 className="leaf unselectable shadow-lg shadow-black [border-radius:200px/12px_95px] 2xl:[border-radius:300px/12px_120px] max-md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svw_#195B26,inset_0_0_10px_2.5svw_#3B8447] md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svh_#195B26,inset_0_0_1.5svw_1.5svw_#3B8447] xl:[text-shadow:4px_0px_20px_#FC0] px-[4svw] py-[4svw] md:px-[2svw] md:py-[2svw] 2xl:px-[2.5svw] 2xl:py-[1.8svw]">
              Technologies
            </h2>
          </FadeInLeft>
        </Suspense>
        <div ref={techRef}>
          {loadTechs && (
            <Suspense fallback="Loading...">
              <div className="tech-grid fade-up-section max-md:grid-cols-1 max-md:gap-2">
                <div className="flex flex-col h-max w-full col-span-1 row-span-1 font-inter gap-[1svw] z-10 mt-[2svh]">
                  <h4>Languages</h4>
                  <ul>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.javascript}
                        alt="javascript logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>Javascript</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.html}
                        alt="HMTL5 logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>HTML</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.css}
                        alt="CSS logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>CSS</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.typescript}
                        alt="Typescript logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>Typescript</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.csharp}
                        alt="C Sharp logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>C#</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.sql}
                        alt="SQL logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>SQL</h5>
                    </div>
                  </ul>
                  <h4>Frontend</h4>
                  <ul>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.react}
                        alt="React logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>React.js</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.tailwind}
                        alt="TailwindCSS logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[1.8svw] md:h-[1.8svw] rounded-sm"
                      />
                      <h5>tailwindcss</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.sass}
                        alt="Sass logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>Sass</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.wordpress}
                        alt="Wordpress logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>Wordpress</h5>
                    </div>
                  </ul>
                  <h4>Backend</h4>
                  <ul>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.node}
                        alt="Node logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>Node.js</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.express}
                        alt="Express.js logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>Express.js</h5>
                    </div>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable">
                      <img
                        src={icons.mongo}
                        alt="MongoDB logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>MongoDB</h5>
                    </div>
                  </ul>
                  <h4>Tools</h4>
                  <ul>
                    <div className="px-[9%] py-[3%] md:py-[5%] rounded-md lg:rounded-xl 2xl:rounded-3xl unselectable gap-[5%]">
                      <img
                        src={icons.git}
                        alt="Git logo"
                        loading="lazy"
                        className="w-[3.5svw] h-[3.5svw] md:w-[2svw] md:h-[2svw] rounded-sm"
                      />
                      <h5>Git</h5>
                    </div>
                  </ul>
                </div>
                <div className="unselectable flex flex-col relative col-span-1 row-span-1 h-[100svh] w-full">
                  <Canvas shadows dpr={[1, 1.5]}>
                    <Scene modelRef={modelRef} />
                  </Canvas>
                  {playAnimation ? (
                    <img
                      src={icons.pause}
                      alt="Pause button"
                      className="play-button h-[10svw] w-[10svw] md:h-[3.5svw] md:w-[3.5svw] unselectable"
                      onClickCapture={() => toggleAnimation()}
                    />
                  ) : (
                    <img
                      src={icons.play}
                      alt="Play button"
                      className="play-button h-[10svw] w-[10svw] md:h-[3.5svw] md:w-[3.5svw] unselectable"
                      onClickCapture={() => toggleAnimation()}
                    />
                  )}
                </div>
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
