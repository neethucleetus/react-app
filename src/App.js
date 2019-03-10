import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppTitle} from './App/Title';
import NeethuApp from './App/NeethuApp';
import Calculators from './App/Calculator';
import Games from './App/Game';
class App extends Component {
  render() {
    return (
      <div className="App">
       <AppTitle name='Neethu app' />
       <NeethuApp/>

      </div>
    );
  }
}

export default App;
