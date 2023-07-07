const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");
const createAccountButton = document.querySelector("button.sign-up");
const wrongPasswordAlert = document.querySelector("p.wrong-password");

function checkPasswordMatch() {
  if (passwordInput.value === confirmPasswordInput.value) {
    wrongPasswordAlert.style.color = "white";
    alert(
      "Your account has been created! Except I did not implement this part"
    );
  } else wrongPasswordAlert.style.color = "red";
}

createAccountButton.addEventListener("click", checkPasswordMatch);
