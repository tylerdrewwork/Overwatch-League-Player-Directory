/* eslint-disable react/prop-types */
import React from 'react';
import Form from 'react-bootstrap/Form'
import CATEGORIES from '../data/categoriesContext';

function Searchbar(props) {
    return (
        <Form>
            <Form.Group controlId="formSearch">
                <Form.Label>Search Query</Form.Label>
                <Form.Control as="textarea" rows={1} placeholder="Search for a player here!" value={props.query} onChange={props.searchMethod}/>
            </Form.Group>
            <Form.Group controlId="formCategory">
                <Form.Label>Search Category</Form.Label>
                <Form.Control as="select" value={props.category} onChange={props.categoryMethod}> 
                    {createOptionsUsingCategory()}
                    {/* <option value={'team'}>Team</option> 
                    <option value={'username'}>Username</option> 
                    <option>3</option> 
                    <option>4</option>  */}
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

function createOptionsUsingCategory () {
    return CATEGORIES.getCategories(category => {
        return (<option 
            key={"searchoption-"+category.value} 
            value={category.value}>
            {category.display}
        </option>)
    });
}

export default Searchbar;