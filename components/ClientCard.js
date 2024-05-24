import React from 'react';

const ClientCard = ({ client, onClick, onDelete }) => {
  return (
    <div 
      className="bg-white p-6 shadow rounded-lg cursor-pointer hover:shadow-lg transition-shadow relative" 
      onClick={() => onClick(client)}
    >
      <h3 className="font-bold text-gray-800 mb-2 text-lg">{client.name}</h3>
      <p className="text-gray-600 mb-4">{client.projects} Projects - {client.hours} h</p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              {client.progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div style={{ width: `${client.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
        </div>
      </div>
      <button 
        onClick={(e) => { e.stopPropagation(); onDelete(client.id); }} 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ClientCard;
