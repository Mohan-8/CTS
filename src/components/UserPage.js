import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const UserPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    console.log("working");
    if (!token) {
      alert("Invalid session. Please log in.");
      window.location.href = "/login.html";
    } else {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          alert("Session expired. Please log in again.");
          window.location.href = "/login.html";
        } else {
          console.log("Token is valid:", decoded);
        }
      } catch (err) {
        alert("Invalid session. Please log in.");
        window.location.href = "/components/login.html";
      }
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Carolina Tamil Sangam User Page!</h1>
    </div>
  );
};

export default UserPage;
