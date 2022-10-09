import React, { useEffect, useState } from "react";
import Link from "next/link";

import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import {
  my_email,
  my_github,
  my_instagram,
  my_linkedin,
  my_name,
  my_resume_file,
  my_whatsapp,
} from "../texts";
import MainLeft from "./MainLeft";

export default function Header() {
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
    if (window.innerWidth >= 900) {
      document
        .querySelectorAll(".main-header nav > a")
        .forEach((page, index, arr) => {
          page.style["animation-delay"] = `${index / arr.length + 0.3}s`;
        });
    } else {
      document
        .querySelectorAll(".main-header nav > *")
        .forEach((elem, index, arr) => {
          elem.style["animation-delay"] = `${index / arr.length + 0.3}s`;
          elem.addEventListener("click", () => {
            setNavActive(false);
          });
        });
    }
  }, []);
  return (
    <header
      className={
        "main-header" +
        (onPC ? " pc-view" : " mobile-view") +
        (navActive ? " nav-active" : "")
      }
    >
      <Link href={"/"}>
        <a
          aria-label="Home"
          onClick={() => {
            scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          {my_name}
        </a>
      </Link>
      <div
        className="no-pc for-blur"
        onClick={() => {
          setNavActive(false);
          // console.log("jjj");
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
          <a aria-label={"About " + my_name}>About</a>
        </Link>
        <Link href="/#experience">
          <a aria-label={"Experiences of " + my_name}>Experience</a>
        </Link>
        <Link href="/#work">
          <a aria-label={"Work by " + my_name}>Work</a>
        </Link>
        <Link href="/#extra-curricular">
          <a aria-label={"extra-curricular " + my_name}>Extra-curricular</a>
        </Link>
        <Link href="/#contact">
          <a aria-label={"Contact " + my_name}>Contact</a>
        </Link>
        {my_resume_file != null && (
          <Link href={`/${my_resume_file}`}>
            <a
              aria-label={"Resume of " + my_name}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Link>
        )}
        <MainLeft divID={"header-icons"} divClass={"icons no-pc"} />
      </nav>
    </header>
  );
}
