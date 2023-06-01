import React from "react";
import yourlogo from "../assets/yourlogo.png"

const Sponsors = () => {
    return (
        <section id="sponsor" className="pt-20 mt-20">
            <div className=" mx-auto w-full lg:w-4/5 text-center">
                <p className="mt-4 text-4xl font-Montserrat text-[#212A5C] font-extrabold tracking-tight">Proudly Sponsored By</p>
                <p className="py-6  font-Roboto text-black font-medium text-lg ">As a Sponsor for the conference one can avail and enable, you get a platform to showcase your product or service to a wide range of technology enthusiasts. You also get a chance to network and interact with all sorts of prospective leads that rarely gather under one roof at this scale. To review sponsor benefits please peruse our 
                    <span className="font-semibold text-[#5DB363]"><a href="https://conference.pydelhi.org/data/SponsorshipProspectus2023.pdf" className="hover:text-green-500"> Sponsorship prospectus</a> </span> below </p>
            </div>
            <div className="mt-6 flex flex-wrap max-w-8xl px-8 justify-center m-auto">
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
    )
}
export default Sponsors;
