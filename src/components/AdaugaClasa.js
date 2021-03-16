import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
 
const AddClass = ({listaClase}) => {
    const [clasa, setClasa] = useState('');

    const handleSubmit = (ev) => {
        console.log('adauga clasa');
        listaClase.push(clasa);
        ev.preventDefault();
        setClasa('');
        console.log(listaClase);
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
</>);
}
 
export default AddClass;