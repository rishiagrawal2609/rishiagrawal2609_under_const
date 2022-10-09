import React from "react";
import useAddAni from "../hooks/useAddAni";

import {
  cont_desc,
  cont_heading_one,
  cont_heading_two,
  cont_email_btn,
  my_email,
} from "../texts";
import MainLeft from "../_parts/MainLeft";

export default function Contact() {
  useAddAni("contact");
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
      </footer>
    </section>
  );
}
