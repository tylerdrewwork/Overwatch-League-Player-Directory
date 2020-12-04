import React from 'react';
import Form from 'react-bootstrap/Form'

function Searchbar() {
    return (
        // <div>
        //     testty
        // </div>
        <Form>
            <Form.Group>
                <Form.Label>Search Query</Form.Label>
                <Form.Control as="textarea" rows={1}/>
                <Form.Text>
                    Search Test
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select"> 
                    <option>1</option> 
                    <option>2</option> 
                    <option>3</option> 
                    <option>4</option> 
                </Form.Control>
                <Form.Text>
                    Category Text
                </Form.Text>
            </Form.Group>
        </Form>
    );
}

export default Searchbar;