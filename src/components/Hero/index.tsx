import React from "react";

import { AiFillGithub, AiFillLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32 lg:px-40 ">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-5xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">a</span>mrin <br />
            Frontend Developer
          </h1>

          <div className="flex py-5 items-center ">
            <a
              href="https://twitter.com/CoderAmrin"
              className="pr-4 inline-block text-accent hover:text-white duration-500"
            >
              {" "}
              <FaXTwitter size={30} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@coderamrin"
              className="pr-4 inline-block text-accent hover:text-white duration-500"
            >
              {" "}
              <AiOutlineYoutube size={38} />{" "}
            </a>
            <a
              href="https://github.com/CoderAmrin"
              className="pr-4 inline-block text-accent hover:text-white duration-500"
            >
              {" "}
              <AiFillGithub size={38} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/coderamrin/"
              className="inline-block text-accent hover:text-white duration-500"
            >
              {" "}
              <AiFillLinkedin size={38} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" mt-2 inline-block btn bg-accent border-2 border-accent text-white hover:text-accent px-4 py-2 
            lg:px-6 lg:py-3 hover:bg-transparent rounded-md duration-500"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={"/images/hero-img.png"}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
