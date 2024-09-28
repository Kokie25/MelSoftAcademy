import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import the CSS file
import ProfileIcon from './ProfileIcon'; // Correctly import ProfileIcon

function Dashboard() {
  const [location, setLocation] = useState(null);
  const [locationOptions, setLocationOptions] = useState([]);
  const [jobDetails, setJobDetails] = useState({});
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [jobs, setJobs] = useState([]);

  // Simulate fetching job recommendations from a database
  const fetchJobs = (location, jobTitle = "", jobDescription = "") => {
    // Simulate an API call to fetch jobs based on the location and job details
    const simulatedJobs = [
      { id: 1, title: 'Plumber', description: 'Fixes pipes', location: 'Johannesburg' },
      { id: 2, title: 'Electrician', description: 'Fixes electrical issues', location: 'Cape Town' },
      { id: 3, title: 'Carpenter', description: 'Works with wood', location: 'Durban' },
      { id: 4, title: 'Software Developer', description: 'Builds apps', location: 'Pretoria' },
      { id: 5, title: 'Doctor', description: 'Medical professional', location: 'Port Elizabeth' },
    ];
  
    // Filter jobs by location and match job title
    const filteredJobs = simulatedJobs.filter(job =>
      job.location === location && job.title.toLowerCase().includes(jobTitle.toLowerCase())
    );
  
    setJobs(filteredJobs);
  };

  const handleGetRecommendation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Latitude:', latitude, 'Longitude:', longitude);
          setLocation('Johannesburg'); 
          fetchJobs('Johannesburg', jobDetails.jobTitle, jobDetails.jobDescription);
        },
        (error) => {
          console.error('Error getting location:', error);
          setShowLocationDropdown(true); 
        }
      );
    } else {
      setShowLocationDropdown(true); 
    }
  };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
    fetchJobs(selectedLocation, jobDetails.jobTitle, jobDetails.jobDescription);
  };

  const handleJobDetailChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.id]: e.target.value
    });
  };

  useEffect(() => {
    const simulatedLocations = ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'];
    setLocationOptions(simulatedLocations);
  }, []);

  return (
    <div className="Dashboard-app">
      <header>
        <div className="brand">
          <h1 className="appName">Work Wire</h1>
        </div>
        <ProfileIcon />
      </header>
      <main>
        <section className="hero">
          <h1>Post a Job and Find the Perfect Worker</h1>
          <p>Fill in the details below to post your job and get matched with workers</p>

          {/* Job Posting Form */}
          <form>
            <div className="formGroup">
              <label htmlFor="jobTitle">Job Title</label>
              <input 
                type="text" 
                id="jobTitle" 
                placeholder="Enter job title" 
                onChange={handleJobDetailChange}
                required 
              />
            </div>

            <div className="formGroup">
              <label htmlFor="jobDescription">Job Description</label>
              <input
                type='text'
                id="jobDescription" 
                placeholder="Describe the job" 
                onChange={handleJobDetailChange}
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="location">Location</label>
              <input 
                type="text" 
                id="location" 
                placeholder="Enter job location" 
                required 
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submitButton">Post Job</button>
          </form>

          {/* Get Recommendation Button */}
          <button 
            type="button" 
            className="rec" 
            onClick={handleGetRecommendation}
          >
            Get Recommendation
          </button>

          {/* Dropdown for manual location selection */}
          {showLocationDropdown && (
            <div className="location-dropdown">
              <label htmlFor="manualLocation">Select Your Location:</label>
              <select id="manualLocation" onChange={handleLocationChange}>
                <option value="">Select a location</option>
                {locationOptions.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          )}

          {/* Display fetched job recommendations */}
          {jobs.length > 0 && (
            <div className="job-recommendations">
              <h2>Job Recommendations</h2>
              <ul>
                {jobs.map(job => (
                  <li key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Work Wire</p>
      </footer>
    </div>
  );
}

export default Dashboard;
