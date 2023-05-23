import React from "react";
import delhi from "../assets/herobg.png"
// import fitt from "../assets/fitt.png"
import  './Hero.css';

const Hero = () => {
    return (
        <div>
            <img src={delhi} className="w-[100%] h-[36rem]" alt="" />
            
            <section class="bg-white dark:bg-gray-900">
                <div class="grid  max-w-screen-xl mx-12 md:-mt-8 mt-2 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto mx-[4.2REM] place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl  text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">PYDELHI CONFERENCE</h1>
                        <p className="">CONFERENCE ON PYTHON PROGRAMMING LANGUAGE</p>
                    </div>
                    {/* <div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
                        <img src={fitt} className="w-20 " alt="" />
                    </div> */}
                    <div className="animation-wrapper">
                        <div className=" circle"></div>
                        <div className=" circle"></div>
                        <div className=" circle"></div>
                        <div className=" circle"></div>
                        <div className=" circle"></div>
                        <div className=" circle"></div>
                        <div className=" circle"></div>
                        <div className=" circle"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;