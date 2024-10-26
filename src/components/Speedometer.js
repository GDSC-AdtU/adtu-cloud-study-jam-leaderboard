import React, { useEffect, useState } from "react";

function Speedometer({ completion }) {
  const [animationValue, setAnimationValue] = useState(0);

  useEffect(() => {
    const animationDuration = 3000; // Duration in ms
    const frameRate = 60; // Frames per second
    const totalFrames = (animationDuration / 1000) * frameRate;
    const incrementValue = (completion - animationValue) / totalFrames;

    let frame = 0;
    const animationInterval = setInterval(() => {
      frame += 1;
      setAnimationValue((prev) => prev + incrementValue);

      if (frame >= totalFrames) {
        clearInterval(animationInterval);
        setAnimationValue(completion);
      }
    }, 1000 / frameRate);

    return () => clearInterval(animationInterval);
  }, [completion]);

  // Calculate rotation based on the value
  const getRotationAngle = () => {
    if (animationValue <= 60) {
      // Map 0-60 to -120 to 0 degrees
      return (animationValue / 60) * 120 - 120;
    } else if (animationValue <= 80) {
      // Map 60-80 to 0 to 60 degrees
      return ((animationValue - 60) / 20) * 60;
    } else {
      // Map 80-100 to 60 to 120 degrees
      return ((animationValue - 80) / 20) * 60 + 60;
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="relative w-40 h-40 rounded-full bg-gray-400 flex justify-center items-center overflow-hidden">
        <div className="absolute w-32 h-32 bg-white rounded-full">
          <div className="bg-green-500 w-28 h-28 absolute -bottom-2 -right-12"></div>
          <div className="bg-yellow-500 w-28 h-28 absolute rotate-[-30deg] -top-12 right-0 "></div>
          <div className="bg-yellow-500 w-28 h-28 absolute rotate-0 -top-5 -left-12"></div>
          <div className="bg-red-500 w-28 h-28 absolute rotate-[30deg] -left-20 -bottom-2 shadow-xl"></div>
        </div>

        <div className="relative w-32 h-32 bg-white rounded-full "></div>

        <svg
          className="absolute z-10 w-40 h-20"
          style={{
            transform: `rotate(${getRotationAngle()}deg)`,
            transformOrigin: "center bottom",
          }}
          viewBox="0 0 528 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="293.173" cy="26" rx="27.7187" ry="26" fill="black" />
          <path
            d="M0.0830078 25.4737L396.021 13.3493V37.598L0.0830078 25.4737Z"
            fill="#1B0707"
          />
          <ellipse cx="293.173" cy="26" rx="14.9255" ry="14" fill="#FFCC18" />
        </svg>
      </div>
      <div className="absolute -bottom-5 w-60 h-20 bg-white rounded-t-full text-center font-semibold px-5 pt-10 text-black-500">
        <p className="bottom-0">
          {animationValue >= 80
            ? "Tier 1"
            : animationValue >= 60
              ? "Tier 2"
              : "No Tier"}
        </p>
        <p>{Math.round(animationValue)}</p>
      </div>
    </div>
  );
}

export default Speedometer;
