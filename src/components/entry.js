/* eslint-disable react/prop-types */
import React from 'react';
import CATEGORIES from '../data/categoriesContext';

function Entry(props) {
    function getCategoryStats () {
        let stats = [];

        for (const category in CATEGORIES) {
            let thisCat = CATEGORIES[category]; // thisCat is an Object that includes display, value, and path
            let thisKey = "entry-" + props.id + "-" + thisCat.value;
            if (thisCat.display !== null) {
                switch (thisCat.value) {
                    case "headshot":
                        stats.push(<td key={thisKey}><img 
                            src={props[thisCat.value]}
                            width="100"
                            ></img></td>)
                        break;
                    default:
                        stats.push(<td key={thisKey}>{props[thisCat.value]}</td>);
                }
            }
        }
        return stats;
    }

    return (
        <tr>
            {getCategoryStats()}
        </tr>
    );
}



// function getUsernameWithLink (link, username) {
//     if (link) { return <a href={link}>{username}</a> }
//     else { return username }
// }

export default Entry;