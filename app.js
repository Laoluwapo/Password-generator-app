// Selectors
const range = document.getElementById("myRange");

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

// Event listeners
