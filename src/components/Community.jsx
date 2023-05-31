import React from 'react';

import firstlogo from "../assets/mch_logo.jpg"
import secondlogo from "../assets/OCD-logo.png"
import thirdlogo from "../assets/foss-logo.jpg"
import fourthlogo from "../assets/developersIndia.png"

const Community = () => {
  return (
    <div id='community' className="container mx-auto mt-20 pt-24">
      <h1 className="text-4xl font-Montserrat font-extrabold text-center text-[#212A5C] mb-4">Community Partnership</h1>
      <div className="">
      <p className="mb-4 font-Roboto text-lg font-medium">
        What you should do as a Community Partner for PyDelhi Conference:
      </p>
      <ul className="list-disc font-Roboto pl-8 mb-4 bg-[#dfe4ef] border  border-gray-300 px-4 py-4">
        <li>Promotion for PyDelhi Conference via Social Media. Copy and creative shall be provided by PyDelhi Conference team. Logo for both communities should ideally be present in the creative.</li>
        <li>Advertise about PyDelhi Conference within their own Meetings, Events. Optionally, let the attendees know about the upcoming Conference and encourage them to attend.</li>
        <li>Have someone from PyDelhi talk about the upcoming Conference in pre-conference events, if they happen to have one, again for Promotion.</li>
        <li>Have Meetups, Events in association with PyDelhi Conference.</li>
        <li>Don’t share attendees details to third party organizations.</li>
      </ul>
      <p className="mb-4 font-Roboto text-lg font-medium">
        How PyDelhi Conference will support you:
      </p>
      <ul className="list-disc font-Roboto pl-8 bg-[#dfe4ef] border  border-gray-300 px-4 py-4">
        <li>Cross-posting about your community’s Meetups and Events. Copy and creative to be supplied by the community’s communications and social media Point of Contacts.</li>
        <li>Feature as a Community Partner in PyDelhi Conference’s creatives.</li>
      </ul>
      </div>
      <div className="mt-6 flex flex-wrap max-w-8xl px-8 justify-center m-auto">
        
                <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">

                    <div className="w-56 h-full flex justify-center items-center cursor-pointer hover:bg-gray-200 border-2 ">
                       < a href="https://linktr.ee/meerutcodehub" target="_blank" rel="noopener noreferrer"> <img className="hover:bg-[#DFE4EF] w-56 h-40 p-3" src={firstlogo} alt="Logo" /></a>
                    </div>
                </div>
                <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div className="w-56 h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200 border-2 ">
                        
                       <a href="https://ocd-india.github.io/" target="_blank" rel="noopener noreferrer"><img className="hover:bg-[#DFE4EF] p-3" src={secondlogo} alt="Logo" /></a> 
                    </div>
                </div>
                
                <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div className="w-56 h-full flex justify-center items-center cursor-pointer hover:bg-gray-200 border-2 ">
                       <a href="https://fossunited.org/" target="_blank" rel="noopener noreferrer"><img className="w-54 h-46 p-4 hover:bg-[#DFE4EF]" src={thirdlogo} alt="Logo" /></a> 
                    </div>
                  
                </div>
               
                <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div className="w-56 h-full flex justify-center items-center cursor-pointer hover:bg-gray-200 border-2  hover:bg-[#">
                      <a href="https://www.reddit.com/r/developersIndia/" target="_blank" rel ="noopener noreferrer"><img className="w-48 h-44  p-2 hover:bg-[#DFE4EF]" src={fourthlogo} alt="Logo" /></a> 
                    </div>
                  
                </div>
               
               
            </div>
            
    </div>
    
  );
};

export default Community;