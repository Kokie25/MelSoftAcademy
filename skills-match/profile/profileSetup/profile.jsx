import React, { useState } from 'react';

const RegistrationForm = () => {
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

  // Handle change in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProfile({ ...profile, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile to localStorage (or send to backend API)
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Profile saved!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>

      <label>Fullnames:</label>
      <input
        type="text"
        name="fullName"
        value={profile.fullName}
        onChange={handleInputChange}
        required
      />

      <label>Contact Numbers:</label>
      <input
        type="tel"
        name="contactNumber"
        value={profile.contactNumber}
        onChange={handleInputChange}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={profile.password}
        onChange={handleInputChange}
        required
      />

      <label>Skills:</label>
      <input
        type="text"
        name="skills"
        value={profile.skills}
        onChange={handleInputChange}
        required
      />

      <label>Location:</label>
      <input
        type="text"
        name="location"
        value={profile.location}
        onChange={handleInputChange}
        required
      />

      <label>Upload ID:</label>
      <input type="file" name="id" onChange={handleFileChange} required />

      <label>Upload CV:</label>
      <input type="file" name="cv" onChange={handleFileChange} required />

      <label>Upload Driver's License:</label>
      <input type="file" name="driversLicense" onChange={handleFileChange} required />

      <label>Upload Highest Qualification:</label>
      <input type="file" name="qualification" onChange={handleFileChange} required />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
