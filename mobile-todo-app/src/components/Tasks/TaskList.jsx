import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks available.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
