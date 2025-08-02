import React from 'react';

const Stats = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-3 p-4 bg-white">
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
        <div className="text-xs text-gray-500">Total</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
        <div className="text-xs text-gray-500">Done</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-600">{stats.active}</div>
        <div className="text-xs text-gray-500">Active</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-red-600">{stats.overdue}</div>
        <div className="text-xs text-gray-500">Overdue</div>
      </div>
    </div>
  );
};

export default Stats;