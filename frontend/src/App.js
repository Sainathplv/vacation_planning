import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import TopsideNavbar from './components/Navigation_bars/topside_navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Home';
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <TopsideNavbar /> {/* The navbar is wrapped with AuthProvider to access context */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
