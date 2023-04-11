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
