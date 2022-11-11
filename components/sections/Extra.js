import React, { useEffect, useRef, useState } from "react";
import Image from "next/future/image";
import useAddAni from "../hooks/useAddAni";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from "react-icons/fi";

import { extra_heading, my_name } from "../texts";

var images = [];
function importAll(r) {
  return r.keys().map(r);
}
images = importAll(
  require.context(
    "../../public/images/photography",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

// import xf from "../../public/images/photography"

export default function Photography() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 900) {
      var workTarget = document.querySelector("#extra-curricular");
      document.addEventListener("scroll", function tempVarExtra(e) {
        // console.log(workTarget.style.top);
        if (parseInt(workTarget.style.top.replace("px", "")) < 800) {
          document.removeEventListener("scroll", tempVarExtra);
          // e.target.removeEventListener();
        }
      });
    }
  }, []);
  var refff = useRef();
  useEffect(() => {
    var activeElems = document.querySelectorAll(
      '#extra-curricular li[aria-hidden*="false"]'
    );
    if (activeElems.length != 0) {
      activeElems.forEach((elem) => {
        if (elem.classList.contains("middle-pic")) {
          elem.classList.remove("middle-pic");
        }
      });
      if (activeElems.length == 3) {
        // for PC
        activeElems[1].classList.add("middle-pic");
      }
      if (activeElems.length == 1) {
        //for mobile
        activeElems[0].classList.add("middle-pic");
      }
    }
  }, [currentSlide]);
  useAddAni("extra-curricular");
  // console.log(images);
  useEffect(() => {
    var extraSectionElem = document.querySelector("#extra-curricular");
    const extraSectionObserver = new MutationObserver(() => {
      // console.log("...");
      var activeElems = document.querySelectorAll(
        '#extra-curricular li[aria-hidden*="false"]'
      );
      if (activeElems != undefined)
        if (activeElems.length != 0) {
          activeElems.forEach((elem) => {
            if (elem.classList.contains("middle-pic")) {
              elem.classList.remove("middle-pic");
            }
          });
          if (activeElems.length == 3) {
            // for PC
            activeElems[1].classList.add("middle-pic");
          }
          if (activeElems.length == 1) {
            //for mobile
            activeElems[0].classList.add("middle-pic");
          }
          extraSectionObserver.disconnect();
        }
    });
    extraSectionObserver.observe(extraSectionElem, {
      childList: true,
      subtree: true,
    });
  }, []);
  return (
    <section id="extra-curricular">
      <div className="contentful-different">
        <h2>Extra-curricular</h2>
        <span>{extra_heading}</span>
        <div className="pictures">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={playing}
            autoPlaySpeed={800}
            keyBoardControl={true}
            pauseOnHover={true}
            responsive={responsive}
            arrows={false}
            // customTransition="all .5"
            transitionDuration={10}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-class"
            className="photo-carousel"
            ssr={true}
            ref={(el) => {
              var activeElems = document.querySelectorAll(
                '#extra-curricular li[aria-hidden*="false"]'
              );
              if (activeElems.length != 0) {
                activeElems.forEach((elem) => {
                  if (elem.classList.contains("middle-pic")) {
                    elem.classList.remove("middle-pic");
                  }
                });
                if (activeElems.length == 3) {
                  // for PC
                  activeElems[1].classList.add("middle-pic");
                }
                if (activeElems.length == 1) {
                  //for mobile
                  activeElems[0].classList.add("middle-pic");
                }
              }
              refff = el;
            }}
            beforeChange={(nextSlide) => {
              setCurrentSlide(nextSlide);
            }}
          >
            {images.map((img, ind) => {
              return (
                <a
                  className="gallery-img-container"
                  key={ind}
                  href="https://photos.app.goo.gl/U8yYDxEZQ5dEuqF19"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="image"
                  aria-label={`${my_name} | ${extra_heading} | Extracurricular | Extra-curricular`}
                >
                  <Image
                    src={img.default.src}
                    alt={`${my_name} | ${extra_heading} | Extracurricular | Extra-curricular`}
                    fill
                    className="gallery-img"
                    quality={50}
                    onLoad={({ target }) => {
                      const { naturalWidth, naturalHeight } = target;
                      // console.log(naturalHeight, naturalWidth);
                      target.classList.add(
                        `HxW=${naturalHeight}x${naturalWidth}`
                      );
                    }}
                    sizes={"100%"}
                    priority={ind == 0 || ind == 1 || ind == 2}
                  />
                </a>
              );
            })}
          </Carousel>
        </div>
        <div className="btns">
          <button
            className="move left"
            onClick={(e) => {
              e.preventDefault();
              refff.previous();
            }}
            type="button"
          >
            <FiChevronLeft
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </button>
          <button
            className="move play"
            onClick={(e) => {
              e.preventDefault();
              setPlaying(!playing);
            }}
            type="button"
          >
            {playing ? (
              <FiPause
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            ) : (
              <FiPlay
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            )}
          </button>
          <button
            className="moveright"
            onClick={(e) => {
              e.preventDefault();
              refff.next();
            }}
            type="button"
          >
            <FiChevronRight
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
