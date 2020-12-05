/* eslint-disable react/prop-types */
import React from 'react';
import TableHeader from './tableHeader';
import CATEGORIES from '../data/categoriesContext';

function TableHead (props) {
    function getCategories () {
        return CATEGORIES.getCategories(category => {
            return (
            <TableHeader 
                text={category.display} 
                category={category.value} 
                sortMethod={props.sortMethod}
                key={"tableHeader-" + category.value}
                />)
        });
    }

    return (
        <thead>
            <tr>
                {getCategories()}
            </tr>
         </thead>
    )
}



export default TableHead;