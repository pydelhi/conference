import React from "react";
import delhi from "../assets/herobg.png"
import { useLottie } from "lottie-react";
import "@lottiefiles/lottie-player";
// import fitt from "../assets/fitt.png"
import './Hero.css';
import animationData from "../lotties/LottieAnimation.json"


const Hero = () => {

    const options = {
        animationData: animationData,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <div>
            <img src={delhi} className="w-[100%]   sm:h-[36rem] h-[19rem] " alt="" />

            <section className=" ">
                <div className="flex">
                    <div className="mr-auto pt-6  sm:pt-12 sm:mx-[3.2REM] mx-4 place-self-center lg:col-span-7">
                        <h1 className="text-2xl font-Montserrat font-extrabold tracking-tight leading-none sm:text-5xl md:text-6xl ">PY<spand>DELHI</spand> CONFERENCE</h1>
                        <p className="text-sm font-sans sm:text-lg tracking-tight sm:tracking-wider">CONFERENCE ON PYTHON PROGRAMMING LANGUAGE</p>
                    </div>
                    {/* <div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
                        <img src={fitt} className="w-20 " alt="" />
                    </div> */}
                    <div className="w-44">
                        {View}
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Hero;