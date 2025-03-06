import React from "react";
import { useState } from "react";


function App() {
  const [open, setOpen] = useState(false);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      

      <button onClick={() => setOpen(true)} className="px-2 py-2 font-semibold text-white bg-gray-400 rounded-lg shadow-md hover:bg-gray-400">Submit</button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-3xl transition-opacity duration-100 all-ease-in-out" onClick={() => setOpen(false)}>
          <div className="w-96 p-10 bg-white rounded-lg shadow-lg transition-transform duration-1000 scale-100" onClick={(e) => e.stopPropagation()}  >
            <div className="px-28">
              <img src="src/assets/check.png" alt="" height={70} width={70} />
            </div>
            <h2 className="text-xl font-bold text-green-600 text-center">Successfull</h2>
            <p className="mt-4 text-green-600 text-wrap text-center pb-7">Account has been Successfull registered.</p>
            <button onClick={() => setOpen(false)} className="px-36 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600">OK</button>
          </div>
        </div>
      )}
    </div>
  );

}

export default App
