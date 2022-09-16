import React, { useEffect } from "react";
import { css_upwardAnimation } from "../css";
import { my_email } from "../texts";

export default function MainRight() {
  useEffect(() => {
    var forAnimation = document.querySelector("#main > #main-right");
    forAnimation.style["animation"] = css_upwardAnimation;
    forAnimation.style["animation-delay"] = `${
      parseInt(css_upwardAnimation.split(" ")[3].replace("s", "")) + 1.3
    }s`;
  }, []);
  return (
    <div id="main-right" className="only-pc">
      {my_email != "" && my_email != null && (
        <>
          <a href={`mailto:${my_email}`}>android.gobind@gmail.com</a>
          <div className="rule"></div>
        </>
      )}
    </div>
  );
}
