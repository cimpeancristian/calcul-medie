import React from 'react';

import './AdaugaNota.css';

import Nota from './Nota';

const AddNote = ({elevi}) => {
    
  return (
  <>
    <h2>Adauga Nota</h2>
    {elevi.map((elev, index) => (
        <Nota key={index} elev={elev} />      
        
    ))}
  </>);
}
 
export default AddNote;