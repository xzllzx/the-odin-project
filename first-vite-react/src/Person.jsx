import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  const handleFirstNameChange = (e) => {
    let newPerson = { ...person };
    newPerson["firstName"] = e.target.value;
    setPerson(newPerson);
  };

  const handleLastNameChange = (e) => {
    let newPerson = { ...person };
    newPerson["lastName"] = e.target.value;
    setPerson(newPerson);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{person.firstName + " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <label>
        First Name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export { Person };
