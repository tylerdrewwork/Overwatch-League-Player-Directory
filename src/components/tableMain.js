import React, {useState, useEffect} from "react";
import Entry from "./entry";
import playerdata from "../data/userseeds.json";
import Table from 'react-bootstrap/Table';
import TableHeader from './tableHeader';

function TableMain () {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     players: playerdata,
  //     sortCategory: null,
  //     sortDirection: "descending",
  //     searchQuery: null,
  //   }

  //   this.sortByCategory = this.handleClick.bind(this);
  // }

  const [players, setPlayers] = useState([...playerdata]);
  const [sortCategory, setSortCategory] = useState("username");
  const [sortDirection, setSortDirection] = useState("descending");
  const [searchQuery, setSearchQuery] = useState(null);

  function componentDidMount() {
    // this.sortByCategory("username");
  }

  function componentWillUnmount() {

  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <TableHeader text="Username" category="username" sortMethod={sortByCategory}/>
          <TableHeader text="First Name" category="firstName" sortMethod={sortByCategory}/>
          <TableHeader text="Last Name" category="lastName" sortMethod={sortByCategory}/>
          <TableHeader text="Rank" category="competitiveRank" sortMethod={sortByCategory}/>
          <TableHeader text="Main Role" category="mainRole" sortMethod={sortByCategory}/>
          <TableHeader text="Main Hero" category="mainHero" sortMethod={sortByCategory}/>
          <TableHeader text="Team" category="team" sortMethod={sortByCategory}/>
        </tr>
      </thead>
      <tbody>
        {/* Needs code to display players */}
        {sortCategory && sortByCategory()}
      </tbody>
    </Table>
  );

  function sortByCategory (category, isDescending) {
    // console.log("sorted by category", category);

    let sortedPlayers = players.sort(function(a, b) {
      return a[category] - b[category];
    });

    setPlayers(sortedPlayers);

    // console.log("sorted players", sortedPlayers);

    // this.populate (sortedPlayers);
  }

  // searchByCategory () {

  // }

  // populate (players) {
  //   players.map(player => {
  //     return (
  //       <Entry 
  //         key = {player.id}
  //         username = {player.username}
  //         firstName = {player.firstName}
  //         lastName = {player.lastName}
  //         competitiveRank = {player.competitiveRank}
  //         mainRole = {player.mainRole}
  //         mainHero = {player.mainHero}
  //         team = {player.team}
  //         link = {player.link}
  //       />
  //     )
  //   })
  // }

  // populateOLD () {
  //   return(
  //     playerdata.map(player => {
  //       return (
  //         <Entry 
  //           key = {player.id}
  //           username = {player.username}
  //           firstName = {player.firstName}
  //           lastName = {player.lastName}
  //           competitiveRank = {player.competitiveRank}
  //           mainRole = {player.mainRole}
  //           mainHero = {player.mainHero}
  //           team = {player.team}
  //           link = {player.link}
  //         />
  //       )
  //     })
  //   )
  // }
}

export default TableMain;
