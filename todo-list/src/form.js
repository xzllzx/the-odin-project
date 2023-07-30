const validateForm = (e) => {
  const form = e.target.parentNode;
  const inputFields = Array.from(e.target.parentNode.querySelectorAll("input"));

  form.classList.add("submitted");

  const validForm = inputFields.every((input) => input.validity.valid === true);
  return validForm;
};

export { validateForm };
