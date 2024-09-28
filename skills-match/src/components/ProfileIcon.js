import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import icon from './profile-icon.png'; // Adjust the path as necessary
import './ProfileIcon.css'; // Optional: If you have specific styles for ProfileIcon

function ProfileIcon() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.profile-icon') === null) {
      closeDropdown();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleViewProfile = () => {
    navigate('/profile'); // Navigate to the profile page
    closeDropdown(); // Close dropdown after clicking
  };

  const handleJobHistory = () => {
    alert("Showing job history pop-up."); // Display a pop-up for job history
    closeDropdown(); // Close dropdown after clicking
  };

  return (
    <div className="profile-icon" onClick={toggleDropdown}>
      <img
        src={icon}
        alt="Profile"
        className="profile-icon-img"
      />
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={handleViewProfile}>View Profile</li>
            <li onClick={handleJobHistory}>Pop-up History</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileIcon;
