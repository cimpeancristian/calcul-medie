import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const elevi = [];
  const listaClase = [];

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
              <Adauga elevi={elevi} listaClase={listaClase} />
            </Route>
            <Route path="/afisare">
              <AfisareElevi clasa={listaClase} elevi={elevi} />
            </Route>
            <Route path="/adauganota">
              <AdddNote elevi={elevi} />
            </Route>
            <Route path="/adaugaclasa">
              <AddClass listaClase={listaClase} />
            </Route>
          </Switch>
        </div>
    </Router>  
    </div>
  );
}

export default App;
