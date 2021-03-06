import React from 'react';
import logo from './logo.svg';
import './App.css';
import { get } from 'lodash-es';
import Mettaton from './Mettaton';

function App() {
  var test = get({ data: 'value' }, 'data');
  return (
    <div className="App">
      <Mettaton />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {test}
        </a>
      </header>
    </div>
  );
}

export default App;
