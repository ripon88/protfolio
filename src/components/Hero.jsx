// import React from "react";
import { TypeAnimation } from 'react-type-animation';
import heroImage from "../assets/heroimage.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white" id="Hero">
      <div className="px-5 md:mt-[50px] w-full h-screen mx-auto text-center flex-col justify-center">
        <div className="flex-col justify-center flex items-center pb-5">
          <img
            src={heroImage}
            alt="heroImage"
            className="w-[150px] rounded-full border-[5px] border-[#00df9a]"
          />
        </div>
        <h1 className=" text-4xl md:text-6xl font-bold m-2"> I am</h1>

        {/* animation text */}

        <div className=''>
          <div className="flex justify-center ">
            <TypeAnimation className="text-2xl md:text-4xl font-medium text-[#00df9a] md:pb-9 pl-2"
              sequence={[
                "A Student",
                1000,
                "A Front-End Developer",
                1000,
                "A Graphic Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />

          </div></div>
        {/* end  here*/}
        <p className="py-2 text-xl text-slate-300 md:hidden block">
          Hey there!👋 Im Rezaul , I am a front-end web developer. I love to use
          my creativity and make something new. Thats why I love to work with
          React.js .
        </p>
        <p className=" text-xl text-slate-300 hidden md:block">
          Hey there!👋 Im Rezaul , I am a front-end web developer. I love to use
          my creativity and make something new. Thats why I love to work with
          React.js . 🌌 Over the last year ,💻 I gather knowledge in various
          parts of web development by myself. My ultimate goal is to become an
          awesome full-stack web developer who can make beautiful UIs and also
          can handle the back-end smoothly. Lets connect and embark on an
          exciting adventure through the vast universe of technology! 🚀
        </p>

        <div>
          <p className="pt-5">Find me on:</p>
          <div className="flex justify-center items-center gap-5">
            <Link
              target="_blank"
              to={"https://github.com/rezaulkarim7080"}
              className="bg-black p-3 rounded-xl "
            >
              <FaGithub size={35} className="text-slate-50  hover-btn" />
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/rezaulkarim7080/"}
              className="bg-black p-3 rounded-xl"
            >
              <FaLinkedin size={35} className="text-cyan-600  hover-btn" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
