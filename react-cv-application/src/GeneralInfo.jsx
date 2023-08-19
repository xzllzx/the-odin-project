import { useState } from "react";

function GeneralInput() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  function handlePersonalInfoChange(e) {
    const newPersonalInfo = { ...personalInfo };

    if (e.target.id === "full-name") newPersonalInfo.fullName = e.target.value;
    if (e.target.id === "email") newPersonalInfo.email = e.target.value;
    if (e.target.id === "phone-number")
      newPersonalInfo.phoneNumber = e.target.value;

    setPersonalInfo(newPersonalInfo);
  }

  return (
    <>
      <div className="general container">
        <h2>Personal Details</h2>
        <form>
          <LabelledInput
            id="full-name"
            attributeName="Full Name"
            type="text"
            value={personalInfo.fullName}
            handleChange={handlePersonalInfoChange}
          />
          <LabelledInput
            id="email"
            attributeName="Email"
            type="email"
            value={personalInfo.email}
            handleChange={handlePersonalInfoChange}
          />
          <LabelledInput
            id="phone-number"
            attributeName="Phone Number"
            type="phone-number"
            value={personalInfo.phoneNumber}
            handleChange={handlePersonalInfoChange}
          />
        </form>
      </div>
      <div className="resume container">
        <div className="header">
          <h1>{personalInfo.fullName}</h1>
          <h2>{personalInfo.email}</h2>
          <h2>{personalInfo.phoneNumber}</h2>
        </div>
      </div>
    </>
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

export { GeneralInput };
