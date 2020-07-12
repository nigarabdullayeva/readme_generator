const inquirer = require("inquirer");
const fs = require ("fs");
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    { type: "input",
      message: "Please enter your project title.",
      name: "title"
    },
    {   type: "input",
        message: "Please enter short description of the project.",
        name: "description"
    },
    {
      type: "input",
      message: "Do you want to use a table of contents?",
      name: "Table of Contents"
    },
    {
        type: "input",
        message: "Provide an instruction of the installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Describe an information about usage.",
        name: "usage"
    },
    {  
        type: "list",
        message: "Have you used any license ?",
        name: "license",
        choices: ["MIT", "IBM"]
    },

    {
        type: "input",
        message: "Please name a contributor of this file",
        name: "Contributing"
    },
    {  
        type: "input",
        message: "Please type your questions",
        name: "question"
        
    },
    {  
        type: "input",
        message: "Please type your email adress",
        name: "email"
        
    },
    {  
        type: "input",
        message: "Your Github account",
        name: "github"
        
    }
    
];



// function to write README file
function writeToFile(fileReadme) {
    fs.writeFile("./README.md", fileReadme, function (err) {
        if (err) throw err;
        console.log('Your file have been successfully created!');
    })};

// function to initialize program
function init() {
    const response = inquirer
    .prompt(questions)
    .then(function(response) {
      const data ={}
      data.title = response.title;
      data.description = response.description;
      data.installation = response.installation;
      data.usage = response.usage;
      data.license = response.license;
      data.contributing = response.contributing;
      data.question = response.question;
      data.email = response.email;
      data.github = response.github;
      const fileReadme = generateMarkdown(data);
      writeToFile(fileReadme);
  });
  }

// function call to initialize program
init();
