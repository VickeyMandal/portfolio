import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col p-2 bg-heroArrow justify-center items-center opacity-70 fixed
             inset-x-0
             bottom-0"
      >
        <div className="flex space-x-4 mb-2">
          <a href="https://twitter.com/heyitsvickey">
            <FaTwitter color="#00acee" />
          </a>
          <a href="https://www.instagram.com/vickeymandal/">
            <FaInstagram color="#E1306C" />
          </a>
          <a href="https://www.linkedin.com/in/bappaditya-mandal/">
            <FaLinkedin color="#0077b5" />
          </a>
          <a href="https://github.com/VickeyMandal">
            <ImGithub color="#fff" />
          </a>
        </div>
        <div className="text-paleWhite text-xs ">
          Made with 💜 by Bappaditya Mandal.
        </div>
      </div>
    </>
  );
};

export default Footer;
