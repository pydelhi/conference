import React from "react";

const Schedule = () => {
    return (
        <div>
            <section id="schedule" className="mt-24 bg-[#DFE4EF] antialiased">
                <div className="max-w-screen-xl bg-[#DFE4EF] px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl bg-[#DFE4EF] font-extrabold leading-tight tracking-tight text-[#212A5C]">
                        We will give the schedule soon ...
                        </h2>
                        <div className="mt-4 bg-[#DFE4EF]">
                            <a href="#" title=""
                                className="inline-flex bg-[#DFE4EF] items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Learn more about our agenda
                                <svg aria-hidden="true" className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd" className="bg-[#DFE4EF]"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Schedule;