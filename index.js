const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// main function for the whole application
menu = () => {
  //function for creating manager

  createManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the managers",
          // validation here
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
        console.log(manager);
      });
  };
  createManager();
  createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the managers name?",
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
        console.log(engineer);
      });
  };
  createEngineer();
};
menu();
