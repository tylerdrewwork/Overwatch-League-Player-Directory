const CATEGORIES = {
    team: {
      display: "Team",
      value: "team",
      path: "team",
    },
    username: {
      display: "Username",
      value: "username",
      path: ['login', 'username'],
    },
    firstName : {
      display: "First Name",
      value: "firstName",
      path: ['name', 'first'],
    },
    lastName: {
      display: "Last Name",
      value: "lastName",
      path: ['name', 'last'],
    },
    nat: {
      display: "Nationality",
      value: "nat",
      path: 'nat',
    },
    competitiveRank: {
      display: "Rank",
      value: "competitiveRank",
      path: 'rank',
    },
    mainRole: {
      display: "Role",
      value: "mainRole",
      path: 'role',
    },
    mainHero: {
      display: "Main Hero",
      value: "mainHero",
      path: 'hero',
    },
}

export default CATEGORIES;