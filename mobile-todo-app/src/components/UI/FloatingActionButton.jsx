import React from 'react';
import { Plus } from 'lucide-react';

const FloatingActionButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-110 z-30 flex items-center justify-center"
      style={{ boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)' }}
    >
      <Plus className="w-6 h-6" />
    </button>
  );
};

export default FloatingActionButton;