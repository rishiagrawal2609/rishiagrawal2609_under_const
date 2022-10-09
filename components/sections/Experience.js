import React, { useState } from "react";
import { experiences, experience_heading } from "../texts";
import useAddAni from "../hooks/useAddAni";

export default function Experience() {
  const [currentExp, setCurrentExp] = useState(0);
  useAddAni("experience");
  return (
    <section id="experience" aria-label="Experience">
      <div className="contentful">
        <h2>{experience_heading}</h2>
        <div className="inside-exp">
          <div className="left-panel">
            {experiences.map((exp, index) => {
              return (
                <button
                  className={index == 0 ? "exp-btn exp-btn-active" : "exp-btn"}
                  key={index}
                  onClick={(e) => {
                    var btns = document.querySelectorAll(".exp-btn");
                    var currentIndex = -1;
                    var targetIndex = -1;
                    btns.forEach((btn, index) => {
                      if (btn.classList.contains("exp-btn-active")) {
                        currentIndex = index;
                      }
                      if (btn == e.target) {
                        targetIndex = index;
                      }
                    });
                    if (currentIndex < targetIndex) {
                      var tempInterval = setInterval(() => {
                        btns[currentIndex].classList.remove("exp-btn-active");
                        btns[currentIndex + 1].classList.add("exp-btn-active");

                        if (++currentIndex == targetIndex) {
                          clearInterval(tempInterval);
                          setCurrentExp(targetIndex);
                        }
                      }, 100);
                    }
                    if (currentIndex > targetIndex) {
                      var tempInterval = setInterval(() => {
                        btns[currentIndex].classList.remove("exp-btn-active");
                        btns[currentIndex - 1].classList.add("exp-btn-active");

                        if (--currentIndex == targetIndex) {
                          clearInterval(tempInterval);
                          setCurrentExp(targetIndex);
                        }
                      }, 100);
                    }
                  }}
                  type="button"
                >
                  {exp.company}
                </button>
              );
            })}
          </div>
          <div className="right-panel">
            <h3>
              {experiences[currentExp].role + " "}
              {experiences[currentExp].website != null ? (
                <a
                  href={experiences[currentExp].website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`@ ${experiences[currentExp].company}`}
                </a>
              ) : (
                <span>{`@ ${experiences[currentExp].company}`}</span>
              )}
            </h3>

            <span>{experiences[currentExp].duration}</span>
            <ul>
              {experiences[currentExp].list.map((exp, ind) => {
                return <li key={ind}>{exp}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
