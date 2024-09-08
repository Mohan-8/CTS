import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [paidUsers, setPaidUsers] = useState(0);
  const [unpaidUsers, setUnpaidUsers] = useState(0);
  const [emailDetails, setEmailDetails] = useState({
    to: "",
    subject: "",
    body: "",
  });
  const [showEmailSection, setShowEmailSection] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    ["link", "image", "video"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];
  const quillModules = {
    toolbar: toolbarOptions,
  };

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
        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp < currentTime) {
          alert("Session expired. Please log in again.");
          localStorage.removeItem("type");
          window.location.href = "/components/login.html";
        } else {
          const type = localStorage.getItem("type");
          if (type === "admin") {
            const response = await axios.get(
              `https://cts-backend-three.vercel.app/api/users/getAllUserDetails`
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
          } else {
            alert("Access denied");
            window.location.href = "https://mohan-8.github.io/CTS/index.html";
          }
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        alert("User details not found or failed to fetch. Please try again.");
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "https://mohan-8.github.io/CTS/index.html";
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setEmailDetails((prevDetails) => ({ ...prevDetails, to: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleEditorChange = (value) => {
    setEmailDetails((prevDetails) => ({ ...prevDetails, body: value }));
  };

  const sendEmail = async () => {
    console.log(emailDetails);
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/sendemailtouser",
        emailDetails
      );
      if (response.status === 200) {
        alert("Emails sent successfully");
      } else {
        alert("Failed to send emails");
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      alert(error.response.data.message);
      // alert("Server Error");
    } finally {
      setIsLoading(false);
    }
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
        <button
          onClick={() => setShowEmailSection(!showEmailSection)}
          style={styles.button}
        >
          {showEmailSection ? "Hide Send Email" : "Send Email"}
        </button>
      </div>
      {showEmailSection && (
        <div style={styles.emailSection}>
          <h2>Send Email to Users</h2>
          <div>
            <select
              value={emailDetails.to}
              onChange={handleSelectChange}
              style={styles.select}
            >
              <option value="">Select Membership Type</option>
              <option value="all">All Users</option>
              <option value="paid">Paid Memberships</option>
              <option value="unpaid">UnPaid Memberships</option>
              <option value="elite">Elite Members</option>
              <option value="family">Family Membership</option>
              <option value="individual">Individual Membership</option>
              <option value="student">Student Membership</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={emailDetails.subject}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <div>
            <ReactQuill
              value={emailDetails.body}
              onChange={handleEditorChange}
              style={styles.quill}
              placeholder="Compose your email here..."
              modules={quillModules}
            />
          </div>
          <br />
          <br />
          <br />
          <button onClick={sendEmail} style={styles.button}>
            Send Mail to Users
          </button>
          {isLoading && <div style={styles.loading}>Sending...</div>}{" "}
        </div>
      )}
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
  emailSection: {
    margin: "2rem auto",
    textAlign: "center",
    width: "90%",
  },
  input: {
    width: "100%",
    maxWidth: "800px",
    padding: "0.5rem",
    marginBottom: "1rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  quill: {
    width: "100%",
    maxWidth: "800px",
    height: "300px",
    marginBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  select: {
    width: "100%",
    maxWidth: "800px",
    padding: "0.5rem",
    marginBottom: "1rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  loading: {
    marginTop: "1rem",
    color: "#007bff",
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
