import React from 'react';
import logo from './logo.svg';
import './components/Hero';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test String
        </a>
        <button onClick="alert('Hi');">Click me</button>
      </header>
    </div>
  );
}

export default App;
