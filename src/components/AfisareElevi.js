import React from 'react';

import Afisare from './Afisare';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const AfisareElevi = ({clasa, elevi}) => {
 
  return (
    <>
        <h2>Afisare elevi</h2>
        <Router>
        <div className="menu">
          <ul>
            {clasa.map((cls, index) => (
                <li key={index}>
                    <Link to={`/afisare/${cls.clasa}`}>{cls.clasa}</Link>
                </li>
            ))}  
          </ul>

          <Switch>
          {clasa.map((cls, index) => ( 
            <Route path={`/afisare/${cls.clasa}`} key={index}>
              <Afisare elevi={elevi} clasa={cls.clasa} />
            </Route>
           ))}
          </Switch>
        </div>
    </Router>  
       
    </>);
}
 
export default AfisareElevi;