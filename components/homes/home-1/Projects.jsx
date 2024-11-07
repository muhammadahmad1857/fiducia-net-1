"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { fetchData } from "@/data/sanityData";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const swiperOptions = {
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1, centeredSlides: true },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
    modules: [Navigation],
    navigation: {
      prevEl: ".snbp1",
      nextEl: ".snbn1",
    },
  };

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        console.log("Fetching projects data...");
        const data = await fetchData("projects");
        console.log("Fetched projects data:", data);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchProjectsData();
  }, []);

  return (
    <section className="project-area">
      <div
        className="project-wrap style1 space fix"
        style={{ backgroundImage: "url(/assets/img/bg/portfolioBg1_1.png)" }}
      >
        <div className="container">
          <div className="title-wrap mb-50">
            <div className="title-area">
              <h6
                className="text-start text-white wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="me-1">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIconWhite.png"
                    width="28"
                    height="12"
                  />
                </span>
                Recently Work
                <span className="ms-1">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIconWhite.png"
                    width="28"
                    height="12"
                  />
                </span>
              </h6>
              <h2
                className="title text-start text-white wow fadeInUp"
                data-wow-delay=".6s"
                style={{ textWrap: "nowrap" }}
              >
                Latest projects from our Fiducia net
              </h2>
            </div>
            <div
              className="arrow-btn text-end wow fadeInUp"
              data-wow-delay=".9s"
            >
              <button className="slider-arrow style2 snbp1">
                <Image
                  alt="img"
                  src="/assets/img/icon/arrowLeft.png"
                  width="20"
                  height="20"
                />
              </button>
              <button className="slider-arrow style2 slider-next snbn1">
                <Image
                  alt="img"
                  src="/assets/img/icon/arrowRight.png"
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="slider-area project-slider1 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Swiper
              // spaceBetween={30}
              className="swiper gt-slider"
              // style={{ overflow: "clip" }}
              id="projectSlider1"
              {...swiperOptions}
            >
              {projects?.map((slide) => (
                <SwiperSlide className="swiper-slide" key={slide.slug.current}>
                  <div className="project-card style1 img-shine">
                    <div className="project-img">
                      <Image
                        src={urlFor(slide.image.asset._ref).url()}
                        width={465}
                        height={450}
                        alt={slide.projectName}
                      />
                    </div>
                    <div className="fancy-box style2">
                      <p>{slide.category}</p>
                      <h4>
                        <Link
                          scroll={false}
                          href={`/projects/project-details/${slide.slug.current}`}
                        >
                          {slide.projectName}
                        </Link>
                      </h4>
                      <Link
                        scroll={false}
                        href={`/projects/project-details/${slide.slug.current}`}
                        className="arrow-icon"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
