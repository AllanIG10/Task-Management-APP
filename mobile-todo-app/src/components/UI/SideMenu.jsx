import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';

const SideMenu = ({ show, user, onClose, onProfileClick, onSettingsClick, onLogout }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}>
      <div className="w-80 bg-white h-full shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="p-6 bg-blue-600 text-white">
          <div className="flex items-center space-x-3">
            <img src={user?.avatar} alt="Profile" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-semibold">{user?.name}</h3>
              <p className="text-blue-200 text-sm">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <button
            onClick={onProfileClick}
            className="w-full flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </button>
          <button
            onClick={onSettingsClick}
            className="w-full flex items-center space-x-3 px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-6 py-3 text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>