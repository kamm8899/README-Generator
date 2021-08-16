// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if(license === 'No License'){
   return '';
 }else if(license === 'Apache 2.0 License'){
     return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }else if(license ==='MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }else if(license ==='ISC'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }else if(license ==='Boost'){
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }else if(license ==='BSD 3-Clause'){
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }else if(license ==='Eclipse'){
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }else if(license === 'IBM'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "No License"){
    return '';
  }if(license ==="Apache 2.0 License"){
    return 'https://opensource.org/licenses/Apache-2.0';
  }else if(license === "MIT"){
    return 'https://opensource.org/licenses/MIT';
  }else if(license === "ISC"){
    return 'https://opensource.org/licenses/ISC';
  }else if(license === "Boost"){
    return 'https://www.boost.org/LICENSE_1_0.txt';
  }else if(license === "BSD 3-Clause"){
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }else if(license === 'Eclipse'){
    return 'https://opensource.org/licenses/EPL-1.0';
  }else if(license === 'IBM'){
    return 'https://opensource.org/licenses/IPL-1.0';
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
  function renderQuestion(github, email){
  return `## Questions
  For any questions, please reach out to me at:<br/>
  Github: [${github}](https://github.com/kamm8899/README-Generator) <br/>
  Email: [${email}](mailto:${email})`
  }

  //Description Section
  function renderDescription(description){
  return `## Description
  ${description}`
  }
  //Table of Contents
  function renderContents(tableContents){
  let contents= `## Table of Contents 
  ` ;
  for(i=0;i<tableContents.length;i++){
    contents= contents + `[${tableContents[i]}](#${tableContents[i]})
  
  `;
  }
  return contents;
  }
  //Installation
  function renderInstallation(installation){
  return `## Installations
  ${installation}`
  }
function renderUsage(usage){
  return` ## Usage
  ${usage}`
}
function renderContribution(contribution){
  return ` ## Contribution
  ${contribution}`
}
function renderTest(test){
  return `## Tests
  ${test}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderDescription(data.description)}
  ${renderContents(data.tableContents)}
  ${renderInstallation(data.installation)}
  ${renderUsage(data.usage)}
  ${renderContribution(data.contribute)}
  ${renderTest(data.test)}
  ${renderQuestion(data.github, data.email)}
  ${renderLicenseSection(data.license)}
`;

}

module.exports = generateMarkdown;

//how to break up the installation into lines and link it