/* eslint-disable react/prop-types */
import React from 'react';

function Entry(props) {
    return (
        <tr>
            <td>{props.team}</td>
            <td>{getUsernameWithLink(props.link, props.username)}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.nat}</td>
            <td>{props.competitiveRank}</td>
            <td>{props.mainRole}</td>
            <td>{props.mainHero}</td>
        </tr>
    );
}

function getUsernameWithLink (link, username) {
    if (link) { return <a href={link}>{username}</a> }
    else { return username }
}

export default Entry;