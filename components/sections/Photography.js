import React, { useEffect, useRef, useState } from "react";
import Image from "next/future/image";
import useAddAni from "../hooks/useAddAni";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const [nextSlide, setNextSlide] = useState(-1);
  var refff = useRef();
  useEffect(() => {
    console.log(currentSlide, "current effext");
    console.log(nextSlide, "next effext");
    if (currentSlide != -1 && nextSlide != -1) {
      if (document.querySelector(".gallery-pre-style") != null) {
        document.querySelector(".gallery-pre-style").remove();
      }
      var currentPicHolder = document.querySelector(
        `.carousel-item-class:nth-child(${
          window.innerHeight < 900 ? currentSlide + 4 : currentSlide + 2
        })`
      );
      var NextPicHolder = document.querySelector(
        `.carousel-item-class:nth-child(${
          window.innerHeight < 900
            ? nextSlide > currentSlide
              ? currentSlide + 4 + 1
              : currentSlide - 4 + 1
            : nextSlide > currentSlide
            ? currentSlide + 2 - 1
            : currentSlide - 2 - 1
        })`
      );
      if (currentPicHolder.classList.contains("middle-pic")) {
        currentPicHolder.classList.remove("middle-pic");
      }
      NextPicHolder.classList.add("middle-pic");
    } else {
      try {
        var gallery = document.querySelector(".pictures");
        var preStyle = document.createElement("style");
        preStyle.classList.add("gallery-pre-style");
        preStyle.innerHTML = `
        .carousel-item-class:nth-child(${window.innerHeight < 900 ? 7 : 8}){
          height: 55vh !important;
        }
        `;
        gallery.appendChild(preStyle);
      } catch {}
    }
  }, [currentSlide, nextSlide, refff]);

  useAddAni("extra-curricular");
  console.log(images);

  return (
    <section id="extra-curricular">
      <div className="contentful-different">
        <h2>Extra-curricular</h2>
        <span>Photography</span>
        <div className="pictures">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2500}
            keyBoardControl={true}
            pauseOnHover={true}
            responsive={responsive}
            arrows={false}
            // customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-class"
            className="photo-carousel"
            ssr={true}
            ref={(el) => (refff = el)}
            beforeChange={(nextSlide, { currentSlide, onMove }) => {
              // doSpeicalThing();
              setCurrentSlide(currentSlide);
              setNextSlide(nextSlide);
            }}
            afterChange={(previousSlide, { currentSlide, onMove }) => {
              // doSpeicalThing();
            }}
          >
            {images.map((img, ind) => {
              return (
                <div className="gallery-img-container" key={ind}>
                  <Image
                    src={img.default.src}
                    alt=""
                    fill
                    className="gallery-img"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="btns">
          <button
            className="move left"
            onClick={() => {
              refff.previous();
            }}
          >
            {"<-"}
          </button>
          <button
            className="moveright"
            onClick={() => {
              refff.next();
            }}
          >
            {"->"}
          </button>
        </div>
      </div>
    </section>
  );
}
