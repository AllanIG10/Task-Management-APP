import React from 'react';
import { Check } from 'lucide-react';
import { SOCIAL_PROVIDERS } from '../../utils/constants';

const LoginScreen = ({ onLogin, isLoading }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue to your tasks</p>
        </div>

        <div className="space-y-4">
          {SOCIAL_PROVIDERS.map(provider => (
            <button
              key={provider.id}
              onClick={() => onLogin(provider)}
              disabled={isLoading}
              className={`w-full h-12 ${provider.color} ${
                provider.id === 'google' ? 'bg-white border border-gray-300 text-gray-700' : 'text-white'
              } rounded-lg font-medium flex items-center justify-center space-x-3 transition-all duration-200 hover:scale-105 disabled:opacity-50`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="text-xl">{provider.icon}</span>
                  <span>Continue with {provider.name}</span>
                </>
              )}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;