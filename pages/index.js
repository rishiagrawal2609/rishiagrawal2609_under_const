import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Home from "../components/sections/Home.js";
import About from "../components/sections/About.js";
import Experience from "../components/sections/Experience.js";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact.js";
import Photography from "../components/sections/Photography.js";

import Header from "../components/_parts/Header.js";
import MainLeft from "../components/_parts/MainLeft.js";
import MainRight from "../components/_parts/MainRight.js";

import { FiX } from "react-icons/fi";
import { home_desc } from "../components/texts.js";

export default function Main() {
  const router = useRouter();
  const [popupVisible, setPopupViz] = useState(false);
  useEffect(() => {
    // window.scrollTo(0, 0);
    function mainFun() {
      var allSections = document.querySelectorAll("#main > section");
      var styleForHeight = document.createElement("style");
      styleForHeight.classList.add("page-height-style");
      styleForHeight.innerHTML = `
        @media screen and (min-width: 900px) {
          #main {
            height: ${allSections.length * 100}vh;
          }
        }
        `;
      document.body.appendChild(styleForHeight);
      if (window.innerWidth > 900) {
        allSections.forEach((section, index) => {
          section.style.top = `${window.innerHeight * index}px`;
          section.style["z-index"] = index + 1;
        });

        for (let i = 1; i <= allSections.length - 1; i++) {
          window.addEventListener("scroll", (e) => {
            if (window.innerHeight * i - window.pageYOffset >= 0) {
              allSections[i].style.top =
                window.innerHeight * i - window.pageYOffset + "px";
            }
            if (
              window.innerHeight * i - window.pageYOffset <= 100 &&
              parseInt(allSections[i].style.top.replace("px", "")) > 0
            ) {
              var temp = setInterval(() => {
                if (
                  parseInt(allSections[i].style.top.replace("px", "")) <= 100 &&
                  parseInt(allSections[i].style.top.replace("px", "")) > 0
                ) {
                  allSections[i].style.top =
                    parseInt(allSections[i].style.top.replace("px", "")) -
                    1 +
                    "px";
                  window.scrollTo(window.scrollX, window.scrollY + 1);
                } else {
                  clearInterval(temp);
                }
              }, 100);
            }
            if (
              parseInt(allSections[i].style.top.replace("px", "")) <
                window.innerHeight &&
              parseInt(allSections[i].style.top.replace("px", "")) >
                window.innerHeight - 50
            ) {
              var temp = setInterval(() => {
                if (
                  parseInt(allSections[i].style.top.replace("px", "")) <
                    window.innerHeight &&
                  parseInt(allSections[i].style.top.replace("px", "")) >
                    window.innerHeight - 50
                ) {
                  allSections[i].style.top =
                    parseInt(allSections[i].style.top.replace("px", "")) +
                    1 +
                    "px";
                  window.scrollTo(window.scrollX, window.scrollY - 1);
                } else {
                  clearInterval(temp);
                }
              }, 100);
            }
          });
        }
      }
    }
    mainFun();
    if (window.innerWidth < 900) {
      setPopupViz(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        // scrollTo(0, 0);
      }
      // mainFun();
    });
  }, []);
  useEffect(() => {
    if (router.asPath.length > 1 && window.innerWidth > 900) {
      if (router.asPath[1] == "#") {
        var allSections = document.querySelectorAll("#main > section");
        var targetIndex = 0;
        var target = document.querySelector(router.asPath.replace("/", ""));
        if (target != undefined) {
          allSections.forEach((section, index) => {
            if (section.getAttribute("id") == target.getAttribute("id")) {
              targetIndex = index;
            }
          });
          for (let i = 0; i < targetIndex; i++) {
            allSections[i].style.top = 0;
          }
          // console.log(targetIndex);
          window.scrollTo({
            left: window.pageXOffset,
            top: window.innerHeight * targetIndex,
            // behavior: "smooth",
          });
          // window.scrollTo({
          //   left: window.pageXOffset,
          //   top: window.pageYOffset + 1,
          //   behavior: "smooth",
          // });
        }
      }
    }
  }, [router]);
  return (
    <div id="main">
      <Head>
        <title>Gobind Singh</title>
        <meta name="description" content={home_desc} />
      </Head>
      {popupVisible && (
        <>
          <div id="popup">
            <div>
              <FiX
                onClick={() => {
                  setPopupViz(false);
                }}
                className="popup-cross-icon"
              />
              <span>
                View this website on a Deskop or a Laptop for a better viewing
                experience.
              </span>
            </div>
          </div>
        </>
      )}
      <>
        <Header />
      </>
      <>
        <Home />
        <About />
        <Experience />
        <Work />
        <Photography />
        <Contact />
      </>
      <>
        <MainLeft divID={"main-left"} divClass={"only-pc"} />
        <MainRight />
      </>
    </div>
  );
}
