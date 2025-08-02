import React from 'react';
import { Check } from 'lucide-react';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
      <div className="text-center text-white animate-pulse">
        <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
          <Check className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Todo Manager</h1>
        <p className="text-lg opacity-90">Stay organized & productive</p>
        <div className="mt-8">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;