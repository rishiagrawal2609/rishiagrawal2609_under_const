import React, { useRef, useState } from "react";
import Image from "next/future/image";
import useAddAni from "../hooks/useAddAni";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FiChevronLeft,
  FiChevronRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

import { my_name, work_heading, work_projects } from "../texts";

export default function Work() {
  var refState = useRef();
  const [currentWorkSlide, setWorkCurrentSlide] = useState(-1);
  useAddAni("work");
  const responsive = {
    all: {
      breakpoint: { max: 99999, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="work">
      <div className="contentful">
        <h2>{work_heading}</h2>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={false}
          autoPlay={false}
          rewind={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          pauseOnHover={true}
          responsive={responsive}
          arrows={false}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="work-carousel-container"
          dotListClass="work-custom-dot-list-style"
          itemClass="work-carousel-item"
          className="work-carousel"
          sliderClass="work-slider"
          ssr={true}
          ref={(el) => {
            refState = el;
            setWorkCurrentSlide(el?.state?.currentSlide || 0);
          }}
          beforeChange={(nextSlide) => {
            setWorkCurrentSlide(nextSlide);
          }}
        >
          {work_projects.map((work, index) => {
            return (
              <div key={index} className="work-all">
                <div className="picture_container">
                  <Image
                    src={`/images/work/${work.picture}`}
                    alt={`${my_name} | Work | Projects | ${work.title}`}
                    sizes="100%"
                    fill
                    quality={75}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="stuff_container">
                  <h3>{work.title}</h3>
                  <p>{work.desc}</p>
                  <ul>
                    {work.tech_stack.map((li, ind) => {
                      return <li key={ind}>{li}</li>;
                    })}
                  </ul>
                  <div>
                    {work.links.github != null && (
                      <a
                        href={work.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${my_name} | ${work.title} | GitHub`}
                      >
                        <FiGithub />
                      </a>
                    )}
                    {work.links.website != null && (
                      <a
                        href={work.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${my_name} | ${work.title} | Link`}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="work-btns">
          <button
            className="work-move left"
            onClick={(e) => {
              e.preventDefault();
              refState.previous();
            }}
            type="button"
            disabled={currentWorkSlide == -1 || currentWorkSlide == 0}
          >
            <FiChevronLeft
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </button>
          <button
            className="work-move right"
            onClick={(e) => {
              e.preventDefault();
              refState.next();
            }}
            type="button"
            disabled={
              currentWorkSlide == -1 ||
              currentWorkSlide == work_projects.length - 1
            }
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
