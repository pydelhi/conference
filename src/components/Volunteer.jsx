import React from "react";
import logo from "../assets/logo.png";
import back from "../assets/back.png";

const Volunteer = () => {
  return (
    <div>
      <div className="bg-green-400 ">
        <div className="w-56 ml-60 pt-6">
          <a href="/">
            <img src={logo} alt="pydelhi logo" />
          </a>
        </div>
      </div>
      <a href="/" className="flex gap-2 ml-4 text-blue-800 mt-1 text-lg hover:underline">
        <img src={back} className="w-6" alt="" />
        <span> Get back to Homepage</span>
      </a>
      <div className="flex mt-12 flex-row justify-center items-center">
        <ul className="list-disc text-gray-800 text-lg font-Montserrat font-semibold">
          <li className="cursor-grab">Kanishk Pachauri</li>
          <li className="cursor-grab">Shivam Yadav</li>
          <li className="cursor-grab">Anshika Gupta</li>
          <li className="cursor-grab">Aditya Varshney</li>
        </ul>
      </div>
    </div>
  );
};

export default Volunteer;
