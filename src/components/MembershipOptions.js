import React, { useState, useRef } from "react";
import styled from "styled-components";
import PayPalButton from "./paypal";

const MembershipContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 4rem;
  margin-right: 4rem;
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

const SuccessAlert = styled.div`
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const ErrorAlert = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const MembershipOptions = () => {
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [showSignUpForm, setShowSignUpForm] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showPayPalButton, setShowPayPalButton] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState({});

  const paypalRefs = useRef({});

  const handleSignUp = (membership) => {
    setShowSignUpForm((prevState) => ({
      ...Object.fromEntries(
        Object.keys(prevState).map((key) => [key, key === membership.type])
      ),
      [membership.type]: !prevState[membership.type],
    }));
    setSelectedMembership(membership);
  };

  const handleSubmit = (e, membership) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    if (validateFormInputs(formValues)) {
      setSelectedMembership(membership);
      //   console.log("Form submitted for:", membership.type);
      //   console.log("Form data:", formValues);
      setShowPayPalButton((prevState) => ({
        ...prevState,
        [membership.type]: true,
      }));
      setIsSubmitDisabled((prevState) => ({
        ...prevState,
        [membership.type]: true,
      }));
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const validateFormInputs = (formData) => {
    const requiredFields = ["firstName", "lastName", "email", "phone"];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };

  const handlePaymentSuccess = (membership) => {
    setShowSuccessAlert(true);
    setSelectedMembership(membership);
    const formData = new FormData(
      document.getElementById(`form-${membership.type}`)
    );
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form data:", formValues);
    console.log("Membership type:", membership.type);
  };

  const handlePaymentError = (membership) => {
    setShowErrorAlert(true);
    setSelectedMembership(membership);
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
          </SignUpForm>
          {showPayPalButton[membership.type] && (
            <div ref={(el) => (paypalRefs.current[membership.type] = el)}>
              <PayPalButton
                amount={membership.price}
                onSuccess={() => handlePaymentSuccess(membership)}
                onError={() => handlePaymentError(membership)}
                className="button"
              />
            </div>
          )}
          {selectedMembership !== membership && (
            <button className="button" onClick={() => handleSignUp(membership)}>
              Sign Up
            </button>
          )}
        </MembershipCard>
      ))}
      {showSuccessAlert && (
        <SuccessAlert>
          Payment succeeded! Thank you for signing up.
        </SuccessAlert>
      )}
      {showErrorAlert && (
        <ErrorAlert>Payment failed! Please try again.</ErrorAlert>
      )}
    </MembershipContainer>
  );
};

export default MembershipOptions;
