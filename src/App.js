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
import Afisare from './components/Afisare';
import Adauga from './components/Adauga';
import AdddNote from './components/AdaugaNota';

const App = () => {
  const elevi = [];

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
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/adauga">
              <Adauga elevi={elevi} />
            </Route>
            <Route path="/afisare">
              <Afisare elevi={elevi} />
            </Route>
            <Route path="/adauganota">
              <AdddNote elevi={elevi} />
            </Route>
          </Switch>
        </div>
    </Router>  
    </div>
  );
}

export default App;
