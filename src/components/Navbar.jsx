import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png"

const Navbar = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        // console.log('useEffect');
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
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div
                    className={
                        nav
                            ? "fixed z-30 left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-[#000300] ease-in-out duration-500 "
                            : "fixed left-[-100%]"
                    }
                >
                    <center>
                        {/* <RiOpenSourceFill size={65} color="green" /> */}
                        <h1 className="w-full text-3xl font-bold text-[#0DFF1C] m-4">
                            {" "}
                            FOSSCU
                        </h1>
                    </center>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600">
                            {/* <Link to="/"> Home </Link>{" "} */}
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            {/* <Link to="/about">About</Link> */}
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            {/* <Link to="/team"> Team </Link>{" "} */}
                        </li>
                        <li className="p-4 border-b border-gray-600 ">
                            {/* <Link to="/resource">Resources</Link>{" "} */}
                        </li>
                        <li className="p-4 border-b border-gray-600 ">
                            {/* <Link to="https://docs.fosscu.org">Handbook</Link>{" "} */}
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            <a href="https://github.com/FOSS-Community">Projects</a>
                        </li>
                        <li className="p-4 border-b border-gray-600">
                            {/* <Link to="/contact">Contact</Link> */}
                        </li>
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Navbar;
