import React from 'react';
import Styles from './styles.module.css'; // Import CSS module

function App() {
  return (
    <div className={Styles.App}> {/* Apply styles using Styles object */}
      <header>
      <div className={Styles.brand}>
          <h1 className={Styles.appName}>Work Wire</h1>
        </div>
        <nav className={Styles.nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={Styles.hero}> {/* Apply styles to hero section */}
        <h1>Post a Job and Find the Perfect Worker</h1>  {/* Updated h1 */}
          <p>Fill in the details below to post your job and get matched with workers</p>
          
          {/* Job Posting Form */}
          <form>
            <div className={Styles.formGroup}>
              <label htmlFor="jobTitle">Job Title</label>
              <input 
                type="text" 
                id="jobTitle" 
                placeholder="Enter job title" 
                required 
              />
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="jobDescription">Job Description</label>
              <textarea 
                id="jobDescription" 
                placeholder="Describe the job" 
                required
              />
            </div>

            <div className={Styles.formGroup}>
              <label htmlFor="location">Location</label>
              <input 
                type="text" 
                id="location" 
                placeholder="Enter job location" 
                required 
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className={Styles.submitButton}>Post Job</button> {/* Changed to a Submit button */}
          </form>
        </section>
      </main>
      <footer className={Styles.footer}>
        <p>&copy; 2024 Work Wire</p>
      </footer>
    </div>
  );
}

export default App;







