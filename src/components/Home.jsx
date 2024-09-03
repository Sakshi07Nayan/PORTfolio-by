import React from "react";
import SelfImage from "../assets/self.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-lg">
As a creative front-end developer based in India, I specialize in crafting dynamic, interactive experiences using Angular and React. My expertise spans HTML, CSS, JavaScript, and both the MEAN and MERN stacks, enabling me to build robust and scalable applications. With 2 years of experience as a Full Stack Developer, I have honed a deep understanding of scalable architectures and excel in Agile environments. I am eager to contribute as a key member of a product-driven organization, delivering innovative solutions that meet complex business challenges head-on.          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white text-xl w-fit px-6 py-3 my-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mt-5"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={SelfImage}
            alt="my profile"
            className="w-95 h-95 shadow rounded-full max-w-sm h-auto align-middle border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
