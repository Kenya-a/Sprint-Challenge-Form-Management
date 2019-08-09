import React from 'react';
import logo from './logo.svg';
import './App.css';

import RegristrationForm from './components/RegristrationForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RegristrationForm/>
      </header>
    </div>
  );
}

export default App;
