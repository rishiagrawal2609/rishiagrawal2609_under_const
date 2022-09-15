import React, { useEffect, useState } from "react";
import Link from "next/link";

import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { my_name } from "../texts";

export default function header() {
  const [navActive, setNavActive] = useState(false);
  const [onPC, setOnPC] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setOnPC(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        setOnPC(false);
      } else {
        setOnPC(true);
      }
    });
    document
      .querySelectorAll(".main-header nav > *")
      .forEach((elem, index, arr) => {
        elem.style["animation-delay"] = `${index / arr.length + 0.3}s`;
        elem.addEventListener("click", () => {
          setNavActive(false);
        });
      });
  }, []);
  return (
    <header
      className={
        "main-header" +
        (onPC ? " pc-view" : " mobile-view") +
        (navActive ? " nav-active" : "")
      }
    >
      <span>{my_name}</span>
      <div
        className="no-pc for-blur"
        onClick={() => {
          setNavActive(false);
          console.log("jjj");
        }}
      ></div>
      <div
        className={"no-pc burger" + (navActive ? " active" : "")}
        onClick={() => {
          setNavActive(!navActive);
        }}
      >
        <div className="line _1"></div>
        <div className="line _2"></div>
        <div className="line _3"></div>
      </div>

      <nav
        className={
          "main-nav" +
          (onPC ? " pc-view" : " mobile-view") +
          (navActive ? " active" : "")
        }
      >
        <Link href="/#about">
          <a>About</a>
        </Link>
        <Link href="/#experience">
          <a>Experience</a>
        </Link>
        <Link href="/#work">
          <a>Work</a>
        </Link>
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
        <Link href="/resume.jpg">
          <a>Resume</a>
        </Link>
        <div className="icons no-pc">
          <a
            href="http://www.github.com/theGobindSingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github | Gobind Singh"
          >
            <FiGithub />
          </a>
          <a
            href="http://www.instagram.com/theGobindSingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram | Gobind Singh"
          >
            <FiInstagram />
          </a>
          <a
            href="http://www.linkedin.com/in/theGobindSingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn | Gobind Singh"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:android.gobind@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email | Gobind Singh"
          >
            <FiMail />
          </a>
          <a
            href="https://wa.me/+919415507316"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp | Gobind Singh"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>
    </header>
  );
}
