import React from "react";
import Image from "next/image";
import { fetchData } from "@/data/sanityData";

export default async function TextSlider() {
  const textSlides = await fetchData("textSlider");
  const customClass = (i) => (i % 2 === 0 ? "text-custom-storke" : "");
  return (
    <div className="textslider-area space">
      <div className="mycustom-marque">
        <div className="scrolling-wrap">
          <div className="textWrapper">
            {textSlides.map((slide, index) => (
              <div
                className={`textWrapper-textslide ${customClass(index)}`}
                key={index}
              >
                <Image
                  src="/assets/img/icon/starIcon3.png"
                  width={50}
                  height={54}
                  alt="img"
                />
                {slide.text}
              </div>
            ))}
          </div>
          <div className="textWrapper">
            {textSlides.map((slide, index) => (
              <div
                className={`textWrapper-textslide ${slide.customClass}`}
                key={index}
              >
                <Image
                  src={"/assets/img/icon/starIcon3.png"}
                  width={50}
                  height={54}
                  alt="img"
                />
                {slide.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
