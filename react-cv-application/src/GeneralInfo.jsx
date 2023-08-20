import { useState } from "react";
import { hyphenToCamel, camelToHyphen, camelToNormalCase } from "./utils";

function GeneralInput() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Michael",
    email: "test@gmail.com",
    phoneNumber: "6235-3535",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "Harvard",
    degree: "Ph.D",
    startDate: "2023-09-01",
    endDate: "2023-09-09",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: "Apple",
    position: "CEO",
    startDate: "2022-09-09",
    endDate: "2023-08-09",
    description: "God mode",
  });

  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  function handleChange(e, setState) {
    const fieldName = hyphenToCamel(e.target.id);

    setState((personalInfo) => ({
      ...personalInfo,
      [fieldName]: e.target.value,
    }));
  }

  function validateForm(formData) {
    const formHasEmptyValues = Object.values(formData).some(
      (value) => value === ""
    );
    const startBeforeEndDate = formData.startDate < formData.endDate;

    console.log(!formHasEmptyValues && startBeforeEndDate);

    return !formHasEmptyValues && startBeforeEndDate;
  }

  function addEducationInfo(e) {
    if (validateForm(educationInfo)) {
      setEducationList([...educationList, educationInfo]);

      setEducationInfo({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      });
    }
    console.log([...educationList, educationInfo]);
    e.preventDefault();
  }

  function addExperienceInfo(e) {
    if (validateForm(experienceInfo)) {
      setExperienceList([...experienceList, experienceInfo]);

      setExperienceInfo({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    }
    console.log([...experienceList, experienceInfo]);
    e.preventDefault();
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
            handleSave={(e) => addEducationInfo(e)}
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
            handleSave={(e) => addExperienceInfo(e)}
          />
        </div>
      </div>
      <div className="resume container">
        <div className="personal-info">
          <div className="full-name">{personalInfo.fullName}</div>
          <div className="email">{personalInfo.email}</div>
          <div className="phone-number">{personalInfo.phoneNumber}</div>
        </div>
        <hr />
        <div className="education">
          <div className="header">Education</div>
          <ResumeEducationList educationList={educationList} />
          <ResumeEducation id={0} info={educationInfo} />
        </div>
        <hr />
        <div className="experience">
          <div className="header">Experience</div>
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

function FormContainer({ configs, value, handleChange, handleSave }) {
  return (
    <form>
      {configs.map((config) => (
        <LabelledInput
          key={config.id}
          id={config.id}
          type={config.type}
          value={value}
          handleChange={handleChange}
        />
      ))}
      {handleSave && (
        <button className="add-info" onClick={handleSave}>
          Save
        </button>
      )}
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

function ResumeEducationList({ educationList }) {
  return (
    <>
      {educationList.map((education, index) => (
        <ResumeEducation key={index} id={index + 1} info={education} />
      ))}
    </>
  );
}

function ResumeEducation({ id, info }) {
  return (
    <div className="details" id={`education-${id}`}>
      <div className="start-date">{info.startDate}</div>
      <div className="end-date">{info.endDate}</div>
      <div className="school">{info.school}</div>
      <div className="degree">{info.degree}</div>
    </div>
  );
}

export { GeneralInput };
