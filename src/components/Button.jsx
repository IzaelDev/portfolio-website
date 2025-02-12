
const Button = () => {
  return (
    <div className="absolute bottom-0 transform translate-y-[85%] overflow-hidden w-[7svh] h-[7svh] border-4 border-transparent [box-shadow:_0_0_0_4px_#3B82F6] rounded-[50%] hover:scale-105 hover:cursor-pointer z-50">
      <div 
      className="relative w-full h-full bg-[#3B82F6] rounded-[50%] [box-shadow:inset_0_0_5px_2px_#22588B]
      
      before:[content:''] before:absolute before:w-[200%] before:h-[200%] before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-[75%] before:bg-[#224161] before:rounded-[45%] before:[animation:_animate_5s_linear_infinite] 

      after:[content:''] after:absolute after:w-[200%] after:h-[200%] after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[75%] after:rounded-[40%] 
      after:[background:rgba(34,65,97,0.5)]
      after:[animation:_animate_10s_linear_infinite]"
      />
    </div>
  )
}

export default Button