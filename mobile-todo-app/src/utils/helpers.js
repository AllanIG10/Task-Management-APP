export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

export const isOverdue = (dueDate, status) => {
  return dueDate && new Date(dueDate) < new Date() && status === 'open';
};

export const sortTasks = (tasks) => {
  return tasks.sort((a, b) => {
    // Completed tasks go to bottom
    if (a.status !== b.status) {
      return a.status === 'completed' ? 1 : -1;
    }
    
    // Sort by priority
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    if (a.priority !== b.priority) {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    
    // Sort by due date
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
};

export const filterTasks = (tasks, searchQuery, activeFilter, priorityFilter) => {
  let filtered = [...tasks];

  // Filter by search query
  if (searchQuery) {
    filtered = filtered.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter by status
  if (activeFilter !== 'all') {
    filtered = filtered.filter(task => 
      activeFilter === 'completed' 
        ? task.status === 'completed'
        : task.status === 'open'
    );
  }

  // Filter by priority
  if (priorityFilter) {
    filtered = filtered.filter(task => task.priority === priorityFilter);
  }

  return sortTasks(filtered);
};