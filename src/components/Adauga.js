import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Adauga.css';
 
const Adauga = ({elevi}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    console.log(elevi);
    
    const handleSubmit = ev => {
        console.log('buton apasat');
        elevi.push({'firstName': firstName, 'lastName': lastName});
        setFirstName("");
        setLastName("");
        ev.preventDefault();
    };

    return (
    <>
        <h1>Adauga elev</h1>
        <Form onSubmit={handleSubmit}>
            <Row>           
                <Col>
                    <Form.Control 
                        placeholder="Nume"
                        value={firstName}
                        onChange={e=> setFirstName(e.target.value)} 
                    />
                </Col>
                <Col>
                    <Form.Control 
                        placeholder="Prenume"
                        value={lastName}
                        onChange={e=> setLastName(e.target.value)}
                     />
                </Col>
                <Button variant="primary" type="submit" >
                    Adauga
                </Button>
            </Row>
           
        </Form>
    </>
    );
}
 
export default Adauga;