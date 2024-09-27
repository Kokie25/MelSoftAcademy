import React from 'react';
import styles from './styles.module.css'; // Import CSS module here

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Find Your Dream Job</h1>
          <p>Search and apply for jobs across Africa</p>
          <form>
            <input type="search" placeholder="Search jobs" />
            <button>Search</button>
          </form>
        </section>
        <section className="job-listings">
          <h2>Featured Jobs</h2>
          <ul>
            <li>
              <h3>Software Engineer</h3>
              <p>ABC Company, Lagos, Nigeria</p>
              <button>Apply</button>
            </li>
            <li>
              <h3>Marketing Manager</h3>
              <p>XYZ Corporation, Nairobi, Kenya</p>
              <button>Apply</button>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Work Wire</p>
      </footer>
    </div>
  );
}

export default App;






