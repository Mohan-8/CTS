import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const UserPage = () => {
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    membership_type: "",
    paypal_payment_link: "",
    payment_status: "",
    payment_at: "",
    payment_id: "",
  });
  const [payment_link, setpayment_link] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        alert("Invalid session. Please log in.");
        window.location.href = "/login.html";
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const id = decoded.userId;

        const response = await axios.get(
          `http://localhost:5000/api/users/getUserDetails/${id}`
        );

        setUserDetails(response.data);
        setpayment_link(response.data.paypal_payment_link);
        calculateExpiryDate(response.data.payment_at);
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        alert("User details not found or failed to fetch. Please try again.");
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        alert("Invalid session. Please log in.");
        window.location.href = "/login.html";
        return;
      }

      const decoded = jwtDecode(token);
      const id = decoded.userId;
      console.log(userDetails);
      await axios.put(
        `http://localhost:5000/api/users/updateUserDetails/${id}`,
        userDetails
      );
      alert("Details updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error("Error updating user details:", error);
      alert("Failed to update details. Please try again.");
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
    setShowInputs(true);
  };

  const calculateExpiryDate = (paymentDate) => {
    if (paymentDate) {
      const currentDate = new Date(paymentDate);
      const expiry = new Date(currentDate);
      expiry.setDate(currentDate.getDate() + 365);
      setExpiryDate(expiry.toLocaleString());
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/";
  };
  return (
    <div>
      <h2 style={styles.h2}>Carolina Tamil Sangam User Details</h2>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <div style={styles.overlay}>
            {!editMode && (
              <>
                <p>
                  <strong>First Name:</strong> {userDetails.first_name}
                </p>
                <p>
                  <strong>Last Name:</strong> {userDetails.last_name}
                </p>
                <p>
                  <strong>Email:</strong> {userDetails.email}
                </p>
                <p>
                  <strong>Phone:</strong> {userDetails.phone}
                </p>
                <p>
                  <strong>Change Password: ?</strong>
                </p>
              </>
            )}
            {editMode && (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.row}>
                  <div style={styles.col}>
                    <label style={styles.label}>First Name:</label>
                    <input
                      type="text"
                      name="first_name"
                      value={userDetails.first_name}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.col}>
                    <label style={styles.label}>Last Name:</label>
                    <input
                      type="text"
                      name="last_name"
                      value={userDetails.last_name}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                </div>
                <div style={styles.row}>
                  <div style={styles.col}>
                    <label style={styles.label}>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.col}>
                    <label style={styles.label}>Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      value={userDetails.phone}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                </div>
                <div style={styles.row}>
                  <div style={styles.col}>
                    <label style={styles.label}>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={userDetails.password}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                </div>
                <button type="submit" style={styles.button}>
                  Update Details
                </button>
              </form>
            )}
          </div>
          {!editMode && (
            <div style={styles.editIconContainer} onClick={handleEditClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                style={styles.editIcon}
              >
                <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"></path>
              </svg>
            </div>
          )}
        </div>
        <div style={styles.gridItem}>
          <div style={styles.overlay}>
            {!editMode && (
              <>
                <p>
                  <strong>Membership Type:</strong>{" "}
                  {userDetails.membership_type}
                </p>
                {userDetails.payment_id ? (
                  <>
                    <p>
                      <strong>Payment Status:</strong> Completed
                    </p>
                    {/* <p>
                      <strong>PayPal Payment Link:</strong>{" "}
                      {userDetails.paypal_payment_link}
                    </p> */}
                    <p>
                      <strong>Paid at:</strong>{" "}
                      {new Date(userDetails.payment_at).toLocaleString()}
                    </p>
                    <p>
                      <strong>Expires on:</strong> <span>{expiryDate}</span>{" "}
                      (365 days from payment)
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Payment Status:</strong> Pending
                    </p>
                    <a href={payment_link} target="_blank">
                      Pay
                    </a>
                    <br />
                  </>
                )}
              </>
            )}
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  h2: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    maxWidth: "800px",
    margin: "auto",
  },
  gridItem: {
    position: "relative",
    backgroundColor: "#f0f0f0",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
    height: "100%",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "1rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease-in-out",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  col: {
    flex: "1",
    marginRight: "0.5rem",
  },
  label: {
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "1rem",
  },
  editIconContainer: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    cursor: "pointer",
  },
  editIcon: {
    fill: "#007bff",
    transition: "fill 0.3s ease",
  },
};

export default UserPage;
