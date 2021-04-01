import React, {useState} from 'react';

import {generatePath} from 'react-router';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {NOTA_API, ELEVI_API_DELETE, REFRESH_KEY} from '../utils/constants';
import Api from '../utils/api';

import {uniqueId} from 'lodash';

import './Nota.css';

const Nota = ({elev, setRefreshKey}) => {
    const [nota1, setNota1] = useState(elev.nota1);
    const [nota2, setNota2] = useState(elev.nota2);
    const [nota3, setNota3] = useState(elev.nota3);
    const [nota4, setNota4] = useState(elev.nota4);
    const [nota5, setNota5] = useState(elev.nota5);
    const [enableEdit, setEnableEdit] = useState(false);
    const [errors, setErrors] = useState({});
    let isError = false;

     
    const handleSubmit = ev => {
        console.log('Adauga nota');
        const errorNota1 = validateNota(nota1, 'nota1');
        if(Object.keys(errorNota1).length > 0)  setErrors(errorNota1);

        const errorNota2 = validateNota(nota2, 'nota2');
        if(Object.keys(errorNota2).length > 0)  setErrors(errorNota2);
           
        const errorNota3 = validateNota(nota3, 'nota3');
        if(Object.keys(errorNota3).length > 0)  setErrors(errorNota3);

        const errorNota4 = validateNota(nota4, 'nota4');
        if(Object.keys(errorNota4).length > 0)  setErrors(errorNota4);

        const errorNota5 = validateNota(nota5, 'nota5');
        if(Object.keys(errorNota5).length > 0)  setErrors(errorNota5);

        const notaObj = {id: elev.id, nota1, nota2, nota3, nota4, nota5};
        
        console.log('isError', isError);
        
        if(!isError) {
            Api.put(NOTA_API, notaObj);
            setRefreshKey(uniqueId(REFRESH_KEY));
        }
       // setIsError(false);
        ev.preventDefault();
      };

   const handleOnClick = ev => {
       console.log(nota1, elev.nota1, enableEdit, !elev.nota1 && !enableEdit);
       setEnableEdit(true);
       ev.preventDefault();
   };
   
   const handleDelete = (id) => {
       console.log('delete button was clicked', id);
       Api.delete(generatePath(ELEVI_API_DELETE, {id}));
       setRefreshKey(uniqueId(REFRESH_KEY));
   }

   const validateNota = (nota, param) => {
    const newErrors = {};
    if (isNaN(nota)) newErrors[param]="Adauga un numar"; 
    if (nota < 0) newErrors[param]="Adauga un numar pozitiv";
    if (nota > 10) newErrors[param]="Nota maxima este 10";

    if(Object.keys(newErrors).length !== 0) {
        isError=true;
        console.log('error set', isError);
    }; 
    console.log(newErrors, isError);
    return newErrors;
  };


  return (
  <Form onSubmit={handleSubmit}>
  <Row>
      <Col>
          <div className="numePrenume">{`${elev.nume} ${elev.prenume}`}</div>
      </Col>
      <Col>
            {(enableEdit||!elev.nota1)? (
                <Form.Group>
                     <Form.Control 
                        value={nota1?nota1:''}
                        onChange={e=> setNota1(e.target.value)} 
                        isInvalid={!!errors.nota1}
                    />
                     <Form.Control.Feedback type='invalid'>
                        { errors.nota1 }
                    </Form.Control.Feedback>
                </Form.Group>
               ): (
                <div className='nota' onClick={handleOnClick} >{elev.nota1}</div>
            )} 
      </Col>
      <Col>
            {(enableEdit||!elev.nota2)? (<Form.Group>
                <Form.Control 
                    value={nota2?nota2:''}
                    onChange={e=> setNota2(e.target.value)}
                    isInvalid={!!errors.nota2} 
                />
                <Form.Control.Feedback type='invalid'>
                    { errors.nota2 }
                </Form.Control.Feedback>
            </Form.Group>
            ): (
                <div className='nota' onClick={handleOnClick} >{elev.nota2}</div>
            )} 
      </Col>
      <Col>
            {(enableEdit||!elev.nota3)? (
                <Form.Group>
                         <Form.Control 
                            value={nota3?nota3:''}
                            onChange={e=> setNota3(e.target.value)} 
                            isInvalid={!!errors.nota3} 
                        />
                         <Form.Control.Feedback type='invalid'>
                                { errors.nota3 }
                        </Form.Control.Feedback>
                </Form.Group>
               ): (
                <div className='nota' onClick={handleOnClick} >{elev.nota3}</div>
            )} 
      </Col>
      <Col>
            {(enableEdit||!elev.nota4)? (
                <Form.Group>
                     <Form.Control 
                        value={nota4?nota4:''}
                        onChange={e=> setNota4(e.target.value)} 
                        isInvalid={!!errors.nota4} 
                    />
                    <Form.Control.Feedback type='invalid'>
                                { errors.nota4 }
                    </Form.Control.Feedback>
                </Form.Group>
               ): (
                <div className='nota' onClick={handleOnClick} >{elev.nota4}</div>
            )}
      </Col>
      <Col>
            {(enableEdit||!elev.nota5)? (
                <Form.Group>
                     <Form.Control 
                        value={nota5?nota5:''}
                        onChange={e => setNota5(e.target.value)}
                        isInvalid={!!errors.nota5}  
                    />
                     <Form.Control.Feedback type='invalid'>
                                { errors.nota5 }
                    </Form.Control.Feedback>
                </Form.Group>
               ): (
                <div className='nota' onClick={handleOnClick} >{elev.nota5}</div>
            )}
      </Col>

      <Col>                   
        <Button 
            variant="primary" 
            type="submit"
            disabled={nota1==='' && nota2==='' && nota3==='' && nota4==='' && nota5===''}
        >
          Adauga
        </Button>
      </Col>
      <Col>
        <Button 
            variant="danger" 
            onClick={() => handleDelete(elev.id)} >
                Stergere
        </Button>
      </Col>
  </Row>
  
</Form>);
}
 
export default Nota;