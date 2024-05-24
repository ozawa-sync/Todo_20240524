import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-screen p-5 shadow-md">
      <div className="text-blue-500 font-bold text-xl mb-8">todovu</div>
      <nav>
        <ul>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">Tasks</li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">Time</li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">Projects</li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">Clients</li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">Team</li>
          <li className="mb-4 text-gray-700 hover:text-blue-500 cursor-pointer">Billing</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
