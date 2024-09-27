import './App.css';
import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    contacts: '',
    password: '',
    skills: '',
    id: null,
    cv: null,
    driversLicense: null,
    highestqualification:null,
  });

  const [uploadStatus, setUploadStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0], 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.id || !formData.cv || !formData.driversLicense || !formData. highestqualification) {
      setUploadStatus('Please fill in all required fields and upload all required documents.');
      return;
    }

    
    console.log('Form Data Submitted:', formData);

    
    const formSubmissionData = new FormData();
    formSubmissionData.append('username', formData.username);
    formSubmissionData.append('contacts', formData.contacts);
    formSubmissionData.append('password', formData.password);
    formSubmissionData.append('skills', formData.skills);
    formSubmissionData.append('id', formData.id);
    formSubmissionData.append('cv', formData.cv);
    formSubmissionData.append('driversLicense', formData.driversLicense);
    formSubmissionData.append('highestqualification', formData.highestqualification);


    setUploadStatus('Form and documents are ready for upload. You can now connect to your backend.');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="username">Fullnames:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contacts">Contact Numbers:</label>
            <input
              type="text"
              id="contacts"
              name="contacts"
              value={formData.contacts}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>

          <h2>Upload Your Documents</h2>

          <div className="form-group">
            <label htmlFor="id">Upload ID:</label>
            <input
              type="file"
              id="id"
              name="id"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cv">Upload CV:</label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="driversLicense">Upload Driver's License:</label>
            <input
              type="file"
              id="driversLicense"
              name="driversLicense"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="highestqualification">Upload highest qualification:</label>
            <input
              type="file"
              id="highestqualification"
              name="highestqualification"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit">Submit Registration and Upload Documents</button>
        </form>

        <p>{uploadStatus}</p>
      </header>
    </div>
  );
}

export default RegistrationForm;
