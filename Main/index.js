// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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

