import React from 'react';
import NewsData from '../data/NewsData';

const News = () => {
  return (
    <section className=" py-32 px-52 gap-12">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold uppercase text-lg tracking-wider">Our Article</span>
          <h2 className="text-3xl font-bold text-gray-800">Get More Update From Our Article</h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-3 ">

          {NewsData.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-xl overflow-hidden h-[550px] w-[400px] p-8"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-[350px] h-56 object-cover"
                />
                <div className="absolute top-40 left-60 rounded-full h-20 w-20 bg-primary flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">{article.date}</span>
                </div>

              </div>

              {/* Content Section */}
              <div className="mt-4">
                <div className="flex items-center text-gray-500 text-lg mb-3">
                  <span className="flex items-center mr-4 gap-2 ">
                    <img src="src/assets/icon-4.7070ef7623ee616fcfb3cc0bcdf0f74a.svg" alt="" /> {article.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <img src="src/assets/icon-5.c9044b90a299f752265a5c8b45e30ede.svg" alt="" /> {article.comments} Cmnts
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-dark mb-4 hover:text-primary transition-all ease-in-out duration-700 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-lg mb-4">
                  {article.description}
                </p>
                <a
                  href="#"
                  className="text-primary font-semibold text-lg"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default News;
