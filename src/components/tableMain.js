import React from "react";
import Entry from "./entry";
import players from "../data/userseeds.json";
import Table from 'react-bootstrap/Table';
import TableHeader from './tableHeader'

class TableMain extends React.Component {
  state = {
    
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <TableHeader text="Username" property="username"/>
            <TableHeader text="First Name" property="firstName"/>
            <TableHeader text="Last Name" property="lastName"/>
            <TableHeader text="Rank" property="competitiveRank"/>
            <TableHeader text="Main Role" property="mainRole"/>
            <TableHeader text="Main Hero" property="mainHero"/>
            <TableHeader text="Team" property="team"/>
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
          link = {player.link}
        />
      )
    })
  )
}

export default TableMain;
