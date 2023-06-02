import React from "react";
import temp from "../assets/temp.png";

const Code = () => {
  return (
    <div id="code" className="container pt-12 xl:pt-20 mx-auto p-4 ">
      <h1 className="sm:text-4xl  mb-8 text-[#212A5C] font-extrabold font-Montserrat tracking-tight  text-center text-2xl ">
        PyDelhiConf Code of Conduct
      </h1>
      <p className="mb-4  text-md sm:text-lg text-justify font-Roboto font-medium">
        PyDelhiConf is a community organized conference intended for advocating
        the use and adoption of the Python programming language in India. It is
        also a platform for fostering networking and collaboration among the
        Python developer community in India. We value the participation of every
        member of the Python community and want all attendees to have an
        enjoyable and rewarding experience. Accordingly, every attendee of the
        conference is expected to show respect and courtesy to every other
        attendee throughout the conference and at all conference related events,
        whether officially organized by PSSI or not. To make clear what is
        expected, all delegates/attendees, speakers, exhibitors, organizers and
        volunteers at PyDelhiConf are required to conform to the following Code
        of Conduct. Organizers will enforce this code throughout the event.
      </p>
      <div className="">
        <div className="code-of-conduct bg-[#dfe4ef] border border-gray-300 p-6 mb-6">
          <h2 className="text-2xl font-bold font-Montserrat mb-4 bg-[#dfe4ef]  text-[#212A5C]">
            Code of Conduct
          </h2>
          <div className="flex flex-row justify-between bg-[#dfe4ef]">
            <div className="bg-[#dfe4ef] font-Roboto w-[90%]">
              <p className="mb-2 bg-[#dfe4ef] ">
                1. Respect and courtesy: Treat others with respect and courtesy.
              </p>
              <p className="mb-2 bg-[#dfe4ef] ">
                2. Collaboration: Foster collaboration and maintain a positive
                atmosphere.
              </p>
              <p className="mb-2 bg-[#dfe4ef] ">
                3. Inclusivity: Embrace diversity and inclusivity in all
                interactions.
              </p>
              <p className="mb-2 bg-[#dfe4ef] ">
                5. Compliance: All participants must comply with the code of
                conduct.
              </p>
              <p className="mb-2 bg-[#dfe4ef] ">
                4. Harassment: Harassment of any kind will not be tolerated.
              </p>
            </div>
            <div className="bg-[#dfe4ef] w-50px hidden sm:block">
              <img src={temp} className=" bg-[#dfe4ef]" alt="" />
            </div>
          </div>
        </div>
        <p className="font-medium text-justify font-Roboto text-md sm:text-lg">
          If you have any questions or need assistance, please contact the
          organizers.
        </p>
      </div>
    </div>
  );
};
export default Code;
