import React from "react";
import yourlogo from "../assets/yourlogo.png";

const Sponsors = () => {
  return (
    <section id="sponsor" className="pt-12 xl:pt-20 mx-auto p-4">
      {" "}
      <div className=" mx-auto container text-none sm:text-center">
        {" "}
        <p className="mt-4  sm:text-3xl text-2xl lg:text-4xl text-center font-Montserrat text-[#212A5C] font-extrabold tracking-tight">
          {" "}
          Proudly Sponsored By
        </p>
        <p className="py-6 text-justify lg:text-center font-Roboto text-black font-medium  sm:text-lg ">
          {" "}
          As a sponsor for the conference, you can avail and enable a platform
          to showcase your product or service to a wide range of technology
          enthusiasts. You also get a chance to network and interact with
          various prospective leads that rarely gather under one roof at this
          scale. To review the sponsor benefits, please peruse our
          <span className="font-semibold  text-[#5DB363]">
            <a
            target="blank"
              href="https://conference.pydelhi.org/data/SponsorshipProspectus2023.pdf"
              className="hover:text-green-500"
            >
              {" "}
              Sponsorship prospectus
            </a>{" "}
          </span>{" "}
        </p>
      </div>
      <div className="mt-6 flex gap-4 max-w-8xl px-8 justify-center m-auto">
        <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
          <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
            <img className="" src={yourlogo} alt="Logo" />
          </div>
        </div>
        <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
          <div className="w-full h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200">
            <img className="" src={yourlogo} alt="Logo" />
          </div>
        </div>
        <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
          <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
            <img className="" src={yourlogo} alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sponsors;
