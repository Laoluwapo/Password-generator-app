// Selectors
const range = document.getElementById("myRange");
const charLength = document.querySelector(".char-length span");
const genPass = document.querySelector(".gen-pass");
const submitBtn = document.querySelector(".generate");

// Functions
// Function that updates the range input color
function updateGradient() {
  let value = ((range.value - range.min) / (range.max - range.min)) * 100;
  range.style.background =
    "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
    value +
    "%, #18171F " +
    value +
    "%, #18171F 100%)";
}

// Call the updateGradient function when the page loads
window.onload = function () {
  updateGradient();
};

// Set the oninput event handler to call the updateGradient function
range.oninput = function () {
  updateGradient();
};

// Function that updates the character length as the slider is changed
function updateCharLength(e) {
  let passLength = e.target.value;
  charLength.textContent = passLength;
}

// Function that handles other password generating functions
function generatePassword() {
  let passLength = range.value;
  if (!range.min) {
    createPassword(passLength);
  } else {
    alert("Please eje, choose a valid password length");
  }
}

// Function generate random password
function createPassword(passLength) {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  genPass.textContent = password;
}

// Event listeners
range.addEventListener("input", updateCharLength);
submitBtn.addEventListener("click", generatePassword);
