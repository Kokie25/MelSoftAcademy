import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // If you have a global stylesheet
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional for performance measuring

// Render the App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This references the <div id="root"></div> in index.html
);

// If you want to start measuring performance in your app, you can pass a function to log results
// or send them to an analytics endpoint.
reportWebVitals();
