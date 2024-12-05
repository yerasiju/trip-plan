import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://6750aba069dc1669ec1bf354.mockapi.io/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("Sign-up successful! You can now log in.");
        setFormData({ username: "", email: "", password: "" });
        navigate("/loginn");
      } else {
        throw new Error("Sign-up failed.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h1 className={styles.authTitle}>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
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
            Sign Up
          </button>
        </form>
        {message && <p className={styles.errorMsg}>{message}</p>}
        <div className={styles.switchLink}>
          <span>Already have an account?</span>
          <a href="/loginn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
