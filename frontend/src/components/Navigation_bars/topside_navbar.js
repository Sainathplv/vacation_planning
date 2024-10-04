import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Import AuthContext
import styles from '../styles/Navbar.module.css';

const TopsideNavbar = () => {
  const { user, logout } = useContext(AuthContext); // Get user and logout from context
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <h1>Vacation Planning</h1>
      <ul className={styles.navList}>
        {user ? (
          // If logged in, show profile icon and dropdown
          <li className={styles.navItem}>
            <div className={styles.profileDropdown} onClick={toggleDropdown}>
              <i className="fa fa-user-plus" aria-hidden="true"></i> {/* Font Awesome Icon */}
              <span>{user.name}</span>
              <ul className={`${styles.dropdownMenu} ${dropdownOpen ? styles.open : ''}`}>
                <li>
                  <Link to="/userinfo" className={styles.dropdownLink}>User Info</Link>
                </li>
                <li>
                  <Link to="/address-update" className={styles.dropdownLink}>Address Update</Link>
                </li>
                <li>
                  <Link to="/password-update" className={styles.dropdownLink}>Password Update</Link>
                </li>
                <li>
                  <Link to="/payments-info" className={styles.dropdownLink}>Payments Information</Link>
                </li>
                <li onClick={logout} className={styles.dropdownLink}>
                  Logout
                </li>
              </ul>
            </div>
          </li>
        ) : (
          // If not logged in, show Login and Signup links
          <>
            <li className={styles.navItem}>
              <Link to="/login" className={styles.navLink}>
                <i className="fa fa-sign-in" aria-hidden="true"></i> Login
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/signup" className={styles.navLink}>
                <i className="fa fa-user-plus" aria-hidden="true"></i> Signup
              </Link>

            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default TopsideNavbar;
