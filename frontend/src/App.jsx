import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import Home from './Components/Home/Home.jsx';
import { useAuthContext } from './hooks/useAuthContext.jsx';

function App() {
  const {user} = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={!user ? <LoginSignUp/> : <Navigate to='/home'/>}
        />
        <Route 
          path="/home" 
          element={user ? <Home/> : <Navigate to='/'/>} />
      </Routes>
    </Router>
  );
}

export default App


