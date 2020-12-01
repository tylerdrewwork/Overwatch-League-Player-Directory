import React from 'react';

function Entry (props) {
    return (
        <tr>
            <td>{props.username}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.rank}</td>
            <td>{props.mainRole}</td>
            <td>{props.mainHero}</td>
            <td>{props.team}</td>
        </tr>
    );
}

export default Entry;