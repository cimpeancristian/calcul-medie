import React from 'react';

import Table from 'react-bootstrap/Table';

const Afisare = ({elevi, clasa}) => {
  console.log('elevi', elevi, clasa);
  let mediaGenerala = 0;
  let nrElevi = 0; 
  
  return (
  <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota 3</th>
                    <th>Nota 4</th>
                    <th>Nota 5</th>
                    <th>Media Generala</th>
                </tr>
            </thead>
            <tbody>
                {elevi.filter(elev=> elev.clasa===clasa).map((elev,index) => {
                    const media = (Math.round((parseFloat(elev.nota1?elev.nota1:0)+parseFloat(elev.nota2?elev.nota2:0)+
                    parseFloat(elev.nota3?elev.nota3:0)+ parseFloat(elev.nota4?elev.nota4:0)+parseFloat(elev.nota5?elev.nota5:0))/(
                        (elev.nota1?1:0)+(elev.nota2?1:0)+(elev.nota3?1:0)+(elev.nota4?1:0)+(elev.nota5?1:0)) * 100) / 100).toFixed(2);
                      
                    if(!isNaN(media)) {
                        mediaGenerala+=parseFloat(media);
                        nrElevi+=1;
                    }
                        
                    return (
                    <tr key={index} >
                        <td>{index+1}</td>
                        <td>{elev.nume}</td>
                        <td>{elev.prenume}</td>
                        <td>{elev.nota1? elev.nota1:'-'}</td>
                        <td>{elev.nota2? elev.nota2:'-'}</td>
                        <td>{elev.nota3? elev.nota3:'-'}</td>
                        <td>{elev.nota4? elev.nota4:'-'}</td>
                        <td>{elev.nota5? elev.nota5:'-'}</td>
                        <td>{elev.nota1||elev.nota2||elev.nota3||elev.nota4||elev.nota5 ? media:'-'}</td>       
                    </tr>
                )})}
            </tbody>
        </Table>
        <div>
            <strong>Media generala: {mediaGenerala===0? '': (mediaGenerala/nrElevi).toFixed(2)}</strong> 
        </div>
    </>);
}
 
export default Afisare;