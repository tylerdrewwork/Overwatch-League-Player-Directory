/* eslint-disable react/prop-types */
import React from 'react';
import Form from 'react-bootstrap/Form'

function Searchbar(props) {
    return (
        <Form>
            <Form.Group controlId="formSearch">
                <Form.Label>Search Query</Form.Label>
                <Form.Control as="textarea" rows={1} placeholder="Search for a player here!" value={props.query} onChange={props.searchMethod}/>
            </Form.Group>
            <Form.Group controlId="formCategory">
                <Form.Label>Search Category</Form.Label>
                <Form.Control as="select"> 
                    <option>1</option> 
                    <option>2</option> 
                    <option>3</option> 
                    <option>4</option> 
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default Searchbar;