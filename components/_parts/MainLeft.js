import React, { useEffect } from "react";

import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import {
  my_email,
  my_github,
  my_instagram,
  my_linkedin,
  my_name,
  my_whatsapp,
} from "../texts";
import { css_upwardAnimation } from "../css";

export default function MainLeft({ divID, divClass }) {
  useEffect(() => {
    var forAnimation = document.querySelector("#main > #main-left");
    forAnimation.style["animation"] = css_upwardAnimation;
    forAnimation.style["animation-delay"] = `${
      parseInt(css_upwardAnimation.split(" ")[3].replace("s", "")) + 1.3
    }s`;
  }, []);
  return (
    <div id={divID} className={divClass}>
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
          href={`https://wa.me/${my_whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp | ${my_name}`}
        >
          <FaWhatsapp />
        </a>
      )}

      <>
        <div className="rule"></div>
      </>
    </div>
  );
}
