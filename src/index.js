import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ContextTheme}from './components/store/ContextTheme'
// import { AuthContext } from './components/store/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ContextTheme>
    <App />
    </ContextTheme>

  </React.StrictMode>
);

