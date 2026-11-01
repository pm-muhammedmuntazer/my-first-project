const getCurrentDate = require("./utils/date");
const toUpperCase = require("./utils/text");

console.log("Hello Muhammed! Welcome to Ubuntu.");
console.log("Node.js is working successfully!");

console.log("Current date and time:");
console.log(getCurrentDate());

console.log("------------------------------");

console.log("Text conversion test:");
console.log(toUpperCase("hello node.js"));
