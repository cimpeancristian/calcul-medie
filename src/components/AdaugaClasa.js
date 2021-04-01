import React, {useState} from 'react';

import {generatePath} from 'react-router';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {CLASA_API, CLASA_API_DELETE, REFRESH_KEY} from '../utils/constants';
import Api from '../utils/api';

import {uniqueId} from 'lodash';
 
const AddClass = ({listaClase, setRefreshKey}) => {
    const [clasa, setClasa] = useState('');

    console.log('clasa', listaClase);

    const handleSubmit = ev => {
        const clasaObj = {clasa};
        console.log('adauga clasa');
        console.log(clasa, clasaObj);
      
        Api.post(CLASA_API, clasaObj);
        setRefreshKey(uniqueId(REFRESH_KEY));
        ev.preventDefault();
        setClasa('');
    };

    const handleDelete = (ev, id) => {
        console.log(id);
        Api.delete(generatePath(CLASA_API_DELETE, {id}));
        setRefreshKey(uniqueId(REFRESH_KEY));
    };

 
    return (
      <>
        <h2>Adauga Clasa</h2>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col> 
                    <Form.Control 
                        value={clasa}
                        onChange={e=> setClasa(e.target.value)} 
                    />
                </Col>
                <Button variant="primary" type="submit" >
                    Adauga Clasa
                </Button>
            </Row>
        </Form>
        {listaClase.map((cls, index) => (
        <div key={index} className="container" >
            <div className="clasa" >{cls.clasa}</div>
            <Button variant="danger" onClick={ev => handleDelete(ev, cls.id)} >Stergere</Button>       
        </div>
    ))}
</>);
}
 
export default AddClass;