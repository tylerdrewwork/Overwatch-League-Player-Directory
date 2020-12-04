/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Entry from './entry';
import getPlayerStat from '../utils/getPlayerStat';

function TableBody (props) {
    function renderPlayers () {
        return (
            props.players.map(player => {
                return (
                    <Entry 
                    // {...getCategoryAttributes()}
                    key = {getPlayerStat(player, 'id')}
                    link = {getPlayerStat(player, 'link')}
                    username = {getPlayerStat(player, 'username')}
                    firstName = {getPlayerStat(player, 'firstName')}
                    lastName = {getPlayerStat(player, 'lastName')}
                    competitiveRank = {getPlayerStat(player, 'competitiveRank')}
                    mainRole = {getPlayerStat(player, 'mainRole')}
                    mainHero = {getPlayerStat(player, 'mainHero')}
                    team = {getPlayerStat(player, 'team')}
                    nat = {getPlayerStat(player, 'nat')}
                    headshot = {getPlayerStat(player, 'headshot')}
                    />
                )
            })
        )
    }
//     function getCategoryAttributes () {
//         let attributes = [];
//         for (const category in CATEGORIES) {
//             attributes.push(`${CATEGORIES[category].value} = ${CATEGORIES[category].path}`);
//         }
//         console.log("Attributes: ", attributes);
//         return attributes;
//     }

    return (
        <tbody>
            {renderPlayers()}
        </tbody>
    )
}


export default TableBody;