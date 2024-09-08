import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    // console.log(email, password);
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post(
          "https://cts-backend-three.vercel.app/api/users/login",
          { email, password }
        );
        // console.log(response.data.membership_type);
        // console.log("jwtToken:", response.data.token);
        setMessage("Login successful!");
        setErrors({});
        localStorage.setItem("jwtToken", response.data.Token);
        localStorage.setItem("type", response.data.membership_type);
        if (response.data.membership_type == "admin") {
          window.location.href =
            "https://mohan-8.github.io/CTS/components/admin.html";
        } else {
          window.location.href =
            "https://mohan-8.github.io/CTS/components/user.html";
        }
      } catch (error) {
        setErrors({ form: error.response.data.error });
      }
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <img src="../assert/logo.png" alt="logo" />
          <br />
          <label>
            Email:<span style={styles.span}>*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>
        <div style={styles.formGroup}>
          <label>
            Password:<span style={styles.span}>*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {errors.password && <div style={styles.error}>{errors.password}</div>}
        </div>
        {errors.form && <div style={styles.error}>{errors.form}</div>}
        {message && <div style={styles.success}>{message}</div>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    backgroundColor: "#f0f0f0",
    marginBottom: "2rem",
    marginTop: "2rem",
  },
  span: {
    color: "red",
  },
  form: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
  success: {
    color: "green",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
};

export default LoginForm;
