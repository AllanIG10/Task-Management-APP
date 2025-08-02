import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const SettingsScreen = () => {
  const { logout } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default SettingsScreen;
