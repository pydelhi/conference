import React from "react";
import delhi from "../assets/herobg.png";
import { useLottie } from "lottie-react";
import "@lottiefiles/lottie-player";
import animationData from "../lotties/LottieAnimation.json";

const Hero = () => {
  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
      <img
        src={delhi}
        className="w-[100%] cursor-grab h-auto sm:h-[30rem] md:h-[36rem] "
        alt=""
      />

      <section className="">
        <div className="flex  justify-between sm:justify-start">
          <div className="mr-auto pt-6  sm:pt-12 sm:mx-[3.2REM] mx-4 place-self-center lg:col-span-7">
            <h1 className="text-3xl cursor-grab font-Montserrat font-extrabold tracking-tight leading-none sm:text-5xl md:text-6xl ">
              PY<spand>DELHI</spand> CONFERENCE
            </h1>
            <p className="text-sm cursor-grab font-sans sm:text-lg tracking-tight font-medium sm:tracking-wider">
              CONFERENCE ON PYTHON PROGRAMMING LANGUAGE
            </p>
          </div>
          <div className="lg:w-52 cursor-grab md:w-44 sm:w-40 w-28">{View}</div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
