"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import data from "./menuData";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  //when scroll down
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`flex justify-between px-5 bg-primary text-white fixed w-full z-10 lg:px-40 duration-200 ${
        scrolled ? "py-3" : "py-3.5"
      }`}
    >
      <a href="/" className="logo text-2xl font-bold text-accent">
        CoderAmrin
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          {data.map((item) => (
            <li key={item.name}>
              <a
                className="px-2 py-5 text-sm hover:text-accent"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          {data.map((item) => (
            <li key={item.name}>
              <a
                className="px-2 py-5 text-sm hover:text-accent"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
