/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './entry';
import CATEGORIES from '../data/categoriesContext';

function TableBody (props) {
    function renderPlayers () {
        return (
            props.players.map(player => {
                return (
                    <Entry 
                    // {...getCategoryAttributes()}
                    key = {player.login.uuid}
                    link = {player.link}
                    username = {player.login.username}
                    firstName = {player.name.first}
                    lastName = {player.name.last}
                    competitiveRank = {player.rank}
                    mainRole = {player.role}
                    mainHero = {player.hero}
                    team = {player.team}
                    nat = {player.nat}
                    />
                )
            })
        )
    }

    function getCategoryAttributes () {
        let attributes = [];
        for (const category in CATEGORIES) {
            attributes.push(`${CATEGORIES[category].value} = ${CATEGORIES[category].path}`);
        }
        console.log("Attributes: ", attributes);
        return attributes;
    }

    return (
        <tbody>
            {renderPlayers()}
        </tbody>
    )
}


export default TableBody;