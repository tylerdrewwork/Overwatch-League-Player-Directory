import React from 'react';

function TableHeader (props) {
    return (
        <th>
            <button onClick={() => props.sortMethod(props.category)}> {props.text} </button>
        </th>
    );
}

export default TableHeader;