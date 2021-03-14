import React from 'react';

import Table from 'react-bootstrap/Table';

const Afisare = ({elevi}) => {
 
  return (
    <>
        <h1>Afisare elevi</h1>
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
                {elevi.map((elev,index) => (
                    <tr key={index} >
                        <td>{index+1}</td>
                        <td>{elev.firstName}</td>
                        <td>{elev.lastName}</td>
                        <td>{elev.nota1? elev.nota1:'-'}</td>
                        <td>{elev.nota2? elev.nota2:'-'}</td>
                        <td>{elev.nota3? elev.nota3:'-'}</td>
                        <td>{elev.nota4? elev.nota4:'-'}</td>
                        <td>{elev.nota5? elev.nota5:'-'}</td>
                        <td>{elev.nota1||elev.nota2||elev.nota3||elev.nota4||elev.nota5 ? (parseFloat(elev.nota1?elev.nota1:0)+parseFloat(elev.nota2?elev.nota2:0)+
                        parseFloat(elev.nota3?elev.nota3:0)+ parseFloat(elev.nota4?elev.nota4:0)+parseFloat(elev.nota5?elev.nota5:0))/(
                            (elev.nota1?1:0)+(elev.nota2?1:0)+(elev.nota3?1:0)+(elev.nota4?1:0)+(elev.nota5?1:0)):'-'}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>);
}
 
export default Afisare;