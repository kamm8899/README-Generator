// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if(license === 'No License'){
   return '';
 }else{
   if(license === 'Apache 2.0 License'){
     return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
   }

 }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "No License"){
    return '';
  }if(license ==="Apache 2.0 License"){
    return 'https://opensource.org/licenses/Apache-2.0';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //link
  const licenseLink =renderLicenseLink(license);
  //text
  const licenseText = `This repo is using: [${license}](${licenseLink})`;
  //Heading
  return `# License 
  ${licenseText}`;
  }

  //add Question section
  function renderQuestion(questions, github, email){
  return `# Frequently Asked Questions
  For any questions, please reach out to me at:<br/>
  Github: [${github}](https://github.com/kamm8899/README-Generator) <br/>
  Email: [${email}](mailto:${email})`
  }

  //Description Section
  function renderDescription(description){
    return `# Description
    ${description}`
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderDescription(data.description)}
  ${renderQuestion(data.questions, data.github, data.email)}
  ${renderLicenseSection(data.license)}
`;

}

module.exports = generateMarkdown;
