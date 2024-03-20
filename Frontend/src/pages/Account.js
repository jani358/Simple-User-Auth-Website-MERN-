import React from 'react';

function Account() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <div className='w-full h-screen bg-gray-900 text-white flex justify-center items-center'>
      <div className='text-center'>
        <h2 className='text-3xl mb-4 font-semibold'>ACCOUNT</h2>
        {/* <button
          className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300'
          onClick={handleLogout}
        >
          Logout
        </button> */}
      </div>
    </div>
  );
}

export default Account;
