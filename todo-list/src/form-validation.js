const submitButtons = document.querySelectorAll("button[type='submit']");

const constraintValidation = () => {
  for (const button of submitButtons) {
    const inputFields = button.parentNode.querySelectorAll("input");

    button.addEventListener("click", (e) => {
      for (const input of inputFields) {
        console.log(input.validity);
        if (input.validity.typeMismatch) {
          input.setCustomValidity("I am expecting an input address!");
        } else if (input.validity.valueMissing) {
          input.setCustomValidity("Missing input");
        } else {
          input.setCustomValidity("");
        }
      }
    });
  }
};

const validateTask = (e) => {
  console.log(e.target);
  const inputFields = e.target.parentNode.querySelectorAll("input");

  for (const input of inputFields) {
    if (input.validity.typeMismatch) {
      input.setCustomValidity("I am expecting an input address!");
      console.log("Mismatch");
    } else if (input.validity.valueMissing) {
      input.setCustomValidity("Missing input");
      console.log("Missing input");
    } else {
      input.setCustomValidity("");
      console.log("Valid");
    }
  }
};

export { constraintValidation, validateTask };
