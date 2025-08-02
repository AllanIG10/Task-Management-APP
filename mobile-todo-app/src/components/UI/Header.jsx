import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ user, onMenuToggle, onProfileClick }) => {
  return (
    <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <button
          onClick={onMenuToggle}
          className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h1 className="font-bold text-lg">Hello, {user?.name?.split(' ')[0]}!</h1>
          <p className="text-blue-100 text-sm">Let's get things done</p>
        </div>
      </div>
      <button
        onClick={onProfileClick}
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500"
      >
        <img src={user?.avatar} alt="Profile" className="w-full h-full object-cover" />
      </button>
    </div>
  );
};

export default Header;