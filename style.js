let myArray = [];

function displayArray() {
  const arrayDisplay = document.getElementById("array-display");
  arrayDisplay.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    const element = document.createElement("div");
    element.className = "array-res";
    element.textContent = myArray[i];
    arrayDisplay.appendChild(element);
  }
}
function addElement() {
  const arrayInput = document.getElementById("array-input").value;
  if (arrayInput) {
    myArray.push(arrayInput);
    displayArray();
    document.getElementById("array-input").value = "";
  }
}
function push() {
  myArray.push(prompt("Write Element to push in array.."));
  displayArray();
  document.getElementById("result-message").textContent =
    "Push() Array method  to add element in last.";
}
function pop() {
  myArray.pop();
  displayArray();
  document.getElementById("result-message").textContent =
    "Pop() Array method  to Remove Element in last.";
}
function shift() {
  myArray.shift();
  displayArray();
  document.getElementById("result-message").textContent =
    "shift() Array method  to remove element in start.";
}
function unshift() {
  myArray.unshift(prompt("Write Element to unshift in array.."));
  displayArray();
  document.getElementById("result-message").textContent =
    "Unshift() Array method to add element in start.";
}
function slice() {
  const start = parseInt(prompt("Enter start index for slice:"));
  const end = parseInt(prompt("Enter end index for slice:"));
  const slicedArray = myArray.slice(start, end);
  alert("Sliced Array: " + slicedArray);
}

function splice() {
  const index = parseInt(prompt("Enter index to splice:"));
  const count = parseInt(prompt("Enter number of elements to remove:"));
  const removedItems = myArray.splice(index, count);
  alert("Removed items: " + removedItems);
  displayArray();
}