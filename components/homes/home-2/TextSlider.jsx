"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

export default function TextSlider() {
  const [textSlides, setTextSlides] = useState([]);
  const customClass = (i) => (i % 2 === 0 ? "text-custom-storke" : "");

  useEffect(() => {
    const fetchTextSliderData = async () => {
      const data = await client.fetch(`*[_type=='textSlider']`);
      setTextSlides(data);
    };
    fetchTextSliderData();
  }, []);

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
