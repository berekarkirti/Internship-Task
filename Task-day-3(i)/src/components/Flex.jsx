// import React from "react";

// const PinterestGrid = () => {
//   const data = [
//     {content: "1", height: "h-48", bg: "bg-red-400" },
//     {content: "2", height: "h-64", bg: "bg-blue-400" },
//     {content: "3", height: "h-40", bg: "bg-green-400" },
//     {content: "4", height: "h-56", bg: "bg-yellow-400" },
//     {content: "5", height: "h-200", bg: "bg-purple-400" },
//     {content: "6", height: "h-60", bg: "bg-pink-400" },
//     {content: "7", height: "h-40", bg: "bg-green-400" },
//     {content: "8", height: "h-56", bg: "bg-yellow-400" },
//     {content: "9", height: "h-72", bg: "bg-purple-400" },
//     {content: "10", height: "h-48", bg: "bg-red-400" },
//     {content: "11", height: "h-64", bg: "bg-blue-400" },
//     {content: "12", height: "h-40", bg: "bg-green-400" },
//     {content: "13", height: "h-56", bg: "bg-yellow-400" },
//     {content: "14", height: "h-50", bg: "bg-purple-400" },
//     {content: "15", height: "h-60", bg: "bg-pink-400" },
//     {content: "16", height: "h-64", bg: "bg-blue-400" },
//     {content: "17", height: "h-40", bg: "bg-green-400" },
//     {content: "18", height: "h-56", bg: "bg-yellow-400" },
//     {content: "19", height: "h-72", bg: "bg-purple-400" },
//     {content: "20", height: "h-30", bg: "bg-pink-400" },
//   ];

//   return (
//     <div className="p-8 ">
//       <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
//         {data.map((item,index) => (
//            <div key={item.index}>   
//            className={`mb-4 ${item.height} ${item.bg} text-white rounded-lg p-4 shadow-md flex items-center justify-center`}
//             <img src={data.image} alt={data.content} />
//             {item.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PinterestGrid;


import React from "react";

const PinterestGrid = () => {
  const data = [
    { content: "1", height: "h-48", image: "https://i.pinimg.com/736x/3c/c3/fd/3cc3fdca908d04592e76b4500e4e084a.jpg" },
    { content: "2", height: "h-64", image: "https://i.pinimg.com/474x/b5/a6/a3/b5a6a35667214bae80cdefc67066dd3c.jpg" },
    { content: "3", height: "h-40", image: "https://i.pinimg.com/474x/07/d0/41/07d041580461aa59b35ff1ae06bdc18f.jpg" },
    { content: "4", height: "h-56", image: "https://i.pinimg.com/474x/7f/76/96/7f7696a881203c13766fb044b6a94722.jpg" },
    { content: "5", height: "h-72", image: "https://i.pinimg.com/474x/a6/7a/82/a67a82b2065c3d5da9887483fa41bea5.jpg" },
    { content: "6", height: "h-60", image: "https://i.pinimg.com/474x/9b/e9/bf/9be9bfff2844072c8ccf99063a5740c7.jpg" },
    { content: "7", height: "h-80", image: "https://i.pinimg.com/474x/ab/61/b4/ab61b45adff051e01b9847a04ccfdffb.jpg" },
    { content: "8", height: "h-56", image: "https://i.pinimg.com/474x/d6/f6/80/d6f6803abba284514a06254e29f5c3d0.jpg" },
    { content: "9", height: "h-72", image: "https://i.pinimg.com/474x/04/7e/10/047e10fcf635409ba03e17c6d80dcd34.jpg" },
    { content: "10", height: "h-48", image: "https://i.pinimg.com/474x/2f/34/b5/2f34b5660701136edcb04474567251dd.jpg" },
    { content: "11", height: "h-64", image: "https://i.pinimg.com/474x/e8/29/53/e82953455125c90915c1ddc25a9cf4b0.jpg" },
    { content: "12", height: "h-40", image: "https://i.pinimg.com/474x/ed/c2/e3/edc2e398d5940b966916fd214fc6a66c.jpg" },
    { content: "13", height: "h-56", image: "https://i.pinimg.com/474x/63/37/70/633770316a3f1a34229da33355b34c76.jpg" },
    { content: "14", height: "h-80", image: "https://i.pinimg.com/474x/1b/1c/fc/1b1cfc0be18afc39dab619950f769db2.jpg" },
    { content: "15", height: "h-60", image: "https://i.pinimg.com/474x/1d/fb/90/1dfb906590c7a5628fdc8cee902decc5.jpg" },
    { content: "16", height: "h-64", image: "https://i.pinimg.com/474x/ab/d9/4b/abd94baeda8bb8828e29af2d6c63a15a.jpg" },
    { content: "17", height: "h-40", image: "https://i.pinimg.com/474x/eb/21/63/eb2163cf90cb7e98e560db894812905e.jpg" },
    { content: "18", height: "h-56", image: "https://i.pinimg.com/474x/00/c5/fd/00c5fd3957d027ba8c51b7efeeb62a87.jpg" },
    { content: "19", height: "h-72", image: "https://i.pinimg.com/474x/39/19/a1/3919a14bf4e779346da25ffc0c417048.jpg" },
    { content: "20", height: "h-130", image: "https://i.pinimg.com/474x/40/a1/98/40a198a4e16e64f04fcd12b288b3ff61.jpg" },
  ];

  return (
    <div className="p-8">
      <div className="columns-1 lg:columns-5 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`mb-4 ${item.height} text-white rounded-lg p-4 shadow-md flex items-center justify-center`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="bg-black bg-opacity-50 px-2 py-1 rounded">{item.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinterestGrid;
