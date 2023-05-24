import React from "react";
import yourlogo from "../assets/yourlogo.png"

const Sponsors = () => {
    return (
        <div>
            <div className="mt-20 mx-auto w-full lg:w-4/5 text-center">
                <p className="mt-4 text-6xl text-[#212A5C] font-semibold">Proudly sponsored by</p>
                <p className="py-6 text-[#212A5C] tracking-">As a Sponsor for the conference one can avail and enable, you get a platform to showcase your product or service to a wide range of technology enthusiasts. You also get a chance to network and interact with all sorts of prospective leads that rarely gather under one roof at this scale. To review sponsor benefits please peruse our 
                    <span className="font-semibold text-[#5DB363]"> Sponsorship prospectus</span> below </p>
            </div>
            <div className="mt-6 flex flex-wrap max-w-8xl px-8 justify-center m-auto">
                <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                        <img className="" src={yourlogo} alt="Logo" />
                    </div>
                </div>
                <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div className="w-full h-full flex relative justify-center items-center cursor-pointer hover:bg-gray-200">
                        <p className="absolute top-0 left-0 p-1 rounded-tl-lg rounded-br-lg uppercase text-white text-xs tracking-wide font-semibold bg-[#212A5C]">plus</p>
                        <img className="" src={yourlogo} alt="Logo" />
                    </div>
                </div>
                <div className="p-2 w-full md:w-1/4 lg:w-1/5 bg-gray-200 md:bg-white my-2">
                    <div className="w-full h-full flex justify-center items-center cursor-pointer hover:bg-gray-200">
                        <img className="" src={yourlogo} alt="Logo" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sponsors;
