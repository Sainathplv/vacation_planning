import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Auth.module.css'; // Import the shared CSS

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        // Signup logic goes here...
        try {
            const response = await axios.post('http://localhost:5001/api/auth/signup', {
                name,
                email,
                phone,
                password,
            });

            // Store the JWT in localStorage
            const token = response.data.token;
            localStorage.setItem('token', token);
            toast.success('Signup successful!'); // Show success notification
        } catch (error) {
            toast.error(`Signup failed: ${error.response?.data?.message || 'Server error'}`); // Show error notification
        }
    };

    const handleMicrosoftSignup = () => {
        window.location.href = 'http://localhost:5001/api/auth/microsoft';
    };

    return (
        <div className={styles.authContainer}>
            <img src="path-to-logo.png" alt="App Logo" />
            <h2>Create Your Account</h2>

            <div className={styles.authOptions}>
                <button className={styles.microsoftButton} onClick={handleMicrosoftSignup}>
                    <img src="path-to-microsoft-icon.png" alt="Microsoft logo" /> Sign up with Microsoft
                </button>
                <button className={styles.emailButton}>
                    <img src="path-to-email-icon.png" alt="Email logo" /> Sign up with Email
                </button>
            </div>

            <div className={styles.orDivider}>or</div>

            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.inputField}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputField}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                <button type="submit" className={styles.submitButton}>Sign Up</button>
            </form>

            <div className={styles.authFooter}>
                <a href="/login">Already have an account? Log in</a>
            </div>
        </div>
    );
};

export default Signup;
