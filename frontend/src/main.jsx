import React from 'react';
import ReactDOM from 'react-dom/client';;
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import { TransactionContextProvider } from './contexts/TransactionContext.jsx';
// import './index.css';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TransactionContextProvider>
        <App />
      </TransactionContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
