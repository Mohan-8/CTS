import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [paidUsers, setPaidUsers] = useState(0);
  const [unpaidUsers, setUnpaidUsers] = useState(0);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        alert("Invalid session. Please log in.");
        window.location.href = "/components/login.html";
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const response = await axios.get(
          `http://127.0.0.1:5000/api/users/getAllUserDetails`
        );

        const nonAdminUsers = response.data.users.filter(
          (user) => user.membership_type !== "admin"
        );

        setUsers(nonAdminUsers);

        const paidCount = nonAdminUsers.filter(
          (user) => user.payment_status === "Completed"
        ).length;

        setPaidUsers(paidCount);
        setUnpaidUsers(nonAdminUsers.length - paidCount);
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        alert("User details not found or failed to fetch. Please try again.");
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/";
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.h2}>Admin Dashboard</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
      <div style={styles.statistics}>
        <div>Total Users: {users.length}</div>
        <div>Paid Users: {paidUsers}</div>
        <div>Unpaid Users: {unpaidUsers}</div>
      </div>
      <div style={styles.actions}>
        <button
          onClick={() =>
            window.open("https://forms.gle/wSLT3r9jyu1oGyAF7", "_blank")
          }
          style={styles.button}
        >
          Fill Event Form
        </button>
      </div>
      <div style={styles.userList}>
        <h2>User List</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Membership Type</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td style={styles.td}>
                  {user.first_name} {user.last_name}
                </td>
                <td style={styles.td}>{user.membership_type}</td>
                <td style={styles.td}>{user.payment_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
  },
  h2: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  statistics: {
    margin: "2rem 0",
    display: "flex",
    justifyContent: "space-around",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  userList: {
    textAlign: "center",
    marginTop: "2rem",
  },
  table: {
    width: "70%",
    margin: "0 auto",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
  },
};

export default AdminPage;
