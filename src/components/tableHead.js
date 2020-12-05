/* eslint-disable react/prop-types */
import React from 'react';
import TableHeader from './tableHeader';
import CATEGORIES from '../data/categoriesContext';

function TableHead (props) {
    function getCategories () {
        let categories = [];
        let tableHeaderID = 0;
        for (const category in CATEGORIES) {
            let thisCat = CATEGORIES[category];
            if (thisCat.display !== null) {
                categories.push(<TableHeader 
                    text={thisCat.display} 
                    category={thisCat.value} 
                    sortMethod={props.sortMethod}
                    key={"tableHeader-" + tableHeaderID}
                    />)
            }
            tableHeaderID++;
        }
        return categories;
    }

    return (
        <thead>
            <tr>
                {getCategories()}
                {/* <TableHeader text="Team" category="team" sortMethod={props.sortMethod}/>
                <TableHeader text="Username" category="username" sortMethod={props.sortMethod}/>
                <TableHeader text="First Name" category="firstName" sortMethod={props.sortMethod}/>
                <TableHeader text="Last Name" category="lastName" sortMethod={props.sortMethod}/>
                <TableHeader text="Nationality" category="nat" sortMethod={props.sortMethod}/>
                <TableHeader text="Rank" category="competitiveRank" sortMethod={props.sortMethod}/>
                <TableHeader text="Main Role" category="mainRole" sortMethod={props.sortMethod}/>
                <TableHeader text="Main Hero" category="mainHero" sortMethod={props.sortMethod}/> */}
            </tr>
         </thead>
    )
}



export default TableHead;