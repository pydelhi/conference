import React from "react";
import abouticon from "../assets/about.png";
import conference from "../assets/conference-about.jpg";
import schedule from "../assets/schedule.png";
import register from "../assets/register.png";

const About = () => {
    return (
        <div>
            <div class="mt-24 mb-24 flex flex-col-reverse md:flex-row items-center justify-center w-full  mx-auto">
                <div class="w-full md:w-[30%] p-4">
                    <div class="shadow-lg rounded overflow-hidden">
                        <img className="w-full" src={conference} />
                    </div>
                    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                            <li class="w-full">
                                <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block w-full p-4 font-semibold rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Date: 5th & 6th August</button>
                            </li>
                            <li class="w-full">
                                <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="inline-block w-full p-4 font-semibold bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Venue: IIT DELHI</button>
                            </li>
                            <li class="w-full">
                                <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block w-full p-4 rounded-tr-lg font-semibold bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Speakers: CFP Live, ends June 1</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-center items-center w-full md:w-[60%] p-2">
                    <div class="flex flex-col justify-between w-full md:w-[70%]">
                        <div class="flex flex-col items-center md:items-start">
                            <h3 class="text-center flex items-center md:text-left text-blue-900 font-semibold text-3xl">
                                <span className="pr-1">
                                    <img src={abouticon} className="w-7" alt="" />
                                </span>ABOUT THE CONFERENCE</h3>
                            <p class="font-light text-xl pt-2 font-gray-800">PyDelhi conference is hosted annually by PyDelhi Community with an aim to promote Python programming language, for all. We provide a single platform for programmers from different domains & enthusiasts from different walks such as students, entrepreneurs and professionals. Startups, SMEs & Enterprises can also sponsor, connect, showcase and hire software professionals. Experts from various domains demonstrate their application of `Python` as a programming language, while discussion brew on recent and upcoming technologies.</p>
                            <p class="font-light text-xl pt-2 font-gray-800 mt-4 mb-2">All the participants are requested to follow Code of Conduct and we will enforce the same.</p>

                            <div className="flex">
                                <button class="mt-4 flex mr-2  rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-md font-semibold text-blue-500 py-3 px-4">
                                    <div className="mr-1">
                                        <img src={register} className="w-6 " alt="" /></div>
                                    Register</button>
                                <button class="mt-4 flex ml-2 rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-md font-semibold text-blue-500 py-3 px-4">
                                    <div className="mr-1">
                                        <img src={schedule} className="w-6 " alt="" /></div>
                                    See Event Schedule</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default About;