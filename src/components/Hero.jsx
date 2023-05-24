import React from "react";
import delhi from "../assets/herobg.png"
// import fitt from "../assets/fitt.png"
import './Hero.css';

const Hero = () => {
    return (
        <div>
            <img src={delhi} className="w-[100%]  sm:h-[36rem] h-[19rem] " alt="" />

            <section class=" ">
                <div class="flex">
                    <div class="mr-auto pt-6  sm:pt-10 sm:mx-[3.2REM] mx-4 place-self-center lg:col-span-7">
                        <h1 class="text-2xl  font-extrabold tracking-tight leading-none sm:text-4xl md:text-5xl ">PY<spand>DELHI</spand> CONFERENCE</h1>
                        <p className="text-sm sm:text-md tracking-tight sm:tracking-wider">CONFERENCE ON PYTHON PROGRAMMING LANGUAGE</p>
                    </div>
                    {/* <div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
                        <img src={fitt} className="w-20 " alt="" />
                    </div> */}
                    <div className="animation-wrapper sm:block hidden  absolute sm:left-[4rem] sm:-mt-4">
                        <div className="ml-[1.4rem] circle"></div>
                        <div className="ml-[2.4rem] circle"></div>
                        <div className="ml-[3.4rem] circle"></div>
                        <div className="ml-[4.4rem] circle"></div>
                        <div className="ml-[5.4rem] circle"></div>
                        <div className="ml-[6.4rem] circle"></div>
                        <div className="ml-[7.4rem] circle"></div>
                        <div className="ml-[8.4rem] circle"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;