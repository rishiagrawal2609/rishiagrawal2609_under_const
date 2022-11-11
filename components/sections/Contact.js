import React, { useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { VscRepoForked } from "react-icons/vsc";
import useAddAni from "../hooks/useAddAni";

import {
  cont_desc,
  cont_heading_one,
  cont_heading_two,
  cont_email_btn,
  my_email,
} from "../texts";
import MainLeft from "../_parts/MainLeft";

export default function Contact({ footerData }) {
  useAddAni("contact");
  const css_upwardAnimation_footer = `upwardAnimation 0.8s ease 0.3s 1 normal forwards`;
  useEffect(() => {
    var elem = document.querySelector(`#contact .contentful`);
    if (elem) {
      var footer = document.querySelector(`#contact footer`);
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.style["animation-play-state"] = "running";
            footer.style.animation = css_upwardAnimation_footer;
            footer.style["animation-delay"] = `1s`;
            observer.unobserve(elem);
          }
        });
      }, {});
      observer.observe(elem);
    }
  }, []);

  return (
    <section id="contact" aria-label="Contact">
      <div className="contentful">
        <h2>{cont_heading_one}</h2>
        <span>{cont_heading_two}</span>
        <p>{cont_desc}</p>
        <a
          href={"mailto:" + my_email}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>{cont_email_btn}</button>
        </a>
      </div>
      <footer>
        <MainLeft divID={"footer-icons"} divClass={"icons no-pc"} />
        <span>
          Design inspired by{" "}
          <a
            href="https://github.com/bchiang7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brittany Chiang
          </a>{" "}
          <br />
          and Built by{" "}
          <a
            href="https://github.com/theGobindSingh/theGobindSingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gobind Singh
          </a>
        </span>
        <a
          className="github_stats"
          href="https://github.com/theGobindSingh/theGobindSingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="stars">
            <FiStar />
            <span>{footerData?.stargazers_count}</span>
          </div>
          <div className="forks">
            <VscRepoForked />
            <span>{footerData?.forks_count}</span>
          </div>
        </a>
      </footer>
    </section>
  );
}
