import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm'; // Ensure this import is present
import Dashboard from './components/Dashboard'; // Adjust the path if necessary
import LandingPage from './components/LandingPage'; 
import Profile from './components/Profile'; 





function App() {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<LandingPage/>} />
        <Route path="/App" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </Router>
  );
}


export default App;
