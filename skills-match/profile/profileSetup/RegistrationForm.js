
import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [profile, setProfile] = useState({
    fullName: '',
    contactNumber: '',
    password: '',
    skills: '',
    location: '',
    id: null,
    cv: null,
    driversLicense: null,
    qualification: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data in localStorage or backend
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile saved!');
    
    // Call the callback to signal registration completion
    onRegister();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
