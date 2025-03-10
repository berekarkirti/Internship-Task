import React from "react";
import { FaPlay } from "react-icons/fa";

const videoData = [
  {
    id: 1,
    title1: "Watch Our Private",
    title2: "Investigation",
    icon: "fas fa-play",
  },
];

const Video = () => {
  return (
    <section className="relative text-center h-[800px] bg-cover bg-center mt-24" style={{ backgroundImage: `url("src/assets/video.jpeg")` }}>
      <div className="bg-black bg-opacity-70 h-full flex items-center justify-center">
        <div className="container mx-auto">
          {videoData.map((video) => (
            <div key={video.id}>
              <div className="video-btn inline-block bg-gradient-to-r from-pink-600 via-orange-500 to-pink-600 bg-[length:200%_200%] text-white hover:animate-gradientMove p-12 rounded-full shadow-lg">
                <a href="#" className="text-white text-5xl flex items-center justify-center">
                  <i className=""><FaPlay /></i>
                </a>
              </div>
              <h2 className="text-white text-8xl font-bold tracking-wider">
                {video.title1.split("<br />").map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
                 {video.title2.split("<br />").map((line, index) => (
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
