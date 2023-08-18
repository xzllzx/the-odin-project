import { useState } from "react";

function GeneralInformation() {}

function GeneralInput() {
  const [fullName, setFullName] = useState("testing");

  function handleNameChange(e) {
    setFullName(e.target.value);
  }

  return (
    <div className="general container">
      <h2>Personal Details</h2>
      <form>
        <LabelledInput
          id="full-name"
          attributeName="Full Name"
          type="text"
          value={fullName}
          handleChange={handleNameChange}
        />
        <label htmlFor="email">
          Email
          <input type="email" id="email" name="email" required></input>
        </label>
        <label htmlFor="phone-number">
          Phone number
          <input
            type="tel"
            id="phone-number"
            name="phone-number"
            required
          ></input>
        </label>
      </form>
    </div>
  );
}

function LabelledInput({ id, attributeName, type, value, handleChange }) {
  return (
    <label htmlFor={id}>
      {attributeName}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        required
        onChange={handleChange}
      ></input>
    </label>
  );
}

function ResumeHeader() {
  return (
    <>
      <h1>Test</h1>
    </>
  );
}

export { GeneralInput, ResumeHeader };
