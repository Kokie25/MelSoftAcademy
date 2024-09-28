import React from 'react';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  return (
    <div className="Dashboard-app">
      <header>
        <div className="brand">
          <h1 className="appName">Work Wire</h1>
        </div>
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
                required 
              />
            </div>

            <div className="formGroup">
              <label htmlFor="jobDescription">Job Description</label>
              <input
                type='text'
                id="jobDescription" 
                placeholder="Describe the job" 
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
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Work Wire</p>
      </footer>
    </div>
  );
}

export default Dashboard;
