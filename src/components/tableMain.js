import React from "react";
import Entry from "./entry";
import players from "../data/userseeds.json";
import Table from 'react-bootstrap/Table';

class TableMain extends React.Component {
  state = {

  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Rank</th>
            <th>Main Role</th>
            <th>Main Hero</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {populate()}
        </tbody>
      </Table>
    );
  }
}

function populate () {
  return(
    players.map(player => {
      return (
        <Entry 
          key = {player.id}
          username = {player.username}
          firstName = {player.firstName}
          lastName = {player.lastName}
          competitiveRank = {player.competitiveRank}
          mainRole = {player.mainRole}
          mainHero = {player.mainHero}
          team = {player.team}
        />
      )
    })
  )
}

export default TableMain;
