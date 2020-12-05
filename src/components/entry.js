/* eslint-disable react/prop-types */
import React from 'react';
import CATEGORIES from '../data/categoriesContext';

function Entry(props) {
    function createEntries () {
        let JSX = CATEGORIES.getCategories(category => {
            let thisKey = "entry-" + props.id + "-" + category.value;

            switch (category.value) {
                case "headshot":
                    return(
                        <td key={thisKey}><img 
                            src={props[category.value]}
                            width="100"
                            ></img></td>);
                default:
                    return(
                            <td key={thisKey}>
                            {props[category.value]}
                            </td>);
            }
        });
        
        return JSX;
    }

    return (
        <tr>
            {createEntries()}
        </tr>
    );
}

export default Entry;