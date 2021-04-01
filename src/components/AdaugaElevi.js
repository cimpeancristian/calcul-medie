import React from 'react';

import Nota from './Nota';

const AdaugaElevi = ({elevi, clasa, setRefreshKey}) => {
  console.log('elevi', elevi, clasa);
    
  return (<>
            {elevi.filter(elev=> elev.clasa===clasa).map((elev, index) => (
                    <Nota key={index} elev={elev} setRefreshKey={setRefreshKey} />      
                    
                ))}
        </>);
}
 
export default AdaugaElevi;