'use client'

import React from "react";

const ErrorPage = () => {
  return (
    <div className='min-h-screen bg-yellow-400 flex items-center justify-center'>
      <h1 className='text-4xl font-bold'>Error: Invalid Product ID</h1>
      <p>Please select a valid product.</p>
    </div>
  );
};

export default ErrorPage;
