import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const ProfileScreen = () => {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <div className="bg-white shadow p-4 rounded-xl">
        <p className="mb-2"><strong>Username:</strong> {user?.name || "Guest"}</p>
        <p className="mb-2"><strong>Email:</strong> {user?.email || "Not Available"}</p>
        <p><strong>Status:</strong> {user ? "Logged In" : "Guest"}</p>
      </div>
    </div>
  );
};

export default ProfileScreen;
