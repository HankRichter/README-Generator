// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No License ") {
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    licenseLink = "https://lbesson.mit-license.org/";
  } else if (license === "GPL") {
    licenseLink = "https://perso.crans.org/besson/LICENSE.html";
  } else if (license === "CC") {
    licenseLink = "https://creativecommons.org/licenses/by-nd/4.0/";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `### ${license}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseBadge(data.license[0])}

  ${renderLicenseSection(data.license[0])}
  ${renderLicenseLink(data.license[0])}
  ## Table of Contents:
  ### -[License](#license)
  ### -[Description](#description)
  ### -[Installation](#instllation)
  ### -[Usage](#usage)
  ### -[Contribution](#contribution)
  ### -[Testing](#testing)
  ### -[Questions](#questions)

  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.test}
  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com)
`;
}

module.exports = generateMarkdown;
