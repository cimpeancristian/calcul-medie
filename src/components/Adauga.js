import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import {ELEVI_API, REFRESH_KEY} from '../utils/constants';
import Api from '../utils/api';

import {uniqueId} from 'lodash';

import './Adauga.css';
 
const Adauga = ({listaClase, setRefreshKey}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dropdownValue, setDropdownValue]=useState("Selectare Clasa");

    console.log(listaClase);
    
    const handleSubmit = ev => {
        console.log('buton apasat');
        const [clasa] = listaClase.filter(cls => cls.clasa===dropdownValue);
        const elevObj = {nume: firstName, prenume: lastName, clasa: clasa.id};
        Api.post(ELEVI_API, elevObj);
        setRefreshKey(uniqueId(REFRESH_KEY));
        // elevi.push({'firstName': firstName, 'lastName': lastName, 'className': dropdownValue});
        setFirstName("");
        setLastName("");
        ev.preventDefault();
    };

    const handleDropdownValue = ev => {
        console.log('ev', ev, ev.target, ev.target.innerHTML);
        setDropdownValue(ev.target.innerHTML);
        ev.preventDefault();
    }

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
                <Col>
                    <DropdownButton 
                        id="dropdown-basic-button" 
                        title={dropdownValue}
                        disabled={listaClase.length===0}
                    >
                        {listaClase.map((clasa, index) => <Dropdown.Item key={index} onClick={handleDropdownValue}>{clasa.clasa}</Dropdown.Item>)}
                    </DropdownButton>
                </Col>
                <Button 
                    variant="primary" 
                    type="submit"
                    disabled={listaClase.length===0 || dropdownValue==="Selectare Clasa"} 
                >
                    Adauga
                </Button>
            </Row>
           
        </Form>
    </>
    );
}
 
export default Adauga;