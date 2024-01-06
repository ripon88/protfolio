import React from "../assets/skills/react.svg";
import Next from "../assets/skills/nextjs.svg";
import JS from "../assets/skills/js.svg";
import HtmlIcon from "../assets/skills/html.svg";
import cssIcon from "../assets/skills/css.svg";
import Nodejs from "../assets/skills/nodejs.svg";
import ex from "../assets/skills/express.svg";
import Bootstrap from "../assets/skills/bootstrap.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";
import mongoDB from "../assets/skills/mongodb.svg";
import tailwind from "../assets/skills/tailwind.svg";
import MaurialUi from "../assets/skills/materialUi.svg";

const Skills = () => {
  return (
    <div className="px-5 mt-[100px]" id="Skills">
      <h1 className="text-white text-center text-5xl font-semibold">
        Skills&Tools
      </h1>
      <div className="py-14 flex flex-wrap gap-7 w-[90%] mx-auto items-center justify-center">
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={React} alt="React" width={80} className="hover-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={Next} alt="Next" width={80} className="hover-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={JS} alt="JS" width={80} className="hover-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img
              src={HtmlIcon}
              alt="HtmlIcon"
              width={80}
              className="hover-btn"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={cssIcon} alt="CSS" width={80} className="hover-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={Nodejs} alt="Nodejs" width={80} className="hover-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={ex} alt="Nodejs" width={80} className="hover-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img
              src={Bootstrap}
              alt="Nodejs"
              width={80}
              className="hover-btn"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img
              src={tailwind}
              alt="tailwind"
              width={80}
              className="hover-btn"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img
              src={MaurialUi}
              alt="MaurialUi"
              width={80}
              className="hover-btn "
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={mongoDB} alt="Nodejs" width={80} className="hover-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={git} alt="Nodejs" width={80} className="hover-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="bg-black px-10 py-3 rounded-xl ">
            <img src={github} alt="Nodejs" width={80} className="hover-btn" />
          </div>
        </div>
      </div>
      {/* //////////  */}
    </div>
  );
};

export default Skills;
