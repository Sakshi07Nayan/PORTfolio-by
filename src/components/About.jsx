import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-2xl mt-20">
        A creative and diligent aspiring full-stack developer with a specialization in Mern Stack development. Self-believing and enthusiastic, with a keen interest in building and designing Backend and Frontend. Looking forward to sharpening my skills in a challenging environment. I guarantee enthusiasm in work and fulfilling my projects with inexpressible efforts.
        </p>

        <br />

        <p className="text-2xl mt-10">
        The web can sometimes be indistinguishable from magic, but I have the knowledge and patience required to make just about anything.
        </p>
      </div>
    </div>
  );
};

export default About;
