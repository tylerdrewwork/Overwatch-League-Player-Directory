import React from 'react';

function Entry() {
    return (
        <tr>
            <td>{getUsernameWithLink(this.props.link, this.props.username)}</td>
            <td>{this.props.firstName}</td>
            <td>{this.props.lastName}</td>
            <td>{this.props.competitiveRank}</td>
            <td>{this.props.mainRole}</td>
            <td>{this.props.mainHero}</td>
            <td>{this.props.team}</td>
        </tr>
    );
}

function getUsernameWithLink (link, username) {
    if (link) { return <a href={link}>{username}</a> }
    else { return username }
}

export default Entry;