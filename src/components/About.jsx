import React from "react";
import abouticon from "../assets/about.png";
import schedule from "../assets/schedule.png";
import register from "../assets/register.png";
import submit from "../assets/submit.png";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel, Thumbs } from 'react-responsive-carousel';
import imgData from "../data/imgData.json"


const About = () => {

    const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => {
        if (!hasPrev) {
            return null;
        }
        return (
            <button
                className="carousel-arrow carousel-prev-arrow l z-20 absolute transform left-0 top-1/2 -translate-x-3"
                onClick={onClickHandler}
                title={label}
            >
                <div class="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white  sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </span>
                </div>
            </button>
        );
    };

    const renderCustomNextArrow = (onClickHandler, hasNext, label) => {
        if (!hasNext) {
            return null;
        }
        return (
            <button
                className="carousel-arrow carousel-next-arrow z-20 absolute right-0  transform top-1/2 translate-x-3"
                onClick={onClickHandler}
                title={label}
            >
                <div  class="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                </div>
            </button>
        );
    };


    return (
        <section id="about" className="pt-40">
            <div className=" flex flex-col-reverse md:flex-row items-center justify-center w-full  mx-auto">
                <div className="w-full md:w-[30%] p-4">
                    <div className="shadow-lg rounded overflow-hidden">
                    <Carousel
                            showThumbs={false}
                            autoPlay={true}
                            showStatus={false}
                            showIndicators={false}
                            renderArrowPrev={renderCustomPrevArrow}
               h-full              renderArrowNext={renderCustomNextArrow}
                            infiniteLoop interval={3000}>
                            {imgData.map((item) => (
                                <div>
                                    <img src={item.link} alt="Image 1" />
                                </div>
                            ))}
                        </Carousel>                    </div>
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                            <li className="w-full">
                                <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 h-full font-semibold rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Date: 5th & 6th August</button>
                            </li>
                            <li className="w-full">
                                <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 h-full font-semibold bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Venue: IIT DELHI</button>
                            </li>
                            <li className="w-full">
                                <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block w-full p-4 h-full rounded-tr-lg font-semibold bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Speakers: CFP Live, ends June 1</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-[60%] p-2">
                    <div className="flex flex-col justify-between w-full md:w-[70%]">
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-center flex items-center md:text-left text-blue-900 font-semibold text-3xl">
                                <span className="pr-1 font-Montserrat">
                                    <img src={abouticon} className="w-7" alt="" />
                                </span >ABOUT THE CONFERENCE</h3>
                            <p className="font-Roboto text-xl pt-2 font-gray-800">PyDelhi conference is hosted annually by PyDelhi Community with an aim to promote Python programming language, for all.
                                We provide a single platform for programmers from different domains & enthusiasts from different walks such as students, entrepreneurs and professionals.
                                Startups, SMEs & Enterprises can also sponsor, connect, showcase and hire software professionals.
                                Experts from various domains demonstrate their application of `Python` as a programming language, while discussion brew on recent and upcoming technologies.</p>
                            <p className=" font-Roboto text-xl pt-2 font-gray-800 mt-4 mb-2">All the participants are requested to follow Code of Conduct and we will enforce the same.</p>

                            <div className="flex">
                                <button className="mt-4 flex mr-2  rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-md font-semibold text-blue-500 py-3 px-4">
                                    <div className="mr-1">
                                        <img src={register} className="w-6 " alt="" /></div>
                                    Register</button>
                                <button className="mt-4 flex ml-2 rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-md font-semibold text-blue-500 py-3 px-4">
                                    <div className="mr-1">
                                        <img src={schedule} className="w-6 " alt="" /></div>
                                    See Event Schedule</button>
                                    <button className="mt-4 flex ml-4  rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-md font-semibold text-blue-500 py-3 px-4">
                                    <div className="mr-1">
                                        <img src={submit} className="w-8" alt="" /></div>
                                    <a href="https://www.papercall.io/pydelhiconf2023" target="blank" rel="noopener noreferrer"> Submit Proposal</a></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </section >
    )
}

export default About;