// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
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
        name: 'email',
        message: 'Provide your email associated with github?',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please provide a valid email!');
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
    name: 'tableContents',
    message: 'Provide a table of contents',
    choices:["Installations", "Usage", "Contributors", "License", "Tests", "Questions"]
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation Instructions for This Project',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please provide valid Install Instructions for this Project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage examples for your project',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to provide valid usage Instructions');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can someone contribute to this project',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('Please provide contribution Instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'How can we run test for this Project?',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please provide valid test information!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose the Liscense used for this project',
        choices: ["MIT", "ISC", "Apache 2.0 License", "Boost","Boost", "BSD 3-Clause", "Eclipse", "GNU", "IBM"],
        validate: license => {
          if (license) {
            return true;
          } else {
            console.log('Please provide a valid Liscense!');
            return false;
          }
        }
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./asset/readme-guide.md',(fileName, data), err =>{
        if(err){
            console.log(err);
            return;
        }else{
            console.log("No Errors, Readme was generated");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data)=> {
        writeToFile('README.md', generateMarkdown(data))
    });
}

// Function call to initialize app
init();


