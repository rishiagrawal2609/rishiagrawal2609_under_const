import React, { useEffect } from "react";
import { css_upwardAnimation } from "../css";

import {
  home_desc,
  home_hello,
  home_sub_heading,
  my_name,
  home_links,
} from "../texts";

export default function Home() {
  useEffect(() => {
    if (
      document.querySelector("#home main p") == undefined &&
      home_desc != null
    ) {
      var homeDesc = home_desc;

      if (home_links != null) {
        home_links.forEach((link) => {
          homeDesc = homeDesc.replace(
            link.text,
            `<a href="${link.link}" target="_blank" rel="noopener noreferrer">
          ${link.text}
        </a>`
          );
        });
      }

      var elem = document.createElement("p");
      elem.innerHTML = homeDesc;
      document.querySelector("#home main").appendChild(elem);
    }
    var forAnimation = document.querySelector("#home main");
    forAnimation.style["animation"] = css_upwardAnimation;
    forAnimation.style["animation-delay"] = `${
      parseInt(css_upwardAnimation.split(" ")[3].replace("s", "")) + 0.8
    }s`;
  }, []);
  return (
    <section id="home" aria-label="Home">
      <main>
        <h1>
          <span>{home_hello || "Hi, my name is"}</span>
          <span>{my_name + "."}</span>
          {home_sub_heading != null && <span>{home_sub_heading}</span>}
        </h1>
      </main>
    </section>
  );
}
