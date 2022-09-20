import React from "react";

import {
  cont_desc,
  cont_heading_one,
  cont_heading_two,
  cont_email_btn,
  my_email,
} from "../texts";

export default function Contact() {
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
        <span>
          Design inspired from{" "}
          <a
            href="https://github.com/bchiang7/v4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brittany Chiang
          </a>{" "}
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
