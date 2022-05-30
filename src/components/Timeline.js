import React from "react";
//import { educationData } from "../assets/timeLineData"

const educationData = [
  {
    id: 1,
    course: "BTech. Computer Science Engineering",
    instituteName: "Lovely Professional University",
    start: "July 2020",
    end: "July 2023",
  },
  {
    id: 2,
    course: "Diploma Computer Science & Technology",
    instituteName: "Kinston Educational Institute",
    start: "July 2017",
    end: "July 2020",
  },
];

const Timeline = () => {
  return (
    <>
      <div className="flex lg:text-[5rem] md:text-[2rem] text-[2rem]">
        <p className="text-heroArrow ">&lt;</p>
        <p className="text-paleWhite ">Education</p>
        <p className="text-heroArrow">/&gt;</p>
      </div>
      <div className="h-screen flex justify-center space-x-3">
        <div className="space-y-5">
          {educationData.map((items) => (
            <div key={items.id} className="h-24 md:h-28 flex items-center">
              <div className="h-5 w-5 rounded-full border-2 border-white"></div>
            </div>
          ))}
        </div>

        {/* Education info */}
        <div className="space-y-5">
          {educationData.map((info) => (
            <div
              key={info.id}
              className="container flex w-full md:w-[30rem] h-24 md:h-28 bg-white rounded-md p-3 md:p-5"
            >
              <div className="w-max flex items-start md:items-center justify-center pl-1 md:p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  md:h-16 md:w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div className="">
                <div className="flex">
                  <div className="font-bold md:text-lg">{info.course}</div>
                </div>
                <div>
                  <div className="font-medium text-left">
                    {info.instituteName}
                  </div>
                  <div className="flex font-light text-sm">
                    <div>{info.start}</div>-<div>{info.end}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
