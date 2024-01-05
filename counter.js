const decrementbtn = document.getElementById("decrementbtn");
const resetbtn = document.getElementById("resetbtn");
const incrementbtn = document.getElementById("incrementbtn");
const counterLabel = document.getElementById("counterLabel"); // Updated the variable name to follow a consistent convention
let counter = 0;

// Increment button click event
incrementbtn.onclick = function () {
   counter++;
   counterLabel.textContent = counter;
}

// Decrement button click event
decrementbtn.onclick = function () {
   counter--;
   counterLabel.textContent = counter;
}

// Reset button click event
resetbtn.onclick = function () {
   counter = 0;
   counterLabel.textContent = counter;
}
