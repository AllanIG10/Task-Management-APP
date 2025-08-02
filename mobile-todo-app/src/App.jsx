import React, { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { useTasks } from './hooks/useTasks';

// Components
import SplashScreen from './components/Auth/SplashScreen';
import LoginScreen from './components/Auth/LoginScreen';
import Header from './components/UI/Header';
import Stats from './components/UI/Stats';
import TaskFilters from './components/Tasks/TaskFilters';
import TaskList from './components/Tasks/TaskList';
import TaskForm from './components/Tasks/TaskForm';
import FloatingActionButton from './components/UI/FloatingActionButton';
import SideMenu from './components/UI/SideMenu';
import ProfileScreen from './components/Screens/ProfileScreen';
import SettingsScreen from './components/Screens/SettingsScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const auth = useAuth();
  const tasks = useTasks();

  // Initialize App
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setCurrentScreen('login');
    }, 2000);
  }, []);

  const handleLogin = async (provider) => {
    await auth.handleSocialLogin(provider);
    setCurrentScreen('home');
    tasks.loadSampleTasks();
  };

  const handleLogout = () => {
    auth.handleLogout();
    setCurrentScreen('login');
    setShowMenu(false);
  };

  const handlePullToRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const startEdit = (task) => {
    setEditingTask(task);
  };

  const closeForm = () => {
    setShowAddForm(false);
    setEditingTask(null);
  };

  // Splash screen
  if (currentScreen === 'splash') {
    return <SplashScreen />;
  }

  // Login screen
  if (currentScreen === 'login') {
    return (
      <LoginScreen 
        onLogin={handleLogin}
        isLoading={auth.isLoading}
      />
    );
  }

  // Profile screen
  if (currentScreen === 'profile') {
    return (
      <ProfileScreen 
        user={auth.user}
        stats={tasks.getStats()}
        onBack={() => setCurrentScreen('home')}
      />
    );
  }

  // Settings screen
  if (currentScreen === 'settings') {
    return (
      <SettingsScreen 
        onBack={() => setCurrentScreen('home')}
      />
    );
  }

  // Home screen
  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col">
      <Header 
        user={auth.user}
        onMenuToggle={() => setShowMenu(!showMenu)}
        onProfileClick={() => setCurrentScreen('profile')}
      />
      
      <Stats stats={tasks.getStats()} />
      
      <TaskFilters 
        searchQuery={tasks.searchQuery}
        onSearchQueryChange={tasks.setSearchQuery}
        activeFilter={tasks.activeFilter}
        onActiveFilterChange={tasks.setActiveFilter}
        priorityFilter={tasks.priorityFilter}
        onPriorityFilterChange={tasks.setPriorityFilter}
      />
      
      <TaskList 
        tasks={tasks.filteredTasks}
        onToggleStatus={tasks.toggleTaskStatus}
        onEdit={startEdit}
        onDelete={tasks.deleteTask}
        refreshing={refreshing}
        onPullToRefresh={handlePullToRefresh}
        totalTasks={tasks.tasks.length}
      />
      
      <FloatingActionButton 
        onClick={() => setShowAddForm(true)}
      />
      
      {(showAddForm || editingTask) && (
        <TaskForm 
          task={editingTask}
          onSubmit={editingTask ? tasks.updateTask : tasks.addTask}
          onClose={closeForm}
        />
      )}
      
      <SideMenu 
        show={showMenu}
        user={auth.user}
        onClose={() => setShowMenu(false)}
        onProfileClick={() => {
          setCurrentScreen('profile');
          setShowMenu(false);
        }}
        onSettingsClick={() => {
          setCurrentScreen('settings');
          setShowMenu(false);
        }}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default App;