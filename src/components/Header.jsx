import { Link } from "react-scroll";
import Logo from "../assets/images/logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [active, setActive] = useState("bg-transparent")
    const mainMenu = useRef()



    const handleMenuOpen = () => {
      mainMenu.current.style.right = "0"
    }

    const handleMenuClose = () => {
      mainMenu.current.style.right = "-110%"
    }

    function handleScroll() {
        window.addEventListener("scroll", () => {
            let pageY = window.scrollY
            pageY >= 82 ? setActive("bg-blue-700 animate-[wiggle_1s_ease-in-out]") : setActive("bg-transparent") ;
        })
    }

    useEffect(() => {
        console.log("Effect");
        handleScroll()
    },[])

  return (
    <nav className={`py-4 fixed top-0 left-0 z-50 w-full duration-200 ${active} `} >
      <div className="container">
        <div className="flex justify-between gap-6 items-center">
          <div className="flex gap-2 items-center">
            <a href="#">
              <img className="h-[50px] max-w-full" src={Logo} alt="Edusity" />
            </a>
          </div>
          <ul className="flex gap-6 justify-end fixed top-0 -right-[calc(100%_+_50px)] bg-blue-700 flex-col w-[50vw] p-6 duration-300 xl:gap-10  lg:items-center  lg:flex-row  lg:bg-transparent lg:static lg:flex-1" ref={mainMenu}>
            <button 
              className="absolute top-0 right-[calc(100%)] bg-white/40 text-lg p-2 duration-300 text-gray-900 hover:text-blue-900  lg:hidden"
              onClick={() => handleMenuClose()}
              >
              <FaXmark />
            </button>
            <li>
              <Link
                className="text-white font-semibold capitalize hover:text-slate-300 duration-200 cursor-pointer"
                activeClass="text-black"
                to="hero"
                smooth={true}
                offset={-82}
                duration={500}
                delay={0}
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold capitalize hover:text-slate-300 duration-200 cursor-pointer"
                activeClass="text-black"
                to="program"
                smooth={true}
                offset={-82}
                duration={500}
                delay={0}
                spy={true}
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold capitalize hover:text-slate-300 duration-200 cursor-pointer"
                activeClass="text-black"
                to="about"
                smooth={true}
                offset={-82}
                duration={500}
                delay={0}
                spy={true}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold capitalize hover:text-slate-300 duration-200 cursor-pointer"
                activeClass="text-black"
                to="campus"
                smooth={true}
                offset={-82}
                duration={500}
                delay={0}
                spy={true}
              >
                Campus
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-semibold capitalize hover:text-slate-300 duration-200 cursor-pointer"
                activeClass="text-black"
                to="testimonials"
                smooth={true}
                offset={-82}
                duration={500}
                delay={0}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full cursor-pointer"
                activeClass="text-black"
                to="contact"
                smooth={true}
                offset={-82}
                duration={500}
                delay={0}
            >
                Contact Us
              </Link>
            </li>
          </ul>
          <span onClick={() => handleMenuOpen()} className="text-white text-[25px] border border-dotted p-2 rounded lg:hidden">
              <FaBars />
            </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
