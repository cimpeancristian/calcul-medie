import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Nota = ({elev}) => {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [nota4, setNota4] = useState('');
    const [nota5, setNota5] = useState('');
     
    const handleSubmit = ev => {
        console.log('Adauga nota');
        if(nota1.length!==0) elev.nota1 = nota1;
        if(nota2.length!==0) elev.nota2 = nota2;
        if(nota3.length!==0) elev.nota3 = nota3;
        if(nota4.length!==0) elev.nota4 = nota4;
        if(nota5.length!==0) elev.nota5 = nota5;
        console.log()
        ev.preventDefault();
      };

  return (
  <Form onSubmit={handleSubmit}>
  <Row>
      <Col>
          <div>{`${elev.firstName} ${elev.lastName}`}</div>
      </Col>
      <Col> 
          <Form.Control 
              value={nota1}
              onChange={e=> setNota1(e.target.value)} 
          />
      </Col>
      <Col>
          <Form.Control 
              value={nota2}
              onChange={e=> setNota2(e.target.value)}
          />
      </Col>
      <Col>
          <Form.Control 
              value={nota3}
              onChange={e=> setNota3(e.target.value)} 
          />
      </Col>
      <Col>
          <Form.Control 
              value={nota4}
              onChange={e=> setNota4(e.target.value)}
          />
      </Col>
      <Col>
          <Form.Control 
              value={nota5}
              onChange={e=> setNota5(e.target.value)}
          />
      </Col>


      <Button variant="primary" type="submit" >
          Adauga
      </Button>
  </Row>
  
</Form>);
}
 
export default Nota;