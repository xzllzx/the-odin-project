import { useState } from "react";

function GeneralInput() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  function handlePersonalInfoChange(e) {
    const newPersonalInfo = { ...personalInfo };

    if (e.target.id === "full-name") newPersonalInfo.fullName = e.target.value;
    if (e.target.id === "email") newPersonalInfo.email = e.target.value;
    if (e.target.id === "phone-number")
      newPersonalInfo.phoneNumber = e.target.value;

    setPersonalInfo(newPersonalInfo);
  }

  function handleEducationInfoChange(e) {
    const newEducationInfo = { ...educationInfo };

    if (e.target.id === "school") newEducationInfo.school = e.target.value;
    // if (e.target.id === "email") newEducationInfo.email = e.target.value;
    // if (e.target.id === "phone-number")
    //   newEducationInfo.phoneNumber = e.target.value;
    console.log(newEducationInfo);

    setEducationInfo(newEducationInfo);
  }

  function handleExperienceInfoChange(e) {
    const newExperienceInfo = { ...experienceInfo };

    if (e.target.id === "company") newExperienceInfo.company = e.target.value;
    console.log(newExperienceInfo);

    setExperienceInfo(newExperienceInfo);
  }

  return (
    <>
      <div className="general container">
        <div className="personal-details form-container">
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
        <div className="education-details form-container">
          <h2>Education</h2>
          <form>
            <LabelledInput
              id="school"
              attributeName="School"
              type="text"
              value={educationInfo.school}
              handleChange={handleEducationInfoChange}
            />
          </form>
        </div>
        <div className="experience-details form-container">
          <h2>Experience</h2>
          <form>
            <LabelledInput
              id="company"
              attributeName="Company"
              type="text"
              value={experienceInfo.company}
              handleChange={handleExperienceInfoChange}
            />
          </form>
        </div>
      </div>
      <div className="resume container">
        <div className="header">
          <h1>{personalInfo.fullName}</h1>
          <h2>{personalInfo.email}</h2>
          <h2>{personalInfo.phoneNumber}</h2>
        </div>
        <div className="education">
          <h1>{educationInfo.school}</h1>
        </div>
        <div className="experience">
          <h1>{experienceInfo.company}</h1>
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
