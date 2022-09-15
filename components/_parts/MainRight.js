import React from "react";
import { my_email } from "../texts";

export default function MainRight() {
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
