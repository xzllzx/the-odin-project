import { useState } from "react";
import { hyphenToCamel, camelToHyphen, camelToNormalCase } from "./utils";

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

  function handleChange(e, setState) {
    const fieldName = hyphenToCamel(e.target.id);

    setState((personalInfo) => ({
      ...personalInfo,
      [fieldName]: e.target.value,
    }));
  }

  return (
    <>
      <div className="input-container">
        <div className="personal-details form container">
          <h2>Personal Details</h2>
          <FormContainer
            configs={[
              { id: "full-name", type: "text" },
              { id: "email", type: "email" },
              { id: "phone-number", type: "phone-number" },
            ]}
            value={personalInfo}
            handleChange={(e) => handleChange(e, setPersonalInfo)}
          />
        </div>
        <div className="education-details form container">
          <h2>Education</h2>
          <FormContainer
            configs={[
              { id: "school", type: "text" },
              { id: "degree", type: "text" },
              { id: "start-date", type: "date" },
              { id: "end-date", type: "date" },
            ]}
            value={educationInfo}
            handleChange={(e) => handleChange(e, setEducationInfo)}
          />
        </div>
        <div className="experience-details form container">
          <h2>Experience</h2>
          <FormContainer
            configs={[
              { id: "company", type: "text" },
              { id: "position", type: "text" },
              { id: "description", type: "text" },
              { id: "start-date", type: "date" },
              { id: "end-date", type: "date" },
            ]}
            value={experienceInfo}
            handleChange={(e) => handleChange(e, setExperienceInfo)}
          />
        </div>
      </div>
      <div className="resume container">
        <div className="header">
          <h1 className="full-name">{personalInfo.fullName}</h1>
          <h2 className="email">{personalInfo.email}</h2>
          <h2 className="phone-number">{personalInfo.phoneNumber}</h2>
        </div>
        <hr />
        <div className="education">
          <h1>{educationInfo.school}</h1>
          <h3>{educationInfo.degree}</h3>
          <h3>{educationInfo.startDate}</h3>
          <h3>{educationInfo.endDate}</h3>
        </div>
        <hr />
        <div className="experience">
          <h1>{experienceInfo.company}</h1>
          <h4>{experienceInfo.position}</h4>
          <h4>{experienceInfo.description}</h4>
          <h4>{experienceInfo.startDate}</h4>
          <h4>{experienceInfo.endDate}</h4>
        </div>
      </div>
    </>
  );
}

function FormContainer({ configs, value, handleChange }) {
  return (
    <form>
      {configs.map((config) => (
        <LabelledInput
          id={config.id}
          type={config.type}
          value={value}
          handleChange={handleChange}
        />
      ))}
    </form>
  );
}

function LabelledInput({ id, type, value, handleChange }) {
  return (
    <label htmlFor={id}>
      {camelToNormalCase(hyphenToCamel(id))}
      <input
        type={type}
        id={id}
        name={id}
        value={value[hyphenToCamel(id)]}
        onChange={handleChange}
        required
      ></input>
    </label>
  );
}

export { GeneralInput };
