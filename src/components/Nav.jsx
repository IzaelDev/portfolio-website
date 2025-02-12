import { data } from '../constants'
import { LinkSpin } from '../assets/images/index'
import { menu } from '../assets/icons/index'

const Nav = () => {
  return (
    <header className="fixed w-full z-50">
      <nav  className="flex justify-between items-center my-0 mx-auto bg-gradient-to-b from-slate-900 to-transparent">
        <a className="ml-6" href="/">
          <img 
            className="w-14 h-14 z-10"
            src={LinkSpin} alt="Toon Link Spin Attack"
          />
        </a>
        <ul className="hidden md:flex min-w-[50svw] justify-evenly items-center fontsize-md">
          {data.navLinks.map((item) => (
            <li key={item.label}>
              <a  href={item.href}
                  className="font-normal text-blue-500 transition-all ease-in-out hover:bg-gradient-to-t hover:from-[#347bb2] hover:to-[#1e5183] hover:text-blue-100 rounded-lg py-0 px-2">  
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <img
          className="block lg:hidden w-9 h-9 mr-[3%] hover:cursor-pointer"
          src={menu}
          alt="Options"
        />
      </nav>
    </header>
  )
}

export default Nav