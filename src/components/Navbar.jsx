import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(`.${styles.header}`)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.logoName}>GoHeaven</h1>
      </div>

      <nav className={styles.navbar}>
        <button
          className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.burgerIcon}></span>
          <span className={styles.burgerIcon}></span>
          <span className={styles.burgerIcon}></span>
        </button>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/planner"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Trip Planner
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.auth}>
        {user ? (
          <div className={styles.userGreeting}>
            <span className={styles.welcome}>Hello, {user.username}!</span>
            <button className={styles.logoutBtn} onClick={onLogout}>
              <i className="fa fa-sign-out"></i> Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/signup"
            className={styles.loginBtn}
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fa fa-sign-in"></i> Join Us
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
