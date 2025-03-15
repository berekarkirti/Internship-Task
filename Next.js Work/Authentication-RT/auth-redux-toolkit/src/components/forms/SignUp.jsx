'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { signup } from '@/Redux/Authantication/authSlice';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    dispatch(signup({ email, password }));
    router.push('/Login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-teal-500">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-lg shadow-md" >
        <h2 className="mb-6 text-2xl font-semibold text-center text-teal-600">Sign Up</h2>
        <input type="em  placeholder= " value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
        <button type="submit" className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700">Sign Up</button>
      </form>
    </div>
  );
}
