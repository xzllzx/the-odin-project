function General() {
  return (
    <>
      <h2>Personal Details</h2>
      <form>
        <label>
          Full Name
          <input type="text" />
        </label>
      </form>
    </>
  );
}

function EducationInput() {
  return (
    <>
      <h2>Education</h2>
      <form>
        <label>
          School
          <input type="text" />
        </label>
      </form>
    </>
  );
}

function ExperienceInput() {
  return (
    <>
      <h2>Education</h2>
      <form>
        <label>
          Blah
          <input type="text" />
        </label>
      </form>
    </>
  );
}

function InputContainer() {
  return (
    <div className="input container">
      <General />
      <EducationInput />
      <ExperienceInput />
    </div>
  );
}

export { InputContainer };
