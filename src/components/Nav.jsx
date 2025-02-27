import { data } from '../constants'
import { LinkSpin } from '../assets/images/index'
import { menu, close } from '../assets/icons/index'
import { useState } from 'react'

const Nav = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const handleMenu = () => {
    setMenuDisplay(!menuDisplay);
  }

  return (
    <nav  className="fixed flex flex-col h-max w-full items-center mx-auto top-0 max-md:bg-[#0F172A] max-md:bg-opacity-80 md:bg-gradient-to-b md:from-slate-900 md:to-transparent z-50 overflow-hidden">
      <div className="flex justify-between items-center w-full px-[5%]">
        <a className="unselectable" href="#">
          <img 
            className="w-[12svh] h-[12svh] md:w-[12svh] md:h-[12svh] z-10"
            src={LinkSpin} alt="Toon Link Spin Attack"
          />
        </a>
        <ul className="hidden md:flex min-w-[45svw] justify-between gap-2 items-center fontsize-md mr-[2svw]">
          {data.navLinks.map((item) => (
            <li key={item.label}>
              <a  href={`#${item.href}`}
                  className="flex items-center font-normal text-blue-500 [text-shadow:2px_0px_2px_#1e5183] transition-all ease-in-out hover:bg-gradient-to-t hover:from-[#347bb2] hover:to-[#1e5183] hover:text-blue-100 hover:[box-shadow:0px_0px_5px_1px_#347bb2] rounded-2xl py-[2px] px-4 unselectable">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {menuDisplay 
          ?
          <img
            className="block md:hidden w-[7svw] h-[7svw] mr-[3%] hover:cursor-pointer"
            src={close}
            alt="Close menu"
            onClick={handleMenu}
          />
          :
          <img
            className="block md:hidden w-[7svw] h-[7svw] mr-[3%] hover:cursor-pointer"
            src={menu}
            alt="Menu"
            onClick={handleMenu}
          />}
      </div>
        { menuDisplay &&       
          <ul className="flex flex-col w-max items-center justify-center gap-4 fontsize-md mb-6">
            {data.navLinks.map((item) => (
            <li key={item.label}>
              <a  href={`#${item.href}`}
                  className="flex w-max font-normal text-blue-500 transition-all ease-in-out hover:text-blue-100 hover:scale-105 rounded-2xl py-[2px] px-4 unselectable">
                <h2 className="text-center">{item.label}</h2>
              </a>
            </li>
            ))}
          </ul>
        }
    </nav>
  )
}

export default Nav