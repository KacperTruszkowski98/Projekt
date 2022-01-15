import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FibCalc from './FibCalc';
import Docs from './Dokumentacja';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Kacper Truszkowski</h4>
          <h1>Realizacja zadania numer 1 </h1>
          <Link to="/">Strona glowna</Link>
          <Link to="/fibcalc">Kalkulator Fibonacciego</Link>
          <Link to="/docs">Dokumentacja</Link>
        <div>
          <Route path="/fibcalc" component={FibCalc} />
          <Route path="/docs" component={Docs} />
        </div>
        </header>

      </div>
    </Router>
  );
}

export default App;

