
const Button = () => {
  return (
    <div className="absolute bottom-0 transform translate-y-[65%] md:translate-y-[5.5svh] xl:translate-y-[4svh] overflow-hidden w-[10svw] h-[10svw] xs:w-[8svw] xs:h-[8svw] md:w-[10svh] md:h-[10svh] xl:w-[8svh] xl:h-[8svh] 2xl:w-[6svh] 2xl:h-[6svh] [border-width:1svw] md:[border-width:0.75svh] border-transparent [box-shadow:_0_0_0_0.75svw_#3B82F6] xs:[box-shadow:_0_0_0_0.6svh_#3B82F6] xl:[box-shadow:_0_0_0_0.5svh_#3B82F6] rounded-[50%] hover:scale-105 hover:cursor-pointer z-50">
      <div 
      className="relative w-full h-full bg-[#3B82F6] rounded-[50%] [box-shadow:inset_0_0_5px_2px_#22588B]
      
      before:[content:''] before:absolute before:w-[190%] before:h-[190%] before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-[75%] before:bg-[#1e293b] before:rounded-[45%] before:[animation:_animate_5s_linear_infinite] 

      after:[content:''] after:absolute after:w-[200%] after:h-[200%] after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[75%] after:rounded-[40%] 
      after:[background:rgba(34,65,97,0.5)]
      after:[animation:_animate_10s_linear_infinite]"
      />
    </div>
  )
}

export default Button