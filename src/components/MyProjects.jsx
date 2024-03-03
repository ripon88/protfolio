import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import Techmart from "../assets/Techmart.png";
import OasisDental from "../assets/OasisDental.png";
import Learnify from "../assets/Learnify.png";

const MyProjects = () => {
  return (
    <div className="px-5 md:mt-[50px]" id="MyProjects">
      <h1 className="text-white text-center text-5xl font-semibold">
        Projects
      </h1>
      <h1 className="text-[#00df9a] text-center text-lg py-5">
        Each project is a unique piece of development
      </h1>

      {/* project card  */}

      <div className="mx-auto m-[50px] w-[90%]  p-3 ">
        {/* project 1 */}
        <div className="md:flex gap-5 justify-center items-center py-7 bg-black rounded-3xl px-7">
          {/* img  */}
          <div className="image-wrap">
            <Link to={"/"}>
              <img src={Techmart} alt="Techmart" className="rounded-2xl" />
            </Link>
          </div>
          {/* body  */}
          <div>
            <h1 className="text-2xl font-medium py-1">
              Techmart : Tech Sale Product Based MERN Project
            </h1>
            <h1 className="py-2">
              Client: HTML5, HTML, React.js, Git, JavaScript, Web Development,
              React.js, TailwindCSS
            </h1>
            <h1 className="py-2 mb-5">Server: MongoDB, Node, Express.js</h1>
            {/*Link icons  */}
            <div className="md:flex flex-row  gap-5 justify-center ">
              <Link
                target="_blank"
                to={"https://github.com/rezaulkarim7080/Techmart"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium">Code</h1>
                <FiGithub size={20} />
              </Link>
              <Link
                target="_blank"
                to={"https://techmart-delta.vercel.app"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium">Live </h1>
                <FaExternalLinkAlt size={20} />
              </Link>
              {/* video icon  */}
              <Link
                target="_blank"
                to={"https://www.youtube.com/watch?v=KD2S4UaRJQU"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium hover:text-red-500">
                  {" "}
                  Project Video{" "}
                </h1>
                <div className="bg-red-500 border-[1px] hover:bg-white border-red-500 p-1  rounded-full  ">
                  <MdOndemandVideo
                    size={20}
                    className="text-white  hover:text-red-500 "
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* project 2 */}

        <div className="md:flex gap-5 justify-center items-center py-7 bg-black  rounded-3xl px-7 my-10">
          {/* body  */}
          <div>
            <h1 className="text-2xl font-medium py-1">
              Oasis Dental :Service Review Based MERN Project
            </h1>
            <h1 className="py-2">
              Client: HTML5, HTML, React.js, Git, JavaScript, Web Development,
              React.js, TailwindCSS,firebase
            </h1>
            <h1 className="py-2  mb-5">Server: MongoDB, Node, Express.js</h1>
            {/*Link icons  */}
            <div className="md:flex flex-row gap-5 justify-center ">
              <Link
                target="_blank"
                to={"https://github.com/rezaulkarim7080/OasisDental"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium">Code</h1>
                <FiGithub size={20} />
              </Link>

              <Link
                target="_blank"
                to={"https://oasis-dental.vercel.app/"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium">Live </h1>
                <FaExternalLinkAlt size={20} />
              </Link>

              {/* video icon  */}

              <Link
                target="_blank"
                to={"https://www.youtube.com/watch?v=ltGjZiIPjDo&t=0s"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium hover:text-red-500">
                  {" "}
                  Project Video{" "}
                </h1>
                <div className="bg-red-500 border-[1px] hover:bg-white border-red-500 p-1  rounded-full  ">
                  <MdOndemandVideo
                    size={20}
                    className="text-white  hover:text-red-500 "
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* img  */}
          <div className="image-wrap">
            <Link to={"/"}>
              <img
                src={OasisDental}
                alt="OasisDental"
                className="rounded-2xl"
              />
            </Link>
          </div>
        </div>
        {/* ////// */}
        {/* project 3 */}
        <div className="md:flex gap-5 justify-center items-center py-7 bg-black  rounded-3xl px-7">
          {/* img  */}
          <div className="image-wrap">
            <Link to={"/"}>
              <img src={Learnify} alt="Learnify" className="rounded-2xl" />
            </Link>
          </div>
          {/* body  */}
          <div>
            <h1 className="text-2xl font-medium py-1">
              Learnify : Online Education Platform-based React Project
            </h1>
            <h1 className="py-2">
              Client: HTML5, HTML, React.js, Git, JavaScript, Web Development,
              React.js,firebase TailwindCSS, daisyui
            </h1>
            <h1 className="py-2 mb-5">Server: MongoDB, Node, Express.js</h1>
            {/*Link icons  */}
            <div className="md:flex flex-row gap-10 justify-center ">
              <Link
                target="_blank"
                to={"https://github.com/rezaulkarim7080/Learnify"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium">Code</h1>
                <FiGithub size={20} />
              </Link>

              <Link
                target="_blank"
                to={"https://learnify-flax.vercel.app/"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium">Live </h1>
                <FaExternalLinkAlt size={20} />
              </Link>
              {/* video icon  */}
              <Link
                target="_blank"
                to={"https://www.youtube.com/watch?v=ci28lX1eUag&t=2s"}
                className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
              >
                <h1 className="text-xl font-medium hover:text-red-500">
                  {" "}
                  Project Video{" "}
                </h1>
                <div className="bg-red-500 border-[1px] hover:bg-white border-red-500 p-1  rounded-full  ">
                  <MdOndemandVideo
                    size={20}
                    className="text-white  hover:text-red-500 "
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* ////// */}
        <Link
          target="_blank"
          to={"https://rezaul-projects.blogspot.com/"}
          className="flex justify-center mt-9"
        >
          <btn className="bg-[#00df9a] px-3 text-lg font-medium rounded hover:shadow-xl py-3 text-black hover:text-white">
            {" "}
            More Projects
          </btn>
        </Link>
      </div>
    </div>
  );
};

export default MyProjects;
