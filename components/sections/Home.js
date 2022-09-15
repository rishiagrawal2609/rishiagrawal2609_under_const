import React, { useEffect } from "react";

import {
  home_desc,
  home_hello,
  home_sub_heading,
  my_name,
  home_links,
} from "../texts";

export default function Home() {
  useEffect(() => {
    if (document.querySelector("#home p") == undefined) {
      var homeDesc = home_desc;

      if (home_links.length != 0 && home_links != null && home_links != "") {
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
  }, []);
  return (
    <section id="home">
      <main>
        <h1>
          <span>{home_hello}</span>
          <span>{my_name + "."}</span>
          <span>{home_sub_heading}</span>
        </h1>
      </main>
    </section>
  );
}
