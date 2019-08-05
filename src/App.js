import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="w3-sidebar w3-bar-block" style="width:25%">
          <a href="#" class="w3-bar-item w3-button">Link 1</a>
          <a href="#" class="w3-bar-item w3-button">Link 2</a>
          <a href="#" class="w3-bar-item w3-button">Link 3</a>
        </div>

        <div style="margin-left:25%">
        ... page content ...
        </div> 
      </header>
    </div>
  );
}

export default App;
