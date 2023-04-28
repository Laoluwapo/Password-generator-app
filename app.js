// Selectors
const range = document.getElementById("myRange");
const charLength = document.querySelector(".char-length span");
const genPass = document.querySelector(".gen-pass");
const submitBtn = document.querySelector(".generate");
const rating = document.querySelector(".rating-text");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const bar4 = document.querySelector(".bar4");

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
  if (range.value == 0) {
    alert("Please eje, choose a valid password length");
    genPass.textContent = "";
  } else {
    createPassword(passLength);
  }
  checkPassStrength(passLength);
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

// Function that checks the strength of the password
function checkPassStrength(passLength) {
  // Reset the styles of each bar element
  bar1.style.backgroundColor = "";
  bar2.style.backgroundColor = "";
  bar3.style.backgroundColor = "";
  bar4.style.backgroundColor = "";
  // Check the strength
  if (passLength > 0 && passLength <= 4) {
    rating.textContent = "too weak!";
    bar1.style.background = "#F64A4A";
  } else if (passLength > 4 && passLength <= 8) {
    rating.textContent = "weak";
    bar1.style.background = "#FB7C58";
    bar2.style.background = "#FB7C58";
  } else if (passLength > 8 && passLength <= 12) {
    rating.textContent = "medium";
    bar1.style.background = "#F8CD65";
    bar2.style.background = "#F8CD65";
    bar3.style.background = "#F8CD65";
  } else if (passLength > 12 && passLength <= 16) {
    rating.textContent = "strong";
    bar1.style.background = "#A4FFAF";
    bar2.style.background = "#A4FFAF";
    bar3.style.background = "#A4FFAF";
    bar4.style.background = "#A4FFAF";
  } else {
    rating.textContent = "too weak!";
    bar1.style.background = "#F64A4A";
  }
}

// Event listeners
range.addEventListener("input", updateCharLength);
submitBtn.addEventListener("click", generatePassword);
