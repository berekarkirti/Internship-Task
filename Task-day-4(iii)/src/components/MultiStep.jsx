import React, { useState } from 'react';

const MultiStep = () => {
    const [step, setStep] = useState(1);

    const total = 10;

    const handleN = () => 
    {
        if (step < total)
        {
            setStep(step + 1);
            console.log("When step increase :- ",step + 1);
        } 
    };

    const handleP = () =>
    {
        if (step > 1)
        {
           setStep(step - 1);
           console.log("When step decrease :- ",step - 1);
        };
    };

    const width = (step / total) * 100;
    console.log("Count width :- ",step - 1);

    return (
        <div className="m-24">
            <div className="h-4 w-full bg-gray-300 rounded-lg dark:bg-neutral-600 overflow-hidden mb-8">
                <div className="flex flex-col justify-center h-full bg-teal-500 transition-width duration-700 ease-in-out" style={{ width: `${width}%` }} />
            </div>
            <span className="text-center text-teal-500 font-semibold flex justify-center text-2xl">
                Number of Steps : {step}
            </span>
            <div className="flex justify-center gap-8 mt-6">
              <button onClick={handleP} className={`px-4 py-2 text-white rounded-sm ${ step === 1 ? 'bg-red-400 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-600 cursor-pointer'}`} disabled={step === 1}>-</button>
              <button onClick={handleN} className={`px-4 py-2 text-white rounded-sm ${ step === total ? 'bg-red-400 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-600 cursor-pointer'}`} disabled={step === total}>+</button>
            </div>
        </div>
    );
};

export default MultiStep;
