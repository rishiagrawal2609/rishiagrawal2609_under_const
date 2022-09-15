import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Home from "../components/pages/home";
import About from "../components/pages/about";
import Experience from "../components/pages/experience";
import Work from "../components/pages/work";
import Contact from "../components/pages/contact";

import Header from "../components/blocks/header";
import MainLeft from "../components/blocks/mainLeft";
import MainRight from "../components/blocks/mainRight";

import { FiX } from "react-icons/fi";

export default function Main() {
  const router = useRouter();
  const [popupVisible, setPopupViz] = useState(false);
  useEffect(() => {
    // window.scrollTo(0, 0);
    function mainFun() {
      if (window.innerWidth > 900) {
        var allSections = document.querySelectorAll("#main > section");

        allSections.forEach((section, index) => {
          section.style.top = `${window.innerHeight * index}px`;
          section.style["z-index"] = index + 1;
        });

        for (let i = 1; i <= allSections.length - 1; i++) {
          window.addEventListener("scroll", () => {
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
          // console.log(targetIndex);
          window.scrollTo({
            left: window.pageXOffset,
            top: window.innerHeight * targetIndex,
            behavior: "smooth",
          });
        }
      }
    }
  }, [router]);
  return (
    <div id="main">
      <Head>
        <title>Gobind Singh</title>
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
        <Contact />
      </>
      <>
        <MainLeft />
        <MainRight />
      </>
    </div>
  );
}
