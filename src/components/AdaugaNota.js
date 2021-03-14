import React from 'react';

import Nota from './Nota';

const AddNote = ({elevi}) => {
    
  return (<>
        <h1>Adauga Nota</h1>
        {elevi.map((elev, index) => (
            <Nota key={index} elev={elev} />      
            
        ))}
  </>);
}
 
export default AddNote;