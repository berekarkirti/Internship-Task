import React from 'react';
import ServiceData from '../data/ServiceData';
import Button from '../cva/button';

const Service = () => {


  return (
    <section className="bg-gray-100 py-40  text-center ">
      <div className="container mx-auto px-32">

        <div className="mb-12">
          <span className="text-red-500 text-lg font-semibold">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Private Investigation <br />
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceData.map((service) => (
            <div key={service.id} className="bg-white shadow-md overflow-hidden">
              <div className="relative">
                <img src={service.image} alt={service.title} className="w-full" />
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                  {service.category}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold">
                  <a href={service.link}>{service.title}</a>
                </h3>
                <p className="text-gray-500 mt-4 text-lg">{service.description}</p>
              </div>

              <Button
                as="a"
                href="/"
                variant="gradient"
                size="lg"
                className=" absolute -mt-7 -mx-20"
              >
                Read More
                <i className="fas fa-arrow-right"></i>
              </Button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;
