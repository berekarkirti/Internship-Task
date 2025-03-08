// ON BUTTON CLICK:-

// import React, { useEffect, useState } from 'react';
// import StudentData from '../Data/StudentsData';
// import { FaClock, FaComment } from "react-icons/fa";

// const Scroll = () => {
//     const [paresent, setParesent] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const totalData = 10;

//     const otherData = () => {

//         setLoading(true);

//         setParesent(prevI => {
//             console.log("previous Index:",prevI);

//             const newI = prevI + totalData;
//             console.log("new Index: ",newI)

//             const final = newI < StudentData.length ? newI : prevI;
//             console.log("final Index:",final)

//             return final;
//         });

//         setLoading(false);

//     };

//     return (
//         <div className="">

//             {loading 
//                 ? 
//                 (<p>Loading....</p>)
//                 :
//                 (
//                     <button onClick={handleScroll} className="mt-4 p-2 bg-gray-500 text-white rounded">
//                         Load More
//                     </button>
//                 )}


//             {StudentData.slice(0, paresent + totalData).map((blog, index) => (
//                 <div className="shadow-lg h-52 w-52" key={index}> 
//                     <div className="px-6 py-4 text-justify">
//                         <p>{blog.id}</p>
//                         <h3 className="text-lg sm:text-xl font-bold text-gray-800">{blog.name}</h3>
//                         <p>{blog.age}</p>
//                         <p>{blog.grade}</p>
//                         <p className="text-gray-500">{blog.city}</p>
//                     </div>
//                     <div className="bg-secondary px-6 py-4 flex flex-wrap items-center justify-between gap-y-2 w-full">
//                         <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600"><FaClock /></div>
//                         <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600"><FaComment /></div>
//                     </div>
//                 </div>
//             ))}


//         </div>
//     );
// };

// export default Scroll;

// -------------------------------------------------------------------------------------------------------------------------------------

// ON SCROLL :-
import React, { useEffect, useState } from 'react';
import StudentData from '../Data/StudentsData';
import { FaClock, FaComment } from "react-icons/fa";

const Scroll = () => {
    const [present, setPresent] = useState(10);
    const [loading, setLoading] = useState(false);
    const totalData = 10;

    const loadMoreData = () => {
        if (loading || present >= StudentData.length) return;

        setLoading(true);

        setTimeout(() => {
            setPresent(prevI => Math.min(prevI + totalData, StudentData.length));
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (loading) return;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                loadMoreData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, present]);

    return (
        <div className="p-4">
            {StudentData.slice(0, present).map((student, index) => (
                <div className="shadow-lg h-52 w-52 mb-4" key={index}>
                    <div className="px-6 py-4 text-justify">
                        <p>{student.id}</p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{student.name}</h3>
                        <p>{student.age}</p>
                        <p>{student.grade}</p>
                        <p className="text-gray-500">{student.city}</p>
                    </div>
                    <div className="bg-secondary px-6 py-4 flex flex-wrap items-center justify-between gap-y-2 w-full">
                        <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600"><FaClock /></div>
                        <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600"><FaComment /></div>
                    </div>
                </div>
            ))}

            {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
        </div>
    );
};

export default Scroll;
