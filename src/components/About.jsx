import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 pb-10 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        A creative and dedicated aspiring Full Stack Developer with a strong specialization in Full stack development. Driven by self-belief and enthusiasm, I am passionate about designing and building both front-end and back-end solutions. I am eager to further sharpen my skills in a challenging environment and bring boundless energy to my work, ensuring that every project is completed with the utmost dedication.        </p>

        <br />

        <p className="text-xl mt-10 mb-10">
        The web may sometimes seem like magic, but I possess the knowledge and patience to bring any concept to life.        </p>
      </div>
    </div>
  );
};

export default About;
