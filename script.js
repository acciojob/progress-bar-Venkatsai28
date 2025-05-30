//your JS code here. If required.
// Select all circle elements that represent steps in the progress bar
const circles = document.querySelectorAll(".circle");

// Select all line elements that connect the circles
const lines = document.querySelectorAll(".line");

// Select the navigation buttons
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

// Initialize state - tracks which step is currently active (starts at step 1)
let currentActive = 1;

/**
 * Event handler for the "Next" button
 * Increments the currentActive state and updates the UI
 */
nextButton.addEventListener("click", () => {
  // Move to the next step
  currentActive++;

  // Prevent going beyond the maximum number of steps
  if (currentActive > circles.length) currentActive = circles.length;

  // Update the UI to reflect the new state
  updateUI();
});

/**
 * Event handler for the "Previous" button
 * Decrements the currentActive state and updates the UI
 */
prevButton.addEventListener("click", () => {
  // Move to the previous step
  currentActive--;

  // Prevent going below the first step
  if (currentActive < 1) currentActive = 1;

  // Update the UI to reflect the new state
  updateUI();
});

/**
 * Updates the UI based on the currentActive state
 * - Adds/removes 'active' class to circles based on current step
 * - Adds/removes 'active' class to lines based on current step
 * - Updates button disabled states
 */
function updateUI() {
  // Update circles - add 'active' class to all circles up to currentActive
  circles.forEach((circle, idx) => {
    // Using ternary operator to add or remove the 'active' class
    // If index is less than currentActive, the circle should be active
    idx < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  // Update lines - add 'active' class to all lines before currentActive
  lines.forEach((line, idx) => {
    // A line should be active only if both circles it connects are active
    idx < currentActive - 1
      ? line.classList.add("active")
      : line.classList.remove("active");
  });

  // Disable the Previous button if on the first step
  prevButton.disabled = currentActive === 1;

  // Disable the Next button if on the last step
  nextButton.disabled = currentActive === circles.length;
}