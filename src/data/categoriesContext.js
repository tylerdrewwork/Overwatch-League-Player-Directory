import _ from 'underscore';

const CATEGORIES = {
    getCategories: (cb) => {
      let JSX = [];
      for (const category in CATEGORIES) {
        let thisCat = CATEGORIES[category]; // thisCat is an Object that includes display, value, and path
        if (thisCat.display !== null && !_.isFunction(thisCat)) { 
          JSX.push(cb(thisCat));
        }
      }
      return JSX;
    },
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
    teamColorPrimary: {
      display: null,
      value: "teamColorPrimary",
      path: ["teams", 0, 'team', 'primaryColor'],
    },
    teamColorSecondary: {
      display: null,
      value: "teamColorSecondary",
      path: ["teams", 0, 'team', 'secondaryColor'],
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