'use client';

import { useState } from 'react';
import { loginUser } from '@/lib/strapi';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const res = await loginUser(formData);
      localStorage.setItem('token', res.data.jwt);
      router.push('/product');
    } 
    catch (err) 
    {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email or Username</label>
            <input type="text" name="identifier" onChange={handleChange} placeholder="Enter your email or username" required autoComplete="name" className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" required autoComplete="password" className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-200" >Login</button>
        </form>
        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
