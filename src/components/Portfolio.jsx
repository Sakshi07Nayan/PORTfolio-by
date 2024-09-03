import React from "react";
import laundry from "../assets/portfolio/laundryApp.png";
import instaPhoto from "../assets/portfolio/inst2.png";
import reactMovie from "../assets/portfolio/reactMovi.png";
import loginAuth from "../assets/portfolio/loginAuth.png";
import Tictac from "../assets/portfolio/tictac.png";
import taskmnager from "../assets/portfolio/task.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: laundry,
      demo: "https://www.linkedin.com/posts/sakshi-nayan-feb2000_hello-i-am-sakshi-i-developed-a-laundry-activity-7019186003068293120-Syrm?utm_source=share&utm_medium=member_desktop",
      name: "Laundry Service",
    },
    {
      id: 2,
      src: instaPhoto,
      demo: "https://sharing-photo-app.netlify.app/",
      name: "Insta Sharing",
    },
    {
      id: 3,
      src: taskmnager,
      demo: "https://imaginative-narwhal-040afd.netlify.app/",
      name: "Task Manager",
    },
    {
      id: 4,  
      src: Tictac,
      demo: "https://tic-tacgame-7eadc3.netlify.app/",
      name: "Tic Tac",
    },
    {
      id: 5, 
      src: loginAuth,
      demo: "hjkj",
      name: "Login Authenticate",
    },
    {
      id: 6, 
      src: reactMovie,
      demo: "jhk",
      name: "React Movie",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 pt-7 pb-40 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={name} // Adding an alt text based on the name
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <div className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                  {name}
                </div>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Preview
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
