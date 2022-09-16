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
          <a aria-label={"About " + my_name}>About</a>
        </Link>
        <Link href="/#experience">
          <a aria-label={"Experiences of " + my_name}>Experience</a>
        </Link>
        <Link href="/#work">
          <a aria-label={"Work by " + my_name}>Work</a>
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
        <div className="icons no-pc">
          {my_github != null && (
            <a
              href={`https://www.github.com/${my_github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Github | ${my_name}`}
            >
              <FiGithub />
            </a>
          )}
          {my_instagram != null && (
            <a
              href={`https://www.instagram.com/${my_instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram | ${my_name}`}
            >
              <FiInstagram />
            </a>
          )}
          {my_linkedin != null && (
            <a
              href={`https://www.linkedin.com/in/${my_linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn | ${my_name}`}
            >
              <FiLinkedin />
            </a>
          )}
          {my_email != null && (
            <a
              href={`mailto:${my_email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Email | ${my_name}`}
            >
              <FiMail />
            </a>
          )}
          {my_whatsapp != null && (
            <a
              href={`httpss://wa.me/${my_whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp | ${my_name}`}
            >
              <FaWhatsapp />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
