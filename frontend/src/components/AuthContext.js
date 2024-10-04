import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage when the app starts
  // Load user from localStorage when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));  // Only parse if storedUser is not null
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);


  // Function to handle login
  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    navigate('/'); // Redirect to home page after login
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
