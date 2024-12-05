import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://6750aba069dc1669ec1bf354.mockapi.io/login"
      );
      const users = await response.json();

      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        setMessage("Login successful!");
        navigate("/");
      } else {
        setMessage("Invalid email or password.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h1 className={styles.authTitle}>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            className={styles.inputField}
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            className={styles.inputField}
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button className={styles.submitBtn} type="submit">
            Login
          </button>
        </form>
        {message && <p className={styles.errorMsg}>{message}</p>}
        <div className={styles.switchLink}>
          <span>Don't have an account?</span>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
