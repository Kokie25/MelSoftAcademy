// src/components/UserProfile.js
import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Contact:</strong> {user.contact}</p>
      <p>Location: {user.location}</p> {/* Display location */}
    </div>
  );
}

export default UserProfile;
