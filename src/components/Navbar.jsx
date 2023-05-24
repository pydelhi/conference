import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png"

const Navbar = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", checkSize);
        return () => {
            console.log("cleanup");
            window.removeEventListener("resize", checkSize);
        };
    }, []);
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>

            <div className="flex justify-between items-center h-[4.8rem] max-w-[1240px] mx-auto  px-4  text-white">
                <img src={logo} className="w-44" alt="" />
                <ul className="hidden text-black -mt-2 md:flex">
                    <li className="m-4 hover:text-[#FCBD17] cursor-pointer">
                        Home
                    </li>
                    <li className="m-4 hover:text-[#FCBD17] cursor-pointer">
                        About
                    </li>
                    <li className="m-4 hover:text-[#FCBD17] cursor-pointer">
                        Schedule
                    </li>
                    <li className="m-4 hover:text-[#FCBD17] cursor-pointer">
                        Sponsors
                    </li>
                    <li className="m-4 hover:text-[#FCBD17] cursor-pointer">
                        FAQ
                    </li>
                    <li className="m-4 hover:text-[#FCBD17] cursor-pointer">
                        Register
                    </li>
                </ul>
                <div onClick={handleNav} className="block cursor-pointer md:hidden">
                    {nav ? <AiOutlineClose fill="#000000" size={20} /> : <AiOutlineMenu fill="#000000" size={20} />}
                </div>
                <div
                    className={
                        nav
                            ? "fixed z-30 left-0 top-0 pt-4 w-[60%] h-full border-r border-r-grey-900 bg-white ease-in-out duration-500 "
                            : "fixed left-[-100%]"
                    }
                >
                    <center>
                        <img src={logo} className="w-44" alt="" />
                    </center>
                    <ul className="uppercase p-4">
                        <li className="p-4 text-black   border-b border-gray-600">
                            <span className="cursor-pointer"> Home</span>
                        </li>
                        <li className="p-4 text-black   border-b border-gray-600">
                            <span className="cursor-pointer">About</span>
                        </li>
                        <li className="p-4 text-black   border-b border-gray-600">
                            <span className="cursor-pointer"> Schedule</span>
                        </li>
                        <li className="p-4 text-black   border-b border-gray-600 ">
                            <span className="cursor-pointer"> Sponsors</span>
                        </li>
                        <li className="p-4  text-black  border-b border-gray-600 ">
                            <span className="cursor-pointer"> FAQ</span>
                        </li>
                        <li className="p-4 text-black   border-b border-gray-600">
                            <span className="cursor-pointer">Register</span>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Navbar;
