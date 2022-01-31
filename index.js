const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { type } = require("os");
const { finished } = require("stream");
const generateHTML = require("./lib/generateHTML");

const team = []; // this is new team memeber array

menu = () => {
  inquirer
    .prompt({
      type: "list",
      name: "newEmployee",
      message: "Would you like to add a new team memeber?",
      choices: ["Intern", "Engineer", "Finished"],
      filter(value) {
        return value.toLowerCase();
      },
    })
    .then(({ newEmployee }) => {
      switch (newEmployee) {
        case "engineer":
          createEngineer();
          break;
        case "intern":
          createIntern();
          break;
        case "finished":
          const htmlContent = generateHTML(team);
          fs.writeFile("./dist/index.html", htmlContent, (err) => {
            err ? console.log(err) : console.log("wow you did it");
          });
          break;
      }
    });
};
//function for creating manager

createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the managers",
      },
      {
        type: "input",
        name: "id",
        message: "what is the team manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is the team manager's email?",
      },
      {
        type: "input",
        name: "address",
        message: "What is their home address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
      },
    ])

    .then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      team.push(manager);
      menu();
    });
  createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Engineer name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is their email address?",
        },
        {
          type: "input",
          name: "github",
          message: "What is their github?",
        },
      ])
      .then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
        menu();
      });
  };
  createIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the Intern",
        },
        {
          type: "input",
          name: "id",
          message: "what is the intern id?",
        },
        {
          type: "input",
          name: "email",
          message: "what is the intern email?",
        },
        {
          type: "input",
          name: "school",
          message: "What school did the intern go??",
        },
      ])

      .then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        menu();
      });
  };
};
createManager();
// createEngineer();
// createIntern();
