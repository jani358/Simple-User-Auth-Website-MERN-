import React from 'react';

function Home() {
  return (
    <div className='w-full h-screen bg-gray-900 text-white flex justify-center items-center'>
      <div className="text-center">
        <h2 className='text-3xl font-semibold'>Welcome to MERN Auth</h2>
        <p className="mt-4 text-lg">The secure authentication system built with the MERN stack.</p>
        <p className="mt-2 text-lg">Sign up or log in to access your account.</p>
      </div>
    </div>
  );
}

export default Home;
