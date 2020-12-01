import React from "react";
import Entry from "./entry";
import players from "../data/userseeds.json";

class Table extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        {populate()}
      </div>
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

export default Table;
