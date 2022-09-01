// First Name
const fnErrorMsg = document.getElementById("fn-error-msg");
const firstName = document.getElementById("first-name");
const firstNameBox = document.getElementById("first-name-box");

// Last Name
const lastNameBox = document.getElementById("last-name-box");
const lastName = document.getElementById("last-name");
const lnErrorMsg = document.getElementById("last-name-error-msg");

// Email
const emailBox = document.getElementById("email-box");
const emailErrorMsg = document.getElementById("email-error");
const email = document.getElementById("email");

// Password
const pass = document.getElementById("pass");
const passBox = document.getElementById("pass-box");
const passErrorMsg = document.getElementById("pass-error-msg");

// Submit Button
const btn = document.getElementById("btn");

function validate(input, inputBox, errorMsg) {
  var img = new Image();
  img.src = "./images/icon-error.svg";
  img.classList.add("hidden");
  if (input.value == "") {
    img.classList.remove("hidden");
    errorMsg.classList.remove("hidden");
    inputBox.classList.add("error");
    if (inputBox.childElementCount <= 1) inputBox.appendChild(img);
  } else {
    img.classList.add("hidden");
    errorMsg.classList.add("hidden");
    inputBox.classList.remove("error");
    if (inputBox.childElementCount === 2) {
      inputBox.removeChild(inputBox.children[1]);
    }
  }
}

function validateEmail() {
  var img = new Image();
  img.src = "./images/icon-error.svg";
  img.classList.add("hidden");
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === false
  ) {
    emailBox.classList.add("error");
    emailErrorMsg.classList.remove("hidden");
    img.classList.remove("hidden");
    if (emailBox.childElementCount <= 1) emailBox.appendChild(img);
  } else {
    emailBox.classList.remove("error");
    emailErrorMsg.classList.add("hidden");
    if (emailBox.childElementCount === 2) {
      emailBox.removeChild(emailBox.children[1]);
    }
  }
}

btn.addEventListener("click", () => {
  validate(firstName, firstNameBox, fnErrorMsg);
  validate(lastName, lastNameBox, lnErrorMsg);
  validate(pass, passBox, passErrorMsg);
  validateEmail();
});
