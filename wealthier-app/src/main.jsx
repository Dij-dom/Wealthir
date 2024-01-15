import React from 'react';
import ReactDOM from 'react-dom/client';;
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import './index.css';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
