import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name="Color"/>
   
  </React.StrictMode>
);
