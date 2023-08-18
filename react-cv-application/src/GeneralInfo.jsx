function General() {
  return (
    <div className="general container">
      <h2>Personal Details</h2>
      <form>
        <label for="full-name">
          Full Name
          <input type="text" id="full-name" name="full-name" required></input>
        </label>
        <label for="email">
          Email
          <input type="email" id="email" name="email" required></input>
        </label>
        <label for="phone-number">
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

function ResumeHeader() {
  return (
    <>
      <h1>Your Name</h1>
    </>
  );
}

export { General, ResumeHeader };
