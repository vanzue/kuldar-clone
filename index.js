import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// Create the root and render the application.  We wrap App in React.StrictMode
// to highlight potential problems during development.  In production this has
// no effect on behaviour.
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);