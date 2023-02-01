import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterDisplay from './CounterDisplay';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CounterDisplay/> */}
    <App />
  </React.StrictMode>
);