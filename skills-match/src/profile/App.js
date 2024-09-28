import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm'; // Import Registration Form
import EditProfile from './components/EditProfile'; // Import Edit Profile

function App() {
  const [isRegistered, setIsRegistered] = useState(false); // State to toggle between forms

  const handleRegistrationComplete = () => {
    setIsRegistered(true); // Once registered, switch to Edit Profile
  };

  return (
    <div className="App">
      {/* Conditional rendering based on registration status */}
      {isRegistered ? (
        <EditProfile /> // Show the edit profile form once registered
      ) : (
        <RegistrationForm onRegister={handleRegistrationComplete} /> // Show registration form initially
      )}
    </div>
  );
}

export default App;
