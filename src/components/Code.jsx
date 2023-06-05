import temp from "../assets/temp.png";

const Code = ({ handleShortCoc, handleLongCoc, shortCoc, longCoc }) => {
  return (
    <div>
      <div id="code" className={`   container pt-12 xl:pt-20 mx-auto p-4 `}>
        <h1 className="sm:text-4xl  mb-8 text-[#212A5C] font-extrabold font-Montserrat tracking-tight  text-center text-2xl ">
          PyDelhiConf Code of Conduct
        </h1>
        <p className="mb-4  text-md sm:text-lg text-justify font-Roboto font-medium">
          PyDelhiConf is a community organized conference intended for
          advocating the use and adoption of the Python programming language in
          India. It is also a platform for fostering networking and
          collaboration among the Python developer community in India. We value
          the participation of every member of the Python community and want all
          attendees to have an enjoyable and rewarding experience. Accordingly,
          every attendee of the conference is expected to show respect and
          courtesy to every other attendee throughout the conference and at all
          conference related events, whether officially organized by PSSI or
          not. To make clear what is expected, all delegates/attendees,
          speakers, exhibitors, organizers and volunteers at PyDelhiConf are
          required to conform to the following Code of Conduct. Organizers will
          enforce this code throughout the event.
        </p>
        <div className="">
          <div className="code-of-conduct bg-[#dfe4ef] border border-gray-300 p-6 mb-6">
            <h2 className="text-2xl font-bold font-Montserrat mb-4 bg-[#dfe4ef]  text-[#212A5C]">
              Code of Conduct
            </h2>
            <div className="flex flex-row justify-between bg-[#dfe4ef]">
              <div className="bg-[#dfe4ef] font-Roboto w-[90%]">
                <p className="mb-2 bg-[#dfe4ef] ">
                  1. Respect and courtesy: Treat others with respect and
                  courtesy.
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
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleShortCoc(true)}
            className="block  bg-[#5DB363] text-white font-Roboto lg:text-lg focus:ring-4 focus:outline-none focus:ring-[#5DB363] font-medium rounded text-md px-5 py-2.5 text-center "
            type="button"
          >
            Short Version
          </button>
          <button
            onClick={() => handleLongCoc(true)}
            className="block  bg-[#5DB363] text-white font-Roboto lg:text-lg focus:ring-4 focus:outline-none focus:ring-[#5DB363] font-medium rounded text-sm px-5 py-2.5 text-center "
            type="button"
          >
            Long Version
          </button>
        </div>
      </div>
      <div
        className={`fixed ${
          shortCoc ? "inset-0" : ""
        } bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-hidden`}
      >
        <div
          id="readProductModal"
          tabindex="-1"
          aria-hidden="true"
          className={`${
            shortCoc ? "block" : "hidden"
          } overflow-y-auto overflow-x-hidden flex justify-center mt-32 h-full`}
        >
          <div className="relative p-4 w-full max-w-[59rem] md:h-auto">
            <div className="relative p-4 bg-white rounded-lg shadow-lg sm:p-5">
              <div className="flex justify-between mb-4 rounded-t sm:mb-5">
                <div className="text-sm text-black sm:text-md ">
                  <div
                    className="modal fade"
                    id="short-coc"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                  >
                    <div className="modal-dialog max-h-[300px] overflow-y-scroll">
                      <div className="modal-content">
                        <div className="modal-header absolute w-full overflow-hidden pt-6 left-0 border-b top-0 bg-white z-10">
                          <div className="border-b pb-4 pr-12">
                            <h4 className="font-semibold  text-[#5DB363] text-xl  border-b border-gray-300 ml-4 ">
                              Short Version Code of Conduct
                            </h4>
                          </div>
                        </div>
                        <div className="pt-16 font-Roboto pr-[20px] pl-2">
                          <p>
                            PyDelhiConf is dedicated to providing a
                            harassment-free conference experience for everyone,
                            regardless of age, gender, sexual orientation,
                            physical appearance, disability, race, religion or
                            employment. We don't tolerate harassment of
                            attendees in any form.
                          </p>
                          <p>
                            All communication should be appropriate for a
                            professional audience, including people from many
                            different backgrounds.
                          </p>
                          <p className="font-semibold">Code for Speakers:</p>
                          <p>
                            Sexual language or imagery is inappropriate for your
                            talks or slides. Refrain from using sexist, racist
                            or exclusionary language anywhere in your content.
                          </p>
                          <p className="font-semibold">
                            Code for Exhibitors and Sponsors:
                          </p>
                          <p>
                            Exhibitors in the expo hall, sponsor or vendor
                            booths, are subject to the anti-harassment policy.
                            Exhibitors should not use sexualized images,
                            activities, or other material. Booth staff
                            (including volunteers) should not use sexualized
                            clothing/uniforms/costumes, or otherwise create a
                            sexualized environment.
                          </p>
                          <p className="font-semibold">Code for Participants:</p>
                          <p>
                            Be kind and sensitive to the people around you and
                            avoid any kind of offensive behavior. Sexist, racist
                            or any other form of exclusionary or offensive jokes
                            or excessive public swearing are not appropriate at
                            any venue of PyDelhiConf. Attendees violating these
                            rules may be asked to leave the conference without a
                            refund at the sole discretion of the conference
                            organizers. Thank you for your consideration and
                            help in making PyDelhiConf a welcoming, friendly
                            event for all of us.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute z-30 right-4">
                  <button
                    onClick={() => handleShortCoc(false)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg  text-sm p-1.5 inline-flex "
                    data-modal-toggle="readProductModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>

              <div className="flex border-t pt-2 justify-between items-center">
                <div className="flex  items-center space-x-3 sm:space-x-4"></div>
                <button
                  onClick={() => handleShortCoc(false)}
                  type="button"
                  className="inline-flex items-center text-white bg-[#5DB363] focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2 text-center "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed ${
          longCoc ? "inset-0" : ""
        } bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-hidden`}
      >
        <div
          id="readProductModal"
          tabindex="-1"
          aria-hidden="true"
          className={`${
            longCoc ? "block" : "hidden"
          } overflow-y-auto overflow-x-hidden flex justify-center mt-32 h-full`}
        >
          <div className="relative p-4 w-full max-w-[59rem] md:h-auto">
            <div className="relative p-4 bg-white rounded-lg shadow-lg  sm:p-5">
              <div className="flex justify-between mb-4 rounded-t sm:mb-5">
                <div className="text-sm text-black sm:text-md ">
                  <div
                    className="modal fade"
                    id="short-coc"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                  >
                    <div className="modal-dialog max-h-[300px] overflow-y-scroll">
                      <div className="modal-content">
                        <div className="modal-header absolute w-full overflow-hidden pt-6 left-0 border-b top-0 bg-white z-10">
                          <div className="border-b pb-4 pr-12">
                            <h4 className="font-semibold  text-[#5DB363] text-xl  border-b border-gray-300 ml-4 ">
                              Long Version Code of Conduct
                            </h4>
                          </div>
                        </div>
                        <div className="pt-16 font-Roboto pr-[20px] pl-2">
                          <p>
                            PyDelhiConf is dedicated to providing a
                            harassment-free conference experience for everyone,
                            regardless of age, gender, sexual orientation,
                            physical appearance, disability, race, religion or
                            employment. Harassment includes offensive verbal
                            comments related to gender, sexual orientation,
                            disability, physical appearance, body size, race,
                            religion, sexual images in public spaces, deliberate
                            intimidation, stalking, following, harassing
                            photography or recording, sustained disruption of
                            talks or other events, inappropriate physical
                            contact, and unwelcome sexual attention. We have
                            zero tolerance on harassment of conference
                            participants in any form, including, but not limited
                            to the activities mentioned here.
                          </p>
                          <p>
                            Participants asked to stop any harassing behavior
                            are expected to comply immediately.
                          </p>
                          <p>
                            Exhibitors in the expo hall, sponsor or vendor
                            booths, or similar activities are also subject to
                            the anti-harassment policy. In particular,
                            exhibitors should not use sexualized images,
                            activities, or other material. Booth staff
                            (including volunteers) should not use sexualized
                            clothing/uniforms/costumes, or otherwise create a
                            sexualized environment.
                          </p>
                          <p>
                            All communication should be appropriate for a
                            professional audience, including people from many
                            different backgrounds. Sexual language or imagery is
                            inappropriate for all aspects of the conference,
                            including talks. Remember that sexist, racist or any
                            other form of exclusionary or offensive jokes or
                            excessive public swearing are not appropriate at any
                            venue of PyDelhiConf.
                          </p>
                          <p>
                            Do not insult or put down attendees or engage in any
                            action that violates the open, welcoming and sharing
                            spirit of the conference. Be kind and sensitive to
                            the people around you when you are attending the
                            conference, and avoid any kind of offensive or
                            degrading behavior.
                          </p>
                          <p>
                            If a participant engages in behavior that violates
                            this code of conduct, the conference organizers may
                            take any action they deem appropriate, including
                            warning the offender or expulsion from the
                            conference with no refund. Thank you for helping to
                            make PyCon India a welcoming, friendly event for
                            all.
                          </p>
                          <p className="font-semibold">Contact Information</p>
                          <p>
                            If you are being harassed, notice that someone else
                            is being harassed, or have any other concerns,
                            please contact a member of conference staff.
                            Conference staff will be wearing "PyDelhiConf India
                            Staff" or "PyDelhiCOnf India Volunteer" badges.
                          </p>
                          <p>
                            You may also ask to be put in touch with the
                            conference chair‚ Akshay Arora.
                          </p>
                          <p>
                            If the matter is especially urgent, please
                            call/contact any of these individuals:
                          </p>
                          <ul>
                            <li>Akshay Arora</li>
                            <li>Gora Mohanty</li>
                            <li>Karambir Singh Nain</li>
                            <p>
                              Conference staff will be happy to help
                              participants contact venue security or local law
                              enforcement, provide escorts, or otherwise assist
                              those experiencing harassment to feel safe for the
                              duration of the conference. We value your
                              attendance.
                            </p>
                          </ul>
                          <p className="font-semibold">License</p>
                          <p>
                            This Code of Conduct was forked from Pycon India
                            Conference under a Creative Commons Attribution 3.0
                            Unported License. PyDelhiConf Code of Conduct is
                            licensed under a Creative Commons Attribution 3.0
                            Unported License.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute z-30 right-4">
                  <button
                    onClick={() => handleLongCoc(false)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg  text-sm p-1.5 inline-flex "
                    data-modal-toggle="readProductModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>

              <div className="flex border-t pt-2 justify-between items-center">
                <div className="flex  items-center space-x-3 sm:space-x-4"></div>
                <button
                  onClick={() => handleLongCoc(false)}
                  type="button"
                  className="inline-flex items-center text-white bg-[#5DB363] focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Code;
