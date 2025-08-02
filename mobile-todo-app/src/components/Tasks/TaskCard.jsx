import React from 'react';

const TaskCard = ({ task, onToggle, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center mb-3">
      <div>
        <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className={`text-xs px-3 py-1 rounded ${
            task.completed ? 'bg-green-500 text-white' : 'bg-yellow-400'
          }`}
        >
          {task.completed ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-xs bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
