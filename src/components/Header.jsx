import { Link } from "react-scroll";
import Logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Header = () => {
    const [active, setActive] = useState("bg-transparent")

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
            <span className="text-white text-[25px] border border-dotted p-2 rounded md:hidden">
              <FaBars />
            </span>
            <a href="#">
              <img className="h-[50px] max-w-full" src={Logo} alt="Edusity" />
            </a>
          </div>
          <ul className="flex gap-10 items-center justify-end">
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
