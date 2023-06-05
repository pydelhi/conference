import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import abouticon from "../assets/about.png";
import register from "../assets/register.png";
import schedule from "../assets/schedule.png";
import submit from "../assets/submit.png";
import imgData from "../data/imgData.json";
import fitt from "../assets/fitt.png";

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
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
        <div
          className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white  sm:w-6 sm:h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
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
        <div
          className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </div>
      </button>
    );
  };

  return (
    <section id="about" className="pt-12 xl:pt-36  ">
      <div className=" flex flex-col-reverse px-4 lg:flex-row items-center justify-center w-full  mx-auto">
        <div className="lg:w-[600px] md:w-[800px] mx-2 lg:pt-0 pt-10">
          <div className="shadow-lg  rounded ">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={renderCustomPrevArrow}
              h-full
              renderArrowNext={renderCustomNextArrow}
              infiniteLoop
              interval={3500}
            >
              {imgData.map((item) => (
                <div>
                  <img src={item.link} alt="Image 1" />
                </div>
              ))}
            </Carousel>{" "}
          </div>
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
            <ul
              className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex "
              id="fullWidthTab"
              data-tabs-toggle="#fullWidthTabContent"
              role="tablist"
            >
              <li className="w-full">
                <button
                  id="stats-tab"
                  data-tabs-target="#stats"
                  type="button"
                  role="tab"
                  aria-controls="stats"
                  aria-selected="true"
                  className="inline-block w-full p-4 h-full font-semibold rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none"
                >
                  Date: 5th & 6th August
                </button>
              </li>
              <li className="w-full">
                <button
                  id="about-tab"
                  data-tabs-target="#about"
                  type="button"
                  role="tab"
                  aria-controls="about"
                  aria-selected="false"
                  className="inline-block w-full p-4 h-full font-semibold bg-gray-50 hover:bg-gray-100 focus:outline-none "
                >
                  Venue: IIT DELHI
                </button>
              </li>
              <li className="w-full">
                <button
                  id="faq-tab"
                  data-tabs-target="#faq"
                  type="button"
                  role="tab"
                  aria-controls="faq"
                  aria-selected="false"
                  className="inline-block w-full p-4 h-full rounded-tr-lg font-semibold bg-gray-50 hover:bg-gray-100 focus:outline-none "
                >
                  Speakers: CFP Live, ends June 1
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center w-full  lg:w-[60%] p-2">
          <div className="flex flex-col justify-between w-full xl:ml-12 lg:px-8 xl:w-[70%]">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-center flex items-center md:text-left text-[#212A5C]  font-semibold text-2xl sm:text-3xl">
                <span className="pr-1 font-Montserrat">
                  <img src={abouticon} className="w-7" alt="" />
                </span>
                ABOUT THE CONFERENCE
              </h3>
              <p className="font-Roboto text-justify text-md sm:text-lg lg:text-xl pt-2 font-gray-800">
                The PyDelhi conference is hosted annually by the PyDelhi
                Community with the aim of promoting the Python programming
                language for all. We provide a single platform for programmers
                from different domains and enthusiasts from various walks of
                life, such as students, entrepreneurs, and professionals.
                Startups, SMEs, and enterprises can also sponsor, connect,
                showcase, and hire software professionals. Experts from various
                domains demonstrate the application of <code>'Python'</code> as
                a programming language, while discussions brew on recent and
                upcoming technologies.
              </p>
              <p className=" font-Roboto text-md sm:text-lg lg:text-xl pt-2 font-gray-800 mt-4 mb-2">
                All participants are requested to follow the Code of Conduct,
                and we will enforce it accordingly.
              </p>

              <div className="flex flex-wrap sm:flex-wrap-none">
                <button
                  onClick={() => scrollToSection("register")}
                  className="mt-4 flex justify-between mr-2  rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-sm sm:text-md font-semibold text-blue-500 py-3 px-4 items-center"
                >
                  <div className="mr-1">
                    <img src={register} className="w-6 " alt="" />
                  </div>
                  <span>Register</span>
                </button>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="mt-4 flex justify-between ml-2 rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-sm sm:text-md font-semibold text-blue-500 py-3 px-4 items-center"
                >
                  <div className="mr-1">
                    <img src={schedule} className="w-6 " alt="" />
                  </div>
                  <span>See Event Schedule</span>
                </button>
                <button className="mt-4 flex items-center justify-between ml-4  rounded border-2 uppercase  border-gray-400 hover:border-blue-500 text-sm sm:text-md font-semibold text-blue-500 py-3 px-4">
                  <div className="mr-1">
                    <img src={submit} className="w-7" alt="" />
                  </div>
                  <a
                    href="https://www.papercall.io/pydelhiconf2023"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Submit Proposal
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-[#212A5C] bg-[#DFE4EF] flex justify-center items-center">
        <div>
          <h1 className="text-xl font-Roboto  tracking- leading-none">
            Venue Partner :
          </h1>
        </div>
        <p className="text-lg mt-[0.1rem] font font-Montserrat ml-2 ">
          {" "}
          August 5th @ Indian Institute of Technology, Delhi
        </p>
        <a
          href="https://home.iitd.ac.in/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src={fitt} className="w-36 h-36" alt="" />
        </a>
      </div>
    </section>
  );
};

export default About;
