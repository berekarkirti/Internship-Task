import React from "react";
import ClientsData from "../data/ClientsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Clients = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-orange-500 py-32">
      <div className="container mx-auto px-40">
        <Swiper modules={[Autoplay]} slidesPerView={5} spaceBetween={10} loop={true} autoplay={{ delay: 3000 }} className="mySwiper">
          {ClientsData.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="w-36 flex justify-center items-center">
                <a href="/">
                  <img src={client.src} alt={client.alt} className="w-full object-contain"/>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;

