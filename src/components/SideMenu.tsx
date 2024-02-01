import React from 'react';

const SideBar = () => {
  return (
    <div className='h-screen m-4 bg-white border border-zinc-300 min-w-full'>
      <div className="flex items-center justify-center h-16 bg-gray-200">
        <h1 className="text-xl font-bold">Sidebar</h1>
      </div>
      <div className="p-4">
        <p>Some sidebar content goes here.</p>
      </div>
    </div>
  );
};

export default SideBar;
