// https://youtu.be/YLN1Argi7ik
import React from "react";

const videoData = [
  {
    id: 1,
    backgroundImage: "https://youtu.be/YLN1Argi7ik",
    title: "Watch Our Private Investigation",
    icon: "",
  },
];

const Video = () => {
  return (
    <section className="relative text-center object-contain h-[700px] bg-no-repeat" style={{ backgroundImage: `url("src/assets/video.jpeg")` }}>
      <div className="bg-black bg-opacity-50 h-full">
        <div className="container mx-auto py-20">
          {videoData.map((video) => (
            <div key={video.id} className="inner-box">
              <div className="video-btn inline-block bg-red-700 p-4 rounded-full shadow-lg hover:bg-red-600">
                <a href="#" className="popup-video text-white text-3xl">
                  <i className={video.icon}></i>
                </a>
              </div>
              <h2 className="text-white text-4xl font-bold mt-6">
                {video.title.split("<br />").map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video;


