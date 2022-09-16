import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { experiences, experience_heading } from "../texts";
import { css_upwardAnimation } from "../css";

export default function Experience() {
  const [currentExp, setCurrentExp] = useState(0);
  const router = useRouter();
  useEffect(() => {
    var elem = document.querySelector("#experience .contentful");
    if (router.asPath == "/#experience") {
      elem.style.animation = css_upwardAnimation;
      elem.style["animation-delay"] = `1s`;
    } else {
      document.addEventListener("scroll", function tempScroll() {
        if (window.innerHeight - elem.getBoundingClientRect().top >= 200) {
          // elem.style["animation-play-state"] = "running";
          elem.style.animation = css_upwardAnimation;
          document.removeEventListener("scroll", tempScroll);
        }
      });
    }
  }, []);
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
                        setCurrentExp(currentIndex + 1);
                        if (++currentIndex == targetIndex) {
                          clearInterval(tempInterval);
                        }
                      }, 100);
                    }
                    if (currentIndex > targetIndex) {
                      var tempInterval = setInterval(() => {
                        btns[currentIndex].classList.remove("exp-btn-active");
                        btns[currentIndex - 1].classList.add("exp-btn-active");
                        setCurrentExp(currentIndex - 1);
                        if (--currentIndex == targetIndex) {
                          clearInterval(tempInterval);
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
