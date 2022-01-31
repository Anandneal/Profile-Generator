const Employee = require("./Employee");
const Manager = require("./Manager");

const makeManager = function ({ name, id, email, officeNumber }) {
  return `<div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-title"><i class="fas mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:email">${email}</a>
        </li>
        <li class="list-group-item">Office number:${officeNumber}</li>
      </ul>
    </div>
  </div>
  `;
};

const makeEngineer = function ({ name, id, email, github }) {
  return `<div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-title"><i class="fas mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:email">${email}</a>
        </li>
        <li class="list-group-item">Github:${github}</li>
      </ul>
    </div>
  </div>
  `;
};
const makeIntern = function ({ name, id, email, school }) {
  return `<div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${name}</h2>
      <h3 class="card-title"><i class="fas mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID:${id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:email">${email}</a>
        </li>
        <li class="list-group-item">School:${school}</li>
      </ul>
    </div>
  </div>
  `;
};
const teamCard = [];

const generateHTML = (team) => {
  team.forEach((employee) => {
    switch (employee.getRole()) {
      case "Manager":
        const managerCard = makeManager(employee);
        teamCard.push(managerCard);
        break;
      case "Engineer":
        const engineerCard = makeEngineer(employee);
        teamCard.push(engineerCard);

        break;
      case "Intern":
        const internCard = makeIntern(employee);
        teamCard.push(internCard);

        break;
    }
  });
  const teamCardHTML = teamCard.join("");
  const generateTeam = generateTeamPage(teamCardHTML);
  return generateTeam;
};
const generateTeamPage = (teamCard) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
            ${teamCard}
          </div>
        </div>
      </div>
    </body>
  </html>  `;
};

module.exports = generateHTML;
