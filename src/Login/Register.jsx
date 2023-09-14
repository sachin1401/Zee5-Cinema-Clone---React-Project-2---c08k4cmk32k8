import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Check if user with the same email already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      setErrorMessage("User with this email already exists.");
      return;
    }

    // Store user data in local storage
    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Reset form fields and show success message
    setName("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
    setSuccessMessage("Registration successful. Please log in.");
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <h2 className="register-heading">Create a new account</h2>
        <p className="register-subtext">
          Create an account to continue enjoying uninterrupted video and
          personalised experience
        </p>

        <div className="social-icons">
          <Link to="/under-construction">
            <img
              src="https://www.zee5.com/images/google-social-icon-circle.svg?ver=3.13.1"
              alt="Google"
            />
            <img
              src="https://www.zee5.com/images/fb-social-icon-circle.svg?ver=3.13.1"
              alt="Facebook"
            />
            <img
              src="https://www.zee5.com/images/twitter-social-icon.svg?ver=3.13.1"
              alt="Twitter"
            />
            <img
              src="https://www.zee5.com/images/apple-social-icon-circle.svg?ver=3.13.1"
              alt="Apple"
            />
          </Link>
        </div>
        {/* draw horizontal line */}

        <div className="divider">
          <div className="line"></div>
          <div className="circle">
            <span className="circle-text">or</span>
          </div>
          <div className="line"></div>
        </div>
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="register-input"
            autoComplete="username"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
            autoComplete="current-password" // Add autoComplete attribute
          />
          <div className="terms-and-policy">
            By proceeding you agree to our
            <a href="#" className="terms-link">
              Terms of Services
            </a>{" "}
            &
            <a href="#" className="privacy-link">
              Privacy Policy
            </a>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="login-link">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
