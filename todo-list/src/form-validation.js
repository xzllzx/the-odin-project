const validateForm = (e) => {
  const inputFields = Array.from(e.target.parentNode.querySelectorAll("input"));
  const validForm = inputFields.every((input) => input.validity.valid === true);
  return validForm;
};

export { validateForm };
