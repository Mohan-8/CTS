import React, { useState } from "react";
import MembershipOptions from "./components/MembershipOptions";

function App() {
  const [selectedMembership, setSelectedMembership] = useState(null);

  const handleMembershipSelect = (membership) => {
    setSelectedMembership(membership);
  };

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>
        Carolina Tamil Sangam Membership Sign-Up
      </h2>
      <MembershipOptions onSelect={handleMembershipSelect} />
      {selectedMembership && (
        <div>
          <h3>Selected Membership:</h3>
          <p>Type: {selectedMembership.type}</p>
          <p>Price: ${selectedMembership.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;
