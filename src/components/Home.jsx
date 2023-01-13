import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-0 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-8xl font-bold text-white">
            I'm a Full Stack Developer
          </h1>
          <p className="text-gray-500 text-2xl py-4 max-w-md mt-10">
          I’m an aspiring Full Stack Developer looking for a new role in an exciting company. I am a creative front-end developer based in India. I have hands-on experience in building projects using HTML, CSS, Javascript, and MERN stack. I speacialise in creating interactive experiences using React.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
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
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-32 bg-green-400 h-30 w-30
            flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
