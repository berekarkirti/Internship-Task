import React from "react";
import { FaClock, FaComment, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeProvider";


const Blog = () => {
  const { theme, toggleTheme } = useTheme();

  const BlogData = [
    {
        img: "src/assets/img-1.jpg",
        tag: "Wow",
        title: "Simple Salad Recipe ever",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        time: "6 min ago",
        comments: "39 comments"
    },
    {
        img: "src/assets/img-2.jpeg",
        tag: "Nice",
        title: "Best FastFood Ideas(Yummy)",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        time: "10 days ago",
        comments: "0 comments"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNipDJgQvFXQXxncqLMGp9_J0YXQVQolmwU0jcqih7qJvbM8H-LQc-e2M&s",
        tag: "Ohh",
        title: "Why to eat salad ?",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        time: "45 min ago",
        comments: "2 comments"
    },
    {
        img: "src/assets/img-1.jpg",
        tag: "Yummy",
        title: "Best FastFood Ideas(Yummy)",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        time: "1 month ago",
        comments: "10 comments"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNipDJgQvFXQXxncqLMGp9_J0YXQVQolmwU0jcqih7qJvbM8H-LQc-e2M&s",
        tag: "Good",
        title: "Simple Salad Recipe ever",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        time: "6 month ago",
        comments: "5 comments"
    },
    {
        img: "src/assets/img-2.jpeg",
        tag: "Like it !",
        title: "Why to eat salad ?",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
        time: "2 sec ago",
        comments: "71 comments"
    }

  ];

  return (
    <div className={`min-h-screen ${ theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} transition-colors duration-300`}>
    

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl place-items-center px-4 sm:px-6 lg:px-16 py-8 lg:py-16 overflow-hidden">
        {BlogData.map((blog, index) => (
        <div className="relative h-[] w-full max-w-sm border-gray-600 dark:border dark:border-gray shadow-2xl text-center flex flex-col items-center overflow-hidden rounded-lg" key={index}>
            <div className="relative h-auto w-full">
                <span className="absolute top-4 left-4 bg-white text-black font-medium px-4 py-2 rounded-md">{blog.tag}</span>
                <img src={blog.img} alt={blog.title} className="w-full h-64 sm:h-72 object-cover"/>
            </div>
    
            <div className="px-6 py-4 text-justify">
                <h3 className="text-lg sm:text-xl font-bold ">
                    {blog.title}
                </h3>
                <p className="h-[70px] text-sm sm:text-base  mt-2">
                    {blog.description}
                </p>
            </div>
    
            <div className="bg-secondary px-6 py-4 flex flex-wrap items-center justify-between gap-y-2 w-full">
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600"><FaClock />{blog.time}</div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600"><FaComment />{blog.comments}</div>
            </div>
        </div>
        ))}
      </div>
  
    </div>
  );
};

export default Blog;
