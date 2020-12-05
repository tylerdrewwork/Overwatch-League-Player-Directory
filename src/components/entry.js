/* eslint-disable react/prop-types */
import React from 'react';
import CATEGORIES from '../data/categoriesContext';

function Entry(props) {
    function createEntries () {
        let JSX = CATEGORIES.getCategories(category => {
            let thisKey = "entry-" + props.id + "-" + category.value;
            let primaryColor = "#" + props.teamColorPrimary;
            let secondaryColor = "#" + props.teamColorSecondary;

            switch (category.value) {
                case "headshot":
                    return(
                        <td 
                            className="entry-headshot"
                            key={thisKey}
                            style={{backgroundColor: primaryColor}}>
                            <div 
                                className="entry-headshot-clr"
                                style={{backgroundColor: primaryColor, borderBottomColor: secondaryColor}}></div>
                            <img 
                                src={props[category.value]}
                                width="128"></img>
                        </td>);
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
        <tr className="entry">
            {createEntries()}
        </tr>
    );
}

export default Entry;