const CATEGORIES = {
    id: {
        display: null, // What is shown on the category HTML
        value: "id", // What is used as a value when trying to read this
        path: "id", // Where to find this value in the player object
    },
    link: {
        display: null,
        value: 'link',
        path: '',
    },
    headshot: {
        display: "Photo",
        value: "headshot",
        path: "headshot"
    },
    team: {
      display: "Team",
      value: "team",
      path: ["teams", 0, 'team', 'name'],
    },
    username: {
      display: "Username",
      value: "username",
      path: 'name',
    },
    firstName : {
      display: "First Name",
      value: "firstName",
      path: 'givenName',
    },
    lastName: {
      display: "Last Name",
      value: "lastName",
      path: 'familyName',
    },
    nat: {
      display: "Nationality",
      value: "nat",
      path: 'nationality',
    },
    // competitiveRank: {
    //   display: "Rank",
    //   value: "competitiveRank",
    //   path: 'rank',
    // },
    mainRole: {
      display: "Role",
      value: "mainRole",
      path: ['attributes', 'role'],
    },
    mainHero: {
      display: "Main Hero",
      value: "mainHero",
      path: ['attributes', 'heroes', [0]],
    },
}

export default CATEGORIES;

/*
Old categories, before the refactor into a new OWL API
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
}*/