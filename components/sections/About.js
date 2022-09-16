import React, { useEffect } from "react";
import Image from "next/future/image";
import { useRouter } from "next/router";

import {
  about_me,
  about_me_exp,
  about_photo_name,
  about_me_links,
  my_name,
} from "../texts";
import { css_upwardAnimation } from "../css";

export default function About() {
  const router = useRouter();
  useEffect(() => {
    var newAbout = "";
    about_me.split("\n").forEach((para) => {
      var temp = para;
      if (about_me_links != null) {
        about_me_links.forEach((change) => {
          temp = temp.replace(
            change.text,
            `<a href="${change.link}" target="_blank" rel="noopener noreferrer">${change.text}</a>`
          );
        });
      }
      newAbout += temp;
      newAbout += "<br>";
    });

    document.querySelector("#about article span").innerHTML = newAbout;
  }, []);
  useEffect(() => {
    var elem = document.querySelector("#about .contentful");
    if (router.asPath == "/#about") {
      elem.style.animation = css_upwardAnimation;
      elem.style["animation-delay"] = `1s`;
    } else {
      document.addEventListener("scroll", function tempScroll() {
        if (window.innerHeight - elem.getBoundingClientRect().top >= 200) {
          // elem.style["animation-play-state"] = "running";
          elem.style.animation = css_upwardAnimation;
          document.removeEventListener("scroll", tempScroll);
        }
      });
    }
  }, []);
  return (
    <section id="about" aria-label="About">
      <div className="contentful">
        <div className="about-me">
          <article aria-label="About me">
            <h2>About me</h2>
            <span></span>
          </article>
          {about_me_exp != null && (
            <>
              <span>
                Here are a few technologies I{"'"}ve been working with recently:
              </span>
              <ul>
                {about_me_exp.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </>
          )}
        </div>
        <div className="about-photo">
          <div className="imgContainer" tabIndex={0}>
            <Image
              src={`/${about_photo_name}`}
              fill
              className="nextImg"
              alt={my_name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
