import React from 'react';
import { FaClock,FaComment } from "react-icons/fa";
const Blog = () => {
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
        // <div className="flex flex-wrap max-w-8xl mx-auto gap-10 justify-center py-16">
        //     {BlogData.map((blog, index) => (
        //         <div className="relative h-[550px] w-[490px] border shadow-2xl  text-center flex flex-col items-center overflow-hidden rounded-lg" key={index}>
        //             <div className="h-[300px] w-full">
        //                 <span className="absolute inline-block bg-primary text-white text-justify font-medium mt-4 px-8 py-3 rounded-md mb-9 ml-28">{blog.tag}</span>
        //                 <img src={blog.img} a lt={blog.title} className="h-72 w-full object-cover"/>
        //             </div>
        //             <div className="h-[180px] px-8 py-8 mb-5 text-justify">
        //                 <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{blog.title}</h3>
        //                 <p className="text-base sm:text-lg text-gray-500 mt-2">{blog.description}</p>
        //             </div> 
        //             <div className="h-[70px] bg-secondary px-8 py-5 flex flex-wrap items-center justify-between gap-y-2 w-full ">
        //                 <div className="flex justify-start items-center gap-2 text-lg text-gray-600"><FaClock />{blog.time}</div>
        //                 <div className="flex justify-end items-center gap-2 text-lg text-gray-600"><FaComment />{blog.comments}</div>
        //             </div>
        //         </div>
        //     ))}
        // </div>
 

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl place-items-center px-4 sm:px-6 lg:px-16 py-8 lg:py-16 overflow-hidden">
        {BlogData.map((blog, index) => (
        <div
            className="relative h-[] w-full max-w-sm border shadow-2xl text-center flex flex-col items-center overflow-hidden rounded-lg"
            key={index}
        >
            {/* Image Section */}
            <div className="relative h-auto w-full">
            <span className="absolute top-4 left-4 bg-primary text-white font-medium px-4 py-2 rounded-md">
                {blog.tag}
            </span>
            <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 sm:h-72 object-cover"
            />
            </div>
    
            {/* Text Section */}
            <div className="px-6 py-4 text-justify">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {blog.title}
            </h3>
            <p className="h-[70px] text-sm sm:text-base text-gray-500 mt-2">
                {blog.description}
            </p>
            </div>
    
            {/* Footer Section */}
            <div className="bg-secondary px-6 py-4 flex flex-wrap items-center justify-between gap-y-2 w-full">
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                <FaClock />
                {blog.time}
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                <FaComment />
                {blog.comments}
            </div>
            </div>
        </div>
        ))}
  </div>
  


    );
};

export default Blog;






















// import React from 'react';

// const Blog = () => {
//     const BlogData = [
//         {
//             img: "src/assets/img-1.jpg",
//             tag: "Wow",
//             title: "Simple Salad Recipe ever",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
//         },
//         {
//             img: "src/assets/img-2.jpeg",
//             tag: "Nice",
//             title: "Best FastFood Ideas(Yummy)",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
//         },
//         {
//             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNipDJgQvFXQXxncqLMGp9_J0YXQVQolmwU0jcqih7qJvbM8H-LQc-e2M&s",
//             tag: "Ohh",
//             title: "Why to eat salad ?",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
//         },
//         {
//             img: "src/assets/img-1.jpg",
//             tag: "Yummy",
//             title: "Best FastFood Ideas(Yummy)",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
//         },
//         {
//             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNipDJgQvFXQXxncqLMGp9_J0YXQVQolmwU0jcqih7qJvbM8H-LQc-e2M&s",
//             tag: "Good",
//             title: "Simple Salad Recipe ever",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
//         },
//         {
//             img: "src/assets/img-2.jpeg",
//             tag: "Like it !",
//             title: "Why to eat salad ?",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
//         },
//     ];

//     return (
//         <div className="flex flex-wrap max-w-8xl mx-auto gap-10 justify-center py-16">
//             {BlogData.map((blog, index) => (
//                 <div
//                     className="relative h-[550px] w-[90%] sm:w-[490px] border shadow-2xl text-center flex flex-col items-center overflow-hidden rounded-lg"
//                     key={index}
//                 >
//                     <div className="h-[300px] w-full relative">
//                         <span className="absolute inline-block bg-primary text-white font-medium mt-4 px-8 py-3 rounded-md">
//                             {blog.tag}
//                         </span>
//                         <img
//                             src={blog.img}
//                             alt={blog.title}
//                             className="h-full w-full object-cover"
//                         />
//                     </div>
//                     <div className="px-6 py-6 text-left">
//                         <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
//                             {blog.title}
//                         </h3>
//                         <p className="text-base sm:text-lg text-gray-500 mt-2">
//                             {blog.description}
//                         </p>
//                     </div>
//                     <div className="grid-rows-1 bg-secondary px-4 py-4 flex flex-wrap items-center justify-between gap-y-2 w-full">
//                         <span className="flex justify-start items-center">hello</span>
//                         <span className="flex justify-end items-center">bye</span>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Blog;
