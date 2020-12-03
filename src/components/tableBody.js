/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './entry';

function TableBody (props) {
    function renderPlayers () {
        return (
            props.players.map(player => {
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

    return (
        <tbody>
            {renderPlayers()}
        </tbody>
    )
}


export default TableBody;