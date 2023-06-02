import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

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
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sticky = window.scrollY > 0;
      setIsSticky(sticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky z-20 top-0 w-[100%] bg-white ${
          isSticky ? "shadow-lg  " : ""
        }`}
      >
        <div className="flex justify-between items-center h-[4.8rem] max-w-[1240px] mx-auto px-4 text-white">
          <a href="#">
            <img src={logo} className="w-44" alt="" />
          </a>
          <ul className="hidden text-black -mt-2 md:flex">
            <li
              onClick={() => scrollToSection("home")}
              className={`m-4 hover:text-[#5db363] font-medium cursor-pointer ${
                activeSection === "home" ? "text-[#5db363]" : ""
              }`}
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className={`m-4 hover:text-[#5db363] font-medium cursor-pointer ${
                activeSection === "about" ? "text-[#5db363]" : ""
              }`}
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("register")}
              className={`m-4 hover:text-[#5db363] font-medium cursor-pointer ${
                activeSection === "register" ? "text-[#5db363]" : ""
              }`}
            >
              Register
            </li>

            <li
              onClick={() => scrollToSection("schedule")}
              className={`m-4 hover:text-[#5db363] font-medium cursor-pointer ${
                activeSection === "schedule" ? "text-[#5db363]" : ""
              }`}
            >
              Schedule
            </li>

            <li className="m-4 hover:text-[#5db363]  font-medium cursor-pointer">
              <div className="relative group  xl:mr-0 lg:mr-44 md:mr-36">
                <button className=" pb-0 hover:text-[#5db363] flex items-center  text-black">
                  <span className="mr-1">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                  <span>More</span>
                </button>
                <div className="translate-x-[-0em] shadow-sm hidden absolute bg-white text-black rounded mt-1 w-56 group-hover:block hover:rounded-md ">
                  <li
                    onClick={() => scrollToSection("faq")}
                    className={`m-4 hover:text-[#5db363]  font-medium cursor-pointer ${
                      activeSection === "faq" ? "text-[#5db363]" : ""
                    }`}
                  >
                    FAQ
                  </li>
                  <li
                    onClick={() => scrollToSection("sponsor")}
                    className={`m-4 hover:text-[#5db363] font-medium cursor-pointer ${
                      activeSection === "sponsor" ? "text-[#5db363]" : ""
                    }`}
                  >
                    Sponsors
                  </li>
                  <li
                    onClick={() => scrollToSection("code")}
                    className={`m-4 hover:text-[#5db363] font-medium cursor-pointer ${
                      activeSection === "code" ? "text-[#5db363]" : ""
                    }`}
                  >
                    Code Of Conduct
                  </li>
                  <li
                    onClick={() => scrollToSection("community")}
                    className={`m-4 hover:text-[#5db363] font-medium cursor-pointer  ${
                      activeSection === "community" ? "text-[#5db363]" : ""
                    }`}
                  >
                    Community Partnership
                  </li>
                </div>
              </div>
            </li>
          </ul>
          <div onClick={handleNav} className="block cursor-pointer md:hidden">
            {nav ? (
              <AiOutlineClose fill="#000000" size={20} />
            ) : (
              <AiOutlineMenu fill="#000000" size={20} />
            )}
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
              <li
                onClick={() => scrollToSection("home")}
                className={`p-4 text-black   border-b border-gray-600 ${
                  activeSection === "home" ? "text-[#5db363]" : ""
                }`}
              >
                <span className="cursor-pointer"> Home</span>
              </li>
              <li
                onClick={() => scrollToSection("about")}
                className={`p-4 text-black   border-b border-gray-600 ${
                  activeSection === "about" ? "text-[#5db363]" : ""
                }`}
              >
                <span className="cursor-pointer">About</span>
              </li>
              <li
                onClick={() => scrollToSection("register")}
                className={`p-4 text-black   border-b border-gray-600 ${
                  activeSection === "register" ? "text-[#5db363]" : ""
                }`}
              >
                <span className="cursor-pointer">Register</span>
              </li>
              <li
                onClick={() => scrollToSection("schedule")}
                className={`p-4 text-black   border-b border-gray-600 ${
                  activeSection === "schedule" ? "text-[#5db363]" : ""
                }`}
              >
                <span className="cursor-pointer"> Schedule</span>
              </li>
              <li
                onClick={() => scrollToSection("faq")}
                className={`p-4 text-black   border-b border-gray-600 ${
                  activeSection === "faq" ? "text-[#5db363]" : ""
                }`}
              >
                <span className="cursor-pointer"> FAQ</span>
              </li>
              <li
                onClick={() => scrollToSection("code")}
                className={`p-4 text-black   border-b border-gray-600 ${
                  activeSection === "code" ? "text-[#5db363]" : ""
                }`}
              >
                <span className="cursor-pointer">Code Of Conduct</span>
              </li>
              <li
                onClick={() => scrollToSection("community")}
                className={`p-4 text-black   border-b border-gray-600 ${
                  activeSection === "community" ? "text-[#5db363]" : ""
                }`}
              >
                <span className="cursor-pointer">Community partners</span>
              </li>

              <li
                onClick={() => scrollToSection("sponsor")}
                className={`p-4 text-black   border-b border-gray-600 ${
                  activeSection === "sponsor" ? "text-[#5db363]" : ""
                }`}
              >
                <span className="cursor-pointer"> Sponsors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
