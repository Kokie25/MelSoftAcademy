import React from 'react';
import './Profile.css'; // Optional: CSS for Profile component
import icon from './profile-icon.png'; 

function Profile() {
  const userDetails = {
    fullName: 'Pulane Choshi',
    location: 'Johannesburg',
    contacts: '+1234567890',
  };

  return (
    <div className="profile-container">
        <img
        src={icon}
        alt="Profile"
        className="profile-img"
      />  
      <div className="profile-details">
        <p><strong>Full Name:</strong> {userDetails.fullName}</p>
        <p><strong>Location:</strong> {userDetails.location}</p>
        <p><strong>Contacts:</strong> {userDetails.contacts}</p>
      </div>
    </div>
  );
}

export default Profile;
