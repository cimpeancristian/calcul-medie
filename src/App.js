import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {REFRESH_KEY, ELEVI_API, CLASA_API} from './utils/constants';
import Api from './utils/api';

import {uniqueId} from 'lodash';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import AfisareElevi from './components/AfisareElevi';
import Adauga from './components/Adauga';
import AdddNote from './components/AdaugaNota';
import AddClass from './components/AdaugaClasa';

const App = () => {
  const [elevi, setElevi] = useState([]);
  const [clasa, setClasa] = useState([]);
  const [refreshKey, setRefreshKey] = useState(uniqueId(REFRESH_KEY));
  
  const addElevi = async () => {
      const response = await Api.get(ELEVI_API);
      response.status===200 && setElevi(response.data);
      console.log('elevi updated');
  };

  const addClass = async () => {
    const response = await Api.get(CLASA_API);
    response.status===200 && setClasa(response.data);
};

  console.log('abc', elevi);

  useEffect(() => {
    addElevi();
    addClass();
  }, [refreshKey]);


  return (
    <div className="App">
      <Router>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adauga">Adauga Elevi</Link>
            </li>
            <li>
              <Link to="/afisare">Afisare Elevi</Link>
            </li>
            <li>
              <Link to="/adauganota">Adauga Nota</Link>
            </li>
            <li>
              <Link to="/adaugaclasa">Adauga Clasa</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/adauga">
              <Adauga listaClase={clasa} setRefreshKey={setRefreshKey} />
            </Route>
            <Route path="/afisare">
              <AfisareElevi clasa={clasa} elevi={elevi} />
            </Route>
            <Route path="/adauganota">
              <AdddNote clasa={clasa} elevi={elevi} setRefreshKey={setRefreshKey} />
            </Route>
            <Route path="/adaugaclasa">
              <AddClass listaClase={clasa} setRefreshKey={setRefreshKey} />
            </Route>
          </Switch>
        </div>
    </Router>  
    </div>
  );
}

export default App;
