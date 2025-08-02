import { useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    
    // Simulate social login
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          provider: provider.name,
          avatar: `https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff`
        };
        setUser(newUser);
        setIsAuthenticated(true);
        setIsLoading(false);
        resolve(newUser);
      }, 1500);
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    isLoading,
    handleSocialLogin,
    handleLogout
  };
};