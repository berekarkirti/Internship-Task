'use client';

import { decrement, increment } from '@/redux/exampleSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Home1() {
  const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center justify-center text-black">
      <h1 className="text-3xl font-bold mb-6">Counter: {value}</h1>
      <div className="space-x-4">
        <button
          disabled={value >= 10}
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow transition duration-200"
        >
          Increment
        </button>
        <button
          disabled={value <= 0}
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded shadow transition duration-200"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
