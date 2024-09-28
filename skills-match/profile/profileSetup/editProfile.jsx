import React, { useState, useEffect } from 'react';

const EditProfile = () => {
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

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile data in localStorage or backend
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile updated!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Pre-filled form inputs */}
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditProfile;
