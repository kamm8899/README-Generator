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
    name: 'table of contents',
    message: 'Provide a table of contents',
    choices:["Installation", "Usage", "Contributors", "languages", "Liscense", "Languages", "Features", "Badges"]
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
        choices: ["MIT", "ISC", "Apache 2.0 License", "Boost", "BSD 3-Clause", "Eclipse", "GNU", "IBM"],
        validate: license => {
          if (license) {
            return true;
          } else {
            console.log('Please provide a valid Liscense!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please provide frequently asked questions and answers?',
        validate: questionInput => {
          if (questionInput) {
            return true;
          } else {
            console.log('Please provide questions and answers!');
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


//badges

//how to make an input appear as a list



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
