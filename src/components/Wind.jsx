import { leaf1, leaf2, leaf3, leaf4 } from "../assets/icons/index"
import { useEffect, useState } from "react"

const Wind = () => {
  const [isTime, setIsTime] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsTime(!isTime)
    }, 8000)
  }, [isTime])
  return (
    <div className="absolute h-[100svh] w-[100svw] overflow-clip pointer-events-none z-[900]">
    {isTime ? (
      <>
        <div className="absolute h-[3.2svw] w-[3.2svw] [animation:blow-leaf-medium_4.7s_linear]"> {/* 1 */}
          <img src={leaf1} className="[animation:spin-leaf_2.5s_linear_infinite]"/>
        </div>
        <div className="absolute h-[2.7svw] w-[2.7svw] [animation:blow-leaf-bottom_4.7s_0.06s_linear]"> {/* 2 */}
          <img src={leaf3} className="[animation:spin-leaf_1.9s_linear_infinite]"/>
        </div>
        <div className="absolute h-[2.8svw] w-[2.8svw] [animation:blow-leaf-bottom_4.7s_0.13s_linear]"> {/* 3 */}
          <img src={leaf2} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>
        <div className="absolute h-[3svw] w-[3svw] [animation:blow-leaf-medium_4.7s_0.25s_linear]"> {/* 4 */}
          <img src={leaf1} className="[animation:spin-leaf_2.03s_linear_infinite]"/>
        </div>
        <div className="absolute h-[3svw] w-[3svw] [animation:blow-leaf-medium_4.7s_0.33s_linear]"> {/* 5 */}
          <img src={leaf2} className="[animation:spin-leaf_1.9s_linear_infinite]"/>
        </div>
        <div className="absolute h-[2.5svw] w-[2.5svw] [animation:blow-leaf-medium_4.7s_0.5s_linear]">{/* 6 */}
          <img src={leaf1} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>
        <div className="absolute h-[2.3svw] w-[2.3svw] [animation:blow-leaf-medium_4.7s_0.6s_linear]"> {/* 7 */}
          <img src={leaf4} className="[animation:spin-leaf_3s_linear_infinite]"/>
        </div>
        <div className="absolute h-[2svw] w-[2svw] [animation:blow-leaf-bottom_4.7s_0.6s_linear]"> {/* 8 */}
          <img src={leaf4} className="[animation:spin-leaf_3s_linear_infinite]"/>
        </div>
        <div className="absolute h-[2.7svw] w-[2.7svw] [animation:blow-leaf-bottom_4.7s_0.75s_linear]"> {/* 9 */}
          <img src={leaf3} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>
        <div className="absolute h-[2.9svw] w-[2.9svw] [animation:blow-leaf-bottom_4.7s_0.83s_linear]"> {/* 10 */}
          <img src={leaf1} className="[animation:spin-leaf_2.3s_linear_infinite]"/>
        </div>
        <div className="absolute h-[3.1svw] w-[3.1svw] [animation:blow-leaf-bottom_4.7s_0.93s_linear]"> {/* 11 */}
          <img src={leaf1} className="[animation:spin-leaf_2.3s_linear_infinite]"/>
        </div>
        <div className="absolute h-[3.3svw] w-[3.3svw] [animation:blow-leaf-bottom_4.7s_0.99s_linear] z-10"> {/* 12 */}
          <img src={leaf2} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>

        <div className="absolute h-[3.3svw] w-[3.3svw] [animation:blow-leaf-rise_4.7s_0.05s_linear] z-10"> {/* 13 */}
          <img src={leaf3} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>
        <div className="absolute h-[3.3svw] w-[3.3svw] [animation:blow-leaf-rise_4.7s_0.33s_linear] z-10"> {/* 14 */}
          <img src={leaf2} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>
        <div className="absolute h-[3.3svw] w-[3.3svw] [animation:blow-leaf-rise_4.7s_0.55s_linear] z-10"> {/* 15 */}
          <img src={leaf3} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>
        <div className="absolute h-[3.3svw] w-[3.3svw] [animation:blow-leaf-rise_4.7s_0.75s_linear] z-10"> {/* 16 */}
          <img src={leaf1} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>
        <div className="absolute h-[3.3svw] w-[3.3svw] [animation:blow-leaf-rise_4.7s_0.9s_linear] z-10"> {/* 17 */}
          <img src={leaf4} className="[animation:spin-leaf_2s_linear_infinite]"/>
        </div>
      </>)
  : (null) }
    </div>
  )
}

export default Wind;