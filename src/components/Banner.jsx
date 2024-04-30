"use client";
import React from "react";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
const images = [
  { url: "https://links.papareact.com/gi1" },
  { url: "https://links.papareact.com/6ff" },
  { url: "https://links.papareact.com/7ma" },
];

const Banner = () => {

  return (
    <div className="relative flex items-center justify-center">
      <div className=" absolute  h-32 w-full  bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
      <div className="md:px-2 w-[100vw] md:w-[90vw] flex items-center justify-center">
        <Slider
          imageList={images}
          fill
          className="object-contain"
          autoPlayInterval={5000}
          showDotControls={false}
          showArrowControls={false}
        />
      </div>
    </div>
  );
};

export default Banner;
