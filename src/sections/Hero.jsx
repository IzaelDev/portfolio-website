import { motion } from "motion/react"
import Button from "../components/Button"
import { Wind } from "../components"

const Hero = () => {
  return (
    <section className="flex h-[99svh] w-[100svw] justify-center bg-island bg-[position:33%_50%] md:bg-top md:bg-[length:100%_100%] overflow-visible">
      <Wind />
      <div className="absolute h-[100%] w-[100svw] bg-gradient-to-b from-transparent via-to-slate-900 to-slate-900"/>
      <motion.div className="absolute inset-y-1/3 lg:inset-y-[30%]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.81, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}> 
        <h2 className="relative top-5 right-4 text-blue-100 bg-gradient-to-t from-[#347bb2] to-[#1E5183] rounded-lg py-1 px-3 mb-1 max-sm:text-lg inline-block text-[1em] z-20">
          Hello! I&apos;m 
        </h2>
        <div className="relative flex flex-col w-[105%] items-center">
          <div className="absolute w-full h-[110%] px-4 bg-[#1e293b] rounded-lg border-[rgba(30, 41, 59, 0.5)] opacity-70 [box-shadow:0px_0px_10px_6px_#1e293b] z-10"/>
          <h1 className="p-1 mt-3 text-[2.1em] text-yellow-300 leading-snug z-10">
          Gabriel Izaguirre,</h1>
          <h2 className="text-[1.4em] text-blue-500 leading-snug mb-[2%] z-10">a front-end developer</h2>
          <Button/>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 