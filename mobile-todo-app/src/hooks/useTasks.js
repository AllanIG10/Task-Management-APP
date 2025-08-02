import { useState, useEffect } from 'react';
import { TASK_STATUS, TASK_PRIORITY } from '../utils/constants';
import { filterTasks } from '../utils/helpers';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState(null);

  useEffect(() => {
    const filtered = filterTasks(tasks, searchQuery, activeFilter, priorityFilter);
    setFilteredTasks(filtered);
  }, [tasks, searchQuery, activeFilter, priorityFilter]);

  const loadSampleTasks = () => {
    const sampleTasks = [
      {
        id: '1',
        title: 'Complete hackathon project',
        description: 'Build a fully functional todo app with React Native',
        priority: TASK_PRIORITY.HIGH,
        status: TASK_STATUS.OPEN,
        dueDate: '2025-08-03',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Review Flutter documentation',
        description: 'Go through the latest Flutter docs for mobile development',
        priority: TASK_PRIORITY.MEDIUM,
        status: TASK_STATUS.OPEN,
        dueDate: '2025-08-04',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        title: 'Setup development environment',
        description: 'Install and configure all necessary tools',
        priority: TASK_PRIORITY.LOW,
        status: TASK_STATUS.COMPLETED,
        dueDate: '2025-08-01',
        createdAt: new Date().toISOString()
      }
    ];
    setTasks(sampleTasks);
  };

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
      status: TASK_STATUS.OPEN,
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [newTask, ...prev]);
    return newTask;
  };

  const updateTask = (taskId, updates) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, ...updates, updatedAt: new Date().toISOString() }
        : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { 
            ...task, 
            status: task.status === TASK_STATUS.OPEN 
              ? TASK_STATUS.COMPLETED 
              : TASK_STATUS.OPEN,
            updatedAt: new Date().toISOString()
          }
        : task
    ));
  };

  const getStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === TASK_STATUS.COMPLETED).length;
    const active = tasks.filter(t => t.status === TASK_STATUS.OPEN).length;
    const overdue = tasks.filter(t => 
      t.status === TASK_STATUS.OPEN && 
      t.dueDate && 
      new Date(t.dueDate) < new Date()
    ).length;

    return { total, completed, active, overdue };
  };

  return {
    tasks,
    filteredTasks,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    priorityFilter,
    setPriorityFilter,
    loadSampleTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    getStats
  };
};