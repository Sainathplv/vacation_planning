import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext'; // Import AuthContext
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Auth.module.css';
import logo from '../images/login-logo.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); // Get the login function from context

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        email,
        password,
      });

      // Assuming the response contains user info and a token
      const { token, user } = response.data;

      // Use the login function from context to log the user in
      login(user, token);
      toast.success(`Welcome back, ${user.name}!`);
    } catch (error) {
      toast.error(`Login failed: ${error.response?.data?.message || 'Server error'}`);
    }
  };

  const handleMicrosoftLogin = () => {
    window.location.href = 'http://localhost:5001/api/auth/microsoft';
  };

  return (
    <div className={styles.authContainer}>
      <img src={logo} alt="App Logo" />
      <h2>Log into my Account</h2>

      <div className={styles.authOptions}>
        <button className={styles.microsoftButton} onClick={handleMicrosoftLogin}>
          <img src="mslogo" alt="Microsoft logo" /> Sign in with Microsoft
        </button>
        <button className={styles.emailButton}>
          <img src="path-to-email-icon.png" alt="Email logo" /> Sign in with Email
        </button>
      </div>

      <div className={styles.orDivider}>or</div>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.submitButton}>Log In</button>
      </form>

      <div className={styles.authFooter}>
        <a href="/signup">No account? Sign up</a>
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
