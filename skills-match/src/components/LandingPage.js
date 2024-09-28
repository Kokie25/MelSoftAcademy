import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleGetStarted = () => {
        navigate('/App'); // Replace '/next-page' with your target route
    };

    return (
        <div className="LandingPage-App">
            <header>
                <h1 className="appName">Work Wire</h1>
            </header>

            <section className="hero">
                <h1>Welcome to Work Wire</h1>
                <h2>Find Your Next Opportunity</h2>
                <p>
                    At Workfire, we connect you with the right jobs quickly and easily. 
                    Whether you’re looking for a fresh start, a new role, or a completely different career, 
                    Workfire matches your skills with the best opportunities available.
                </p>
                <button className="submitButton" onClick={handleGetStarted}>Get Started</button>
            </section>

            <footer>
                <p>&copy; 2024 Work Wire. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
