import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { list } from 'postcss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers:['Iron-man','Black-widow','Hawkeye',"Hulk",'Thor']
    };
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avengers: by Ben Tsao
          </a>
        <ul>
          {this.state.avengers.map((avenger, i) => <li key={i}>{avenger}</li> )}
        </ul>
        </header>
      </div>
    );
  }
}

export default App;
