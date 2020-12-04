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
    nationality: {
      display: "Nationality",
      value: "nat",
      path: 'nat',
    },
    rank: {
      display: "Rank",
      value: "competitiveRank",
      path: 'rank',
    },
    role: {
      display: "Role",
      value: "role",
      path: 'role',
    },
    hero: {
      display: "Main Hero",
      value: "hero",
      path: 'hero',
    },
}

export default CATEGORIES;