import { motion } from "motion/react";
import Button from "../components/Button";
import { useState, useEffect, lazy, Suspense } from "react";

const Wind = lazy(() => import("../components/Wind"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id=" "
      className="flex h-[99svh] w-full justify-center items-center bg-island bg-[position:55%_40%] md:bg-top md:bg-[length:100%_100%] mb-[10svh] overflow-x-hidden"
    >
      {!isMobile && 
        <Suspense>
          <Wind />
        </Suspense>
      }
      <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-to-slate-900 to-slate-900" />
      <motion.div
        className="relative flex flex-col items-center justify-center bg-[#1e293b] p-4 md:p-6 lg:p-8 rounded-lg xl:rounded-xl bg-opacity-80 [box-shadow:0px_0px_10px_5px_#1e293b] z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.81, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h1 className=" text-yellow-300 z-10">Gabriel Izaguirre,</h1>
        <h2 className="text-blue-500 z-10">a front-end developer</h2>
        <Button />
        <div className="absolute h-[120%] w-[115%] -top-[20%] md:-top-[15%] 2xl:-top-[20%] bg-transparent overflow-x-visible">
          <h3 className="absolute h-max w-max top-[0%] left-[0%] text-center text-blue-100 bg-gradient-to-t from-[#347bb2] to-[#1E5183] [box-shadow:0px_0px_5px_1px_#347bb2] rounded-lg 2xl:rounded-2xl py-1 px-2 lg:px-3 2xl:px-4 2xl:py-2  mb-1 z-20">
            Hello! I&apos;m
          </h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
