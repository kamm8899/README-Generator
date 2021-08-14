// TODO: Include packages needed for this application
const fs = require("fs");
const inq = requie('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'github',
    message: 'Enter your Github username?. (Required)',
    validate: github => {
      if (github) {
        return true;
      } else {
        console.log('Please enter a valid github username!');
        return false;
      }
    }
    },
    {
    type: 'input',
    name: 'title',
    message: 'Provide the title of Your Project',
    validate: title => {
        if(title){
            return true;
        } else {
            console.log('Please provide a title for your Project!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'table of contents',
    message: 'Provide a table of contents',
    choices:["Installation", "Usage", "Contributors", "languages", "Liscense", "Languages", "Features", "Badges"]
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




// Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
