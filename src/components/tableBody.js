/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './entry';

function TableBody (props) {
    function renderPlayers () {
        return (
            props.players.map(player => {
                return (
                    <Entry 
                    key = {player.login.uuid}
                    username = {player.login.username}
                    firstName = {player.name.first}
                    lastName = {player.name.last}
                    competitiveRank = {player.rank}
                    mainRole = {player.role}
                    mainHero = {player.hero}
                    team = {player.team}
                    link = {player.link}
                    nat = {player.nat}
                    />
                )
            })
        )
    }

    return (
        <tbody>
            {renderPlayers()}
        </tbody>
    )
}


export default TableBody;