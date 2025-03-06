import React, { useState } from 'react';

const Timeline = () => {
    const [line, setLine] = useState([]);

    const timelineData = [
        {
            year: "1999",
            title: "How we Grow Up",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            year: "2010",
            title: "New Branch Open",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            year: "2015",
            title: "Extended Law Team",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
        {
            year: "2024",
            title: "Best Law Team",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        },
    ];

    return (
        <div className="relative overflow-hidden mx-auto flex flex-col lg:flex-row max-w-8xl items-center px-4 sm:px-8 lg:px-12 py-10 sm:py-20">
            <div className="absolute w-full h-full border-b-4 bottom-1/2 border-pink-600 hidden lg:block "></div>

            {timelineData.map((line, index) => (
                <div className={` hidden lg:block justify-center items-center gap-4 w-full text-center sm:w-1/2 lg:w-1/4 lg:flex-row`} key={index}>
                    {index % 2 === 0 ? (

                        <div className="">
                            <div className="space-y-16 text-center relative">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-600">{line.year}</h1>
                                <div className="flex flex-col items-center">
                                    <div className={` absolute top-11  h-4 w-4 sm:h-6 sm:w-6 rounded-full ${index % 2 === 0 ? "bg-purple-500" : "bg-green-500"} border-2 border-white`}></div>
                                    <div className={` absolute top-[3.2rem] h-16 lg:h-24 w-1 ${index % 2 === 0 ? "bg-purple-500 top-20" : "bg-green-500"}`}></div>
                                </div>
                                <div className="mt-16 ">
                                    <h3 className="text-xl sm:text-2xl font-bold text-purple-700">{line.title}</h3>
                                    <p className="text-base sm:text-lg text-purple-800 mt-2">
                                        {line.description}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center text-center relative">
                            <div className="mb-24 lg:mb-32">
                                <h3 className="text-xl sm:text-2xl font-bold text-green-500">{line.title}</h3>
                                <p className="text-base sm:text-lg text-green-600 mt-2">
                                    {line.description}
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className={` absolute  bottom-[4.2rem] h-16 w-1 lg:h-24 ${index % 2 === 0 ? "bg-purple-500" : "bg-green-500"}`}></div>
                                <div className={`  bottom-11 h-4 w-4 sm:h-6 sm:w-6 rounded-full ${index % 2 === 0 ? "bg-purple-500" : "bg-green-500"} border-2 border-white`}></div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-600">{line.year}</h1>
                        </div>
                    )}



                </div>
            ))}

            {timelineData.map((line, index) => (
                <div className="lg:hidden">
                    <div className="   lg:flex flex-col justify-center items-center space-y-16 text-center relative">
                        <h1 className="text-2xl lg:text-5xl font-extrabold text-purple-600">
                            {line.year}
                        </h1>
                        <div className="flex flex-col items-center">
                            <div
                                className="absolute top-12 h-6 w-6 rounded-full bg-purple-500 border-2 border-white"
                            ></div>
                            <div
                                className="absolute top-16 h-24 w-1 bg-purple-500"
                            ></div>
                        </div>
                        <div className="absolute w-full h-full border-b-4 bottom-[4.6rem] border-pink-600"></div>
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-purple-700">
                                {line.title}
                            </h3>
                            <p className="text-sm text-purple-800 mt-2">{line.description}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Timeline;
























// {index % 2 === 0 ? (
//     <div className="hidden lg:flex flex-col justify-center items-center space-y-8 text-center relative">
//       <h1 className="text-2xl lg:text-5xl font-extrabold text-purple-600">
//         {item.year}
//       </h1>
//       <div className="flex flex-col items-center">
//         <div
//           className="absolute top-8 h-6 w-6 rounded-full bg-purple-500 border-2 border-white"
//         ></div>
//         <div
//           className="absolute top-16 h-24 w-1 bg-purple-500"
//         ></div>
//       </div>
//       <div className="mt-8">
//         <h3 className="text-lg font-bold text-purple-700">
//           {item.title}
//         </h3>
//         <p className="text-sm text-purple-800 mt-2">{item.description}</p>
//       </div>
//     </div>
//   ) : (
//     <div className="hidden lg:flex flex-col justify-center items-center space-y-8 text-center relative">
//       <div className="mb-32">
//         <h3 className="text-lg font-bold text-green-500">
//           {item.title}
//         </h3>
//         <p className="text-sm text-green-600 mt-2">
//           {item.description}
//         </p>
//       </div>
//       <div className="flex flex-col items-center">
//         <div
//           className="absolute bottom-8 h-6 w-6 rounded-full bg-green-500 border-2 border-white"
//         ></div>
//         <div
//           className="absolute bottom-16 h-24 w-1 bg-green-500"
//         ></div>
//       </div>
//       <h1 className="text-2xl lg:text-5xl font-extrabold text-green-600">
//         {item.year}
//       </h1>
//     </div>
//   )}