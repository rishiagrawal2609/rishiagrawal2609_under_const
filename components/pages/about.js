import React, { useEffect } from "react";
import Image from "next/future/image";

import {
  about_me,
  about_me_exp,
  about_photo_name,
  about_me_links,
} from "../texts";

export default function about() {
  useEffect(() => {
    var newAbout = "";
    about_me.split("\n").forEach((para) => {
      var temp = para;
      if (
        about_me_links.length != 0 &&
        about_me_links != null &&
        about_me_links != ""
      ) {
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
  return (
    <section id="about">
      <div className="about-me">
        <article aria-label="About me">
          <h2>About me</h2>
          <span></span>
        </article>
        {about_me_exp != "" &&
          about_me_exp.length != 0 &&
          about_me_exp != null && (
            <>
              <span>
                Here are a few technologies I've been working with recently:
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
        <div className="imgContainer">
          <Image src={`/${about_photo_name}`} fill className="nextImg" />
        </div>
      </div>
    </section>
  );
}
