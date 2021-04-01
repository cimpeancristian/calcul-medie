import React from 'react';

import './AdaugaNota.css';
import AdaugaElevi from './AdaugaElevi';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const AddNote = ({clasa, elevi, setRefreshKey}) => {
    
  return (
  <>
    <h2>Adauga Nota</h2>
    <Router>
        <div className="menu">
          <ul>
            {clasa.map((cls, index) => (
                <li key={index}>
                    <Link to={`/adauga/${cls.clasa}`}>{cls.clasa}</Link>
                </li>
            ))}  
          </ul>

          <Switch>
          {clasa.map((cls, index) => ( 
            <Route path={`/adauga/${cls.clasa}`} key={index}>
              <AdaugaElevi elevi={elevi} clasa={cls.clasa} setRefreshKey={setRefreshKey} />
            </Route>
           ))}
          </Switch>
        </div>
    </Router> 
  </>);
}
 
export default AddNote;