// Task Status and Priority Enums
export const TASK_STATUS = {
  OPEN: 'open',
  COMPLETED: 'completed'
};

export const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

export const PRIORITY_COLORS = {
  [TASK_PRIORITY.HIGH]: 'border-red-500 bg-red-50',
  [TASK_PRIORITY.MEDIUM]: 'border-yellow-500 bg-yellow-50',
  [TASK_PRIORITY.LOW]: 'border-green-500 bg-green-50'
};

export const PRIORITY_LABELS = {
  [TASK_PRIORITY.HIGH]: { label: 'High', color: 'text-red-600 bg-red-100' },
  [TASK_PRIORITY.MEDIUM]: { label: 'Medium', color: 'text-yellow-600 bg-yellow-100' },
  [TASK_PRIORITY.LOW]: { label: 'Low', color: 'text-green-600 bg-green-100' }
};

// Mock Social Login Providers
export const SOCIAL_PROVIDERS = [
  { id: 'google', name: 'Google', color: 'bg-red-500', icon: '🔴' },
  { id: 'apple', name: 'Apple', color: 'bg-black', icon: '🍎' },
  { id: 'facebook', name: 'Facebook', color: 'bg-blue-600', icon: '📘' },
];