console.log("Hello from external JavaScript!");

console.log("Welcome to CampusHub!");
console.log(10 + 5);

// alert("Welcome to CampusHub!");

document.getElementById("message").innerHTML = "Welcome to CampusHub!";

// document.write("Hello JavaScript!");

let name = "John";
let age = 21;

console.log(name);
console.log(age);

let x = 10;
let y = 20;

console.log(x + y);

// This is a single-line comment

/*
This is a
multi-line comment
*/

let studentName = "Arta";
let StudentName = "Bleron";

let participants = 20;
participants = 25;
console.log(participants);

const eventName = "Career Day";
console.log(eventName);

var university = "University of Prishtina";

if (true) {
  let greeting = "Hello!";
  const number = 10;
}
// console.log(greeting); // Error

const eventName2 = "Web Development Workshop";
const participants2 = 35;
const registrationOpen = true;

let eventLocation;
let eventDescription = null;

console.log(typeof eventName); // string
console.log(typeof participants); // number
console.log(typeof registrationOpen); // boolean
console.log(typeof eventLocation); // undefined

console.log(5 == "5"); // true
console.log(5 === "5"); // false

const studentAge = 21;
const hasStudentCard = true;
console.log(studentAge >= 18 && hasStudentCard); // true

const capacity = 50;
if (participants < capacity) {
  console.log("Registration is open!");
}

if (registrationOpen) {
  console.log("Registration is open!");
} else {
  console.log("Registration is closed!");
}

if (participants < capacity) {
  console.log("Available seats!");
} else if (participants === capacity) {
  console.log("The event is full!");
} else {
  console.log("Capacity exceeded!");
}

function showWelcomeMessage() {
  console.log("Welcome to CampusHub!");
}
showWelcomeMessage();

function greetStudent(name) {
  console.log("Welcome, " + name + "!");
}
greetStudent("Arta");
greetStudent("Bleron");

function calculateAvailableSeats(capacity, participants) {
  return capacity - participants;
}
const availableSeats = calculateAvailableSeats(50, 35);
console.log(availableSeats);

function changeMessage() {
  document.getElementById("message").textContent =
    "Discover events happening on campus!";
}

document.getElementById("message").style.color = "blue";
document.getElementById("message").style.fontSize = "24px";

document.getElementById("message").style.display = "none";

document.getElementById("message").style.display = "block";

document.getElementById("eventImage").src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMR7Ps9Ptz3Dg05OzleaoEwQjo509dXytkk_hUQ2F4TA&s=10";

function showMessage() {
  alert("Welcome to CampusHub!");
}

function showSelection(value) {
  alert("You selected: " + value);
}

function showMessage() {
  alert("Form submitted!");
}
