import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";



const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };


  return (
    <div className="bg-[#131212] flex justify-between items-center h-24 max-w-[100%] mx-auto px-4">
      <h1 className="width-full text-3xl font-bold text-[#00df9a]">
        Rezaul Karim.
      </h1>

      <ul className="hidden md:flex text-slate-300 text-lg font-medium">
        <Link
          to="Hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          onClick={closeNav}
        >
          <li className="p-4 hover:text-[#00df9a] duration-400">Home</li>
        </Link>
        <Link
          to="Hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          onClick={closeNav}
        >
          <li className="p-4 hover:text-[#00df9a] duration-400">About</li>
        </Link>
        <Link
          to="MyProjects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          onClick={closeNav}
        >
          <li className="p-4 hover:text-[#00df9a] duration-400">Projects</li>
        </Link>
        <Link
          to="Skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          onClick={closeNav}
        >
          <li className="p-4 hover:text-[#00df9a] duration-400">Skills</li>
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          onClick={closeNav}
        >
          <li className="p-4 hover:text-[#00df9a] duration-400">Contact me</li>
        </Link>

      </ul>

      {/* Responsive */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%]  h-full bg-[#2bbd8f] opacity-85 ease-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 uppercase">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={closeNav}
          >
            <li className="p-4 text-black duration-400 text-center border-b border-b-[#ffffff]">
              Home
            </li>
          </Link>

          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={closeNav}
          >
            <li className=" p-4  text-black duration-400 text-center border-b border-b-[#ffffff]">
              About
            </li>
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={closeNav}
          >
            <li className=" p-4  text-black duration-400 text-center border-b border-b-[#ffffff]">
              Contact
            </li>
          </Link>
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={closeNav}
          >
            <li className=" p-4  text-black duration-400 text-center border-b border-b-[#ffffff]">
              Projects
            </li>
          </Link>
          <Link
            to="Skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={closeNav}
          >
            <li className=" p-4  text-black duration-400 text-center border-b border-b-[#ffffff]">
              Skills
            </li>
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            onClick={closeNav}
          >
            <li className=" p-4  text-black duration-400 text-center border-b border-b-[#ffffff]">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
