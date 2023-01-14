import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/sakshi-nayan-feb2000/",
      style: "rounded-tr-md text-xl ",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={35} />
        </>
      ),
      href: "https://github.com/SakshiNayan",
      style: "text-xl",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={35} />
        </>
      ),
      href: "mailto:sakshi12princi@gmail.com",
      style: "text-xl",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={35} />
        </>
      ),
      href: "/Sakshi Nayan-V3.pdf",
      style: "rounded-br-md text-xl",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-44 h-20 px-5 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
