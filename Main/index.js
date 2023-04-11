//Pulls libraries and functions from other files into the index for use.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// An array of questions prompted to the user.
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title of the project.",
  },
  {
    type: "input",
    name: "description",
    message: "Description of the project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation steps for the project.",
  },
  {
    type: "input",
    name: "usage",
    message: "How can the project be used?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose the license you would like to assign to the project.",
    choices: ["MIT", "GPL", "CC", "No License"],
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contributors to this project.",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions for the project.",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email.",
  },
];

// This functions writes to the README when called. Logs a message when Readme is created.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("README is created!");
  });
}

// This function runs the generateMarkdown function after the user is prompted the quesitons array.
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Calls the init function
init();
