import React from 'react';


const Community = () => {
  return (
    <div id='community' className=" pt-20 mt-20">
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
    </div>
  );
};

export default Community;
