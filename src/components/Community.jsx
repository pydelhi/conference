import React from "react";

import secondlogo from "../assets/OCD-logo.png";
import fourthlogo from "../assets/developersIndia.png";
import thirdlogo from "../assets/foss-logo.jpg";
import firstlogo from "../assets/mch_logo.jpg";

const Community = () => {
  return (
    <div
      id="community"
      className="container mx-auto pt-12 mx-auto p-4 xl:pt-20"
    >
      <h1 className="lg:text-4xl sm:text-3xl text-2xl font-Montserrat font-extrabold text-center text-[#212A5C] mb-4">
        Community Partnership
      </h1>
      <div className="">
        <p className="mb-4 font-Roboto text-md  lg:text-lg font-medium">
          What you should do as a Community Partner for PyDelhi Conference:
        </p>
        <ul className="list-disc font-Roboto pl-8 mb-4 bg-[#dfe4ef] border  border-gray-300 px-4 py-4">
          <li>
            Promotion for the PyDelhi Conference via Social Media. The copy and
            creative shall be provided by the PyDelhi Conference team. Ideally,
            the logo for both communities should be present in the creative.
          </li>
          <li>
            Advertise the PyDelhi Conference within your own meetings and
            events. Optionally, let the attendees know about the upcoming
            conference and encourage them to attend.
          </li>
          <li>
            If you happen to have pre-conference events, have someone from
            PyDelhi talk about the upcoming conference for promotion.
          </li>
          <li>
            Organize meetups and events in association with the PyDelhi
            Conference.
          </li>
          <li>
            Please do not share attendees' details with third-party
            organizations.
          </li>
        </ul>
        <p className="mb-4 font-Roboto text-lg font-medium">
          How PyDelhi Conference will support you:
        </p>
        <ul className="list-disc font-Roboto pl-8 bg-[#dfe4ef] border  border-gray-300 px-4 py-4">
          <li>
            Cross-posting about your community’s Meetups and Events. Copy and
            creative to be supplied by the community’s communications and social
            media Point of Contacts.
          </li>
          <li>
            Feature as a Community Partner in PyDelhi Conference’s creatives.
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center">
        <div className="mt-6 grid lg:grid-cols-4 grid-cols-2 gap-4  max-w-8xl px-8 m-auto">
          <div className="p-2   bg-gray-200 md:bg-white my-2">
            <div className="sm:w-56 h-full flex justify-center items-center cursor-pointer hover:bg-gray-200 border-2 ">
              <a
                href="https://linktr.ee/meerutcodehub"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  className="hover:bg-[#DFE4EF] w-56 h-40 p-3"
                  src={firstlogo}
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="p-2   bg-gray-200 md:bg-white my-2">
            <div className="sm:w-56 h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200 border-2 ">
              {" "}
              <a
                href="https://ocd-india.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:bg-[#DFE4EF] p-3"
                  src={secondlogo}
                  alt="Logo"
                />
              </a>
            </div>
          </div>

          <div className="p-2  bg-gray-200 md:bg-white my-2">
            <div className="sm:w-56  h-full flex justify-center items-center cursor-pointer hover:bg-gray-200 border-2 ">
              <a
                href="https://fossunited.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-54 h-46 p-4 hover:bg-[#DFE4EF]"
                  src={thirdlogo}
                  alt="Logo"
                />
              </a>
            </div>
          </div>

          <div className="p-2  bg-gray-200 md:bg-white my-2">
            <div className="sm:w-56 h-full flex justify-center items-center cursor-pointer hover:bg-gray-200 border-2  hover:bg-[#">
              <a
                href="https://www.reddit.com/r/developersIndia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-48 h-44  p-2 hover:bg-[#DFE4EF]"
                  src={fourthlogo}
                  alt="Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
