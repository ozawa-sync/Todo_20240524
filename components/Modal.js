import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, client }) => {
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setVisible(true), 100); // 小さな遅延で開くアニメーションを開始
    } else {
      setVisible(false);
      setTimeout(() => setShowModal(false), 300); // モーダルを閉じるアニメーションの時間と一致させる
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-lg transition-transform transform duration-300 ${visible ? 'scale-100' : 'scale-95'}`}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{client.name}</h2>
        <div className="space-y-2">
          <p className="text-gray-700"><span className="font-medium">Projects:</span> {client.projects}</p>
          <p className="text-gray-700"><span className="font-medium">Hours:</span> {client.hours}</p>
          <p className="text-gray-700"><span className="font-medium">Progress:</span> {client.progress}%</p>
        </div>
        <button 
          onClick={onClose} 
          className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
