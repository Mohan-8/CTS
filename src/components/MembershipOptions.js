import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MembershipContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 1rem 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 1rem;
  }
`;

const MembershipCard = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  border-radius: 20px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MembershipTitle = styled.h3`
  margin-top: 0;
`;

const MembershipPrice = styled.p`
  color: green;
  font-size: 1.2em;
`;

const MembershipDescription = styled.p``;

const SignUpForm = styled.form`
  display: ${(props) => (props.visible ? "block" : "none")};
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1em;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      background-color: grey;
      cursor: not-allowed;
    }
  }

  span {
    color: red;
  }
`;

const ErrorOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ErrorAlert = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1em;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const MembershipOptions = () => {
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [showSignUpForm, setShowSignUpForm] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [errorOverlayVisible, setErrorOverlayVisible] = useState(false);
  const [errorFromBackend, setErrorFromBackend] = useState("");

  const handleSignUp = (membership) => {
    setSelectedMembership(membership);
    setShowSignUpForm((prevState) => ({
      ...Object.fromEntries(
        Object.keys(prevState).map((key) => [key, key === membership.type])
      ),
      [membership.type]: !prevState[membership.type],
    }));
  };

  const handleSubmit = async (e, membership) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        "https://cts-backend-three.vercel.app/api/users/signup",
        {
          ...formValues,
          membershipType: membership.type,
          price: membership.price,
        }
      );

      console.log(response.data.Token);
      localStorage.setItem("jwtToken", response.data.Token);
      // setJwtToken(response.data.Token);
      console.log(response.data.forwardLink);
      const forwardLink = response.data.forwardLink;
      window.location.href = forwardLink;
      setIsSubmitDisabled((prevState) => ({
        ...prevState,
        [membership.type]: true,
      }));
      setShowSignUpForm({});
      setFormErrors({});
    } catch (error) {
      console.error("Error submitting form:", error.response.data.error);
      setErrorFromBackend(error.response.data.error);
      setErrorOverlayVisible(true);
    }
  };

  const closeErrorOverlay = () => {
    setErrorOverlayVisible(false);
    setErrorFromBackend("");
  };

  const membershipOptions = [
    {
      type: "Elite Membership",
      price: 100,
      description:
        "Nearby accessible car parking for the Carolina Tamil Sangam events.",
    },
    {
      type: "Family Membership",
      price: 60,
      description: "Subscription for family members.",
    },
    {
      type: "Individual Membership",
      price: 30,
      description:
        "Single Adult above 26 years - Eligible benefits for single person only.",
    },
    {
      type: "Student Membership",
      price: 20,
      description:
        "18 - 26 years - Eligible benefits for single person only. Must show student ID and driver's license.",
    },
  ];

  return (
    <MembershipContainer>
      {membershipOptions.map((membership, index) => (
        <MembershipCard key={index}>
          <MembershipTitle>{membership.type}</MembershipTitle>
          <MembershipPrice>${membership.price}.00 (USD)</MembershipPrice>
          <MembershipDescription>
            {membership.description}
          </MembershipDescription>
          <SignUpForm
            id={`form-${membership.type}`}
            visible={showSignUpForm[membership.type]}
            onSubmit={(e) => handleSubmit(e, membership)}
          >
            <label>
              First Name<span>*</span>:
              <input type="text" name="firstName" required />
            </label>
            <br />
            <label>
              Last Name<span>*</span>:
              <input type="text" name="lastName" required />
            </label>
            <br />
            <label>
              Email<span>*</span>:
              <input type="email" name="email" required />
            </label>
            <br />
            <label>
              Phone<span>*</span>:
              <input type="tel" name="phone" required />
            </label>
            <br />
            <button type="submit" disabled={isSubmitDisabled[membership.type]}>
              Submit
            </button>
            {formErrors[membership.type] && (
              <ErrorAlert>{formErrors[membership.type]}</ErrorAlert>
            )}
          </SignUpForm>
          {!showSignUpForm[membership.type] && (
            <button className="button" onClick={() => handleSignUp(membership)}>
              Sign Up
            </button>
          )}
        </MembershipCard>
      ))}
      <ErrorOverlay visible={errorOverlayVisible}>
        <ErrorAlert>
          {errorFromBackend}
          <br />
          <button onClick={closeErrorOverlay}>OK</button>
        </ErrorAlert>
      </ErrorOverlay>
    </MembershipContainer>
  );
};

export default MembershipOptions;
