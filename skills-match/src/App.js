import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm'; // Ensure this import is present
import Dashboard from './components/Dashboard'; // Adjust the path if necessary



function App() {
  return (
    <Router>
      <Routes>
  
    
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}


export default App;
