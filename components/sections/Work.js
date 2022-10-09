import React from "react";
import useAddAni from "../hooks/useAddAni";

export default function Work() {
  useAddAni("work");
  return (
    <section id="work">
      <div className="contentful">
        <h2>work</h2>
      </div>
    </section>
  );
}
