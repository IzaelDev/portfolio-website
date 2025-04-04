import { motion } from "motion/react";
import VanillaTilt from "vanilla-tilt";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Korok } from "../assets/images/index";
import resume from "../../resume.pdf";

const Wind = lazy(() => import("../components/Wind"));
const FadeInLeft = lazy(() => import("../components/FadeInLeft"));

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loadAbout, setLoadAbout] = useState(false);
  const aboutRef = useRef(null);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!loadAbout) setLoadAbout(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -5% 0px",
        threshold: 0,
      },
    );
    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [loadAbout]);

  useEffect(() => {
    const element = document.querySelectorAll(".leaf");
    VanillaTilt.init(element, {
      max: 10,
      speed: 10,
      glare: true,
      "max-glare": 0.1,
    });
  }, []);

  return (
    <section
      id="about"
      className="h-max w-full overflow-x-clip pt-[10svh] mb-[10svh]"
    >
      {!isMobile && 
        <Suspense>
          <Wind />
        </Suspense>
      }
      <div className="flex flex-col justify-center items-center mx-[5%] gap-[6svh]">
        <Suspense>
          <FadeInLeft className="w-max ">
            <h2 className="leaf unselectable shadow-lg shadow-black [border-radius:180px/12px_95px] max-md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svw_#195B26,inset_0_0_10px_2.5svw_#3B8447] md:[box-shadow:0_0_1px_1px_#195B26,inset_0_0_2px_0.5svh_#195B26,inset_0_0_1.5svw_1.5svw_#3B8447] xl:[text-shadow:4px_2px_20px_#FC0] px-[3svh] py-[1.75svh] md:px-[3svw] md:py-[1.75svw] 2xl:px-[2svw] 2xl:py-[1.1svw]">
              About Me
            </h2>
          </FadeInLeft>
        </Suspense>
        <div ref={aboutRef} className="flex justify-center">
          {loadAbout &&
            <motion.div
              className="relative h-max w-[80%] md:w-[60%] flex flex-col items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.81, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <h5 className="text-[#CBDCF0] [text-shadow:4px_2px_30px_#CBDCF0] 2xl:[text-shadow:4px_2px_60px_#CBDCF0] text-start [word-break:break] [overflow-wrap:break-word] mb-2 unselectable">
                I am a final year Computer Engineering major interested in Web
                Development. I also like Game Development but I am currently focused
                on creating web applications that are visually appealing and
                user-friendly. I am continuously looking for opportunities to learn
                and grow, and I also happen to be a fan of TLOZ games.
              </h5>
              <img
                src={Korok}
                alt="A gif of Makar"
                className="unselectable w-12 h-12 lg:h-16 lg:w-16 xl:h-[10svh] xl:w-[10svh]"
              />
              <h5 className="w-full text-[#CBDCF0] [text-shadow:4px_2px_30px_#CBDCF0] 2xl:[text-shadow:4px_2px_60px_#CBDCF0] text-start [word-break:break] [overflow-wrap:break-word] unselectable">
                At the moment, I am learning React-Three-Fiber and the technologies
                I am working with are Javascript, React and Node.js.{" "}
                <a
                  href={resume}
                  className="underline"
                  target="_blank"
                  rel="noopener"
                >
                  Here you can view my resume.
                </a>
              </h5>
            </motion.div>
          }
        </div>
      </div>
    </section>
  );
}

export default About;
