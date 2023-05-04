// Selectors
const range = document.getElementById("myRange");
const charLength = document.querySelector(".char-length span");
const genPass = document.querySelector(".gen-pass");
const submitBtn = document.querySelector(".generate");
const rating = document.querySelector(".rating-text");
const copyIcon = document.querySelector(".icon-copy");
const bars = document.querySelectorAll(".bar");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const bar4 = document.querySelector(".bar4");
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

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
  allCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkPassStrength(passLength);
    }
  });
  if (range.value == 0) {
    alert("Please choose a valid password length");
    genPass.style.opacity = "0.25";
    rating.textContent = "";
  } else {
    createPassword(passLength);
  }
}

// Function that generates random passwords
function createPassword(passLength) {
  genPass.style.opacity = "1";
  let charset = "";
  let isCheckboxChecked = false;
  // Add characters based on selected checkboxes
  allCheckboxes.forEach((checkbox) => {
    if (checkbox.checked && checkbox.value === "uppercase") {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      isCheckboxChecked = true;
    }
    if (checkbox.checked && checkbox.value === "lowercase") {
      charset += "abcdefghijklmnopqrstuvwxyz";
      isCheckboxChecked = true;
    }
    if (checkbox.checked && checkbox.value === "inc-numbers") {
      charset += "0123456789";
      isCheckboxChecked = true;
    }
    if (checkbox.checked && checkbox.value === "inc-symbols") {
      charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
      isCheckboxChecked = true;
    }
  });
  // Check if at least one checkbox is selected
  if (!isCheckboxChecked) {
    alert("Please select at least one checkbox");
    genPass.style.opacity = "0.25";
  } else {
    // Generate the password using the selected characters
    let password = "";
    for (let i = 0; i < passLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    genPass.textContent = password;
  }
}

// Function that checks the strength of the password
function checkPassStrength(passLength) {
  bars.forEach((bar, index) => {
    bar.style.backgroundColor = "";
    bar.classList.remove("no-border");
    // bar.style.border = "";
    if (index == 0 && passLength > 0 && passLength <= 4) {
      rating.textContent = "too weak!";
      bar.style.background = "#F64A4A";
      bar.classList.add("no-border");
    } else if (index <= 1 && passLength > 4 && passLength <= 8) {
      rating.textContent = "weak";
      bar.style.background = "#FB7C58";
      bar.classList.add("no-border");
    } else if (index <= 2 && passLength > 8 && passLength <= 12) {
      rating.textContent = "medium";
      bar.style.background = "#F8CD65";
      bar.classList.add("no-border");
    } else if (index <= 3 && passLength > 12 && passLength <= 16) {
      rating.textContent = "strong";
      bar.style.background = "#A4FFAF";
      bar.classList.add("no-border");
    }
  });
}

// Function that copies the generated password to clipboard
function copyPassword() {
  const el = document.createElement("textarea");
  el.value = genPass.innerText;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Password copied to clipboard!");
}

// Event listeners
range.addEventListener("input", updateCharLength);
submitBtn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyPassword);
