import React from 'react';

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 mb-4">
      {['all', 'completed', 'pending'].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-1 rounded ${
            filter === type
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
