import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';
import { Menu, X } from "lucide-react";
import NavLinks from "../Router/Routes";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log({pathname});
  

  return (
    <header className="flex w-screen fixed top-0 h-[71px] z-40 items-center justify-between px-4 md:px-20 py-0 bg-[#57575724] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
      {/* Logo section */}
      <div className="flex items-center gap-3">
        <div className="relative w-[164px] h-9">
          <img
            className="absolute w-[34px] h-9 top-0 left-0"
            alt="Group"
            src="/group-163.png"
          />
          <div className="absolute w-[123px] h-[27px] top-0.5 left-[41px]">
            <div className="relative h-[27px]">
              <img
                className="w-[117px] h-[27px] absolute top-0 left-0"
                alt="Calcos"
                src="/calcos.png"
              />
              <img
                className="absolute w-1.5 h-1.5 top-0 left-[117px]"
                alt="Image"
                src="/-.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation links */}
      <NavigationMenu className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-[71px] md:top-0 right-0 w-full md:w-auto bg-transparent backdrop:blur md:bg-transparent z-50 `}>
        <NavigationMenuList className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[50px] p-4 md:p-0">
          {NavLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`text-2xl leading-6 font-['Inter',Helvetica] text-white ${
                    link.link === pathname ? "font-bold" : "font-normal"
                  }`}
                >
                 <Link to={link.link}> {link.title} </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;